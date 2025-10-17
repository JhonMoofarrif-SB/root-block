import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Input Component
 *
 * Componente de input versátil del Bolivar UI Design System con diferentes tipos, estados, tamaños y opciones de iconos.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | Input normal (default) | `.rb-input` | `<input class="b-ui-input" type="text" />` |
 * | Input con error | `.rb-input--error` | `<input class="b-ui-input rb-input--error" type="text" />` |
 * | Input exitoso | `.rb-input--success` | `<input class="b-ui-input rb-input--success" type="text" />` |
 * | Input con advertencia | `.rb-input--warning` | `<input class="b-ui-input rb-input--warning" type="text" />` |
 * | **Tamaños** | | |
 * | Pequeño | `.rb-input--small` | `<input class="b-ui-input rb-input--small" type="text" />` |
 * | Mediano (default) | `.rb-input--medium` o sin clase | `<input class="b-ui-input" type="text" />` |
 * | Grande | `.rb-input--large` | `<input class="b-ui-input rb-input--large" type="text" />` |
 * | **Con Iconos** | | |
 * | Icono izquierdo | `.rb-input--with-icon-left` | En un `.rb-input-container` |
 * | Icono derecho | `.rb-input--with-icon-right` | En un `.rb-input-container` |
 * | Ambos iconos | `.rb-input--with-icon-both` | En un `.rb-input-container` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.rb-input--rounded` | `<input class="b-ui-input rb-input--rounded" type="text" />` |
 * | Inline (auto width) | `.rb-input--inline` | `<input class="b-ui-input rb-input--inline" type="text" />` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estado por defecto**: NORMAL - sin validación especial
 * - **Tamaño por defecto**: MEDIUM - no necesitas especificar la clase
 * - **Label**: Usa `rb-input-label` y `rb-input-label--required` para requeridos
 * - **Helper text**: Usa `rb-input-helper` con estados `--error`, `--success`, `--warning`
 * - **Iconos**: Requieren contenedor `rb-input-container` y elementos `rb-input-icon`
 * - **Tipos soportados**: text, email, password, number, tel, url, search
 *
 * ## 🎯 Ejemplo de Estructura Completa
 *
 * ```html
 * <div>
 *   <label class="b-ui-input-label rb-input-label--required">Email</label>
 *   <div class="b-ui-input-container">
 *     <input class="b-ui-input rb-input--large rb-input--with-icon-left" type="email" />
 *     <span class="b-ui-input-icon rb-input-icon--left">📧</span>
 *   </div>
 *   <div class="b-ui-input-helper rb-input-helper--success">Email válido</div>
 * </div>
 * ```
 */
const meta: Meta = {
  title: 'Atoms/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de input versátil con múltiples tipos (text, email, password, etc.), estados de validación y opciones de iconos.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo de input HTML',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    state: {
      control: 'select',
      options: ['normal', 'error', 'success', 'warning'],
      description: 'Estado de validación del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder del input',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor del input',
      table: {
        type: { summary: 'string' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto del label',
      table: {
        type: { summary: 'string' },
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
      description: 'Input deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['none', 'left', 'right', 'both'],
      description: 'Posición del icono',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
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
    inline: {
      control: 'boolean',
      description: 'Ancho automático (inline)',
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
 * Experimenta con todas las combinaciones del input usando los controles interactivos
 * en el panel inferior. Puedes ajustar tipo, estado, tamaño, iconos y más.
 */
export const Playground: Story = {
  args: {
    type: 'text',
    state: 'normal',
    size: 'medium',
    placeholder: 'Escribe algo aquí...',
    value: '',
    label: 'Etiqueta del input',
    required: false,
    disabled: false,
    iconPosition: 'none',
    helperText: 'Texto de ayuda para el usuario',
    rounded: false,
    inline: false,
  },
  render: (args) => {
    // Determinar las clases del input
    const inputClasses = [
      'b-ui-input',
      args.state !== 'normal' ? `rb-input--${args.state}` : '',
      args.size !== 'medium' ? `rb-input--${args.size}` : '',
      args.rounded ? 'b-ui-input--rounded' : '',
      args.inline ? 'b-ui-input--inline' : '',
      args.iconPosition === 'left' ? 'b-ui-input--with-icon-left' : '',
      args.iconPosition === 'right' ? 'b-ui-input--with-icon-right' : '',
      args.iconPosition === 'both' ? 'b-ui-input--with-icon-both' : '',
    ]
      .filter(Boolean)
      .join(' ');

    // Determinar las clases del label
    const labelClasses = ['b-ui-input-label', args.required ? 'b-ui-input-label--required' : '']
      .filter(Boolean)
      .join(' ');

    // Determinar las clases del helper
    const helperClasses = [
      'b-ui-input-helper',
      args.state !== 'normal' ? `rb-input-helper--${args.state}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    // Función para obtener el icono según el tipo de input
    const getIcon = (type: string, position: string) => {
      if (position === 'both') {
        if (type === 'email') return position === 'left' ? '📧' : '✓';
        return position === 'left' ? '🔍' : '✓';
      }

      switch (type) {
        case 'email':
          return '📧';
        case 'password':
          return '👁️';
        case 'search':
          return '🔍';
        case 'tel':
          return '📞';
        case 'url':
          return '🌐';
        default:
          return position === 'left' ? '🔍' : '✓';
      }
    };

    const inputId = 'playground-input';

    return html`
      <div style="max-width: 400px;">
        <div>
          ${args.label
            ? html` <label class="${labelClasses}" for="${inputId}"> ${args.label} </label> `
            : ''}
          ${args.iconPosition !== 'none'
            ? html`
                <div class="b-ui-input-container ${args.inline ? 'b-ui-input-container--inline' : ''}">
                  <input
                    id="${inputId}"
                    class="${inputClasses}"
                    type="${args.type}"
                    placeholder="${args.placeholder || ''}"
                    value="${args.value || ''}"
                    ?required="${args.required}"
                    ?disabled="${args.disabled}"
                  />

                  ${args.iconPosition === 'left' || args.iconPosition === 'both'
                    ? html`
                        <span class="b-ui-input-icon rb-input-icon--left">
                          ${getIcon(args.type, 'left')}
                        </span>
                      `
                    : ''}
                  ${args.iconPosition === 'right' || args.iconPosition === 'both'
                    ? html`
                        <span class="b-ui-input-icon rb-input-icon--right">
                          ${getIcon(args.type, 'right')}
                        </span>
                      `
                    : ''}
                </div>
              `
            : html`
                <div class="${args.inline ? 'b-ui-input-container rb-input-container--inline' : ''}">
                  <input
                    id="${inputId}"
                    class="${inputClasses}"
                    type="${args.type}"
                    placeholder="${args.placeholder || ''}"
                    value="${args.value || ''}"
                    ?required="${args.required}"
                    ?disabled="${args.disabled}"
                  />
                </div>
              `}
          ${args.helperText ? html` <div class="${helperClasses}">${args.helperText}</div> ` : ''}
        </div>
      </div>
    `;
  },
};

/**
 * ## Estados - Matriz de Combinaciones
 *
 * Matriz del input mostrando combinaciones de:
 * - **4 Estados**: Normal, Error, Success, Warning
 * - **3 Tamaños**: Small, Medium, Large
 * - **7 Tipos**: Text, Email, Password, Number, Tel, URL, Search
 */
export const Estados: Story = {
  render: () => html`
    <style>
      .input-matrix {
        font-family: var(--b-ui-typography-fontFamily, 'Roboto', sans-serif);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
        background: var(--b-ui-color-grayscale-L400, #fafafa);
      }

      .input-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .input-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--b-ui-color-primary-base, #007acc);
      }

      .input-demo > div {
        margin-bottom: 1rem;
      }

      .input-demo > div:last-child {
        margin-bottom: 0;
      }
    </style>

    <div class="input-matrix">
      <!-- Estados Básicos -->
      <div class="input-demo">
        <h3>Estados Básicos</h3>
        <div>
          <label class="b-ui-input-label">Normal</label>
          <input class="b-ui-input" type="text" placeholder="Input normal" />
          <div class="b-ui-input-helper">Estado normal</div>
        </div>
        <div>
          <label class="b-ui-input-label">Error</label>
          <input class="b-ui-input rb-input--error" type="text" placeholder="Con error" />
          <div class="b-ui-input-helper rb-input-helper--error">Campo con error</div>
        </div>
        <div>
          <label class="b-ui-input-label">Success</label>
          <input class="b-ui-input rb-input--success" type="text" value="Válido" />
          <div class="b-ui-input-helper rb-input-helper--success">Campo válido</div>
        </div>
        <div>
          <label class="b-ui-input-label">Warning</label>
          <input class="b-ui-input rb-input--warning" type="text" placeholder="Advertencia" />
          <div class="b-ui-input-helper rb-input-helper--warning">Revisa este campo</div>
        </div>
      </div>

      <!-- Tamaños -->
      <div class="input-demo">
        <h3>Tamaños</h3>
        <div>
          <label class="b-ui-input-label">Small</label>
          <input class="b-ui-input rb-input--small" type="text" placeholder="Input pequeño" />
        </div>
        <div>
          <label class="b-ui-input-label">Medium</label>
          <input class="b-ui-input rb-input--medium" type="text" placeholder="Input mediano" />
        </div>
        <div>
          <label class="b-ui-input-label">Large</label>
          <input class="b-ui-input rb-input--large" type="text" placeholder="Input grande" />
        </div>
      </div>

      <!-- Con Iconos -->
      <div class="input-demo">
        <h3>Con Iconos</h3>
        <div>
          <label class="b-ui-input-label">Icono Izquierdo</label>
          <div class="b-ui-input-container">
            <input
              class="b-ui-input rb-input--with-icon-left"
              type="search"
              placeholder="Buscar..."
            />
            <span class="b-ui-input-icon rb-input-icon--left">🔍</span>
          </div>
        </div>
        <div>
          <label class="b-ui-input-label">Icono Derecho</label>
          <div class="b-ui-input-container">
            <input
              class="b-ui-input rb-input--with-icon-right"
              type="password"
              placeholder="Contraseña"
            />
            <span class="b-ui-input-icon rb-input-icon--right">👁️</span>
          </div>
        </div>
        <div>
          <label class="b-ui-input-label">Ambos Iconos</label>
          <div class="b-ui-input-container">
            <input
              class="b-ui-input rb-input--with-icon-both"
              type="email"
              placeholder="email@ejemplo.com"
            />
            <span class="b-ui-input-icon rb-input-icon--left">📧</span>
            <span class="b-ui-input-icon rb-input-icon--right">✓</span>
          </div>
        </div>
      </div>

      <!-- Tipos de Input -->
      <div class="input-demo">
        <h3>Tipos de Input</h3>
        <div>
          <label class="b-ui-input-label">Email</label>
          <input class="b-ui-input" type="email" placeholder="usuario@ejemplo.com" />
        </div>
        <div>
          <label class="b-ui-input-label">Password</label>
          <input class="b-ui-input" type="password" placeholder="••••••••" />
        </div>
        <div>
          <label class="b-ui-input-label">Number</label>
          <input class="b-ui-input" type="number" placeholder="123" />
        </div>
        <div>
          <label class="b-ui-input-label">Tel</label>
          <input class="b-ui-input" type="tel" placeholder="+57 300 123 4567" />
        </div>
      </div>

      <!-- Estados Especiales -->
      <div class="input-demo">
        <h3>Estados Especiales</h3>
        <div>
          <label class="b-ui-input-label rb-input-label--required">Requerido</label>
          <input class="b-ui-input" type="text" placeholder="Campo obligatorio" required />
          <div class="b-ui-input-helper">Campo obligatorio</div>
        </div>
        <div>
          <label class="b-ui-input-label">Deshabilitado</label>
          <input class="b-ui-input" type="text" placeholder="Campo deshabilitado" disabled />
          <div class="b-ui-input-helper">Este campo está deshabilitado</div>
        </div>
        <div>
          <label class="b-ui-input-label">Rounded</label>
          <input class="b-ui-input rb-input--rounded" type="text" placeholder="Bordes redondeados" />
        </div>
      </div>

      <!-- Grupos -->
      <div class="input-demo">
        <h3>Grupos de Inputs</h3>
        <div>
          <label class="b-ui-input-label">Grupo Horizontal</label>
          <div class="b-ui-input-group rb-input-group--horizontal">
            <input class="b-ui-input" type="text" placeholder="Nombre" />
            <input class="b-ui-input" type="text" placeholder="Apellido" />
          </div>
        </div>
        <div>
          <label class="b-ui-input-label">Inline</label>
          <div class="b-ui-input-container rb-input-container--inline">
            <input class="b-ui-input rb-input--inline" type="text" placeholder="Auto width" />
          </div>
        </div>
      </div>
    </div>
  `,
};
