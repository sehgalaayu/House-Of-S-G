# House of S&G

Marketing site for House of S&G — direct-from-Panipat cotton bedsheets and home
linen for boutique retailers in the UK. Static Next.js site, no backend.

## Stack

- Next.js 16 (App Router), static export (`output: "export"`)
- TypeScript, CSS Modules — no UI framework
- Zero server runtime: the whole site is prerendered HTML/CSS/JS

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
```

Static output is written to `out/`. Open `out/index.html` directly or serve
the folder with any static file server to check the production build:

```bash
npx serve out
```

## Content to edit before launch

- **Product specs** — `src/data/products.ts`. Six placeholder designs with
  fabric/thread-count/weave/size fields; swap in real specs and photography.
  Each product card currently renders a labelled color swatch instead of a
  photo (`[ product shot — Name ]`) — replace `Products.tsx`'s `.swatch` div
  with an `<Image>` once photography exists.
- **Hero imagery** — `src/components/Hero.tsx` has a placeholder frame
  (`[ hero photograph — sateen weave, raking light ]`) in place of the hero
  photo.
- **Contact details** — `src/components/Contact.tsx`: `EMAIL` and
  `WHATSAPP_NUMBER` (currently a placeholder — replace with the real WhatsApp
  Business number, digits only, country code first, no `+` or spaces).
- **IEC number** — `src/components/Footer.tsx` currently reads "IEC no. on
  request"; add the actual number if you're comfortable publishing it.

## Wiring the inquiry form to receive submissions

The form at `#inquire` works two ways:

1. **No configuration (default)** — submitting opens the visitor's email
   client with a prefilled message to `hello@houseofsandg.com`. Works
   anywhere, zero setup, but depends on the visitor having a mail client
   configured.
2. **Form backend (recommended)** — set `NEXT_PUBLIC_FORM_ENDPOINT` to a
   Formspree (or compatible) endpoint and the form POSTs there instead,
   showing an in-page confirmation without leaving the site:

   ```bash
   # .env.local
   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
   ```

   Formspree's free tier is enough for a low-volume wholesale inquiry form.
   Set the same variable in your host's environment variables (Vercel/Netlify
   project settings) so it's baked into the static build.

## Deploy

### Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import the repo at [vercel.com/new](https://vercel.com/new). Vercel
   detects Next.js automatically — no config needed.
3. Add `NEXT_PUBLIC_FORM_ENDPOINT` under Project Settings → Environment
   Variables if using a form backend.

### Netlify

1. Push this repo, then "Add new site" → "Import an existing project" in
   Netlify.
2. Build command: `npm run build`. Publish directory: `out`.
3. Add `NEXT_PUBLIC_FORM_ENDPOINT` under Site settings → Environment
   variables if using a form backend.

## Project structure

```
src/
  app/
    layout.tsx       root layout, fonts, metadata
    page.tsx          assembles the single page from sections below
    globals.css       CSS variables (palette), resets, keyframes
  components/
    Header.tsx        sticky nav + mobile menu (client component)
    Hero.tsx           opening statement + specimen ticket
    Marquee.tsx        scrolling strip of concrete claims
    Story.tsx          direct-sourcing story, Aayu/Puneet
    Products.tsx       six-design cloth gallery
    Contact.tsx        inquiry copy + WhatsApp/email
    InquiryForm.tsx    the actual form (client component)
    Footer.tsx         IEC line, year
  data/
    products.ts        product spec data
```
