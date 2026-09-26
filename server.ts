import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const tryListen = (portToTry: number) => {
    const server = app.listen(portToTry, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${portToTry}`);
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${portToTry} is in use, trying ${portToTry + 1}...`);
        tryListen(portToTry + 1);
      } else {
        console.error('Server error:', err);
      }
    });
  };

  tryListen(PORT);
}

startServer();
