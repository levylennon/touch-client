/**
 * Static scan: .on("…Message", handler) and optional map event;
 * infers payload paths from handler bodies. Emits outputProtocol/receive/
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "@babel/parser";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MODULES = path.join(ROOT, "source-game", "modules");
const OUT = path.join(ROOT, "outputProtocol", "receive");

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

function isOnCallee(callee) {
  if (callee?.type !== "MemberExpression") return false;
  if (callee.computed) return false;
  const prop = callee.property;
  return prop.type === "Identifier" && prop.name === "on";
}

function eventNameFromArg(arg) {
  if (arg?.type !== "StringLiteral") return null;
  const v = arg.value;
  if (typeof v !== "string") return null;
  if (v === "mapComplementaryInformationsData") return v;
  if (v.endsWith("Message")) return v;
  return null;
}

/** Collect n.prototype.foo = function(...) {} */
function buildPrototypeMethodMap(ast) {
  const map = new Map();
  visit(ast, (node) => {
    if (node.type !== "AssignmentExpression") return;
    const { left, right } = node;
    if (left.type !== "MemberExpression") return;
    if (left.object?.type !== "MemberExpression") return;
    if (left.object.computed || left.object.property?.name !== "prototype") return;
    if (left.property?.type !== "Identifier") return;
    const methodName = left.property.name;
    if (right.type === "FunctionExpression" || right.type === "ArrowFunctionExpression") {
      map.set(methodName, right);
    }
  });
  return map;
}

function unwrapHandler(handler, prototypeMap) {
  if (!handler) return null;
  if (handler.type === "FunctionExpression" || handler.type === "ArrowFunctionExpression") {
    return handler;
  }
  if (handler.type === "CallExpression") {
    const ce = handler.callee;
    if (ce?.type === "MemberExpression" && !ce.computed && ce.property?.name === "bind") {
      return unwrapHandler(ce.object, prototypeMap);
    }
  }
  if (handler.type === "MemberExpression" && handler.object?.type === "ThisExpression" && handler.property?.type === "Identifier") {
    return prototypeMap.get(handler.property.name) || null;
  }
  return null;
}

function extractPathsFromFunction(fnNode) {
  const paths = new Set();
  if (!fnNode?.params?.length) return paths;
  const p0 = fnNode.params[0];
  if (p0.type !== "Identifier") return paths;
  const paramName = p0.name;

  const body = fnNode.body;
  if (!body) return paths;

  visit(body, (node) => {
    if (node.type !== "MemberExpression") return;
    const chain = [];
    let cur = node;
    while (cur?.type === "MemberExpression") {
      if (cur.computed) {
        if (cur.property.type === "StringLiteral") chain.unshift(String(cur.property.value));
        else {
          chain.length = 0;
          chain.push("__dynamic__");
          break;
        }
      } else if (cur.property.type === "Identifier") {
        chain.unshift(cur.property.name);
      } else {
        return;
      }
      cur = cur.object;
    }
    if (cur?.type !== "Identifier" || cur.name !== paramName) return;
    if (chain[0] === "__dynamic__") {
      paths.add("*");
      return;
    }
    if (chain.length === 0) return;
    paths.add(chain.join("."));
  });

  return paths;
}

function addPath(tree, parts, depth = 0) {
  if (depth >= parts.length) return;
  const key = parts[depth];
  if (!tree[key]) tree[key] = { __children: {}, __leaf: false };
  if (depth === parts.length - 1) {
    tree[key].__leaf = true;
  } else {
    addPath(tree[key].__children, parts, depth + 1);
  }
}

function treeHasChildren(node) {
  return Object.keys(node.__children || {}).length > 0;
}

function emitInterfaceBlock(childTree, indent) {
  const lines = [];
  const keys = Object.keys(childTree).sort();
  for (const k of keys) {
    const node = childTree[k];
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
    const hasChild = treeHasChildren(node);
    if (hasChild) {
      lines.push(`${indent}${safeKey}?: {`);
      lines.push(...emitInterfaceBlock(node.__children, indent + "  "));
      lines.push(`${indent}};`);
    } else if (node.__leaf) {
      lines.push(`${indent}${safeKey}?: unknown;`);
    }
  }
  return lines;
}

function emitInterfaceFields(tree, indent) {
  return emitInterfaceBlock(tree, indent);
}

function pathsToTree(paths) {
  const root = {};
  for (const p of paths) {
    if (p === "*") return null;
    addPath(root, p.split("."));
  }
  return root;
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

function messageToBaseName(msg) {
  if (msg === "mapComplementaryInformationsData") return "MapComplementaryInformationsData";
  return msg.replace(/Message$/, "") || msg;
}

function main() {
  /** @type {Map<string, Set<string>>} */
  const byEvent = new Map();

  function note(event, paths) {
    if (!byEvent.has(event)) byEvent.set(event, new Set());
    const s = byEvent.get(event);
    for (const p of paths) s.add(p);
  }

  const files = listJsFiles(MODULES);
  for (const file of files) {
    const ast = parseFile(file);
    if (!ast) continue;
    const prototypeMap = buildPrototypeMethodMap(ast);

    visit(ast, (node) => {
      if (node.type !== "CallExpression") return;
      if (!isOnCallee(node.callee)) return;
      const evt = eventNameFromArg(node.arguments[0]);
      if (!evt) return;
      const handler = node.arguments[1];
      const fn = unwrapHandler(handler, prototypeMap);
      if (!fn) {
        note(evt, []);
        return;
      }
      const paths = extractPathsFromFunction(fn);
      note(evt, paths);
    });
  }

  fs.mkdirSync(OUT, { recursive: true });
  const names = [...byEvent.keys()].sort();

  for (const msgName of names) {
    const paths = byEvent.get(msgName);
    const base = messageToBaseName(msgName);
    const className = base.replace(/[^a-zA-Z0-9_]/g, "_");
    const ifaceName = `${className}Payload`;

    const lines = [];
    lines.push("/**");
    lines.push(` * ${msgName} — inferred from .on("${msgName}", …) handlers in touch-client modules`);
    lines.push(" * Fields are partial (only properties read in those handlers).");
    lines.push(" */");
    lines.push("");
    lines.push(`export const ${className}EventName = ${JSON.stringify(msgName)} as const;`);
    lines.push("");

    const hasWildcard = paths.has("*");
    const pathList = [...paths].filter(
      (p) => p !== "*" && p !== "_messageType" && !p.startsWith("_messageType."),
    );

    /** @type {string[]} lines inside interface { } */
    let interfaceInner = [];
    let useIndexSignature = false;

    if (hasWildcard || pathList.length === 0) {
      useIndexSignature = true;
      interfaceInner = ["  [key: string]: unknown;"];
    } else {
      const tree = pathsToTree(pathList);
      if (tree === null) {
        useIndexSignature = true;
        interfaceInner = ["  [key: string]: unknown;"];
      } else {
        interfaceInner = emitInterfaceFields(tree, "  ");
      }
    }

    lines.push(`export interface ${ifaceName} {`);
    lines.push(...interfaceInner);
    lines.push("}");
    lines.push("");
    lines.push(`export class ${className}Receive implements ${ifaceName} {`);
    lines.push(`  _messageType = ${JSON.stringify(msgName)} as const;`);
    if (useIndexSignature) {
      lines.push("  [key: string]: unknown;");
    } else {
      lines.push(...interfaceInner);
    }
    lines.push("  _isInitialized = false;");
    lines.push("");
    lines.push(`  constructor(data: Partial<${ifaceName}> = {}) {`);
    lines.push("    Object.assign(this, data);");
    lines.push(`    this._messageType = ${JSON.stringify(msgName)} as const;`);
    lines.push("    this._isInitialized = true;");
    lines.push("  }");
    lines.push("}");

    fs.writeFileSync(path.join(OUT, `${className}Receive.ts`), lines.join("\n") + "\n", "utf8");
  }

  const barrel = [
    "/** Auto-generated: received message shapes (partial) from module scan. */",
    "",
    ...names.map((msgName) => {
      const base = messageToBaseName(msgName);
      const className = base.replace(/[^a-zA-Z0-9_]/g, "_");
      return `export * from "./${className}Receive";`;
    }),
    "",
  ].join("\n");
  fs.writeFileSync(path.join(OUT, "index.ts"), barrel, "utf8");

  console.log(`Wrote ${names.length} files to ${OUT}`);
}

main();
