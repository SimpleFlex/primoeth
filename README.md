# PRIMO.ETH — Web3 Growth, Community & Code (Next.js)

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # production build

## Edit your content (no code changes)

- `data/site.ts` name, email, socials, intro, stats, about, services
- `data/work.ts` your projects (copy a block to add one)
- `data/posts.ts` your articles (each opens at /writing/<slug>)
- `data/testimonials.ts` testimonials + photos

## Pictures

Put image files in `public/images/` and reference them, e.g. `image: "/images/project1.jpg"`.
Empty `image` fields show the striped placeholder.

## 3D

The hero scene is pure CSS: `components/Scene.tsx` + styles in `app/globals.css`
(`.stack`, `.slab`, `.cube`). Project cards tilt in 3D on hover.

## Deploy

Push to GitHub, import the repo in Vercel.
