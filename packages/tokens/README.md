# 🎨 @seguros-bolivar-ui/tokens

> Design Tokens para el Seguros Bolivar UI Design System

Tokens de diseño generados con Style Dictionary para 6 marcas × 2 temas = 12 combinaciones.

**Estrategia:** Solo **Primitive Tokens** + **Overrides CSS** (sin semantic tokens).

## 📦 Instalación

```bash
pnpm add @seguros-bolivar-ui/tokens
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
import '@seguros-bolivar-ui/tokens/jelpit-light.css';
```

### TypeScript

```typescript
import { BRANDS, THEMES, type Brand, type Theme } from '@seguros-bolivar-ui/tokens';

const brand: Brand = 'jelpit';
const theme: Theme = 'light';

console.log(BRANDS); // ['white-label', 'jelpit', 'davivienda', ...]
console.log(THEMES); // ['light', 'dark']
```

## 📋 Variables CSS Generadas

Todas las variables tienen el prefijo `--sb-ui-` para evitar colisiones:

### Colores

```css
/* Primary, Secondary, Tertiary */
--sb-ui-color-primary-D400
--sb-ui-color-primary-D300
--sb-ui-color-primary-D200
--sb-ui-color-primary-D100
--sb-ui-color-primary-base
--sb-ui-color-primary-L100
--sb-ui-color-primary-L200
--sb-ui-color-primary-L300
--sb-ui-color-primary-L400

/* Feedback Colors */
--sb-ui-color-feedback-error-base
--sb-ui-color-feedback-success-base
--sb-ui-color-feedback-warning-base
--sb-ui-color-feedback-info-base

/* Grayscale */
--sb-ui-color-grayscale-black
--sb-ui-color-grayscale-white
--sb-ui-color-grayscale-base
```

### Tipografía

```css
--sb-ui-typography-fontFamily
--sb-ui-typography-fontSize-h1
--sb-ui-typography-fontSize-h2
--sb-ui-typography-fontSize-body
--sb-ui-typography-fontSize-label
--sb-ui-typography-fontSize-caption
```

### Sombras

```css
--sb-ui-shadow-xs
--sb-ui-shadow-s
--sb-ui-shadow-m
--sb-ui-shadow-l
--sb-ui-shadow-xl
```

### Gradientes

```css
--sb-ui-gradient-primary-dark
--sb-ui-gradient-primary-base
--sb-ui-gradient-primary-light
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
- ✅ **Prefijo --sb-ui-** para evitar colisiones
- ✅ **Type-safe** con TypeScript
- ✅ **Optimizado** (~1KB gzip por marca)
- ✅ **Style Dictionary** para generación automática
- ✅ **Escalas completas** de colores (D400 → L400)

## 📚 Documentación

- [Guía de Tokens](../../docs/tokens.md)
- [Style Dictionary Config](./src/builder.ts)
- [Ejemplos](../../examples/)
- **[¿Por qué NO usamos Semantic Tokens?](../../DECISION_TOKENS_STRATEGY.md)** 📖

---

## 🤔 ¿Por qué solo Primitive Tokens?

### Estrategia Actual: Primitive + Overrides CSS

```
Primitives (por marca)
     ↓
  BASE CSS usa primitives
     ↓
  Override CSS cuando sea necesario
```

**Ventajas:**

- ✅ Más simple de entender
- ✅ Más fácil de debuggear
- ✅ Más flexible (cualquier propiedad CSS)
- ✅ Solo 1 de 5 marcas necesita override

**Ver documentación completa:** `DECISION_TOKENS_STRATEGY.md` en la raíz del proyecto.

---

## 📄 Licencia

MIT © Seguros Bolivar UI
