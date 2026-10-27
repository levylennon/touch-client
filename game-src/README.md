# game-src — fonte de verdade do cliente do jogo

Source ESM editável do cliente Dofus Touch, derivada do debundle webpack em
`source-game/`. **Esta pasta é o alvo da de-minificação** — edite os módulos aqui.

## Arquitetura

- `modules/N.js` — um módulo webpack por arquivo, como `export default function (e, t, i) {…}`.
  Os módulos **não importam uns aos outros**; toda referência inter-módulo passa
  pelo `require` do runtime (`i(N)`), então não há imports circulares — embrulhar
  como ESM é fiel ao bundle original.
- `modules-index.js` — AUTO-GERADO. Importa todos os módulos no array `modules[]`.
- `main.js` — reconstrói o runtime webpack (cache singleton, require lazy) e dá
  bootstrap em `t(0)`. Equivalente a `source-game/webpack-runtime-factory.js`.

## Build

```bash
npm run build:game-src         # dev: legível + sourcemap -> appData/game/build/script.js
npm run build:game-src:prod    # produção: minificado, sem sourcemap
npm run watch:game-src         # rebuild incremental ao salvar
```

O loader `appData/game/index.html` carrega `build/script.js` como `<script>`
clássico (IIFE), por isso o bundle é IIFE e não ESM.

## Bundler: esbuild (não `vite build`)

O caminho de produção do Vite (Rollup) **corrompe** strings com `$&`/`$$` (ex.: a
função escape-regex do módulo 173, `"\\$&"`) ao inserir `"use strict"`. Usamos
esbuild — o próprio motor de transform do Vite — que preserva o código fielmente.

## Bootstrap (uma vez)

`npm run gen:game-src` regenera `modules/` a partir de `source-game/` bruto.
**Não rode depois de começar a de-minificar** — ele sobrescreve suas edições.
`source-game/` permanece como a referência pristina + caminho de rebundle textual.
