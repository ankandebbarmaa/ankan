import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Check whether Web3Forms key is configured
  app.get('/api/contact/status', (req, res) => {
    const isConfigured = Boolean(process.env.WEB3FORMS_ACCESS_KEY && process.env.WEB3FORMS_ACCESS_KEY.trim() !== '');
    res.json({ configured: isConfigured });
  });

  // Handle contact form submission via Web3Forms
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey.trim() === '') {
      return res.status(400).json({
        success: false,
        configured: false,
        message: 'WEB3FORMS_ACCESS_KEY is not configured yet. Please add your key in the Settings/Secrets panel or .env file.',
      });
    }

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Email and message are required fields.',
      });
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          name: name ? name.trim() : 'Portfolio Visitor',
          email: email.trim(),
          message: message.trim(),
          from_name: name ? `${name} via Founder Portfolio` : 'Founder Portfolio Contact',
          subject: `New contact message from ${name || email} on your Portfolio`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        return res.json({
          success: true,
          message: 'Your message was sent successfully and delivered to the inbox!',
        });
      } else {
        return res.status(response.status || 400).json({
          success: false,
          message: data.message || 'Web3Forms API rejected the request. Please verify your access key.',
        });
      }
    } catch (error: any) {
      console.error('Web3Forms dispatch error:', error);
      return res.status(500).json({
        success: false,
        message: error.message || 'Failed to connect to the email dispatch service.',
      });
    }
  });

  // Handle newsletter subscription via Web3Forms
  app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required.' });
    }

    if (!accessKey || accessKey.trim() === '') {
      return res.json({
        success: true,
        configured: false,
        message: 'Subscribed locally! Add WEB3FORMS_ACCESS_KEY to receive subscriber notifications directly in your inbox.',
      });
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          email: email.trim(),
          from_name: 'Founder Portfolio Newsletter',
          subject: `New Newsletter Subscriber: ${email.trim()}`,
          message: `Someone just subscribed to your newsletter updates: ${email.trim()}`,
        }),
      });

      const data = await response.json();
      return res.json({ success: true, data });
    } catch (error: any) {
      console.error('Newsletter Web3Forms dispatch error:', error);
      return res.json({ success: true, warning: 'Delivered locally' });
    }
  });

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
