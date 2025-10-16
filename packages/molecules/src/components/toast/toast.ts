import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Toast Component - Root Block Design System
 *
 * Componente de notificaciones toast flotantes basado en alert.css
 * Soporta múltiples tipos, posiciones y auto-dismiss
 *
 * @element rb-toast
 *
 * @fires rb-toast-show - Fired when toast is shown
 * @fires rb-toast-hide - Fired when toast is hidden
 * @fires rb-toast-click - Fired when toast is clicked
 *
 * @slot - Default slot for toast content
 * @slot title - Slot for custom title content
 * @slot actions - Slot for custom action buttons
 *
 * @csspart toast - The main toast container
 * @csspart icon - The toast icon
 * @csspart content - The toast content wrapper
 * @csspart title - The toast title
 * @csspart message - The toast message
 * @csspart close - The close button
 * @csspart progress - The auto-dismiss progress bar
 *
 * @example
 * ```html
 * <rb-toast
 *   type="success"
 *   title="¡Éxito!"
 *   message="Operación completada correctamente"
 *   position="top-right"
 *   auto-dismiss="5000">
 * </rb-toast>
 * ```
 */
@customElement('rb-toast')
export class RbToast extends LitElement {
  static override styles = css`
    :host {
      /* Importar estilos base de alert.css mediante CSS custom properties */
      --rb-toast-bg-color: var(--rb-alert-bg-color, var(--rb-color-grayscale-white, #ffffff));
      --rb-toast-text-color: var(--rb-alert-text-color, var(--rb-color-grayscale-D300, #404040));
      --rb-toast-border-color: var(
        --rb-alert-border-color,
        var(--rb-color-grayscale-L200, #edeef0)
      );
      --rb-toast-shadow: var(--rb-alert-shadow-toast, 0 4px 16px rgba(0, 0, 0, 0.15));
      --rb-toast-border-radius: var(--rb-alert-border-radius, 8px);
      --rb-toast-padding: var(--rb-alert-padding, 1rem);
      --rb-toast-gap: var(--rb-alert-gap, 0.75rem);
      --rb-toast-font-family: var(
        --rb-alert-font-family,
        var(--rb-typography-fontFamily, 'Roboto', sans-serif)
      );
      --rb-toast-transition: var(--rb-alert-transition, all 0.2s ease);

      /* Posicionamiento */
      position: fixed;
      z-index: 1000;
      display: block;
      opacity: 0;
      transform: translateX(100%);
      transition: var(--rb-toast-transition);
    }

    :host([visible]) {
      opacity: 1;
      transform: translateX(0);
    }

    :host([position='top-right']) {
      top: 1rem;
      right: 1rem;
    }

    :host([position='top-left']) {
      top: 1rem;
      left: 1rem;
      transform: translateX(-100%);
    }

    :host([position='top-left'][visible]) {
      transform: translateX(0);
    }

    :host([position='top-center']) {
      top: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(-100%);
    }

    :host([position='top-center'][visible]) {
      transform: translateX(-50%) translateY(0);
    }

    :host([position='bottom-right']) {
      bottom: 1rem;
      right: 1rem;
      transform: translateX(100%) translateY(100%);
    }

    :host([position='bottom-right'][visible]) {
      transform: translateX(0) translateY(0);
    }

    :host([position='bottom-left']) {
      bottom: 1rem;
      left: 1rem;
      transform: translateX(-100%) translateY(100%);
    }

    :host([position='bottom-left'][visible]) {
      transform: translateX(0) translateY(0);
    }

    :host([position='bottom-center']) {
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%) translateY(100%);
    }

    :host([position='bottom-center'][visible]) {
      transform: translateX(-50%) translateY(0);
    }

    .toast {
      /* Aplicar estilos base de alert.css */
      display: flex;
      align-items: flex-start;
      gap: var(--rb-toast-gap);
      position: relative;
      box-sizing: border-box;
      min-height: 3rem;
      min-width: 300px;
      max-width: 400px;
      padding: var(--rb-toast-padding);
      background-color: var(--rb-toast-bg-color);
      border: 1px solid var(--rb-toast-border-color);
      border-left: 4px solid var(--rb-toast-border-color);
      border-radius: var(--rb-toast-border-radius);
      box-shadow: var(--rb-toast-shadow);
      font-family: var(--rb-toast-font-family);
      line-height: 1.25;
      color: var(--rb-toast-text-color);
      cursor: pointer;
      transition: var(--rb-toast-transition);
    }

    .toast:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;
      font-size: 1.25rem;
      flex-shrink: 0;
      margin-top: 0.125rem;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      min-width: 0;
    }

    .title {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.25;
      margin: 0;
      color: inherit;
    }

    .message {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25;
      margin: 0;
      color: inherit;
      opacity: 0.8;
    }

    .close {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      background: none;
      border: none;
      color: var(--rb-color-grayscale-base, #d9d9d9);
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1;
      cursor: pointer;
      border-radius: 4px;
      transition: var(--rb-toast-transition);
      flex-shrink: 0;
      margin-top: -0.125rem;
      margin-right: -0.25rem;
    }

    .close:hover {
      color: var(--rb-color-grayscale-D300, #404040);
      background-color: var(--rb-color-grayscale-L400, rgba(247, 247, 247, 0.5));
    }

    .close:focus-visible {
      outline: 2px solid var(--rb-color-primary-base, #007acc);
      outline-offset: 2px;
    }

    .progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background-color: var(--rb-color-primary-base, #007acc);
      border-radius: 0 0 var(--rb-toast-border-radius) var(--rb-toast-border-radius);
      transition: width linear;
      opacity: 0.7;
    }

    /* Toast Type Variants */
    :host([type='success']) .toast {
      --rb-toast-bg-color: var(--rb-color-feedback-success-L400, rgba(40, 167, 69, 0.1));
      --rb-toast-border-color: var(--rb-color-feedback-success-base, #28a745);
      --rb-toast-text-color: var(--rb-color-feedback-success-base, #28a745);
    }

    :host([type='success']) .icon::before {
      content: '✓';
      color: var(--rb-color-feedback-success-base, #28a745);
    }

    :host([type='success']) .progress {
      background-color: var(--rb-color-feedback-success-base, #28a745);
    }

    :host([type='info']) .toast {
      --rb-toast-bg-color: var(--rb-color-feedback-info-L400, rgba(0, 122, 204, 0.1));
      --rb-toast-border-color: var(--rb-color-feedback-info-base, #007acc);
      --rb-toast-text-color: var(--rb-color-feedback-info-base, #007acc);
    }

    :host([type='info']) .icon::before {
      content: 'i';
      font-style: italic;
      font-weight: 600;
      color: var(--rb-color-feedback-info-base, #007acc);
    }

    :host([type='info']) .progress {
      background-color: var(--rb-color-feedback-info-base, #007acc);
    }

    :host([type='warning']) .toast {
      --rb-toast-bg-color: var(--rb-color-feedback-warning-L400, rgba(255, 193, 7, 0.1));
      --rb-toast-border-color: var(--rb-color-feedback-warning-base, #ffc107);
      --rb-toast-text-color: var(--rb-color-feedback-warning-base, #ffc107);
    }

    :host([type='warning']) .icon::before {
      content: '⚠';
      color: var(--rb-color-feedback-warning-base, #ffc107);
    }

    :host([type='warning']) .progress {
      background-color: var(--rb-color-feedback-warning-base, #ffc107);
    }

    :host([type='error']) .toast {
      --rb-toast-bg-color: var(--rb-color-feedback-error-L400, rgba(220, 53, 69, 0.1));
      --rb-toast-border-color: var(--rb-color-feedback-error-base, #dc3545);
      --rb-toast-text-color: var(--rb-color-feedback-error-base, #dc3545);
    }

    :host([type='error']) .icon::before {
      content: '✕';
      color: var(--rb-color-feedback-error-base, #dc3545);
    }

    :host([type='error']) .progress {
      background-color: var(--rb-color-feedback-error-base, #dc3545);
    }

    /* Size Variants */
    :host([size='small']) .toast {
      min-height: 2.5rem;
      padding: 0.75rem;
      gap: 0.5rem;
    }

    :host([size='small']) .icon {
      width: 1rem;
      height: 1rem;
      font-size: 1rem;
    }

    :host([size='small']) .title,
    :host([size='small']) .message {
      font-size: 0.8125rem;
    }

    :host([size='small']) .close {
      width: 1.25rem;
      height: 1.25rem;
    }

    :host([size='large']) .toast {
      min-height: 3.5rem;
      padding: 1.25rem;
      gap: 1rem;
    }

    :host([size='large']) .icon {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
    }

    :host([size='large']) .title {
      font-size: 1rem;
    }

    :host([size='large']) .message {
      font-size: 0.9375rem;
    }

    :host([size='large']) .close {
      width: 1.75rem;
      height: 1.75rem;
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }

      .toast {
        transition: none;
      }

      .toast:hover {
        transform: none;
      }
    }

    @media (prefers-contrast: high) {
      .toast {
        border-width: 2px;
        border-left-width: 6px;
      }
    }

    /* Mobile Optimization */
    @media (max-width: 640px) {
      :host([position*='top']) {
        top: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: translateY(-100%);
      }

      :host([position*='top'][visible]) {
        transform: translateY(0);
      }

      :host([position*='bottom']) {
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
        transform: translateY(100%);
      }

      :host([position*='bottom'][visible]) {
        transform: translateY(0);
      }

      .toast {
        min-width: auto;
        max-width: none;
      }
    }
  `;

  @property({ type: String, reflect: true })
  type: 'info' | 'success' | 'warning' | 'error' = 'info';

  @property({ type: String, reflect: true })
  position:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right' = 'top-right';

  @property({ type: String, reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium';

  @property({ type: String })
  title = '';

  @property({ type: String })
  message = '';

  @property({ type: Boolean, reflect: true })
  visible = false;

  @property({ type: Boolean, attribute: 'show-close' })
  showClose = true;

  @property({ type: Number, attribute: 'auto-dismiss' })
  autoDismiss = 0; // 0 = no auto dismiss, > 0 = ms to auto dismiss

  @property({ type: Boolean, attribute: 'show-progress' })
  showProgress = false;

  @property({ type: Boolean })
  clickable = true;

  @state()
  private _progressWidth = 100;

  private _dismissTimer?: number;
  private _progressTimer?: number;

  override connectedCallback(): void {
    super.connectedCallback();
    // Auto-show when connected if visible is true
    if (this.visible) {
      this._setupAutoDismiss();
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._clearTimers();
  }

  override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('visible')) {
      if (this.visible) {
        this._dispatchEvent('rb-toast-show');
        this._setupAutoDismiss();
      } else {
        this._dispatchEvent('rb-toast-hide');
        this._clearTimers();
      }
    }

    if (changedProperties.has('autoDismiss') && this.visible) {
      this._setupAutoDismiss();
    }
  }

  private _setupAutoDismiss(): void {
    this._clearTimers();

    if (this.autoDismiss > 0) {
      // Setup progress bar animation if enabled
      if (this.showProgress) {
        this._progressWidth = 100;
        this.requestUpdate();

        // Start progress animation
        setTimeout(() => {
          this._progressWidth = 0;
          this.requestUpdate();
        }, 50);
      }

      // Setup auto dismiss timer
      this._dismissTimer = window.setTimeout(() => {
        this.hide();
      }, this.autoDismiss);
    }
  }

  private _clearTimers(): void {
    if (this._dismissTimer) {
      clearTimeout(this._dismissTimer);
      this._dismissTimer = undefined;
    }
    if (this._progressTimer) {
      clearTimeout(this._progressTimer);
      this._progressTimer = undefined;
    }
  }

  private _handleClick(): void {
    if (this.clickable) {
      this._dispatchEvent('rb-toast-click');
    }
  }

  private _handleCloseClick(e: MouseEvent): void {
    e.stopPropagation();
    this.hide();
  }

  private _handleKeyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.hide();
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
   * Shows the toast
   */
  public show(): void {
    this.visible = true;
  }

  /**
   * Hides the toast
   */
  public hide(): void {
    this.visible = false;
  }

  /**
   * Toggles the toast visibility
   */
  public toggle(): void {
    this.visible = !this.visible;
  }

  /**
   * Pauses auto-dismiss timer (useful on hover)
   */
  public pauseAutoDismiss(): void {
    this._clearTimers();
  }

  /**
   * Resumes auto-dismiss timer
   */
  public resumeAutoDismiss(): void {
    if (this.visible && this.autoDismiss > 0) {
      this._setupAutoDismiss();
    }
  }

  override render() {
    const progressStyle =
      this.showProgress && this.autoDismiss > 0
        ? `width: ${this._progressWidth}%; transition-duration: ${this.autoDismiss}ms;`
        : 'display: none;';

    return html`
      <div
        class="toast"
        part="toast"
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
        @mouseenter=${this.pauseAutoDismiss}
        @mouseleave=${this.resumeAutoDismiss}
        tabindex="0"
        role="alert"
        aria-live="polite"
        aria-atomic="true"
      >
        <div class="icon" part="icon">
          <slot name="icon"></slot>
        </div>

        <div class="content" part="content">
          ${this.title
            ? html`
                <div class="title" part="title">
                  <slot name="title">${this.title}</slot>
                </div>
              `
            : ''}

          <div class="message" part="message">
            <slot>${this.message}</slot>
          </div>

          <slot name="actions"></slot>
        </div>

        ${this.showClose
          ? html`
              <button
                class="close"
                part="close"
                @click=${this._handleCloseClick}
                aria-label="Cerrar notificación"
                type="button"
              >
                ×
              </button>
            `
          : ''}

        <div class="progress" part="progress" style=${progressStyle}></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rb-toast': RbToast;
  }
}
