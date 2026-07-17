# Portfolio

A modern, responsive, and high-performance personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. This project showcases my professional profile, technical skills, work experience, projects, certifications, and education through an elegant and interactive user interface.

The application is designed with reusable components, clean architecture, responsive layouts, smooth animations, and light/dark theme support to provide an excellent user experience across desktop, tablet, and mobile devices.

---

## GitHub Repository

```
https://github.com/Ashu11122000/Portfolio
```

---

# Table of Contents

- About
- Features
- Tech Stack
- Project Structure
- Pages
- Components
- Folder Structure
- Installation
- Available Scripts
- Responsive Design
- Theme Support
- Performance Optimizations
- Accessibility
- Project Architecture
- Dependencies
- Development Workflow
- Future Improvements
- License
- Author

---

# About

This portfolio serves as my personal website where I showcase:

- Professional introduction
- Technical skills
- Featured projects
- Work experience
- Certifications
- Education
- Contact information
- Social media profiles

The project focuses on clean UI, maintainable code, reusable components, and modern frontend development best practices.

---

# Features

## User Interface

- Modern responsive design
- Premium glassmorphism effects
- Gradient backgrounds
- Smooth animations
- Interactive hover effects
- Professional typography
- Floating UI elements
- Responsive grid layouts
- Consistent spacing system

## User Experience

- Fast page loading
- Smooth page transitions
- Mobile-first design
- Scroll animations
- Accessible navigation
- Reusable UI components
- Interactive project cards
- Certification modal previews

## Theme

- Light mode
- Dark mode
- Theme persistence using Local Storage
- Smooth theme transitions

## Sections

- Hero
- About
- Skills
- Experience
- Projects
- Certifications
- Education
- Footer

---

# Tech Stack

## Frontend

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Routing

- React Router DOM

## Animations

- Framer Motion

## Icons

- Lucide React
- React Icons

## Styling

- Tailwind CSS
- Custom CSS
- CSS Animations
- Glassmorphism

## Utility Libraries

- clsx
- class-variance-authority
- tailwind-merge

---

# Project Structure

```
Portfolio
│
├── public
│
├── src
│   ├── assets
│   │
│   ├── components
│   │   ├── about
│   │   ├── certifications
│   │   ├── common
│   │   ├── experience
│   │   ├── hero
│   │   ├── layout
│   │   ├── projects
│   │   ├── skills
│   │   ├── ui
│   │   └── context
│   │
│   ├── data
│   ├── hooks
│   ├── pages
│   ├── router
│   ├── styles
│   ├── types
│   ├── utils
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# Pages

## Home

The landing page introduces visitors to my profile and provides quick access to all major sections.

Contains:

- Hero
- About Preview
- Skills
- Featured Projects
- Experience
- Certifications
- Education

---

## About

Displays detailed personal information including:

- Career summary
- Professional introduction
- Personal information
- Education

---

## Projects

Displays all portfolio projects with:

- Technology badges
- Live demo links
- GitHub links
- Project descriptions
- Search functionality
- Filtering

---

## Skills

Displays categorized technical skills with animated skill cards.

---

## Experience

Displays professional work experience in timeline format.

---

## Not Found

Custom 404 page.

---

# Components

## Hero

Contains

- Hero Content
- Hero Buttons
- Hero Stats
- Hero Code Card
- Tech Stack

---

## About

Contains

- About Card
- About Preview
- Personal Information
- Education Cards

---

## Skills

Contains

- Skill Card
- Skill Category
- Skill Grid
- Skill Progress

---

## Projects

Contains

- Project Grid
- Project Card
- Search Bar
- Filter Bar
- Technology Badge
- Project Modal

---

## Experience

Contains

- Experience Timeline
- Timeline Item
- Experience Card
- Technology Badge

---

## Certifications

Contains

- Certification Grid
- Certification Card
- Featured Certifications
- Certification Modal

---

## Common Components

Reusable UI components including

- Button
- Card
- Badge
- Divider
- Container
- Section Title
- Theme Toggle
- Social Icons

---

## UI Components

Reusable design components including

- Glass Card
- Animated Background
- Floating Shapes
- Gradient Text

---

# Folder Structure

## assets

Contains images, icons, and static assets.

---

## components

Contains all reusable React components grouped by feature.

---

## context

Contains theme context and provider.

---

## data

Stores all static application data including

- Hero
- Projects
- Skills
- Experience
- Education
- Certifications
- Social Links
- Statistics
- Personal Information

---

## hooks

Custom React hooks including

- Theme Hook
- Local Storage Hook

---

## pages

Application pages.

---

## router

Application routing configuration.

---

## styles

Global CSS files.

Includes

- Global styles
- Animations
- Scrollbar customization

---

## types

Centralized TypeScript interfaces and types.

---

## utils

Reusable utility functions.

---

# Installation

Clone the repository

```bash
git clone https://github.com/Ashu11122000/Portfolio.git
```

Move into the project directory

```bash
cd Portfolio
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# Available Scripts

## Development

```bash
npm run dev
```

Starts the Vite development server.

---

## Production Build

```bash
npm run build
```

Creates an optimized production build.

---

## Preview Production Build

```bash
npm run preview
```

Serves the production build locally.

---

## Lint

```bash
npm run lint
```

Runs ESLint for code quality.

---

# Responsive Design

The application is fully responsive across different screen sizes.

Supported devices include

- Mobile
- Tablet
- Laptop
- Desktop
- Large Screens

---

# Theme Support

Supports both Light and Dark themes.

Features include

- Theme persistence
- Smooth transition
- Local storage integration

---

# Performance Optimizations

- Vite build optimization
- Lazy rendering where applicable
- Reusable components
- Optimized React rendering
- Component modularization
- Clean TypeScript architecture
- Optimized CSS
- Responsive images
- Minimal bundle size

---

# Accessibility

The application follows accessibility best practices including

- Semantic HTML
- Keyboard navigation
- Accessible buttons
- Focus states
- Sufficient color contrast
- Responsive typography

---

# Project Architecture

The project follows a feature-based architecture.

```
Pages
    │
    ▼
Components
    │
    ▼
Data
    │
    ▼
Types
    │
    ▼
Utilities
```

This architecture improves

- Scalability
- Maintainability
- Reusability
- Code organization

---

# Dependencies

## Main Dependencies

- React
- React DOM
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons
- clsx
- class-variance-authority
- tailwind-merge

---

## Development Dependencies

- TypeScript
- Vite
- ESLint
- TypeScript ESLint
- Vite React Plugin

---

# Development Workflow

1. Clone the repository.
2. Install dependencies.
3. Run the development server.
4. Create reusable components.
5. Update data files.
6. Test responsiveness.
7. Build the production version.
8. Deploy to a hosting platform.

---

# Future Improvements

Possible future enhancements include

- Blog section
- Contact form integration
- Email service integration
- Internationalization (i18n)
- Project categories
- Project analytics
- Testimonials
- Downloadable resume
- SEO enhancements
- PWA support
- Unit testing
- End-to-end testing

---

# License

This project is intended for personal portfolio use.

Feel free to fork the repository for learning purposes. Please provide appropriate credit if you reuse significant portions of the project.

---

# Author

**Ashish Sharma**

Software Developer

GitHub

```
https://github.com/Ashu11122000
```

LinkedIn

```
https://www.linkedin.com/in/ashish-sharma-383439191/
```

Location

```
Panchkula, Haryana, India
```

---

Thank you for visiting this repository.
If you find this project helpful, consider giving it a star.