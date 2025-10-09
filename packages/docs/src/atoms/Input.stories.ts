import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Input',
  parameters: {
    docs: {
      description: {
        component: 'Componente de input con estilos nativos y personalizados. Incluye soporte para diferentes estados, tamaños y modificadores.',
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
        <label class="rb-input-label">Input Normal</label>
        <input class="rb-input" type="text" placeholder="Escribe algo aquí..." />
        <div class="rb-input-helper">Input básico</div>
      </div>
      
      <div>
        <label class="rb-input-label rb-input-label--required">Input Requerido</label>
        <input class="rb-input" type="text" placeholder="Campo obligatorio" required />
        <div class="rb-input-helper">Campo obligatorio</div>
      </div>
      
      <div>
        <label class="rb-input-label">Input con Error</label>
        <input class="rb-input rb-input--error" type="text" placeholder="Campo con error" />
        <div class="rb-input-helper rb-input-helper--error">Este campo tiene un error</div>
      </div>
      
      <div>
        <label class="rb-input-label">Input Exitoso</label>
        <input class="rb-input rb-input--success" type="text" placeholder="Campo exitoso" value="Valor válido" />
        <div class="rb-input-helper rb-input-helper--success">Campo validado correctamente</div>
      </div>
      
      <div>
        <label class="rb-input-label">Input Deshabilitado</label>
        <input class="rb-input" type="text" placeholder="Campo deshabilitado" disabled />
        <div class="rb-input-helper">Este campo está deshabilitado</div>
      </div>
      
      <div>
        <label class="rb-input-label">Input con Advertencia</label>
        <input class="rb-input rb-input--warning" type="text" placeholder="Campo con advertencia" />
        <div class="rb-input-helper rb-input-helper--warning">Advertencia: revisa este campo</div>
      </div>
    </div>
  `,
};

// Tamaños
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-input-label">Small</label>
        <input class="rb-input rb-input--small" type="text" placeholder="Input pequeño" />
        <div class="rb-input-helper">Tamaño pequeño</div>
      </div>
      
      <div>
        <label class="rb-input-label">Medium (Default)</label>
        <input class="rb-input rb-input--medium" type="text" placeholder="Input mediano" />
        <div class="rb-input-helper">Tamaño mediano (por defecto)</div>
      </div>
      
      <div>
        <label class="rb-input-label">Large</label>
        <input class="rb-input rb-input--large" type="text" placeholder="Input grande" />
        <div class="rb-input-helper">Tamaño grande</div>
      </div>
    </div>
  `,
};

// Con iconos
export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-input-label">Con Icono Izquierdo</label>
        <div class="rb-input-container">
          <input class="rb-input rb-input--with-icon-left" type="text" placeholder="Buscar..." />
          <span class="rb-input-icon rb-input-icon--left">🔍</span>
        </div>
        <div class="rb-input-helper">Input con icono de búsqueda</div>
      </div>
      
      <div>
        <label class="rb-input-label">Con Icono Derecho</label>
        <div class="rb-input-container">
          <input class="rb-input rb-input--with-icon-right" type="password" placeholder="Contraseña" />
          <span class="rb-input-icon rb-input-icon--right">👁️</span>
        </div>
        <div class="rb-input-helper">Input con icono de visibilidad</div>
      </div>
      
      <div>
        <label class="rb-input-label">Con Ambos Iconos</label>
        <div class="rb-input-container">
          <input class="rb-input rb-input--with-icon-both" type="email" placeholder="email@ejemplo.com" />
          <span class="rb-input-icon rb-input-icon--left">📧</span>
          <span class="rb-input-icon rb-input-icon--right">✓</span>
        </div>
        <div class="rb-input-helper">Input con iconos de email y validación</div>
      </div>
    </div>
  `,
};

// Tipos de input
export const InputTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-input-label">Email</label>
        <input class="rb-input" type="email" placeholder="usuario@ejemplo.com" />
        <div class="rb-input-helper">Tipo email</div>
      </div>
      
      <div>
        <label class="rb-input-label">Password</label>
        <input class="rb-input" type="password" placeholder="••••••••" />
        <div class="rb-input-helper">Tipo password</div>
      </div>
      
      <div>
        <label class="rb-input-label">Number</label>
        <input class="rb-input" type="number" placeholder="123" />
        <div class="rb-input-helper">Tipo number</div>
      </div>
      
      <div>
        <label class="rb-input-label">Tel</label>
        <input class="rb-input" type="tel" placeholder="+57 300 123 4567" />
        <div class="rb-input-helper">Tipo teléfono</div>
      </div>
      
      <div>
        <label class="rb-input-label">URL</label>
        <input class="rb-input" type="url" placeholder="https://ejemplo.com" />
        <div class="rb-input-helper">Tipo URL</div>
      </div>
      
      <div>
        <label class="rb-input-label">Search</label>
        <input class="rb-input" type="search" placeholder="Buscar..." />
        <div class="rb-input-helper">Tipo búsqueda</div>
      </div>
    </div>
  `,
};

// Modificadores visuales
export const Modifiers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-input-label">Rounded</label>
        <input class="rb-input rb-input--rounded" type="text" placeholder="Input redondeado" />
        <div class="rb-input-helper">Con bordes redondeados</div>
      </div>
      
      <div>
        <label class="rb-input-label">Inline</label>
        <div class="rb-input-container rb-input-container--inline">
          <input class="rb-input rb-input--inline" type="text" placeholder="Auto width" />
        </div>
        <div class="rb-input-helper">Ancho automático</div>
      </div>
    </div>
  `,
};

// Input groups
export const InputGroups: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-input-label">Grupo Horizontal</label>
        <div class="rb-input-group rb-input-group--horizontal">
          <input class="rb-input" type="text" placeholder="Nombre" />
          <input class="rb-input" type="text" placeholder="Apellido" />
        </div>
        <div class="rb-input-helper">Inputs conectados horizontalmente</div>
      </div>
      
      <div>
        <label class="rb-input-label">Grupo Vertical</label>
        <div class="rb-input-group rb-input-group--vertical">
          <input class="rb-input" type="text" placeholder="Calle" />
          <input class="rb-input" type="text" placeholder="Ciudad" />
        </div>
        <div class="rb-input-helper">Inputs agrupados verticalmente</div>
      </div>
    </div>
  `,
};

// Estados especiales
export const SpecialStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-input-label">Loading State</label>
        <input class="rb-input rb-input--loading" type="text" placeholder="Cargando..." />
        <div class="rb-input-helper">Estado de carga</div>
      </div>
    </div>
  `,
};
