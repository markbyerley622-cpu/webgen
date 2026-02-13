/**
 * Handlebars helpers for template rendering.
 */
module.exports = function registerHelpers(Handlebars) {
  // Render block only if value is truthy
  Handlebars.registerHelper('ifExists', function (val, options) {
    return val ? options.fn(this) : options.inverse(this);
  });

  // Current year
  Handlebars.registerHelper('year', function () {
    return new Date().getFullYear();
  });

  // Convert phone to tel: href format
  Handlebars.registerHelper('phone_href', function (phone) {
    if (!phone) return '';
    return 'tel:' + phone.replace(/[^+\d]/g, '');
  });

  // Convert email to mailto: href
  Handlebars.registerHelper('email_href', function (email) {
    if (!email) return '';
    return 'mailto:' + email;
  });

  // Check equality
  Handlebars.registerHelper('eq', function (a, b) {
    return a === b;
  });

  // Check if array has items
  Handlebars.registerHelper('hasItems', function (arr, options) {
    return (Array.isArray(arr) && arr.length > 0) ? options.fn(this) : options.inverse(this);
  });

  // Join array values
  Handlebars.registerHelper('join', function (arr, sep) {
    if (!Array.isArray(arr)) return '';
    return arr.join(typeof sep === 'string' ? sep : ', ');
  });

  // Encode for URI
  Handlebars.registerHelper('encodeURI', function (str) {
    return encodeURIComponent(str || '');
  });

  // Active nav class
  Handlebars.registerHelper('navActive', function (currentPage, page) {
    return currentPage === page ? 'text-accent-600 font-semibold' : 'text-gray-700 hover:text-accent-600';
  });

  // Active mobile nav class
  Handlebars.registerHelper('navActiveMobile', function (currentPage, page) {
    return currentPage === page ? 'text-accent-600 font-semibold' : 'text-gray-700';
  });

  // JSON stringify (for inline data)
  Handlebars.registerHelper('json', function (obj) {
    return JSON.stringify(obj);
  });
};
