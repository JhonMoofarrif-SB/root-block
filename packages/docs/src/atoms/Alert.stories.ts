import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Alert Component
 * 
 * Componente de alerta versátil del Root Block Design System con diferentes estados, estilos y opciones de interactividad.
 * 
 * ## 📋 Referencia Rápida de Clases
 * 
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes de Estado** | | |
 * | Alerta informativa (default) | `.rb-alert` | `<div class="rb-alert">Info</div>` |
 * | Alerta de éxito | `.rb-alert--success` | `<div class="rb-alert rb-alert--success">Success</div>` |
 * | Alerta de advertencia | `.rb-alert--warning` | `<div class="rb-alert rb-alert--warning">Warning</div>` |
 * | Alerta de error | `.rb-alert--error` | `<div class="rb-alert rb-alert--error">Error</div>` |
 * | **Variantes de Estilo** | | |
 * | Con fondo (default) | Sin clase adicional | `<div class="rb-alert">Default</div>` |
 * | Sin fondo, solo borde | `.rb-alert--no-bg` | `<div class="rb-alert rb-alert--no-bg">No BG</div>` |
 * | Solo borde exterior | `.rb-alert--outlined` | `<div class="rb-alert rb-alert--outlined">Outlined</div>` |
 * | Fondo sólido | `.rb-alert--filled` | `<div class="rb-alert rb-alert--filled">Filled</div>` |
 * | **Tamaños** | | |
 * | Pequeño | `.rb-alert--small` | `<div class="rb-alert rb-alert--small">Small</div>` |
 * | Mediano (default) | `.rb-alert--medium` o sin clase | `<div class="rb-alert">Medium</div>` |
 * | Grande | `.rb-alert--large` | `<div class="rb-alert rb-alert--large">Large</div>` |
 * | **Interactividad** | | |
 * | Con botón cerrar | `.rb-alert--dismissible` | `<div class="rb-alert rb-alert--dismissible">...</div>` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.rb-alert--rounded` | `<div class="rb-alert rb-alert--rounded">Rounded</div>` |
 * | Estilo minimal | `.rb-alert--minimal` | `<div class="rb-alert rb-alert--minimal">Minimal</div>` |
 * | Tipo toast | `.rb-alert--toast` | `<div class="rb-alert rb-alert--toast">Toast</div>` |
 * | Tipo banner | `.rb-alert--banner` | `<div class="rb-alert rb-alert--banner">Banner</div>` |
 * 
 * ## 💡 Notas Importantes
 * 
 * - **Estado por defecto**: INFO - color primario con fondo suave
 * - **Tamaño por defecto**: MEDIUM - no necesitas especificar la clase
 * - **Estructura**: Usa `rb-alert-icon`, `rb-alert-content`, `rb-alert-title`, `rb-alert-message`
 * - **Iconos automáticos**: Los iconos se agregan automáticamente por CSS según el estado (✓, i, ⚠, ✕)
 * - **Elemento de icono vacío**: El `<div class="rb-alert-icon">` debe estar vacío, el CSS agrega el contenido
 * - **Botón cerrar**: Usa `rb-alert-close` con `aria-label="Cerrar"`
 * - **Combinaciones**: Puedes combinar estado + estilo + tamaño + modificadores
 * 
 * ## 🎯 Ejemplo de Estructura Completa
 * 
 * ```html
 * <div class="rb-alert rb-alert--success rb-alert--large rb-alert--dismissible">
 *   <div class="rb-alert-icon"></div> <!-- ¡Vacío! El CSS agrega ✓ automáticamente -->
 *   <div class="rb-alert-content">
 *     <div class="rb-alert-title">Éxito</div>
 *     <div class="rb-alert-message">Operación completada correctamente.</div>
 *   </div>
 *   <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
 * </div>
 * ```
 */
const meta: Meta = {
  title: 'Atoms/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente de alerta versátil con 4 estados principales (info, success, warning, error), 3 estilos de fondo y opciones de interactividad.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Tipo de alerta (estado)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño de la alerta',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    styleVariant: {
      control: 'select',
      options: ['default', 'no-bg', 'outlined', 'filled'],
      description: 'Variante de estilo (fondo)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    title: {
      control: 'text',
      description: 'Título de la alerta',
      table: {
        type: { summary: 'string' },
      },
    },
    message: {
      control: 'text',
      description: 'Mensaje de la alerta',
      table: {
        type: { summary: 'string' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Permite cerrar la alerta',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar icono',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
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
    modifier: {
      control: 'select',
      options: ['none', 'minimal', 'toast', 'banner', 'compact'],
      description: 'Modificador visual',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 * 
 * Experimenta con todas las combinaciones de la alerta usando los controles interactivos
 * en el panel inferior. Puedes ajustar estado, tamaño, estilo, contenido y más.
 */
export const Playground: Story = {
  args: {
    variant: 'info',
    size: 'medium',
    styleVariant: 'default',
    title: 'Título de la alerta',
    message: 'Este es el mensaje de la alerta que explica lo que está sucediendo.',
    dismissible: false,
    showIcon: true,
    rounded: false,
    modifier: 'none',
  },
  render: (args) => {
    // Determinar las clases de la alerta
    const classes = [
      'rb-alert',
      `rb-alert--${args.variant}`, // Siempre incluir la variante, incluso si es 'info'
      args.size !== 'medium' ? `rb-alert--${args.size}` : '',
      args.styleVariant !== 'default' ? `rb-alert--${args.styleVariant}` : '',
      args.dismissible ? 'rb-alert--dismissible' : '',
      args.rounded ? 'rb-alert--rounded' : '',
      args.modifier !== 'none' ? `rb-alert--${args.modifier}` : '',
    ].filter(Boolean).join(' ');

    // Determinar el icono según la variante
    const getIcon = (variant: string) => {
      // El CSS ya maneja los iconos automáticamente con ::before
      // Solo retornamos un div vacío que será poblado por CSS
      return '';
    };

    return html`
      <div style="max-width: 600px;">
        <div class="${classes}">
          ${args.showIcon ? html`
            <div class="rb-alert-icon">${getIcon(args.variant)}</div>
          ` : ''}
          
          <div class="rb-alert-content">
            ${args.title ? html`
              <div class="rb-alert-title">${args.title}</div>
            ` : ''}
            ${args.message ? html`
              <div class="rb-alert-message">${args.message}</div>
            ` : ''}
          </div>
          
          ${args.dismissible ? html`
            <button 
              class="rb-alert-close" 
              type="button" 
              aria-label="Cerrar"
              @click="${(e: Event) => {
                const alertEl = (e.target as HTMLElement).closest('.rb-alert');
                if (alertEl) {
                  alertEl.style.display = 'none';
                }
              }}"
            >×</button>
          ` : ''}
        </div>
      </div>
    `;
  },
};

/**
 * ## Estados - Matriz Completa de Combinaciones
 * 
 * Matriz completa de la alerta mostrando todas las combinaciones de:
 * - **4 Estados**: Info (default), Success, Warning, Error
 * - **4 Variantes de Estilo**: Default (con fondo), No-BG, Outlined, Filled
 * - **2 Opciones**: Con/Sin botón cerrar
 * 
 * **Total: 32 combinaciones** (4 × 4 × 2)
 */
export const Estados: Story = {
  render: () => html`
    <style>
      .matrix-container {
        font-family: var(--rb-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--rb-color-grayscale-L400, #fafafa);
      }
      
      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      
      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--rb-color-primary-base, #007acc);
      }
      
      .matrix-subtitle {
        font-size: 1rem;
        color: var(--rb-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }
      
      .alert-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }
      
      .alert-demo {
        padding: 1rem;
        border: 1px solid var(--rb-color-grayscale-L200, #e0e0e0);
        border-radius: 8px;
        background: var(--rb-color-grayscale-white, #fff);
      }
      
      .alert-demo-title {
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--rb-color-grayscale-D100, #333);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    </style>
    
    <div class="matrix-container">
      <!-- ========================================
           SECCIÓN 1: DEFAULT (Con fondo)
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante DEFAULT - Con Fondo</h2>
        <p class="matrix-subtitle">Estilo por defecto con fondo suave de color. Máxima prominencia visual.</p>
        
        <div class="alert-grid">
          <!-- INFO DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Info - Sin Cerrar</div>
            <div class="rb-alert rb-alert--info">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Información</div>
                <div class="rb-alert-message">Este es un mensaje informativo.</div>
              </div>
            </div>
          </div>
          
          <div class="alert-demo">
            <div class="alert-demo-title">Info - Con Cerrar</div>
            <div class="rb-alert rb-alert--info rb-alert--dismissible">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Información</div>
                <div class="rb-alert-message">Mensaje con botón cerrar.</div>
              </div>
              <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
          
          <!-- SUCCESS DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Success - Sin Cerrar</div>
            <div class="rb-alert rb-alert--success">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Éxito</div>
                <div class="rb-alert-message">Operación completada.</div>
              </div>
            </div>
          </div>
          
          <div class="alert-demo">
            <div class="alert-demo-title">Success - Con Cerrar</div>
            <div class="rb-alert rb-alert--success rb-alert--dismissible">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Éxito</div>
                <div class="rb-alert-message">Operación exitosa.</div>
              </div>
              <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
          
          <!-- WARNING DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Warning - Sin Cerrar</div>
            <div class="rb-alert rb-alert--warning">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Advertencia</div>
                <div class="rb-alert-message">Revisa la información.</div>
              </div>
            </div>
          </div>
          
          <div class="alert-demo">
            <div class="alert-demo-title">Warning - Con Cerrar</div>
            <div class="rb-alert rb-alert--warning rb-alert--dismissible">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Advertencia</div>
                <div class="rb-alert-message">Revisa los datos.</div>
              </div>
              <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
          
          <!-- ERROR DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Error - Sin Cerrar</div>
            <div class="rb-alert rb-alert--error">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Error</div>
                <div class="rb-alert-message">Ha ocurrido un error.</div>
              </div>
            </div>
          </div>
          
          <div class="alert-demo">
            <div class="alert-demo-title">Error - Con Cerrar</div>
            <div class="rb-alert rb-alert--error rb-alert--dismissible">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Error</div>
                <div class="rb-alert-message">Error crítico.</div>
              </div>
              <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================
           SECCIÓN 2: NO-BG (Sin fondo)
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante NO-BG - Sin Fondo</h2>
        <p class="matrix-subtitle">Sin fondo, solo borde izquierdo de color. Mínima prominencia visual.</p>
        
        <div class="alert-grid">
          <!-- INFO NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Info No-BG - Sin Cerrar</div>
            <div class="rb-alert rb-alert--info rb-alert--no-bg">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Información</div>
                <div class="rb-alert-message">Sin fondo, solo borde.</div>
              </div>
            </div>
          </div>
          
          <div class="alert-demo">
            <div class="alert-demo-title">Info No-BG - Con Cerrar</div>
            <div class="rb-alert rb-alert--info rb-alert--no-bg rb-alert--dismissible">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Información</div>
                <div class="rb-alert-message">Sin fondo con cerrar.</div>
              </div>
              <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
          
          <!-- SUCCESS NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Success No-BG - Sin Cerrar</div>
            <div class="rb-alert rb-alert--success rb-alert--no-bg">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Éxito</div>
                <div class="rb-alert-message">Éxito sin fondo.</div>
              </div>
            </div>
          </div>
          
          <div class="alert-demo">
            <div class="alert-demo-title">Success No-BG - Con Cerrar</div>
            <div class="rb-alert rb-alert--success rb-alert--no-bg rb-alert--dismissible">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Éxito</div>
                <div class="rb-alert-message">Éxito sin fondo.</div>
              </div>
              <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
          
          <!-- WARNING NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Warning No-BG - Sin Cerrar</div>
            <div class="rb-alert rb-alert--warning rb-alert--no-bg">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Advertencia</div>
                <div class="rb-alert-message">Advertencia sin fondo.</div>
              </div>
            </div>
          </div>
          
          <div class="alert-demo">
            <div class="alert-demo-title">Warning No-BG - Con Cerrar</div>
            <div class="rb-alert rb-alert--warning rb-alert--no-bg rb-alert--dismissible">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Advertencia</div>
                <div class="rb-alert-message">Advertencia sin fondo.</div>
              </div>
              <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
          
          <!-- ERROR NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Error No-BG - Sin Cerrar</div>
            <div class="rb-alert rb-alert--error rb-alert--no-bg">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Error</div>
                <div class="rb-alert-message">Error sin fondo.</div>
              </div>
            </div>
          </div>
          
          <div class="alert-demo">
            <div class="alert-demo-title">Error No-BG - Con Cerrar</div>
            <div class="rb-alert rb-alert--error rb-alert--no-bg rb-alert--dismissible">
              <div class="rb-alert-icon"></div>
              <div class="rb-alert-content">
                <div class="rb-alert-title">Error</div>
                <div class="rb-alert-message">Error sin fondo.</div>
              </div>
              <button class="rb-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================
           RESUMEN Y NOTAS
           ======================================== -->
      <div class="matrix-section" style="background: #fff9e6; border-left: 4px solid #ffa000;">
        <h3 style="margin-top: 0; color: #e65100;">📝 Notas Importantes</h3>
        <ul style="line-height: 1.8; color: #333;">
          <li><strong>Estado por defecto:</strong> INFO es el estado por defecto (no necesitas especificar <code>.rb-alert--info</code>).</li>
          <li><strong>Estilo por defecto:</strong> Con fondo suave es el estilo por defecto.</li>
          <li><strong>Iconos automáticos:</strong> Los iconos se generan automáticamente por CSS usando pseudo-elementos <code>::before</code>.</li>
          <li><strong>Contenedor de icono vacío:</strong> El elemento <code>&lt;div class="rb-alert-icon"&gt;</code> debe estar completamente vacío.</li>
          <li><strong>Iconos por estado:</strong> Info (i), Success (✓), Warning (⚠), Error (✕) se agregan automáticamente.</li>
          <li><strong>Botón cerrar:</strong> Usa <code>.rb-alert--dismissible</code> para mostrar el botón cerrar.</li>
          <li><strong>Estructura:</strong> Los iconos y contenido usan <code>rb-alert-icon</code>, <code>rb-alert-content</code>, <code>rb-alert-title</code>, <code>rb-alert-message</code>.</li>
          <li><strong>Accesibilidad:</strong> El botón cerrar incluye <code>aria-label="Cerrar"</code> para lectores de pantalla.</li>
          <li><strong>Total de Combinaciones:</strong> 4 estados × 4 estilos × 2 opciones = <strong>32 combinaciones</strong> de alerta.</li>
          <li><strong>Funcionalidad:</strong> El botón cerrar tiene JavaScript para ocultar la alerta al hacer clic.</li>
        </ul>
      </div>
    </div>
  `,
};
