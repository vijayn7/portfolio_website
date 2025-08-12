# Project Structure

This document outlines the clean, organized structure of the Next.js portfolio project.

## 📁 Directory Structure

```
portfolio-nextjs/
├── README.md                    # Project documentation
├── package.json                 # Dependencies and scripts
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── .gitignore                  # Git ignore rules
├── deploy.sh                   # Deployment script
│
├── public/                     # Static assets
│   ├── profile-image.jpg       # Profile photo
│   └── assets/                 # Company logos and images
│       ├── aptiv_logo.jpeg
│       ├── Michigan.jpeg
│       └── ...
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with SEO & metadata
│   │   ├── page.tsx            # Home page component
│   │   └── globals.css         # Global styles
│   │
│   └── components/             # React components
│       ├── index.ts            # Component exports
│       │
│       ├── Me.tsx              # About section
│       ├── Me.css              # About section styles
│       │
│       ├── Projects.tsx        # Projects showcase
│       ├── Projects.css        # Projects styles
│       ├── ProjectCard.tsx     # Individual project card
│       ├── ProjectCard.css     # Project card styles
│       │
│       ├── Experience.tsx      # Work experience
│       ├── Experience.css      # Experience styles
│       ├── ExperienceCard.tsx  # Individual experience card
│       ├── ExperienceCard.css  # Experience card styles
│       │
│       ├── Skills.tsx          # Technical skills
│       ├── Skills.css          # Skills styles
│       │
│       ├── Education.tsx       # Education background
│       ├── Education.css       # Education styles
│       │
│       ├── Navbar.tsx          # Navigation component
│       ├── Navbar.css          # Navigation styles
│       │
│       ├── Footer.tsx          # Footer with social links
│       ├── Footer.css          # Footer styles
│       │
│       └── colors.css          # Color variables
│
└── out/                        # Static build output (after npm run build)
    ├── index.html              # Generated static page
    ├── _next/                  # Next.js assets
    └── ...
```

## 🧩 Component Architecture

### Page Components
- **`page.tsx`**: Main entry point that orchestrates all sections
- **`layout.tsx`**: Provides SEO metadata and `<noscript>` fallback

### Section Components
- **`Me.tsx`**: Personal introduction and overview
- **`Projects.tsx`**: Portfolio projects with ProjectCard components
- **`Experience.tsx`**: Professional experience with ExperienceCard components
- **`Skills.tsx`**: Technical skills with animated tiles
- **`Education.tsx`**: Academic background and coursework

### UI Components
- **`Navbar.tsx`**: Navigation with active section highlighting
- **`Footer.tsx`**: Social links and contact information
- **`ProjectCard.tsx`**: Reusable project display component
- **`ExperienceCard.tsx`**: Reusable experience display component

## 🎨 Styling Architecture

### Global Styles
- **`globals.css`**: App-wide styles and layout
- **`colors.css`**: CSS custom properties for consistent theming

### Component Styles
Each component has its own CSS file following the pattern:
- Component logic in `.tsx` file
- Component styles in corresponding `.css` file
- Shared colors and variables from `colors.css`

## 🚀 Scripts Reference

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Build and preview locally
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
npm run clean        # Clean build artifacts
npm run deploy       # Run deployment script
```

## 📦 Key Dependencies

### Runtime
- **Next.js 15**: React framework with SSG
- **React 19**: UI library
- **Framer Motion**: Animations
- **Font Awesome**: Icons

### Development
- **TypeScript**: Type safety
- **ESLint**: Code linting
- **Tailwind CSS**: Utility-first CSS (if needed)

## 🔧 Configuration Files

- **`next.config.ts`**: Enables static export and image optimization
- **`tsconfig.json`**: TypeScript compiler options
- **`package.json`**: Project metadata and scripts
- **`.gitignore`**: Version control ignore rules

## 🌟 Features

1. **Static Site Generation**: All content pre-rendered
2. **TypeScript**: Full type safety
3. **Responsive Design**: Mobile-first approach
4. **Accessibility**: WCAG compliant with noscript fallback
5. **Performance**: Optimized images and code splitting
6. **SEO**: Comprehensive meta tags and structured data

---

This structure ensures maintainability, scalability, and excellent performance for the portfolio website.
