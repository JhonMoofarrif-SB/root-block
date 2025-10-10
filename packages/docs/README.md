# 📚 @rb/docs - Storybook Documentation

> Documentación interactiva y completa del **Root Block Design System**

Sistema de documentación construido con Storybook 7 para el design system multi-marca Root Block. Incluye componentes, tokens de diseño, guías de uso y ejemplos interactivos.

---

## 🎯 Características

✨ **Multi-Marca Interactiva**: 6 marcas × 2 temas = 12 combinaciones visuales  
🎨 **Toolbar Dinámica**: Cambia marca y tema en tiempo real  
📖 **Auto-documentación**: Generación automática de docs desde props  
🧩 **Componentes en Vivo**: Ejemplos interactivos y editables  
🚀 **Hot Reload**: Ver cambios instantáneos durante desarrollo

---

## 🚀 Comandos de Desarrollo

### Iniciar Storybook (Modo Watch)

```bash
# Desde la raíz del proyecto (recomendado - hace build completo primero)
pnpm storybook

# Directo sin build previo (útil para iteración rápida)
pnpm --filter @rb/docs storybook
```

**Puerto**: http://localhost:6006

### Build para Producción

```bash
# Construir versión estática
pnpm build-storybook

# Output: storybook-static/
# Listo para deploy en Vercel, Netlify, etc.
```

### Limpiar

```bash
pnpm --filter @rb/docs clean
```

---

## 🎨 Uso de la Toolbar

### Selector de Marca (Brand)

Cambia entre las 6 marcas disponibles. Los colores y estilos se actualizan automáticamente:

- **White Label** - Base neutra del sistema
- **Jelpit** - Morado y verde neón
- **Davivienda** - Rojo y azul corporativo (con animaciones especiales)
- **Cien Cuadras** - Azul y naranja
- **Doctor Aki** - Verde salud
- **Seguros Bolívar** - Verde corporativo y amarillo

### Selector de Tema (Theme)

Alterna entre modo claro y oscuro:

- **Light** ☀️ - Tema claro
- **Dark** 🌙 - Tema oscuro

---

## 📁 Estructura de Archivos

```
packages/docs/
├── .storybook/
│   ├── main.ts           # Configuración principal de Storybook
│   ├── preview.ts        # Decorators y configuración global
│   └── *.min.css         # Bundles CSS por marca (auto-generados)
├── src/
│   ├── Introduction.mdx  # Página de bienvenida (MDX)
│   ├── Welcome.stories.ts # Página de bienvenida (alternativa)
│   ├── foundations/
│   │   └── Colors.stories.ts    # Documentación de colores
│   ├── atoms/
│   │   └── Button.stories.ts    # Componente Button
│   └── molecules/
│       └── [componentes web]    # Web Components complejos
├── package.json
└── README.md            # Este archivo
```

---

## 📝 Crear Nuevas Stories

### 1. Story Básica (TypeScript)

Crea un archivo `*.stories.ts` en `src/`:

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/MyComponent',
  tags: ['autodocs'], // Habilita auto-documentación
  parameters: {
    docs: {
      description: {
        component: 'Descripción del componente que aparecerá en la página de docs',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Historia principal
export const Default: Story = {
  render: () => html` <button class="rb-button rb-button--primary">Mi Componente</button> `,
};

// Variantes
export const Secondary: Story = {
  render: () => html` <button class="rb-button rb-button--secondary">Variante Secundaria</button> `,
};
```

### 2. Story con Controles Interactivos (Args)

```typescript
const meta: Meta = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Tipo de botón',
    },
    text: {
      control: 'text',
      description: 'Texto del botón',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
  },
};

export const Interactive: Story = {
  args: {
    variant: 'primary',
    text: 'Click me',
    disabled: false,
  },
  render: (args) => html`
    <button class="rb-button rb-button--${args.variant}" ?disabled=${args.disabled}>
      ${args.text}
    </button>
  `,
};
```

### 3. Story de Showcase (Múltiples Ejemplos)

```typescript
export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <button class="rb-button rb-button--primary">Primary</button>
      <button class="rb-button rb-button--secondary">Secondary</button>
      <button class="rb-button rb-button--tertiary">Tertiary</button>
    </div>
  `,
};
```

### 4. Documentación MDX (Más Control)

Crea un archivo `*.mdx` para documentación personalizada:

```mdx
import { Meta, Canvas, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

# Button Component

El componente Button es un elemento fundamental...

## Uso Básico

<Canvas>
  <Story of={ButtonStories.Primary} />
</Canvas>

## Variantes

Texto explicativo sobre las variantes...
```

---

## 🎨 Convenciones y Mejores Prácticas

### Organización de Títulos

```typescript
title: 'Category/Subcategory/ComponentName';
```

**Categorías estándar:**

- `Introduction/*` - Páginas de bienvenida y guías generales
- `Foundations/*` - Tokens de diseño (colores, tipografía, espaciado, etc.)
- `Atoms/*` - Componentes CSS simples
- `Molecules/*` - Web Components complejos
- `Templates/*` - Plantillas de páginas completas (futuro)

### Tags Importantes

```typescript
tags: ['autodocs']; // Genera página de documentación automática
```

### Parámetros Útiles

```typescript
parameters: {
  docs: {
    description: {
      component: 'Descripción principal del componente',
    },
  },
  layout: 'centered',  // 'centered' | 'fullscreen' | 'padded'
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#333333' },
    ],
  },
}
```

---

## 🔧 Configuración Técnica

### main.ts

- **Framework**: `@storybook/web-components-vite`
- **Stories**: Auto-detecta `*.stories.@(js|jsx|ts|tsx)` y `*.mdx`
- **Addons**:
  - `@storybook/addon-essentials` (controles, docs, actions, viewport, etc.)
  - `@storybook/addon-links` (navegación entre stories)
- **staticDirs**: Sirve archivos desde `../../bundle/dist`

### preview.ts

- **Global Types**: Define los selectores de Brand y Theme en toolbar
- **Decorators**: Carga dinámicamente los bundles CSS según marca/tema seleccionado
- **Parameters**: Configuración de controles y actions

---

## 📦 Deploy

### Build Local

```bash
pnpm build-storybook
```

Genera carpeta `storybook-static/` lista para servir.

### Deploy a Vercel/Netlify

1. Apunta el directorio de build a `packages/docs/storybook-static`
2. Comando de build: `pnpm build-storybook`
3. Deploy

**Configuración Vercel** (ejemplo en `vercel.json` en raíz):

```json
{
  "buildCommand": "pnpm run build:all && pnpm --filter @rb/docs build-storybook",
  "outputDirectory": "packages/docs/storybook-static"
}
```

---

## 🐛 Solución de Problemas

### Los estilos no se cargan

1. Verifica que ejecutaste `pnpm run build:all` primero
2. Revisa que existan los archivos `.min.css` en `.storybook/`
3. Comprueba la consola del navegador por errores de carga

### Los cambios no se reflejan

1. Si modificaste tokens o atoms: reinicia Storybook con `pnpm storybook`
2. Si solo modificaste stories: hot reload debería funcionar automáticamente
3. Limpia caché: `rm -rf node_modules/.cache`

### Error de tipo en stories

Asegúrate de importar los tipos correctos:

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
```

---

## 📚 Recursos

- [Storybook Docs](https://storybook.js.org/docs/web-components/get-started/introduction)
- [Lit HTML](https://lit.dev/)
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Root Block Design System](../../README.md)

---

## 🤝 Contribuir

Para añadir o mejorar documentación:

1. Crea tu story en la carpeta apropiada (`atoms/`, `molecules/`, etc.)
2. Usa `tags: ['autodocs']` para documentación automática
3. Añade descripciones claras en `parameters.docs`
4. Prueba en todas las marcas con el selector de toolbar
5. Documenta props/args con `argTypes`

---

## 📄 Licencia

MIT © Root Block
