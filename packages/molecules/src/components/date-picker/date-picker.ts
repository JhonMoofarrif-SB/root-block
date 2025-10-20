import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Date Picker Component (Placeholder)
 * TODO: Implementar funcionalidad completa
 *
 * @element sb-ui-date-picker
 */
@customElement('sb-ui-date-picker')
export class SbDatePicker extends LitElement {
  static override styles = css`
    :host {
      display: block;
      --sb-ui-date-picker-border: 1px solid var(--sb-ui-color-grayscale-L200, #e1e1e1);
      --sb-ui-date-picker-border-radius: 8px;
      --sb-ui-date-picker-padding: 0.75rem 1rem;
    }

    .date-picker {
      border: var(--sb-ui-date-picker-border);
      border-radius: var(--sb-ui-date-picker-border-radius);
      padding: var(--sb-ui-date-picker-padding);
      font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
      cursor: pointer;
      background: var(--sb-ui-color-grayscale-white, #ffffff);
    }

    .date-picker:hover {
      border-color: var(--sb-ui-color-primary-base, #007acc);
    }

    .date-picker:focus {
      outline: 2px solid var(--sb-ui-color-primary-base, #007acc);
      outline-offset: 2px;
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: String })
  placeholder = 'Seleccionar fecha';

  override render() {
    return html`
      <div class="date-picker" tabindex="0" role="button" aria-label="Seleccionar fecha">
        ${this.value || this.placeholder}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sb-ui-date-picker': SbDatePicker;
  }
}
