module.exports = {
  id: 'clinic',
  label: 'Medical / Dental Clinic',
  terms: {
    servicesTitle: 'Our Services',
    ctaText: 'Book an Appointment',
    aboutTitle: 'About Our Practice'
  },
  homeLayout: ['hero', 'services', 'testimonial', 'cta'],
  defaultServices: [
    { name: 'General Consultations', description: 'Comprehensive health assessments and personalized treatment plans.' },
    { name: 'Preventive Care', description: 'Regular check-ups, screenings, and vaccinations to keep you healthy.' },
    { name: 'Dental Cleaning & Hygiene', description: 'Professional cleaning, polishing, and oral health education.' },
    { name: 'Cosmetic Procedures', description: 'Teeth whitening, veneers, and other aesthetic treatments.' },
    { name: 'Pediatric Care', description: 'Gentle, child-friendly care for your little ones.' },
    { name: 'Emergency Services', description: 'Same-day appointments for urgent dental and medical needs.' }
  ],
  tone: {
    greeting: 'Your Health, Our Priority',
    valueProposition: 'Compassionate care with a personal touch.',
    aboutDefault: 'Our practice is built on a foundation of trust, compassion, and clinical excellence. Our experienced team uses the latest techniques and technology to deliver care that is comfortable, effective, and tailored to your individual needs. We treat every patient like family.'
  },
  defaultHours: [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ],
  fonts: {
    heading: 'Merriweather',
    body: 'Source Sans Pro'
  },
  testimonials: [
    { name: 'Rachel B.', text: 'I used to dread going to the dentist, but this team made me feel completely at ease.' },
    { name: 'Tom H.', text: 'Professional, thorough, and genuinely caring. Best clinic I\'ve ever been to.' },
    { name: 'Amanda G.', text: 'My whole family comes here. The staff are wonderful with kids.' }
  ]
};
