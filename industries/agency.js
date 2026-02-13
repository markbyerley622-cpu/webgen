module.exports = {
  id: 'agency',
  label: 'Creative / Digital Agency',
  terms: {
    servicesTitle: 'What We Do',
    ctaText: 'Start a Project',
    aboutTitle: 'Who We Are'
  },
  homeLayout: ['hero', 'services', 'testimonial', 'cta'],
  defaultServices: [
    { name: 'Brand Strategy', description: 'Define your brand identity, positioning, and voice to stand out in the market.' },
    { name: 'Web Design & Development', description: 'Custom websites that are beautiful, fast, and built to convert.' },
    { name: 'Digital Marketing', description: 'SEO, PPC, and social media campaigns that drive real results.' },
    { name: 'Content Creation', description: 'Compelling copy, photography, and video that tell your story.' },
    { name: 'UI/UX Design', description: 'Intuitive interfaces that delight users and boost engagement.' },
    { name: 'Analytics & Reporting', description: 'Data-driven insights to measure and optimize performance.' }
  ],
  tone: {
    greeting: 'Let\'s Build Something Great',
    valueProposition: 'Bold ideas. Beautiful execution. Real results.',
    aboutDefault: 'We\'re a tight-knit team of designers, developers, and strategists who believe great work happens at the intersection of creativity and data. We partner with ambitious brands to craft digital experiences that move the needle. No fluff, no jargon — just work that works.'
  },
  defaultHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday - Sunday', hours: 'By Appointment' }
  ],
  fonts: {
    heading: 'Poppins',
    body: 'Inter'
  },
  testimonials: [
    { name: 'Laura T.', text: 'They completely transformed our brand. Our website traffic tripled in 3 months.' },
    { name: 'Mark S.', text: 'Smart, creative, and incredibly easy to work with. Our go-to agency.' },
    { name: 'Nina P.', text: 'The best investment we\'ve made in our business. Period.' }
  ]
};
