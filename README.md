This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Use Node.js 24.x and install dependencies from the npm lockfile.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the home page in `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Push the branch you want to deploy to `mxnueh/portfolio-mxnueh`, then import the GitHub repository in Vercel. [Import in Vercel](https://vercel.com/new)

| Setting | Value |
| --- | --- |
| Framework preset | Next.js |
| Root directory | Repository root |
| Node.js version | 24.x, set in `package.json` |
| Install command | Vercel default for npm |
| Build command | `npm run build` |
| Output directory | Vercel default for Next.js |
| Environment variables | None required |

The contact form opens a draft in Gmail with the visitor's details. The site itself uses public assets and local content files.

Run the production build and site checks before pushing.

```bash
npm run build
npm run check:site
```
