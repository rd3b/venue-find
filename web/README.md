## Erland Events web

Next.js 15 app for the Erland Events website.

### Tech
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

### Development
```bash
npm install
npm run dev
# http://localhost:3000
```

### Production
```bash
npm run build
npm start
```

### Project notes
- Update the domain and metadata in `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` for deployment.
- Forms (`/enquiry`, `/contact`) are placeholders that log to console; integrate a backend or third-party service later.

