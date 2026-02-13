const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const registerHelpers = require('./helpers');
const { generatePalette } = require('./palette');
const { toSlug } = require('./slug');
const defaults = require('./defaults');

// Register helpers once
registerHelpers(Handlebars);

function getExtension(mimetype) {
  const map = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' };
  return map[mimetype] || '.jpg';
}

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const INDUSTRIES_DIR = path.join(__dirname, '..', 'industries');
const DEMOS_DIR = path.join(__dirname, '..', 'demos');

// Load and compile a template file
function loadTemplate(relPath) {
  const filePath = path.join(TEMPLATES_DIR, relPath);
  const source = fs.readFileSync(filePath, 'utf8');
  return Handlebars.compile(source);
}

// Register all partials
function registerPartials() {
  const partialsDir = path.join(TEMPLATES_DIR, 'partials');
  const files = fs.readdirSync(partialsDir).filter(f => f.endsWith('.hbs'));
  for (const file of files) {
    const name = path.basename(file, '.hbs');
    const source = fs.readFileSync(path.join(partialsDir, file), 'utf8');
    Handlebars.registerPartial(name, source);
  }
}

// Load industry config, merging with base
function loadIndustry(industryId) {
  const base = require(path.join(INDUSTRIES_DIR, '_base.js'));
  try {
    const industry = require(path.join(INDUSTRIES_DIR, `${industryId}.js`));
    return {
      ...base,
      ...industry,
      terms: { ...base.terms, ...industry.terms },
      tone: { ...base.tone, ...industry.tone },
      fonts: { ...base.fonts, ...industry.fonts }
    };
  } catch {
    return base;
  }
}

// Deep merge: defaults ← industryConfig ← userInput
function buildContext(userInput, industryConfig) {
  const accentColor = userInput.accentColor || defaults.accentColor;
  const secondaryColor = userInput.secondaryColor || defaults.secondaryColor;
  const palette = generatePalette(accentColor);
  const secondaryPalette = generatePalette(secondaryColor);
  const fonts = { ...defaults.fonts, ...industryConfig.fonts };

  // Determine services
  let services = [];
  if (Array.isArray(userInput.services) && userInput.services.length > 0) {
    services = userInput.services;
  } else if (industryConfig.defaultServices && industryConfig.defaultServices.length > 0) {
    services = industryConfig.defaultServices;
  } else {
    services = defaults.defaultServices;
  }

  // Determine hours
  let hours = userInput.hours || industryConfig.defaultHours || defaults.defaultHours;

  // Determine testimonials
  let testimonials = industryConfig.testimonials || defaults.testimonials;

  return {
    businessName: userInput.businessName,
    tagline: userInput.tagline || industryConfig.tone.valueProposition || defaults.tagline,
    description: userInput.description || industryConfig.tone.aboutDefault || defaults.description,
    phone: userInput.phone || null,
    email: userInput.email || null,
    location: userInput.location || null,
    mapEmbed: userInput.mapEmbed || null,
    accentColor,
    secondaryColor,
    palette,
    secondaryPalette,
    fonts,
    services,
    hours,
    testimonials,
    useMenuLayout: industryConfig.useMenuLayout || false,
    servicesTitle: industryConfig.terms.servicesTitle || defaults.servicesTitle,
    ctaText: industryConfig.terms.ctaText || defaults.ctaText,
    ctaSubtext: userInput.ctaSubtext || defaults.ctaSubtext,
    aboutTitle: userInput.aboutTitle || industryConfig.terms.aboutTitle || defaults.aboutTitle,
    instagramPosts: Array.isArray(userInput.instagramPosts) ? userInput.instagramPosts : [],
    industryId: industryConfig.id,
    industryLabel: industryConfig.label
  };
}

// Navigation links with active state
function buildNavLinks() {
  return [
    { label: 'Home', href: 'index.html', page: 'index' },
    { label: 'About', href: 'about.html', page: 'about' },
    { label: 'Services', href: 'services.html', page: 'services' },
    { label: 'Contact', href: 'contact.html', page: 'contact' }
  ];
}

const PAGES = [
  { name: 'index', title: 'Home', template: 'pages/index.hbs' },
  { name: 'about', title: 'About', template: 'pages/about.hbs' },
  { name: 'services', title: 'Services', template: 'pages/services.hbs' },
  { name: 'contact', title: 'Contact', template: 'pages/contact.hbs' }
];

async function generate(userInput) {
  // Register partials fresh each time (allows hot changes)
  registerPartials();

  const industryConfig = loadIndustry(userInput.industry);
  const context = buildContext(userInput, industryConfig);
  const slug = toSlug(userInput.businessName);
  const demoDir = path.join(DEMOS_DIR, slug);

  // Create output directory
  fs.mkdirSync(demoDir, { recursive: true });

  // Handle uploaded images
  const files = userInput._files || {};
  if (Object.keys(files).length > 0) {
    const imagesDir = path.join(demoDir, 'images');
    fs.mkdirSync(imagesDir, { recursive: true });

    if (files.logo && files.logo[0]) {
      const ext = getExtension(files.logo[0].mimetype);
      const filename = `logo${ext}`;
      fs.writeFileSync(path.join(imagesDir, filename), files.logo[0].buffer);
      context.logoImage = `images/${filename}`;
    }

    if (files.banner && files.banner[0]) {
      const ext = getExtension(files.banner[0].mimetype);
      const filename = `banner${ext}`;
      fs.writeFileSync(path.join(imagesDir, filename), files.banner[0].buffer);
      context.bannerImage = `images/${filename}`;
    }

    if (files.gallery && files.gallery.length > 0) {
      context.galleryImages = files.gallery.map((file, i) => {
        const ext = getExtension(file.mimetype);
        const filename = `gallery-${i + 1}${ext}`;
        fs.writeFileSync(path.join(imagesDir, filename), file.buffer);
        return `images/${filename}`;
      });
    }
  }

  // Compile base layout
  const layoutTemplate = loadTemplate('layouts/base.hbs');

  // Generate each page
  for (const page of PAGES) {
    const pageTemplate = loadTemplate(page.template);
    const navLinks = buildNavLinks();

    // Customize services label in nav for menu-based industries
    if (context.useMenuLayout) {
      const svcLink = navLinks.find(l => l.page === 'services');
      if (svcLink) svcLink.label = 'Menu';
    }

    const pageContext = {
      ...context,
      currentPage: page.name,
      navLinks,
      pageTitle: page.title,
      metaDescription: `${context.businessName} - ${context.tagline}`
    };

    // Render page body
    const body = pageTemplate(pageContext);

    // Render full HTML with layout
    const html = layoutTemplate({ ...pageContext, body });

    // Write file
    fs.writeFileSync(path.join(demoDir, `${page.name}.html`), html, 'utf8');
  }

  // Write metadata
  const meta = {
    businessName: context.businessName,
    industry: context.industryId,
    industryLabel: context.industryLabel,
    accentColor: context.accentColor,
    secondaryColor: context.secondaryColor,
    createdAt: new Date().toISOString()
  };
  fs.writeFileSync(path.join(demoDir, '_meta.json'), JSON.stringify(meta, null, 2), 'utf8');

  return {
    slug,
    previewUrl: `/demos/${slug}/index.html`
  };
}

module.exports = { generate };
