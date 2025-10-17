import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Foundations/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Sistema de colores del Seguros Bolivar UI Design System. Cada marca tiene su propia paleta de colores que se adapta automáticamente según los tokens cargados.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Helper function to render color swatches
 */
const renderColorSwatch = (name: string, varName: string, description?: string) => html`
  <div style="margin-bottom: 1rem;">
    <div
      style="
        width: 100%;
        height: 80px;
        background: var(${varName});
        border-radius: 8px;
        border: 1px solid var(--sb-ui-color-grayscale-L200);
        margin-bottom: 0.5rem;
      "
    ></div>
    <div style="font-weight: 600; margin-bottom: 0.25rem;">${name}</div>
    <div
      style="font-size: 0.875rem; color: var(--sb-ui-color-grayscale-base); font-family: monospace;"
    >
      ${varName}
    </div>
    ${description
      ? html`<div
          style="font-size: 0.75rem; color: var(--sb-ui-color-grayscale-D100); margin-top: 0.25rem;"
        >
          ${description}
        </div>`
      : ''}
  </div>
`;

const renderColorScale = (colorName: string, scales: string[]) => html`
  <div style="margin-bottom: 2rem;">
    <h3 style="margin-bottom: 1rem; color: var(--sb-ui-color-primary-base);">${colorName}</h3>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem;"
    >
      ${scales.map((scale) =>
        renderColorSwatch(
          scale,
          `--sb-ui-color-${colorName.toLowerCase()}-${scale}`,
          scale === 'base' ? 'Color principal' : ''
        )
      )}
    </div>
  </div>
`;

export const Primary: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Primarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color principal de la marca. Se adapta automáticamente según la marca seleccionada en el
        toolbar.
      </p>
      ${renderColorScale('Primary', [
        'D400',
        'D300',
        'D200',
        'D100',
        'base',
        'L100',
        'L200',
        'L300',
        'L400',
      ])}
    </div>
  `,
};

export const Secondary: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Secundarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color secundario de la marca, usado para acentos y elementos complementarios.
      </p>
      ${renderColorScale('Secondary', [
        'D400',
        'D300',
        'D200',
        'D100',
        'base',
        'L100',
        'L200',
        'L300',
        'L400',
      ])}
    </div>
  `,
};

export const Tertiary: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores Terciarios</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Color terciario de la marca, usado para elementos adicionales.
      </p>
      ${renderColorScale('Tertiary', [
        'D400',
        'D300',
        'D200',
        'D100',
        'base',
        'L100',
        'L200',
        'L300',
        'L400',
      ])}
    </div>
  `,
};

export const Grayscale: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Escala de Grises</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Escala neutral usada para textos, fondos y bordes.
      </p>
      ${renderColorScale('Grayscale', [
        'black',
        'D400',
        'D300',
        'D200',
        'D100',
        'base',
        'L100',
        'L200',
        'L300',
        'L400',
        'white',
      ])}
    </div>
  `,
};

export const Feedback: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <h2 style="margin-bottom: 1rem;">Colores de Feedback</h2>
      <p style="margin-bottom: 2rem; color: var(--sb-ui-color-grayscale-D100);">
        Colores semánticos usados para indicar estados: error, éxito, advertencia e información.
      </p>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-error-base);"
      >
        Error
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        ${['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'].map((scale) =>
          renderColorSwatch(scale, `--sb-ui-color-feedback-error-${scale}`)
        )}
      </div>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-success-base);"
      >
        Success
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        ${['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'].map((scale) =>
          renderColorSwatch(scale, `--sb-ui-color-feedback-success-${scale}`)
        )}
      </div>

      <h3
        style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-warning-base);"
      >
        Warning
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        ${['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'].map((scale) =>
          renderColorSwatch(scale, `--sb-ui-color-feedback-warning-${scale}`)
        )}
      </div>

      <h3 style="margin-top: 2rem; margin-bottom: 1rem; color: var(--sb-ui-color-feedback-info-base);">
        Info
      </h3>
      <div
        style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 2rem;"
      >
        ${['D400', 'D300', 'D200', 'D100', 'base', 'L100', 'L200', 'L300', 'L400'].map((scale) =>
          renderColorSwatch(scale, `--sb-ui-color-feedback-info-${scale}`)
        )}
      </div>
    </div>
  `,
};

export const AllColors: Story = {
  render: () => html`
    <div style="padding: 2rem;">
      <!-- Brand Info Banner -->
      <div
        style="
          padding: 1.5rem;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--sb-ui-color-primary-base) 0%, var(--sb-ui-color-secondary-base) 100%);
          color: white;
          border-radius: 12px;
        "
      >
        <h2 style="margin: 0 0 0.5rem 0;">Todos los Colores del Sistema</h2>
        <p style="margin: 0; opacity: 0.95;">
          <strong>🎨 Tip:</strong> Use el selector de marca en el toolbar superior para ver cómo
          cambian los colores automáticamente.
          <br />
          Cada marca tiene su propia paleta pero mantiene la misma estructura.
        </p>
      </div>

      <!-- Brand Examples -->
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background: var(--sb-ui-color-grayscale-L400);
          border-radius: 8px;
        "
      >
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Jelpit</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #2e0063; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #82e778; border-radius: 4px;"></div>
          </div>
        </div>
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Davivienda</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #e1111c; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #4b5c6f; border-radius: 4px;"></div>
          </div>
        </div>
        <div style="text-align: center;">
          <strong style="display: block; margin-bottom: 0.5rem;">Cien Cuadras</strong>
          <div style="display: flex; gap: 0.5rem; justify-content: center;">
            <div style="width: 40px; height: 40px; background: #006098; border-radius: 4px;"></div>
            <div style="width: 40px; height: 40px; background: #ffa533; border-radius: 4px;"></div>
          </div>
        </div>
      </div>

      ${renderColorScale('Primary', [
        'D400',
        'D300',
        'D200',
        'D100',
        'base',
        'L100',
        'L200',
        'L300',
        'L400',
      ])}
      ${renderColorScale('Secondary', [
        'D400',
        'D300',
        'D200',
        'D100',
        'base',
        'L100',
        'L200',
        'L300',
        'L400',
      ])}
      ${renderColorScale('Tertiary', [
        'D400',
        'D300',
        'D200',
        'D100',
        'base',
        'L100',
        'L200',
        'L300',
        'L400',
      ])}
      ${renderColorScale('Grayscale', [
        'black',
        'D400',
        'D300',
        'D200',
        'D100',
        'base',
        'L100',
        'L200',
        'L300',
        'L400',
        'white',
      ])}
    </div>
  `,
};
