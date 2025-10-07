# 🧬 @rb/molecules

> Web Components complejos para el Root Block Design System

Componentes moleculares construidos con Lit. Incluyen lógica JavaScript y estilos encapsulados con Shadow DOM.

## 📦 Instalación

```bash
pnpm add @rb/molecules
```

## 🧩 Componentes Disponibles

- **Modal** (`<rb-modal>`) - Modal/Dialog con slots personalizables
- *(Más componentes próximamente: DatePicker, Dropdown, DataTable)*

## 🚀 Uso

### Vía CDN

```html
<!-- Cargar Web Components -->
<script type="module" src="https://cdn.rootblock.com/rb-components.min.js"></script>

<!-- Usar componentes -->
<rb-modal title="Mi Modal">
  <p>Contenido del modal</p>
</rb-modal>
```

### Import en JavaScript

```javascript
import '@rb/molecules';

// O componentes individuales
import '@rb/molecules/modal';
```

## 📦 Modal Component

Modal/Dialog reutilizable con slots para contenido personalizado.

### Uso Básico

```html
<rb-modal id="myModal" title="Título del Modal">
  <p>Contenido principal del modal</p>
  
  <div slot="footer">
    <button class="rb-button rb-button--tertiary" onclick="closeModal()">
      Cancelar
    </button>
    <button class="rb-button rb-button--primary" onclick="handleSubmit()">
      Confirmar
    </button>
  </div>
</rb-modal>

<script>
  const modal = document.getElementById('myModal');
  
  // Abrir modal
  modal.openModal();
  
  // Cerrar modal
  modal.close();
</script>
```

### Props

| Prop | Type | Default | Descripción |
|------|------|---------|-------------|
| `title` | `string` | `''` | Título del modal |
| `open` | `boolean` | `false` | Estado abierto/cerrado |

### Métodos

```typescript
interface RbModal {
  openModal(): void;  // Abrir el modal
  close(): void;      // Cerrar el modal
}
```

### Eventos

```javascript
// Escuchar eventos
modal.addEventListener('rb-modal-open', (e) => {
  console.log('Modal abierto');
});

modal.addEventListener('rb-modal-close', (e) => {
  console.log('Modal cerrado');
});
```

### Slots

| Slot | Descripción |
|------|-------------|
| `(default)` | Contenido principal del modal |
| `footer` | Botones o acciones del footer |

### Ejemplo Completo

```html
<!DOCTYPE html>
<html lang="es" data-brand="jelpit" data-theme="light">
<head>
  <!-- Tokens y estilos -->
  <link rel="stylesheet" href="https://cdn.rootblock.com/rb-jelpit-light.min.css">
  <link rel="stylesheet" href="https://cdn.rootblock.com/rb-styles.min.css">
  
  <!-- Web Components -->
  <script type="module" src="https://cdn.rootblock.com/rb-components.min.js"></script>
</head>
<body>
  <!-- Botón trigger -->
  <button class="rb-button rb-button--primary" onclick="openModal()">
    Abrir Modal
  </button>

  <!-- Modal Component -->
  <rb-modal id="confirmModal" title="¿Estás seguro?">
    <p>Esta acción no se puede deshacer.</p>
    <p>¿Deseas continuar?</p>
    
    <div slot="footer">
      <button class="rb-button rb-button--tertiary" onclick="closeModal()">
        Cancelar
      </button>
      <button class="rb-button rb-button--danger" onclick="handleDelete()">
        Eliminar
      </button>
    </div>
  </rb-modal>

  <script>
    const modal = document.getElementById('confirmModal');
    
    function openModal() {
      modal.openModal();
    }
    
    function closeModal() {
      modal.close();
    }
    
    function handleDelete() {
      console.log('Eliminando...');
      closeModal();
    }
    
    // Escuchar eventos
    modal.addEventListener('rb-modal-open', () => {
      console.log('Modal abierto');
    });
    
    modal.addEventListener('rb-modal-close', () => {
      console.log('Modal cerrado');
    });
  </script>
</body>
</html>
```

## 🏗️ Arquitectura

### Tecnología

- **Lit** - Framework ligero para Web Components
- **TypeScript** - Type safety
- **Shadow DOM** - Encapsulación de estilos
- **CSS Variables** - Integración con tokens

### Estructura

```
packages/molecules/
├── src/
│   ├── modal/
│   │   ├── modal.ts          # Lógica del componente
│   │   └── modal.styles.ts   # Estilos (Lit CSS)
│   └── index.ts              # Export de todos los componentes
├── dist/
│   └── index.js              # Bundle compilado
└── vite.config.ts            # Config de build
```

## 🛠️ Desarrollo

### Crear Nuevo Componente

1. **Crear carpeta:**

```bash
mkdir src/mi-componente
```

2. **Crear archivos:**

```typescript
// src/mi-componente/mi-componente.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('rb-mi-componente')
export class RbMiComponente extends LitElement {
  @property({ type: String }) texto = '';

  static styles = css`
    :host {
      display: block;
      padding: var(--rb-spacing-md, 1rem);
      background: var(--rb-color-grayscale-white);
      color: var(--rb-color-grayscale-black);
    }
  `;

  render() {
    return html`
      <div class="mi-componente">
        <p>${this.texto}</p>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rb-mi-componente': RbMiComponente;
  }
}
```

3. **Exportar:**

```typescript
// src/index.ts
export { RbModal } from './modal/modal.js';
export { RbMiComponente } from './mi-componente/mi-componente.js';
```

4. **Build:**

```bash
pnpm build
```

### Scripts

```bash
# Build
pnpm build

# Dev (watch mode)
pnpm dev

# Lint
pnpm lint

# Test
pnpm test
```

## 📊 Bundle Size

| Componente | Size | Gzip |
|-----------|------|------|
| Modal | ~8KB | ~3KB |
| Lit Runtime | ~22KB | ~6KB |
| **Total** | ~30KB | ~8.6KB |

## 🎯 Características

- ✅ **Web Components estándar** - Funciona en cualquier framework
- ✅ **Lit Framework** - Ligero y rápido
- ✅ **TypeScript** - Type-safe
- ✅ **Shadow DOM** - Estilos encapsulados
- ✅ **Variables CSS** - Se integra con tokens
- ✅ **Eventos personalizados** - API reactiva
- ✅ **Slots** - Contenido personalizable
- ✅ **Accesible** - ARIA labels y keyboard support

## 📚 Recursos

- [Lit Docs](https://lit.dev/)
- [Web Components Docs](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Ejemplos](../../examples/)

## 📄 Licencia

MIT © Root Block
