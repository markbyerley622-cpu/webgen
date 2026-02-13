# Genny — Website Demo Generator

Generate polished, static 4-page website demos from a simple form. Fill in a business name, pick an industry, choose a color, and get a production-ready site instantly.

## Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to access the dashboard.

## How It Works

1. Fill in the form with client details (name, industry, services, accent color)
2. Click **Generate Demo** — a static 4-page site is created instantly
3. Preview opens in a new tab with Home, About, Services/Menu, and Contact pages
4. All demos are saved in the `demos/` folder and listed in the dashboard

## Industries

- **Restaurant / Cafe** — Menu layout with prices, "Reserve a Table" CTA
- **Trades & Home Services** — Services grid, "Request a Quote" CTA
- **Medical / Dental Clinic** — Professional tone, "Book an Appointment" CTA
- **Gym / Fitness Studio** — Programs listing, "Start Your Free Trial" CTA
- **Creative / Digital Agency** — Punchy tone, "Start a Project" CTA

## Tech Stack

- **Node.js + Express** — Server and API
- **Handlebars** — Template compilation
- **Tailwind CSS v3 Play CDN** — Styling (no build step)
- **Filesystem-based** — No database required

## Accent Color System

Pick a single hex color and Genny generates a full 50–900 shade palette via HSL manipulation. All templates use `accent-*` classes for consistent theming.
