// Componentes
export { BaseComponent } from './components/BaseComponent';
export { Button } from './components/Button';

// Utilidades
export { EventBus } from './utils/EventBus';
export { ThemeManager, themeManager } from './utils/ThemeManager';
export { Validator } from './utils/Validator';

// Tipos
export type { ValidationRule, ValidationResult } from './utils/Validator';

// Registro de componentes con Form.io
import { Button } from './components/Button';
import { EventBus } from './utils/EventBus';
import { ThemeManager, themeManager } from './utils/ThemeManager';
import { Validator } from './utils/Validator';

// Función para registrar componentes (será llamada externamente)
export function registerComponents(Components: any): void {
  Components.setComponent('button', Button);
}

// Configuración global
export const RootBlockFormIO = {
  version: '1.0.0',
  components: {
    Button,
  },
  utils: {
    EventBus,
    ThemeManager,
    Validator,
  },
  registerComponents,
};

// Auto-inicialización si está en el DOM
if (typeof window !== 'undefined') {
  // Inicializar theme manager
  themeManager;

  // Exponer globalmente para debugging
  (window as any).RootBlockFormIO = RootBlockFormIO;
}
