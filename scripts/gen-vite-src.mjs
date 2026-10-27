/**
 * Gera a árvore de source ESM para o Vite a partir do debundle canônico
 * (source-game/manifest.json + source-game/modules/*.js).
 *
 * Cada módulo webpack `function(e, t, i) {...}` vira um arquivo ESM:
 *     export default function (e, t, i) { ... }
 *
 * Um `main.js` reconstrói o runtime webpack (igual a webpack-runtime-factory.js)
 * e executa `t(0)`, preservando exatamente a semântica original (cache singleton,
 * require lazy, dependências circulares). Nenhum import entre módulos é circular —
 * toda referência inter-módulo passa pelo require do runtime — então embrulhar
 * como ESM é fiel ao comportamento do bundle.
 *
 * Saída: game-src/  (fonte de verdade editável; alvo da de-minificação)
 */
import { mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const SRC_DIR = join(ROOT, 'source-game')
const MANIFEST = join(SRC_DIR, 'manifest.json')
const OUT_DIR = join(ROOT, 'game-src')
const OUT_MODULES = join(OUT_DIR, 'modules')

function main() {
  if (!existsSync(MANIFEST)) {
    console.error(`manifest.json não encontrado: ${MANIFEST}`)
    process.exit(1)
  }

  const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'))
  const mods = manifest.modules

  // Limpa apenas a pasta modules/ gerada (preserva edições manuais em main/config).
  if (existsSync(OUT_MODULES)) rmSync(OUT_MODULES, { recursive: true, force: true })
  mkdirSync(OUT_MODULES, { recursive: true })

  let empties = 0
  for (const mod of mods) {
    const id = mod.id
    const target = join(OUT_MODULES, `${id}.js`)

    if (mod.empty) {
      writeFileSync(target, `// webpack module ${id} (empty slot)\nexport default null\n`, 'utf8')
      empties++
      continue
    }

    const srcPath = join(SRC_DIR, mod.file)
    let body = readFileSync(srcPath, 'utf8').replace(/\s+$/, '')
    // body começa com `function(e, t, i) {...}` — transforma em default export.
    writeFileSync(
      target,
      `// webpack module ${id}\nexport default ${body}\n`,
      'utf8',
    )
  }

  // Índice: importa cada módulo e monta o array indexado por id.
  const n = mods.length
  let idx = '// AUTO-GERADO por scripts/gen-vite-src.mjs — não editar à mão.\n'
  for (let i = 0; i < n; i++) idx += `import m${i} from './modules/${i}.js'\n`
  idx += `\nconst modules = [\n`
  for (let i = 0; i < n; i++) idx += `  m${i},\n`
  idx += `]\n\nexport default modules\n`
  writeFileSync(join(OUT_DIR, 'modules-index.js'), idx, 'utf8')

  console.log(`Gerados ${n} módulos (${empties} vazios) em ${OUT_MODULES}`)
  console.log(`Índice: ${join(OUT_DIR, 'modules-index.js')}`)
}

main()
