# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm install          # Install dependencies
npm start            # Start dev server (localhost:3000)
npm run build        # Production build
npm run deploy       # Build and deploy to GitHub Pages
npm run optimize-images  # Run image optimization script
```

## Architecture Overview

Personal portfolio site for Will Hunt built with React 19 and Framer Motion. Deployed to GitHub Pages at `phunt22.github.io`.

### Routing

Uses **HashRouter** (not BrowserRouter) for GitHub Pages compatibility. Routes defined in `src/App.js`:
- `/` - Home page (`CleanHome.js`) with interactive hero
- `/projects` - Portfolio showcase (`Projects.js`) with modal cards

### Key Pages

**`src/pages/CleanHome.js`** - Hero page with sophisticated animations:
- Custom cursor with drawing trail (press 'c' to clear)
- Per-letter proximity-based hover effects
- Magnetic buttons and navigation items
- Session-based intro animation (plays once via sessionStorage)

**`src/pages/Projects.js`** - Project grid with expandable modal:
- Variable-sized card layout
- Framer Motion `layoutId` for smooth modal transitions
- Skill tags and attachment links

### Data Layer

- `src/data/projects.js` - Project objects with id, category, title, description, skills[], attachments[], images
- `src/data/socialLinks.js` - Social platform links with icons

### Animation Patterns

1. **One-time intros**: Check `sessionStorage` before animating
2. **Proximity effects**: Mouse position tracked for letter/button attraction
3. **Spring physics**: Magnetic effects use spring config (stiffness 50-300, damping 20-40)
4. **Scroll transforms**: Navbar uses `useTransform` for scroll-based glassmorphism
5. **Layout animations**: Modal uses `layoutId` pairing between card and expanded view

### Styling

Tailwind CSS with custom config in `tailwind.config.js`:
- Custom social colors: `github`, `linkedin`, `strava`, `email`
- Custom `footerFade` animation

### Fonts

- **Clash Display** (`font-clash`) — Display/title font, used for headings. Weight: medium (500).
- **Archivo** (`font-archivo`) — Body font, set as the default in `index.css`. Imported from Fontshare.
- **Note:** Satoshi (Fontshare) is a strong alternative pairing with Clash Display if Archivo doesn't work out — same foundry, designed to complement each other.

### Assets

Static files in `public/assets/`:
- `optimized/` - Headshots
- `projects/` - Project thumbnails, videos, PDFs
- `Resume.pdf`
