const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { generate } = require('./src/generator');
const { validate } = require('./src/validate');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Multer config — memory storage, 5MB limit, image types only
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only JPG, PNG, and WebP images are allowed.'));
    }
  }
});

const uploadFields = upload.fields([
  { name: 'logo', maxCount: 1 },
  { name: 'banner', maxCount: 1 },
  { name: 'gallery', maxCount: 10 }
]);

// Dashboard UI
app.use('/dashboard', express.static(path.join(__dirname, 'dashboard')));

// Serve generated demos
app.use('/demos', express.static(path.join(__dirname, 'demos')));

// Redirect root to dashboard
app.get('/', (req, res) => {
  res.redirect('/dashboard');
});

// List available industries
app.get('/api/industries', (req, res) => {
  const industriesDir = path.join(__dirname, 'industries');
  const files = fs.readdirSync(industriesDir).filter(f => f !== '_base.js' && f.endsWith('.js'));
  const industries = files.map(f => {
    const config = require(path.join(industriesDir, f));
    return { id: config.id, label: config.label };
  });
  res.json(industries);
});

// Generate a demo site
app.post('/api/generate', (req, res) => {
  uploadFields(req, res, async (uploadErr) => {
    try {
      if (uploadErr) {
        return res.status(400).json({ errors: [uploadErr.message] });
      }

      // Parse JSON payload from 'data' field (FormData) or fall back to req.body (JSON)
      let input;
      if (req.body.data) {
        input = JSON.parse(req.body.data);
      } else {
        input = req.body;
      }

      const errors = validate(input);
      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      // Attach uploaded files to input for the generator
      input._files = req.files || {};

      const result = await generate(input);
      res.json(result);
    } catch (err) {
      console.error('Generation error:', err);
      res.status(500).json({ error: err.message });
    }
  });
});

// List all generated demos
app.get('/api/demos', (req, res) => {
  const demosDir = path.join(__dirname, 'demos');
  if (!fs.existsSync(demosDir)) {
    return res.json([]);
  }
  const slugs = fs.readdirSync(demosDir).filter(d => {
    const metaPath = path.join(demosDir, d, '_meta.json');
    return fs.existsSync(metaPath);
  });
  const demos = slugs.map(slug => {
    const meta = JSON.parse(fs.readFileSync(path.join(demosDir, slug, '_meta.json'), 'utf8'));
    return { slug, ...meta };
  });
  demos.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  res.json(demos);
});

// Delete a demo
app.delete('/api/demos/:slug', (req, res) => {
  const demoDir = path.join(__dirname, 'demos', req.params.slug);
  if (!fs.existsSync(demoDir)) {
    return res.status(404).json({ error: 'Demo not found' });
  }
  fs.rmSync(demoDir, { recursive: true, force: true });
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Genny running at http://localhost:${PORT}`);
});
