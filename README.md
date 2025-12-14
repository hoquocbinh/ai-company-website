# AI Company Website

A modern, professional website for an AI company built with React.js, Bootstrap, and a striking red color scheme.

## Features

- 🎨 Modern red color scheme design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with AOS
- 🧭 8 complete pages with React Router
- 🎯 SEO optimized
- 🐳 Docker ready

## Pages

1. **Home** - Hero section, stats, services preview, why choose us
2. **About Us** - Company story, mission/vision/values, team, achievements
3. **Services** - All AI services, development process, technologies
4. **Solutions** - Industry-specific AI solutions
5. **Portfolio** - Case studies with filtering
6. **Resources** - Blog posts and newsletter
7. **Careers** - Culture, benefits, open positions
8. **Contact** - Contact form and information

## Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router DOM
- **Styling**: Bootstrap 5, Custom CSS
- **Icons**: React Icons
- **Animations**: AOS (Animate On Scroll)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Deployment

```bash
# Build Docker image
docker build -t ai-company-website .

# Run container
docker run -p 80:80 ai-company-website
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── TeamCard.jsx
│   └── ContactForm.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Solutions.jsx
│   ├── Portfolio.jsx
│   ├── Resources.jsx
│   ├── Careers.jsx
│   └── Contact.jsx
├── data/            # Data files
│   ├── servicesData.js
│   ├── teamData.js
│   └── portfolioData.js
├── assets/          # Images and static files
│   └── images/
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Customization

### Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-red: #DC2626;
  --dark-red: #991B1B;
  --light-red: #FEE2E2;
  /* ... */
}
```

### Content

- **Services**: Edit `src/data/servicesData.js`
- **Team**: Edit `src/data/teamData.js`
- **Portfolio**: Edit `src/data/portfolioData.js`

### Images

Replace images in `src/assets/images/` directory. Images are organized by:
- `hero/` - Hero section backgrounds
- `team/` - Team member photos
- `portfolio/` - Portfolio project images
- `about/` - About page images

## License

MIT License
