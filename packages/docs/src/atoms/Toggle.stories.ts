import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Toggle Component
 *
 * Componente de toggle/switch versátil del Root Block Design System con diferentes estilos, animaciones y estados.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | Toggle normal (default) | `.rb-toggle` | `<label class="rb-toggle"><input class="rb-toggle-input" /><span class="rb-toggle-slider"></span></label>` |
 * | Toggle con error | `.rb-toggle--error` | `<label class="rb-toggle rb-toggle--error">...</label>` |
 * | Toggle exitoso | `.rb-toggle--success` | `<label class="rb-toggle rb-toggle--success">...</label>` |
 * | Toggle con advertencia | `.rb-toggle--warning` | `<label class="rb-toggle rb-toggle--warning">...</label>` |
 * | **Tamaños** | | |
 * | Pequeño | `.rb-toggle--small` | `<label class="rb-toggle rb-toggle--small">...</label>` |
 * | Mediano (default) | `.rb-toggle--medium` o sin clase | `<label class="rb-toggle">...</label>` |
 * | Grande | `.rb-toggle--large` | `<label class="rb-toggle rb-toggle--large">...</label>` |
 * | **Estilos** | | |
 * | Switch (default) | Sin clase adicional | `<label class="rb-toggle">...</label>` |
 * | Botón | `.rb-toggle--button` | `<label class="rb-toggle rb-toggle--button">...</label>` |
 * | Checkbox | `.rb-toggle--checkbox` | `<label class="rb-toggle rb-toggle--checkbox">...</label>` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.rb-toggle--rounded` | `<label class="rb-toggle rb-toggle--rounded">...</label>` |
 * | Minimal | `.rb-toggle--minimal` | `<label class="rb-toggle rb-toggle--minimal">...</label>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estructura HTML**: Usa `<label class="rb-toggle">` conteniendo `<input class="rb-toggle-input">` y `<span class="rb-toggle-slider">`
 * - **Label de texto**: Usa `<span class="rb-toggle-label">` dentro del label principal
 * - **Input oculto**: El input real está oculto visualmente pero accesible para lectores de pantalla
 * - **Estilo por defecto**: SWITCH - botón deslizante circular
 * - **Interactividad**: Funciona con clicks en cualquier parte del label
 *
 * ## 🎯 Ejemplo de Estructura Completa
 *
 * ```html
 * <div class="rb-toggle-container">
 *   <label class="rb-toggle rb-toggle--large rb-toggle--success">
 *     <input type="checkbox" class="rb-toggle-input" checked />
 *     <span class="rb-toggle-slider"></span>
 *     <span class="rb-toggle-label">Activar notificaciones</span>
 *   </label>
 *   <div class="rb-toggle-helper">Descripción del toggle</div>
 * </div>
 * ```
 */
const meta: Meta = {
  title: 'Atoms/Toggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de toggle/switch versátil con diferentes estilos (switch, button, checkbox), animaciones y estados de validación.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'error', 'success', 'warning'],
      description: 'Estado de validación del toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    style: {
      control: 'select',
      options: ['switch', 'button', 'checkbox'],
      description: 'Estilo visual del toggle',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'switch' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto del label',
      table: {
        type: { summary: 'string' },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Estado marcado/desmarcado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    required: {
      control: 'boolean',
      description: 'Campo requerido',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Toggle deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda',
      table: {
        type: { summary: 'string' },
      },
    },
    rounded: {
      control: 'boolean',
      description: 'Bordes redondeados',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    minimal: {
      control: 'boolean',
      description: 'Estilo minimal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    animation: {
      control: 'select',
      options: ['none', 'bounce', 'pulse'],
      description: 'Tipo de animación',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con todas las combinaciones del toggle usando los controles interactivos
 * en el panel inferior. Puedes ajustar estilo, estado, tamaño, animaciones y más.
 */
export const Playground: Story = {
  args: {
    state: 'normal',
    size: 'medium',
    style: 'switch',
    label: 'Activar notificaciones',
    checked: false,
    required: false,
    disabled: false,
    helperText: 'Recibe notificaciones cuando alguien te mencione',
    rounded: false,
    minimal: false,
    animation: 'none',
  },
  render: (args) => {
    const toggleClasses = [
      'rb-toggle',
      args.state !== 'normal' ? `rb-toggle--${args.state}` : '',
      args.size !== 'medium' ? `rb-toggle--${args.size}` : '',
      args.style !== 'switch' ? `rb-toggle--${args.style}` : '',
      args.rounded ? 'rb-toggle--rounded' : '',
      args.minimal ? 'rb-toggle--minimal' : '',
      args.animation !== 'none' ? `rb-toggle--${args.animation}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'rb-toggle-helper',
      args.state !== 'normal' ? `rb-toggle-helper--${args.state}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <div style="max-width: 400px;">
        <div class="rb-toggle-container">
          <label class="${toggleClasses}">
            <input
              type="checkbox"
              class="rb-toggle-input"
              ?checked="${args.checked}"
              ?required="${args.required}"
              ?disabled="${args.disabled}"
            />
            ${args.style === 'button'
              ? html` <span class="rb-toggle-slider"></span> `
              : html`
                  <span class="rb-toggle-slider"></span>
                  ${args.label && args.style !== 'button'
                    ? html` <span class="rb-toggle-label">${args.label}</span> `
                    : ''}
                `}
          </label>

          ${args.helperText ? html` <div class="${helperClasses}">${args.helperText}</div> ` : ''}
        </div>
      </div>
    `;
  },
};

/**
 * ## Estados - Matriz de Combinaciones
 *
 * Matriz del toggle mostrando combinaciones de:
 * - **4 Estados**: Normal, Error, Success, Warning
 * - **3 Tamaños**: Small, Medium, Large
 * - **3 Estilos**: Switch, Button, Checkbox
 */
export const Estados: Story = {
  render: () => html`
    <style>
      .toggle-matrix {
        font-family: var(--rb-typography-fontFamily, 'Roboto', sans-serif);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
        background: var(--rb-color-grayscale-L400, #fafafa);
      }

      .toggle-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .toggle-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--rb-color-primary-base, #007acc);
      }

      .toggle-demo > div {
        margin-bottom: 1rem;
      }

      .toggle-demo > div:last-child {
        margin-bottom: 0;
      }
    </style>

    <div class="toggle-matrix">
      <!-- Estados Básicos -->
      <div class="toggle-demo">
        <h3>Estados Básicos</h3>
        <div>
          <label class="rb-toggle">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Normal</span>
          </label>
          <div class="rb-toggle-helper">Estado normal</div>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--error">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Error</span>
          </label>
          <div class="rb-toggle-helper rb-toggle-helper--error">Campo con error</div>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--success">
            <input type="checkbox" class="rb-toggle-input" checked />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Success</span>
          </label>
          <div class="rb-toggle-helper rb-toggle-helper--success">Campo válido</div>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--warning">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Warning</span>
          </label>
          <div class="rb-toggle-helper rb-toggle-helper--warning">Revisa este toggle</div>
        </div>
      </div>

      <!-- Tamaños -->
      <div class="toggle-demo">
        <h3>Tamaños</h3>
        <div>
          <label class="rb-toggle rb-toggle--small">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Small</span>
          </label>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--medium">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Medium</span>
          </label>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--large">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Large</span>
          </label>
        </div>
      </div>

      <!-- Estilos -->
      <div class="toggle-demo">
        <h3>Estilos</h3>
        <div>
          <label class="rb-toggle">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Switch (default)</span>
          </label>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--button">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
          </label>
          <span style="margin-left: 1rem; font-size: 0.875rem; color: #666;">Button style</span>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--checkbox">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Checkbox style</span>
          </label>
        </div>
      </div>

      <!-- Estados Especiales -->
      <div class="toggle-demo">
        <h3>Estados Especiales</h3>
        <div>
          <label class="rb-toggle">
            <input type="checkbox" class="rb-toggle-input" required />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Requerido *</span>
          </label>
          <div class="rb-toggle-helper">Campo obligatorio</div>
        </div>
        <div>
          <label class="rb-toggle">
            <input type="checkbox" class="rb-toggle-input" disabled />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Deshabilitado</span>
          </label>
          <div class="rb-toggle-helper">Este toggle está deshabilitado</div>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--rounded">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Rounded</span>
          </label>
        </div>
      </div>

      <!-- Modificadores Visuales -->
      <div class="toggle-demo">
        <h3>Modificadores</h3>
        <div>
          <label class="rb-toggle rb-toggle--minimal">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Minimal</span>
          </label>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--filled">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Filled</span>
          </label>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--outlined">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Outlined</span>
          </label>
        </div>
      </div>

      <!-- Animaciones -->
      <div class="toggle-demo">
        <h3>Animaciones</h3>
        <div>
          <label class="rb-toggle rb-toggle--bounce">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Bounce</span>
          </label>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--pulse">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Pulse</span>
          </label>
        </div>
      </div>

      <!-- Grupos -->
      <div class="toggle-demo">
        <h3>Grupos de Toggles</h3>
        <div>
          <div class="rb-toggle-group rb-toggle-group--vertical">
            <label class="rb-toggle">
              <input type="checkbox" class="rb-toggle-input" />
              <span class="rb-toggle-slider"></span>
              <span class="rb-toggle-label">Notificaciones push</span>
            </label>
            <label class="rb-toggle">
              <input type="checkbox" class="rb-toggle-input" />
              <span class="rb-toggle-slider"></span>
              <span class="rb-toggle-label">Notificaciones email</span>
            </label>
            <label class="rb-toggle">
              <input type="checkbox" class="rb-toggle-input" />
              <span class="rb-toggle-slider"></span>
              <span class="rb-toggle-label">Notificaciones SMS</span>
            </label>
          </div>
          <div class="rb-toggle-helper">Toggles agrupados</div>
        </div>
      </div>

      <!-- Tamaños Especiales -->
      <div class="toggle-demo">
        <h3>Tamaños Especiales</h3>
        <div>
          <label class="rb-toggle rb-toggle--compact">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Compact</span>
          </label>
        </div>
        <div>
          <label class="rb-toggle rb-toggle--prominent">
            <input type="checkbox" class="rb-toggle-input" />
            <span class="rb-toggle-slider"></span>
            <span class="rb-toggle-label">Prominent</span>
          </label>
        </div>
      </div>
    </div>
  `,
};
