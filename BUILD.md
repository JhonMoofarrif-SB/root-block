# 🔧 Build Guide - Root Block Design System

## 📦 Comandos de Build

### Build Completo

```bash
# Build todos los packages (tokens, foundations, atoms, molecules, bundle)
pnpm build

# Build + copiar archivos a examples/
pnpm build:examples
```

### Build por Package

```bash
# Solo tokens
pnpm --filter @rb/tokens build

# Solo bundle (genera archivos minificados)
pnpm --filter @rb/bundle build

# Bundle + copiar a examples
pnpm --filter @rb/bundle run build:copy
```

### Copiar Archivos a Examples

```bash
# Solo copiar (sin rebuild)
pnpm --filter @rb/bundle run copy:examples
```

---

## 📁 Estructura de Output

### `packages/bundle/dist/` (PRODUCCIÓN)

```
dist/
├── rb-styles.min.css              (6.7 KB → 1.4 KB gzip)
├── rb-styles.min.css.gz           (comprimido gzip)
├── rb-styles.min.css.br           (comprimido brotli)
├── rb-styles.css                  (versión sin minificar)
│
├── rb-{marca}-{tema}.min.css      (×12 archivos, ~1 KB gzip cada uno)
├── rb-{marca}-{tema}.min.css.gz   (×12 archivos)
├── rb-{marca}-{tema}.min.css.br   (×12 archivos)
├── rb-{marca}-{tema}.css          (×12 archivos sin minificar)
│
├── rb-components.min.js           (30 KB → 8.6 KB gzip)
├── rb-components.min.js.gz        (comprimido gzip)
├── rb-components.min.js.br        (comprimido brotli)
└── rb-components.min.js.map       (source map)

Total: ~54 archivos de producción
✅ Sin archivos HTML (demos están en examples/)
```

### `examples/dist/` (DEMOS)

```
dist/
├── rb-styles.min.css
├── rb-{marca}-{tema}.min.css      (×12 archivos)
├── rb-components.min.js
└── rb-components.min.js.map

Total: 14 archivos minificados para demos locales
```

---

## 🚀 Proceso de Build

### 1. Tokens (@rb/tokens)

```bash
pnpm --filter @rb/tokens build
```

**Genera:**

- `dist/{marca}-{tema}.css` (×12)
- `dist/index.d.ts` (tipos TypeScript)
- `dist/index.js` (exports JS)

**Output:** 12 archivos CSS con variables `--rb-*`

---

### 2. Foundations (@rb/foundations)

```bash
pnpm --filter @rb/foundations build
```

**Genera:**

- ~~`dist/reset.css`~~ ❌ NO usado en bundle
- ~~`dist/typography.css`~~ ❌ NO usado en bundle
- ~~`dist/utilities.css`~~ ❌ NO usado en bundle

**Nota:** Foundations ya NO se incluye en el bundle. Cada componente resuelve su CSS.

---

### 3. Atoms (@rb/atoms)

```bash
pnpm --filter @rb/atoms build
```

**Genera:**

- `dist/button.css`
- `dist/index.css` (bundle de todos los atoms)

**Output:** Componentes CSS simples

---

### 4. Molecules (@rb/molecules)

```bash
pnpm --filter @rb/molecules build
```

**Genera:**

- `dist/index.js` (Web Components con Lit)

**Output:** Bundle ES Module con todos los web components

---

### 5. Bundle (@rb/bundle)

```bash
pnpm --filter @rb/bundle build
```

**Proceso:**

1. Lee atoms (button.css, etc.)
2. Combina en `rb-styles.css`
3. Minifica con cssnano → `rb-styles.min.css`
4. Comprime con gzip → `rb-styles.min.css.gz`
5. Comprime con brotli → `rb-styles.min.css.br`
6. Repite para tokens (×12 marcas)
7. Bundle JS con esbuild → `rb-components.min.js`
8. Comprime JS con gzip y brotli

**Output:** Archivos listos para CDN

---

## 📊 Tamaños de Bundle

### CSS Styles (rb-styles.min.css)

```
Sin minificar:  10.18 KB
Minificado:      6.74 KB  (33.8% menos)
Gzip:            1.44 KB  (85.8% menos) ✅
Brotli:          1.21 KB  (88.1% menos) ✅
```

### CSS Tokens (rb-{marca}-{tema}.min.css)

```
Sin minificar:  ~5.5 KB
Minificado:     ~4.3 KB  (21.8% menos)
Gzip:           ~1.0 KB  (81.8% menos) ✅
Brotli:         ~0.9 KB  (83.6% menos) ✅
```

### JS Components (rb-components.min.js)

```
Sin minificar:  N/A
Minificado:     29.73 KB
Gzip:            8.61 KB  (71.0% menos) ✅
Brotli:          7.60 KB  (74.4% menos) ✅
```

### Total por Página

```
CSS Tokens:  ~1.0 KB gzip
CSS Styles:   1.4 KB gzip
JS Bundle:    8.6 KB gzip
────────────────────────
TOTAL:       ~11 KB gzip ✅
```

---

## 🎯 Optimizaciones Aplicadas

### CSS (cssnano)

- ✅ Eliminación de comentarios
- ✅ Normalización de espacios
- ✅ Optimización de colores
- ✅ Merge de reglas CSS
- ✅ Minificación de selectores
- ✅ Compresión gzip nivel 9
- ✅ Compresión brotli nivel 11

### JavaScript (esbuild)

- ✅ Minificación agresiva
- ✅ Tree shaking
- ✅ Eliminación de `console.log` y `debugger`
- ✅ Mangling de propiedades privadas
- ✅ Sin comentarios legales
- ✅ Compresión gzip nivel 9
- ✅ Compresión brotli nivel 11

### Arquitectura

- ❌ **Eliminado:** Foundations (reset + typography)
- ❌ **Eliminado:** Utilities (flexbox, grid, spacing, display)
- ✅ **Mantenido:** Solo Atoms (cada componente con CSS completo)
- ✅ **Resultado:** Bundle 66% más pequeño

---

## 🔄 Workflow Recomendado

### Desarrollo

```bash
# 1. Hacer cambios en src/
# 2. Build
pnpm build:examples

# 3. Abrir demo
cd examples
open bootstrap-style.html
```

### Producción

```bash
# 1. Build completo
pnpm build

# 2. Deploy packages/bundle/dist/ a CDN
# (Cloudflare, Vercel, AWS S3, etc.)

# 3. Ejemplos quedan en examples/ (no se suben)
```

### Watch Mode (desarrollo)

```bash
# Bundle en modo watch
pnpm --filter @rb/bundle run dev

# En otra terminal, copiar cambios
pnpm --filter @rb/bundle run copy:examples
```

---

## 📝 Scripts Disponibles

### Root (/)

| Script                | Descripción                      |
| --------------------- | -------------------------------- |
| `pnpm build`          | Build todos los packages         |
| `pnpm build:examples` | Build + copiar a examples/       |
| `pnpm dev`            | Modo watch en todos los packages |
| `pnpm clean`          | Limpiar todos los dist/          |

### Bundle (packages/bundle/)

| Script               | Descripción                           |
| -------------------- | ------------------------------------- |
| `pnpm build`         | Generar archivos minificados en dist/ |
| `pnpm build:copy`    | Build + copiar a examples/            |
| `pnpm copy:examples` | Solo copiar archivos a examples/      |
| `pnpm dev`           | Modo watch del builder                |
| `pnpm clean`         | Limpiar dist/                         |
| `pnpm serve`         | Servir dist/ en puerto 3000           |

---

## 🐛 Troubleshooting

### Error: "Cannot find module"

```bash
# Reinstalar dependencias
pnpm install
```

### Archivos no copiados a examples/

```bash
# Copiar manualmente
pnpm --filter @rb/bundle run copy:examples
```

### Bundle demasiado grande

- ✅ Ya optimizado: foundations y utilities eliminados
- ✅ Minificación: cssnano + esbuild
- ✅ Compresión: gzip + brotli
- 📊 Actual: ~11 KB gzip total

### Demos no funcionan

```bash
# Verificar que archivos existen
ls examples/dist/*.min.css
ls examples/dist/*.min.js

# Si faltan, copiar
pnpm --filter @rb/bundle run copy:examples
```

---

## 📚 Más Información

- **Arquitectura:** `/ARCHITECTURE.md`
- **Optimización:** `/OPTIMIZATION.md`
- **Demos:** `/examples/README.md`
- **Uso:** `/USAGE.md`
- **Quick Start:** `/QUICK_START.md`

---

**Última actualización:** $(date)  
**Versión:** 1.0.0
