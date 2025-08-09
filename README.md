## venue-find

UK-based venue finding company website. This repo currently contains the frontend app and supporting assets.

### Structure
- `web/`: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4

### Pages
- `/` Home (landing)
- `/enquiry` Enquiry submission
- `/contact` Contact
- `/testimonials` Testimonials
- `/about` About
- `/privacy` Privacy Policy
- `/terms` Terms of Service

### Features
- Shared layout with header/navigation and footer
- Brand palette in `web/src/app/globals.css`
- SEO metadata (Open Graph/Twitter) in `web/src/app/layout.tsx`
- `robots.txt` and `sitemap.xml` auto-generated

### Getting Started
1) Install dependencies
```bash
cd web
npm install
```
2) Run the dev server
```bash
npm run dev
# http://localhost:3000
```
3) Build for production
```bash
npm run build && npm start
```

### Scripts (in `web`)
- `dev`: Start Next.js dev server (Turbopack)
- `build`: Production build
- `start`: Start production server
- `lint`: Lint code

### Notes
- The enquiry and contact forms currently log submissions to the console as placeholders.
- Update `metadataBase` and links to your real domain in `web/src/app/layout.tsx`, `web/src/app/robots.ts`, and `web/src/app/sitemap.ts` when ready to deploy.

### Contributing
See `CONTRIBUTING.md`.

### Security
See `SECURITY.md` for reporting vulnerabilities.

### License
Copyright © 2025 venue-find. All rights reserved.

