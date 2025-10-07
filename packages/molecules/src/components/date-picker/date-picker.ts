import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Date Picker Component (Placeholder)
 * TODO: Implementar funcionalidad completa
 *
 * @element rb-date-picker
 */
@customElement('rb-date-picker')
export class RbDatePicker extends LitElement {
  static override styles = css`
    :host {
      display: block;
      --rb-date-picker-border: 1px solid var(--rb-color-grayscale-L200, #e1e1e1);
      --rb-date-picker-border-radius: 8px;
      --rb-date-picker-padding: 0.75rem 1rem;
    }

    .date-picker {
      border: var(--rb-date-picker-border);
      border-radius: var(--rb-date-picker-border-radius);
      padding: var(--rb-date-picker-padding);
      font-family: var(--rb-typography-fontFamily, 'Roboto', sans-serif);
      cursor: pointer;
      background: var(--rb-color-grayscale-white, #ffffff);
    }

    .date-picker:hover {
      border-color: var(--rb-color-primary-base, #007acc);
    }

    .date-picker:focus {
      outline: 2px solid var(--rb-color-primary-base, #007acc);
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
    'rb-date-picker': RbDatePicker;
  }
}
