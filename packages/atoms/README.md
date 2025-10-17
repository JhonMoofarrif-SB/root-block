# ⚛️ @bolivar-ui/atoms

> Componentes CSS simples para el Bolivar UI Design System

Componentes atómicos construidos con CSS puro. Cada componente es autocontenido y usa variables CSS del sistema de tokens.

## 📦 Instalación

```bash
pnpm add @bolivar-ui/atoms
```

## 🎨 Componentes Disponibles

- **Button** - Botones con múltiples variantes y tamaños
- _(Más componentes próximamente)_

## 🚀 Uso

### Vía CDN

```html
<!-- Carga todos los componentes atoms -->
<link rel="stylesheet" href="https://cdn.rootblock.com/rb-styles.min.css" />

<!-- Usa las clases CSS -->
<button class="rb-button rb-button--primary">Primary</button>
<button class="rb-button rb-button--secondary">Secondary</button>
```

### Import Individual

```javascript
// Import solo el componente que necesitas
import '@bolivar-ui/atoms/button.css';
```

### Import Completo

```javascript
// Import todos los atoms
import '@bolivar-ui/atoms';
```

## 🔘 Button

Componente de botón con múltiples variantes, tamaños y estados.

### Variantes

```html
<button class="rb-button rb-button--primary">Primary</button>
<button class="rb-button rb-button--secondary">Secondary</button>
<button class="rb-button rb-button--tertiary">Tertiary</button>
<button class="rb-button rb-button--quaternary">Quaternary</button>
<button class="rb-button rb-button--quinary">Quinary</button>
<button class="rb-button rb-button--danger">Danger</button>
<button class="rb-button rb-button--success">Success</button>
```

### Tamaños

```html
<button class="rb-button rb-button--primary rb-button--small">Small</button>
<button class="rb-button rb-button--primary rb-button--medium">Medium</button>
<button class="rb-button rb-button--primary rb-button--large">Large</button>
```

### Estados

```html
<!-- Loading -->
<button class="rb-button rb-button--primary rb-button--loading">Loading...</button>

<!-- Disabled -->
<button class="rb-button rb-button--primary" disabled>Disabled</button>

<!-- Rounded -->
<button class="rb-button rb-button--primary rb-button--rounded">Rounded</button>
```

### Personalización

Cada componente expone variables CSS para personalización:

```css
/* Personalizar un botón */
.mi-boton-custom {
  --b-ui-button-bg-color: #ff6b6b;
  --b-ui-button-text-color: white;
  --b-ui-button-padding: 1rem 2rem;
  --b-ui-button-border-radius: 8px;
}
```

## 🎨 Variables CSS

### Variables de Button

```css
--b-ui-button-bg-color
--b-ui-button-text-color
--b-ui-button-border-color
--b-ui-button-padding
--b-ui-button-font-size
--b-ui-button-border-radius
--b-ui-button-transition
```

### Variables Globales (de @bolivar-ui/tokens)

Los componentes usan automáticamente las variables de tokens:

```css
--b-ui-color-primary-base
--b-ui-color-secondary-base
--b-ui-typography-fontFamily
--b-ui-shadow-m
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

.b-ui-mi-componente {
  /* Usa variables de tokens */
  background: var(--b-ui-color-grayscale-white);
  color: var(--b-ui-color-grayscale-black);
  padding: var(--b-ui-spacing-md, 1rem);
  border-radius: 8px;

  /* Expón variables para personalización */
  --b-ui-mi-componente-bg: var(--b-ui-color-grayscale-white);
  --b-ui-mi-componente-padding: 1rem;
}

/* Variantes */
.b-ui-mi-componente--variante {
  background: var(--b-ui-color-primary-base);
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

MIT © Bolivar UI
