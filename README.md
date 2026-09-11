# TopScrech.dev

Portfolio and app support site built with SvelteKit, Svelte 5, Tailwind CSS 4, and the [Bun adapter](https://github.com/gornostay25/svelte-adapter-bun)

## Setup

```bash
bun install --frozen-lockfile
```

## Development

Start the development server at `http://localhost:3000`

```bash
bun run dev
```

Check TypeScript and Svelte components

```bash
bun run check
```

## Production

Build and start the Bun server

```bash
bun run build
bun run start
```

The server defaults to `0.0.0.0:3000` and supports `HOST`, `PORT`, and `ORIGIN` environment variables
For production, set `ORIGIN` to the site's public URL, such as `https://topscrech.dev`
The existing Nixpacks configuration builds and starts the app with Bun

Preview the build with Vite locally

```bash
bun run preview
```

## Project structure

- `src/routes/+page.svelte`: portfolio at `/`
- `src/routes/app/support/+page.svelte`: support page at `/app/support`
- `src/lib/components`: shared Svelte components
- `src/lib/data`: typed app catalog
- `src/app.css`: Tailwind and shared styles
- `public`: unchanged static asset paths, including AltStore releases and privacy policy
