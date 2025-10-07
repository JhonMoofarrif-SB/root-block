import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Dropdown Component (Placeholder)
 * TODO: Implementar funcionalidad completa
 *
 * @element rb-dropdown
 */
@customElement('rb-dropdown')
export class RbDropdown extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      --rb-dropdown-border: 1px solid var(--rb-color-grayscale-L200, #e1e1e1);
      --rb-dropdown-border-radius: 8px;
      --rb-dropdown-padding: 0.75rem 1rem;
    }

    .dropdown {
      border: var(--rb-dropdown-border);
      border-radius: var(--rb-dropdown-border-radius);
      padding: var(--rb-dropdown-padding);
      font-family: var(--rb-typography-fontFamily, 'Roboto', sans-serif);
      cursor: pointer;
      background: var(--rb-color-grayscale-white, #ffffff);
      min-width: 200px;
    }

    .dropdown:hover {
      border-color: var(--rb-color-primary-base, #007acc);
    }

    .dropdown:focus {
      outline: 2px solid var(--rb-color-primary-base, #007acc);
      outline-offset: 2px;
    }
  `;

  @property({ type: String })
  value = '';

  @property({ type: String })
  placeholder = 'Seleccionar opción';

  override render() {
    return html`
      <div class="dropdown" tabindex="0" role="combobox" aria-label="Dropdown">
        ${this.value || this.placeholder}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rb-dropdown': RbDropdown;
  }
}
