# 📦 @bolivar-ui/bundle

> Generador de bundles CDN optimizados para Bolivar UI Design System

Genera bundles minificados y comprimidos listos para CDN, organizados por marca y tema.

## 🎯 Propósito

Este package construye los archivos finales para distribución CDN:

- **Tokens por marca**: `b-ui-{marca}-{tema}.min.css` (~1KB gzip)
- **Estilos universales**: `b-ui-styles.min.css` (~1.4KB gzip)
- **Web Components**: `b-ui-components.min.js` (~8.6KB gzip)

## 📦 Archivos Generados

### Estructura de Salida

```
dist/
├── rb-white-label-light.min.css
├── rb-white-label-light.min.css.gz
├── rb-white-label-light.min.css.br
├── rb-white-label-dark.min.css
├── rb-white-label-dark.min.css.gz
├── rb-white-label-dark.min.css.br
├── ... (12 archivos CSS × 3 formatos = 36 archivos)
├── rb-styles.min.css
├── rb-styles.min.css.gz
├── rb-styles.min.css.br
├── rb-components.min.js
├── rb-components.min.js.gz
└── rb-components.min.js.br
```

### Formatos de Compresión

- `.min.css` / `.min.js` - Minificado
- `.min.css.gz` / `.min.js.gz` - Gzip (compatible con todos los CDN)
- `.min.css.br` / `.min.js.br` - Brotli (mejor compresión, CDN modernos)

## 🚀 Uso

### Build

```bash
# Build bundles
pnpm build

# Build + copiar a examples/
pnpm build:examples
```

### Servir Localmente

```bash
# Servir dist/ con HTTP server
cd dist
npx serve -l 3000
```

## 📊 Tamaños de Archivos

| Archivo                    | Normal | Minificado | Gzip      | Brotli     |
| -------------------------- | ------ | ---------- | --------- | ---------- |
| **Tokens** (por marca)     | ~5KB   | ~4KB       | ~1KB      | ~800B      |
| **Styles** (universal)     | ~10KB  | ~7KB       | ~1.4KB    | ~1.2KB     |
| **Components** (universal) | -      | ~30KB      | ~8.6KB    | ~7.6KB     |
| **Total por marca**        | -      | ~41KB      | **~11KB** | **~9.6KB** |

## 🛠️ Configuración

### builder.ts

El builder orquesta la generación de todos los bundles:

```typescript
// packages/bundle/src/builder.ts

import { buildTokens } from './build-tokens';
import { buildStyles } from './build-styles';
import { buildComponents } from './build-components';

async function build() {
  // 1. Build tokens para cada marca/tema
  await buildTokens();

  // 2. Build styles universales (atoms)
  await buildStyles();

  // 3. Build Web Components
  await buildComponents();

  // 4. Comprimir todo (gzip + brotli)
  await compressAll();
}
```

### Minificación

- **CSS**: CleanCSS
- **JavaScript**: esbuild
- **Compresión**: gzip + brotli

## 📝 Scripts

```bash
# Build completo
pnpm build

# Build + copiar a examples/
pnpm build:examples

# Limpiar dist/
pnpm clean

# Copiar a examples/ manualmente
pnpm copy:examples
```

## 🌐 Uso en Producción

### Servir desde CDN

```html
<!-- Opción 1: Desde CDN (producción) -->
<link rel="stylesheet" href="https://cdn.rootblock.com/rb-jelpit-light.min.css" />
<link rel="stylesheet" href="https://cdn.rootblock.com/rb-styles.min.css" />
<script type="module" src="https://cdn.rootblock.com/rb-components.min.js"></script>

<!-- Opción 2: Auto-servir archivos comprimidos -->
<!-- El servidor CDN debe estar configurado para servir .br o .gz automáticamente -->
```

### Configuración CDN Recomendada

```nginx
# nginx example
location ~* \.min\.(css|js)$ {
  # Servir Brotli si está disponible
  gzip_static on;
  brotli_static on;

  # Headers de cache
  expires 1y;
  add_header Cache-Control "public, immutable";
}
```

## 🔧 Agregar Nueva Marca al Bundle

1. La marca debe existir en `@bolivar-ui/tokens`
2. El builder detectará automáticamente y generará:
   - `b-ui-nueva-marca-light.min.css`
   - `b-ui-nueva-marca-dark.min.css`
   - Archivos comprimidos (.gz, .br)

```bash
# Rebuild después de agregar marca
pnpm build
```

## 📦 Integración

### Con Vite

```typescript
// vite.config.ts
export default {
  plugins: [
    // ...
  ],
  build: {
    rollupOptions: {
      external: ['@bolivar-ui/bundle'],
    },
  },
};
```

### Con Webpack

```javascript
// webpack.config.js
module.exports = {
  externals: {
    '@bolivar-ui/bundle': '@bolivar-ui/bundle',
  },
};
```

## 🎯 Características

- ✅ **Minificación agresiva** - CleanCSS + esbuild
- ✅ **Múltiples formatos** - .min, .gz, .br
- ✅ **Organizado por marca** - Fácil de distribuir
- ✅ **Archivos universales** - Styles y Components compartidos
- ✅ **Optimizado para CDN** - Headers de cache ideales
- ✅ **Build automático** - Detecta todas las marcas

## 📚 Ver También

- [@bolivar-ui/tokens](../tokens/README.md) - Source de tokens
- [@bolivar-ui/atoms](../atoms/README.md) - Source de styles
- [@bolivar-ui/molecules](../molecules/README.md) - Source de components
- [Ejemplos](../../examples/) - Demos con bundles

## 📄 Licencia

MIT © Bolivar UI
