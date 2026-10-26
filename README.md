# Kunal Singh Portfolio

Production-ready Next.js 15 portfolio, prepared for Vercel.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Name | Required | Purpose |
| --- | --- | --- |
| `GMAIL_USER` | Yes (contact form) | Gmail address that receives messages |
| `GMAIL_PASS` | Yes (contact form) | Gmail [App Password](https://myaccount.google.com/apppasswords), not your login password |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL, e.g. `https://your-app.vercel.app` |

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Keep Framework Preset as **Next.js**.
4. Add the environment variables above in Project Settings → Environment Variables.
5. Deploy.

Vercel detects Next.js automatically. No `vercel.json` is required.

After the first deploy, set `NEXT_PUBLIC_SITE_URL` to the production domain and redeploy so sitemap, robots, and Open Graph URLs are correct.

## Production checks

```bash
npm run lint
npm run build
npm start
```
