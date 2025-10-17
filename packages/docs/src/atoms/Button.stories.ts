import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Button Component
 *
 * Componente de botón CSS puro del Seguros Bolivar UI Design System.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes de Color** | | |
 * | Botón primario | `.rb-button--primary` | `<button class="sb-ui-button rb-button--primary">Primary</button>` |
 * | Botón secundario | `.rb-button--secondary` | `<button class="sb-ui-button rb-button--secondary">Secondary</button>` |
 * | Botón terciario | `.rb-button--tertiary` | `<button class="sb-ui-button rb-button--tertiary">Tertiary</button>` |
 * | Botón error | `.rb-button--error` | `<button class="sb-ui-button rb-button--error">Error</button>` |
 * | **Variantes de Estilo** | | |
 * | Outline/borde (default) | `.rb-button--stroke` o sin clase | `<button class="sb-ui-button rb-button--primary">Default</button>` |
 * | Fondo sólido | `.rb-button--fill` | `<button class="sb-ui-button rb-button--primary rb-button--fill">Filled</button>` |
 * | Transparente sin borde | `.rb-button--text` | `<button class="sb-ui-button rb-button--primary rb-button--text">Text</button>` |
 * | **Posiciones de Icono** | | |
 * | Icono a la izquierda | `.rb-button--icon-left` | `<button class="sb-ui-button rb-button--primary rb-button--icon-left"><i class="fa-solid fa-user"></i> Action</button>` |
 * | Icono a la derecha | `.rb-button--icon-right` | `<button class="sb-ui-button rb-button--primary rb-button--icon-right">Action <i class="fa-solid fa-user"></i></button>` |
 * | Solo icono | `.rb-button--icon-only` | `<button class="sb-ui-button rb-button--primary rb-button--icon-only"><i class="fa-solid fa-user"></i></button>` |
 * | **Tamaños** | | |
 * | Pequeño | `.rb-button--small` | `<button class="sb-ui-button rb-button--primary rb-button--small">Small</button>` |
 * | Mediano (default) | `.rb-button--medium` o sin clase | `<button class="sb-ui-button rb-button--primary">Medium</button>` |
 * | Grande | `.rb-button--large` | `<button class="sb-ui-button rb-button--primary rb-button--large">Large</button>` |
 * | **Estados** | | |
 * | Estado cargando | `.rb-button--loading` | `<button class="sb-ui-button rb-button--primary rb-button--loading">Loading...</button>` |
 * | Estado deshabilitado | `.rb-button--disabled` | `<button class="sb-ui-button rb-button--primary rb-button--disabled">Disabled</button>` |
 * | **Modificadores** | | |
 * | Ancho completo | `.rb-button--block` | `<button class="sb-ui-button rb-button--primary rb-button--block">Full Width</button>` |
 * | Esquinas cuadradas | `.rb-button--square` | `<button class="sb-ui-button rb-button--primary rb-button--square">Square</button>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estilo por defecto**: FILL (relleno sólido) - usa `.rb-button--stroke` para outline
 * - **Tamaño por defecto**: MEDIUM - no necesitas especificar la clase
 * - **Icon Only**: Es completamente circular (40x40px) por defecto
 * - **Loading con iconos**: El spinner reemplaza automáticamente el icono en su posición
 * - **Disabled**: Los botones disabled no reciben focus y muestran `cursor: not-allowed`
 * - **Tipos válidos**: PRIMARY, SECONDARY, TERTIARY, ERROR (4 tipos únicamente)
 * - **Combinaciones**: Puedes combinar variantes de color + estilo + tamaño + iconos + estados
 *
 * ## 🎯 Ejemplo de Combinación Completa
 *
 * ```html
 * <button class="sb-ui-button rb-button--primary rb-button--fill rb-button--large rb-button--icon-left">
 *   <i class="fa-solid fa-user"></i>
 *   Guardar Cambios
 * </button>
 * ```
 */
const meta: Meta = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de botón versátil con 4 tipos de color (Primary, Secondary, Tertiary, Error), 3 variantes de estilo (Fill, Stroke, Text), 4 posiciones de iconos y 3 estados principales.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'error'],
      description: 'Variante de color del botón (solo 4 tipos válidos)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    text: {
      control: 'text',
      description: 'Texto del botón',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carga (muestra spinner)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'left', 'right', 'only'],
      description: 'Posición del icono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    styleVariant: {
      control: 'select',
      options: ['fill', 'stroke', 'text'],
      description: 'Variante de estilo (fill=solid [default], stroke=outline, text=transparent)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'fill' },
      },
    },
    square: {
      control: 'boolean',
      description: 'Esquinas menos redondeadas (modificador)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    block: {
      control: 'boolean',
      description: 'Ancho completo (modificador)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con todas las combinaciones del botón usando los controles interactivos
 * en el panel inferior. Puedes ajustar variante, tamaño, iconos, estados y más.
 */
export const Playground: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Button',
    disabled: false,
    loading: false,
    iconPosition: 'none',
    styleVariant: 'fill',
    square: false,
    block: false,
  },
  render: (args) => {
    // Determinar las clases del botón
    const classes = [
      'sb-ui-button',
      `rb-button--${args.variant}`,
      `rb-button--${args.size}`,
      args.styleVariant ? `rb-button--${args.styleVariant}` : '',
      args.loading ? 'sb-ui-button--loading' : '',
      args.disabled ? 'sb-ui-button--disabled' : '',
      args.iconPosition === 'left' ? 'sb-ui-button--icon-left' : '',
      args.iconPosition === 'right' ? 'sb-ui-button--icon-right' : '',
      args.iconPosition === 'only' ? 'sb-ui-button--icon-only' : '',
      args.square ? 'sb-ui-button--square' : '',
      args.block ? 'sb-ui-button--block' : '',
    ]
      .filter(Boolean)
      .join(' ');

    // Renderizar el contenido según la posición del icono
    if (args.iconPosition === 'left') {
      return html`
        <button class="${classes}">
          <i class="fa-solid fa-user"></i>
          ${args.text}
        </button>
      `;
    }

    if (args.iconPosition === 'right') {
      return html`
        <button class="${classes}">
          ${args.text}
          <i class="fa-solid fa-user"></i>
        </button>
      `;
    }

    if (args.iconPosition === 'only') {
      return html`
        <button class="${classes}" title="${args.text}">
          <i class="fa-solid fa-user"></i>
        </button>
      `;
    }

    return html` <button class="${classes}">${args.text}</button> `;
  },
};

/**
 * ## Primary - Matriz Completa de Combinaciones
 *
 * Matriz completa del botón Primary mostrando todas las combinaciones de:
 * - **3 Variantes de Estilo**: Fill, Stroke (default), Text
 * - **4 Posiciones de Icono**: Icon Left, Icon Right, Default (sin icono), Icon Only
 * - **3 Estados**: Default, Loading, Disabled
 *
 * **Total: 36 combinaciones** (3 × 4 × 3)
 */
export const Primary: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .matrix-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th,
      .matrix-table td {
        padding: 1.25rem 1rem;
        text-align: center;
        border-right: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th {
        background: var(--sb-ui-color-primary-base, #007acc);
        color: white;
        font-weight: 700;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .matrix-table td:first-child {
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        font-weight: 600;
        text-align: left;
        padding-left: 1.5rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .matrix-table tr:last-child td {
        border-bottom: none;
      }

      .matrix-table th:last-child,
      .matrix-table td:last-child {
        border-right: none;
      }

      .state-label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        background: var(--sb-ui-color-grayscale-L200, #e0e0e0);
        color: var(--sb-ui-color-grayscale-D200, #222);
      }

      .state-label.default {
        background: #e3f2fd;
        color: #1565c0;
      }
      .state-label.loading {
        background: #e8f5e9;
        color: #2e7d32;
      }
      .state-label.disabled {
        background: #eceff1;
        color: #546e7a;
      }

      /* Font Awesome link */
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: FILL
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante FILL - Primary Button</h2>
        <p class="matrix-subtitle">
          Fondo sólido con el color primario. Máxima prominencia visual.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--fill rb-button--icon-left">
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--fill rb-button--icon-right">
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--fill">Action</button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--fill rb-button--icon-only">
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--fill rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--fill rb-button--loading rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--fill rb-button--loading">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--fill rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--fill rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--fill rb-button--disabled rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--fill rb-button--disabled">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--fill rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 2: STROKE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante STROKE - Primary Button (Default)</h2>
        <p class="matrix-subtitle">
          Fondo transparente con borde visible. Estilo por defecto del botón.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--stroke rb-button--icon-left">
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--stroke rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--stroke">Action</button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--stroke rb-button--icon-only">
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--stroke rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--stroke rb-button--loading rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--stroke rb-button--loading">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--stroke rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--stroke rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--stroke rb-button--disabled rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--stroke rb-button--disabled">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--stroke rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 3: TEXT
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante TEXT - Primary Button</h2>
        <p class="matrix-subtitle">Fondo transparente sin borde. Mínima prominencia visual.</p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--text rb-button--icon-left">
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--text rb-button--icon-right">
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--text">Action</button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--text rb-button--icon-only">
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--text rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--text rb-button--loading rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--text rb-button--loading">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--text rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--text rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-user"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--text rb-button--disabled rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--primary rb-button--text rb-button--disabled">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--primary rb-button--text rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-user"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
};

/**
 * ## Secondary - Matriz Completa de Combinaciones
 *
 * Matriz completa del botón Secondary mostrando todas las combinaciones de:
 * - **3 Variantes de Estilo**: Fill, Stroke (default), Text
 * - **4 Posiciones de Icono**: Icon Left, Icon Right, Default (sin icono), Icon Only
 * - **3 Estados**: Default, Loading, Disabled
 *
 * **Total: 36 combinaciones** (3 × 4 × 3)
 *
 * El botón Secondary usa colores secundarios de la marca y es ideal para acciones complementarias.
 */
export const Secondary: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-secondary-base, #82e778);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .matrix-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th,
      .matrix-table td {
        padding: 1.25rem 1rem;
        text-align: center;
        border-right: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th {
        background: var(--sb-ui-color-secondary-base, #82e778);
        color: var(--sb-ui-color-grayscale-D300, #000);
        font-weight: 700;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .matrix-table td:first-child {
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        font-weight: 600;
        text-align: left;
        padding-left: 1.5rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .matrix-table tr:last-child td {
        border-bottom: none;
      }

      .matrix-table th:last-child,
      .matrix-table td:last-child {
        border-right: none;
      }

      .state-label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        background: var(--sb-ui-color-grayscale-L200, #e0e0e0);
        color: var(--sb-ui-color-grayscale-D200, #222);
      }

      .state-label.default {
        background: #e8f5e8;
        color: #2e7d32;
      }
      .state-label.loading {
        background: #fff3e0;
        color: #ef6c00;
      }
      .state-label.disabled {
        background: #eceff1;
        color: #546e7a;
      }

      /* Font Awesome link */
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: FILL
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante FILL - Secondary Button</h2>
        <p class="matrix-subtitle">
          Fondo sólido con el color secundario. Ideal para acciones complementarias importantes.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--fill rb-button--icon-left">
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--fill rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--fill">Action</button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--fill rb-button--icon-only">
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--fill rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--fill rb-button--loading rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--fill rb-button--loading">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--fill rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--fill rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--fill rb-button--disabled rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--fill rb-button--disabled">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--fill rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 2: STROKE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante STROKE - Secondary Button (Default)</h2>
        <p class="matrix-subtitle">
          Fondo transparente con borde del color secundario. Estilo por defecto del botón.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--icon-left"
                >
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--stroke">Action</button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--icon-only"
                >
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--loading rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--loading">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--disabled rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--disabled"
                >
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--stroke rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 3: TEXT
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante TEXT - Secondary Button</h2>
        <p class="matrix-subtitle">
          Fondo transparente sin borde. Para acciones sutiles y complementarias.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--text rb-button--icon-left">
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--text rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--text">Action</button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--text rb-button--icon-only">
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--text rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--text rb-button--loading rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--text rb-button--loading">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--text rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--text rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-star"></i>
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--text rb-button--disabled rb-button--icon-right"
                >
                  Action
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--secondary rb-button--text rb-button--disabled">
                  Action
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--secondary rb-button--text rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-star"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
};

/**
 * ## Error - Matriz Completa de Combinaciones
 *
 * Matriz completa del botón Error mostrando todas las combinaciones de:
 * - **3 Variantes de Estilo**: Fill, Stroke (default), Text
 * - **4 Posiciones de Icono**: Icon Left, Icon Right, Default (sin icono), Icon Only
 * - **3 Estados**: Default, Loading, Disabled
 *
 * **Total: 36 combinaciones** (3 × 4 × 3)
 *
 * El botón Error usa la paleta de colores feedback-error (rojo) y es ideal para acciones destructivas,
 * eliminaciones, cancelaciones críticas, o cualquier acción que pueda tener consecuencias negativas.
 */
export const Error: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <style>
      .matrix-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-feedback-error-base, #dc3545);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .matrix-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th,
      .matrix-table td {
        padding: 1.25rem 1rem;
        text-align: center;
        border-right: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-bottom: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }

      .matrix-table th {
        background: var(--sb-ui-color-feedback-error-base, #dc3545);
        color: white;
        font-weight: 700;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .matrix-table td:first-child {
        background: var(--sb-ui-color-grayscale-L300, #f5f5f5);
        font-weight: 600;
        text-align: left;
        padding-left: 1.5rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
      }

      .matrix-table tr:last-child td {
        border-bottom: none;
      }

      .matrix-table th:last-child,
      .matrix-table td:last-child {
        border-right: none;
      }

      .state-label {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        font-size: 0.875rem;
        font-weight: 600;
        background: var(--sb-ui-color-grayscale-L200, #e0e0e0);
        color: var(--sb-ui-color-grayscale-D200, #222);
      }

      .state-label.default {
        background: #ffebee;
        color: #c62828;
      }
      .state-label.loading {
        background: #fff3e0;
        color: #ef6c00;
      }
      .state-label.disabled {
        background: #eceff1;
        color: #546e7a;
      }

      /* Font Awesome link */
      @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>

    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: FILL
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🔴 Variante FILL - Error Button</h2>
        <p class="matrix-subtitle">
          Fondo rojo sólido con texto blanco. Máxima prominencia visual para acciones destructivas y
          críticas.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--fill rb-button--icon-left">
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--fill rb-button--icon-right">
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--fill">Delete</button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--fill rb-button--icon-only">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--fill rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--fill rb-button--loading rb-button--icon-right"
                >
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--fill rb-button--loading">
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--fill rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--fill rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--fill rb-button--disabled rb-button--icon-right"
                >
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--fill rb-button--disabled">
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--fill rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 2: STROKE
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🔴 Variante STROKE - Error Button (Default)</h2>
        <p class="matrix-subtitle">
          Fondo transparente con borde rojo. Estilo por defecto para acciones destructivas menos
          prominentes.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--stroke rb-button--icon-left">
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--stroke rb-button--icon-right">
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--stroke">Delete</button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--stroke rb-button--icon-only">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--stroke rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--stroke rb-button--loading rb-button--icon-right"
                >
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--stroke rb-button--loading">
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--stroke rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--stroke rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--stroke rb-button--disabled rb-button--icon-right"
                >
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--stroke rb-button--disabled">
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--stroke rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ========================================
           SECCIÓN 3: TEXT
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🔴 Variante TEXT - Error Button</h2>
        <p class="matrix-subtitle">
          Fondo transparente sin borde con underline. Para acciones destructivas sutiles.
        </p>

        <table class="matrix-table">
          <thead>
            <tr>
              <th style="text-align: left; padding-left: 1.5rem;">Estado</th>
              <th>Icon Left</th>
              <th>Icon Right</th>
              <th>Default (Sin icono)</th>
              <th>Icon Only</th>
            </tr>
          </thead>
          <tbody>
            <!-- Default State -->
            <tr>
              <td>
                <span class="state-label default">Default</span>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--text rb-button--icon-left">
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--text rb-button--icon-right">
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--text">Delete</button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--text rb-button--icon-only">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

            <!-- Loading State -->
            <tr>
              <td>
                <span class="state-label loading">Loading</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--text rb-button--loading rb-button--icon-left"
                >
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--text rb-button--loading rb-button--icon-right"
                >
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--text rb-button--loading">
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--text rb-button--loading rb-button--icon-only"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

            <!-- Disabled State -->
            <tr>
              <td>
                <span class="state-label disabled">Disabled</span>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--text rb-button--disabled rb-button--icon-left"
                >
                  <i class="fa-solid fa-trash"></i>
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--text rb-button--disabled rb-button--icon-right"
                >
                  Delete
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
              <td>
                <button class="sb-ui-button rb-button--error rb-button--text rb-button--disabled">
                  Delete
                </button>
              </td>
              <td>
                <button
                  class="sb-ui-button rb-button--error rb-button--text rb-button--disabled rb-button--icon-only"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
};
