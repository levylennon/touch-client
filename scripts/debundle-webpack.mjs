/**
 * Extrai o array de módulos de um bundle Webpack (formato !function(...)([...]);)
 * para ficheiros separados em dist/webpack-debundle/modules/.
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { parse } from '@babel/parser'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const DEFAULT_INPUT = join(ROOT, 'appData', 'game', 'build', 'script.js')
const DEFAULT_OUT = join(ROOT, 'source-game', 'webpack-debundle')

function parseArgs(argv) {
  let input = DEFAULT_INPUT
  let out = DEFAULT_OUT
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--input' && argv[i + 1]) {
      input = argv[++i]
    } else if (argv[i] === '--out' && argv[++i]) {
      out = argv[++i]
    }
  }
  return { input, out }
}

function main() {
  const { input, out } = parseArgs(process.argv)

  if (!existsSync(input)) {
    console.error(`Input not found: ${input}`)
    process.exit(1)
  }

  console.log(`Reading ${input}…`)
  const code = readFileSync(input, 'utf8')

  console.log('Parsing AST (Babel)…')
  const ast = parse(code, {
    sourceType: 'script',
    ranges: true,
    allowReturnOutsideFunction: true,
  })

  const stmt = ast.program.body[0]
  if (!stmt || stmt.type !== 'ExpressionStatement') {
    console.error('Expected ExpressionStatement as first statement')
    process.exit(1)
  }

  let root = stmt.expression
  if (root.type === 'UnaryExpression' && root.operator === '!') {
    root = root.argument
  }
  if (root.type !== 'CallExpression') {
    console.error('Expected CallExpression (Webpack bundle root)')
    process.exit(1)
  }

  const arr = root.arguments[0]
  if (!arr || arr.type !== 'ArrayExpression') {
    console.error('Expected first argument to be ArrayExpression (module array)')
    process.exit(1)
  }

  const modulesDir = join(out, 'modules')
  mkdirSync(modulesDir, { recursive: true })

  const manifest = {
    sourceFile: input.replace(/\\/g, '/'),
    moduleCount: arr.elements.length,
    extractedAt: new Date().toISOString(),
    modules: [],
  }

  const runtimeSource = code.slice(root.callee.start, root.callee.end)

  writeFileSync(join(out, 'webpack-runtime-factory.js'), runtimeSource, 'utf8')
  console.log(`Wrote webpack-runtime-factory.js (${runtimeSource.length} chars)`)

  for (let i = 0; i < arr.elements.length; i++) {
    const el = arr.elements[i]
    const fileName = `${i}.js`
    const relPath = `modules/${fileName}`

    if (!el) {
      writeFileSync(join(modulesDir, fileName), '// [empty slot]\n', 'utf8')
      manifest.modules.push({ id: i, file: relPath, empty: true })
      continue
    }

    const slice = code.slice(el.start, el.end)
    writeFileSync(join(modulesDir, fileName), slice + '\n', 'utf8')
    manifest.modules.push({
      id: i,
      file: relPath,
      empty: false,
      start: el.start,
      end: el.end,
    })
  }

  /** Text between module i and i+1 in the original bundle (comma, newline, etc.) */
  const separators = []
  for (let i = 0; i < arr.elements.length - 1; i++) {
    const a = arr.elements[i]
    const b = arr.elements[i + 1]
    if (!a || !b) {
      separators.push(', ')
    } else {
      separators.push(code.slice(a.end, b.start))
    }
  }
  manifest.separators = separators

  writeFileSync(join(out, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8')

  console.log(`Done: ${arr.elements.length} modules → ${modulesDir}`)
  console.log(`Manifest: ${join(out, 'manifest.json')}`)
}

main()
