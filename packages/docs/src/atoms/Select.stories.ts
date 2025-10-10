import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Select',
  parameters: {
    docs: {
      description: {
        component: 'Componente de selección con estilos nativos y personalizados. Incluye soporte para select simple, múltiple y con iconos.',
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
        <label class="rb-select-label">Select Normal</label>
        <select class="rb-select">
          <option value="">Selecciona una opción</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
          <option value="3">Opción 3</option>
        </select>
        <div class="rb-select-helper">Selección básica</div>
      </div>
      
      <div>
        <label class="rb-select-label rb-select-label--required">Select Requerido</label>
        <select class="rb-select" required>
          <option value="">Selecciona obligatorio</option>
          <option value="1">Opción A</option>
          <option value="2">Opción B</option>
        </select>
        <div class="rb-select-helper">Campo obligatorio</div>
      </div>
      
      <div>
        <label class="rb-select-label">Select con Error</label>
        <select class="rb-select rb-select--error">
          <option value="">Selección con error</option>
          <option value="1">Opción inválida</option>
        </select>
        <div class="rb-select-helper rb-select-helper--error">Este campo tiene un error</div>
      </div>
      
      <div>
        <label class="rb-select-label">Select Exitoso</label>
        <select class="rb-select rb-select--success">
          <option value="">Selección exitosa</option>
          <option value="1" selected>Opción válida</option>
        </select>
        <div class="rb-select-helper rb-select-helper--success">Campo validado correctamente</div>
      </div>
      
      <div>
        <label class="rb-select-label">Select Deshabilitado</label>
        <select class="rb-select" disabled>
          <option value="">Campo deshabilitado</option>
          <option value="1">No disponible</option>
        </select>
        <div class="rb-select-helper">Este campo está deshabilitado</div>
      </div>
      
      <div>
        <label class="rb-select-label">Select con Advertencia</label>
        <select class="rb-select rb-select--warning">
          <option value="">Selección con advertencia</option>
          <option value="1">Revisar opción</option>
        </select>
        <div class="rb-select-helper rb-select-helper--warning">Advertencia: revisa esta selección</div>
      </div>
    </div>
  `,
};

// Tamaños
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-select-label">Small</label>
        <select class="rb-select rb-select--small">
          <option value="">Select pequeño</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Tamaño pequeño</div>
      </div>
      
      <div>
        <label class="rb-select-label">Medium (Default)</label>
        <select class="rb-select rb-select--medium">
          <option value="">Select mediano</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Tamaño mediano (por defecto)</div>
      </div>
      
      <div>
        <label class="rb-select-label">Large</label>
        <select class="rb-select rb-select--large">
          <option value="">Select grande</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Tamaño grande</div>
      </div>
    </div>
  `,
};

// Con iconos
export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-select-label">Con Icono Izquierdo</label>
        <div class="rb-select-container">
          <select class="rb-select rb-select--with-icon-left">
            <option value="">Selecciona país</option>
            <option value="co">🇨🇴 Colombia</option>
            <option value="mx">🇲🇽 México</option>
            <option value="ar">🇦🇷 Argentina</option>
          </select>
          <span class="rb-select-icon rb-select-icon--left">🌍</span>
        </div>
        <div class="rb-select-helper">Select con icono de país</div>
      </div>
      
      <div>
        <label class="rb-select-label">Con Icono Derecho</label>
        <div class="rb-select-container">
          <select class="rb-select rb-select--with-icon-right">
            <option value="">Selecciona categoría</option>
            <option value="tech">Tecnología</option>
            <option value="design">Diseño</option>
            <option value="business">Negocios</option>
          </select>
          <span class="rb-select-icon rb-select-icon--right">📂</span>
        </div>
        <div class="rb-select-helper">Select con icono de categoría</div>
      </div>
      
      <div>
        <label class="rb-select-label">Con Ambos Iconos</label>
        <div class="rb-select-container">
          <select class="rb-select rb-select--with-icon-both">
            <option value="">Selecciona usuario</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
            <option value="guest">Invitado</option>
          </select>
          <span class="rb-select-icon rb-select-icon--left">👤</span>
          <span class="rb-select-icon rb-select-icon--right">✓</span>
        </div>
        <div class="rb-select-helper">Select con iconos de usuario y validación</div>
      </div>
    </div>
  `,
};

// Select múltiple
export const MultipleSelect: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-select-label">Select Múltiple</label>
        <select class="rb-select" multiple>
          <option value="1">Opción 1</option>
          <option value="2" selected>Opción 2 (seleccionada)</option>
          <option value="3">Opción 3</option>
          <option value="4" selected>Opción 4 (seleccionada)</option>
          <option value="5">Opción 5</option>
        </select>
        <div class="rb-select-helper">Mantén Ctrl/Cmd para seleccionar múltiples</div>
      </div>
      
      <div>
        <label class="rb-select-label">Select con Grupos</label>
        <select class="rb-select">
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
        <div class="rb-select-helper">Select con grupos de opciones</div>
      </div>
    </div>
  `,
};

// Modificadores visuales
export const VisualModifiers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-select-label">Rounded</label>
        <select class="rb-select rb-select--rounded">
          <option value="">Select redondeado</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Con bordes redondeados</div>
      </div>
      
      <div>
        <label class="rb-select-label">Inline (Auto Width)</label>
        <div class="rb-select-container rb-select-container--inline">
          <select class="rb-select rb-select--inline">
            <option value="">Auto width</option>
            <option value="1">Opción 1</option>
          </select>
        </div>
        <div class="rb-select-helper">Ancho automático</div>
      </div>
      
      <div>
        <label class="rb-select-label">Minimal</label>
        <select class="rb-select rb-select--minimal">
          <option value="">Select minimal</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Sin bordes ni sombras</div>
      </div>
      
      <div>
        <label class="rb-select-label">Filled</label>
        <select class="rb-select rb-select--filled">
          <option value="">Select filled</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Con fondo gris</div>
      </div>
    </div>
  `,
};

// Tamaños especiales
export const SpecialSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-select-label">Compact</label>
        <select class="rb-select rb-select--compact">
          <option value="">Select compacto</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Tamaño compacto</div>
      </div>
      
      <div>
        <label class="rb-select-label">Prominent</label>
        <select class="rb-select rb-select--prominent">
          <option value="">Select prominente</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Tamaño prominente</div>
      </div>
    </div>
  `,
};

// Select groups
export const SelectGroups: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-select-label">Grupo Horizontal</label>
        <div class="rb-select-group rb-select-group--horizontal">
          <select class="rb-select">
            <option value="">País</option>
            <option value="co">Colombia</option>
            <option value="mx">México</option>
          </select>
          <select class="rb-select">
            <option value="">Ciudad</option>
            <option value="bog">Bogotá</option>
            <option value="med">Medellín</option>
          </select>
        </div>
        <div class="rb-select-helper">Selects conectados horizontalmente</div>
      </div>
      
      <div>
        <label class="rb-select-label">Grupo Vertical</label>
        <div class="rb-select-group rb-select-group--vertical">
          <select class="rb-select">
            <option value="">Categoría</option>
            <option value="tech">Tecnología</option>
            <option value="design">Diseño</option>
          </select>
          <select class="rb-select">
            <option value="">Subcategoría</option>
            <option value="web">Desarrollo Web</option>
            <option value="mobile">Móvil</option>
          </select>
        </div>
        <div class="rb-select-helper">Selects agrupados verticalmente</div>
      </div>
    </div>
  `,
};

// Estados especiales
export const SpecialStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-select-label">Loading State</label>
        <select class="rb-select rb-select--loading">
          <option value="">Cargando opciones...</option>
        </select>
        <div class="rb-select-helper">Estado de carga</div>
      </div>
      
      <div>
        <label class="rb-select-label">No Arrow</label>
        <select class="rb-select rb-select--no-arrow">
          <option value="">Sin flecha</option>
          <option value="1">Opción 1</option>
          <option value="2">Opción 2</option>
        </select>
        <div class="rb-select-helper">Select sin flecha (para custom)</div>
      </div>
    </div>
  `,
};
