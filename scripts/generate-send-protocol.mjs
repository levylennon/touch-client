/**
 * Scans source-game/modules for .sendMessage("Name", payload) and emits
 * TypeScript classes + interfaces under outputProtocol/send/
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "@babel/parser";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MODULES = path.join(ROOT, "source-game", "modules");
const OUT = path.join(ROOT, "outputProtocol", "send");

function visit(node, fn) {
  if (!node || typeof node !== "object") return;
  fn(node);
  for (const k of Object.keys(node)) {
    if (k === "loc" || k === "range" || k === "errors" || k === "comments") continue;
    const v = node[k];
    if (Array.isArray(v)) {
      for (const c of v) visit(c, fn);
    } else if (v && typeof v === "object" && v.type) {
      visit(v, fn);
    }
  }
}

function isSendMessageCallee(callee) {
  if (callee?.type !== "MemberExpression") return false;
  const prop = callee.property;
  if (!callee.computed && prop.type === "Identifier" && prop.name === "sendMessage") return true;
  if (callee.computed && prop.type === "StringLiteral" && prop.value === "sendMessage") return true;
  return false;
}

function literalToTsType(node) {
  if (!node) return "unknown";
  switch (node.type) {
    case "StringLiteral":
      return "string";
    case "NumericLiteral":
      return "number";
    case "BooleanLiteral":
      return "boolean";
    case "NullLiteral":
      return "null";
    case "ObjectExpression":
      return "Record<string, unknown>";
    case "ArrayExpression":
      return "unknown[]";
    default:
      return "unknown";
  }
}

function objectKeysFromExpression(node) {
  if (node.type !== "ObjectExpression") return null;
  const keys = new Map();
  for (const p of node.properties) {
    if (p.type === "SpreadElement") {
      keys.set("__spread__", "true");
      continue;
    }
    if (p.type !== "ObjectProperty" && p.type !== "ObjectMethod") continue;
    if (p.computed) {
      keys.set("[computed]", "unknown");
      continue;
    }
    const name =
      p.key.type === "Identifier"
        ? p.key.name
        : p.key.type === "StringLiteral"
          ? p.key.value
          : null;
    if (!name) continue;
    const val = p.type === "ObjectProperty" ? p.value : null;
    keys.set(name, literalToTsType(val));
  }
  return keys;
}

function mergeKeyTypes(into, from) {
  if (!from) return;
  for (const [k, t] of from) {
    if (k === "__spread__") {
      into.hasSpread = true;
      continue;
    }
    if (!into.props[k]) into.props[k] = new Set();
    into.props[k].add(t);
  }
}

function parseFile(filePath) {
  const code = fs.readFileSync(filePath, "utf8").trim();
  if (!code) return null;
  const wrapped = `(${code})`;
  try {
    return parse(wrapped, {
      sourceType: "script",
      allowReturnOutsideFunction: true,
      errorRecovery: true,
      plugins: ["objectRestSpread", "optionalChaining", "nullishCoalescingOperator"],
    });
  } catch {
    return null;
  }
}

function main() {
  /** @type {Map<string, { props: Record<string, Set<string>>, hasSpread: boolean, noPayload: boolean, nullPayload: boolean, unknownPayload: boolean }>} */
  const byMessage = new Map();

  function ensure(name) {
    if (!byMessage.has(name)) {
      byMessage.set(name, {
        props: Object.create(null),
        hasSpread: false,
        noPayload: false,
        nullPayload: false,
        unknownPayload: false,
      });
    }
    return byMessage.get(name);
  }

  function listJsFiles(dir, acc = []) {
    if (!fs.existsSync(dir)) return acc;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) listJsFiles(p, acc);
      else if (ent.name.endsWith(".js")) acc.push(p);
    }
    return acc;
  }

  const files = listJsFiles(MODULES);
  for (const file of files) {
    const ast = parseFile(file);
    if (!ast) continue;
    visit(ast, (node) => {
      if (node.type !== "CallExpression") return;
      if (!isSendMessageCallee(node.callee)) return;
      const args = node.arguments;
      if (args.length < 1) return;
      const nameNode = args[0];
      if (nameNode.type !== "StringLiteral") return;
      const msgName = nameNode.value;
      if (!msgName) return;
      const bucket = ensure(msgName);
      if (args.length < 2) {
        bucket.noPayload = true;
        return;
      }
      const payload = args[1];
      if (payload.type === "NullLiteral") {
        bucket.nullPayload = true;
        return;
      }
      if (payload.type === "ObjectExpression") {
        const keys = objectKeysFromExpression(payload);
        mergeKeyTypes(bucket, keys);
        return;
      }
      bucket.unknownPayload = true;
    });
  }

  fs.mkdirSync(OUT, { recursive: true });

  const names = [...byMessage.keys()].sort();

  for (const msgName of names) {
    const b = byMessage.get(msgName);
    const base = msgName.replace(/Message$/, "") || msgName;
    const className = base.replace(/[^a-zA-Z0-9_]/g, "_");
    const fileBase = className;
    const ifaceName = `${className}Payload`;

    const namedKeys = Object.keys(b.props)
      .filter((k) => k !== "[computed]")
      .sort();
    const hasComputed = Boolean(b.props["[computed]"]);
    const needsIndex = b.hasSpread || hasComputed;
    const hasNamedProps = namedKeys.length > 0;

    const namedPropLines = [];
    for (const k of namedKeys) {
      const types = [...b.props[k]];
      const ts = types.length === 1 ? types[0] : types.join(" | ");
      const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
      namedPropLines.push(`  ${safeKey}?: ${ts};`);
    }

    const wantsOpenShape =
      needsIndex || b.unknownPayload || (b.nullPayload && b.unknownPayload);

    /** @type {string[]} */
    let interfaceInner = [];

    if (hasNamedProps && wantsOpenShape) {
      if (needsIndex) {
        namedPropLines.push(`  // extra keys from spread or computed property`);
      }
      interfaceInner = [...namedPropLines, `  [key: string]: unknown;`];
    } else if (hasNamedProps) {
      interfaceInner = [...namedPropLines];
    } else if (wantsOpenShape) {
      interfaceInner = [`  [key: string]: unknown;`];
    } else {
      interfaceInner = [];
    }

    const lines = [];
    lines.push("/**");
    lines.push(` * ${msgName} — generated from touch-client source-game/modules scan`);
    lines.push(" * Payload shape is inferred from sendMessage() call sites (may be incomplete).");
    if (b.unknownPayload && hasNamedProps) {
      lines.push(" * Payload may include fields not listed here.");
    }
    if (b.nullPayload && !hasNamedProps && !wantsOpenShape) {
      lines.push(" * On wire: pass null as the second argument to sendMessage.");
    }
    if (b.noPayload && !b.nullPayload && !b.unknownPayload && !hasNamedProps) {
      lines.push(" * On wire: omit payload or pass undefined as the second argument to sendMessage.");
    }
    lines.push(" */");
    lines.push("");
    lines.push(`export const ${className}MessageType = ${JSON.stringify(msgName)} as const;`);
    lines.push("");

    lines.push(`export interface ${ifaceName} {`);
    lines.push(...interfaceInner);
    lines.push("}");
    lines.push("");
    lines.push(`export class ${className}Send implements ${ifaceName} {`);
    lines.push(`  _messageType = ${JSON.stringify(msgName)} as const;`);
    lines.push(...interfaceInner);
    lines.push("  _isInitialized = false;");
    lines.push("");
    lines.push(`  constructor(data: Partial<${ifaceName}> = {}) {`);
    lines.push("    Object.assign(this, data);");
    lines.push(`    this._messageType = ${JSON.stringify(msgName)} as const;`);
    lines.push("    this._isInitialized = true;");
    lines.push("  }");
    lines.push("");
    lines.push(`  /** Plain object for sendMessage second argument (payload only). */`);
    lines.push(`  toData(): ${ifaceName} {`);
    lines.push("    const self = this as unknown as Record<string, unknown>;");
    lines.push("    const o = { ...self };");
    lines.push("    delete o._messageType;");
    lines.push("    delete o._isInitialized;");
    lines.push("    return o as " + ifaceName + ";");
    lines.push("  }");
    lines.push("}");

    const outFile = path.join(OUT, `${fileBase}Send.ts`);
    fs.writeFileSync(outFile, lines.join("\n") + "\n", "utf8");
  }

  // Use .ts extension in source; barrel without .js for TS projects — use .ts paths
  const barrel = [
    "/** Auto-generated: re-exports all send-message helpers. */",
    "",
    ...names.map((msgName) => {
      const base = msgName.replace(/Message$/, "") || msgName;
      const className = base.replace(/[^a-zA-Z0-9_]/g, "_");
      return `export * from "./${className}Send";`;
    }),
    "",
  ].join("\n");
  fs.writeFileSync(path.join(OUT, "index.ts"), barrel, "utf8");

  console.log(`Wrote ${names.length} files to ${OUT}`);
}

main();
