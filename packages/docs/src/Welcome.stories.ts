import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Introduction/Welcome',
  parameters: {
    docs: {
      description: {
        component: 'Bolivar UI Design System - Sistema de diseño empresarial multi-marca',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => html`
    <div style="padding: 3rem; max-width: 1000px; margin: 0 auto;">
      <!-- Hero -->
      <div
        style="
          background: linear-gradient(135deg, var(--b-ui-color-primary-base) 0%, var(--b-ui-color-secondary-base) 100%);
          color: white;
          padding: 3rem 2rem;
          border-radius: 16px;
          margin-bottom: 3rem;
          text-align: center;
        "
      >
        <h1 style="margin: 0 0 1rem 0; font-size: 3rem;">🎨 Bolivar UI Design System</h1>
        <p style="margin: 0; font-size: 1.25rem; opacity: 0.95;">
          Sistema de diseño empresarial multi-marca
        </p>
      </div>

      <!-- Features -->
      <div style="margin-bottom: 3rem;">
        <h2 style="color: var(--b-ui-color-primary-base); margin-bottom: 1.5rem;">
          🌟 Características
        </h2>
        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;"
        >
          <div
            style="
              padding: 1.5rem;
              background: var(--b-ui-color-grayscale-L400);
              border-radius: 12px;
              border-left: 4px solid var(--b-ui-color-primary-base);
            "
          >
            <h3 style="margin: 0 0 0.5rem 0;">Multi-Marca</h3>
            <p style="margin: 0; color: var(--b-ui-color-grayscale-D100);">
              6 marcas por 2 temas = 12 combinaciones
            </p>
          </div>

          <div
            style="
              padding: 1.5rem;
              background: var(--b-ui-color-grayscale-L400);
              border-radius: 12px;
              border-left: 4px solid var(--b-ui-color-secondary-base);
            "
          >
            <h3 style="margin: 0 0 0.5rem 0;">Bundle Completo</h3>
            <p style="margin: 0; color: var(--b-ui-color-grayscale-D100);">
              1 archivo CSS incluye todo
            </p>
          </div>

          <div
            style="
              padding: 1.5rem;
              background: var(--b-ui-color-grayscale-L400);
              border-radius: 12px;
              border-left: 4px solid var(--b-ui-color-tertiary-base);
            "
          >
            <h3 style="margin: 0 0 0.5rem 0;">Brand Overrides</h3>
            <p style="margin: 0; color: var(--b-ui-color-grayscale-D100);">
              Estilos específicos por marca
            </p>
          </div>
        </div>
      </div>

      <!-- Quick Start -->
      <div
        style="
          padding: 2rem;
          background: var(--b-ui-color-secondary-L400);
          border-radius: 12px;
          margin-bottom: 3rem;
        "
      >
        <h2 style="color: var(--b-ui-color-primary-base); margin-top: 0;">🚀 Quick Start</h2>
        <p style="color: var(--b-ui-color-grayscale-D100); margin-bottom: 1.5rem;">
          Carga solo 1 archivo CSS con todo incluido:
        </p>
        <pre
          style="
            background: var(--b-ui-color-grayscale-white);
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
            border: 1px solid var(--b-ui-color-grayscale-L200);
          "
        ><code>&lt;link rel="stylesheet" href="b-ui-jelpit-light.min.css"&gt;
&lt;script type="module" src="b-ui-components.min.js"&gt;&lt;/script&gt;

&lt;button class="b-ui-button rb-button--primary"&gt;Click me&lt;/button&gt;</code></pre>
      </div>

      <!-- Brands -->
      <div style="margin-bottom: 3rem;">
        <h2 style="color: var(--b-ui-color-primary-base); margin-bottom: 1.5rem;">
          🌐 Marcas Disponibles
        </h2>
        <p style="color: var(--b-ui-color-grayscale-D100); margin-bottom: 1.5rem;">
          <strong>💡 Tip:</strong> Usa el selector de <strong>Brand</strong> en la toolbar (arriba a
          la derecha) para ver cómo se adaptan los componentes
        </p>

        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;"
        >
          ${[
            { name: 'Jelpit', primary: '#2e0063', secondary: '#82e778' },
            { name: 'Davivienda ✨', primary: '#e1111c', secondary: '#4b5c6f' },
            { name: 'Cien Cuadras', primary: '#006098', secondary: '#ffa533' },
            { name: 'Doctor Aki', primary: '#42671a', secondary: '#61b064' },
            { name: 'Seguros Bolívar', primary: '#009056', secondary: '#ffe16f' },
            { name: 'White Label', primary: '#48555b', secondary: '#afc4cc' },
          ].map(
            (brand) => html`
              <div
                style="
                  padding: 1rem;
                  background: var(--b-ui-color-grayscale-white);
                  border: 1px solid var(--b-ui-color-grayscale-L200);
                  border-radius: 8px;
                  text-align: center;
                "
              >
                <div style="font-weight: 600; margin-bottom: 0.5rem;">${brand.name}</div>
                <div style="display: flex; gap: 0.5rem; justify-content: center;">
                  <div
                    style="
                      width: 50px;
                      height: 50px;
                      background: ${brand.primary};
                      border-radius: 8px;
                    "
                  ></div>
                  <div
                    style="
                      width: 50px;
                      height: 50px;
                      background: ${brand.secondary};
                      border-radius: 8px;
                    "
                  ></div>
                </div>
              </div>
            `
          )}
        </div>
      </div>

      <!-- Special Features -->
      <div
        style="
          padding: 2rem;
          background: linear-gradient(135deg, rgba(225, 17, 28, 0.1) 0%, rgba(75, 92, 111, 0.1) 100%);
          border-radius: 12px;
          border: 2px solid var(--b-ui-color-primary-L300);
          margin-bottom: 3rem;
        "
      >
        <h2 style="color: var(--b-ui-color-primary-base); margin-top: 0;">
          ✨ Brand Overrides Especiales
        </h2>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="color: #e1111c; margin: 0 0 0.5rem 0; font-size: 1.1rem;">🔴 Davivienda</h3>
          <p style="color: var(--b-ui-color-grayscale-D100); margin: 0;">
            <strong>Loading Animation:</strong> Gradiente negro deslizante de izquierda a derecha
          </p>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <h3 style="color: #009056; margin: 0 0 0.5rem 0; font-size: 1.1rem;">
            💚 Seguros Bolívar
          </h3>
          <p style="color: var(--b-ui-color-grayscale-D100); margin: 0;">
            <strong>Color Swap:</strong> Botón Primary usa amarillo, Secondary usa verde
            (invertidos)
          </p>
        </div>

        <p style="color: var(--b-ui-color-grayscale-D100); margin-bottom: 0.5rem;">
          <strong>Para verlo en acción:</strong>
        </p>
        <ol style="color: var(--b-ui-color-grayscale-D100); margin: 0; padding-left: 1.5rem;">
          <li>Selecciona una marca en el selector de Brand (toolbar)</li>
          <li>Ve a "Atoms → Button"</li>
          <li>Observa los overrides específicos de cada marca</li>
          <li>Compara con otras marcas que usan los estilos base</li>
        </ol>
      </div>

      <!-- Navigation -->
      <div>
        <h2 style="color: var(--b-ui-color-primary-base); margin-bottom: 1.5rem;">📚 Navegación</h2>
        <div
          style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;"
        >
          <div
            style="padding: 1rem; background: var(--b-ui-color-grayscale-L400); border-radius: 8px;"
          >
            <h3 style="margin: 0 0 0.5rem 0;">Foundations</h3>
            <p style="margin: 0; font-size: 0.875rem; color: var(--b-ui-color-grayscale-D100);">
              Colores y fundamentos del sistema
            </p>
          </div>

          <div
            style="padding: 1rem; background: var(--b-ui-color-grayscale-L400); border-radius: 8px;"
          >
            <h3 style="margin: 0 0 0.5rem 0;">Atoms</h3>
            <p style="margin: 0; font-size: 0.875rem; color: var(--b-ui-color-grayscale-D100);">
              Componentes CSS simples (Button)
            </p>
          </div>

          <div
            style="padding: 1rem; background: var(--b-ui-color-grayscale-L400); border-radius: 8px;"
          >
            <h3 style="margin: 0 0 0.5rem 0;">Molecules</h3>
            <p style="margin: 0; font-size: 0.875rem; color: var(--b-ui-color-grayscale-D100);">
              Web Components complejos
            </p>
          </div>
        </div>
      </div>

      <!-- Live Demo -->
      <div
        style="
          margin-top: 2rem;
          padding: 2rem;
          background: linear-gradient(135deg, var(--b-ui-color-primary-L400) 0%, var(--b-ui-color-secondary-L400) 100%);
          border-radius: 12px;
          text-align: center;
        "
      >
        <h2 style="color: var(--b-ui-color-primary-base); margin-top: 0;">🎮 Demo Interactivo</h2>
        <p style="color: var(--b-ui-color-grayscale-D100); margin-bottom: 1.5rem;">
          Prueba todos los componentes en acción con cambio dinámico de marca y tema
        </p>
        <a
          href="/examples/"
          target="_blank"
          style="
            display: inline-block;
            padding: 0.75rem 2rem;
            background: var(--b-ui-color-primary-base);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: transform 0.2s, box-shadow 0.2s;
          "
          onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 16px rgba(0,0,0,0.2)'"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
        >
          Ver Demo en Vivo →
        </a>
      </div>

      <!-- Footer -->
      <div
        style="margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--b-ui-color-grayscale-L200); text-align: center;"
      >
        <p style="color: var(--b-ui-color-grayscale-base; margin: 0;">
          <strong>Happy coding! 🚀</strong>
        </p>
      </div>
    </div>
  `,
};
