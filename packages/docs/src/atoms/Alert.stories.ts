import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Alert',
  parameters: {
    docs: {
      description: {
        component: 'Componente de alerta tipo toast con diferentes estados y estilos. Incluye soporte para cerrar, diferentes tamaños y posicionamiento.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

// Estados básicos
export const Default: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <div class="rb-alert">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Información</div>
          <div class="rb-alert-message">Este es un mensaje de información básico.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--success">
        <div class="rb-alert-icon">✅</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Éxito</div>
          <div class="rb-alert-message">Operación completada exitosamente.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--warning">
        <div class="rb-alert-icon">⚠️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Advertencia</div>
          <div class="rb-alert-message">Por favor, revisa la información ingresada.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--error">
        <div class="rb-alert-icon">❌</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Error</div>
          <div class="rb-alert-message">Ha ocurrido un error inesperado.</div>
        </div>
      </div>
    </div>
  `,
};

// Con botón de cerrar
export const WithCloseButton: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <div class="rb-alert rb-alert--dismissible">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Información</div>
          <div class="rb-alert-message">Este mensaje se puede cerrar.</div>
        </div>
        <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
      </div>
      
      <div class="rb-alert rb-alert--success rb-alert--dismissible">
        <div class="rb-alert-icon">✅</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Éxito</div>
          <div class="rb-alert-message">Operación completada. Puedes cerrar este mensaje.</div>
        </div>
        <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
      </div>
      
      <div class="rb-alert rb-alert--warning rb-alert--dismissible">
        <div class="rb-alert-icon">⚠️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Advertencia</div>
          <div class="rb-alert-message">Revisa la información. Puedes cerrar este mensaje.</div>
        </div>
        <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
      </div>
      
      <div class="rb-alert rb-alert--error rb-alert--dismissible">
        <div class="rb-alert-icon">❌</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Error</div>
          <div class="rb-alert-message">Error crítico. Puedes cerrar este mensaje.</div>
        </div>
        <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
      </div>
    </div>
  `,
};

// Sin fondo (como en la imagen)
export const NoBackground: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <div class="rb-alert rb-alert--no-bg">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Información</div>
          <div class="rb-alert-message">Mensaje sin fondo, solo borde izquierdo.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--success rb-alert--no-bg">
        <div class="rb-alert-icon">✅</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Éxito</div>
          <div class="rb-alert-message">Operación exitosa sin fondo.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--warning rb-alert--no-bg">
        <div class="rb-alert-icon">⚠️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Advertencia</div>
          <div class="rb-alert-message">Advertencia sin fondo.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--error rb-alert--no-bg">
        <div class="rb-alert-icon">❌</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Error</div>
          <div class="rb-alert-message">Error sin fondo.</div>
        </div>
      </div>
    </div>
  `,
};

// Tamaños
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <div class="rb-alert rb-alert--small">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Pequeño</div>
          <div class="rb-alert-message">Alerta de tamaño pequeño.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--medium">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Mediano</div>
          <div class="rb-alert-message">Alerta de tamaño mediano (por defecto).</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--large">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Grande</div>
          <div class="rb-alert-message">Alerta de tamaño grande para mensajes importantes.</div>
        </div>
      </div>
    </div>
  `,
};

// Modificadores visuales
export const VisualModifiers: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <div class="rb-alert rb-alert--minimal">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Minimal</div>
          <div class="rb-alert-message">Alerta con estilo minimal.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--outlined">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Outlined</div>
          <div class="rb-alert-message">Alerta solo con borde.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--filled">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Filled</div>
          <div class="rb-alert-message">Alerta con fondo sólido.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--rounded">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Rounded</div>
          <div class="rb-alert-message">Alerta con bordes redondeados.</div>
        </div>
      </div>
    </div>
  `,
};

// Tipos de alerta
export const AlertTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <div class="rb-alert rb-alert--toast">
        <div class="rb-alert-icon">🍞</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Toast</div>
          <div class="rb-alert-message">Alerta tipo toast para notificaciones.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--banner">
        <div class="rb-alert-icon">🏷️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Banner</div>
          <div class="rb-alert-message">Alerta tipo banner para mensajes importantes.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--compact">
        <div class="rb-alert-icon">📦</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Compact</div>
          <div class="rb-alert-message">Alerta compacta.</div>
        </div>
      </div>
    </div>
  `,
};

// Estados especiales
export const SpecialStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <div class="rb-alert rb-alert--loading">
        <div class="rb-alert-icon">⏳</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Cargando</div>
          <div class="rb-alert-message">Procesando información...</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--no-close">
        <div class="rb-alert-icon">🔒</div>
        <div class="rb-alert-content">
          <div class="rb-alert-title">Sin Cerrar</div>
          <div class="rb-alert-message">Esta alerta no se puede cerrar.</div>
        </div>
      </div>
    </div>
  `,
};

// Alert container (para múltiples toasts)
export const AlertContainer: Story = {
  render: () => html`
    <div style="max-width: 500px;">
      <h3 style="margin-bottom: 1rem;">Container de Alertas</h3>
      <div class="rb-alert-container">
        <div class="rb-alert rb-alert--success rb-alert--dismissible">
          <div class="rb-alert-icon">✅</div>
          <div class="rb-alert-content">
            <div class="rb-alert-title">Éxito</div>
            <div class="rb-alert-message">Primera notificación exitosa.</div>
          </div>
          <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
        </div>
        
        <div class="rb-alert rb-alert--warning rb-alert--dismissible">
          <div class="rb-alert-icon">⚠️</div>
          <div class="rb-alert-content">
            <div class="rb-alert-title">Advertencia</div>
            <div class="rb-alert-message">Segunda notificación de advertencia.</div>
          </div>
          <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
        </div>
        
        <div class="rb-alert rb-alert--error rb-alert--dismissible">
          <div class="rb-alert-icon">❌</div>
          <div class="rb-alert-content">
            <div class="rb-alert-title">Error</div>
            <div class="rb-alert-message">Tercera notificación de error.</div>
          </div>
          <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
        </div>
      </div>
    </div>
  `,
};

// Solo mensaje (sin título)
export const MessageOnly: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <div class="rb-alert">
        <div class="rb-alert-icon">ℹ️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-message">Solo mensaje sin título.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--success">
        <div class="rb-alert-icon">✅</div>
        <div class="rb-alert-content">
          <div class="rb-alert-message">Operación completada exitosamente.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--warning">
        <div class="rb-alert-icon">⚠️</div>
        <div class="rb-alert-content">
          <div class="rb-alert-message">Por favor, revisa la información ingresada.</div>
        </div>
      </div>
      
      <div class="rb-alert rb-alert--error">
        <div class="rb-alert-icon">❌</div>
        <div class="rb-alert-content">
          <div class="rb-alert-message">Ha ocurrido un error inesperado.</div>
        </div>
      </div>
    </div>
  `,
};
