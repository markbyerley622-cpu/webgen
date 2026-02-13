module.exports = {
  id: 'tradie',
  label: 'Trades & Home Services',
  terms: {
    servicesTitle: 'Our Services',
    ctaText: 'Request a Quote',
    aboutTitle: 'About Us'
  },
  homeLayout: ['hero', 'services', 'testimonial', 'cta'],
  defaultServices: [
    { name: 'General Repairs', description: 'From leaky faucets to broken fixtures, we handle all general repairs quickly and affordably.' },
    { name: 'Renovations', description: 'Full bathroom, kitchen, and home renovation services tailored to your budget.' },
    { name: 'Emergency Callouts', description: 'Available 24/7 for urgent plumbing, electrical, and structural emergencies.' },
    { name: 'New Installations', description: 'Professional installation of fixtures, appliances, and fittings.' },
    { name: 'Inspections & Assessments', description: 'Detailed property inspections and honest assessments before any work begins.' },
    { name: 'Maintenance Plans', description: 'Scheduled maintenance to keep your property in top shape year-round.' }
  ],
  tone: {
    greeting: 'G\'day',
    valueProposition: 'Reliable, honest work — done right the first time.',
    aboutDefault: 'We\'re a local, family-run business with over 15 years of experience in the trade. We pride ourselves on honest pricing, quality workmanship, and treating every job — big or small — with the same level of care. Licensed, insured, and always on time.'
  },
  defaultHours: [
    { day: 'Monday - Friday', hours: '7:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' }
  ],
  fonts: {
    heading: 'Raleway',
    body: 'Open Sans'
  },
  testimonials: [
    { name: 'Mike D.', text: 'Called them for an emergency leak on a Sunday and they were here within the hour. Legends!' },
    { name: 'Karen W.', text: 'Our kitchen renovation turned out better than we imagined. Highly recommend.' },
    { name: 'Steve P.', text: 'Fair prices, great communication, and top quality work. What more could you ask for?' }
  ]
};
