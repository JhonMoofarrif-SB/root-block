import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

/**
 * # Button Component
 * 
 * Componente de botón CSS puro del Root Block Design System. Altamente personalizable 
 * mediante variables CSS y adaptable a todas las marcas.
 * 
 * ## Características
 * 
 * - ✅ **7 Variantes**: Primary, Secondary, Tertiary, Quaternary, Quinary, Danger, Success
 * - 📏 **3 Tamaños**: Small, Medium, Large
 * - 🎨 **Multi-Marca**: Se adapta automáticamente a cada marca
 * - ♿ **Accesible**: Soporte para teclado, screen readers y alto contraste
 * - 📱 **Responsive**: Ancho completo en móvil, auto en desktop
 * - 🎭 **Estados**: Hover, Active, Focus, Disabled, Loading
 * - 🔄 **Loading**: Con spinner animado (Davivienda tiene animación especial)
 * 
 * ## Uso Básico
 * 
 * ```html
 * <button class="rb-button rb-button--primary">Click me</button>
 * ```
 * 
 * ## Uso con Modificadores
 * 
 * ```html
 * <!-- Botón pequeño secundario -->
 * <button class="rb-button rb-button--secondary rb-button--small">Small</button>
 * 
 * <!-- Botón cuadrado (por defecto son redondeados) -->
 * <button class="rb-button rb-button--primary rb-button--square">Square</button>
 * 
 * <!-- Botón circular con ícono -->
 * <button class="rb-button rb-button--primary rb-button--circle">+</button>
 * 
 * <!-- Botón de ancho completo -->
 * <button class="rb-button rb-button--primary rb-button--block">Full Width</button>
 * 
 * <!-- Estado loading -->
 * <button class="rb-button rb-button--primary rb-button--loading">Loading...</button>
 * ```
 * 
 * ## Variables CSS Personalizables
 * 
 * ```css
 * .rb-button {
 *   --rb-button-bg-color: var(--rb-color-primary-base);
 *   --rb-button-bg-hover: var(--rb-color-primary-D100);
 *   --rb-button-bg-active: var(--rb-color-primary-D200);
 *   --rb-button-text-color: var(--rb-color-grayscale-white);
 *   --rb-button-border-radius: 2.1rem; (por defecto redondeado)
 *   --rb-button-padding-x: 1.5rem;
 *   --rb-button-padding-y: 0.657rem;
 *   --rb-button-font-size: 1rem;
 *   --rb-button-font-weight: 700;
 *   // ... y muchas más
 * }
 * ```
 */
const meta: Meta = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente de botón versátil y personalizable con soporte multi-marca. Por defecto tiene bordes completamente redondeados (2.1rem). Usa `rb-button--square` para esquinas cuadradas.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'danger', 'success'],
      description: 'Variante de estilo del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamaño del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    text: {
      control: 'text',
      description: 'Texto del botón',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carga (muestra spinner o animación)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    square: {
      control: 'boolean',
      description: 'Esquinas cuadradas (por defecto son redondeadas)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    block: {
      control: 'boolean',
      description: 'Ancho completo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * ## Primary (Interactivo)
 * 
 * Botón principal con controles interactivos. Usa los controles en el panel inferior
 * para probar diferentes configuraciones.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Primary Button',
    disabled: false,
    loading: false,
    square: false,
    block: false,
  },
  render: (args) => html`
    <button
      class="rb-button rb-button--${args.variant} rb-button--${args.size} ${args.square
        ? 'rb-button--square'
        : ''} ${args.block ? 'rb-button--block' : ''} ${args.loading ? 'rb-button--loading' : ''} ${args.disabled ? 'rb-button--disabled' : ''}"
    >
      ${args.text}
    </button>
  `,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    text: 'Secondary Button',
    disabled: false,
  },
  render: Primary.render,
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    text: 'Tertiary Button',
    disabled: false,
  },
  render: Primary.render,
};

/**
 * ## Todos los Tamaños
 * 
 * El componente ofrece 3 tamaños predefinidos: Small, Medium (default), Large.
 * Cada tamaño ajusta padding, font-size y altura mínima.
 */
export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <button class="rb-button rb-button--primary rb-button--small">Small (32px)</button>
      <button class="rb-button rb-button--primary rb-button--medium">Medium (40px)</button>
      <button class="rb-button rb-button--primary rb-button--large">Large (48px)</button>
    </div>
  `,
};

/**
 * ## Todas las Variantes
 * 
 * 7 variantes semánticas disponibles:
 * - **Primary**: Acción principal (color primario de la marca)
 * - **Secondary**: Acción secundaria (color secundario de la marca)
 * - **Tertiary**: Outline/borde (transparente con borde)
 * - **Quaternary**: Solo texto con subrayado
 * - **Quinary**: Color terciario de la marca
 * - **Danger**: Acciones destructivas (rojo)
 * - **Success**: Confirmaciones (verde)
 * 
 * 💡 **Tip**: Cambia de marca en la toolbar para ver cómo se adaptan los colores.
 */
export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <button class="rb-button rb-button--primary">Primary</button>
      <button class="rb-button rb-button--secondary">Secondary</button>
      <button class="rb-button rb-button--tertiary">Tertiary</button>
      <button class="rb-button rb-button--quaternary">Quaternary</button>
      <button class="rb-button rb-button--quinary">Quinary</button>
      <button class="rb-button rb-button--danger">Danger</button>
      <button class="rb-button rb-button--success">Success</button>
    </div>
  `,
};

/**
 * ## Estado Loading
 * 
 * El estado loading muestra un indicador de carga y previene la interacción.
 * 
 * ### Variantes de Loading:
 * 
 * 1. **Sin texto** (`.rb-button--loading`): Botón circular de 80x40px con spinner centrado
 * 2. **Con texto + spinner derecha** (`.rb-button--loading-text`): Texto visible con spinner a la derecha (8px gap)
 * 3. **Con texto + spinner izquierda** (`.rb-button--loading-text .rb-button--loading-left`): Texto visible con spinner a la izquierda (8px gap)
 * 
 * ### ✨ Brand Override: Davivienda
 * 
 * **Davivienda** tiene una animación especial de gradiente negro deslizante durante el estado loading.
 * 
 * 💡 **Pruébalo**: Cambia la marca en la toolbar superior para ver la diferencia.
 */
export const Loading: Story = {
  render: () => html`
    <div>
      <!-- Info banner -->
      <div
        style="
          padding: 1.5rem;
          margin-bottom: 2rem;
          background: var(--rb-color-secondary-L400, #f0f0f0);
          border-left: 4px solid var(--rb-color-primary-base);
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        "
      >
        <p style="margin: 0; color: var(--rb-color-grayscale-D100); line-height: 1.6;">
          <strong style="color: var(--rb-color-primary-base);">💡 Variantes de Loading:</strong>
          <br />
          • <strong>Default:</strong> Spinner a la izquierda + texto visible (gap 8px)
          <br />
          • <strong>rb-button--loading-left:</strong> Spinner a la izquierda (explícito)
          <br />
          • <strong>rb-button--loading-right:</strong> Spinner a la derecha
          <br />
          • <strong>rb-button--loading-icon:</strong> Solo spinner circular (sin texto)
          <br /><br />
          <strong style="color: var(--rb-color-primary-base);">✨ Brand Override:</strong>
          <span style="color: var(--rb-color-primary-base); font-weight: 600;">Davivienda</span>
          tiene una animación especial de gradiente negro deslizante.
        </p>
      </div>

      <!-- Loading SIN texto (botón circular) - requiere rb-button--loading-icon -->
      <h4 style="margin: 0 0 1rem 0; color: var(--rb-color-grayscale-D100);">
        Loading Solo Icono (Circular) - con rb-button--loading-icon
      </h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-bottom: 2rem;">
        <button class="rb-button rb-button--primary rb-button--loading rb-button--loading-icon">Loading</button>
        <button class="rb-button rb-button--secondary rb-button--loading rb-button--loading-icon">Loading</button>
        <button class="rb-button rb-button--tertiary rb-button--loading rb-button--loading-icon">Loading</button>
        <button class="rb-button rb-button--danger rb-button--loading rb-button--loading-icon">Loading</button>
      </div>

      <!-- Loading CON texto + spinner izquierda (DEFAULT - sin clase) -->
      <h4 style="margin: 0 0 1rem 0; color: var(--rb-color-grayscale-D100);">
        Loading Con Texto + Spinner Izquierda (Default - sin clase adicional)
      </h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-bottom: 2rem;">
        <button class="rb-button rb-button--primary rb-button--loading">
          Procesando...
        </button>
        <button class="rb-button rb-button--secondary rb-button--loading">
          Cargando...
        </button>
        <button class="rb-button rb-button--tertiary rb-button--loading">
          Enviando...
        </button>
        <button class="rb-button rb-button--danger rb-button--loading">
          Eliminando...
        </button>
      </div>

      <!-- Loading CON texto + spinner izquierda (EXPLÍCITO con rb-button--loading-left) -->
      <h4 style="margin: 0 0 1rem 0; color: var(--rb-color-grayscale-D100);">
        Loading Con Texto + Spinner Izquierda (Explícito con rb-button--loading-left)
      </h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-bottom: 2rem;">
        <button class="rb-button rb-button--primary rb-button--loading rb-button--loading-left">
          Procesando...
        </button>
        <button class="rb-button rb-button--secondary rb-button--loading rb-button--loading-left">
          Cargando...
        </button>
        <button class="rb-button rb-button--tertiary rb-button--loading rb-button--loading-left">
          Enviando...
        </button>
        <button class="rb-button rb-button--danger rb-button--loading rb-button--loading-left">
          Eliminando...
        </button>
      </div>

      <!-- Loading CON texto + spinner derecha (con rb-button--loading-right) -->
      <h4 style="margin: 0 0 1rem 0; color: var(--rb-color-grayscale-D100);">
        Loading Con Texto + Spinner Derecha (con rb-button--loading-right)
      </h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <button class="rb-button rb-button--primary rb-button--loading rb-button--loading-right">
          Procesando...
        </button>
        <button class="rb-button rb-button--secondary rb-button--loading rb-button--loading-right">
          Cargando...
        </button>
        <button class="rb-button rb-button--tertiary rb-button--loading rb-button--loading-right">
          Enviando...
        </button>
        <button class="rb-button rb-button--danger rb-button--loading rb-button--loading-right">
          Eliminando...
        </button>
      </div>
    </div>
  `,
};

/**
 * ## Estado Disabled
 * 
 * Los botones deshabilitados tienen un estilo consistente para **todas las variantes**:
 * 
 * - **Background**: `grayscale-L300` (`#F5F5F5`) - gris muy claro
 * - **Text color**: `grayscale-base` (`#9B9B9B`) - gris medio
 * - **Border**: `grayscale-L300` - mismo que el background
 * - **Cursor**: `not-allowed` - indica que no es clickeable
 * - **Hover bloqueado**: El hover no cambia el estilo cuando está disabled
 * 
 * Este diseño garantiza que todos los botones disabled se vean iguales,
 * independientemente de la variante o marca.
 */
export const Disabled: Story = {
  render: () => html`
    <div>
      <div style="
        background: var(--rb-color-info-L100);
        border-left: 4px solid var(--rb-color-info-base);
        padding: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 4px;
      ">
        <strong>💡 Nota:</strong> Todos los botones disabled usan el mismo estilo: fondo gris muy claro (L300) con texto gris medio (base).
        El hover no afecta el estilo cuando están disabled.
      </div>

      <h4 style="margin: 0 0 1rem 0; color: var(--rb-color-grayscale-D100);">
        Todas las variantes se ven igual cuando están disabled
      </h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <button class="rb-button rb-button--primary rb-button--disabled">Primary Disabled</button>
        <button class="rb-button rb-button--secondary rb-button--disabled">Secondary Disabled</button>
        <button class="rb-button rb-button--tertiary rb-button--disabled">Tertiary Disabled</button>
        <button class="rb-button rb-button--quaternary rb-button--disabled">Quaternary Disabled</button>
        <button class="rb-button rb-button--danger rb-button--disabled">Danger Disabled</button>
        <button class="rb-button rb-button--success rb-button--disabled">Success Disabled</button>
      </div>

      <h4 style="margin: 2rem 0 1rem 0; color: var(--rb-color-grayscale-D100);">
        Diferentes tamaños (disabled)
      </h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
        <button class="rb-button rb-button--primary rb-button--small rb-button--disabled">Small</button>
        <button class="rb-button rb-button--primary rb-button--disabled">Medium (Default)</button>
        <button class="rb-button rb-button--primary rb-button--large rb-button--disabled">Large</button>
      </div>
    </div>
  `,
};

/**
 * ## Bordes: Redondeados vs Cuadrados
 * 
 * **Por defecto**, todos los botones tienen bordes completamente redondeados (`border-radius: 2.1rem`).
 * 
 * Para esquinas cuadradas, usa la clase `rb-button--square` que aplica `border-radius: 8px`.
 */
export const RoundedVsSquare: Story = {
  render: () => html`
    <div>
      <h4 style="margin: 0 0 1rem 0; color: var(--rb-color-grayscale-D100);">
        Redondeados (Por Defecto)
      </h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
        <button class="rb-button rb-button--primary">Primary Redondeado</button>
        <button class="rb-button rb-button--secondary">Secondary Redondeado</button>
        <button class="rb-button rb-button--tertiary">Tertiary Redondeado</button>
      </div>

      <h4 style="margin: 0 0 1rem 0; color: var(--rb-color-grayscale-D100);">
        Cuadrados (con rb-button--square)
      </h4>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button class="rb-button rb-button--primary rb-button--square">Primary Cuadrado</button>
        <button class="rb-button rb-button--secondary rb-button--square">
          Secondary Cuadrado
        </button>
        <button class="rb-button rb-button--tertiary rb-button--square">Tertiary Cuadrado</button>
      </div>
    </div>
  `,
};

/**
 * ## Botón Circular
 * 
 * Perfecto para iconos. Usa `rb-button--circle` para crear botones circulares de tamaño fijo.
 */
export const Circle: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <button class="rb-button rb-button--primary rb-button--circle">+</button>
      <button class="rb-button rb-button--secondary rb-button--circle">✓</button>
      <button class="rb-button rb-button--danger rb-button--circle">×</button>
      <button class="rb-button rb-button--tertiary rb-button--circle">?</button>
    </div>
  `,
};

/**
 * ## Botón Block (Ancho Completo)
 * 
 * Usa `rb-button--block` para que el botón ocupe todo el ancho disponible.
 * Ideal para formularios y layouts móviles.
 * 
 * 📱 **Nota**: En móvil (≤640px), todos los botones son full-width por defecto.
 */
export const Block: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <button class="rb-button rb-button--primary rb-button--block">Continuar</button>
      <button class="rb-button rb-button--secondary rb-button--block">Guardar borrador</button>
      <button class="rb-button rb-button--tertiary rb-button--block">Cancelar</button>
    </div>
  `,
};

/**
 * ## Primary Stroke - Todos los Estados
 * 
 * Documentación completa del botón Primary con variante **Stroke** (outline) y todos sus estados interactivos.
 * 
 * ### 🎨 Variante Stroke (Outline)
 * 
 * La variante **stroke** es el estilo por defecto del botón. Características:
 * - Fondo transparente
 * - Borde visible (2px) con el color primario
 * - Texto con color primario
 * 
 * ### 📊 Estados Disponibles:
 * 
 * | Estado | Descripción | Clase CSS |
 * |--------|-------------|-----------|
 * | **Default** | Estado inicial | `.rb-button.rb-button--primary` |
 * | **Hover** | Al pasar el mouse | `:hover` |
 * | **Pressed** | Al hacer clic (activo) | `:active` |
 * | **Focus** | Al recibir foco del teclado | `:focus-visible` |
 * | **Disabled** | Botón deshabilitado | `.rb-button--disabled` |
 * | **Disabled Hover** | Hover sobre disabled | `.rb-button--disabled:hover` |
 * 
 * ### 🎯 Especificaciones del Estado Pressed:
 * 
 * Cuando el botón está en estado `:active` (pressed):
 * - **Background**: Se mantiene o cambia a un color más claro
 * - **Border**: Mantiene su color y grosor (2px) ✅
 * - **Box-shadow**: `inset 2px 2px 3px 0px #1b1b1b29` (sombra interna)
 * - **Text**: Puede cambiar a un tono más oscuro
 * 
 * ### 💡 Instrucciones de Prueba:
 * 
 * 1. **Hover**: Pasa el mouse sobre cada botón
 * 2. **Pressed**: Haz clic y mantén presionado
 * 3. **Focus**: Usa Tab para navegar con teclado
 * 4. **Disabled**: Intenta interactuar con los botones deshabilitados
 */
export const PrimaryStrokeAllStates: Story = {
  render: () => html`
    <div>
      <!-- Banner informativo -->
      <div
        style="
          padding: 1.5rem;
          margin-bottom: 2rem;
          background: var(--rb-color-primary-L400, #e3f2fd);
          border-left: 4px solid var(--rb-color-primary-base);
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        "
      >
        <h4 style="margin: 0 0 0.5rem 0; color: var(--rb-color-primary-D200);">
          🎨 Variante Stroke (Outline) - Default
        </h4>
        <p style="margin: 0; color: var(--rb-color-grayscale-D100); line-height: 1.6;">
          La variante <strong>stroke</strong> es el estilo por defecto del botón Primary.
          <br />
          <strong>Características:</strong> Fondo transparente, borde visible (2px), texto con color primario.
          <br />
          <strong>Estado Pressed:</strong> Sombra interna <code>inset 2px 2px 3px 0px #1b1b1b29</code> + borde visible.
        </p>
      </div>

      <!-- DEFAULT STATE -->
      <div style="margin-bottom: 3rem;">
        <h3 style="
          margin: 0 0 0.5rem 0;
          color: var(--rb-color-primary-base);
          font-size: 1.25rem;
          font-weight: 600;
        ">
          1️⃣ Estado Default
        </h3>
        <p style="
          margin: 0 0 1rem 0;
          color: var(--rb-color-grayscale-D100);
          font-size: 0.9rem;
        ">
          Estado inicial del botón. Fondo transparente con borde visible.
        </p>
        <div style="
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
          padding: 1.5rem;
          background: var(--rb-color-grayscale-L400, #fafafa);
          border-radius: 8px;
        ">
          <button class="rb-button rb-button--primary">Primary Default</button>
          <button class="rb-button rb-button--primary rb-button--small">Small</button>
          <button class="rb-button rb-button--primary rb-button--large">Large</button>
        </div>
        <div style="
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: var(--rb-color-grayscale-white);
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: var(--rb-color-grayscale-D200);
        ">
          <strong>CSS:</strong> <code>.rb-button.rb-button--primary</code>
        </div>
      </div>

      <!-- HOVER STATE -->
      <div style="margin-bottom: 3rem;">
        <h3 style="
          margin: 0 0 0.5rem 0;
          color: var(--rb-color-primary-base);
          font-size: 1.25rem;
          font-weight: 600;
        ">
          2️⃣ Estado Hover
        </h3>
        <p style="
          margin: 0 0 1rem 0;
          color: var(--rb-color-grayscale-D100);
          font-size: 0.9rem;
        ">
          Al pasar el mouse. Fondo cambia a un tono claro, borde mantiene su color.
        </p>
        <div style="
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
          padding: 1.5rem;
          background: var(--rb-color-grayscale-L400, #fafafa);
          border-radius: 8px;
        ">
          <button class="rb-button rb-button--primary">Pasa el mouse aquí</button>
          <button class="rb-button rb-button--primary rb-button--small">Hover Small</button>
          <button class="rb-button rb-button--primary rb-button--large">Hover Large</button>
        </div>
        <div style="
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: var(--rb-color-grayscale-white);
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: var(--rb-color-grayscale-D200);
        ">
          <strong>CSS:</strong> <code>.rb-button.rb-button--primary:hover</code><br>
          <strong>Cambios:</strong> background-color, color, box-shadow
        </div>
      </div>

      <!-- PRESSED/ACTIVE STATE -->
      <div style="margin-bottom: 3rem;">
        <h3 style="
          margin: 0 0 0.5rem 0;
          color: var(--rb-color-primary-base);
          font-size: 1.25rem;
          font-weight: 600;
        ">
          3️⃣ Estado Pressed (Active)
        </h3>
        <p style="
          margin: 0 0 1rem 0;
          color: var(--rb-color-grayscale-D100);
          font-size: 0.9rem;
        ">
          Al hacer clic y mantener presionado. Sombra interna + borde visible.
        </p>
        <div style="
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
          padding: 1.5rem;
          background: var(--rb-color-grayscale-L400, #fafafa);
          border-radius: 8px;
        ">
          <button class="rb-button rb-button--primary">Haz clic aquí</button>
          <button class="rb-button rb-button--primary rb-button--small">Press Small</button>
          <button class="rb-button rb-button--primary rb-button--large">Press Large</button>
        </div>
        <div style="
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: var(--rb-color-grayscale-white);
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: var(--rb-color-grayscale-D200);
        ">
          <strong>CSS:</strong> <code>.rb-button.rb-button--primary:active</code><br>
          <strong>Box-shadow:</strong> <code>inset 2px 2px 3px 0px #1b1b1b29</code><br>
          <strong>Border:</strong> Mantiene color y grosor (2px) ✅
        </div>
      </div>

      <!-- FOCUS STATE -->
      <div style="margin-bottom: 3rem;">
        <h3 style="
          margin: 0 0 0.5rem 0;
          color: var(--rb-color-primary-base);
          font-size: 1.25rem;
          font-weight: 600;
        ">
          4️⃣ Estado Focus (Keyboard)
        </h3>
        <p style="
          margin: 0 0 1rem 0;
          color: var(--rb-color-grayscale-D100);
          font-size: 0.9rem;
        ">
          Al recibir foco del teclado (Tab). Outline externo visible para accesibilidad.
        </p>
        <div style="
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
          padding: 1.5rem;
          background: var(--rb-color-grayscale-L400, #fafafa);
          border-radius: 8px;
        ">
          <button class="rb-button rb-button--primary">Presiona Tab</button>
          <button class="rb-button rb-button--primary rb-button--small">Focus Small</button>
          <button class="rb-button rb-button--primary rb-button--large">Focus Large</button>
        </div>
        <div style="
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: var(--rb-color-grayscale-white);
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: var(--rb-color-grayscale-D200);
        ">
          <strong>CSS:</strong> <code>.rb-button.rb-button--primary:focus-visible</code><br>
          <strong>Outline:</strong> <code>3px solid var(--rb-color-primary-L100)</code><br>
          <strong>Offset:</strong> <code>4px</code>
        </div>
      </div>

      <!-- DISABLED STATE -->
      <div style="margin-bottom: 3rem;">
        <h3 style="
          margin: 0 0 0.5rem 0;
          color: var(--rb-color-primary-base);
          font-size: 1.25rem;
          font-weight: 600;
        ">
          5️⃣ Estado Disabled
        </h3>
        <p style="
          margin: 0 0 1rem 0;
          color: var(--rb-color-grayscale-D100);
          font-size: 0.9rem;
        ">
          Botón deshabilitado. No interactivo, cursor "not-allowed".
        </p>
        <div style="
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
          padding: 1.5rem;
          background: var(--rb-color-grayscale-L400, #fafafa);
          border-radius: 8px;
        ">
          <button class="rb-button rb-button--primary rb-button--disabled">Disabled</button>
          <button class="rb-button rb-button--primary rb-button--small rb-button--disabled">Small Disabled</button>
          <button class="rb-button rb-button--primary rb-button--large rb-button--disabled">Large Disabled</button>
        </div>
        <div style="
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: var(--rb-color-grayscale-white);
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: var(--rb-color-grayscale-D200);
        ">
          <strong>CSS:</strong> <code>.rb-button.rb-button--primary.rb-button--disabled</code><br>
          <strong>Background:</strong> <code>var(--rb-color-grayscale-L300) → #F5F5F5</code><br>
          <strong>Text:</strong> <code>var(--rb-color-grayscale-base) → #9B9B9B</code><br>
          <strong>Cursor:</strong> <code>not-allowed</code>
        </div>
      </div>

      <!-- DISABLED HOVER STATE -->
      <div style="margin-bottom: 3rem;">
        <h3 style="
          margin: 0 0 0.5rem 0;
          color: var(--rb-color-primary-base);
          font-size: 1.25rem;
          font-weight: 600;
        ">
          6️⃣ Estado Disabled + Hover
        </h3>
        <p style="
          margin: 0 0 1rem 0;
          color: var(--rb-color-grayscale-D100);
          font-size: 0.9rem;
        ">
          Al pasar el mouse sobre un botón disabled. No cambia su apariencia.
        </p>
        <div style="
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
          padding: 1.5rem;
          background: var(--rb-color-grayscale-L400, #fafafa);
          border-radius: 8px;
        ">
          <button class="rb-button rb-button--primary rb-button--disabled">Pasa el mouse aquí</button>
          <button class="rb-button rb-button--primary rb-button--small rb-button--disabled">Hover Disabled</button>
          <button class="rb-button rb-button--primary rb-button--large rb-button--disabled">Hover Disabled</button>
        </div>
        <div style="
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: var(--rb-color-grayscale-white);
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: var(--rb-color-grayscale-D200);
        ">
          <strong>CSS:</strong> <code>.rb-button.rb-button--primary.rb-button--disabled:hover</code><br>
          <strong>Comportamiento:</strong> Mantiene el estilo disabled, hover bloqueado
        </div>
      </div>

      <!-- COMPARACIÓN LADO A LADO -->
      <div style="
        padding: 1.5rem;
        background: var(--rb-color-secondary-L400, #f5f5f5);
        border-radius: 8px;
        border: 2px solid var(--rb-color-primary-base);
      ">
        <h3 style="
          margin: 0 0 1rem 0;
          color: var(--rb-color-primary-D200);
          font-size: 1.25rem;
          font-weight: 600;
        ">
          📊 Comparación Visual - Todos los Estados
        </h3>
        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        ">
          <div style="text-align: center;">
            <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: var(--rb-color-grayscale-D100);">
              Default
            </p>
            <button class="rb-button rb-button--primary">Click me</button>
          </div>
          <div style="text-align: center;">
            <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: var(--rb-color-grayscale-D100);">
              Hover
            </p>
            <button class="rb-button rb-button--primary">Hover me</button>
          </div>
          <div style="text-align: center;">
            <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: var(--rb-color-grayscale-D100);">
              Pressed
            </p>
            <button class="rb-button rb-button--primary">Press me</button>
          </div>
          <div style="text-align: center;">
            <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: var(--rb-color-grayscale-D100);">
              Focus
            </p>
            <button class="rb-button rb-button--primary">Tab to me</button>
          </div>
          <div style="text-align: center;">
            <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: var(--rb-color-grayscale-D100);">
              Disabled
            </p>
            <button class="rb-button rb-button--primary rb-button--disabled">Disabled</button>
          </div>
          <div style="text-align: center;">
            <p style="margin: 0 0 0.5rem 0; font-weight: 600; color: var(--rb-color-grayscale-D100);">
              Disabled Hover
            </p>
            <button class="rb-button rb-button--primary rb-button--disabled">Hover disabled</button>
          </div>
        </div>
      </div>
    </div>
  `,
};

/**
 * ## Casos de Uso Reales
 * 
 * Ejemplos de cómo combinar variantes y modificadores en escenarios reales.
 */
export const RealWorldExamples: Story = {
  render: () => html`
    <div style="max-width: 600px;">
      <!-- Form Actions -->
      <div
        style="
          padding: 2rem;
          background: var(--rb-color-grayscale-L400);
          border-radius: 12px;
          margin-bottom: 2rem;
        "
      >
        <h4 style="margin: 0 0 1.5rem 0;">Formulario de Registro</h4>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <button class="rb-button rb-button--primary rb-button--block rb-button--large">
            Crear Cuenta
          </button>
          <button class="rb-button rb-button--secondary rb-button--block">
            Registrarme con Google
          </button>
          <button class="rb-button rb-button--quaternary">¿Ya tienes cuenta? Inicia sesión</button>
        </div>
      </div>

      <!-- Alert Dialog -->
      <div
        style="
          padding: 2rem;
          background: var(--rb-color-grayscale-L400);
          border-radius: 12px;
          margin-bottom: 2rem;
        "
      >
        <h4 style="margin: 0 0 0.5rem 0;">¿Eliminar este elemento?</h4>
        <p style="margin: 0 0 1.5rem 0; color: var(--rb-color-grayscale-D100);">
          Esta acción no se puede deshacer.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <button class="rb-button rb-button--tertiary">Cancelar</button>
          <button class="rb-button rb-button--danger">Eliminar</button>
        </div>
      </div>

      <!-- Toolbar -->
      <div
        style="
          padding: 1rem;
          background: var(--rb-color-grayscale-L400);
          border-radius: 12px;
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-wrap: wrap;
        "
      >
        <button class="rb-button rb-button--primary rb-button--small">Guardar</button>
        <button class="rb-button rb-button--secondary rb-button--small">Exportar</button>
        <button class="rb-button rb-button--tertiary rb-button--small">Vista previa</button>
        <div style="flex: 1; min-width: 20px;"></div>
        <button class="rb-button rb-button--tertiary rb-button--circle rb-button--small">⚙</button>
      </div>
    </div>
  `,
};
