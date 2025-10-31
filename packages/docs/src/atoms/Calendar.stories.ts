import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Calendar Component (Web Component)
 *
 * Componente de calendario interactivo del Seguros Bolivar UI Design System construido con Lit Element.
 *
 * ## 📋 Referencia Rápida de Atributos
 *
 * | Atributo | Tipo | Default | Descripción |
 * |----------|------|---------|-------------|
 * | `variant` | `'single' \| 'range' \| 'multiple'` | `'single'` | Modo de selección |
 * | `locale` | `string` | `'es-ES'` | Idioma del calendario |
 * | `min-date` | `string` | - | Fecha mínima seleccionable (YYYY-MM-DD) |
 * | `max-date` | `string` | - | Fecha máxima seleccionable (YYYY-MM-DD) |
 * | `disabled-dates` | `string` | - | Fechas deshabilitadas (JSON array) |
 * | `selected-dates` | `string` | - | Fechas seleccionadas (JSON array) |
 * | `range-start` | `string` | - | Inicio del rango (YYYY-MM-DD) |
 * | `range-end` | `string` | - | Fin del rango (YYYY-MM-DD) |
 *
 * ## 💡 Notas Importantes
 *
 * - **Modo por defecto**: SINGLE - selección de una sola fecha
 * - **Idioma**: Soporta internacionalización (es-ES, en-US, etc.)
 * - **Eventos**: Emite `calendar-change` al seleccionar fechas
 * - **Navegación**: Teclado completo y ARIA labels para accesibilidad
 * - **Validación**: Soporta fechas mín/máx y fechas deshabilitadas
 */
const meta: Meta = {
  title: 'Atoms/Calendar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de calendario interactivo Web Component con soporte para selección única, rangos y múltiples fechas.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['single', 'range', 'multiple'],
      description: 'Modo de selección del calendario',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    locale: {
      control: 'text',
      description: 'Idioma del calendario (es-ES, en-US, etc.)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'es-ES' },
      },
    },
    minDate: {
      control: 'text',
      description: 'Fecha mínima seleccionable (YYYY-MM-DD)',
      table: {
        type: { summary: 'string' },
      },
    },
    maxDate: {
      control: 'text',
      description: 'Fecha máxima seleccionable (YYYY-MM-DD)',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con el calendario y sus diferentes modos de selección.
 */
export const Playground: Story = {
  args: {
    variant: 'single',
    locale: 'es-ES',
    minDate: '',
    maxDate: '',
  },
  render: (args) => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .calendar-playground {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 400px;
        margin: 0 auto;
      }
    </style>

    <div class="calendar-playground">
      <sb-ui-calendar
        variant="${args.variant}"
        locale="${args.locale}"
        min-date="${args.minDate || ''}"
        max-date="${args.maxDate || ''}"
        @calendar-change="${(e: CustomEvent) => {
          console.log('Calendar changed:', e.detail);
        }}"
      ></sb-ui-calendar>

      <div
        style="margin-top: 1rem; padding: 1rem; background: var(--sb-ui-color-grayscale-L300); border-radius: 8px;"
      >
        <strong>Evento:</strong> Revisa la consola para ver los cambios
      </div>
    </div>
  `,
};

/**
 * ## Single Selection
 *
 * Modo de selección única - selecciona una sola fecha a la vez.
 */
export const SingleSelection: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección Simple</h3>
      <sb-ui-calendar
        variant="single"
        locale="es-ES"
        @calendar-change="${(e: CustomEvent) => {
          const output = document.getElementById('output-single');
          if (output) {
            output.textContent = `Fecha seleccionada: ${JSON.stringify(e.detail, null, 2)}`;
          }
        }}"
      ></sb-ui-calendar>
      <div class="output" id="output-single">Selecciona una fecha...</div>
    </div>
  `,
};

/**
 * ## Range Selection
 *
 * Modo de selección de rango - selecciona un rango de fechas (inicio y fin).
 */
export const RangeSelection: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección de Rango</h3>
      <sb-ui-calendar
        variant="range"
        locale="es-ES"
        @calendar-change="${(e: CustomEvent) => {
          const output = document.getElementById('output-range');
          if (output) {
            output.textContent = `Rango: ${JSON.stringify(e.detail, null, 2)}`;
          }
        }}"
      ></sb-ui-calendar>
      <div class="output" id="output-range">Selecciona un rango de fechas...</div>
    </div>
  `,
};

/**
 * ## Multiple Selection
 *
 * Modo de selección múltiple - selecciona múltiples fechas individuales.
 */
export const MultipleSelection: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .calendar-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
      }
      .output {
        margin-top: 1rem;
        padding: 1rem;
        background: var(--sb-ui-color-grayscale-L300);
        border-radius: 8px;
        font-family: monospace;
        max-height: 200px;
        overflow-y: auto;
      }
    </style>

    <div class="calendar-demo">
      <h3>Selección Múltiple</h3>
      <sb-ui-calendar
        variant="multiple"
        locale="es-ES"
        @calendar-change="${(e: CustomEvent) => {
          const output = document.getElementById('output-multiple');
          if (output) {
            output.textContent = `Fechas: ${JSON.stringify(e.detail, null, 2)}`;
          }
        }}"
      ></sb-ui-calendar>
      <div class="output" id="output-multiple">Selecciona múltiples fechas...</div>
    </div>
  `,
};

/**
 * ## Con Validación (Min/Max)
 *
 * Calendario con fechas mínimas y máximas.
 */
export const ConValidacion: Story = {
  render: () => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 7); // 7 días atrás
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 30); // 30 días adelante

    return html`
      <script type="module">
        import '@sb-ui/molecules';
      </script>
      <style>
        .calendar-demo {
          font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .info-box {
          padding: 1rem;
          background: var(--sb-ui-color-feedback-info-L400);
          border-left: 4px solid var(--sb-ui-color-feedback-info-base);
          border-radius: 4px;
          margin-bottom: 1rem;
        }
      </style>

      <div class="calendar-demo">
        <h3>Calendario con Restricciones</h3>
        <div class="info-box">
          <strong>Restricciones:</strong>
          <ul style="margin: 0.5rem 0 0 0; padding-left: 1.5rem;">
            <li>Fecha mínima: ${minDate.toLocaleDateString('es-ES')}</li>
            <li>Fecha máxima: ${maxDate.toLocaleDateString('es-ES')}</li>
          </ul>
        </div>
        <sb-ui-calendar
          variant="single"
          locale="es-ES"
          min-date="${minDate.toISOString().split('T')[0]}"
          max-date="${maxDate.toISOString().split('T')[0]}"
        ></sb-ui-calendar>
      </div>
    `;
  },
};

/**
 * ## Diferentes Idiomas
 *
 * El calendario soporta múltiples idiomas usando el atributo `locale`.
 */
export const DiferentesIdiomas: Story = {
  render: () => html`
    <script type="module">
      import '@sb-ui/molecules';
    </script>
    <style>
      .locales-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
      }
      .locale-demo {
        padding: 1rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }
      .locale-demo h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
    </style>

    <div class="locales-demo">
      <div class="locale-demo">
        <h4>Español (es-ES)</h4>
        <sb-ui-calendar variant="single" locale="es-ES"></sb-ui-calendar>
      </div>

      <div class="locale-demo">
        <h4>English (en-US)</h4>
        <sb-ui-calendar variant="single" locale="en-US"></sb-ui-calendar>
      </div>

      <div class="locale-demo">
        <h4>Français (fr-FR)</h4>
        <sb-ui-calendar variant="single" locale="fr-FR"></sb-ui-calendar>
      </div>
    </div>
  `,
};

