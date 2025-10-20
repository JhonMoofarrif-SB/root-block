# ⚛️ @seguros-bolivar-ui/atoms

> Componentes CSS simples para el Seguros Bolivar UI Design System

Componentes atómicos construidos con CSS puro. Cada componente es autocontenido y usa variables CSS del sistema de tokens.

## 📦 Instalación

```bash
pnpm add @seguros-bolivar-ui/atoms
```

## 🎨 Componentes Disponibles

- **Button** - Botones con múltiples variantes y tamaños
- _(Más componentes próximamente)_

## 🚀 Uso

### Vía CDN

```html
<!-- Carga todos los componentes atoms -->
<link rel="stylesheet" href="https://cdn.rootblock.com/sb-ui-styles.min.css" />

<!-- Usa las clases CSS -->
<button class="sb-ui-button sb-ui-button--primary">Primary</button>
<button class="sb-ui-button sb-ui-button--secondary">Secondary</button>
```

### Import Individual

```javascript
// Import solo el componente que necesitas
import '@seguros-bolivar-ui/atoms/button.css';
```

### Import Completo

```javascript
// Import todos los atoms
import '@seguros-bolivar-ui/atoms';
```

## 🔘 Button

Componente de botón con múltiples variantes, tamaños y estados.

### Variantes

```html
<button class="sb-ui-button sb-ui-button--primary">Primary</button>
<button class="sb-ui-button sb-ui-button--secondary">Secondary</button>
<button class="sb-ui-button sb-ui-button--tertiary">Tertiary</button>
<button class="sb-ui-button sb-ui-button--quaternary">Quaternary</button>
<button class="sb-ui-button sb-ui-button--quinary">Quinary</button>
<button class="sb-ui-button sb-ui-button--danger">Danger</button>
<button class="sb-ui-button sb-ui-button--success">Success</button>
```

### Tamaños

```html
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--small">Small</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--medium">Medium</button>
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--large">Large</button>
```

### Estados

```html
<!-- Loading -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--loading">Loading...</button>

<!-- Disabled -->
<button class="sb-ui-button sb-ui-button--primary" disabled>Disabled</button>

<!-- Rounded -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--rounded">Rounded</button>
```

### Personalización

Cada componente expone variables CSS para personalización:

```css
/* Personalizar un botón */
.mi-boton-custom {
  --sb-ui-button-bg-color: #ff6b6b;
  --sb-ui-button-text-color: white;
  --sb-ui-button-padding: 1rem 2rem;
  --sb-ui-button-border-radius: 8px;
}
```

## 🎨 Variables CSS

### Variables de Button

```css
--sb-ui-button-bg-color
--sb-ui-button-text-color
--sb-ui-button-border-color
--sb-ui-button-padding
--sb-ui-button-font-size
--sb-ui-button-border-radius
--sb-ui-button-transition
```

### Variables Globales (de @seguros-bolivar-ui/tokens)

Los componentes usan automáticamente las variables de tokens:

```css
--sb-ui-color-primary-base
--sb-ui-color-secondary-base
--sb-ui-typography-fontFamily
--sb-ui-shadow-m
```

## 🏗️ Arquitectura

### Filosofía

- **CSS Puro**: Sin JavaScript, solo clases CSS
- **Autocontenido**: Cada componente tiene todo su CSS
- **Variables CSS**: Totalmente personalizable
- **Multi-marca**: Se adapta automáticamente a los tokens
- **Performante**: Sin runtime overhead

### Estructura de Archivos

```
packages/atoms/
├── src/
│   ├── button.css      # Componente Button
│   └── index.css       # Bundle de todos los atoms
└── dist/
    ├── button.css      # Compilado individual
    └── index.css       # Bundle compilado
```

## 🛠️ Desarrollo

### Agregar un Nuevo Componente

1. **Crear archivo CSS:**

```bash
touch src/mi-componente.css
```

2. **Definir estilos:**

```css
/* src/mi-componente.css */

.sb-ui-mi-componente {
  /* Usa variables de tokens */
  background: var(--sb-ui-color-grayscale-white);
  color: var(--sb-ui-color-grayscale-black);
  padding: var(--sb-ui-spacing-md, 1rem);
  border-radius: 8px;

  /* Expón variables para personalización */
  --sb-ui-mi-componente-bg: var(--sb-ui-color-grayscale-white);
  --sb-ui-mi-componente-padding: 1rem;
}

/* Variantes */
.sb-ui-mi-componente--variante {
  background: var(--sb-ui-color-primary-base);
  color: white;
}
```

3. **Agregar al bundle:**

```css
/* src/index.css */
@import './button.css';
@import './mi-componente.css';
```

4. **Build:**

```bash
pnpm build
```

### Scripts

```bash
# Build
pnpm build

# Lint CSS
pnpm lint

# Clean
pnpm clean
```

## 📊 Bundle Size

| Componente | Size | Gzip   |
| ---------- | ---- | ------ |
| Button     | ~3KB | ~800B  |
| **Total**  | ~7KB | ~1.4KB |

## 🎯 Características

- ✅ **CSS Puro** - Sin JavaScript
- ✅ **Variables CSS** - Totalmente personalizable
- ✅ **Multi-marca** - Se adapta a cualquier marca
- ✅ **Accesible** - Cumple WCAG 2.1 AA
- ✅ **Responsive** - Funciona en todos los dispositivos
- ✅ **Ligero** - ~1.4KB gzip total

## 📚 Ejemplos

Ver [ejemplos completos](../../examples/bootstrap-style.html).

## 📄 Licencia

MIT © Seguros Bolivar UI
