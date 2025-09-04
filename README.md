# Tiny Big Woods — Presale (Next.js + Netlify)

A beautiful, warm, single-page site for pre-selling **Tiny Big Woods** live-edge signs.

## Highlights
- Next.js (App Router, TypeScript) + Tailwind CSS
- Netlify-ready with `@netlify/plugin-nextjs`
- **Netlify Forms (plugin v5)** compatible using a static detector file + client POST
- Sections: Hero, Gallery, Features, Presale Form, FAQ, Thanks

## Dev
```bash
npm install
npm run dev
```

## Deploy to Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Plugin: `@netlify/plugin-nextjs` (configured in `netlify.toml`)

## Netlify Forms (v5)
Forms inside App Router aren’t auto-detected by plugin v5. This project includes:
- `public/__forms.html` — hidden static form definition (`tbw-presale`)
- The on-page React form posts to `/__forms.html` (`application/x-www-form-urlencoded`), then redirects to `/thanks`

If you need to bypass the verification temporarily, you can set `NETLIFY_NEXT_VERIFY_FORMS=false` in Netlify env (not recommended long term).


## Stripe Payment Link (optional)
Set `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` in your Netlify environment to a Stripe **Payment Link** URL (e.g., https://buy.stripe.com/...). When present, the site will:
- Open the payment link in a new tab after a successful form submit, and
- Show a **Pay $20 Deposit** button on the thanks page.
