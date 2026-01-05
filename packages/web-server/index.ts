import express from 'express'
import cors from 'cors'
import { Server } from 'http'
import path from 'path'
import getPort from 'get-port'
import { logger } from './logger'
import pkg from '../../package.json'
import { createProxyMiddleware } from 'http-proxy-middleware'

const app = express()

// Enable CORS
app.use(cors({ origin: '*' }))

// Parse JSON only for API routes, not for proxy routes
app.use((req, res, next) => {
  // Skip JSON parsing for proxy routes to preserve body for proxy
  if (req.path.startsWith('/dofus-proxy')) {
    return next()
  }
  express.json()(req, res, next)
})

// Serve static files - game at root
const GAME_PATH = path.join(process.cwd(), 'appData/game/')

// Handle CORS preflight requests for dofus-proxy
// Use a wildcard to catch all paths including nested paths like /assets/2.53.12_.../bones/...
app.options('/dofus-proxy*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  res.header('Access-Control-Max-Age', '86400')
  res.sendStatus(200)
})

// Proxy for Dofus game server (localhost:5555) to avoid CORS
// This allows the game iframe to make requests to localhost:5555 through this proxy
// Also handles subdomains like haapi.localhost:5555
app.use('/dofus-proxy', createProxyMiddleware({
  target: 'http://localhost:5555',
  changeOrigin: true,
  router: (req) => {
    // Known subdomains that should be proxied to subdomain.localhost:5555
    // Common paths that are NOT subdomains: data, assets, build, config, etc.
    const knownNonSubdomainPaths = ['data', 'assets', 'build', 'config', 'game', 'renderer', 'character-images', 'changelog', 'preload', 'api', 'dictionary', 'primus', 'logger'];
    
    // Check if path contains a subdomain (e.g., /dofus-proxy/haapi/...)
    const subdomainMatch = req.path.match(/^\/dofus-proxy\/([a-zA-Z0-9-]+)(\/.*)?$/);
    if (subdomainMatch && subdomainMatch[1]) {
      const firstSegment = subdomainMatch[1];
      // Only treat as subdomain if it's NOT a known path segment
      if (!knownNonSubdomainPaths.includes(firstSegment.toLowerCase())) {
        const subdomain = firstSegment;
        // Return target with subdomain
        return `http://${subdomain}.localhost:5555`;
      }
    }
    // Default target - check if request is for port 443 (config.json is typically on port 443)
    const isPort443 = req.path.includes('config.json') || req.url.includes('config.json');
    if (isPort443) {
      return 'http://127.0.0.1:443';
    }
    return 'http://localhost:5555';
  },
  pathRewrite: (path, req) => {
    // Known subdomains that should be proxied to subdomain.localhost:5555
    const knownNonSubdomainPaths = ['data', 'assets', 'build', 'config', 'game', 'renderer', 'character-images', 'changelog', 'preload', 'api', 'dictionary', 'primus', 'logger'];
    
    // Handle subdomain paths like /dofus-proxy/haapi/json/...
    const subdomainMatch = path.match(/^\/dofus-proxy\/([a-zA-Z0-9-]+)(\/.*)?$/);
    if (subdomainMatch && subdomainMatch[1] && subdomainMatch[2]) {
      const firstSegment = subdomainMatch[1];
      // Only treat as subdomain if it's NOT a known path segment
      if (!knownNonSubdomainPaths.includes(firstSegment.toLowerCase())) {
        // Remove /dofus-proxy/subdomain prefix, keep the rest
        return subdomainMatch[2];
      }
    }
    // Remove /dofus-proxy prefix for normal requests
    return path.replace(/^\/dofus-proxy/, '');
  },
  onProxyReq: (proxyReq, req, res) => {
    // Known subdomains that should be proxied to subdomain.localhost:5555
    const knownNonSubdomainPaths = ['data', 'assets', 'build', 'config', 'game', 'renderer', 'character-images', 'changelog', 'preload', 'api', 'dictionary', 'primus', 'logger'];
    
    // Check if this is a request for port 443
    const referer = req.headers.referer || '';
    const isPort443 = referer.includes(':443') || req.url.includes('config.json');
    
    // Determine the correct origin based on the target
    const subdomainMatch = req.path.match(/^\/dofus-proxy\/([a-zA-Z0-9-]+)(\/.*)?$/);
    if (subdomainMatch && subdomainMatch[1]) {
      const firstSegment = subdomainMatch[1];
      // Only treat as subdomain if it's NOT a known path segment
      if (!knownNonSubdomainPaths.includes(firstSegment.toLowerCase())) {
        const subdomain = firstSegment;
        proxyReq.setHeader('Origin', `http://${subdomain}.localhost:5555`);
      } else if (isPort443) {
        proxyReq.setHeader('Origin', 'http://127.0.0.1:443');
      } else {
        proxyReq.setHeader('Origin', 'http://localhost:5555');
      }
    } else if (isPort443) {
      proxyReq.setHeader('Origin', 'http://127.0.0.1:443');
    } else {
      proxyReq.setHeader('Origin', 'http://localhost:5555');
    }
    // Remove referer to avoid issues
    proxyReq.removeHeader('referer')
  },
  onProxyRes: (proxyRes, req, res) => {
    // Add CORS headers to response - ensure they're always set
    // Use lowercase keys as Node.js normalizes headers, but also set with original case for compatibility
    proxyRes.headers['access-control-allow-origin'] = '*'
    proxyRes.headers['access-control-allow-methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    proxyRes.headers['access-control-allow-headers'] = 'Content-Type, Authorization, X-Requested-With'
    proxyRes.headers['access-control-allow-credentials'] = 'true'
    // Also set with original case for compatibility
    proxyRes.headers['Access-Control-Allow-Origin'] = '*'
    proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With'
    proxyRes.headers['Access-Control-Allow-Credentials'] = 'true'
    // Ensure Content-Type is preserved for JSON responses
    if (!proxyRes.headers['content-type'] && req.path.includes('/json/')) {
      proxyRes.headers['content-type'] = 'application/json'
    }
  },
  onError: (err, req, res) => {
    logger.error('Proxy error:', err)
    res.status(500).json({ error: 'Proxy error', message: err.message })
  },
  logLevel: 'warn'
}))

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
