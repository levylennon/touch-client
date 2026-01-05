# Como Criar o APK do Dofus Touch

Este guia explica como criar um APK Android a partir do projeto web.

## Pré-requisitos

1. **Node.js** (versão 16 ou superior)
2. **Java JDK** (versão 17 ou superior - recomendado Java 17 LTS)
3. **Android Studio** instalado com:
   - Android SDK
   - Android SDK Platform-Tools
   - Gradle

## Instalação

1. Instale as dependências do projeto:
```bash
yarn install
```

2. Instale o Capacitor CLI globalmente (opcional, mas recomendado):
```bash
npm install -g @capacitor/cli
```

## Configuração Inicial (Primeira Vez)

1. **Build dos arquivos do jogo:**
```bash
yarn build:game
```

2. **Inicialize o Capacitor (apenas na primeira vez):**
```bash
yarn cap:init
```
   Quando solicitado, informe:
   - App name: `Dofus Touch`
   - App ID: `com.lindo.dofus` (ou o que preferir)
   - Web dir: `dist/game`
   
   **Nota:** O Capacitor criará automaticamente o arquivo `capacitor.config.ts` ou `capacitor.config.json`.

3. **Adicione a plataforma Android:**
```bash
yarn cap:add:android
```

## Build do APK

### Método 1: Usando Android Studio (Recomendado)

1. **Sincronize os arquivos:**
```bash
yarn cap:sync
```

2. **Abra o projeto no Android Studio:**
```bash
yarn cap:open:android
```

3. **No Android Studio:**
   - Aguarde o Gradle sincronizar
   - Vá em `Build > Build Bundle(s) / APK(s) > Build APK(s)`
   - Ou `Build > Generate Signed Bundle / APK` para criar um APK assinado

4. **O APK estará em:**
   - `android/app/build/outputs/apk/debug/app-debug.apk` (debug)
   - `android/app/build/outputs/apk/release/app-release.apk` (release, se assinado)

### Método 2: Via Linha de Comando

1. **Build e sincronize:**
```bash
yarn cap:build:android
```

2. **O APK estará em:**
   - `android/app/build/outputs/apk/debug/app-debug.apk`

## Assinando o APK (Para Publicação)

Para publicar na Play Store, você precisa assinar o APK:

1. **Gere uma keystore:**
```bash
keytool -genkey -v -keystore dofus-release-key.keystore -alias dofus -keyalg RSA -keysize 2048 -validity 10000
```

2. **Configure o `android/app/build.gradle`:**
```gradle
android {
    ...
    signingConfigs {
        release {
            storeFile file('../../dofus-release-key.keystore')
            storePassword 'sua-senha'
            keyAlias 'dofus'
            keyPassword 'sua-senha'
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            ...
        }
    }
}
```

3. **Build o APK release:**
```bash
cd android
./gradlew assembleRelease
```

## Notas Importantes

⚠️ **Problema do Proxy Dofus:**
O jogo atual precisa de um servidor proxy rodando para fazer requisições ao servidor Dofus (`localhost:5555`). No Android, isso não funcionará da mesma forma.

**Soluções possíveis:**

1. **Usar um servidor proxy externo:** Configure um servidor proxy na sua rede e ajuste o código para usar esse servidor.

2. **Modificar o código para usar URLs diretas:** Se o servidor Dofus permitir acesso direto (sem CORS), você pode modificar o código para não usar o proxy.

3. **Criar um plugin Capacitor:** Criar um plugin nativo que faça o proxy das requisições.

## Estrutura de Arquivos

Após o build, a estrutura será:
```
dist/game/          # Arquivos do jogo (copiados de appData/game)
android/            # Projeto Android nativo
capacitor.config.ts # Configuração do Capacitor
```

## Comandos Úteis

- `yarn build:game` - Copia os arquivos do jogo para `dist/game`
- `yarn cap:sync` - Sincroniza os arquivos web com o projeto nativo
- `yarn cap:open:android` - Abre o projeto no Android Studio
- `yarn cap:build:android` - Build do APK via linha de comando

## Troubleshooting

**Erro: "Command not found: cap"**
- Instale o Capacitor CLI: `npm install -g @capacitor/cli`

**Erro: "Android SDK not found"**
- Configure a variável de ambiente `ANDROID_HOME` apontando para o SDK
- No Windows: `set ANDROID_HOME=C:\Users\SeuUsuario\AppData\Local\Android\Sdk`
- No Linux/Mac: `export ANDROID_HOME=$HOME/Android/Sdk`

**Erro de permissões no Android**
- Verifique o arquivo `android/app/src/main/AndroidManifest.xml` e adicione as permissões necessárias (INTERNET, etc.)
