# 🎨 Root Block Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Release](https://img.shields.io/github/v/release/JhonMoofarrif-SB/root-block)](https://github.com/JhonMoofarrif-SB/root-block/releases)
[![CI](https://github.com/JhonMoofarrif-SB/root-block/workflows/CI/badge.svg)](https://github.com/JhonMoofarrif-SB/root-block/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> 🚀 Enterprise Multi-Brand Design System con soporte para 6 marcas, 2 temas y overrides personalizados

**✨ v1.1.0 Nuevo:** Sistema de overrides por marca + Animación especial Davivienda

[Demo en Vivo](https://jhonmoofarrif-sb.github.io/root-block/) | [Documentación](./docs/) | [Changelog](./CHANGELOG.md) | [Releases](https://github.com/JhonMoofarrif-SB/root-block/releases)

## 🏗️ Arquitectura

```
root-bloock/
├── packages/
│   ├── tokens/              # 🎨 Design Tokens (colores, tipografía, sombras)
│   ├── atoms/               # ⚛️ Componentes CSS simples (Button, etc.)
│   ├── molecules/           # 🧬 Web Components complejos (Modal, DatePicker, Dropdown)
│   ├── brand-overrides/     # ✨ Estilos específicos por marca (NEW v1.1.0!)
│   ├── bundle/              # 📦 CDN Bundle Generator (Complete bundles)
│   └── docs/                # 📚 Storybook Documentation
└── examples/
    └── index.html           # 🎮 Demo interactivo multi-marca
```

### 🆕 Sistema de Overrides (v1.1.0)

Cada marca puede tener sus propios overrides CSS que se combinan automáticamente en el bundle final:

```
packages/brand-overrides/
└── src/
    ├── davivienda/
    │   ├── index.css        # Entry point
    │   └── button.css       # ⚫ Animación especial de loading
    ├── jelpit/              # (futuro)
    └── ...
```

## 📦 Packages

### 🎨 [@rb/tokens](./packages/tokens)

Design tokens para 6 marcas × 2 temas = 12 combinaciones

- White Label, Jelpit, Davivienda, Cien Cuadras, Doctor Aki, Seguros Bolívar
- Light y Dark themes

### ⚛️ [@rb/atoms](./packages/atoms)

Componentes CSS simples con variables `--rb-*`

- Cada componente resuelve todo su CSS (sin dependencias externas)
- **Button** con múltiples variantes y estados (incluyendo loading)
- Más componentes en desarrollo: Badge, Card, Alert

### 🧬 [@rb/molecules](./packages/molecules)

Web Components complejos con Lit

- **Modal**: Dialogs modales accesibles
- **DatePicker**: Selector de fechas
- **Dropdown**: Menús desplegables
- Más componentes en desarrollo: Data Table, Charts

### ✨ [@rb/brand-overrides](./packages/brand-overrides) 🆕

Estilos específicos por marca que extienden o modifican componentes base

- **Davivienda Button**: Animación de barra negra deslizante en estado loading
- Arquitectura extensible para cualquier marca
- Se combinan automáticamente en el bundle final

### 📦 [@rb/bundle](./packages/bundle)

Generador de bundles CDN optimizados - **Complete bundle per brand**

- Combina tokens + atoms + overrides en un solo archivo
- Minificado con cssnano + compresión gzip
- ~11.6 KB (base) / ~13.5 KB (Davivienda con overrides) minificados
- ~2.5 KB / ~2.7 KB con gzip

## 🚀 Quick Start

### Instalación Local

```bash
# 1. Clonar repositorio
git clone https://github.com/JhonMoofarrif-SB/root-block.git
cd root-block

# 2. Instalar dependencias
pnpm install

# 3. Build completo (tokens + atoms + molecules + bundle con overrides)
pnpm run build

# 4. Ver demo interactivo
pnpm run demo
# Abre http://localhost:3000

# 5. Ver Storybook (documentación)
pnpm run storybook
# Abre http://localhost:6006
```

### Scripts Simplificados (v1.1.0) ⚡

| Script               | Descripción                          |
| -------------------- | ------------------------------------ |
| `pnpm run build`     | 🏗️ Build completo de todo el sistema |
| `pnpm run demo`      | 🎮 Servidor demo interactivo         |
| `pnpm run dev`       | 👀 Watch mode para desarrollo        |
| `pnpm run storybook` | 📚 Documentación Storybook           |
| `pnpm run clean`     | 🧹 Limpiar todos los builds          |

> 💡 **Tip:** Usa `pnpm run build` una sola vez y todo se compila automáticamente

### Uso CDN (Simplificado!) ✨

```html
<!DOCTYPE html>
<html lang="es" data-brand="davivienda" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi App con Root Block</title>

    <!-- 1. Bundle completo de marca (tokens + atoms + overrides) - ~2.4KB gzip -->
    <link rel="stylesheet" href="https://cdn.rootblock.com/rb-davivienda-light.min.css" />

    <!-- 2. Web Components (opcional) - ~8.6KB gzip -->
    <script type="module" src="https://cdn.rootblock.com/rb-components.min.js"></script>

    <!-- 💡 Total: ~11KB gzip | Solo 2 archivos! -->
  </head>
  <body>
    <!-- Componentes CSS simples -->
    <button class="rb-button rb-button--primary">Primary Button</button>
    <button class="rb-button rb-button--secondary">Secondary Button</button>

    <!-- Davivienda tiene animación especial de loading automáticamente ✨ -->
    <button class="rb-button rb-button--primary rb-button--loading">Loading...</button>

    <!-- Web Components complejos -->
    <rb-modal title="Mi Modal">
      <p>Contenido del modal</p>
    </rb-modal>
  </body>
</html>
```

### Cambiar Marca Dinámicamente 🔄

Con el sistema de bundles completos (v1.1.0), cambiar de marca es **super simple**:

```html
<link id="brand-css" rel="stylesheet" href="https://cdn.rootblock.com/rb-jelpit-light.min.css" />
```

```javascript
function changeBrand(brand, theme) {
  // 1. Cambiar bundle completo (tokens + atoms + overrides automáticos)
  const cssLink = document.getElementById('brand-css');
  cssLink.href = `https://cdn.rootblock.com/rb-${brand}-${theme}.min.css`;

  // 2. Actualizar atributos HTML
  document.documentElement.setAttribute('data-brand', brand);
  document.documentElement.setAttribute('data-theme', theme);

  console.log(`✅ Marca cambiada a: ${brand} ${theme}`);

  if (brand === 'davivienda') {
    console.log('✨ Animación especial de loading activada!');
  }
}

// Ejemplos
changeBrand('davivienda', 'light'); // ⚫ Con animación especial
changeBrand('jelpit', 'dark'); // 🟣 Morado + Dark mode
changeBrand('cien-cuadras', 'light'); // 🔵 Azul inmobiliario
```

**Ventajas del nuevo sistema:**

- ✅ Solo 1 archivo CSS cambia (no 3 como antes)
- ✅ Overrides incluidos automáticamente
- ✅ Sin dependencias externas
- ✅ Cache eficiente por marca

## 🎨 Variables CSS

**TODAS las variables tienen prefijo `--rb-`** para evitar colisiones:

### Tokens de Marca

```css
--rb-color-primary-base
--rb-color-secondary-base
--rb-typography-fontFamily
--rb-shadow-m
```

### Variables de Componente

```css
--rb-button-bg-color
--rb-button-padding
--rb-button-border-radius
```

## 📚 Documentación

### 🌐 Documentación Online

- **Storybook**: [root-bloock.vercel.app](https://root-bloock.vercel.app) - Documentación completa
- **Demo Interactivo**: [root-bloock.vercel.app/examples](https://root-bloock.vercel.app/examples) - Prueba en vivo

### Storybook Interactivo (Local)

```bash
# Abrir Storybook con selector global de marca
pnpm run storybook
```

**Características de Storybook (v1.1.0):**

- 🎨 Selector global de marca y tema en la barra superior
- 📖 Documentación de todos los componentes
- 🎯 Stories organizadas: Foundations → Atoms → Molecules
- ⚫ Showcase de la animación especial de Davivienda
- 🔄 Cambio dinámico de estilos en tiempo real

### Archivos de Documentación

| Archivo                                                | Descripción                                               |
| ------------------------------------------------------ | --------------------------------------------------------- |
| [README.md](./README.md)                               | 📄 Documentación principal                                |
| [.cursor/CSS_STANDARDS.md](./.cursor/CSS_STANDARDS.md) | 📐 **Estándares CSS** (Cursor AI los lee automáticamente) |
| [VERCEL-SETUP.md](./VERCEL-SETUP.md)                   | 🚀 Guía de deployment en Vercel                           |
| [.vercel-quick-start.md](./.vercel-quick-start.md)     | ⚡ Quick start para Vercel                                |
| [CHANGELOG.md](./CHANGELOG.md)                         | 📝 Historial de versiones                                 |
| [LEEME.md](./LEEME.md)                                 | 🇪🇸 Guía rápida en español                                 |
| [BUILD.md](./BUILD.md)                                 | 🏗️ Sistema de build detallado                             |
| [SCRIPTS.md](./SCRIPTS.md)                             | ⚡ Explicación de scripts                                 |
| [CONTRIBUTING.md](./CONTRIBUTING.md)                   | 🤝 Guía de contribución                                   |

## 🧪 Testing

```bash
# Unit tests (Vitest)
pnpm test

# E2E tests (Playwright)
pnpm test:e2e

# Lint JavaScript
pnpm lint

# Format all files
pnpm format
```

### 📐 CSS Standards & Rules

El proyecto sigue estándares CSS modernos con **Cursor AI**:

- **[.cursor/CSS_STANDARDS.md](./.cursor/CSS_STANDARDS.md)** - Guía completa de referencia en carpeta .cursor

**Características principales:**

- ✅ CSS Nesting nativo con `&`
- ✅ `@layer` para control de cascada predecible
- ✅ Logical Properties (RTL/LTR ready)
- ✅ `clamp()` para responsive fluido sin media queries
- ✅ Variables CSS con prefijo `--rb-`
- ✅ Nomenclatura BEM con prefijo `rb-`
- ✅ Accesibilidad completa (WCAG AA)
- ✅ **Cursor AI aplica reglas automáticamente desde la carpeta `.cursor/`**

**Quick Start - Crear un componente:**

```bash
# 1. Copiar template o pedir a Cursor AI
cp packages/atoms/src/button.css packages/atoms/src/mi-componente.css

# 2. Cursor AI aplicará las reglas automáticamente
# Las reglas están en .cursor/CSS_STANDARDS.md

# 3. Compilar
pnpm run build
```

## 🌐 Marcas Disponibles

| Marca               | Primary   | Secondary | Especial   | Descripción                      |
| ------------------- | --------- | --------- | ---------- | -------------------------------- |
| **White Label**     | `#48555b` | `#afc4cc` | -          | Marca genérica base              |
| **Jelpit**          | `#2e0063` | `#82e778` | -          | Morado intenso + Verde brillante |
| **Davivienda**      | `#e1111c` | `#4b5c6f` | ⚫ Loading | Rojo corporativo + Gris azulado  |
| **Cien Cuadras**    | `#006098` | `#ffa533` | -          | Azul inmobiliario + Naranja      |
| **Doctor Aki**      | `#42671a` | `#61b064` | -          | Verde oliva + Verde salud        |
| **Seguros Bolívar** | `#009056` | `#ffe16f` | -          | Verde seguros + Amarillo dorado  |

### ⚫ Características Especiales

- **Davivienda**: Animación de barra negra en botones loading (v1.1.0)
- Más overrides específicos próximamente...

## 🔧 Tecnologías

### Build & Tooling

- **PNPM Workspaces**: Monorepo management
- **Turborepo**: Builds paralelos ultra-rápidos
- **Style Dictionary**: Design tokens generation
- **PostCSS**: CSS processing con import support
- **cssnano**: Minificación CSS optimizada
- **esbuild**: JavaScript bundling

### Components & Runtime

- **Lit**: Web Components framework
- **TypeScript**: Type safety completa
- **CSS Variables**: Theming dinámico

### Quality & Testing

- **Vitest**: Unit testing
- **Playwright**: E2E testing
- **ESLint**: JavaScript linting
- **Prettier**: Code formatting

### Documentation

- **Storybook 8**: Component documentation
- **MDX**: Markdown + JSX para docs

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Lee nuestra [guía de contribución](CONTRIBUTING.md).

## 📸 Screenshots

![Demo del Design System](./docs/images/demo-screenshot.png)

## 📊 Bundle Size

### Por Archivo (v1.1.0)

| Archivo                       | Marca       | Minificado | Gzip   | Contenido                     |
| ----------------------------- | ----------- | ---------- | ------ | ----------------------------- |
| `rb-jelpit-light.min.css`     | Jelpit      | 11.6 KB    | 2.5 KB | Tokens + Atoms                |
| `rb-davivienda-light.min.css` | Davivienda  | 13.5 KB    | 2.7 KB | Tokens + Atoms + Overrides ⚫ |
| `rb-white-label-dark.min.css` | White Label | 11.6 KB    | 2.5 KB | Tokens + Atoms                |
| `rb-components.min.js`        | Universal   | 29.7 KB    | 8.6 KB | Todos los Web Components      |

### Total por Usuario

| Escenario                      | CSS     | JS      | Total (gzip) |
| ------------------------------ | ------- | ------- | ------------ |
| **Solo CSS** (Button, etc.)    | ~2.5 KB | -       | **~2.5 KB**  |
| **CSS + Davivienda overrides** | ~2.7 KB | -       | **~2.7 KB**  |
| **Full (CSS + Components)**    | ~2.5 KB | ~8.6 KB | **~11 KB**   |

**Notas:**

- ✅ Cada marca tiene su bundle completo (no dependencies)
- ✅ Usuario solo descarga 1 archivo CSS
- ✅ Overrides añaden solo ~200 bytes (gzip)
- ✅ Cache eficiente por marca/tema

## 🗺️ Roadmap

### ✅ Completado (v1.0.0 - v1.1.0)

- [x] Sistema de tokens multi-marca (6 marcas × 2 temas)
- [x] Componentes CSS (Atoms) - Button con variantes
- [x] Web Components (Molecules) - Modal, DatePicker, Dropdown
- [x] Sistema de bundles CDN completos
- [x] **Brand-specific overrides** (v1.1.0) ⚫
- [x] **Davivienda loading animation** (v1.1.0) ⚫
- [x] Complete bundle per brand strategy (v1.1.0)
- [x] Simplified build scripts (v1.1.0)
- [x] Storybook con selector global de marca (v1.1.0)
- [x] Reducción de movimiento (`prefers-reduced-motion`)
- [x] PostCSS import processing (v1.1.0)

### 🚧 En Progreso

- [ ] Más overrides específicos (Jelpit, Cien Cuadras, etc.)
- [ ] Más componentes atoms (Badge, Card, Alert)
- [ ] DataTable molecule

### 📋 Planificado

- [ ] Wrappers React/Vue/Angular
- [ ] Temas personalizables por usuario (runtime)
- [ ] Modo de alto contraste mejorado
- [ ] Charts y visualizaciones
- [ ] Formularios complejos
- [ ] Sistema de iconos
- [ ] Animaciones avanzadas por marca

### 💡 Ideas para el Futuro

- [ ] Builder visual de temas
- [ ] Plugin Figma para tokens
- [ ] CLI para generar nuevas marcas
- [ ] Playground interactivo online

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Lee nuestra [guía de contribución](CONTRIBUTING.md).

### Cómo Añadir un Override de Marca

1. Crea un directorio en `packages/brand-overrides/src/[marca]/`
2. Añade tus archivos CSS (ej: `button.css`)
3. Crea un `index.css` que importe tus componentes
4. Ejecuta `pnpm run build` - ¡Se incluirá automáticamente!

Ejemplo:

```css
/* packages/brand-overrides/src/mi-marca/button.css */
[data-brand='mi-marca'] .rb-button--primary {
  /* Tus estilos personalizados */
}
```

## 📸 Screenshots

![Demo del Design System](./docs/images/demo-screenshot.png)

## 📄 Licencia

MIT © Root Block - ver [LICENSE](./LICENSE) para más detalles

## 💬 Soporte

- 📧 Email: support@rootblock.com
- 🐛 Issues: [GitHub Issues](https://github.com/JhonMoofarrif-SB/root-block/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/JhonMoofarrif-SB/root-block/discussions)
- 📦 Releases: [GitHub Releases](https://github.com/JhonMoofarrif-SB/root-block/releases)

---

Hecho con ❤️ por el equipo de Root Block | **v1.1.0** - Brand Overrides System ⚫
