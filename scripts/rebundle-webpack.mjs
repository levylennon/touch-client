/**
 * Reconstrói um único bundle Webpack a partir de dist/webpack-debundle/
 * (webpack-runtime-factory.js + modules/*.js + manifest.json).
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
} from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const DEFAULT_DIR = join(ROOT, 'source-game')
const DEFAULT_OUT = join(ROOT, 'source-game', 'script.js')

/** Original starts with "! " before the factory function */
const BUNDLE_PREFIX = '! '

function parseArgs(argv) {
  let dir = DEFAULT_DIR
  let out = DEFAULT_OUT
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === '--in' && argv[i + 1]) {
      dir = argv[++i]
    } else if (argv[i] === '--out' && argv[++i]) {
      out = argv[++i]
    }
  }
  return { dir, out }
}

function resolveSeparators(manifest, dir) {
  const n = manifest.moduleCount
  if (
    Array.isArray(manifest.separators) &&
    manifest.separators.length === n - 1
  ) {
    return manifest.separators
  }
  const sourcePath = manifest.sourceFile
  if (sourcePath && existsSync(sourcePath)) {
    const code = readFileSync(sourcePath, 'utf8')
    const out = []
    for (let i = 0; i < manifest.modules.length - 1; i++) {
      out.push(
        code.slice(manifest.modules[i].end, manifest.modules[i + 1].start),
      )
    }
    return out
  }
  console.warn(
    'manifest.separators missing and sourceFile unavailable; using ", " between modules (byte-identical rebuild not guaranteed). Re-run npm run debundle.',
  )
  return Array(n - 1).fill(', ')
}

function main() {
  const { dir, out } = parseArgs(process.argv)
  const manifestPath = join(dir, 'manifest.json')
  const runtimePath = join(dir, 'webpack-runtime-factory.js')

  if (!existsSync(manifestPath)) {
    console.error(`manifest.json not found: ${manifestPath}`)
    console.error('Run npm run debundle first.')
    process.exit(1)
  }
  if (!existsSync(runtimePath)) {
    console.error(`webpack-runtime-factory.js not found: ${runtimePath}`)
    process.exit(1)
  }

  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  const runtime = readFileSync(runtimePath, 'utf8').replace(/\s+$/, '')
  const separators = resolveSeparators(manifest, dir)

  const chunks = []
  for (const mod of manifest.modules) {
    const filePath = join(dir, mod.file)
    if (!existsSync(filePath)) {
      console.error(`Missing module file: ${filePath}`)
      process.exit(1)
    }
    let src = readFileSync(filePath, 'utf8').replace(/\s+$/, '')
    if (mod.empty && src === '// [empty slot]') {
      src = ''
    }
    chunks.push(src)
  }

  let body = BUNDLE_PREFIX + runtime + '(['
  for (let i = 0; i < chunks.length; i++) {
    body += chunks[i]
    if (i < chunks.length - 1) {
      body += separators[i]
    }
  }
  body += ']);'

  writeFileSync(out, body, 'utf8')
  console.log(`Wrote ${out} (${body.length} bytes, ${chunks.length} modules)`)
}

main()
