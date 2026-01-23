# ExPro Policy Website

Modern, Chrome Web Store–compliant policy website for the ExPro Chrome extension.

## Features

- 8 complete pages (Home, Features, Privacy, Terms, FAQ, Contact, About, Security)
- React + Vite for fast development
- Tailwind CSS for styling
- Fully responsive design
- SEO-optimized
- WCAG accessibility compliant
- No tracking or analytics

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with header/footer
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   ├── Features.jsx        # Features page
│   │   ├── Privacy.jsx         # Privacy Policy
│   │   ├── Terms.jsx           # Terms of Service
│   │   ├── FAQ.jsx             # FAQ / Help Center
│   │   ├── Contact.jsx         # Contact / Support
│   │   ├── About.jsx           # About page
│   │   └── Security.jsx        # Security & Permissions
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to change the primary color scheme:

```js
colors: {
  primary: {
    // Your color palette
  }
}
```

### Content

All page content is in `src/pages/`. Edit the JSX files to update text, add sections, or modify layouts.

### Contact Emails

Update email addresses throughout the site:
- `support@expro.dev`
- `bugs@expro.dev`
- `features@expro.dev`
- `legal@expro.dev`
- `privacy@expro.dev`
- `security@expro.dev`

## Deployment

This is a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

See LICENSE file for details.
