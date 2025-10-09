import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Toggle',
  parameters: {
    docs: {
      description: {
        component: 'Componente de toggle/switch con diferentes estilos y animaciones. Incluye soporte para checkbox, button y switch styles.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Estados básicos
export const Default: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Toggle Normal</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle" id="toggle1" />
          <label for="toggle1" class="rb-toggle-label">Activar notificaciones</label>
        </div>
        <div class="rb-toggle-helper">Toggle básico</div>
      </div>
      
      <div>
        <label class="rb-toggle-label rb-toggle-label--required">Toggle Requerido</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle" id="toggle2" required />
          <label for="toggle2" class="rb-toggle-label">Aceptar términos</label>
        </div>
        <div class="rb-toggle-helper">Campo obligatorio</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Toggle con Error</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--error" id="toggle3" />
          <label for="toggle3" class="rb-toggle-label">Toggle con error</label>
        </div>
        <div class="rb-toggle-helper rb-toggle-helper--error">Este toggle tiene un error</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Toggle Exitoso</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--success" id="toggle4" checked />
          <label for="toggle4" class="rb-toggle-label">Toggle exitoso</label>
        </div>
        <div class="rb-toggle-helper rb-toggle-helper--success">Toggle validado correctamente</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Toggle Deshabilitado</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle" id="toggle5" disabled />
          <label for="toggle5" class="rb-toggle-label">Toggle deshabilitado</label>
        </div>
        <div class="rb-toggle-helper">Este toggle está deshabilitado</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Toggle con Advertencia</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--warning" id="toggle6" />
          <label for="toggle6" class="rb-toggle-label">Toggle con advertencia</label>
        </div>
        <div class="rb-toggle-helper rb-toggle-helper--warning">Advertencia: revisa este toggle</div>
      </div>
    </div>
  `,
};

// Tamaños
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Small</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--small" id="toggle-small" />
          <label for="toggle-small" class="rb-toggle-label">Toggle pequeño</label>
        </div>
        <div class="rb-toggle-helper">Tamaño pequeño</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Medium (Default)</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--medium" id="toggle-medium" />
          <label for="toggle-medium" class="rb-toggle-label">Toggle mediano</label>
        </div>
        <div class="rb-toggle-helper">Tamaño mediano (por defecto)</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Large</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--large" id="toggle-large" />
          <label for="toggle-large" class="rb-toggle-label">Toggle grande</label>
        </div>
        <div class="rb-toggle-helper">Tamaño grande</div>
      </div>
    </div>
  `,
};

// Estilos diferentes
export const Styles: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Switch Style (Default)</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle" id="toggle-switch" />
          <label for="toggle-switch" class="rb-toggle-label">Estilo switch</label>
        </div>
        <div class="rb-toggle-helper">Estilo switch por defecto</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Button Style</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--button" id="toggle-button" />
          <label for="toggle-button" class="rb-toggle-label">Estilo botón</label>
        </div>
        <div class="rb-toggle-helper">Estilo botón</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Checkbox Style</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--checkbox" id="toggle-checkbox" />
          <label for="toggle-checkbox" class="rb-toggle-label">Estilo checkbox</label>
        </div>
        <div class="rb-toggle-helper">Estilo checkbox tradicional</div>
      </div>
    </div>
  `,
};

// Modificadores visuales
export const VisualModifiers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Rounded</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--rounded" id="toggle-rounded" />
          <label for="toggle-rounded" class="rb-toggle-label">Toggle redondeado</label>
        </div>
        <div class="rb-toggle-helper">Con bordes redondeados</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Minimal</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--minimal" id="toggle-minimal" />
          <label for="toggle-minimal" class="rb-toggle-label">Toggle minimal</label>
        </div>
        <div class="rb-toggle-helper">Sin bordes ni sombras</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Filled</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--filled" id="toggle-filled" />
          <label for="toggle-filled" class="rb-toggle-label">Toggle filled</label>
        </div>
        <div class="rb-toggle-helper">Con fondo gris</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Outlined</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--outlined" id="toggle-outlined" />
          <label for="toggle-outlined" class="rb-toggle-label">Toggle outlined</label>
        </div>
        <div class="rb-toggle-helper">Solo borde</div>
      </div>
    </div>
  `,
};

// Tamaños especiales
export const SpecialSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Compact</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--compact" id="toggle-compact" />
          <label for="toggle-compact" class="rb-toggle-label">Toggle compacto</label>
        </div>
        <div class="rb-toggle-helper">Tamaño compacto</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Prominent</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--prominent" id="toggle-prominent" />
          <label for="toggle-prominent" class="rb-toggle-label">Toggle prominente</label>
        </div>
        <div class="rb-toggle-helper">Tamaño prominente</div>
      </div>
    </div>
  `,
};

// Animaciones
export const Animations: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Bounce Animation</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--bounce" id="toggle-bounce" />
          <label for="toggle-bounce" class="rb-toggle-label">Toggle con bounce</label>
        </div>
        <div class="rb-toggle-helper">Animación de rebote</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Pulse Animation</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--pulse" id="toggle-pulse" />
          <label for="toggle-pulse" class="rb-toggle-label">Toggle con pulse</label>
        </div>
        <div class="rb-toggle-helper">Animación de pulso</div>
      </div>
    </div>
  `,
};

// Sin etiqueta
export const NoLabel: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Toggle sin etiqueta</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--no-label" id="toggle-no-label" />
        </div>
        <div class="rb-toggle-helper">Solo el toggle, sin texto</div>
      </div>
      
      <div>
        <label class="rb-toggle-label">Toggle con título</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle" id="toggle-with-title" />
          <div class="rb-toggle-title">Configuración avanzada</div>
          <label for="toggle-with-title" class="rb-toggle-label">Activar modo avanzado</label>
        </div>
        <div class="rb-toggle-helper">Toggle con título descriptivo</div>
      </div>
    </div>
  `,
};

// Toggle groups
export const ToggleGroups: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Grupo Vertical</label>
        <div class="rb-toggle-group rb-toggle-group--vertical">
          <div class="rb-toggle-container">
            <input type="checkbox" class="rb-toggle" id="toggle-group-1" />
            <label for="toggle-group-1" class="rb-toggle-label">Notificaciones push</label>
          </div>
          <div class="rb-toggle-container">
            <input type="checkbox" class="rb-toggle" id="toggle-group-2" />
            <label for="toggle-group-2" class="rb-toggle-label">Notificaciones email</label>
          </div>
          <div class="rb-toggle-container">
            <input type="checkbox" class="rb-toggle" id="toggle-group-3" />
            <label for="toggle-group-3" class="rb-toggle-label">Notificaciones SMS</label>
          </div>
        </div>
        <div class="rb-toggle-helper">Toggles agrupados verticalmente</div>
      </div>
    </div>
  `,
};

// Estados especiales
export const SpecialStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-toggle-label">Loading State</label>
        <div class="rb-toggle-container">
          <input type="checkbox" class="rb-toggle rb-toggle--loading" id="toggle-loading" />
          <label for="toggle-loading" class="rb-toggle-label">Toggle cargando</label>
        </div>
        <div class="rb-toggle-helper">Estado de carga</div>
      </div>
    </div>
  `,
};
