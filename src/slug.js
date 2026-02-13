/**
 * Convert a business name to a URL-safe slug.
 * "Joe's Pizza & Pasta" → "joes-pizza-and-pasta"
 */
function toSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { toSlug };
