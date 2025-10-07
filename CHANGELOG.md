# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2025-10-07

### ✨ Added

#### Brand Overrides System
- **New package**: `@rb/brand-overrides` for brand-specific customizations
- Support for brand-specific CSS overrides with `@import` processing
- Complete bundle per brand strategy (tokens + atoms + overrides in single file)
- PostCSS Import integration for seamless override composition

#### Davivienda Special Features
- **Black bar loading animation** for Davivienda buttons
- Solid color animation sliding from left to right
- Border radius with rounded right corners only
- Customizable animation duration (1.5s)
- Different opacity levels per button variant

#### Build System
- Simplified root scripts to 5 essential commands
- `build:all` script for complete pipeline
- `copy:all` script in bundle package
- Automatic copying to `examples/dist` and `docs/.storybook`

#### Documentation
- **LEEME.md**: Quick start guide in Spanish
- **SCRIPTS.md**: Detailed script explanations
- **BUILD.md**: Complete build system documentation
- Improved README with new architecture details

### 🔧 Changed

#### Demo & UI
- Renamed `examples/demo.html` to `examples/index.html`
- Improved control panel layout with 2-column grid
- Better visual hierarchy and spacing
- Added info badge for Davivienda special feature
- Synchronized brand selector with initial state

#### Storybook
- Replaced MDX Welcome page with Lit-based `Welcome.stories.ts`
- Added dynamic CSS loading in preview decorator
- Configured `staticDirs` for bundle serving
- Added `Colors.stories.ts` for design tokens showcase
- Improved Button stories with Davivienda banner

#### Build Configuration
- Disabled `mergeLonghand` in cssnano to preserve border-radius
- Added `postcss-import` dependency to bundle package
- Updated builder to process `@import` in overrides
- Improved console output with better logging

### 🐛 Fixed

- Brand selector initial state synchronization
- Border-radius preservation in minified CSS
- `@import` processing in brand overrides
- Storybook MDX parsing errors
- CSS loading race conditions in Storybook

### 💥 Breaking Changes

- **Removed**: Universal CSS bundle (replaced by complete per-brand bundles)
- **Changed**: `examples/demo.html` → `examples/index.html`
- **Changed**: Storybook now requires bundles in `.storybook/` directory
- **Changed**: Build process now includes overrides automatically

### 📦 Bundle Sizes

- **Base brands**: ~11.6 KB minified, ~2.5 KB gzip
- **Davivienda** (with overrides): ~13.5 KB minified, ~2.7 KB gzip
- **JS bundle**: ~29.7 KB minified, ~8.6 KB gzip

### 🎯 Migration Guide

#### From v1.0.0 to v1.1.0

**If you were using:**
```html
<!-- OLD (v1.0.0) -->
<link rel="stylesheet" href="rb-tokens.css">
<link rel="stylesheet" href="rb-atoms.css">
```

**Update to:**
```html
<!-- NEW (v1.1.0) -->
<link rel="stylesheet" href="rb-jelpit-light.min.css">
```

**Build scripts:**
```bash
# OLD
pnpm run build:tokens
pnpm run build:atoms
pnpm run build:bundle

# NEW (simplified)
pnpm run build
```

**Demo file:**
- Update any links from `demo.html` to `index.html`

---

## [1.0.0] - 2025-10-01

### ✨ Initial Release

- Multi-brand design system with 6 brands
- Design tokens with Style Dictionary
- CSS atoms (Button component)
- Web Components with Lit (Modal, DatePicker, Dropdown)
- CDN bundle generation with minification
- Storybook documentation
- PNPM workspaces monorepo
- Turbo for build orchestration

### 🎨 Brands Supported
- White Label
- Jelpit
- Davivienda
- Cien Cuadras
- Doctor Aki
- Seguros Bolívar

### 🌓 Themes
- Light
- Dark

---

## Links

- [Repository](https://github.com/tu-usuario/root-bloock)
- [Documentation](https://tu-usuario.github.io/root-bloock/storybook/)
- [Issues](https://github.com/tu-usuario/root-bloock/issues)
