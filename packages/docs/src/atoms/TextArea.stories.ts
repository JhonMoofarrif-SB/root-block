import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/TextArea',
  parameters: {
    docs: {
      description: {
        component: 'Componente de textarea con contador de caracteres y auto-resize. Incluye soporte para diferentes estados, tamaños y modificadores.',
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
        <label class="rb-textarea-label">TextArea Normal</label>
        <textarea class="rb-textarea" placeholder="Escribe tu mensaje aquí..."></textarea>
        <div class="rb-textarea-helper">TextArea básico</div>
      </div>
      
      <div>
        <label class="rb-textarea-label rb-textarea-label--required">TextArea Requerido</label>
        <textarea class="rb-textarea" placeholder="Campo obligatorio" required></textarea>
        <div class="rb-textarea-helper">Campo obligatorio</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">TextArea con Error</label>
        <textarea class="rb-textarea rb-textarea--error" placeholder="Campo con error"></textarea>
        <div class="rb-textarea-helper rb-textarea-helper--error">Este campo tiene un error</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">TextArea Exitoso</label>
        <textarea class="rb-textarea rb-textarea--success" placeholder="Campo exitoso">Texto válido</textarea>
        <div class="rb-textarea-helper rb-textarea-helper--success">Campo validado correctamente</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">TextArea Deshabilitado</label>
        <textarea class="rb-textarea" placeholder="Campo deshabilitado" disabled></textarea>
        <div class="rb-textarea-helper">Este campo está deshabilitado</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">TextArea con Advertencia</label>
        <textarea class="rb-textarea rb-textarea--warning" placeholder="Campo con advertencia"></textarea>
        <div class="rb-textarea-helper rb-textarea-helper--warning">Advertencia: revisa este campo</div>
      </div>
    </div>
  `,
};

// Tamaños
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-textarea-label">Small</label>
        <textarea class="rb-textarea rb-textarea--small" placeholder="TextArea pequeño"></textarea>
        <div class="rb-textarea-helper">Tamaño pequeño</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Medium (Default)</label>
        <textarea class="rb-textarea rb-textarea--medium" placeholder="TextArea mediano"></textarea>
        <div class="rb-textarea-helper">Tamaño mediano (por defecto)</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Large</label>
        <textarea class="rb-textarea rb-textarea--large" placeholder="TextArea grande"></textarea>
        <div class="rb-textarea-helper">Tamaño grande</div>
      </div>
    </div>
  `,
};

// Contador de caracteres
export const WithCounter: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-textarea-label">Con Contador Básico</label>
        <div class="rb-textarea-container">
          <textarea class="rb-textarea rb-textarea--with-counter" maxlength="100" placeholder="Máximo 100 caracteres"></textarea>
          <div class="rb-textarea-counter">0/100</div>
        </div>
        <div class="rb-textarea-helper">Contador básico</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Con Contador y Fondo</label>
        <div class="rb-textarea-container">
          <textarea class="rb-textarea rb-textarea--with-counter" maxlength="200" placeholder="Máximo 200 caracteres"></textarea>
          <div class="rb-textarea-counter rb-textarea-counter--with-bg">0/200</div>
        </div>
        <div class="rb-textarea-helper">Contador con fondo</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Contador con Advertencia</label>
        <div class="rb-textarea-container">
          <textarea class="rb-textarea rb-textarea--with-counter" maxlength="50" placeholder="Máximo 50 caracteres"></textarea>
          <div class="rb-textarea-counter rb-textarea-counter--warning">0/50</div>
        </div>
        <div class="rb-textarea-helper">Contador con estado de advertencia</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Contador con Error</label>
        <div class="rb-textarea-container">
          <textarea class="rb-textarea rb-textarea--with-counter" maxlength="30" placeholder="Máximo 30 caracteres"></textarea>
          <div class="rb-textarea-counter rb-textarea-counter--error">0/30</div>
        </div>
        <div class="rb-textarea-helper">Contador con estado de error</div>
      </div>
    </div>
  `,
};

// Modificadores de resize
export const ResizeModifiers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-textarea-label">No Resize</label>
        <textarea class="rb-textarea rb-textarea--no-resize" placeholder="Sin redimensionar"></textarea>
        <div class="rb-textarea-helper">No se puede redimensionar</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Resize Horizontal</label>
        <textarea class="rb-textarea rb-textarea--resize-horizontal" placeholder="Solo horizontal"></textarea>
        <div class="rb-textarea-helper">Solo redimensionar horizontalmente</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Resize Both</label>
        <textarea class="rb-textarea rb-textarea--resize-both" placeholder="Ambas direcciones"></textarea>
        <div class="rb-textarea-helper">Redimensionar en ambas direcciones</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Auto Resize</label>
        <textarea class="rb-textarea rb-textarea--auto-resize" placeholder="Se ajusta automáticamente"></textarea>
        <div class="rb-textarea-helper">Se ajusta automáticamente al contenido</div>
      </div>
    </div>
  `,
};

// Modificadores visuales
export const VisualModifiers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-textarea-label">Rounded</label>
        <textarea class="rb-textarea rb-textarea--rounded" placeholder="TextArea redondeado"></textarea>
        <div class="rb-textarea-helper">Con bordes redondeados</div>
      </div>
      
      <div>
        <label class="rb-textarea-label">Inline</label>
        <div class="rb-textarea-container rb-textarea-container--inline">
          <textarea class="rb-textarea rb-textarea--inline" placeholder="Auto width"></textarea>
        </div>
        <div class="rb-textarea-helper">Ancho automático</div>
      </div>
    </div>
  `,
};

// TextArea groups
export const TextAreaGroups: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-textarea-label">Grupo Vertical</label>
        <div class="rb-textarea-group rb-textarea-group--vertical">
          <textarea class="rb-textarea" placeholder="Primer textarea"></textarea>
          <textarea class="rb-textarea" placeholder="Segundo textarea"></textarea>
        </div>
        <div class="rb-textarea-helper">TextAreas agrupados verticalmente</div>
      </div>
    </div>
  `,
};

// Estados especiales
export const SpecialStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <div>
        <label class="rb-textarea-label">Loading State</label>
        <textarea class="rb-textarea rb-textarea--loading" placeholder="Cargando..."></textarea>
        <div class="rb-textarea-helper">Estado de carga</div>
      </div>
    </div>
  `,
};
