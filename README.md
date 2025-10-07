# 🎨 Root Block Design System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/tu-usuario/root-bloock/workflows/CI/badge.svg)](https://github.com/tu-usuario/root-bloock/actions)
[![npm version](https://badge.fury.io/js/%40rb%2Ftokens.svg)](https://badge.fury.io/js/%40rb%2Ftokens)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> Enterprise Multi-Brand Design System con soporte para 6 marcas y 2 temas

[Demo en Vivo](https://tu-usuario.github.io/root-bloock/) | [Documentación](https://tu-usuario.github.io/root-bloock/storybook/) | [Changelog](./CHANGELOG.md)

## 🏗️ Arquitectura

```
root-bloock/
├── packages/
│   ├── tokens/              # 🎨 Design Tokens (colores, tipografía, sombras)
│   ├── atoms/              # ⚛️ Componentes CSS simples (cada uno con su CSS completo)
│   ├── molecules/          # 🧬 Web Components complejos (Lit)
│   ├── bundle/             # 📦 CDN Bundle Generator
│   └── docs/               # 📚 Storybook
└── apps/
    └── playground/         # 🎮 Testing playground
```

## 📦 Packages

### 🎨 [@rb/tokens](./packages/tokens)

Design tokens para 6 marcas × 2 temas = 12 combinaciones

- White Label, Jelpit, Davivienda, Cien Cuadras, Doctor Aki, Seguros Bolívar
- Light y Dark themes

### ⚛️ [@rb/atoms](./packages/atoms)

Componentes CSS simples con variables `--rb-*`

- Cada componente resuelve todo su CSS (sin dependencias externas)
- Button, Badge, Card, Alert

### 🧬 [@rb/molecules](./packages/molecules)

Web Components complejos con Lit

- Date Picker, Modal, Dropdown, Data Table

### 📦 [@rb/bundle](./packages/bundle)

Generador de bundles CDN optimizados por marca

## 🚀 Quick Start

### Instalación

```bash
# Instalar dependencias
pnpm install

# Build todos los packages
pnpm build

# Desarrollo (watch mode)
pnpm dev
```

### Uso CDN

```html
<!DOCTYPE html>
<html lang="es" data-brand="jelpit" data-theme="light">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi App con Root Block</title>
    
    <!-- 1. Tokens de marca (colores, tipografía) - ~1KB gzip -->
    <link rel="stylesheet" href="https://cdn.rootblock.com/rb-jelpit-light.min.css" id="tokens-css" />
    
    <!-- 2. Estilos universales (componentes CSS) - ~1.4KB gzip -->
    <link rel="stylesheet" href="https://cdn.rootblock.com/rb-styles.min.css" />
    
    <!-- 3. Web Components (opcional) - ~8.6KB gzip -->
    <script type="module" src="https://cdn.rootblock.com/rb-components.min.js"></script>
  </head>
  <body>
    <!-- Componentes CSS simples -->
    <button class="rb-button rb-button--primary">Primary Button</button>
    <button class="rb-button rb-button--secondary">Secondary Button</button>

    <!-- Web Components complejos -->
    <rb-modal title="Mi Modal">
      <p>Contenido del modal</p>
    </rb-modal>
  </body>
</html>
```

### Cambiar Marca Dinámicamente

```javascript
function changeBrand(brand, theme) {
  // 1. Cambiar SOLO tokens (styles.css y components.js NO cambian)
  document.getElementById('tokens-css').href =
    `https://cdn.example.com/rb-${brand}-${theme}.min.css`;

  // 2. Actualizar atributos HTML
  document.documentElement.setAttribute('data-brand', brand);
  document.documentElement.setAttribute('data-theme', theme);
}

// Cambiar a Davivienda Light
changeBrand('davivienda', 'light');
```

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

```bash
# Abrir Storybook
pnpm storybook
```

## 🧪 Testing

```bash
# Unit tests (Vitest)
pnpm test

# E2E tests (Playwright)
pnpm test:e2e
```

## 📝 Scripts Disponibles

| Script           | Descripción               |
| ---------------- | ------------------------- |
| `pnpm build`     | Build todos los packages  |
| `pnpm dev`       | Modo desarrollo con watch |
| `pnpm clean`     | Limpiar builds            |
| `pnpm lint`      | Ejecutar linters          |
| `pnpm format`    | Formatear código          |
| `pnpm test`      | Tests unitarios           |
| `pnpm test:e2e`  | Tests E2E                 |
| `pnpm storybook` | Abrir Storybook           |

## 🌐 Marcas Disponibles

| Marca | Primary | Secondary | Descripción |
|-------|---------|-----------|-------------|
| **White Label** | `#48555b` | `#afc4cc` | Marca genérica |
| **Jelpit** | `#2e0063` | `#82e778` | Morado intenso + Verde brillante |
| **Davivienda** | `#e1111c` | `#4b5c6f` | Rojo corporativo + Gris azulado |
| **Cien Cuadras** | `#006098` | `#ffa533` | Azul inmobiliario + Naranja |
| **Doctor Aki** | `#42671a` | `#61b064` | Verde oliva + Verde salud |
| **Seguros Bolívar** | `#009056` | `#ffe16f` | Verde seguros + Amarillo dorado |

## 🔧 Tecnologías

- **PNPM Workspaces**: Monorepo management
- **Turborepo**: Builds paralelos ultra-rápidos
- **Style Dictionary**: Design tokens generation
- **Lit**: Web Components
- **TypeScript**: Type safety
- **Storybook**: Documentación
- **Vitest**: Unit testing
- **Playwright**: E2E testing
- **ESLint + Stylelint**: Code quality

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Lee nuestra [guía de contribución](CONTRIBUTING.md).

## 📸 Screenshots

![Demo del Design System](./docs/images/demo-screenshot.png)

## 📊 Bundle Size

| Package | Size (min) | Size (gzip) |
|---------|-----------|-------------|
| Tokens  | ~4KB      | ~1KB        |
| Styles  | ~7KB      | ~1.4KB      |
| Components | ~30KB  | ~8.6KB      |
| **Total** | **~41KB** | **~11KB** |

## 🗺️ Roadmap

- [x] Sistema de tokens multi-marca
- [x] Componentes CSS (Atoms)
- [x] Web Components (Molecules)
- [ ] Componentes React/Vue/Angular
- [ ] Temas personalizables por usuario
- [ ] Modo de alto contraste
- [ ] Reducción de movimiento (prefers-reduced-motion)
- [ ] Más componentes (DataTable, Charts, etc.)

## 📄 Licencia

MIT © Root Block - ver [LICENSE](./LICENSE) para más detalles

## 💬 Soporte

- 📧 Email: support@rootblock.com
- 💬 Slack: [root-block.slack.com](https://root-block.slack.com)
- 🐛 Issues: [GitHub Issues](https://github.com/tu-usuario/root-bloock/issues)

---

Hecho con ❤️ por el equipo de Root Block
