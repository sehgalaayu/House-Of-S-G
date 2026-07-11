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

## How the inquiry form works

Every submission does two things, independently:

1. **Gets you notified** — opens the visitor's email client with a prefilled
   message to `hello@houseofsandg.com` (zero setup), or, if you set
   `NEXT_PUBLIC_FORM_ENDPOINT` to a Formspree endpoint, POSTs there instead
   and shows an in-page confirmation without the visitor leaving the site.
   See "Formspree setup" below.
2. **Gets saved permanently** — if `NEXT_PUBLIC_SUPABASE_URL` and
   `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set, the same submission is also
   inserted as a row in a `enquiries` table in Supabase, so you have a
   searchable record even of enquiries you haven't replied to yet. If
   Supabase isn't configured, or the insert fails, the notification above
   still goes through — the database is a bonus record, not the only copy.

Both are optional independently. Configure neither and the form still works
via mailto. Configure both and you get instant notification *and* a
database you can query later ("how many enquiries did we get last month").

### Environment variables

Create `.env.local` for local dev, and set the same keys in your host's
environment variables (Vercel/Netlify project settings) so they're baked
into the static build:

```bash
# .env.local
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
NEXT_PUBLIC_SUPABASE_URL=https://rcnodantgfxyiqcawclq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...   # the "anon" / "public" key, never the service_role key
NEXT_PUBLIC_SITE_URL=https://www.houseofsandg.com
```

All of these are `NEXT_PUBLIC_*`, meaning they end up readable in the
browser's page source — that's expected and safe for the Supabase anon key
(see RLS note below) and the form endpoint. Never put a Supabase
`service_role` key, a Resend API key, or any other secret key behind a
`NEXT_PUBLIC_*` variable.

### Formspree setup (recommended notification path)

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form, point it at `hello@houseofsandg.com`.
3. Copy the endpoint it gives you (`https://formspree.io/f/xxxxxxx`) into
   `NEXT_PUBLIC_FORM_ENDPOINT`.
4. Every submission now emails that inbox directly *and* shows a
   confirmation on the site — no visitor mail client required.

### Supabase setup (enquiry database)

The project already has the Supabase MCP server configured
(`.mcp.json`, project ref `rcnodantgfxyiqcawclq`) so Claude Code can run
SQL/queries against it directly once you authenticate. To finish setup:

1. **Authenticate the MCP connection** — in a normal terminal (not this
   session), run:
   ```bash
   claude /mcp
   ```
   Select the `supabase` server and follow the browser login flow. Once
   authenticated, ask Claude Code to run migrations or query the table for
   you directly, or do the steps below by hand in the Supabase dashboard.

2. **Create the `enquiries` table** — the schema lives in
   [`supabase/migrations/0001_enquiries.sql`](supabase/migrations/0001_enquiries.sql).
   Apply it either by asking Claude Code (once MCP is authenticated), or by
   pasting the file's contents into the Supabase dashboard's **SQL Editor**
   and running it once.

3. **Get your API keys** — in the Supabase dashboard: **Project Settings →
   API**. Copy the **Project URL** and the **anon / public** key into
   `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

4. **Why it's safe to expose the anon key**: the migration enables Row Level
   Security and only grants the `anon` role `INSERT` — there is no `SELECT`
   policy for anon, so nobody can read other people's enquiries through the
   public key, even though it's visible in the page source. Only you, signed
   into the Supabase dashboard (or an authenticated MCP session), can read
   the table.

### Maintaining / reading the enquiry database

You don't need to build an admin page — Supabase's dashboard is your admin
panel:

- **View new enquiries**: Supabase dashboard → **Table Editor** →
  `enquiries`. Sorted newest-first by default; each row has name, shop,
  email, interest, message, and a timestamp.
- **Mark one as handled**: tick the `handled` checkbox on that row (or ask
  Claude Code to run `update enquiries set handled = true where id = '...'`
  once MCP is authenticated). Filter the table view to `handled = false` to
  see your open queue.
- **Export/report**: Table Editor → the row menu has a CSV export, or run
  SQL in the SQL Editor, e.g. `select count(*) from enquiries where
  created_at > now() - interval '30 days'`.
- **Back it up**: Supabase takes automatic daily backups on paid plans; on
  the free tier, periodically export the table as CSV if you want your own
  copy.

### Optional: Agent Skills for Supabase

```bash
npx skills add supabase/agent-skills
```

Installs ready-made instructions/scripts that make Claude Code more
accurate when you ask it to write migrations or queries against this
project going forward. Optional — everything above works without it.

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub (already done — see
   [github.com/sehgalaayu/House-Of-S-G](https://github.com/sehgalaayu/House-Of-S-G)).
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and
   import `sehgalaayu/House-Of-S-G`. Vercel detects Next.js automatically —
   no build config needed.
3. Before the first deploy (or right after), add these under **Project
   Settings → Environment Variables**: `NEXT_PUBLIC_FORM_ENDPOINT`,
   `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
   `NEXT_PUBLIC_SITE_URL`. Redeploy after adding them.
4. Vercel gives you a free `*.vercel.app` URL immediately — use that to
   check everything works before pointing your real domain at it.

### Netlify (alternative)

1. "Add new site" → "Import an existing project" → pick the GitHub repo.
2. Build command: `npm run build`. Publish directory: `out`.
3. Add the same environment variables under **Site settings → Environment
   variables**.

## Going live: buying a domain and pointing it at the site

1. **Buy the domain.** Any registrar works; Namecheap or Cloudflare
   Registrar tend to be the least pushy about upsells and are cheap for
   `.com`/`.co.uk`. Search for something close to `houseofsandg.com` (or
   `.co.uk` given the UK audience) — this is a purchase you'll need to make
   yourself with your own payment method; I can't buy it for you.
2. **Add the domain in Vercel**: Project → **Settings → Domains** → enter
   the domain → Vercel shows you the exact DNS records to add (usually an
   `A` record for the root domain and a `CNAME` for `www`).
3. **Add those records at your registrar**: log into the registrar's DNS
   management page and add exactly what Vercel showed you. This step
   happens outside of Vercel, at whoever you bought the domain from.
4. **Wait for propagation** (usually minutes, sometimes up to ~24h). Vercel
   auto-issues an SSL certificate once DNS resolves correctly — you'll see
   a green checkmark next to the domain in the Vercel dashboard.
5. **Update `NEXT_PUBLIC_SITE_URL`** in Vercel's environment variables to
   the real domain (`https://www.houseofsandg.com` or whatever you bought),
   then redeploy — this value feeds the sitemap, canonical URLs, and Open
   Graph tags, so it needs to match the live domain exactly.

## SEO — what's already built in, and what to do once you're live

Already in the code, nothing further to build:

- Per-page `<title>`/description via `src/app/layout.tsx`, driven by
  `src/lib/site.ts` — edit `SITE_DESCRIPTION` there if the pitch changes.
- `sitemap.xml` and `robots.txt`, generated automatically
  (`src/app/sitemap.ts`, `src/app/robots.ts`).
- Open Graph / Twitter card image, generated automatically from
  `src/app/opengraph-image.tsx` — shows up as the preview card when the
  site is shared on WhatsApp, LinkedIn, Twitter/X, etc.
- `Organization` JSON-LD structured data (in `layout.tsx`) describing the
  business, address, and service area for search engines.

Manual steps once the real domain is live (these need your own Google
account, so I can't do them from here):

1. **Google Search Console** — go to
   [search.google.com/search-console](https://search.google.com/search-console),
   add your domain, verify ownership (Vercel/your registrar both offer a
   one-click DNS TXT record for this).
2. **Submit the sitemap** — inside Search Console, **Sitemaps** → submit
   `https://www.houseofsandg.com/sitemap.xml`.
3. **Request indexing** — Search Console → URL Inspection → paste your
   homepage URL → **Request Indexing**, so Google doesn't wait to discover
   it on its own schedule.
4. **Bing Webmaster Tools** (optional but free and quick) — same idea at
   [bing.com/webmasters](https://www.bing.com/webmasters); it also feeds
   DuckDuckGo.
5. **Google Business Profile** — since this is a real trading business,
   create a free listing at
   [business.google.com](https://business.google.com) with the Panipat
   address; it helps local/regional search relevance even for a UK-facing
   exporter.
6. Once you have real product photography, add descriptive `alt` text when
   you replace the placeholder swatches in `Products.tsx` — image alt text
   is a real (if small) ranking signal and matters for accessibility either
   way.

## Project structure

```
src/
  app/
    layout.tsx           root layout, fonts, metadata, JSON-LD
    page.tsx             assembles the single page from sections below
    globals.css          CSS variables (palette), resets, keyframes
    sitemap.ts           generates sitemap.xml at build
    robots.ts            generates robots.txt at build
    opengraph-image.tsx  generates the OG/Twitter share image at build
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
  lib/
    site.ts            site URL/name/description, used by metadata + sitemap
    supabase.ts         Supabase client (no-op if env vars unset)
supabase/
  migrations/
    0001_enquiries.sql  enquiries table schema + RLS policy
```
