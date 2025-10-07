# 📚 @rb/docs

Storybook documentation para Root Block Design System.

## 🚀 Desarrollo

```bash
# Start Storybook
pnpm storybook

# Build Storybook
pnpm build-storybook
```

## 🌐 Acceso

Una vez iniciado, abre: http://localhost:6006

## 🎨 Toolbar

- **Brand**: Cambia entre las 6 marcas
- **Theme**: Alterna entre Light y Dark

## 📝 Agregar Stories

Crea archivos `*.stories.ts` en `src/`:

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/MyComponent',
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  render: () => html`<div>My Component</div>`,
};
```

## 📦 Deploy

```bash
# Build
pnpm build-storybook

# Deploy to static hosting
# Output: storybook-static/
```
