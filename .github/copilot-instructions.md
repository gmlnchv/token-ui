# Copilot Instructions: Token UI Registry

## Overview
- **Purpose:** Next.js + Fumadocs app that hosts docs and a custom shadcn registry for distributing UI/token components.
- **Key Split:** App components live in [components/ui](components/ui). Registry-distributed components live in [registry/ui](registry/ui). Docs content lives in [content/docs](content/docs).
- **Docs Rendering:** Fumadocs loads MDX pages from [content/docs](content/docs) via [lib/source.ts](lib/source.ts) and renders them in [app/docs/[[...slug]]/page.tsx](app/docs/[[...slug]]/page.tsx).

## Architecture & Data Flow
- **Docs Source:** [source.config.ts](source.config.ts) configures MDX (rehype-pretty-code) and defines the docs dir. [lib/source.ts](lib/source.ts) builds a `source` with `loader()` for Fumadocs.
- **Page Rendering:** [app/docs/[[...slug]]/page.tsx](app/docs/[[...slug]]/page.tsx) gets a page from `source`, renders `DocsPage`, and injects MDX components via [mdx-components.tsx](mdx-components.tsx).
- **Search API:** [app/api/search/route.ts](app/api/search/route.ts) exposes `GET` using `createFromSource(source)`; search indexes generated from docs.
- **Code Highlighting:** [lib/highlight-code.ts](lib/highlight-code.ts) uses Shiki; MDX uses `rehype-pretty-code` configured in [source.config.ts](source.config.ts).

## Registry (shadcn)
- **Definition:** [registry.json](registry.json) lists registry items and files. Built output is served under [public/r](public/r) (e.g., [public/r/registry.json](public/r/registry.json), [public/r/token.json](public/r/token.json)).
- **Build:** `bun run registry:build` (runs `shadcn build`) to regenerate `public/r/*`.
- **Install Command in Docs:** See [app/components/installer.tsx](app/components/installer.tsx); docs show `npx shadcn add @tokenui/<package>`.
- **File Boundaries:** Update app docs component in [components/ui](components/ui). Update distributed registry component in [registry/ui](registry/ui).

## Docs & MDX Conventions
- **MDX Components:** Extended via [mdx-components.tsx](mdx-components.tsx). Use `Installer` and `Preview` inside docs.
- **Preview Pattern:** [app/components/preview.tsx](app/components/preview.tsx) displays tabs for Code/Preview. Provide a string `code` and render children UI.
- **Example:** See [content/docs/components/token.mdx](content/docs/components/token.mdx) for `Token` usage and `<Preview code={...}>` pattern.
- **Frontmatter:** MDX files include `title` and `description` for Fumadocs metadata.

## Commands & Workflows
- **Dev Server:** `bun run dev` (Next.js 16 + Turbopack).
- **Build/Start:** `bun run build` then `bun run start`.
- **Lint/Format:** Biome via `bun run biome:lint`, `bun run biome:format`, or `bun run lint`.
- **Registry Build:** `bun run registry:build` to refresh [public/r](public/r).

## Patterns & Conventions
- **Imports:** Use `@/` alias for app-local modules (e.g., `@/lib/source`).
- **Token Component Variants:**
  - App docs token: [components/ui/token.tsx](components/ui/token.tsx) provides `Token`, `ColorToken`, and context (`TokenProvider`).
  - Registry token: [registry/ui/token.tsx](registry/ui/token.tsx) exposes `Token` for distribution; keep API minimal and compatible with shadcn CLI.
- **Docs Layout:** [app/docs/layout.tsx](app/docs/layout.tsx) uses notebook layout; site shell in [app/layout.tsx](app/layout.tsx).

## When Making Changes
- **Add a new doc page:** Create MDX under [content/docs](content/docs) with frontmatter; it auto-appears via Fumadocs routing.
- **Add a registry item:** Update [registry.json](registry.json), implement files under [registry/ui](registry/ui), then run `bun run registry:build`.
- **Update MDX UI:** Add components in [mdx-components.tsx](mdx-components.tsx) to make them available in documentation.
- **Search updates:** No manual work; the search route indexes from `source` automatically.

## Examples
- **Token usage in docs:** See [content/docs/components/token.mdx](content/docs/components/token.mdx) for `Token` examples, `Preview`, and `Installer` usage.
- **Install command rendering:** See [app/components/installer.tsx](app/components/installer.tsx) and its `CopyButton` integration.
