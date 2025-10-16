import { BaseComponent } from './BaseComponent';
import { EventBus } from '../utils/EventBus';

/**
 * Button Component para Form.io
 * Integra el Root Block Design System con Form.io
 */
export class Button extends BaseComponent {
  static schema = {
    type: 'button',
    label: 'Button',
    key: 'button',
    input: true,
    tableView: false,
    components: [],
    displayInTable: false,
  };

  static editForm = {
    components: [
      {
        type: 'tabs',
        key: 'tabs',
        components: [
          {
            label: 'Display',
            key: 'display',
            weight: 0,
            components: [
              {
                type: 'textfield',
                input: true,
                key: 'label',
                label: 'Label',
                placeholder: 'Button Text',
                tooltip: 'The text to display on the button',
                validate: {
                  required: true,
                },
              },
              {
                type: 'select',
                input: true,
                key: 'variant',
                label: 'Variant',
                placeholder: 'Select variant',
                data: {
                  values: [
                    { label: 'Primary', value: 'primary' },
                    { label: 'Secondary', value: 'secondary' },
                    { label: 'Tertiary', value: 'tertiary' },
                    { label: 'Quaternary', value: 'quaternary' },
                    { label: 'Quinary', value: 'quinary' },
                    { label: 'Danger', value: 'danger' },
                    { label: 'Success', value: 'success' },
                  ],
                },
                defaultValue: 'primary',
              },
              {
                type: 'select',
                input: true,
                key: 'styleVariant',
                label: 'Style',
                placeholder: 'Select style',
                data: {
                  values: [
                    { label: 'Stroke (Default)', value: 'stroke' },
                    { label: 'Fill', value: 'fill' },
                    { label: 'Text', value: 'text' },
                  ],
                },
                defaultValue: 'stroke',
              },
              {
                type: 'select',
                input: true,
                key: 'size',
                label: 'Size',
                placeholder: 'Select size',
                data: {
                  values: [
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                  ],
                },
                defaultValue: 'medium',
              },
              {
                type: 'select',
                input: true,
                key: 'iconPosition',
                label: 'Icon Position',
                placeholder: 'Select icon position',
                data: {
                  values: [
                    { label: 'No Icon', value: 'none' },
                    { label: 'Icon Left', value: 'left' },
                    { label: 'Icon Right', value: 'right' },
                    { label: 'Icon Only', value: 'only' },
                  ],
                },
                defaultValue: 'none',
              },
              {
                type: 'textfield',
                input: true,
                key: 'icon',
                label: 'Icon (SVG or class)',
                placeholder: 'Enter SVG or icon class',
                conditional: {
                  show: true,
                  when: 'iconPosition',
                  eq: ['left', 'right', 'only'],
                },
              },
              {
                type: 'checkbox',
                input: true,
                key: 'block',
                label: 'Full Width (Block)',
              },
              {
                type: 'checkbox',
                input: true,
                key: 'disabled',
                label: 'Disabled',
              },
            ],
          },
          {
            label: 'Action',
            key: 'action',
            weight: 1,
            components: [
              {
                type: 'select',
                input: true,
                key: 'action',
                label: 'Action',
                placeholder: 'Select action',
                data: {
                  values: [
                    { label: 'Submit', value: 'submit' },
                    { label: 'Reset', value: 'reset' },
                    { label: 'Custom', value: 'custom' },
                    { label: 'Event', value: 'event' },
                  ],
                },
                defaultValue: 'submit',
              },
              {
                type: 'textfield',
                input: true,
                key: 'customAction',
                label: 'Custom Action',
                placeholder: 'Enter custom action',
                conditional: {
                  show: true,
                  when: 'action',
                  eq: 'custom',
                },
              },
              {
                type: 'textfield',
                input: true,
                key: 'event',
                label: 'Event Name',
                placeholder: 'Enter event name',
                conditional: {
                  show: true,
                  when: 'action',
                  eq: 'event',
                },
              },
            ],
          },
        ],
      },
    ],
  };

  constructor(component: any, options: any, data: any) {
    super(component, options, data);
    this.component.variant = this.component.variant || 'primary';
    this.component.styleVariant = this.component.styleVariant || 'stroke';
    this.component.size = this.component.size || 'medium';
    this.component.iconPosition = this.component.iconPosition || 'none';
  }

  /**
   * Renderiza el componente Button
   */
  render(): string {
    const classes = this.buildCSSClasses();
    const attributes = this.buildAttributes();
    const content = this.buildContent();

    return `
      <div class="formio-component formio-component-button rb-button-wrapper" ref="component">
        <button 
          ${attributes}
          class="${classes}"
          ref="button"
          style="all: unset; box-sizing: border-box;"
        >
          ${content}
        </button>
      </div>
    `;
  }

  /**
   * Construye las clases CSS del botón
   */
  private buildCSSClasses(): string {
    const classes = ['rb-button'];

    // Variant
    if (this.component.variant && this.component.variant !== 'primary') {
      classes.push(`rb-button--${this.component.variant}`);
    } else {
      classes.push('rb-button--primary');
    }

    // Style variant
    if (this.component.styleVariant && this.component.styleVariant !== 'stroke') {
      classes.push(`rb-button--${this.component.styleVariant}`);
    }

    // Size
    if (this.component.size && this.component.size !== 'medium') {
      classes.push(`rb-button--${this.component.size}`);
    }

    // Icon position
    if (this.component.iconPosition && this.component.iconPosition !== 'none') {
      const iconClass =
        this.component.iconPosition === 'only'
          ? 'icon-only'
          : `icon-${this.component.iconPosition}`;
      classes.push(`rb-button--${iconClass}`);
    }

    // Block
    if (this.component.block) {
      classes.push('rb-button--block');
    }

    // Loading state
    if (this.loading) {
      classes.push('rb-button--loading');
    }

    return classes.join(' ');
  }

  /**
   * Construye los atributos del botón
   */
  private buildAttributes(): string {
    const attributes = [];

    // Type
    const actionType = this.getActionType();
    attributes.push(`type="${actionType}"`);

    // Disabled
    if (this.component.disabled || this.disabled) {
      attributes.push('disabled');
    }

    // ID
    if (this.component.id) {
      attributes.push(`id="${this.component.id}"`);
    }

    // Name
    if (this.component.key) {
      attributes.push(`name="${this.component.key}"`);
    }

    // Data attributes
    attributes.push(`data-component-key="${this.component.key}"`);
    attributes.push(`data-variant="${this.component.variant}"`);
    attributes.push(`data-style="${this.component.styleVariant}"`);

    return attributes.join(' ');
  }

  /**
   * Construye el contenido del botón
   */
  private buildContent(): string {
    const parts = [];

    // Icon left
    if (this.component.iconPosition === 'left' && this.component.icon) {
      parts.push(this.renderIcon());
    }

    // Text (solo si no es icon-only)
    if (this.component.iconPosition !== 'only') {
      parts.push(this.component.label || 'Button');
    }

    // Icon right
    if (this.component.iconPosition === 'right' && this.component.icon) {
      parts.push(this.renderIcon());
    }

    // Icon only
    if (this.component.iconPosition === 'only' && this.component.icon) {
      parts.push(this.renderIcon());
    }

    return parts.join('');
  }

  /**
   * Renderiza el icono
   */
  private renderIcon(): string {
    if (!this.component.icon) return '';

    // Si es SVG directo
    if (this.component.icon.includes('<svg')) {
      return this.component.icon;
    }

    // Si es una clase de icono
    return `<i class="${this.component.icon}"></i>`;
  }

  /**
   * Obtiene el tipo de acción del botón
   */
  private getActionType(): string {
    switch (this.component.action) {
      case 'submit':
        return 'submit';
      case 'reset':
        return 'reset';
      default:
        return 'button';
    }
  }

  /**
   * Maneja el evento click del botón
   */
  attach(element: HTMLElement): Promise<void> {
    return super.attach(element).then(() => {
      const button = this.refs.button;
      if (button) {
        button.addEventListener('click', this.onClick.bind(this));
      }
    });
  }

  /**
   * Evento click del botón
   */
  private onClick(event: Event): void {
    event.preventDefault();

    if (this.component.disabled || this.disabled || this.loading) {
      return;
    }

    // Emitir evento personalizado
    EventBus.emit('button:click', {
      component: this.component,
      instance: this,
      event,
    });

    // Manejar acciones
    this.handleAction();
  }

  /**
   * Maneja la acción del botón
   */
  private handleAction(): void {
    switch (this.component.action) {
      case 'submit':
        this.handleSubmit();
        break;
      case 'reset':
        this.handleReset();
        break;
      case 'custom':
        this.handleCustomAction();
        break;
      case 'event':
        this.handleEvent();
        break;
    }
  }

  /**
   * Maneja la acción de submit
   */
  private handleSubmit(): void {
    if (this.root && this.root.submit) {
      this.setLoading(true);
      this.root
        .submit()
        .then(() => {
          this.setLoading(false);
        })
        .catch(() => {
          this.setLoading(false);
        });
    }
  }

  /**
   * Maneja la acción de reset
   */
  private handleReset(): void {
    if (this.root && this.root.reset) {
      this.root.reset();
    }
  }

  /**
   * Maneja acciones personalizadas
   */
  private handleCustomAction(): void {
    if (this.component.customAction) {
      // Evaluar la acción personalizada de forma segura
      try {
        const func = new Function('component', 'form', this.component.customAction);
        func(this, this.root);
      } catch (error) {
        console.error('Error executing custom action:', error);
      }
    }
  }

  /**
   * Maneja eventos personalizados
   */
  private handleEvent(): void {
    if (this.component.event) {
      EventBus.emit(this.component.event, {
        component: this.component,
        instance: this,
        form: this.root,
      });
    }
  }

  /**
   * Establece el estado de loading
   */
  setLoading(loading: boolean): void {
    this.loading = loading;

    if (this.refs.button) {
      if (loading) {
        this.refs.button.classList.add('rb-button--loading');
        this.refs.button.setAttribute('disabled', 'true');
      } else {
        this.refs.button.classList.remove('rb-button--loading');
        if (!this.component.disabled && !this.disabled) {
          this.refs.button.removeAttribute('disabled');
        }
      }
    }
  }

  /**
   * Actualiza el texto del botón
   */
  updateLabel(label: string): void {
    this.component.label = label;
    this.redraw();
  }

  /**
   * Actualiza la variante del botón
   */
  updateVariant(variant: string): void {
    this.component.variant = variant;
    this.redraw();
  }

  /**
   * Obtiene el valor del componente (para Form.io)
   */
  getValue(): any {
    return this.dataValue;
  }

  /**
   * Establece el valor del componente (para Form.io)
   */
  setValue(value: any): boolean {
    this.dataValue = value;
    return true;
  }
}
