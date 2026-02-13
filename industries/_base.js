/**
 * Base config inherited by all industries.
 * Industry-specific configs override/extend these values.
 */
module.exports = {
  id: 'generic',
  label: 'Generic Business',
  terms: {
    servicesTitle: 'Our Services',
    ctaText: 'Get in Touch',
    aboutTitle: 'About Us'
  },
  homeLayout: ['hero', 'services', 'testimonial', 'cta'],
  defaultServices: [],
  tone: {
    greeting: 'Welcome',
    valueProposition: 'Quality service you can trust.',
    aboutDefault: 'We are a dedicated team committed to delivering excellent results for our clients. Our experience and passion drive everything we do.'
  },
  defaultHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ],
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  testimonials: [
    { name: 'Sarah M.', text: 'Absolutely fantastic experience. Highly recommend!' },
    { name: 'James T.', text: 'Professional, friendly, and great results every time.' },
    { name: 'Lisa K.', text: 'We\'ve been loyal customers for years. Wouldn\'t go anywhere else.' }
  ]
};
