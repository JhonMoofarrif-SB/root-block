/**
 * Base class para todos los componentes del Root Block Design System
 */
export abstract class BaseComponent {
  protected loading: boolean = false;
  protected component: any;
  protected options: any;
  protected data: any;
  protected element?: HTMLElement;
  protected refs: { [key: string]: HTMLElement } = {};
  protected disabled: boolean = false;
  protected dataValue: any = null;
  protected root?: any;

  constructor(component: any, options: any, data: any) {
    this.component = component;
    this.options = options;
    this.data = data;
    this.init();
  }

  /**
   * Inicialización del componente
   */
  protected init(): void {
    // Aplicar tema si está disponible
    this.applyTheme();

    // Configurar eventos globales
    this.setupGlobalEvents();
  }

  /**
   * Aplica el tema actual
   */
  protected applyTheme(): void {
    // Implementación específica en cada componente si es necesario
  }

  /**
   * Configura eventos globales
   */
  protected setupGlobalEvents(): void {
    // Escuchar cambios de tema
    document.addEventListener('rb:theme-change', this.onThemeChange.bind(this) as EventListener);
  }

  /**
   * Maneja cambios de tema
   */
  protected onThemeChange(_event: Event): void {
    this.applyTheme();
    this.redraw();
  }

  /**
   * Destructor del componente
   */
  destroy(): void {
    document.removeEventListener('rb:theme-change', this.onThemeChange.bind(this) as EventListener);
  }

  /**
   * Método abstracto para renderizar el componente
   */
  abstract render(): string;

  /**
   * Valida el componente
   */
  checkValidity(_data?: any, _dirty?: boolean, _row?: any): boolean {
    // Implementación base de validación
    return true;
  }

  /**
   * Redibuja el componente
   */
  redraw(): void {
    if (this.element) {
      this.element.innerHTML = this.render();
    }
  }

  /**
   * Attach del componente al DOM
   */
  attach(element: HTMLElement): Promise<void> {
    this.element = element;
    element.innerHTML = this.render();
    return Promise.resolve();
  }

  /**
   * Obtiene las clases CSS base para todos los componentes
   */
  protected getBaseClasses(): string[] {
    return [
      'rb-component',
      `rb-component--${this.component.type}`,
      this.component.disabled ? 'rb-component--disabled' : '',
      this.loading ? 'rb-component--loading' : '',
    ].filter(Boolean);
  }

  /**
   * Construye atributos HTML comunes
   */
  protected buildCommonAttributes(): { [key: string]: string } {
    const attrs: { [key: string]: string } = {};

    if (this.component.id) {
      attrs.id = this.component.id;
    }

    if (this.component.key) {
      attrs['data-component-key'] = this.component.key;
    }

    if (this.component.disabled) {
      attrs.disabled = 'true';
    }

    return attrs;
  }

  /**
   * Convierte objeto de atributos a string HTML
   */
  protected attributesToString(attributes: { [key: string]: string }): string {
    return Object.entries(attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  }

  /**
   * Sanitiza HTML para prevenir XSS
   */
  protected sanitizeHTML(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  /**
   * Emite un evento personalizado
   */
  protected emit(eventName: string, data?: any): void {
    const event = new CustomEvent(`rb:${eventName}`, {
      detail: {
        component: this.component,
        instance: this,
        data,
      },
    });

    if (this.element) {
      this.element.dispatchEvent(event);
    } else {
      document.dispatchEvent(event);
    }
  }

  /**
   * Maneja errores de forma consistente
   */
  protected handleError(error: Error, context?: string): void {
    console.error(`[${this.component.type}${context ? ` - ${context}` : ''}]:`, error);

    this.emit('error', {
      error: error.message,
      context,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Obtiene el valor por defecto del componente
   */
  getDefaultValue(): any {
    return this.component.defaultValue || null;
  }

  /**
   * Verifica si el componente está en modo de solo lectura
   */
  get isReadOnly(): boolean {
    return this.options.readOnly || this.component.disabled || false;
  }

  /**
   * Verifica si el componente es requerido
   */
  get isRequired(): boolean {
    return this.component.validate?.required || false;
  }

  /**
   * Obtiene el label del componente
   */
  get label(): string {
    return this.component.label || this.component.key || '';
  }

  /**
   * Obtiene la descripción del componente
   */
  get description(): string {
    return this.component.description || '';
  }

  /**
   * Obtiene el placeholder del componente
   */
  get placeholder(): string {
    return this.component.placeholder || '';
  }
}
