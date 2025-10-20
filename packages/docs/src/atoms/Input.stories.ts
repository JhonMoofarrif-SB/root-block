import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Input Component
 *
 * Componente de input versátil del Seguros Bolivar UI Design System con diferentes tipos, estados, tamaños y opciones de iconos.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | Input normal (default) | `.sb-ui-input` | `<input class="sb-ui-input" type="text" />` |
 * | Input con error | `.sb-ui-input--error` | `<input class="sb-ui-input sb-ui-input--error" type="text" />` |
 * | Input exitoso | `.sb-ui-input--success` | `<input class="sb-ui-input sb-ui-input--success" type="text" />` |
 * | Input con advertencia | `.sb-ui-input--warning` | `<input class="sb-ui-input sb-ui-input--warning" type="text" />` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-input--small` | `<input class="sb-ui-input sb-ui-input--small" type="text" />` |
 * | Mediano (default) | `.sb-ui-input--medium` o sin clase | `<input class="sb-ui-input" type="text" />` |
 * | Grande | `.sb-ui-input--large` | `<input class="sb-ui-input sb-ui-input--large" type="text" />` |
 * | **Con Iconos** | | |
 * | Icono izquierdo | `.sb-ui-input--with-icon-left` | En un `.sb-ui-input-container` |
 * | Icono derecho | `.sb-ui-input--with-icon-right` | En un `.sb-ui-input-container` |
 * | Ambos iconos | `.sb-ui-input--with-icon-both` | En un `.sb-ui-input-container` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.sb-ui-input--rounded` | `<input class="sb-ui-input sb-ui-input--rounded" type="text" />` |
 * | Inline (auto width) | `.sb-ui-input--inline` | `<input class="sb-ui-input sb-ui-input--inline" type="text" />` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estado por defecto**: NORMAL - sin validación especial
 * - **Tamaño por defecto**: MEDIUM - no necesitas especificar la clase
 * - **Label**: Usa `sb-ui-input-label` y `sb-ui-input-label--required` para requeridos
 * - **Helper text**: Usa `sb-ui-input-helper` con estados `--error`, `--success`, `--warning`
 * - **Iconos**: Requieren contenedor `sb-ui-input-container` y elementos `sb-ui-input-icon`
 * - **Tipos soportados**: text, email, password, number, tel, url, search
 *
 * ## 🎯 Ejemplo de Estructura Completa
 *
 * ```html
 * <div>
 *   <label class="sb-ui-input-label sb-ui-input-label--required">Email</label>
 *   <div class="sb-ui-input-container">
 *     <input class="sb-ui-input sb-ui-input--large sb-ui-input--with-icon-left" type="email" />
 *     <span class="sb-ui-input-icon sb-ui-input-icon--left">📧</span>
 *   </div>
 *   <div class="sb-ui-input-helper sb-ui-input-helper--success">Email válido</div>
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
      'sb-ui-input',
      args.state !== 'normal' ? `sb-ui-input--${args.state}` : '',
      args.size !== 'medium' ? `sb-ui-input--${args.size}` : '',
      args.rounded ? 'sb-ui-input--rounded' : '',
      args.inline ? 'sb-ui-input--inline' : '',
      args.iconPosition === 'left' ? 'sb-ui-input--with-icon-left' : '',
      args.iconPosition === 'right' ? 'sb-ui-input--with-icon-right' : '',
      args.iconPosition === 'both' ? 'sb-ui-input--with-icon-both' : '',
    ]
      .filter(Boolean)
      .join(' ');

    // Determinar las clases del label
    const labelClasses = ['sb-ui-input-label', args.required ? 'sb-ui-input-label--required' : '']
      .filter(Boolean)
      .join(' ');

    // Determinar las clases del helper
    const helperClasses = [
      'sb-ui-input-helper',
      args.state !== 'normal' ? `sb-ui-input-helper--${args.state}` : '',
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
                <div
                  class="sb-ui-input-container ${args.inline
                    ? 'sb-ui-input-container--inline'
                    : ''}"
                >
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
                        <span class="sb-ui-input-icon sb-ui-input-icon--left">
                          ${getIcon(args.type, 'left')}
                        </span>
                      `
                    : ''}
                  ${args.iconPosition === 'right' || args.iconPosition === 'both'
                    ? html`
                        <span class="sb-ui-input-icon sb-ui-input-icon--right">
                          ${getIcon(args.type, 'right')}
                        </span>
                      `
                    : ''}
                </div>
              `
            : html`
                <div
                  class="${args.inline
                    ? 'sb-ui-input-container sb-ui-input-container--inline'
                    : ''}"
                >
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
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
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
        color: var(--sb-ui-color-primary-base, #007acc);
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
          <label class="sb-ui-input-label">Normal</label>
          <input class="sb-ui-input" type="text" placeholder="Input normal" />
          <div class="sb-ui-input-helper">Estado normal</div>
        </div>
        <div>
          <label class="sb-ui-input-label">Error</label>
          <input class="sb-ui-input sb-ui-input--error" type="text" placeholder="Con error" />
          <div class="sb-ui-input-helper sb-ui-input-helper--error">Campo con error</div>
        </div>
        <div>
          <label class="sb-ui-input-label">Success</label>
          <input class="sb-ui-input sb-ui-input--success" type="text" value="Válido" />
          <div class="sb-ui-input-helper sb-ui-input-helper--success">Campo válido</div>
        </div>
        <div>
          <label class="sb-ui-input-label">Warning</label>
          <input class="sb-ui-input sb-ui-input--warning" type="text" placeholder="Advertencia" />
          <div class="sb-ui-input-helper sb-ui-input-helper--warning">Revisa este campo</div>
        </div>
      </div>

      <!-- Tamaños -->
      <div class="input-demo">
        <h3>Tamaños</h3>
        <div>
          <label class="sb-ui-input-label">Small</label>
          <input class="sb-ui-input sb-ui-input--small" type="text" placeholder="Input pequeño" />
        </div>
        <div>
          <label class="sb-ui-input-label">Medium</label>
          <input class="sb-ui-input sb-ui-input--medium" type="text" placeholder="Input mediano" />
        </div>
        <div>
          <label class="sb-ui-input-label">Large</label>
          <input class="sb-ui-input sb-ui-input--large" type="text" placeholder="Input grande" />
        </div>
      </div>

      <!-- Con Iconos -->
      <div class="input-demo">
        <h3>Con Iconos</h3>
        <div>
          <label class="sb-ui-input-label">Icono Izquierdo</label>
          <div class="sb-ui-input-container">
            <input
              class="sb-ui-input sb-ui-input--with-icon-left"
              type="search"
              placeholder="Buscar..."
            />
            <span class="sb-ui-input-icon sb-ui-input-icon--left">🔍</span>
          </div>
        </div>
        <div>
          <label class="sb-ui-input-label">Icono Derecho</label>
          <div class="sb-ui-input-container">
            <input
              class="sb-ui-input sb-ui-input--with-icon-right"
              type="password"
              placeholder="Contraseña"
            />
            <span class="sb-ui-input-icon sb-ui-input-icon--right">👁️</span>
          </div>
        </div>
        <div>
          <label class="sb-ui-input-label">Ambos Iconos</label>
          <div class="sb-ui-input-container">
            <input
              class="sb-ui-input sb-ui-input--with-icon-both"
              type="email"
              placeholder="email@ejemplo.com"
            />
            <span class="sb-ui-input-icon sb-ui-input-icon--left">📧</span>
            <span class="sb-ui-input-icon sb-ui-input-icon--right">✓</span>
          </div>
        </div>
      </div>

      <!-- Tipos de Input -->
      <div class="input-demo">
        <h3>Tipos de Input</h3>
        <div>
          <label class="sb-ui-input-label">Email</label>
          <input class="sb-ui-input" type="email" placeholder="usuario@ejemplo.com" />
        </div>
        <div>
          <label class="sb-ui-input-label">Password</label>
          <input class="sb-ui-input" type="password" placeholder="••••••••" />
        </div>
        <div>
          <label class="sb-ui-input-label">Number</label>
          <input class="sb-ui-input" type="number" placeholder="123" />
        </div>
        <div>
          <label class="sb-ui-input-label">Tel</label>
          <input class="sb-ui-input" type="tel" placeholder="+57 300 123 4567" />
        </div>
      </div>

      <!-- Estados Especiales -->
      <div class="input-demo">
        <h3>Estados Especiales</h3>
        <div>
          <label class="sb-ui-input-label sb-ui-input-label--required">Requerido</label>
          <input class="sb-ui-input" type="text" placeholder="Campo obligatorio" required />
          <div class="sb-ui-input-helper">Campo obligatorio</div>
        </div>
        <div>
          <label class="sb-ui-input-label">Deshabilitado</label>
          <input class="sb-ui-input" type="text" placeholder="Campo deshabilitado" disabled />
          <div class="sb-ui-input-helper">Este campo está deshabilitado</div>
        </div>
        <div>
          <label class="sb-ui-input-label">Rounded</label>
          <input
            class="sb-ui-input sb-ui-input--rounded"
            type="text"
            placeholder="Bordes redondeados"
          />
        </div>
      </div>

      <!-- Grupos -->
      <div class="input-demo">
        <h3>Grupos de Inputs</h3>
        <div>
          <label class="sb-ui-input-label">Grupo Horizontal</label>
          <div class="sb-ui-input-group sb-ui-input-group--horizontal">
            <input class="sb-ui-input" type="text" placeholder="Nombre" />
            <input class="sb-ui-input" type="text" placeholder="Apellido" />
          </div>
        </div>
        <div>
          <label class="sb-ui-input-label">Inline</label>
          <div class="sb-ui-input-container sb-ui-input-container--inline">
            <input class="sb-ui-input sb-ui-input--inline" type="text" placeholder="Auto width" />
          </div>
        </div>
      </div>
    </div>
  `,
};
