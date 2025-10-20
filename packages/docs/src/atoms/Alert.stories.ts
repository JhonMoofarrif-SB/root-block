import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Alert Component
 *
 * Componente de alerta versátil del Seguros Bolivar UI Design System con diferentes estados, estilos y opciones de interactividad.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes de Estado** | | |
 * | Alerta informativa (default) | `.sb-ui-alert` | `<div class="sb-ui-alert">Info</div>` |
 * | Alerta de éxito | `.sb-ui-alert--success` | `<div class="sb-ui-alert sb-ui-alert--success">Success</div>` |
 * | Alerta de advertencia | `.sb-ui-alert--warning` | `<div class="sb-ui-alert sb-ui-alert--warning">Warning</div>` |
 * | Alerta de error | `.sb-ui-alert--error` | `<div class="sb-ui-alert sb-ui-alert--error">Error</div>` |
 * | **Variantes de Estilo** | | |
 * | Con fondo (default) | Sin clase adicional | `<div class="sb-ui-alert">Default</div>` |
 * | Sin fondo, solo borde | `.sb-ui-alert--no-bg` | `<div class="sb-ui-alert sb-ui-alert--no-bg">No BG</div>` |
 * | Solo borde exterior | `.sb-ui-alert--outlined` | `<div class="sb-ui-alert sb-ui-alert--outlined">Outlined</div>` |
 * | Fondo sólido | `.sb-ui-alert--filled` | `<div class="sb-ui-alert sb-ui-alert--filled">Filled</div>` |
 * | **Tamaños** | | |
 * | Pequeño | `.sb-ui-alert--small` | `<div class="sb-ui-alert sb-ui-alert--small">Small</div>` |
 * | Mediano (default) | `.sb-ui-alert--medium` o sin clase | `<div class="sb-ui-alert">Medium</div>` |
 * | Grande | `.sb-ui-alert--large` | `<div class="sb-ui-alert sb-ui-alert--large">Large</div>` |
 * | **Interactividad** | | |
 * | Con botón cerrar | `.sb-ui-alert--dismissible` | `<div class="sb-ui-alert sb-ui-alert--dismissible">...</div>` |
 * | **Modificadores** | | |
 * | Bordes redondeados | `.sb-ui-alert--rounded` | `<div class="sb-ui-alert sb-ui-alert--rounded">Rounded</div>` |
 * | Estilo minimal | `.sb-ui-alert--minimal` | `<div class="sb-ui-alert sb-ui-alert--minimal">Minimal</div>` |
 * | Tipo toast | `.sb-ui-alert--toast` | `<div class="sb-ui-alert sb-ui-alert--toast">Toast</div>` |
 * | Tipo banner | `.sb-ui-alert--banner` | `<div class="sb-ui-alert sb-ui-alert--banner">Banner</div>` |
 *
 * ## 💡 Notas Importantes
 *
 * - **Estado por defecto**: INFO - color primario con fondo suave
 * - **Tamaño por defecto**: MEDIUM - no necesitas especificar la clase
 * - **Estructura**: Usa `sb-ui-alert-icon`, `sb-ui-alert-content`, `sb-ui-alert-title`, `sb-ui-alert-message`
 * - **Iconos automáticos**: Los iconos se agregan automáticamente por CSS según el estado (✓, i, ⚠, ✕)
 * - **Elemento de icono vacío**: El `<div class="sb-ui-alert-icon">` debe estar vacío, el CSS agrega el contenido
 * - **Botón cerrar**: Usa `sb-ui-alert-close` con `aria-label="Cerrar"`
 * - **Combinaciones**: Puedes combinar estado + estilo + tamaño + modificadores
 *
 * ## 🎯 Ejemplo de Estructura Completa
 *
 * ```html
 * <div class="sb-ui-alert sb-ui-alert--success sb-ui-alert--large sb-ui-alert--dismissible">
 *   <div class="sb-ui-alert-icon"></div> <!-- ¡Vacío! El CSS agrega ✓ automáticamente -->
 *   <div class="sb-ui-alert-content">
 *     <div class="sb-ui-alert-title">Éxito</div>
 *     <div class="sb-ui-alert-message">Operación completada correctamente.</div>
 *   </div>
 *   <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
 * </div>
 * ```
 */
const meta: Meta = {
  title: 'Atoms/Alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de alerta versátil con 4 estados principales (info, success, warning, error), 3 estilos de fondo y opciones de interactividad.',
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
      'sb-ui-alert',
      `sb-ui-alert--${args.variant}`, // Siempre incluir la variante, incluso si es 'info'
      args.size !== 'medium' ? `sb-ui-alert--${args.size}` : '',
      args.styleVariant !== 'default' ? `sb-ui-alert--${args.styleVariant}` : '',
      args.dismissible ? 'sb-ui-alert--dismissible' : '',
      args.rounded ? 'sb-ui-alert--rounded' : '',
      args.modifier !== 'none' ? `sb-ui-alert--${args.modifier}` : '',
    ]
      .filter(Boolean)
      .join(' ');

    // Determinar el icono según la variante
    const getIcon = (_variant: string) => {
      // El CSS ya maneja los iconos automáticamente con ::before
      // Solo retornamos un div vacío que será poblado por CSS
      return '';
    };

    return html`
      <div style="max-width: 600px;">
        <div class="${classes}">
          ${args.showIcon
            ? html` <div class="sb-ui-alert-icon">${getIcon(args.variant)}</div> `
            : ''}

          <div class="sb-ui-alert-content">
            ${args.title ? html` <div class="sb-ui-alert-title">${args.title}</div> ` : ''}
            ${args.message ? html` <div class="sb-ui-alert-message">${args.message}</div> ` : ''}
          </div>

          ${args.dismissible
            ? html`
                <button
                  class="sb-ui-alert-close"
                  type="button"
                  aria-label="Cerrar"
                  @click="${(e: Event) => {
                    const alertEl = (e.target as HTMLElement).closest('.sb-ui-alert');
                    if (alertEl) {
                      alertEl.style.display = 'none';
                    }
                  }}"
                >
                  ×
                </button>
              `
            : ''}
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
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .matrix-section {
        margin-bottom: 4rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .matrix-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #007acc);
      }

      .matrix-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
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
        border: 1px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
        border-radius: 8px;
        background: var(--sb-ui-color-grayscale-white, #fff);
      }

      .alert-demo-title {
        font-size: 0.875rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--sb-ui-color-grayscale-D100, #333);
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
        <p class="matrix-subtitle">
          Estilo por defecto con fondo suave de color. Máxima prominencia visual.
        </p>

        <div class="alert-grid">
          <!-- INFO DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Info - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Este es un mensaje informativo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Info - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Mensaje con botón cerrar.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- SUCCESS DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Success - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Operación completada.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Success - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Operación exitosa.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- WARNING DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Warning - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Revisa la información.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Warning - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Revisa los datos.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- ERROR DEFAULT -->
          <div class="alert-demo">
            <div class="alert-demo-title">Error - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Ha ocurrido un error.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Error - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error crítico.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ========================================
           SECCIÓN 2: NO-BG (Sin fondo)
           ======================================== -->
      <div class="matrix-section">
        <h2 class="matrix-title">🎨 Variante NO-BG - Sin Fondo</h2>
        <p class="matrix-subtitle">
          Sin fondo, solo borde izquierdo de color. Mínima prominencia visual.
        </p>

        <div class="alert-grid">
          <!-- INFO NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Info No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Sin fondo, solo borde.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Info No-BG - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--info sb-ui-alert--no-bg sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Información</div>
                <div class="sb-ui-alert-message">Sin fondo con cerrar.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- SUCCESS NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Success No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--success sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Éxito sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Success No-BG - Con Cerrar</div>
            <div
              class="sb-ui-alert sb-ui-alert--success sb-ui-alert--no-bg sb-ui-alert--dismissible"
            >
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Éxito</div>
                <div class="sb-ui-alert-message">Éxito sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- WARNING NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Warning No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Advertencia sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Warning No-BG - Con Cerrar</div>
            <div
              class="sb-ui-alert sb-ui-alert--warning sb-ui-alert--no-bg sb-ui-alert--dismissible"
            >
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Advertencia</div>
                <div class="sb-ui-alert-message">Advertencia sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
            </div>
          </div>

          <!-- ERROR NO-BG -->
          <div class="alert-demo">
            <div class="alert-demo-title">Error No-BG - Sin Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--no-bg">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error sin fondo.</div>
              </div>
            </div>
          </div>

          <div class="alert-demo">
            <div class="alert-demo-title">Error No-BG - Con Cerrar</div>
            <div class="sb-ui-alert sb-ui-alert--error sb-ui-alert--no-bg sb-ui-alert--dismissible">
              <div class="sb-ui-alert-icon"></div>
              <div class="sb-ui-alert-content">
                <div class="sb-ui-alert-title">Error</div>
                <div class="sb-ui-alert-message">Error sin fondo.</div>
              </div>
              <button class="sb-ui-alert-close" type="button" aria-label="Cerrar">×</button>
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
          <li>
            <strong>Estado por defecto:</strong> INFO es el estado por defecto (no necesitas
            especificar <code>.sb-ui-alert--info</code>).
          </li>
          <li><strong>Estilo por defecto:</strong> Con fondo suave es el estilo por defecto.</li>
          <li>
            <strong>Iconos automáticos:</strong> Los iconos se generan automáticamente por CSS
            usando pseudo-elementos <code>::before</code>.
          </li>
          <li>
            <strong>Contenedor de icono vacío:</strong> El elemento
            <code>&lt;div class="sb-ui-alert-icon"&gt;</code> debe estar completamente vacío.
          </li>
          <li>
            <strong>Iconos por estado:</strong> Info (i), Success (✓), Warning (⚠), Error (✕) se
            agregan automáticamente.
          </li>
          <li>
            <strong>Botón cerrar:</strong> Usa <code>.sb-ui-alert--dismissible</code> para mostrar
            el botón cerrar.
          </li>
          <li>
            <strong>Estructura:</strong> Los iconos y contenido usan <code>sb-ui-alert-icon</code>,
            <code>sb-ui-alert-content</code>, <code>sb-ui-alert-title</code>,
            <code>sb-ui-alert-message</code>.
          </li>
          <li>
            <strong>Accesibilidad:</strong> El botón cerrar incluye
            <code>aria-label="Cerrar"</code> para lectores de pantalla.
          </li>
          <li>
            <strong>Total de Combinaciones:</strong> 4 estados × 4 estilos × 2 opciones =
            <strong>32 combinaciones</strong> de alerta.
          </li>
          <li>
            <strong>Funcionalidad:</strong> El botón cerrar tiene JavaScript para ocultar la alerta
            al hacer clic.
          </li>
        </ul>
      </div>
    </div>
  `,
};
