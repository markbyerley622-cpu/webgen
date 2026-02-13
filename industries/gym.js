module.exports = {
  id: 'gym',
  label: 'Gym / Fitness Studio',
  terms: {
    servicesTitle: 'Our Programs',
    ctaText: 'Start Your Free Trial',
    aboutTitle: 'About Us'
  },
  homeLayout: ['hero', 'services', 'testimonial', 'cta'],
  defaultServices: [
    { name: 'Personal Training', description: 'One-on-one sessions with certified trainers to reach your goals faster.' },
    { name: 'Group Classes', description: 'High-energy classes including HIIT, yoga, spin, and boxing.' },
    { name: 'Strength & Conditioning', description: 'Build muscle and improve performance with our state-of-the-art equipment.' },
    { name: 'Nutrition Coaching', description: 'Personalized meal plans and dietary guidance from qualified nutritionists.' },
    { name: 'Open Gym Access', description: 'Unlimited access to our full range of cardio and strength equipment.' },
    { name: 'Recovery & Wellness', description: 'Sauna, stretching areas, and recovery sessions to keep you at your best.' }
  ],
  tone: {
    greeting: 'Ready to Transform?',
    valueProposition: 'Your journey to a stronger, healthier you starts here.',
    aboutDefault: 'We\'re more than just a gym — we\'re a community. Whether you\'re a seasoned athlete or just starting out, our supportive environment, expert coaches, and world-class facilities will help you crush your goals. No judgment, just results.'
  },
  defaultHours: [
    { day: 'Monday - Friday', hours: '5:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '6:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: '7:00 AM - 6:00 PM' }
  ],
  fonts: {
    heading: 'Oswald',
    body: 'Roboto'
  },
  testimonials: [
    { name: 'Chris M.', text: 'Down 20kg in 6 months. The trainers here actually care about your progress.' },
    { name: 'Jessica L.', text: 'Best group classes in town! The energy is unreal.' },
    { name: 'Ryan K.', text: 'Clean facility, great equipment, and an awesome community vibe.' }
  ]
};
