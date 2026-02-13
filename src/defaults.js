/**
 * Global fallback values used when neither the user nor the industry config provides a value.
 */
module.exports = {
  accentColor: '#2563eb',
  secondaryColor: '#f59e0b',
  tagline: 'Welcome to our business',
  description: 'We are dedicated to providing excellent service to our community. With years of experience, our team is ready to help you.',
  aboutTitle: 'About Us',
  servicesTitle: 'Our Services',
  ctaText: 'Get in Touch',
  ctaSubtext: 'Ready to get started? Reach out today.',
  homeLayout: ['hero', 'services', 'testimonial', 'cta'],
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  defaultServices: [
    { name: 'Service One', description: 'Details coming soon.' },
    { name: 'Service Two', description: 'Details coming soon.' },
    { name: 'Service Three', description: 'Details coming soon.' }
  ],
  testimonials: [
    { name: 'Sarah M.', text: 'Absolutely fantastic experience. Highly recommend!' },
    { name: 'James T.', text: 'Professional, friendly, and great results every time.' },
    { name: 'Lisa K.', text: 'We\'ve been loyal customers for years. Wouldn\'t go anywhere else.' }
  ],
  defaultHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]
};
