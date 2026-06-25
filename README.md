# Nicholas Panella — Portfolio Site

**Live:** [nicholasjpanella.com](https://nicholasjpanella.com)

Public source for my personal portfolio and résumé site. The repo is open so recruiters, collaborators, and curious engineers can see how it’s built — not as a template or community project.

## What it is

A single-page portfolio with production metrics, project highlights, experience timeline, education, and an AI assistant grounded in verified résumé data. The assistant answers only from what’s on the site; it does not invent credentials.

- **Résumé PDF** — [nicholasjpanella.com/resume.pdf](https://nicholasjpanella.com/resume.pdf)
- **LLM discovery** — [llms.txt](https://nicholasjpanella.com/llms.txt) for crawlers and agents

## Highlights

- **AI assistant** — Streaming chat via AI SDK, system prompt built from structured résumé data, rate-limited at the edge
- **Design system** — Layered primitives/composites (glass cards, timeline, chat UI) with Tailwind v4
- **SEO & sharing** — JSON-LD, sitemap, robots, dynamic OG image, favicons
- **Analytics** — Vercel Analytics and Speed Insights

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · AI SDK · Framer Motion · Vercel

## Local development

For my own use. Requires Node.js and env vars from `.env.example` (OpenAI-compatible API for chat).

```bash
npm install
cp .env.example .env   # fill in keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## License & use

This is personal work. Feel free to browse the code for inspiration, but please don’t fork it as your own portfolio or submit PRs — it’s not maintained as an open-source product.

**Contact:** [nickjpanella@gmail.com](mailto:nickjpanella@gmail.com) · [LinkedIn](https://linkedin.com/in/nicholasjp) · [GitHub](https://github.com/nicholasjpanella)
