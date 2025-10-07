import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Modal Component
 *
 * @element rb-modal
 *
 * @fires rb-modal-open - Fired when modal opens
 * @fires rb-modal-close - Fired when modal closes
 *
 * @slot - Default slot for modal content
 * @slot header - Slot for custom header content
 * @slot footer - Slot for custom footer content
 *
 * @csspart backdrop - The modal backdrop
 * @csspart dialog - The modal dialog container
 * @csspart header - The modal header
 * @csspart body - The modal body
 * @csspart footer - The modal footer
 * @csspart close-button - The close button
 *
 * @example
 * ```html
 * <rb-modal open title="Mi Modal">
 *   <p>Contenido del modal</p>
 *   <div slot="footer">
 *     <button>Cancelar</button>
 *     <button>Aceptar</button>
 *   </div>
 * </rb-modal>
 * ```
 */
@customElement('rb-modal')
export class RbModal extends LitElement {
  static override styles = css`
    :host {
      --rb-modal-backdrop-bg: rgba(0, 0, 0, 0.5);
      --rb-modal-dialog-bg: var(--rb-color-grayscale-white, #ffffff);
      --rb-modal-dialog-width: 500px;
      --rb-modal-dialog-max-width: 90vw;
      --rb-modal-dialog-border-radius: 12px;
      --rb-modal-dialog-shadow: var(--rb-shadow-xl, 0 20px 25px rgba(0, 0, 0, 0.3));
      --rb-modal-padding: 1.5rem;
      --rb-modal-header-border-bottom: 1px solid var(--rb-color-grayscale-L200, #e1e1e1);
      --rb-modal-footer-border-top: 1px solid var(--rb-color-grayscale-L200, #e1e1e1);
    }

    :host([hidden]) {
      display: none;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: var(--rb-modal-backdrop-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 1rem;
      animation: fadeIn 0.2s ease;
    }

    .dialog {
      background: var(--rb-modal-dialog-bg);
      width: var(--rb-modal-dialog-width);
      max-width: var(--rb-modal-dialog-max-width);
      max-height: 90vh;
      border-radius: var(--rb-modal-dialog-border-radius);
      box-shadow: var(--rb-modal-dialog-shadow);
      display: flex;
      flex-direction: column;
      animation: slideUp 0.3s ease;
    }

    .header {
      padding: var(--rb-modal-padding);
      border-bottom: var(--rb-modal-header-border-bottom);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--rb-color-grayscale-D400, #282828);
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--rb-color-grayscale-base, #9b9b9b);
      padding: 0.25rem;
      line-height: 1;
      transition: color 0.2s ease;
    }

    .close-button:hover {
      color: var(--rb-color-grayscale-D400, #282828);
    }

    .body {
      padding: var(--rb-modal-padding);
      overflow-y: auto;
      flex: 1;
    }

    .footer {
      padding: var(--rb-modal-padding);
      border-top: var(--rb-modal-footer-border-top);
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .backdrop,
      .dialog {
        animation: none;
      }
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  title = '';

  @property({ type: Boolean, attribute: 'close-on-backdrop' })
  closeOnBackdrop = true;

  @property({ type: Boolean, attribute: 'show-close-button' })
  showCloseButton = true;

  override connectedCallback(): void {
    super.connectedCallback();
    if (this.open) {
      this._lockScroll();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._unlockScroll();
  }

  override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        this._lockScroll();
        this._dispatchEvent('rb-modal-open');
      } else {
        this._unlockScroll();
        this._dispatchEvent('rb-modal-close');
      }
    }
  }

  private _lockScroll(): void {
    document.body.style.overflow = 'hidden';
  }

  private _unlockScroll(): void {
    document.body.style.overflow = '';
  }

  private _handleBackdropClick(e: MouseEvent): void {
    if (this.closeOnBackdrop && e.target === e.currentTarget) {
      this.close();
    }
  }

  private _handleCloseClick(): void {
    this.close();
  }

  private _handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape' && this.open) {
      this.close();
    }
  }

  private _dispatchEvent(eventName: string, detail?: unknown): void {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Opens the modal
   */
  public openModal(): void {
    this.open = true;
  }

  /**
   * Closes the modal
   */
  public close(): void {
    this.open = false;
  }

  override render() {
    if (!this.open) {
      return html``;
    }

    return html`
      <div
        class="backdrop"
        part="backdrop"
        @click=${this._handleBackdropClick}
        @keydown=${this._handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div class="dialog" part="dialog" role="document">
          <div class="header" part="header">
            <h2 id="modal-title" class="title">
              <slot name="header">${this.title}</slot>
            </h2>
            ${this.showCloseButton
              ? html`
                  <button
                    class="close-button"
                    part="close-button"
                    @click=${this._handleCloseClick}
                    aria-label="Cerrar modal"
                  >
                    ×
                  </button>
                `
              : ''}
          </div>

          <div class="body" part="body">
            <slot></slot>
          </div>

          <div class="footer" part="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rb-modal': RbModal;
  }
}
