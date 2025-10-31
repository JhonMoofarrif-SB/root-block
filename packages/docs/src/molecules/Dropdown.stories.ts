import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Dropdown Component (Web Component - En Desarrollo)
 *
 * Componente de dropdown del Seguros Bolivar UI Design System.
 *
 * ⚠️ **Nota**: Este Web Component está actualmente en desarrollo. Por ahora, se recomienda usar el componente `<select class="sb-ui-select">` que está completamente funcional y estilizado.
 *
 * ## 📋 Referencia Rápida
 *
 * | Elemento | Clase CSS | Ejemplo |
 * |----------|-----------|---------|
 * | Select nativo | `.sb-ui-select` | `<select class="sb-ui-select">...</select>` |
 * | Dropdown (WC) | `<sb-ui-dropdown>` | `<sb-ui-dropdown value="..."></sb-ui-dropdown>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Select nativo**: Completamente funcional con estilos del Design System
 * - **Dropdown WC**: Placeholder básico, funcionalidad completa en desarrollo
 * - **Recomendación**: Usar `<select class="sb-ui-select">` para producción
 * - **Soporte**: Multi-select, grupos (optgroup), estados (disabled, error)
 */
const meta: Meta = {
  title: 'Molecules/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de dropdown/select. Se recomienda usar el select nativo estilizado que está completamente funcional.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor del dropdown',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Seleccionar opción' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Select Nativo (Recomendado)
 *
 * El componente select nativo está completamente estilizado y funcional.
 */
export const SelectNativo: Story = {
  render: () => html`
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
        <h4>Select Básico</h4>
        <label class="sb-ui-input-label">País</label>
        <select
          class="sb-ui-select"
          @change="${(e: Event) => {
            const output = document.getElementById('output-basic');
            const target = e.target as HTMLSelectElement;
            if (output) {
              output.textContent = `Seleccionado: ${target.options[target.selectedIndex].text} (${target.value})`;
            }
          }}"
        >
          <option value="">Seleccionar país</option>
          <option value="co">Colombia</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
          <option value="cl">Chile</option>
          <option value="pe">Perú</option>
        </select>
        <div class="output" id="output-basic">No hay selección</div>
      </div>

      <div class="demo-section">
        <h4>Select con Grupos</h4>
        <label class="sb-ui-input-label">Categoría</label>
        <select class="sb-ui-select">
          <option value="">Seleccionar categoría</option>
          <optgroup label="Seguros de Vida">
            <option value="vida-basico">Vida Básico</option>
            <option value="vida-premium">Vida Premium</option>
          </optgroup>
          <optgroup label="Seguros de Auto">
            <option value="auto-basico">Auto Básico</option>
            <option value="auto-premium">Auto Premium</option>
          </optgroup>
          <optgroup label="Seguros de Hogar">
            <option value="hogar-basico">Hogar Básico</option>
            <option value="hogar-premium">Hogar Premium</option>
          </optgroup>
        </select>
      </div>

      <div class="demo-section">
        <h4>Select Múltiple</h4>
        <label class="sb-ui-input-label">Intereses (mantén Ctrl/Cmd)</label>
        <select
          class="sb-ui-select"
          multiple
          style="min-height: 120px;"
          @change="${(e: Event) => {
            const output = document.getElementById('output-multiple');
            const target = e.target as HTMLSelectElement;
            const selected = Array.from(target.selectedOptions).map((opt) => opt.text);
            if (output) {
              output.textContent =
                selected.length > 0
                  ? `Seleccionados: ${selected.join(', ')}`
                  : 'No hay selección';
            }
          }}"
        >
          <option value="deportes">Deportes</option>
          <option value="tecnologia">Tecnología</option>
          <option value="viajes">Viajes</option>
          <option value="cocina">Cocina</option>
          <option value="musica">Música</option>
          <option value="lectura">Lectura</option>
        </select>
        <div class="output" id="output-multiple">No hay selección</div>
      </div>
    </div>
  `,
};

/**
 * ## Estados del Select
 *
 * El select nativo soporta diferentes estados.
 */
export const EstadosDelSelect: Story = {
  render: () => html`
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
        <label class="sb-ui-input-label">Tipo de seguro</label>
        <select class="sb-ui-select">
          <option value="">Seleccionar opción</option>
          <option value="vida">Vida</option>
          <option value="auto">Auto</option>
          <option value="hogar">Hogar</option>
        </select>
      </div>

      <div class="demo-section">
        <h4>Disabled</h4>
        <label class="sb-ui-input-label">Opción bloqueada</label>
        <select class="sb-ui-select" disabled>
          <option value="">No disponible</option>
          <option value="1">Opción 1</option>
        </select>
      </div>

      <div class="demo-section">
        <h4>Con Valor Preseleccionado</h4>
        <label class="sb-ui-input-label">Ciudad</label>
        <select class="sb-ui-select">
          <option value="">Seleccionar ciudad</option>
          <option value="bog">Bogotá</option>
          <option value="med" selected>Medellín (Preseleccionada)</option>
          <option value="cal">Cali</option>
        </select>
      </div>
    </div>
  `,
};

/**
 * ## Web Component Dropdown (Placeholder)
 *
 * El Web Component dropdown está en desarrollo. Actualmente es un placeholder básico.
 */
export const WebComponentPlaceholder: Story = {
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
      .info-box {
        padding: 1rem;
        background: var(--sb-ui-color-feedback-warning-L400);
        border-left: 4px solid var(--sb-ui-color-feedback-warning-base);
        border-radius: 4px;
        margin-bottom: 1.5rem;
      }
      .demo-section {
        margin-bottom: 2rem;
        padding: 1rem;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    </style>

    <div class="demo">
      <div class="info-box">
        <strong>🚧 En Desarrollo:</strong> Este Web Component es un placeholder básico. La
        funcionalidad completa (dropdown interactivo, búsqueda, multi-select) estará disponible en
        futuras versiones.
      </div>

      <div class="demo-section">
        <h4>Dropdown Básico (Placeholder)</h4>
        <label class="sb-ui-input-label">Opción</label>
        <sb-ui-dropdown placeholder="Seleccionar opción"></sb-ui-dropdown>
        <p style="color: var(--sb-ui-color-grayscale-base); font-size: 0.875rem; margin-top: 0.5rem;">
          Este es el Web Component básico. Por ahora solo muestra el placeholder.
        </p>
      </div>

      <div class="demo-section">
        <h4>Con Valor Inicial</h4>
        <label class="sb-ui-input-label">Opción seleccionada</label>
        <sb-ui-dropdown value="Opción 1"></sb-ui-dropdown>
        <p style="color: var(--sb-ui-color-grayscale-base); font-size: 0.875rem; margin-top: 0.5rem;">
          El componente puede recibir un valor inicial.
        </p>
      </div>
    </div>
  `,
};

/**
 * ## Formulario Completo
 *
 * Ejemplo de select integrado en un formulario.
 */
export const FormularioCompleto: Story = {
  render: () => html`
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
      <h3>Solicitud de Seguro</h3>

      <form
        @submit="${(e: Event) => {
          e.preventDefault();
          alert('Formulario enviado');
        }}"
      >
        <div class="form-field">
          <label class="sb-ui-input-label sb-ui-input-label--required">Tipo de Seguro</label>
          <select class="sb-ui-select" required>
            <option value="">Seleccionar tipo</option>
            <option value="vida">Seguro de Vida</option>
            <option value="auto">Seguro de Auto</option>
            <option value="hogar">Seguro de Hogar</option>
            <option value="salud">Seguro de Salud</option>
          </select>
        </div>

        <div class="form-field">
          <label class="sb-ui-input-label sb-ui-input-label--required">Plan</label>
          <select class="sb-ui-select" required>
            <option value="">Seleccionar plan</option>
            <option value="basico">Básico</option>
            <option value="estandar">Estándar</option>
            <option value="premium">Premium</option>
          </select>
        </div>

        <div class="form-field">
          <label class="sb-ui-input-label sb-ui-input-label--required">Cobertura</label>
          <select class="sb-ui-select" required>
            <option value="">Seleccionar cobertura</option>
            <optgroup label="Individual">
              <option value="individual">Solo para mí</option>
            </optgroup>
            <optgroup label="Familiar">
              <option value="pareja">Pareja</option>
              <option value="familia">Familia completa</option>
            </optgroup>
          </select>
        </div>

        <div class="form-actions">
          <button type="submit" class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">
            Solicitar Cotización
          </button>
          <button type="button" class="sb-ui-button sb-ui-button--tertiary">Cancelar</button>
        </div>
      </form>
    </div>
  `,
};

/**
 * ## Código de Ejemplo
 *
 * Ejemplos de código para usar el select nativo y el Web Component.
 */
export const CodigoDeEjemplo: Story = {
  render: () => html`
    <style>
      .code-demo {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
      }
      .code-section {
        margin-bottom: 2rem;
        background: white;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .code-section h4 {
        margin: 0 0 1rem 0;
        color: var(--sb-ui-color-primary-base);
      }
      .code-snippet {
        background: #f5f5f5;
        padding: 1rem;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.875rem;
        overflow-x: auto;
        border: 1px solid var(--sb-ui-color-grayscale-L200);
      }
    </style>

    <div class="code-demo">
      <div class="code-section">
        <h4>Select Nativo (Recomendado)</h4>
        <div class="code-snippet">
&lt;!-- HTML --&gt;
&lt;label for="my-select" class="sb-ui-input-label"&gt;País&lt;/label&gt;
&lt;select id="my-select" class="sb-ui-select"&gt;
  &lt;option value=""&gt;Seleccionar país&lt;/option&gt;
  &lt;option value="co"&gt;Colombia&lt;/option&gt;
  &lt;option value="mx"&gt;México&lt;/option&gt;
  &lt;option value="ar"&gt;Argentina&lt;/option&gt;
&lt;/select&gt;

&lt;script&gt;
  const select = document.getElementById('my-select');
  select.addEventListener('change', (e) => {
    console.log('Seleccionado:', e.target.value);
  });
&lt;/script&gt;
        </div>
      </div>

      <div class="code-section">
        <h4>Web Component Dropdown (En desarrollo)</h4>
        <div class="code-snippet">
&lt;!-- HTML --&gt;
&lt;script type="module"&gt;
  import '@sb-ui/molecules';
&lt;/script&gt;

&lt;sb-ui-dropdown 
  placeholder="Seleccionar opción"
  value="Opción 1"&gt;
&lt;/sb-ui-dropdown&gt;

&lt;script&gt;
  // API completa estará disponible en futuras versiones
  const dropdown = document.querySelector('sb-ui-dropdown');
  console.log(dropdown.value);
&lt;/script&gt;
        </div>
      </div>
    </div>
  `,
};

