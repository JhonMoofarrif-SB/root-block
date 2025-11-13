import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Tabs Component
 *
 * Componente de tabs (pestañas) CSS puro del Seguros Bolivar UI Design System con soporte para iconos y descripciones.
 *
 * ## 📋 Referencia Rápida de Clases
 *
 * | Quiero... | Clase CSS | Ejemplo |
 * |-----------|-----------|---------|
 * | **Variantes** | | |
 * | Track (con línea) | `.sb-ui-tabs--track` | `<div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--horizontal">` |
 * | Button (con fondo) | `.sb-ui-tabs--button` | `<div class="sb-ui-tabs sb-ui-tabs--button sb-ui-tabs--horizontal">` |
 * | Folder | `.sb-ui-tabs--folder` | `<div class="sb-ui-tabs sb-ui-tabs--folder sb-ui-tabs--horizontal">` |
 * | **Layouts** | | |
 * | Horizontal (default) | `.sb-ui-tabs--horizontal` | `<div class="sb-ui-tabs sb-ui-tabs--horizontal">` |
 * | Vertical | `.sb-ui-tabs--vertical` | `<div class="sb-ui-tabs sb-ui-tabs--vertical">` |
 * | **Estados** | | |
 * | Tab activo | `.sb-ui-tabs__item--active` | `<button class="sb-ui-tabs__item sb-ui-tabs__item--active">` |
 * | Tab deshabilitado | `.sb-ui-tabs__item--disabled` | `<button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">` |
 *
 * ## 💡 Notas Importantes
 *
 * - **JavaScript requerido**: Necesitas JS para cambiar entre tabs activos
 * - **Iconos opcionales**: Puedes incluir iconos con Font Awesome
 * - **Descripciones**: Cada tab puede tener un título y una descripción
 * - **Responsive**: Usa `clamp()` para tamaños fluidos
 * - **Accesibilidad**: Usa atributos `role` y `aria-*` para mejorar accesibilidad
 *
 * ## 🎯 Ejemplo de Estructura Completa
 *
 * ```html
 * <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--horizontal">
 *   <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
 *     <i class="sb-ui-tabs__icon fa-solid fa-home"></i>
 *     <div class="sb-ui-tabs__content">
 *       <span class="sb-ui-tabs__title">Home</span>
 *       <span class="sb-ui-tabs__description">Página principal</span>
 *     </div>
 *   </button>
 *   <button class="sb-ui-tabs__item">
 *     <i class="sb-ui-tabs__icon fa-solid fa-user"></i>
 *     <div class="sb-ui-tabs__content">
 *       <span class="sb-ui-tabs__title">Profile</span>
 *       <span class="sb-ui-tabs__description">Tu perfil</span>
 *     </div>
 *   </button>
 * </div>
 * ```
 */
const meta: Meta = {
  title: 'Atoms/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de tabs versátil con 3 variantes visuales (Track, Button, Folder), 2 orientaciones (Horizontal, Vertical), soporte para iconos y descripciones.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['track', 'button', 'folder'],
      description: 'Variante visual del tab',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'track' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientación de los tabs',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    withIcons: {
      control: 'boolean',
      description: 'Incluir iconos en los tabs',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    withDescriptions: {
      control: 'boolean',
      description: 'Incluir descripciones en los tabs',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Playground (Interactivo)
 *
 * Experimenta con todas las combinaciones de tabs usando los controles interactivos
 * en el panel inferior. Puedes ajustar variante, orientación, iconos y descripciones.
 */
export const Playground: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  args: {
    variant: 'track',
    orientation: 'horizontal',
    withIcons: true,
    withDescriptions: true,
  },
  render: (args) => {
    const classes = [
      'sb-ui-tabs',
      `sb-ui-tabs--${args.variant}`,
      `sb-ui-tabs--${args.orientation}`,
    ]
      .filter(Boolean)
      .join(' ');

    const tabs = [
      {
        icon: 'fa-home',
        title: 'Home',
        description: 'Página principal',
        active: true,
      },
      {
        icon: 'fa-user',
        title: 'Profile',
        description: 'Tu perfil',
        active: false,
      },
      {
        icon: 'fa-cog',
        title: 'Settings',
        description: 'Configuración',
        active: false,
      },
    ];

    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div style="max-width: 800px;">
        <div class="${classes}">
          ${tabs.map(
            (tab) => html`
              <button
                class="sb-ui-tabs__item ${tab.active ? 'sb-ui-tabs__item--active' : ''}"
                @click="${(e: Event) => {
                  const target = e.currentTarget as HTMLElement;
                  const parent = target.parentElement;
                  if (parent) {
                    parent.querySelectorAll('.sb-ui-tabs__item').forEach((item) => {
                      item.classList.remove('sb-ui-tabs__item--active');
                    });
                    target.classList.add('sb-ui-tabs__item--active');
                  }
                }}"
              >
                ${args.withIcons
                  ? html`<i class="sb-ui-tabs__icon fa-solid ${tab.icon}"></i>`
                  : ''}
                <div class="sb-ui-tabs__content">
                  <span class="sb-ui-tabs__title">${tab.title}</span>
                  ${args.withDescriptions
                    ? html`<span class="sb-ui-tabs__description">${tab.description}</span>`
                    : ''}
                </div>
              </button>
            `,
          )}
        </div>
      </div>
    `;
  },
};

/**
 * ## Track Variant - Matriz Completa
 *
 * Variante con línea indicadora inferior/lateral según la orientación.
 * Muestra combinaciones de Horizontal/Vertical con/sin iconos y descripciones.
 */
export const TrackVariant: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-primary-base, #038450);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales con iconos y descripciones.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           HORIZONTAL - Solo títulos
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Horizontal (Solo Títulos)</h2>
        <p class="tabs-subtitle">Tabs horizontales solo con títulos, sin iconos ni descripciones.</p>
        <span class="demo-label">Solo títulos</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Home</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Profile</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Settings</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Disabled</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Track - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales con iconos y descripciones.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--track sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Button Variant - Matriz Completa
 *
 * Variante con fondo amarillo/crema cuando está activo.
 * Muestra combinaciones de Horizontal/Vertical con/sin iconos y descripciones.
 */
export const ButtonVariant: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-secondary-base, #ffe16f);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Button - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales con fondo amarillo cuando están activos.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--button sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Button - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales con fondo amarillo cuando están activos.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--button sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Folder Variant - Matriz Completa
 *
 * Variante estilo carpeta sin indicador visible.
 * Muestra combinaciones de Horizontal/Vertical con/sin iconos y descripciones.
 */
export const FolderVariant: Story = {
  parameters: {
    docs: {
      source: {
        format: 'dedent',
        language: 'html',
      },
    },
  },
  render: () => html`
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      .tabs-container {
        font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
        padding: 2rem;
        background: var(--sb-ui-color-grayscale-L400, #fafafa);
      }

      .tabs-section {
        margin-bottom: 3rem;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

      .tabs-title {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--sb-ui-color-grayscale-D200, #333);
      }

      .tabs-subtitle {
        font-size: 1rem;
        color: var(--sb-ui-color-grayscale-base, #666);
        margin-bottom: 2rem;
      }

      .demo-label {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--sb-ui-color-grayscale-D200, #333);
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--sb-ui-color-grayscale-L200, #e0e0e0);
      }
    </style>

    <div class="tabs-container">
      <!-- ========================================
           HORIZONTAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Folder - Horizontal (Completo)</h2>
        <p class="tabs-subtitle">Tabs horizontales estilo carpeta sin indicador.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--folder sb-ui-tabs--horizontal">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>

      <!-- ========================================
           VERTICAL - Con iconos y descripciones
           ======================================== -->
      <div class="tabs-section">
        <h2 class="tabs-title">Folder - Vertical (Completo)</h2>
        <p class="tabs-subtitle">Tabs verticales estilo carpeta sin indicador.</p>
        <span class="demo-label">Con iconos y descripciones</span>

        <div class="sb-ui-tabs sb-ui-tabs--folder sb-ui-tabs--vertical">
          <button class="sb-ui-tabs__item sb-ui-tabs__item--active">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
          <button class="sb-ui-tabs__item sb-ui-tabs__item--disabled">
            <i class="sb-ui-tabs__icon fa-solid fa-globe"></i>
            <div class="sb-ui-tabs__content">
              <span class="sb-ui-tabs__title">Title</span>
              <span class="sb-ui-tabs__description">Description</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `,
};

