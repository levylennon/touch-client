import express from 'express'
import cors from 'cors'
import { Server } from 'http'
import path from 'path'
import getPort from 'get-port'
import { logger } from './logger'

const app = express()

// Enable CORS
app.use(cors({ origin: '*' }))

// Serve static files - game at root
const GAME_PATH = path.join(process.cwd(), 'appData/game/')


// Serve game files at root (after proxy to avoid conflicts)
app.use('/', express.static(GAME_PATH))

// Serve game index.html at root (must be after static to override)
app.get('/', (req, res) => {
  res.sendFile(path.join(GAME_PATH, 'index.html'))
})

async function startServer() {
  const port = await getPort({ port: 3000 })

  const server: Server = app.listen(port, '0.0.0.0', () => {
    logger.info(`Game server running on http://0.0.0.0:${port} (accessible from network)`)
    logger.info(`Open http://localhost:${port} in your browser`)
    logger.info(`Or access from network: http://<your-ip>:${port}`)
  })

  // Export port for potential use by other processes
  process.env.WEB_SERVER_PORT = port.toString()

  return server
}

startServer().catch((error) => {
  logger.error('Failed to start server:', error)
  process.exit(1)
})
