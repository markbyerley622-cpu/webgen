/**
 * Generate a 50-900 shade palette from a single hex color using HSL manipulation.
 * Returns an object like { 50: '#...', 100: '#...', ..., 900: '#...' }
 */

function hexToHSL(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r, g, b;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  const toHex = (n) => {
    const hex = Math.round((n + m) * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return '#' + toHex(r) + toHex(g) + toHex(b);
}

function generatePalette(hex) {
  const { h, s } = hexToHSL(hex);

  // Lightness targets for each shade (Tailwind-like distribution)
  const shades = {
    50: 97,
    100: 93,
    200: 86,
    300: 76,
    400: 62,
    500: 50,
    600: 42,
    700: 35,
    800: 27,
    900: 20
  };

  const palette = {};
  for (const [shade, lightness] of Object.entries(shades)) {
    // Slightly desaturate extremes for a natural feel
    let adjS = s;
    if (lightness > 90) adjS = Math.max(s * 0.6, 20);
    if (lightness < 25) adjS = Math.max(s * 0.8, 15);

    palette[shade] = hslToHex(h, adjS, lightness);
  }

  return palette;
}

module.exports = { generatePalette, hexToHSL, hslToHex };
