# AI Company Website - Project Guide

## 📁 Project Structure

```
ai-company-website/
├── public/                      # Static assets served directly
│   └── vite.svg                # Vite logo (default)
│
├── src/
│   ├── assets/                 # Project assets
│   │   └── images/            # All images organized by purpose
│   │       ├── hero/          # Hero section backgrounds
│   │       ├── team/          # Team member photos
│   │       ├── portfolio/     # Portfolio/case study images
│   │       └── about/         # About page images
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Header.jsx         # Navigation header (sticky)
│   │   ├── Header.css
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Footer.css
│   │   ├── Hero.jsx           # Hero section (reusable)
│   │   ├── Hero.css
│   │   ├── ServiceCard.jsx    # Service display card
│   │   ├── ServiceCard.css
│   │   ├── TeamCard.jsx       # Team member card
│   │   ├── TeamCard.css
│   │   ├── ContactForm.jsx    # Contact form with validation
│   │   └── ContactForm.css
│   │
│   ├── pages/                 # Page components (one per route)
│   │   ├── Home.jsx           # Landing page
│   │   ├── Home.css
│   │   ├── About.jsx          # About us page
│   │   ├── About.css
│   │   ├── Services.jsx       # Services listing
│   │   ├── Services.css
│   │   ├── Solutions.jsx      # Industry solutions
│   │   ├── Solutions.css
│   │   ├── Portfolio.jsx      # Case studies/portfolio
│   │   ├── Portfolio.css
│   │   ├── Resources.jsx      # Blog/resources
│   │   ├── Resources.css
│   │   ├── Careers.jsx        # Careers page
│   │   ├── Careers.css
│   │   ├── Contact.jsx        # Contact page
│   │   └── Contact.css
│   │
│   ├── data/                  # Data files (content separated from UI)
│   │   ├── servicesData.js    # All services content
│   │   ├── teamData.js        # Team members data
│   │   └── portfolioData.js   # Portfolio projects data
│   │
│   ├── App.jsx                # Main app component (routing)
│   ├── main.jsx               # Entry point (renders App)
│   └── index.css              # Global styles & design system
│
├── index.html                 # HTML template
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── Dockerfile                 # Docker build instructions
├── docker-compose.yml         # Docker orchestration
├── nginx.conf                 # Nginx server config
├── .dockerignore              # Docker build exclusions
├── .gitignore                 # Git exclusions
├── README.md                  # Project documentation
└── PROJECT_GUIDE.md          # This file
```

---

## 🎨 Design System

### Color Palette

All colors are defined in `src/index.css` as CSS variables:

```css
/* Primary Colors */
--primary-red: #DC2626      /* Main brand color */
--dark-red: #991B1B         /* Hover states, dark accents */
--light-red: #FEE2E2        /* Backgrounds, highlights */

/* Red Scale */
--red-50: #FEF2F2
--red-100: #FEE2E2
--red-200: #FECACA
--red-600: #DC2626
--red-700: #B91C1C
--red-800: #991B1B
--red-900: #7F1D1D

/* Neutral Colors */
--dark-gray: #1F2937        /* Headings, dark text */
--medium-gray: #6B7280      /* Body text, descriptions */
--light-gray: #F9FAFB       /* Light backgrounds */
--white: #FFFFFF
--border-gray: #E5E7EB      /* Borders, dividers */

/* Gradients */
--gradient-red: linear-gradient(135deg, #DC2626 0%, #991B1B 100%)
--gradient-red-light: linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)
```

### Typography

```css
/* Font Families */
Headings: 'Outfit', sans-serif     /* Bold, modern */
Body: 'Inter', sans-serif          /* Clean, readable */

/* Font Sizes (Desktop) */
h1: 3.5rem (56px)
h2: 2.5rem (40px)
h3: 2rem (32px)
h4: 1.5rem (24px)
h5: 1.25rem (20px)
h6: 1rem (16px)
p: 1.125rem (18px)

/* Font Weights */
Headings: 700-900 (bold to black)
Body: 400-600 (regular to semibold)
```

### Spacing System

```css
--spacing-xs: 0.5rem (8px)
--spacing-sm: 1rem (16px)
--spacing-md: 1.5rem (24px)
--spacing-lg: 2rem (32px)
--spacing-xl: 3rem (48px)
--spacing-2xl: 4rem (64px)
```

### Border Radius

```css
--radius-sm: 0.375rem (6px)
--radius-md: 0.5rem (8px)
--radius-lg: 0.75rem (12px)
--radius-xl: 1rem (16px)
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-red: 0 10px 25px -5px rgba(220, 38, 38, 0.3)
```

---

## 📐 Layout Rules

### Responsive Breakpoints

```css
Mobile: < 768px
Tablet: 768px - 991px
Desktop: > 991px
Large Desktop: > 1200px
```

### Container Widths

```css
Max width: 1200px
Padding: 1.5rem (24px) on sides
```

### Section Spacing

```css
.section-padding: 4rem (64px) top/bottom
.section-padding-lg: 5rem (80px) top/bottom

Mobile: Reduced to 3rem (48px)
```

---

## 🧩 Component Architecture

### Component Rules

1. **One component per file** - Each component has its own `.jsx` and `.css` file
2. **Reusable components** go in `src/components/`
3. **Page components** go in `src/pages/`
4. **Data separated** from UI - Content in `src/data/`

### Component Structure Pattern

```jsx
// Import dependencies
import { useState } from 'react';
import './ComponentName.css';

// Component definition
const ComponentName = ({ prop1, prop2 }) => {
  // State and hooks
  const [state, setState] = useState(initialValue);

  // Event handlers
  const handleEvent = () => {
    // Logic here
  };

  // Render
  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  );
};

// Export
export default ComponentName;
```

### CSS Naming Convention

```css
/* Use kebab-case for class names */
.component-name { }
.component-name-title { }
.component-name-description { }

/* Use BEM-like structure for variants */
.component-name.active { }
.component-name:hover { }
```

---

## 📄 Page Structure

Each page follows this structure:

```jsx
import Hero from '../components/Hero';
import { Container, Row, Col } from 'react-bootstrap';
import './PageName.css';

const PageName = () => {
  return (
    <div className="pagename-page">
      {/* Hero Section */}
      <Hero 
        title="Page Title"
        subtitle="Page description"
        primaryButtonText="CTA Text"
        primaryButtonLink="/link"
      />

      {/* Content Sections */}
      <section className="section-name section-padding">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Section <span className="gradient-text">Title</span>
            </h2>
            <p className="section-description" data-aos="fade-up" data-aos-delay="100">
              Section description
            </p>
          </div>
          
          <Row>
            {/* Content here */}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PageName;
```

---

## 🎭 Animation Guidelines

### AOS (Animate On Scroll) Attributes

```jsx
// Basic fade-up animation
data-aos="fade-up"

// With duration
data-aos="fade-up" 
data-aos-duration="600"

// With delay (stagger effect)
data-aos="fade-up" 
data-aos-duration="600" 
data-aos-delay="100"

// Animation types available:
fade-up, fade-down, fade-left, fade-right
zoom-in, zoom-out
slide-up, slide-down, slide-left, slide-right
```

### CSS Transitions

```css
/* Standard transition */
transition: var(--transition-base);  /* 300ms ease-in-out */

/* Fast transition */
transition: var(--transition-fast);  /* 150ms ease-in-out */

/* Slow transition */
transition: var(--transition-slow);  /* 500ms ease-in-out */
```

---

## 📊 Data File Structure

### servicesData.js

```javascript
export const servicesData = [
  {
    id: 1,
    title: "Service Name",
    description: "Service description...",
    icon: "FaIconName",  // React Icons name
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  // ... more services
];
```

### teamData.js

```javascript
export const teamData = [
  {
    id: 1,
    name: "Full Name",
    position: "Job Title",
    bio: "Short bio...",
    image: "/path/to/image.jpg",
    social: {
      linkedin: "url",
      twitter: "url",
      github: "url"
    }
  },
  // ... more team members
];
```

### portfolioData.js

```javascript
export const portfolioData = [
  {
    id: 1,
    title: "Project Name",
    category: "Industry",
    description: "Project description...",
    image: "/path/to/image.jpg",
    technologies: ["Tech1", "Tech2", "Tech3"],
    results: "Measurable results..."
  },
  // ... more projects
];
```

---

## 🔧 Common Utility Classes

Use these classes from `index.css`:

```css
/* Text Colors */
.text-primary       /* Red color */
.text-dark          /* Dark gray */
.text-muted         /* Medium gray */
.gradient-text      /* Red gradient text */

/* Backgrounds */
.bg-light-red       /* Light red background */
.bg-light-gray      /* Light gray background */
.gradient-bg        /* Red gradient background */

/* Spacing */
.section-padding    /* Standard section padding */
.section-padding-lg /* Large section padding */

/* Shadows */
.shadow-custom      /* Standard shadow */
.shadow-red         /* Red-tinted shadow */

/* Animations */
.fade-in           /* Fade in animation */
.slide-in-left     /* Slide from left */
.slide-in-right    /* Slide from right */
```

---

## 🚀 Development Workflow

### Adding a New Page

1. Create page component: `src/pages/NewPage.jsx`
2. Create page styles: `src/pages/NewPage.css`
3. Add route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   // ...
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Add navigation link in `src/components/Header.jsx`

### Adding a New Component

1. Create component: `src/components/NewComponent.jsx`
2. Create styles: `src/components/NewComponent.css`
3. Import and use in pages:
   ```jsx
   import NewComponent from '../components/NewComponent';
   ```

### Updating Content

1. **Services**: Edit `src/data/servicesData.js`
2. **Team**: Edit `src/data/teamData.js`
3. **Portfolio**: Edit `src/data/portfolioData.js`
4. **Static content**: Edit page components directly

### Adding Images

1. Place image in appropriate folder:
   - `src/assets/images/hero/` for backgrounds
   - `src/assets/images/team/` for team photos
   - `src/assets/images/portfolio/` for projects
   - `src/assets/images/about/` for about page

2. Import in component:
   ```jsx
   import heroImage from '../assets/images/hero/background.jpg';
   ```

3. Or reference directly:
   ```jsx
   <img src="/src/assets/images/team/member-1.jpg" alt="..." />
   ```

---

## 🎯 Best Practices

### Code Style

- Use **functional components** with hooks
- Use **const** for component definitions
- Use **destructuring** for props
- Keep components **small and focused**
- Extract **reusable logic** into custom hooks

### CSS Guidelines

- Use **CSS variables** for colors and spacing
- Follow **mobile-first** approach
- Use **flexbox** and **grid** for layouts
- Avoid **!important** unless absolutely necessary
- Keep **specificity low**

### Performance

- Use **lazy loading** for images
- Minimize **bundle size** (current: 352KB JS, 283KB CSS)
- Use **production build** for deployment
- Enable **gzip compression** (configured in nginx)

### Accessibility

- Use **semantic HTML** (header, nav, main, section, footer)
- Add **alt text** to all images
- Use **ARIA labels** for icons and buttons
- Ensure **keyboard navigation** works
- Maintain **color contrast** ratios

---

## 🐳 Docker Deployment

### Build and Run

```bash
# Development
npm run dev

# Production build
npm run build

# Docker (recommended for production)
docker-compose up -d

# Or manual Docker
docker build -t ai-company-website .
docker run -p 80:80 ai-company-website
```

### Environment Variables

Currently no environment variables needed. If you add API integrations:

1. Create `.env` file
2. Add variables: `VITE_API_URL=https://api.example.com`
3. Access in code: `import.meta.env.VITE_API_URL`
4. Add to `.gitignore`

---

## 📝 File Naming Conventions

```
Components: PascalCase.jsx (e.g., ServiceCard.jsx)
Pages: PascalCase.jsx (e.g., About.jsx)
Data files: camelCase.js (e.g., servicesData.js)
CSS files: Match component name (e.g., ServiceCard.css)
Images: kebab-case.jpg (e.g., team-member-1.jpg)
```

---

## 🔍 Quick Reference

### Import Paths

```jsx
// Components
import Header from '../components/Header';

// Pages
import Home from './pages/Home';

// Data
import { servicesData } from '../data/servicesData';

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Icons
import { FaBrain } from 'react-icons/fa';

// Router
import { Link } from 'react-router-dom';
```

### Common Bootstrap Grid

```jsx
<Container>
  <Row>
    <Col lg={4} md={6} className="mb-4">
      {/* Content */}
    </Col>
  </Row>
</Container>
```

### Common Section Structure

```jsx
<section className="section-name section-padding bg-light-gray">
  <Container>
    <div className="section-header text-center mb-5">
      <h2 className="section-title" data-aos="fade-up">
        Title <span className="gradient-text">Highlight</span>
      </h2>
      <p className="section-description" data-aos="fade-up" data-aos-delay="100">
        Description text
      </p>
    </div>
    {/* Section content */}
  </Container>
</section>
```

---

## 📞 Support & Customization

For major changes:
1. Review this guide first
2. Check existing patterns in similar components
3. Test on mobile, tablet, and desktop
4. Run `npm run build` to verify no errors
5. Update documentation if adding new patterns

---

**Last Updated**: December 2024
**Version**: 1.0.0
