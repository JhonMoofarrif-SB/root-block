import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Select Component
 *
 * Componente de select versátil del Seguros Bolivar UI Design System con diferentes estados, tamaños y opciones de iconos.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | Select normal (default) | `.sb-ui-select` | `<select class="sb-ui-select">...</select>` |
 * | Select con error | `.sb-ui-select--error` | `<select class="sb-ui-select sb-ui-select--error">...</select>` |
 * | Select exitoso | `.sb-ui-select--success` | `<select class="sb-ui-select sb-ui-select--success">...</select>` |
 * | Select con advertencia | `.sb-ui-select--warning` | `<select class="sb-ui-select sb-ui-select--warning">...</select>` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-select--small` | `<select class="sb-ui-select sb-ui-select--small">...</select>` |
 * | Mediano (default) | `.sb-ui-select--medium` o sin clase | `<select class="sb-ui-select">...</select>` |
 * | Grande | `.sb-ui-select--large` | `<select class="sb-ui-select sb-ui-select--large">...</select>` |
 * | **Con Iconos** | | |
 * | Icono izquierdo | `.sb-ui-select--with-icon-left` | En un `.sb-ui-select-container` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.sb-ui-select--rounded` | `<select class="sb-ui-select sb-ui-select--rounded">...</select>` |
 * | Inline (auto width) | `.sb-ui-select--inline` | `<select class="sb-ui-select sb-ui-select--inline">...</select>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estado por defecto**: NORMAL - sin validación especial
 * - **Tamaño por defecto**: MEDIUM - no necesitas especificar la clase
 * - **Label**: Usa `sb-ui-select-label` y `sb-ui-select-label--required` para requeridos
 * - **Helper text**: Usa `sb-ui-select-helper` con estados `--error`, `--success`, `--warning`
 * - **Múltiple**: Soporte nativo con atributo `multiple`
 * - **Grupos**: Usa `<optgroup>` para agrupar opciones
 */
const meta: Meta = {
  title: 'Atoms/Select',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de select versátil con soporte para selección simple/múltiple, grupos de opciones y diferentes estados de validación.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'error', 'success', 'warning'],
      description: 'Estado de validación del select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del select',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
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
      description: 'Select deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Selección múltiple',
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
    hasIcon: {
      control: 'boolean',
      description: 'Incluir icono',
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
 * Experimenta con todas las combinaciones del select usando los controles interactivos
 * en el panel inferior. Puedes ajustar estado, tamaño, opciones y más.
 */
export const Playground: Story = {
  args: {
    state: 'normal',
    size: 'medium',
    label: 'Selecciona una opción',
    required: false,
    disabled: false,
    multiple: false,
    helperText: 'Elige la opción que mejor se adapte a tus necesidades',
    rounded: false,
    hasIcon: false,
  },
  render: (args) => {
    const selectClasses = [
      'sb-ui-select',
      args.state !== 'normal' ? `sb-ui-select--${args.state}` : '',
      args.size !== 'medium' ? `sb-ui-select--${args.size}` : '',
      args.rounded ? 'sb-ui-select--rounded' : '',
      args.hasIcon ? 'sb-ui-select--with-icon-left' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = ['sb-ui-select-label', args.required ? 'sb-ui-select-label--required' : '']
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'sb-ui-select-helper',
      args.state !== 'normal' ? `sb-ui-select-helper--${args.state}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    const selectId = 'playground-select';

    return html`
      <div style="max-width: 400px;">
        <div>
          ${args.label
            ? html` <label class="${labelClasses}" for="${selectId}"> ${args.label} </label> `
            : ''}
          ${args.hasIcon
            ? html`
                <div class="sb-ui-select-container">
                  <select
                    id="${selectId}"
                    class="${selectClasses}"
                    ?required="${args.required}"
                    ?disabled="${args.disabled}"
                    ?multiple="${args.multiple}"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="tech">Tecnología</option>
                    <option value="design">Diseño</option>
                    <option value="business">Negocios</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Ventas</option>
                  </select>
                  <span class="sb-ui-select-icon sb-ui-select-icon--left">📂</span>
                </div>
              `
            : html`
                <select
                  id="${selectId}"
                  class="${selectClasses}"
                  ?required="${args.required}"
                  ?disabled="${args.disabled}"
                  ?multiple="${args.multiple}"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="tech">Tecnología</option>
                  <option value="design">Diseño</option>
                  <option value="business">Negocios</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Ventas</option>
                </select>
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
 * Matriz del select mostrando combinaciones de:
 * - **4 Estados**: Normal, Error, Success, Warning
 * - **3 Tamaños**: Small, Medium, Large
 * - **Diferentes tipos**: Simple, Múltiple, Con grupos
 */
export const Estados: Story = {
  render: () => html`
    <style>
      .select-matrix {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .select-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .select-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .select-demo > div {
        margin-bottom: 1rem;
      }

      .select-demo > div:last-child {
        margin-bottom: 0;
      }
    </style>

    <div class="select-matrix">
      <!-- Estados Básicos -->
      <div class="select-demo">
        <h3>Estados Básicos</h3>
        <div>
          <label class="sb-ui-select-label">Normal</label>
          <select class="sb-ui-select">
            <option value="">Select normal</option>
            <option value="1">Opción 1</option>
            <option value="2">Opción 2</option>
          </select>
          <div class="sb-ui-select-helper">Estado normal</div>
        </div>
        <div>
          <label class="sb-ui-select-label">Error</label>
          <select class="sb-ui-select sb-ui-select--error">
            <option value="">Con error</option>
            <option value="1">Opción inválida</option>
          </select>
          <div class="sb-ui-select-helper sb-ui-select-helper--error">Campo con error</div>
        </div>
        <div>
          <label class="sb-ui-select-label">Success</label>
          <select class="sb-ui-select sb-ui-select--success">
            <option value="">Selección exitosa</option>
            <option value="1" selected>Opción válida</option>
          </select>
          <div class="sb-ui-select-helper sb-ui-select-helper--success">Campo válido</div>
        </div>
        <div>
          <label class="sb-ui-select-label">Warning</label>
          <select class="sb-ui-select sb-ui-select--warning">
            <option value="">Con advertencia</option>
            <option value="1">Revisar opción</option>
          </select>
          <div class="sb-ui-select-helper sb-ui-select-helper--warning">Revisa esta selección</div>
        </div>
      </div>

      <!-- Tamaños -->
      <div class="select-demo">
        <h3>Tamaños</h3>
        <div>
          <label class="sb-ui-select-label">Small</label>
          <select class="sb-ui-select sb-ui-select--small">
            <option value="">Select pequeño</option>
            <option value="1">Opción 1</option>
          </select>
        </div>
        <div>
          <label class="sb-ui-select-label">Medium</label>
          <select class="sb-ui-select sb-ui-select--medium">
            <option value="">Select mediano</option>
            <option value="1">Opción 1</option>
          </select>
        </div>
        <div>
          <label class="sb-ui-select-label">Large</label>
          <select class="sb-ui-select sb-ui-select--large">
            <option value="">Select grande</option>
            <option value="1">Opción 1</option>
          </select>
        </div>
      </div>

      <!-- Con Iconos -->
      <div class="select-demo">
        <h3>Con Iconos</h3>
        <div>
          <label class="sb-ui-select-label">Con Icono</label>
          <div class="sb-ui-select-container">
            <select class="sb-ui-select sb-ui-select--with-icon-left">
              <option value="">Selecciona país</option>
              <option value="co">🇨🇴 Colombia</option>
              <option value="mx">🇲🇽 México</option>
            </select>
            <span class="sb-ui-select-icon sb-ui-select-icon--left">🌍</span>
          </div>
        </div>
      </div>

      <!-- Select Múltiple -->
      <div class="select-demo">
        <h3>Select Múltiple</h3>
        <div>
          <label class="sb-ui-select-label">Múltiple</label>
          <select class="sb-ui-select" multiple>
            <option value="1">Opción 1</option>
            <option value="2" selected>Opción 2</option>
            <option value="3">Opción 3</option>
            <option value="4" selected>Opción 4</option>
          </select>
          <div class="sb-ui-select-helper">Mantén Ctrl/Cmd para múltiples</div>
        </div>
      </div>

      <!-- Estados Especiales -->
      <div class="select-demo">
        <h3>Estados Especiales</h3>
        <div>
          <label class="sb-ui-select-label sb-ui-select-label--required">Requerido</label>
          <select class="sb-ui-select" required>
            <option value="">Campo obligatorio</option>
            <option value="1">Opción A</option>
          </select>
          <div class="sb-ui-select-helper">Campo obligatorio</div>
        </div>
        <div>
          <label class="sb-ui-select-label">Deshabilitado</label>
          <select class="sb-ui-select" disabled>
            <option value="">Campo deshabilitado</option>
          </select>
          <div class="sb-ui-select-helper">Este campo está deshabilitado</div>
        </div>
        <div>
          <label class="sb-ui-select-label">Rounded</label>
          <select class="sb-ui-select sb-ui-select--rounded">
            <option value="">Bordes redondeados</option>
            <option value="1">Opción 1</option>
          </select>
        </div>
      </div>

      <!-- Con Grupos -->
      <div class="select-demo">
        <h3>Con Grupos</h3>
        <div>
          <label class="sb-ui-select-label">Grupos</label>
          <select class="sb-ui-select">
            <option value="">Selecciona una opción</option>
            <optgroup label="Categoría A">
              <option value="a1">Opción A1</option>
              <option value="a2">Opción A2</option>
            </optgroup>
            <optgroup label="Categoría B">
              <option value="b1">Opción B1</option>
              <option value="b2">Opción B2</option>
            </optgroup>
          </select>
          <div class="sb-ui-select-helper">Select con grupos</div>
        </div>
      </div>
    </div>
  `,
};
