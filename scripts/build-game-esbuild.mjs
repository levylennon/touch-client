/**
 * Bundla o jogo (game-src/) num IIFE clássico único -> appData/game/build/script.js
 *
 * Por que esbuild e não `vite build`?
 *   O caminho de produção do Vite (Rollup) corrompe strings que contêm `$&`/`$$`
 *   (ex.: a função escape-regex do módulo 173, "\\$&") ao inserir a diretiva
 *   "use strict" via String.replace — o `$&` é interpretado como "o trecho casado".
 *   esbuild (o próprio motor de transform do Vite) preserva o código fielmente.
 *
 * Fluxo: game-src/modules/*.js é a FONTE DE VERDADE editável (alvo da
 * de-minificação). NÃO rode gen-vite-src.mjs de novo — ele sobrescreve estes
 * arquivos a partir do debundle bruto. Edite game-src/modules e rode este build.
 *
 * Uso:
 *   node scripts/build-game-esbuild.mjs            # build dev (legível + sourcemap)
 *   node scripts/build-game-esbuild.mjs --watch    # rebuild incremental
 *   node scripts/build-game-esbuild.mjs --prod     # minificado, sem sourcemap
 */
import { build, context } from 'esbuild'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const watch = process.argv.includes('--watch')
const prod = process.argv.includes('--prod')

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: [join(ROOT, 'game-src', 'main.js')],
  bundle: true,
  format: 'iife',
  globalName: 'dofusGame',
  target: 'es2015',
  treeShaking: false, // módulos referenciados por índice no array do runtime
  minify: prod,
  sourcemap: prod ? false : true,
  outfile: join(ROOT, 'appData', 'game', 'build', 'script.js'),
  legalComments: 'inline',
  logLevel: 'error', // silencia os avisos esperados de `eval` (módulo 133)
  logLimit: 0,
}

async function main() {
  if (watch) {
    const ctx = await context(options)
    await ctx.watch()
    console.log('[build-game] watch ativo — editando game-src/ rebuilda script.js')
  } else {
    const t0 = Date.now()
    const res = await build(options)
    const ms = Date.now() - t0
    const errs = res.errors.length
    console.log(
      `[build-game] ${prod ? 'PROD' : 'DEV'} build em ${ms}ms` +
        (errs ? ` (${errs} erros)` : ' OK') +
        ` -> appData/game/build/script.js`,
    )
    if (errs) process.exit(1)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
