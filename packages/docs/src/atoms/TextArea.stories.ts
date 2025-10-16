import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # TextArea Component
 *
 * Componente de textarea versátil del Root Block Design System con contador de caracteres, auto-resize y diferentes estados.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Estados** | | |
 * | TextArea normal (default) | `.rb-textarea` | `<textarea class="rb-textarea"></textarea>` |
 * | TextArea con error | `.rb-textarea--error` | `<textarea class="rb-textarea rb-textarea--error"></textarea>` |
 * | TextArea exitoso | `.rb-textarea--success` | `<textarea class="rb-textarea rb-textarea--success"></textarea>` |
 * | TextArea con advertencia | `.rb-textarea--warning` | `<textarea class="rb-textarea rb-textarea--warning"></textarea>` |
 * | **Tamaños** | | |
 * | Pequeño | `.rb-textarea--small` | `<textarea class="rb-textarea rb-textarea--small"></textarea>` |
 * | Mediano (default) | `.rb-textarea--medium` o sin clase | `<textarea class="rb-textarea"></textarea>` |
 * | Grande | `.rb-textarea--large` | `<textarea class="rb-textarea rb-textarea--large"></textarea>` |
 * | **Resize** | | |
 * | Sin resize | `.rb-textarea--no-resize` | `<textarea class="rb-textarea rb-textarea--no-resize"></textarea>` |
 * | Auto resize | `.rb-textarea--auto-resize` | `<textarea class="rb-textarea rb-textarea--auto-resize"></textarea>` |
 * | **Modificadores** | | |
 * | Con contador | `.rb-textarea--with-counter` | En un `.rb-textarea-container` |
 * | Bordes redondeados | `.rb-textarea--rounded` | `<textarea class="rb-textarea rb-textarea--rounded"></textarea>` |
 */
const meta: Meta = {
  title: 'Atoms/TextArea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de textarea versátil con contador de caracteres, auto-resize y múltiples estados de validación.',
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['normal', 'error', 'success', 'warning'],
      description: 'Estado de validación del textarea',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del textarea',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder del textarea',
      table: {
        type: { summary: 'string' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor del textarea',
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
      description: 'TextArea deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    maxLength: {
      control: 'number',
      description: 'Máximo número de caracteres',
      table: {
        type: { summary: 'number' },
      },
    },
    withCounter: {
      control: 'boolean',
      description: 'Mostrar contador de caracteres',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    resize: {
      control: 'select',
      options: ['default', 'none', 'auto', 'horizontal', 'both'],
      description: 'Comportamiento de resize',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
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
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con todas las combinaciones del textarea usando los controles interactivos
 * en el panel inferior. Puedes ajustar estado, tamaño, contador y más.
 */
export const Playground: Story = {
  args: {
    state: 'normal',
    size: 'medium',
    placeholder: 'Escribe tu mensaje aquí...',
    value: '',
    label: 'Comentarios',
    required: false,
    disabled: false,
    maxLength: 200,
    withCounter: false,
    resize: 'default',
    helperText: 'Escribe tus comentarios o sugerencias',
    rounded: false,
  },
  render: (args) => {
    const textareaClasses = [
      'rb-textarea',
      args.state !== 'normal' ? `rb-textarea--${args.state}` : '',
      args.size !== 'medium' ? `rb-textarea--${args.size}` : '',
      args.rounded ? 'rb-textarea--rounded' : '',
      args.withCounter ? 'rb-textarea--with-counter' : '',
      args.resize !== 'default'
        ? `rb-textarea--${args.resize === 'none' ? 'no-resize' : args.resize === 'auto' ? 'auto-resize' : `resize-${args.resize}`}`
        : '',
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = ['rb-textarea-label', args.required ? 'rb-textarea-label--required' : '']
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'rb-textarea-helper',
      args.state !== 'normal' ? `rb-textarea-helper--${args.state}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    const textareaId = 'playground-textarea';

    return html`
      <div style="max-width: 500px;">
        <div>
          ${args.label
            ? html` <label class="${labelClasses}" for="${textareaId}"> ${args.label} </label> `
            : ''}
          ${args.withCounter
            ? html`
                <div class="rb-textarea-container">
                  <textarea
                    id="${textareaId}"
                    class="${textareaClasses}"
                    placeholder="${args.placeholder || ''}"
                    ?required="${args.required}"
                    ?disabled="${args.disabled}"
                    maxlength="${args.maxLength || ''}"
                  >
${args.value || ''}</textarea
                  >
                  <div class="rb-textarea-counter">0/${args.maxLength || 200}</div>
                </div>
              `
            : html`
                <textarea
                  id="${textareaId}"
                  class="${textareaClasses}"
                  placeholder="${args.placeholder || ''}"
                  ?required="${args.required}"
                  ?disabled="${args.disabled}"
                  maxlength="${args.maxLength || ''}"
                >
${args.value || ''}</textarea
                >
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
 * Matriz del textarea mostrando combinaciones de:
 * - **4 Estados**: Normal, Error, Success, Warning
 * - **3 Tamaños**: Small, Medium, Large
 * - **Diferentes opciones**: Con contador, resize, etc.
 */
export const Estados: Story = {
  render: () => html`
    <style>
      .textarea-matrix {
        font-family: var(--rb-typography-fontFamily, 'Roboto', sans-serif);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        padding: 2rem;
        background: var(--rb-color-grayscale-L400, #fafafa);
      }

      .textarea-demo {
        padding: 1.5rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .textarea-demo h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--rb-color-primary-base, #007acc);
      }

      .textarea-demo > div {
        margin-bottom: 1rem;
      }

      .textarea-demo > div:last-child {
        margin-bottom: 0;
      }
    </style>

    <div class="textarea-matrix">
      <!-- Estados Básicos -->
      <div class="textarea-demo">
        <h3>Estados Básicos</h3>
        <div>
          <label class="rb-textarea-label">Normal</label>
          <textarea class="rb-textarea" placeholder="TextArea normal"></textarea>
          <div class="rb-textarea-helper">Estado normal</div>
        </div>
        <div>
          <label class="rb-textarea-label">Error</label>
          <textarea class="rb-textarea rb-textarea--error" placeholder="Con error"></textarea>
          <div class="rb-textarea-helper rb-textarea-helper--error">Campo con error</div>
        </div>
        <div>
          <label class="rb-textarea-label">Success</label>
          <textarea class="rb-textarea rb-textarea--success">Texto válido</textarea>
          <div class="rb-textarea-helper rb-textarea-helper--success">Campo válido</div>
        </div>
        <div>
          <label class="rb-textarea-label">Warning</label>
          <textarea
            class="rb-textarea rb-textarea--warning"
            placeholder="Con advertencia"
          ></textarea>
          <div class="rb-textarea-helper rb-textarea-helper--warning">Revisa este campo</div>
        </div>
      </div>

      <!-- Tamaños -->
      <div class="textarea-demo">
        <h3>Tamaños</h3>
        <div>
          <label class="rb-textarea-label">Small</label>
          <textarea
            class="rb-textarea rb-textarea--small"
            placeholder="TextArea pequeño"
          ></textarea>
        </div>
        <div>
          <label class="rb-textarea-label">Medium</label>
          <textarea
            class="rb-textarea rb-textarea--medium"
            placeholder="TextArea mediano"
          ></textarea>
        </div>
        <div>
          <label class="rb-textarea-label">Large</label>
          <textarea class="rb-textarea rb-textarea--large" placeholder="TextArea grande"></textarea>
        </div>
      </div>

      <!-- Con Contador -->
      <div class="textarea-demo">
        <h3>Con Contador</h3>
        <div>
          <label class="rb-textarea-label">Contador Básico</label>
          <div class="rb-textarea-container">
            <textarea
              class="rb-textarea rb-textarea--with-counter"
              maxlength="100"
              placeholder="Máximo 100 caracteres"
            ></textarea>
            <div class="rb-textarea-counter">0/100</div>
          </div>
        </div>
        <div>
          <label class="rb-textarea-label">Contador con Warning</label>
          <div class="rb-textarea-container">
            <textarea
              class="rb-textarea rb-textarea--with-counter"
              maxlength="50"
              placeholder="Máximo 50 caracteres"
            ></textarea>
            <div class="rb-textarea-counter rb-textarea-counter--warning">0/50</div>
          </div>
        </div>
      </div>

      <!-- Resize Options -->
      <div class="textarea-demo">
        <h3>Opciones de Resize</h3>
        <div>
          <label class="rb-textarea-label">No Resize</label>
          <textarea
            class="rb-textarea rb-textarea--no-resize"
            placeholder="Sin redimensionar"
          ></textarea>
        </div>
        <div>
          <label class="rb-textarea-label">Auto Resize</label>
          <textarea
            class="rb-textarea rb-textarea--auto-resize"
            placeholder="Se ajusta automáticamente"
          ></textarea>
        </div>
        <div>
          <label class="rb-textarea-label">Resize Both</label>
          <textarea
            class="rb-textarea rb-textarea--resize-both"
            placeholder="Ambas direcciones"
          ></textarea>
        </div>
      </div>

      <!-- Estados Especiales -->
      <div class="textarea-demo">
        <h3>Estados Especiales</h3>
        <div>
          <label class="rb-textarea-label rb-textarea-label--required">Requerido</label>
          <textarea class="rb-textarea" placeholder="Campo obligatorio" required></textarea>
          <div class="rb-textarea-helper">Campo obligatorio</div>
        </div>
        <div>
          <label class="rb-textarea-label">Deshabilitado</label>
          <textarea class="rb-textarea" placeholder="Campo deshabilitado" disabled></textarea>
          <div class="rb-textarea-helper">Este campo está deshabilitado</div>
        </div>
        <div>
          <label class="rb-textarea-label">Rounded</label>
          <textarea
            class="rb-textarea rb-textarea--rounded"
            placeholder="Bordes redondeados"
          ></textarea>
        </div>
      </div>

      <!-- Grupos -->
      <div class="textarea-demo">
        <h3>Grupos de TextAreas</h3>
        <div>
          <label class="rb-textarea-label">Grupo Vertical</label>
          <div class="rb-textarea-group rb-textarea-group--vertical">
            <textarea class="rb-textarea" placeholder="Primer textarea"></textarea>
            <textarea class="rb-textarea" placeholder="Segundo textarea"></textarea>
          </div>
          <div class="rb-textarea-helper">TextAreas agrupados</div>
        </div>
      </div>
    </div>
  `,
};
