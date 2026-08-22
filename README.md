# SKS Axiom

**We Build. Secure. Deploy. Scale.**

Marketing site for SKS Axiom — a software services company covering full-stack
web development, security-first engineering, AWS cloud infrastructure and
ongoing support. Built as a single-page, motion-rich SvelteKit application.

## Stack

- **Svelte 5** + **SvelteKit** + **TypeScript**
- **Anime.js v4** — scroll reveals, entrance choreography, the process timeline
- **Three.js** + **Threlte** — the hero's 3D scene (fluid blob shader, floating
  technology nodes, connection lines)
- **Lucide Svelte** — icons
- Design tokens in `src/lib/styles/tokens.css`; no hard-coded colors in
  components

## Structure

- `src/routes/` — layout (nav + footer) and the single page, which assembles
  every section from `src/lib/components/`
- `src/lib/components/three/` — the hero's Threlte scene, split by
  responsibility (`AmbientEnvironment`, `FluidShapes`, `FloatingNodes`,
  `ConnectionLines`, `CameraRig`)
- `src/lib/data/` — content for services, the process timeline, architecture
  diagram, industries and "why us", kept out of components
- `src/lib/motion/` — the `reveal` scroll action and a reactive
  `prefers-reduced-motion` read, both respected everywhere motion is used
- `src/lib/assets/logo/` — the SKS Axiom logo mark actually used by the app
- `assets/` — source brand asset(s) kept for reference

The 3D scene and scroll animations are skipped entirely under
`prefers-reduced-motion: reduce`, and the hero scene doesn't load on small
viewports.

## Developing

```sh
npm install
npm run dev -- --open
```

## Quality checks

```sh
npm run check   # svelte-check
npm run lint    # prettier --check + eslint
npm run build   # production build
npm run test    # playwright e2e (npx playwright install first)
```

## Deploying

This project uses `@sveltejs/adapter-auto`, which picks the right adapter for
common hosts (Vercel, Netlify, Cloudflare, etc.) at build time. For a specific
target, swap in the matching [adapter](https://svelte.dev/docs/kit/adapters).
