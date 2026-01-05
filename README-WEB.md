# Lindo - Versão Web

Esta é a versão adaptada do Lindo para rodar no navegador como um site web.

## Diferenças da Versão Electron

- **Servidor Web**: Usa Express.js em vez do processo main do Electron
- **Comunicação**: HTTP/EventSource em vez de IPC do Electron
- **Armazenamento**: Arquivos JSON em vez de electron-store
- **Interface**: Mesma interface React, mas sem dependências do Electron

## Como Executar

### Desenvolvimento

```bash
# Instalar dependências (se ainda não instalou)
yarn install

# Iniciar servidor web e renderer em modo desenvolvimento
yarn dev:web
```

Isso irá:
1. Iniciar o servidor Express na porta 3000 (ou próxima disponível)
2. Iniciar o Vite dev server para o renderer
3. Compilar o preload web
4. Executar o typesafe-i18n

Acesse `http://localhost:3000/renderer/index.html` no seu navegador.

### Build para Produção

```bash
# Compilar tudo
yarn build:web

# Iniciar servidor de produção
yarn start:web
```

## Estrutura

- `packages/web-server/` - Servidor Express que substitui o processo main do Electron
- `packages/preload/web-index.ts` - Preload adaptado para web (sem Electron APIs)
- `packages/renderer/` - Interface React (mesma da versão Electron)

## APIs Disponíveis

O servidor expõe as seguintes rotas:

- `GET /api/state` - Obter estado inicial do store
- `POST /api/patch` - Aplicar patch ao store
- `GET /api/patch-stream` - Stream de patches (Server-Sent Events)
- `GET /api/game-context` - Obter contexto do jogo
- `POST /api/game-info` - Informações do jogo
- `POST /api/character-image` - Salvar imagem de personagem
- `POST /api/multi-account/*` - Rotas de multi-conta
- `POST /api/reset-store` - Resetar store
- `POST /api/reset-game-data` - Resetar dados do jogo
- `POST /api/clear-cache` - Limpar cache
- `POST /api/audio-mute` - Mutar/desmutar áudio
- `POST /api/log` - Logging do cliente

## Arquivos Estáticos

O servidor serve os seguintes diretórios:

- `/game` - Arquivos do jogo Dofus Touch
- `/renderer` - Interface React
- `/character-images` - Imagens de personagens
- `/changelog` - Changelog

## Notas

- A versão web não suporta todas as funcionalidades da versão Electron (ex: atalhos globais, protocol handlers)
- O armazenamento é feito em arquivos JSON em `appData/storage/`
- Logs são salvos em `appData/logs/` (ou `logs/` na raiz)
