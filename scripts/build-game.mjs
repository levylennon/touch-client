import { mkdirSync, cpSync, existsSync } from 'fs'

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT_DIR = join(__dirname, '..')

const GAME_SOURCE = join(ROOT_DIR, 'appData/game')
const GAME_DEST = join(ROOT_DIR, 'dist/game')

console.log('Building game for mobile...')

// Check if source exists
if (!existsSync(GAME_SOURCE)) {
  console.error(`Error: Game source directory not found: ${GAME_SOURCE}`)
  process.exit(1)
}

// Create destination directory
mkdirSync(GAME_DEST, { recursive: true })

// Copy all game files
console.log(`Copying files from ${GAME_SOURCE} to ${GAME_DEST}...`)
cpSync(GAME_SOURCE, GAME_DEST, { recursive: true })

console.log('Game build complete!')
