import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # DatePicker Component (Web Component)
 *
 * Componente de selección de fechas del Seguros Bolivar UI Design System. Combina un input estilizado con un calendario desplegable.
 *
 * ## 📋 Referencia Rápida de Atributos
 *
 * | Atributo | Tipo | Default | Descripción |
 * |----------|------|---------|-------------|
 * | `variant` | `'single' \| 'range' \| 'multiple'` | `'single'` | Modo de selección |
 * | `placeholder` | `string` | `'Seleccionar fecha'` | Texto placeholder |
 * | `value` | `string` | - | Valor del input (fecha seleccionada) |
 * | `disabled` | `boolean` | `false` | Deshabilitar el componente |
 * | `error` | `boolean` | `false` | Estado de error |
 * | `min-date` | `string` | - | Fecha mínima (YYYY-MM-DD) |
 * | `max-date` | `string` | - | Fecha máxima (YYYY-MM-DD) |
 * | `locale` | `string` | `'es-ES'` | Idioma del calendario |
 *
 * ## 💡 Notas Importantes
 *
 * - **Input estilizado**: Hereda todos los estilos del componente `input` atom
 * - **Calendario desplegable**: Se abre al hacer clic en el input o ícono
 * - **Auto-cierre**: En modo 'single' se cierra automáticamente al seleccionar
 * - **Eventos**: Emite `datepicker-change` con valor y fecha formateada
 * - **Formatos**: Soporta formato localizado según el `locale`
 */
const meta: Meta = {
  title: 'Atoms/DatePicker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente DatePicker con input estilizado y calendario desplegable. Soporta selección única, rangos y múltiples fechas.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['single', 'range', 'multiple'],
      description: 'Modo de selección',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Seleccionar fecha' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilitar el componente',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    error: {
      control: 'boolean',
      description: 'Estado de error',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    locale: {
      control: 'text',
      description: 'Idioma (es-ES, en-US, etc.)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'es-ES' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con el DatePicker y sus diferentes configuraciones.
 */
export const Playground: Story = {
  args: {
    variant: 'single',
    placeholder: 'Seleccionar fecha',
    disabled: false,
    error: false,
    locale: 'es-ES',
  },
  render: (args) => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .datepicker-playground {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
      }
    </style>

    <div class="datepicker-playground">
      <label class="sb-ui-input-label">Fecha</label>
      <sb-ui-date-picker
        variant="${args.variant}"
        placeholder="${args.placeholder}"
        ?disabled="${args.disabled}"
        ?error="${args.error}"
        locale="${args.locale}"
        @datepicker-change="${(e: CustomEvent) => {
          const output = document.getElementById('output-playground');
          if (output) {
            output.textContent = JSON.stringify(e.detail, null, 2);
          }
        }}"
      ></sb-ui-date-picker>
      <div class="output" id="output-playground">Selecciona una fecha...</div>
    </div>
  `,
};

/**
 * ## Single Selection
 *
 * DatePicker en modo de selección única (más común).
 */
export const SingleSelection: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
      }
      .output {
        margin-top: 0.5rem;
        padding: 0.75rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 4px;
        font-size: 0.875rem;
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <label class="sb-ui-input-label">Fecha de nacimiento</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          @datepicker-change="${(e: CustomEvent) => {
            const output = document.getElementById('output-single');
            if (output) {
              output.textContent = `Seleccionado: ${e.detail.formattedValue || 'ninguno'}`;
            }
          }}"
        ></sb-ui-date-picker>
        <div class="output" id="output-single">No hay fecha seleccionada</div>
      </div>
    </div>
  `,
};

/**
 * ## Range Selection
 *
 * DatePicker en modo rango para seleccionar fechas de inicio y fin.
 */
export const RangeSelection: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
      }
      .output {
        margin-top: 0.5rem;
        padding: 0.75rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 4px;
        font-size: 0.875rem;
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <label class="sb-ui-input-label">Rango de fechas</label>
        <sb-ui-date-picker
          variant="range"
          placeholder="Seleccionar rango"
          @datepicker-change="${(e: CustomEvent) => {
            const output = document.getElementById('output-range');
            if (output) {
              output.textContent = `Rango: ${e.detail.formattedValue || 'ninguno seleccionado'}`;
            }
          }}"
        ></sb-ui-date-picker>
        <div class="output" id="output-range">No hay rango seleccionado</div>
      </div>
    </div>
  `,
};

/**
 * ## Estados
 *
 * Diferentes estados del DatePicker (normal, disabled, error).
 */
export const Estados: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
      }
      .demo-section {
        margin-bottom: 2rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .demo-section h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
    </style>

    <div class="demo">
      <div class="demo-section">
        <h4>Normal</h4>
        <label class="sb-ui-input-label">Fecha de viaje</label>
        <sb-ui-date-picker variant="single" placeholder="Seleccionar fecha"></sb-ui-date-picker>
      </div>

      <div class="demo-section">
        <h4>Disabled</h4>
        <label class="sb-ui-input-label">Fecha bloqueada</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="No disponible"
          disabled
        ></sb-ui-date-picker>
      </div>

      <div class="demo-section">
        <h4>Error</h4>
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha requerida</label>
        <sb-ui-date-picker variant="single" placeholder="Campo obligatorio" error></sb-ui-date-picker>
        <span class="sb-ui-input-helper sb-ui-input-helper--error">
          <i class="fa-solid fa-circle-xmark"></i>
          Este campo es obligatorio
        </span>
      </div>
    </div>
  `,
};

/**
 * ## Con Validación
 *
 * DatePicker con fechas mínimas y máximas.
 */
export const ConValidacion: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date(today);
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 30);

    return html`
      <script type="module">
        import '@sb-ui/molecules';
      </script>
      <style>
        .demo {
          font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
          padding: 2rem;
          max-width: 500px;
          margin: 0 auto;
        }
        .info-box {
          padding: 1rem;
          background: var(--sb-ui-color-feedback-info-L400);
          border-left: 4px solid var(--sb-ui-color-feedback-info-base);
          border-radius: 4px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
      </style>

      <div class="demo">
        <div class="info-box">
          <strong>Restricciones:</strong>
          <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
            <li>Fecha mínima: Hoy (${today.toLocaleDateString('es-ES')})</li>
            <li>Fecha máxima: ${maxDate.toLocaleDateString('es-ES')}</li>
          </ul>
        </div>

        <label class="sb-ui-input-label">Seleccionar fecha de reserva</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="Solo próximos 30 días"
          min-date="${minDate.toISOString().split('T')[0]}"
          max-date="${maxDate.toISOString().split('T')[0]}"
        ></sb-ui-date-picker>
      </div>
    `;
  },
};

/**
 * ## Formulario Completo
 *
 * Ejemplo de DatePicker integrado en un formulario.
 */
export const FormularioCompleto: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .form-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .form-demo h3 {
        margin: 0 0 1.5rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .form-field {
        margin-bottom: 1.5rem;
      }
      .form-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }
    </style>

    <div class="form-demo">
      <h3>Reserva de Viaje</h3>

      <div class="form-field">
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha de salida</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          id="departure"
        ></sb-ui-date-picker>
      </div>

      <div class="form-field">
        <label class="sb-ui-input-label sb-ui-input-label--required">Fecha de regreso</label>
        <sb-ui-date-picker
          variant="single"
          placeholder="DD/MM/YYYY"
          id="return"
        ></sb-ui-date-picker>
      </div>

      <div class="form-field">
        <label class="sb-ui-input-label">Rango alternativo</label>
        <sb-ui-date-picker variant="range" placeholder="Seleccionar rango"></sb-ui-date-picker>
      </div>

      <div class="form-actions">
        <button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Buscar</button>
        <button class="sb-ui-button sb-ui-button--tertiary">Cancelar</button>
      </div>
    </div>
  `,
};

