# Stepper Component

**Componente de pasos progresivos** para crear flujos de trabajo multi-paso, formularios, wizards y procesos secuenciales.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso Básico](#uso-básico)
- [API Completa](#api-completa)
- [Custom Events](#custom-events)
- [Ejemplos](#ejemplos)
- [Accesibilidad](#accesibilidad)
- [Personalización](#personalización)

---

## ✨ Características

- ✅ **3 variantes de tipo:** Number, Icon, Mix (icon + badge)
- ✅ **2 orientaciones:** Horizontal y Vertical
- ✅ **Navegación lineal o no-lineal** configurable
- ✅ **Navegación por teclado** (Arrow keys, Home, End, Enter/Space)
- ✅ **Estados visuales:** Empty Default, Empty Active, Filled Default, Filled Active
- ✅ **Track styles:** Solid o Dash (línea punteada)
- ✅ **Custom Events** para validación y control
- ✅ **Responsive** con clamp() (Desktop 54-62px, Mobile 40-46px)
- ✅ **Accesibilidad completa** (ARIA, keyboard navigation)
- ✅ **Web Component nativo** (Shadow DOM)

---

## 📦 Instalación

```bash
# Desde el root del proyecto
pnpm install

# O específicamente el paquete molecules
pnpm --filter @bloock/sb-ui-molecules install
```

---

## 🚀 Uso Básico

### HTML

```html
<!-- Stepper básico con 4 pasos -->
<sb-ui-stepper id="myStepper" current-step="1" orientation="horizontal" type="number">
</sb-ui-stepper>

<script type="module">
  import { SbUiStepper } from '@bloock/sb-ui-molecules';

  const stepper = document.getElementById('myStepper');

  // Configurar los pasos
  stepper.steps = [
    { id: 1, label: 'Paso 1' },
    { id: 2, label: 'Paso 2' },
    { id: 3, label: 'Paso 3' },
    { id: 4, label: 'Paso 4' },
  ];

  // Navegar
  stepper.next(); // Siguiente paso
  stepper.prev(); // Paso anterior
  stepper.goToStep(3); // Ir al paso 3
</script>
```

---

## 📚 API Completa

### Atributos HTML

| Atributo              | Tipo                        | Default      | Descripción                                       |
| --------------------- | --------------------------- | ------------ | ------------------------------------------------- |
| `current-step`        | `number`                    | `1`          | Paso actual (1-indexed)                           |
| `orientation`         | `horizontal` \| `vertical`  | `horizontal` | Orientación del stepper                           |
| `type`                | `number` \| `icon` \| `mix` | `number`     | Tipo de visualización de los steps                |
| `track-style`         | `solid` \| `dash`           | `solid`      | Estilo de la línea conectora                      |
| `keyboard-navigation` | `boolean`                   | `true`       | Habilita/deshabilita navegación por teclado       |
| `linear-navigation`   | `boolean`                   | `true`       | Navegación lineal (solo permite avanzar en orden) |

### Propiedades JavaScript

#### `steps: StepData[]`

Array de objetos que definen cada paso.

```typescript
interface StepData {
  id: number; // ID único del paso
  label?: string; // Texto descriptivo (opcional)
  icon?: string; // SVG string o nombre de icono (opcional)
  completed?: boolean; // Si el paso está completado (opcional)
  disabled?: boolean; // Si el paso está deshabilitado (opcional)
  data?: any; // Datos custom del paso (opcional)
}
```

**Ejemplo:**

```javascript
stepper.steps = [
  { id: 1, label: 'Datos Personales', icon: '<svg>...</svg>' },
  { id: 2, label: 'Dirección', disabled: false },
  { id: 3, label: 'Confirmación' },
];
```

#### `currentStep: number`

Getter/Setter del paso actual (1-indexed).

```javascript
console.log(stepper.currentStep); // 1
stepper.currentStep = 3; // Ir al paso 3
```

#### `orientation: 'horizontal' | 'vertical'`

Getter/Setter de la orientación.

```javascript
stepper.orientation = 'vertical';
```

#### `type: 'number' | 'icon' | 'mix'`

Getter/Setter del tipo de visualización.

```javascript
stepper.type = 'mix'; // Icon + badge numérico
```

#### `trackStyle: 'solid' | 'dash'`

Getter/Setter del estilo de la línea conectora.

```javascript
stepper.trackStyle = 'dash'; // Línea punteada
```

#### `keyboardNavigation: boolean`

Getter/Setter de navegación por teclado.

```javascript
stepper.keyboardNavigation = false; // Deshabilitar
```

#### `linearNavigation: boolean`

Getter/Setter de navegación lineal.

```javascript
stepper.linearNavigation = false; // Permitir saltar entre pasos
```

---

### Métodos Públicos

#### `next(): boolean`

Avanza al siguiente paso.

```javascript
const success = stepper.next();
if (success) {
  console.log('Avanzó al siguiente paso');
}
```

**Returns:** `true` si pudo avanzar, `false` si no (último paso o bloqueado).

---

#### `prev(): boolean`

Retrocede al paso anterior.

```javascript
const success = stepper.prev();
```

**Returns:** `true` si pudo retroceder, `false` si no (primer paso).

---

#### `goToStep(step: number, direction?: 'next' | 'prev' | 'jump'): boolean`

Ir a un paso específico.

```javascript
stepper.goToStep(3, 'jump'); // Saltar al paso 3
```

**Parámetros:**

- `step`: Número del paso (1-indexed)
- `direction`: Dirección del cambio (opcional, default: `'jump'`)

**Returns:** `true` si pudo cambiar, `false` si no (paso deshabilitado, navegación lineal bloqueada, etc.).

---

#### `completeStep(step: number, data?: any): void`

Marca un paso como completado.

```javascript
stepper.completeStep(2, { validated: true });
```

**Parámetros:**

- `step`: Número del paso (1-indexed)
- `data`: Datos custom (opcional)

---

#### `validateCurrentStep(valid: boolean, errors?: string[]): void`

Valida el paso actual.

```javascript
stepper.validateCurrentStep(false, ['Email inválido', 'Teléfono requerido']);
```

**Parámetros:**

- `valid`: Si el paso es válido
- `errors`: Array de mensajes de error (opcional)

---

#### `reset(): void`

Resetea el stepper al paso 1 y limpia los pasos completados.

```javascript
stepper.reset();
```

---

#### `getStepState(step: number): string`

Obtiene el estado visual de un paso.

```javascript
const state = stepper.getStepState(2);
// Returns: 'empty-default' | 'empty-active' | 'filled-default' | 'filled-active'
```

**Estados:**

- `empty-default`: Paso pendiente (no activo)
- `empty-active`: Paso actual (sin completar)
- `filled-default`: Paso completado (no activo)
- `filled-active`: Paso completado y activo

---

## 🎯 Custom Events

Todos los eventos son:

- ✅ **Bubbles:** `true`
- ✅ **Composed:** `true` (atraviesan Shadow DOM)
- ✅ **CustomEvent** con `detail` object

### `sb-stepper:before-step-change`

Se dispara **antes** de cambiar de paso. **Cancelable** con `event.preventDefault()`.

```javascript
stepper.addEventListener('sb-stepper:before-step-change', (event) => {
  console.log(event.detail);
  // { from: 1, to: 2, direction: 'next' }

  // Cancelar el cambio
  if (!validarPasoActual()) {
    event.preventDefault();
  }
});
```

**Detail:**

```typescript
{
  from: number; // Paso actual
  to: number; // Paso destino
  direction: 'next' | 'prev' | 'jump';
}
```

---

### `sb-stepper:step-changed`

Se dispara **después** de cambiar de paso exitosamente.

```javascript
stepper.addEventListener('sb-stepper:step-changed', (event) => {
  console.log(event.detail);
  // { currentStep: 2, previousStep: 1 }
});
```

**Detail:**

```typescript
{
  currentStep: number; // Nuevo paso actual
  previousStep: number; // Paso anterior
}
```

---

### `sb-stepper:validate`

Se dispara al validar un paso.

```javascript
stepper.addEventListener('sb-stepper:validate', (event) => {
  console.log(event.detail);
  // { step: 2, valid: false, errors: ['Email inválido'] }
});
```

**Detail:**

```typescript
{
  step: number;
  valid: boolean;
  errors?: string[];
}
```

---

### `sb-stepper:step-completed`

Se dispara al marcar un paso como completado.

```javascript
stepper.addEventListener('sb-stepper:step-completed', (event) => {
  console.log(event.detail);
  // { step: 2, data: { validated: true } }
});
```

**Detail:**

```typescript
{
  step: number;
  data?: any;
}
```

---

### `sb-stepper:step-clicked`

Se dispara al hacer click en un step.

```javascript
stepper.addEventListener('sb-stepper:step-clicked', (event) => {
  console.log(event.detail);
  // { step: 3, clickable: true }
});
```

**Detail:**

```typescript
{
  step: number;
  clickable: boolean;
}
```

---

### `sb-stepper:ready`

Se dispara cuando el componente está listo.

```javascript
stepper.addEventListener('sb-stepper:ready', (event) => {
  console.log(event.detail);
  // { totalSteps: 4, currentStep: 1 }
});
```

**Detail:**

```typescript
{
  totalSteps: number;
  currentStep: number;
}
```

---

## 💡 Ejemplos

### Ejemplo 1: Stepper Básico

```html
<sb-ui-stepper id="basic"></sb-ui-stepper>

<button onclick="document.getElementById('basic').next()">Siguiente</button>

<script type="module">
  import { SbUiStepper } from '@bloock/sb-ui-molecules';

  const stepper = document.getElementById('basic');
  stepper.steps = [
    { id: 1, label: 'Paso 1' },
    { id: 2, label: 'Paso 2' },
    { id: 3, label: 'Paso 3' },
  ];
</script>
```

---

### Ejemplo 2: Formulario Multi-Paso con Validación

```html
<sb-ui-stepper id="form-stepper"></sb-ui-stepper>

<form id="step-form"></form>

<button onclick="validateAndNext()">Siguiente</button>

<script type="module">
  import { SbUiStepper } from '@bloock/sb-ui-molecules';

  const stepper = document.getElementById('form-stepper');
  stepper.steps = [
    { id: 1, label: 'Datos Personales' },
    { id: 2, label: 'Dirección' },
    { id: 3, label: 'Confirmación' },
  ];

  // Validación antes de cambiar paso
  stepper.addEventListener('sb-stepper:before-step-change', (event) => {
    const form = document.getElementById('step-form');
    if (!form.checkValidity()) {
      event.preventDefault();
      alert('Complete todos los campos requeridos');
    }
  });

  // Marcar paso como completado al avanzar
  stepper.addEventListener('sb-stepper:step-changed', (event) => {
    if (event.detail.currentStep > event.detail.previousStep) {
      stepper.completeStep(event.detail.previousStep);
    }
  });

  function validateAndNext() {
    const form = document.getElementById('step-form');
    const isValid = form.checkValidity();

    stepper.validateCurrentStep(isValid, isValid ? [] : ['Campos requeridos']);

    if (isValid) {
      stepper.next();
    }
  }

  window.validateAndNext = validateAndNext;
</script>
```

---

### Ejemplo 3: Stepper con Iconos Personalizados

```html
<sb-ui-stepper id="icon-stepper" type="icon"></sb-ui-stepper>

<script type="module">
  import { SbUiStepper } from '@bloock/sb-ui-molecules';

  const stepper = document.getElementById('icon-stepper');
  stepper.steps = [
    {
      id: 1,
      label: 'Usuario',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>`,
    },
    {
      id: 2,
      label: 'Ubicación',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>`,
    },
    {
      id: 3,
      label: 'Confirmación',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>`,
    },
  ];
</script>
```

---

### Ejemplo 4: Navegación No-Lineal

```html
<sb-ui-stepper id="nonlinear" linear-navigation="false"></sb-ui-stepper>

<button onclick="document.getElementById('nonlinear').goToStep(1)">Ir a Paso 1</button>
<button onclick="document.getElementById('nonlinear').goToStep(2)">Ir a Paso 2</button>
<button onclick="document.getElementById('nonlinear').goToStep(3)">Ir a Paso 3</button>

<script type="module">
  import { SbUiStepper } from '@bloock/sb-ui-molecules';

  const stepper = document.getElementById('nonlinear');
  stepper.steps = [
    { id: 1, label: 'Información' },
    { id: 2, label: 'Documentos' },
    { id: 3, label: 'Revisión' },
  ];
</script>
```

---

## ♿ Accesibilidad

El componente Stepper cumple con las pautas WCAG 2.1 AA:

### Navegación por Teclado

| Tecla                | Acción           |
| -------------------- | ---------------- |
| `Tab`                | Foco entre steps |
| `Enter` / `Space`    | Activar step     |
| `Arrow Right / Down` | Siguiente paso   |
| `Arrow Left / Up`    | Paso anterior    |
| `Home`               | Primer paso      |
| `End`                | Último paso      |

### ARIA Attributes

- `role="button"` en cada step circle
- `aria-label` descriptivo para cada step
- `aria-current="step"` en el paso actual
- `tabindex="0"` en steps clickables
- `tabindex="-1"` en steps no clickables

### Preferencias de Usuario

```css
/* Reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  /* Todas las transiciones deshabilitadas */
}

/* Alto contraste */
@media (prefers-contrast: high) {
  /* Bordes más gruesos (3px) */
}
```

---

## 🎨 Personalización

### Variables CSS Disponibles

Puedes sobrescribir estas variables CSS para personalizar el stepper:

#### Tamaños de Steps

```css
--sb-ui-stepper-step-size-number: clamp(40px, 8vw + 20px, 54px);
--sb-ui-stepper-step-size-icon: clamp(46px, 8vw + 26px, 62px);
--sb-ui-stepper-step-size-mix: clamp(46px, 8vw + 26px, 62px);
```

#### Colores - Empty Default (pendiente)

```css
--sb-ui-stepper-step-empty-default-bg: var(--sb-ui-color-grayscale-white);
--sb-ui-stepper-step-empty-default-border: var(--sb-ui-color-grayscale-L200);
--sb-ui-stepper-step-empty-default-text: var(--sb-ui-color-grayscale-base);
```

#### Colores - Empty Active (paso actual)

```css
--sb-ui-stepper-step-empty-active-bg: var(--sb-ui-color-secondary-L400);
--sb-ui-stepper-step-empty-active-border: var(--sb-ui-color-secondary-base);
--sb-ui-stepper-step-empty-active-text: var(--sb-ui-color-grayscale-black);
```

#### Colores - Filled Default (completado)

```css
--sb-ui-stepper-step-filled-default-bg: var(--sb-ui-color-primary-base);
--sb-ui-stepper-step-filled-default-border: var(--sb-ui-color-primary-base);
--sb-ui-stepper-step-filled-default-text: var(--sb-ui-color-grayscale-white);
```

#### Colores - Filled Active (completado + activo)

```css
--sb-ui-stepper-step-filled-active-bg: var(--sb-ui-color-primary-base);
--sb-ui-stepper-step-filled-active-border: var(--sb-ui-color-primary-D100);
--sb-ui-stepper-step-filled-active-text: var(--sb-ui-color-grayscale-white);
```

#### Track (línea conectora)

```css
--sb-ui-stepper-track-height: 2px;
--sb-ui-stepper-track-active-color: var(--sb-ui-color-primary-base);
--sb-ui-stepper-track-default-color: var(--sb-ui-color-grayscale-L200);
```

#### Labels

```css
--sb-ui-stepper-label-font-size: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
--sb-ui-stepper-label-default-color: var(--sb-ui-color-grayscale-base);
--sb-ui-stepper-label-active-color: var(--sb-ui-color-grayscale-black);
--sb-ui-stepper-label-active-weight: 700;
```

#### Badge (variante mix)

```css
--sb-ui-stepper-badge-size: clamp(16px, 2vw + 8px, 20px);
--sb-ui-stepper-badge-bg: var(--sb-ui-color-secondary-base);
--sb-ui-stepper-badge-text: var(--sb-ui-color-grayscale-black);
```

### Ejemplo de Personalización

```html
<style>
  #custom-stepper {
    /* Cambiar colores del paso activo */
    --sb-ui-stepper-step-empty-active-bg: #fffcf0;
    --sb-ui-stepper-step-empty-active-border: #ffd54f;

    /* Cambiar colores de pasos completados */
    --sb-ui-stepper-step-filled-default-bg: #026f42;
    --sb-ui-stepper-step-filled-default-border: #026f42;

    /* Track más gruesa */
    --sb-ui-stepper-track-height: 4px;

    /* Labels más grandes */
    --sb-ui-stepper-label-font-size: 1rem;
  }
</style>

<sb-ui-stepper id="custom-stepper"></sb-ui-stepper>
```

---

## 📱 Responsive Behavior

El componente es **responsive por defecto** usando `clamp()`:

- **Desktop:** Steps de 54px (number) o 62px (icon/mix)
- **Mobile:** Steps de 40px (number) o 46px (icon/mix)
- **Gap:** Se reduce automáticamente en mobile (32px → 16px)

No necesitas media queries adicionales, todo es fluido.

---

## 🏗️ Arquitectura Técnica

### Tecnologías

- ✅ **Web Component** nativo (Custom Elements v1)
- ✅ **Shadow DOM** (encapsulación completa)
- ✅ **TypeScript** para type safety
- ✅ **CSS Nesting** nativo
- ✅ **CSS Logical Properties** (RTL-ready)
- ✅ **CSS @layer** para cascada predecible

### Estructura de Archivos

```
packages/molecules/src/components/
├── Stepper.ts              # Web Component TypeScript
├── stepper.css             # Estilos del componente
└── STEPPER_README.md       # Documentación (este archivo)
```

---

## 🐛 Troubleshooting

### El stepper no se renderiza

**Problema:** El componente no aparece en pantalla.

**Solución:**

1. Verifica que importaste el componente:

```javascript
import { SbUiStepper } from '@bloock/sb-ui-molecules';
```

2. Verifica que configuraste los `steps`:

```javascript
stepper.steps = [
  { id: 1, label: 'Paso 1' },
  // ...
];
```

---

### No puedo saltar entre pasos

**Problema:** Al hacer click en steps no activos no navega.

**Solución:** Desactiva la navegación lineal:

```html
<sb-ui-stepper linear-navigation="false"></sb-ui-stepper>
```

O en JavaScript:

```javascript
stepper.linearNavigation = false;
```

---

### Los eventos no se disparan

**Problema:** No recibo los custom events.

**Solución:** Los eventos usan prefijo `sb-stepper:`:

```javascript
// ❌ Incorrecto
stepper.addEventListener('step-changed', handler);

// ✅ Correcto
stepper.addEventListener('sb-stepper:step-changed', handler);
```

---

### Estilos no se aplican

**Problema:** El componente no tiene estilos.

**Solución:** Asegúrate de importar el CSS:

```html
<link rel="stylesheet" href="path/to/stepper.css" />
```

O si usas Shadow DOM, el CSS se importa automáticamente.

---

## 📚 Referencias

- [Ejemplo completo](../../examples/stepper/index.html)
- [Web Components MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [ARIA Authoring Practices - Step Indicator](https://www.w3.org/WAI/ARIA/apg/)

---

## 🤝 Contribuir

Para contribuir al componente Stepper, revisa:

- [CONTRIBUTING.md](../../../CONTRIBUTING.md)
- [CSS Standards](.cursor/rules/CSS.mdc)

---

## 📝 Changelog

### v1.0.0 (2025-01-29)

- ✅ Versión inicial del componente
- ✅ 3 tipos: number, icon, mix
- ✅ 2 orientaciones: horizontal, vertical
- ✅ Navegación lineal y no-lineal
- ✅ 6 custom events
- ✅ Navegación por teclado completa
- ✅ Accesibilidad WCAG 2.1 AA
- ✅ Variables CSS personalizables

---

**Última actualización:** 2025-01-29
**Versión:** 1.0.0
**Autor:** Seguros Bolivar UI Team
