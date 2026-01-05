# Token UI Registry

> **Inspired by W3C Standards** — Strives to align with the [W3C Design Tokens Community Group specification](https://www.designtokens.org/tr/2025.10/format/) (2025.10)

A component library for documenting design tokens with beautiful, interactive visualizations that follow industry standards.

## Features

- ✅ **Standards-Inspired** — Aligns with W3C Design Tokens Community Group specification
- 🎨 **Core & Composite Types** — Implements core token types and select composite types
- 🔧 **Extensible** — Built on shadcn/ui, fully customizable
- 🎯 **Type-Safe** — TypeScript-first with full type inference
- 📦 **Framework-Agnostic** — Works with any React-based documentation setup

## DTCG Specification Coverage

| Spec Type | Token Component | Status |
|-----------|-----------------|--------|
| §8.1 Color | ColorToken | ✅ Implemented |
| §8.2 Dimension | SpacingToken, RadiusToken | ✅ Implemented |
| §8.3 Font Family | FontFamilyToken | ✅ Implemented |
| §8.4 Font Weight | FontWeightToken | ✅ Implemented |
| §8.5 Duration | DurationToken | ✅ Implemented |
| §8.7 Number | NumberToken | ✅ Implemented |
| §9.6 Shadow | ElevationToken | ✅ Implemented |
| §9.8 Typography | TypographyToken | ✅ Implemented |

## Getting Started

This registry is built using Next.js and the shadcn registry system:

- Components are defined in `registry.json`
- The `shadcn build` command builds the registry
- Registry items are served as static files under `public/r/[name].json`
- All items are compatible with the `shadcn` CLI
## Documentation

Visit [tokenui.dev](https://tokenui.dev) for full documentation and live examples.

For registry implementation details, see the [shadcn registry documentation](https://ui.shadcn.com/docs/registry).
