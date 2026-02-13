module.exports = {
  id: 'restaurant',
  label: 'Restaurant / Cafe',
  terms: {
    servicesTitle: 'Our Menu',
    ctaText: 'Reserve a Table',
    aboutTitle: 'Our Story'
  },
  homeLayout: ['hero', 'services', 'testimonial', 'cta'],
  useMenuLayout: true,
  defaultServices: [
    { name: 'Margherita Pizza', description: 'Fresh mozzarella, basil, and tomato sauce on a hand-tossed crust.', price: '$14' },
    { name: 'Caesar Salad', description: 'Crisp romaine, parmesan, croutons, and house-made dressing.', price: '$11' },
    { name: 'Grilled Salmon', description: 'Atlantic salmon with seasonal vegetables and lemon butter.', price: '$22' },
    { name: 'Pasta Carbonara', description: 'Spaghetti with pancetta, egg, parmesan, and black pepper.', price: '$16' },
    { name: 'Tiramisu', description: 'Classic Italian dessert with espresso-soaked ladyfingers.', price: '$9' },
    { name: 'House Red Wine', description: 'Glass of our hand-selected house red.', price: '$8' }
  ],
  tone: {
    greeting: 'Buon Appetito',
    valueProposition: 'Delicious food made with love, served with care.',
    aboutDefault: 'From our kitchen to your table, every dish is crafted with the freshest ingredients and a passion for flavor. We believe dining is about more than just food — it\'s about the experience, the atmosphere, and the people you share it with.'
  },
  defaultHours: [
    { day: 'Monday - Thursday', hours: '11:00 AM - 9:00 PM' },
    { day: 'Friday - Saturday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 8:00 PM' }
  ],
  fonts: {
    heading: 'Playfair Display',
    body: 'Lato'
  },
  testimonials: [
    { name: 'Maria R.', text: 'The best Italian food outside of Italy. We come here every week!' },
    { name: 'David L.', text: 'Incredible atmosphere and the pasta is absolutely divine.' },
    { name: 'Emma S.', text: 'Perfect for date night. The staff made us feel so welcome.' }
  ]
};
