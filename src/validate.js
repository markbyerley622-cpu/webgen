/**
 * Input sanitization and validation for demo generation requests.
 */

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim();
}

function validate(input) {
  const errors = [];

  if (!input.businessName || !sanitize(input.businessName)) {
    errors.push('Business name is required.');
  }

  if (!input.industry) {
    errors.push('Industry is required.');
  }

  if (input.accentColor && !/^#[0-9a-fA-F]{6}$/.test(input.accentColor)) {
    errors.push('Accent color must be a valid hex color (e.g. #2563eb).');
  }

  if (input.secondaryColor && !/^#[0-9a-fA-F]{6}$/.test(input.secondaryColor)) {
    errors.push('Secondary color must be a valid hex color (e.g. #f59e0b).');
  }

  if (input.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.push('Email address is not valid.');
  }

  if (input.mapEmbed && !input.mapEmbed.startsWith('https://www.google.com/maps/embed')) {
    errors.push('Map embed URL must be a Google Maps embed URL.');
  }

  // Sanitize string fields
  if (input.businessName) input.businessName = sanitize(input.businessName);
  if (input.tagline) input.tagline = sanitize(input.tagline);
  if (input.description) input.description = sanitize(input.description);
  if (input.phone) input.phone = sanitize(input.phone);
  if (input.email) input.email = sanitize(input.email);
  if (input.location) input.location = sanitize(input.location);
  if (input.aboutTitle) input.aboutTitle = sanitize(input.aboutTitle);

  // Sanitize hours
  if (Array.isArray(input.hours)) {
    input.hours = input.hours
      .filter(h => h && h.day)
      .map(h => ({
        day: sanitize(h.day),
        hours: sanitize(h.hours || '')
      }));
  }

  // Sanitize services
  if (Array.isArray(input.services)) {
    input.services = input.services
      .filter(s => s && s.name)
      .map(s => ({
        name: sanitize(s.name),
        description: sanitize(s.description || ''),
        price: s.price ? sanitize(s.price) : undefined
      }));
  }

  // Validate and sanitize Instagram post URLs
  if (Array.isArray(input.instagramPosts)) {
    const validPattern = /^https:\/\/www\.instagram\.com\/(p|reel|tv)\//;
    input.instagramPosts = input.instagramPosts
      .filter(url => typeof url === 'string' && url.trim())
      .map(url => url.trim())
      .filter(url => {
        if (!validPattern.test(url)) {
          errors.push(`Invalid Instagram URL: ${url}`);
          return false;
        }
        return true;
      })
      .slice(0, 6);
  }

  return errors;
}

module.exports = { validate, sanitize };
