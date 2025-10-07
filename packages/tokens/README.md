# 🎨 @rb/tokens

> Design Tokens para el Root Block Design System

Tokens de diseño generados con Style Dictionary para 6 marcas × 2 temas = 12 combinaciones.

## 📦 Instalación

```bash
pnpm add @rb/tokens
```

## 🎨 Marcas y Temas

### Marcas Disponibles

- `white-label` - Marca genérica
- `jelpit` - Morado + Verde
- `davivienda` - Rojo + Gris azulado
- `cien-cuadras` - Azul + Naranja
- `doctor-aki` - Verde oliva + Verde salud
- `seguros-bolivar` - Verde + Amarillo

### Temas

- `light` - Tema claro
- `dark` - Tema oscuro

## 🚀 Uso

### Vía CDN

```html
<!-- Cargar tokens de una marca específica -->
<link rel="stylesheet" href="https://cdn.rootblock.com/rb-jelpit-light.min.css" />
```

### Import en JavaScript

```javascript
import '@rb/tokens/jelpit-light.css';
```

### TypeScript

```typescript
import { BRANDS, THEMES, type Brand, type Theme } from '@rb/tokens';

const brand: Brand = 'jelpit';
const theme: Theme = 'light';

console.log(BRANDS); // ['white-label', 'jelpit', 'davivienda', ...]
console.log(THEMES); // ['light', 'dark']
```

## 📋 Variables CSS Generadas

Todas las variables tienen el prefijo `--rb-` para evitar colisiones:

### Colores

```css
/* Primary, Secondary, Tertiary */
--rb-color-primary-D400
--rb-color-primary-D300
--rb-color-primary-D200
--rb-color-primary-D100
--rb-color-primary-base
--rb-color-primary-L100
--rb-color-primary-L200
--rb-color-primary-L300
--rb-color-primary-L400

/* Feedback Colors */
--rb-color-feedback-error-base
--rb-color-feedback-success-base
--rb-color-feedback-warning-base
--rb-color-feedback-info-base

/* Grayscale */
--rb-color-grayscale-black
--rb-color-grayscale-white
--rb-color-grayscale-base
```

### Tipografía

```css
--rb-typography-fontFamily
--rb-typography-fontSize-h1
--rb-typography-fontSize-h2
--rb-typography-fontSize-body
--rb-typography-fontSize-label
--rb-typography-fontSize-caption
```

### Sombras

```css
--rb-shadow-xs
--rb-shadow-s
--rb-shadow-m
--rb-shadow-l
--rb-shadow-xl
```

### Gradientes

```css
--rb-gradient-primary-dark
--rb-gradient-primary-base
--rb-gradient-primary-light
```

## 🛠️ Desarrollo

### Estructura de Archivos

```
packages/tokens/
├── src/
│   ├── primitives/
│   │   └── brands/
│   │       ├── white-label.json
│   │       ├── jelpit.json
│   │       ├── davivienda.json
│   │       ├── cien-cuadras.json
│   │       ├── doctor-aki.json
│   │       └── seguros-bolivar.json
│   ├── semantic/
│   │   ├── light.json
│   │   └── dark.json
│   └── builder.ts
└── dist/
    ├── white-label-light.css
    ├── white-label-dark.css
    ├── jelpit-light.css
    └── ... (12 archivos CSS total)
```

### Agregar una Nueva Marca

1. **Crear archivo de primitivos:**

```bash
touch src/primitives/brands/mi-marca.json
```

2. **Definir colores:**

```json
{
  "mi-marca": {
    "primitive": {
      "color": {
        "primary": {
          "base": { "$value": "#007acc" }
        },
        "secondary": {
          "base": { "$value": "#ff6b6b" }
        }
      },
      "typography": {
        "fontFamily": { "$value": "'Roboto', sans-serif" }
      }
    }
  }
}
```

3. **Actualizar builder:**

```typescript
// src/builder.ts
export const BRANDS = [
  'white-label',
  'jelpit',
  'davivienda',
  'cien-cuadras',
  'doctor-aki',
  'seguros-bolivar',
  'mi-marca', // ← Agregar aquí
] as const;
```

4. **Build:**

```bash
pnpm build
```

### Scripts

```bash
# Build tokens
pnpm build

# Lint
pnpm lint

# Watch mode (desarrollo)
pnpm dev
```

## 📊 Tamaño de Archivos

| Archivo             | Normal | Minificado | Gzip |
| ------------------- | ------ | ---------- | ---- |
| Tokens (cada marca) | ~5KB   | ~4KB       | ~1KB |

## 🎯 Características

- ✅ **6 marcas predefinidas** con colores corporativos reales
- ✅ **12 temas** (6 marcas × 2 temas)
- ✅ **Prefijo --rb-** para evitar colisiones
- ✅ **Type-safe** con TypeScript
- ✅ **Optimizado** (~1KB gzip por marca)
- ✅ **Style Dictionary** para generación automática
- ✅ **Escalas completas** de colores (D400 → L400)

## 📚 Documentación

- [Guía de Tokens](../../docs/tokens.md)
- [Style Dictionary Config](./src/builder.ts)
- [Ejemplos](../../examples/)

## 📄 Licencia

MIT © Root Block
