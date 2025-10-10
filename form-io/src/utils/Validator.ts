/**
 * Validator utilities para componentes Form.io
 */
export class Validator {
  /**
   * Valida un email
   */
  static email(value: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  /**
   * Valida que un valor sea requerido
   */
  static required(value: any): boolean {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'object') return Object.keys(value).length > 0;
    return Boolean(value);
  }

  /**
   * Valida longitud mínima
   */
  static minLength(value: string, min: number): boolean {
    return Boolean(value && value.length >= min);
  }

  /**
   * Valida longitud máxima
   */
  static maxLength(value: string, max: number): boolean {
    return !value || value.length <= max;
  }

  /**
   * Valida valor mínimo
   */
  static min(value: number, min: number): boolean {
    return value >= min;
  }

  /**
   * Valida valor máximo
   */
  static max(value: number, max: number): boolean {
    return value <= max;
  }

  /**
   * Valida patrón regex
   */
  static pattern(value: string, pattern: string | RegExp): boolean {
    const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
    return regex.test(value);
  }

  /**
   * Valida número de teléfono
   */
  static phone(value: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''));
  }

  /**
   * Valida URL
   */
  static url(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Valida fecha
   */
  static date(value: string): boolean {
    const date = new Date(value);
    return date instanceof Date && !isNaN(date.getTime());
  }

  /**
   * Valida número
   */
  static number(value: any): boolean {
    return !isNaN(value) && !isNaN(parseFloat(value));
  }

  /**
   * Valida entero
   */
  static integer(value: any): boolean {
    return Number.isInteger(Number(value));
  }

  /**
   * Ejecuta múltiples validaciones
   */
  static validate(value: any, rules: ValidationRule[]): ValidationResult {
    const errors: string[] = [];

    for (const rule of rules) {
      const isValid = this.executeRule(value, rule);
      if (!isValid) {
        errors.push(rule.message || `Validation failed for rule: ${rule.type}`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Ejecuta una regla de validación específica
   */
  private static executeRule(value: any, rule: ValidationRule): boolean {
    switch (rule.type) {
      case 'required':
        return this.required(value);
      case 'email':
        return !value || this.email(value);
      case 'minLength':
        return !value || this.minLength(value, rule.value as number);
      case 'maxLength':
        return !value || this.maxLength(value, rule.value as number);
      case 'min':
        return !value || this.min(Number(value), rule.value as number);
      case 'max':
        return !value || this.max(Number(value), rule.value as number);
      case 'pattern':
        return !value || this.pattern(value, rule.value as string | RegExp);
      case 'phone':
        return !value || this.phone(value);
      case 'url':
        return !value || this.url(value);
      case 'date':
        return !value || this.date(value);
      case 'number':
        return !value || this.number(value);
      case 'integer':
        return !value || this.integer(value);
      case 'custom':
        return rule.validator ? rule.validator(value) : true;
      default:
        console.warn(`Unknown validation rule: ${rule.type}`);
        return true;
    }
  }

  /**
   * Sanitiza HTML para prevenir XSS
   */
  static sanitizeHTML(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  /**
   * Escapa caracteres especiales para regex
   */
  static escapeRegex(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * Normaliza un string (quita acentos, convierte a minúsculas)
   */
  static normalize(str: string): string {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  /**
   * Valida formato de fecha específico
   */
  static dateFormat(value: string, format: string): boolean {
    // Implementación básica para formatos comunes
    const formats: { [key: string]: RegExp } = {
      'YYYY-MM-DD': /^\d{4}-\d{2}-\d{2}$/,
      'DD/MM/YYYY': /^\d{2}\/\d{2}\/\d{4}$/,
      'MM/DD/YYYY': /^\d{2}\/\d{2}\/\d{4}$/,
      'DD-MM-YYYY': /^\d{2}-\d{2}-\d{4}$/
    };

    const regex = formats[format];
    if (!regex) {
      console.warn(`Unsupported date format: ${format}`);
      return this.date(value);
    }

    return regex.test(value) && this.date(value);
  }
}

// Tipos para validación
export interface ValidationRule {
  type: string;
  value?: any;
  message?: string;
  validator?: (value: any) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}
