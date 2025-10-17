# 🎨 Brand Override System - Data Attributes Approach

Sistema de personalización de componentes por marca usando **data attributes** y CSS puro.

---

## 📋 Tabla de Contenidos

1. [Visión General](#-visión-general)
2. [Estructura del Sistema](#-estructura-del-sistema)
3. [Patrón de Variables CSS](#-patrón-de-variables-css)
4. [Cómo Funciona](#-cómo-funciona)
5. [Agregar Nueva Marca](#-agregar-nueva-marca)
6. [Agregar Nuevo Componente](#-agregar-nuevo-componente)
7. [Ejemplos por Marca](#-ejemplos-por-marca)

---

## 🎯 Visión General

Este sistema permite personalizar componentes para diferentes marcas sin duplicar código. Cada marca puede:

- ✅ Usar estilos base por defecto
- ✅ Personalizar solo lo que necesita
- ✅ Mantener consistencia con el Design System
- ✅ Escalar fácilmente a nuevas marcas

### Principios Clave

1. **CSS Puro**: Sin dependencias de JavaScript o JSON
2. **Data Attributes**: `[data-brand="nombre-marca"]`
3. **Variables CSS**: Patrón consistente `--sb-ui-{componente}-{tipo}-{variante}-{propiedad}-{estado}`
4. **Cascada Controlada**: Los overrides tienen mayor especificidad

---

## 🏗️ Estructura del Sistema

```
packages/
├── atoms/src/
│   └── button.css                    # ← Base CSS con variables
│
├── brand-overrides/src/
│   ├── seguros-bolivar/
│   │   ├── index.css                 # ← Import de componentes
│   │   └── button.css                # ← Overrides específicos
│   │
│   ├── davivienda/
│   │   ├── index.css
│   │   └── button.css
│   │
│   ├── jelpit/
│   │   ├── index.css
│   │   └── button.css
│   │
│   ├── cien-cuadras/
│   │   ├── index.css
│   │   └── button.css
│   │
│   ├── doctor-aki/
│   │   ├── index.css
│   │   └── button.css
│   │
│   └── white-label/
│       ├── index.css
│       └── button.css                # ← Vacío (usa defaults)
│
└── bundle/src/
    └── builder.ts                     # ← Ensambla: tokens + atoms + overrides
```

---

## 🔧 Patrón de Variables CSS

### Nomenclatura

```
--sb-ui-{componente}-{tipo}-{variante}-{propiedad}-{estado}
```

### Ejemplo: Button

```css
/* COMPONENTE: button */
/* TIPO: primary, secondary, tertiary, error */
/* VARIANTE: stroke, fill, text */
/* PROPIEDAD: bg, text, border */
/* ESTADO: (default), hover, active, disabled */

--sb-ui-button-primary-stroke-bg                  /* default */
--sb-ui-button-primary-stroke-bg-hover
--sb-ui-button-primary-stroke-bg-active
--sb-ui-button-primary-stroke-bg-disabled

--sb-ui-button-primary-stroke-text
--sb-ui-button-primary-stroke-text-hover
--sb-ui-button-primary-stroke-text-active
--sb-ui-button-primary-stroke-text-disabled

--sb-ui-button-primary-stroke-border
--sb-ui-button-primary-stroke-border-hover
--sb-ui-button-primary-stroke-border-active
--sb-ui-button-primary-stroke-border-disabled
```

### Matriz Completa para Button

| Tipo      | Variantes   | Propiedades   | Estados   | Total             |
| --------- | ----------- | ------------- | --------- | ----------------- |
| 4 tipos   | 3 variantes | 3 propiedades | 4 estados | **144 variables** |
| primary   | stroke      | bg            | default   |                   |
| secondary | fill        | text          | hover     |                   |
| tertiary  | text        | border        | active    |                   |
| error     |             |               | disabled  |                   |

---

## ⚙️ Cómo Funciona

### 1. **Base CSS** (`packages/atoms/src/button.css`)

Define las variables con valores por defecto:

```css
@layer variants {
  .sb-ui-button--primary {
    /* Define variables STROKE (default) */
    --sb-ui-button-primary-stroke-bg: var(--sb-ui-color-grayscale-white);
    --sb-ui-button-primary-stroke-text: var(--sb-ui-color-primary-D100);
    --sb-ui-button-primary-stroke-border: var(--sb-ui-color-secondary-base);

    /* Aplica las variables */
    --sb-ui-button-bg-color: var(--sb-ui-button-primary-stroke-bg);
    --sb-ui-button-text-color: var(--sb-ui-button-primary-stroke-text);
    --sb-ui-button-border-color: var(--sb-ui-button-primary-stroke-border);
  }
}

@layer style-variants {
  .sb-ui-button--fill.sb-ui-button--primary {
    /* Define variables FILL */
    --sb-ui-button-primary-fill-bg: var(--sb-ui-color-secondary-base);
    --sb-ui-button-primary-fill-text: var(--sb-ui-color-primary-D100);

    /* Sobreescribe las aplicadas */
    --sb-ui-button-bg-color: var(--sb-ui-button-primary-fill-bg);
    --sb-ui-button-text-color: var(--sb-ui-button-primary-fill-text);
  }
}
```

### 2. **Brand Override** (`packages/brand-overrides/src/seguros-bolivar/button.css`)

Redefine solo las variables que quiere cambiar:

```css
[data-brand='seguros-bolivar'] {
  .sb-ui-button--primary {
    /* Solo redefine lo que cambia */
    --sb-ui-button-primary-stroke-text: var(--sb-ui-color-primary-D100);
    --sb-ui-button-primary-stroke-border: var(--sb-ui-color-secondary-base);
  }

  .sb-ui-button--fill.sb-ui-button--primary {
    --sb-ui-button-primary-fill-bg: var(--sb-ui-color-secondary-base);
    --sb-ui-button-primary-fill-text: var(--sb-ui-color-primary-D100);
  }
}
```

### 3. **Uso en HTML**

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Bundle completo: tokens + atoms + overrides de Seguros Bolívar -->
    <link rel="stylesheet" href="rb-seguros-bolivar-light.min.css" />
  </head>
  <body data-brand="seguros-bolivar">
    <!-- El botón usa los overrides de Seguros Bolívar automáticamente -->
    <button class="rb-button rb-button--primary rb-button--fill">Botón Primary Fill</button>
  </body>
</html>
```

### 4. **Cascada CSS**

```
1. Base (button.css)
   ↓
2. Brand Override (seguros-bolivar/button.css)
   ↓
3. Resultado: Base + Override
```

La especificidad de `[data-brand="seguros-bolivar"] .sb-ui-button--primary` es mayor que `.sb-ui-button--primary`, por lo que los overrides siempre ganan.

---

## ➕ Agregar Nueva Marca

### Paso 1: Crear Estructura

```bash
cd packages/brand-overrides/src
mkdir nueva-marca
touch nueva-marca/index.css
touch nueva-marca/button.css
```

### Paso 2: `index.css`

```css
/**
 * ============================================================================
 * Nueva Marca - Brand Overrides Index
 * ============================================================================
 */

@import './button.css';
/* Importar otros componentes aquí cuando existan */
```

### Paso 3: `button.css`

```css
/**
 * ============================================================================
 * Nueva Marca - Button Component Overrides
 * ============================================================================
 */

[data-brand='nueva-marca'] {
  /* PRIMARY - STROKE */
  .sb-ui-button--primary {
    --sb-ui-button-primary-stroke-bg: var(--sb-ui-color-grayscale-white);
    --sb-ui-button-primary-stroke-text: var(--sb-ui-color-primary-base);
    --sb-ui-button-primary-stroke-border: var(--sb-ui-color-primary-base);
  }

  /* PRIMARY - FILL */
  .sb-ui-button--fill.sb-ui-button--primary {
    --sb-ui-button-primary-fill-bg: var(--sb-ui-color-primary-base);
    --sb-ui-button-primary-fill-text: var(--sb-ui-color-grayscale-white);
  }

  /* Agregar más overrides según necesidad */
}
```

### Paso 4: Compilar

```bash
pnpm run build:all
```

### Paso 5: Usar

```html
<link rel="stylesheet" href="rb-nueva-marca-light.min.css" />
<body data-brand="nueva-marca">
  <button class="rb-button rb-button--primary">Mi Botón</button>
</body>
```

---

## 🆕 Agregar Nuevo Componente

### Paso 1: Crear Base CSS

`packages/atoms/src/card.css`:

```css
@layer reset, tokens, base, variants, states, utilities;

@layer variants {
  .sb-ui-card--primary {
    /* Define variables */
    --sb-ui-card-primary-bg: var(--sb-ui-color-grayscale-white);
    --sb-ui-card-primary-text: var(--sb-ui-color-grayscale-black);
    --sb-ui-card-primary-border: var(--sb-ui-color-primary-base);

    /* Aplica variables */
    background-color: var(--sb-ui-card-primary-bg);
    color: var(--sb-ui-card-primary-text);
    border: 1px solid var(--sb-ui-card-primary-border);
  }
}
```

### Paso 2: Crear Overrides por Marca

`packages/brand-overrides/src/seguros-bolivar/card.css`:

```css
[data-brand='seguros-bolivar'] {
  .sb-ui-card--primary {
    --sb-ui-card-primary-border: var(--sb-ui-color-secondary-base);
  }
}
```

### Paso 3: Importar en `index.css`

```css
@import './button.css';
@import './card.css'; /* ← Nuevo */
```

### Paso 4: Compilar

```bash
pnpm run build:all
```

---

## 📚 Ejemplos por Marca

### 🟡 Seguros Bolívar

**Personalización:** Amarillo (secondary) + Verde (primary)

```css
[data-brand='seguros-bolivar'] {
  .sb-ui-button--primary {
    /* STROKE: Borde amarillo, texto verde */
    --sb-ui-button-primary-stroke-border: var(--sb-ui-color-secondary-base);
    --sb-ui-button-primary-stroke-text: var(--sb-ui-color-primary-D100);
  }

  .sb-ui-button--fill.sb-ui-button--primary {
    /* FILL: Fondo amarillo, texto verde */
    --sb-ui-button-primary-fill-bg: var(--sb-ui-color-secondary-base);
    --sb-ui-button-primary-fill-text: var(--sb-ui-color-primary-D100);
  }
}
```

### 🔵 Davivienda

**Personalización:** Secondary y Error con colores propios

```css
[data-brand='davivienda'] {
  .sb-ui-button--secondary {
    --sb-ui-button-secondary-stroke-border: var(--sb-ui-color-primary-base);
  }

  .sb-ui-button--fill.sb-ui-button--error {
    --sb-ui-button-error-fill-bg: var(--sb-ui-color-feedback-error-base);
  }
}
```

### 🟢 Jelpit

**Personalización:** PRIMARY TEXT con background L400

```css
[data-brand='jelpit'] {
  .sb-ui-button--text.sb-ui-button--primary {
    --sb-ui-button-primary-text-bg-hover: var(--sb-ui-color-primary-L400);
    --sb-ui-button-primary-text-text: var(--sb-ui-color-primary-D100);
  }
}
```

### 🟠 Cien Cuadras

**Personalización:** Tonos de texto D200/D300

```css
[data-brand='cien-cuadras'] {
  .sb-ui-button--primary {
    --sb-ui-button-primary-stroke-text: var(--sb-ui-color-primary-D200);
  }

  .sb-ui-button--fill.sb-ui-button--primary {
    --sb-ui-button-primary-fill-text: var(--sb-ui-color-primary-D300);
  }
}
```

### 🩺 Doctor Aki

**Personalización:** PRIMARY FILL con colores propios

```css
[data-brand='doctor-aki'] {
  .sb-ui-button--fill.sb-ui-button--primary {
    --sb-ui-button-primary-fill-bg: var(--sb-ui-color-primary-base);
    --sb-ui-button-primary-fill-text: var(--sb-ui-color-grayscale-white);
  }
}
```

### ⚪ White Label

**Sin personalización:** Usa todos los estilos por defecto

```css
[data-brand='white-label'] {
  /* Sin overrides - usa estilos base */
}
```

---

## ✅ Ventajas del Sistema

| Ventaja            | Descripción                                 |
| ------------------ | ------------------------------------------- |
| 🎯 **CSS Puro**    | Sin JavaScript, JSON, ni builders complejos |
| 🔧 **Mantenible**  | Patrón consistente y predecible             |
| 📦 **Escalable**   | Agregar marcas es copiar + modificar        |
| ⚡ **Performance** | CSS nativo, sin overhead                    |
| 🎨 **Flexible**    | Cada marca define solo lo que necesita      |
| 🔍 **Debugging**   | DevTools muestra cascada completa           |
| 📱 **Responsive**  | Compatible con media queries                |
| ♿ **Accesible**   | Mantiene focus, disabled, etc.              |

---

## 🚀 Workflow de Desarrollo

### 1. Modificar Componente Base

```bash
# Editar
code packages/atoms/src/button.css

# Compilar
pnpm run build:all
```

### 2. Modificar Override de Marca

```bash
# Editar
code packages/brand-overrides/src/seguros-bolivar/button.css

# Compilar
pnpm run build:all
```

### 3. Ver Cambios en Browser

```bash
# Servir ejemplos
cd examples
npx serve

# Abrir: http://localhost:3000
```

### 4. Verificar Build

Los archivos generados están en:

- `packages/bundle/dist/rb-{marca}-{theme}.min.css`
- `examples/dist/rb-{marca}-{theme}.min.css`

---

## 📝 Convenciones

### Nombres de Variables

- ✅ Usar guiones: `--sb-ui-button-primary-stroke-bg`
- ❌ No camelCase: `--rbButtonPrimaryStrokeBg`
- ✅ Prefijo `--sb-ui-`: `--sb-ui-card-border`
- ❌ Sin prefijo: `--card-border`

### Nombres de Clases

- ✅ BEM con prefijo: `.sb-ui-button--primary`
- ❌ Sin prefijo: `.button--primary`
- ✅ Doble guión para modificadores: `.sb-ui-button--fill`
- ❌ Guión simple: `.sb-ui-button-fill`

### Data Attributes

- ✅ Kebab-case: `data-brand="seguros-bolivar"`
- ❌ CamelCase: `data-brand="segurosBolivar"`
- ✅ En `<body>`: `<body data-brand="jelpit">`
- ❌ En componente: `<button data-brand="jelpit">`

---

## 🐛 Troubleshooting

### Override no se aplica

**Problema:** Los estilos de marca no se ven.

**Solución:**

1. Verificar que `data-brand` está en `<body>`
2. Verificar que el CSS de la marca está cargado
3. Limpiar caché del browser (Cmd+Shift+R)
4. Verificar especificidad en DevTools

### Variable no existe

**Problema:** `var(--sb-ui-button-xxx)` no tiene valor.

**Solución:**

1. Verificar que la variable está definida en `button.css`
2. Verificar el patrón de nombre (tipo-variante-propiedad-estado)
3. Verificar que el selector coincide (`.sb-ui-button--primary`, `.sb-ui-button--fill.sb-ui-button--primary`)

### Build falla

**Problema:** `pnpm run build:all` da error.

**Solución:**

1. Limpiar: `pnpm run clean`
2. Verificar sintaxis CSS (no `}` de más o de menos)
3. Verificar imports en `index.css`
4. Ver logs completos del error

---

## 📊 Resumen del Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  TOKENS (JSON)                                              │
│  └─> CSS Variables: --sb-ui-color-primary-base, etc.          │
│                                                             │
│  ▼                                                          │
│                                                             │
│  ATOMS (button.css)                                         │
│  └─> Componente base con variables:                        │
│      --sb-ui-button-primary-stroke-bg                          │
│      --sb-ui-button-primary-fill-bg                            │
│      etc.                                                   │
│                                                             │
│  ▼                                                          │
│                                                             │
│  BRAND OVERRIDES (seguros-bolivar/button.css)              │
│  └─> Redefine solo lo necesario:                           │
│      [data-brand="seguros-bolivar"] {                       │
│        --sb-ui-button-primary-stroke-bg: ...                   │
│      }                                                      │
│                                                             │
│  ▼                                                          │
│                                                             │
│  BUNDLE (builder.ts)                                        │
│  └─> Ensambla: tokens + atoms + overrides                  │
│      Genera: rb-seguros-bolivar-light.min.css              │
│                                                             │
│  ▼                                                          │
│                                                             │
│  HTML                                                       │
│  <link href="rb-seguros-bolivar-light.min.css">            │
│  <body data-brand="seguros-bolivar">                        │
│    <button class="rb-button rb-button--primary">           │
│      ✅ Usa overrides de Seguros Bolívar                    │
│    </button>                                                │
│  </body>                                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎓 Recursos Adicionales

- [CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Cascade Layers](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

---

**Última actualización:** 2025-01-10  
**Versión:** 1.0.0  
**Sistema:** Seguros Bolivar UI Design System
