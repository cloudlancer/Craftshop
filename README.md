This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Site Lock Mode (Hosting Exceeded)

A temporary lock system that shows a "Hosting Resource Limit Exceeded" page to all visitors.

### Activate (Lock the Site)

**Locally:** Set `SITE_LOCKED=true` in `.env.local`, then restart the dev server.

**On Vercel:** Add environment variable `SITE_LOCKED=true` in Vercel Dashboard → Settings → Environment Variables, then redeploy.

### Deactivate (Unlock the Site)

Change `SITE_LOCKED` to `false` (or remove it), then restart/redeploy.

### Configuration

Edit `config/siteStatus.ts` to change:
- `renewUrl` — where the "Renew Hosting" button links to
- `contactEmail` — the "Contact Administrator" email address

### Rollback (Full Removal)

Delete these files to completely remove the lock system:
1. `src/proxy.ts`
2. `src/app/site-locked/` (folder)
3. `config/` (folder)
4. `.env.local` and `.env.example`
