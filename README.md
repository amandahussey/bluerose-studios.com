# Blue Rose Studios

The website for Blue Rose Studios, home of the children's book **_Lola and the Lost Ring_**, written and illustrated by Amanda Hussey.

**Live site:** https://www.bluerose-studios.com
**Store:** https://bluerose-studios.square.site

## Pages

| Route | File | What it is |
| --- | --- | --- |
| `#/` | `src/Home.tsx` | Landing page |
| `#/books/lola` | `src/AboutLola.tsx` | Book page with **Buy Book** button and activity pages |
| `#/games` | `src/Games.tsx` | Games index |
| `#/games/lola/spot-the-difference` | `src/SpotTheDifference.tsx` | Spot the Difference game |
| `#/about` | `src/AboutBlueRose.tsx` | About Blue Rose Studios |
| `#/thank-you` | `src/ThankYou.tsx` | Order confirmation (not currently used; Square Online shows its own) |

The site uses `HashRouter`, so every URL has a `#/` in it. That's what lets GitHub Pages serve any route without a server.

## Tech stack

- React 18 + TypeScript, built with Vite
- MUI (Material UI) for components and theming (`src/theme.ts`)
- React Router (hash routing)
- `lottie-react` for the confetti animation
- Hosted on GitHub Pages with the custom domain `www.bluerose-studios.com`

## Getting started

Requires **Node 20** (Vite 6 won't run on Node 16). With nvm:

```sh
nvm use        # reads .nvmrc
npm install
npm run dev    # http://localhost:5173
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

## Deploying

```sh
nvm use
npm run deploy
```

Changes are usually live at www.bluerose-studios.com within a minute or two.

**Custom domain:** `public/CNAME` contains `www.bluerose-studios.com`. Vite copies it into every build, so the custom domain stays set after each deploy. Don't delete it.

## Selling the book (Square)

The **Buy Book** buttons link to the book's product page on the Square Online store. The link is `buyBookUrl` in `src/AboutLola.tsx`.

Checkout is handled entirely by Square. Everything below is set up in the Square Dashboard, not in this repo:

- **Sales tax:** automatic, destination-based for Colorado orders (Settings → Sales taxes → Shipping & non-physical tax overrides). Out-of-state orders aren't charged tax, and shipping isn't taxed.
- **Shipping:** "US Shipping" profile (Settings → Fulfillment methods → Shipment): $5 for 1 book, $7 for 2–3, $10 for 4+.
- **Inventory:** stock is tracked on the item in Items → Item library.
- **Store editor:** square.online → Website → Editor. Click **Publish** after making changes.

## Project structure

```
public/          Static files copied as-is (CNAME, favicon)
src/
  assets/        Images, book cover, activity pages, Lottie JSON
  App.tsx        Routes
  Nav.tsx        Top navigation
  theme.ts       MUI theme (colors, typography)
  *.tsx          One file per page
```
