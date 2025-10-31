import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Spinner Component
 *
 * Componente de spinner/cargador del Seguros Bolivar UI Design System.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes de Color** | | |
 * | Spinner primario | `.sb-ui-spinner--primary` | `<div class="sb-ui-spinner sb-ui-spinner--primary"></div>` |
 * | Spinner secundario | `.sb-ui-spinner--secondary` | `<div class="sb-ui-spinner sb-ui-spinner--secondary"></div>` |
 * | Spinner blanco | `.sb-ui-spinner--white` | `<div class="sb-ui-spinner sb-ui-spinner--white"></div>` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-spinner--small` | `<div class="sb-ui-spinner sb-ui-spinner--small"></div>` |
 * | Mediano (default) | `.sb-ui-spinner--medium` o sin clase | `<div class="sb-ui-spinner"></div>` |
 * | Grande | `.sb-ui-spinner--large` | `<div class="sb-ui-spinner sb-ui-spinner--large"></div>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Variante por defecto**: PRIMARY - color primario del design system
 * - **Tamaño por defecto**: MEDIUM
 * - **Animación**: Rotación infinita suave
 * - **Uso común**: Estados de carga, botones con loading, overlays
 */
const meta: Meta = {
  title: 'Atoms/Spinner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de spinner para indicar estados de carga. Soporta 3 variantes de color y 3 tamaños.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
      description: 'Variante de color del spinner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del spinner',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con diferentes tamaños y colores del spinner.
 */
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
  render: (args) => {
    const classes = [
      'sb-ui-spinner',
      `sb-ui-spinner--${args.variant}`,
      args.size !== 'medium' ? `sb-ui-spinner--${args.size}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div style="display: flex; justify-content: center; padding: 3rem;">
        <div class="${classes}"></div>
      </div>
    `;
  },
};

/**
 * ## Todos los Tamaños
 *
 * Comparación de los tres tamaños disponibles del spinner.
 */
export const Tamaños: Story = {
  render: () => html`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="spinner-demo-container">
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Small (16px)</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--medium sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Medium (24px)</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--large sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Large (32px)</div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Todas las Variantes
 *
 * Comparación de las tres variantes de color disponibles.
 */
export const Variantes: Story = {
  render: () => html`
    <style>
      .spinner-demo-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .spinner-demo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .spinner-demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .spinner-demo-item--dark {
        background: var(--sb-ui-color-grayscale-D300, #222);
      }

      .spinner-demo-label {
        margin-top: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .spinner-demo-label--white {
        color: var(--sb-ui-color-grayscale-white, #fff);
      }
    </style>

    <div class="spinner-demo-container">
      <div class="spinner-demo-grid">
        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--primary"></div>
          <div class="spinner-demo-label">Primary</div>
        </div>

        <div class="spinner-demo-item">
          <div class="sb-ui-spinner sb-ui-spinner--secondary"></div>
          <div class="spinner-demo-label">Secondary</div>
        </div>

        <div class="spinner-demo-item spinner-demo-item--dark">
          <div class="sb-ui-spinner sb-ui-spinner--white"></div>
          <div class="spinner-demo-label spinner-demo-label--white">White</div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Casos de Uso
 *
 * Ejemplos comunes de uso del spinner en diferentes contextos.
 */
export const CasosDeUso: Story = {
  render: () => html`
    <style>
      .use-cases-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .use-case {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .use-case h3 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .use-case-content {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .loading-overlay {
        position: relative;
        height: 200px;
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loading-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: var(--sb-ui-color-primary-base, #007acc);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        cursor: not-allowed;
        opacity: 0.7;
      }

      .loading-text {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }
    </style>

    <div class="use-cases-container">
      <!-- Caso 1: Loading Overlay -->
      <div class="use-case">
        <h3>Loading Overlay</h3>
        <div class="loading-overlay">
          <div class="sb-ui-spinner sb-ui-spinner--large sb-ui-spinner--primary"></div>
        </div>
      </div>

      <!-- Caso 2: Loading Button -->
      <div class="use-case">
        <h3>Button Loading State</h3>
        <button class="loading-button">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--white"></div>
          Cargando...
        </button>
      </div>

      <!-- Caso 3: Inline Loading -->
      <div class="use-case">
        <h3>Inline Loading Text</h3>
        <div class="loading-text">
          <div class="sb-ui-spinner sb-ui-spinner--small sb-ui-spinner--primary"></div>
          <span>Procesando tu solicitud...</span>
        </div>
      </div>

      <!-- Caso 4: Card Loading -->
      <div class="use-case">
        <h3>Card Loading</h3>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
          <div class="sb-ui-spinner sb-ui-spinner--medium sb-ui-spinner--primary"></div>
          <p style="margin: 0; color: var(--sb-ui-color-grayscale-base);">
            Cargando contenido...
          </p>
        </div>
      </div>
    </div>
  `,
};

