# 🎨 Seguros Bolivar UI Design System - Form.io Integration

> Integración completa del Seguros Bolivar UI Design System con Form.io, incluyendo componentes personalizados y estilos optimizados.

## 🚀 Características

- ✅ **Componente Button** completo con todas las variantes del Seguros Bolivar UI Design System
- ✅ **Integración nativa** con Form.io sin conflictos
- ✅ **Multi-marca** - Soporte para 6 marcas diferentes
- ✅ **Multi-tema** - Light y Dark themes
- ✅ **TypeScript** - Type-safe y con IntelliSense
- ✅ **Bundle optimizado** - Minificado y comprimido
- ✅ **Event Bus** - Comunicación entre componentes
- ✅ **Theme Manager** - Cambio dinámico de temas
- ✅ **Validaciones** - Sistema de validación integrado

## 📦 Instalación

### Opción 1: NPM Package (Recomendado)

```bash
npm install @seguros-bolivar-ui/formio
```

### Opción 2: CDN

```html
<!-- Cargar Form.io primero -->
<script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>

<!-- Cargar Seguros Bolivar UI Form.io Bundle -->
<link
  rel="stylesheet"
  href="https://cdn.rootblock.com/formio/seguros-bolivar-ui-formio-davivienda-light.min.css"
/>
<script src="https://cdn.rootblock.com/formio/seguros-bolivar-ui-formio.min.js"></script>
```

### Opción 3: Bundle Completo (CSS + JS)

```html
<!-- Cargar Form.io primero -->
<script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>

<!-- Bundle completo en un archivo -->
<script src="https://cdn.rootblock.com/formio/seguros-bolivar-ui-formio-complete-davivienda.bundle.js"></script>
```

## 🎯 Uso Básico

### 1. Configuración del Formulario

```javascript
import { Formio } from 'formiojs';
import '@seguros-bolivar-ui/formio'; // Auto-registra los componentes

const form = await Formio.createForm(document.getElementById('formio'), {
  components: [
    {
      type: 'button',
      key: 'submitButton',
      label: 'Enviar Formulario',
      variant: 'primary',
      styleVariant: 'fill',
      size: 'large',
      action: 'submit',
      block: true,
    },
  ],
});
```

### 2. Configuración con Tema

```html
<!DOCTYPE html>
<html data-sb-ui-brand="davivienda" data-sb-ui-theme="light">
  <head>
    <meta name="sb-ui-css-base-url" content="/assets/css" />
    <link rel="stylesheet" href="seguros-bolivar-ui-formio-davivienda-light.min.css" />
  </head>
  <body>
    <div id="formio"></div>

    <script src="formio.full.min.js"></script>
    <script src="seguros-bolivar-ui-formio.min.js"></script>
    <script>
      // El tema se aplica automáticamente
      Formio.createForm(document.getElementById('formio'), formSchema);
    </script>
  </body>
</html>
```

## 🎨 Componente Button

### Propiedades Disponibles

| Propiedad      | Tipo      | Default     | Descripción                                                               |
| -------------- | --------- | ----------- | ------------------------------------------------------------------------- |
| `variant`      | `string`  | `'primary'` | Color: primary, secondary, tertiary, quaternary, quinary, danger, success |
| `styleVariant` | `string`  | `'stroke'`  | Estilo: stroke, fill, text                                                |
| `size`         | `string`  | `'medium'`  | Tamaño: small, medium, large                                              |
| `iconPosition` | `string`  | `'none'`    | Posición del icono: none, left, right, only                               |
| `icon`         | `string`  | `''`        | SVG o clase CSS del icono                                                 |
| `block`        | `boolean` | `false`     | Botón de ancho completo                                                   |
| `action`       | `string`  | `'submit'`  | Acción: submit, reset, custom, event                                      |
| `disabled`     | `boolean` | `false`     | Estado deshabilitado                                                      |

### Ejemplos de Configuración

```javascript
// Botón Primary Fill
{
  type: 'button',
  key: 'primaryButton',
  label: 'Primary Button',
  variant: 'primary',
  styleVariant: 'fill',
  size: 'large'
}

// Botón con Icono
{
  type: 'button',
  key: 'iconButton',
  label: 'Guardar',
  variant: 'success',
  styleVariant: 'fill',
  iconPosition: 'left',
  icon: '<svg>...</svg>' // o 'fas fa-save'
}

// Botón Solo Icono
{
  type: 'button',
  key: 'iconOnlyButton',
  variant: 'secondary',
  iconPosition: 'only',
  icon: '<svg>...</svg>',
  size: 'small'
}

// Botón de Acción Personalizada
{
  type: 'button',
  key: 'customButton',
  label: 'Acción Custom',
  variant: 'tertiary',
  action: 'custom',
  customAction: 'console.log("Custom action executed!", component, form);'
}
```

## 🎭 Marcas y Temas Disponibles

### Marcas

- `white-label` - Tema genérico
- `jelpit` - Jelpit
- `davivienda` - Davivienda (con animaciones especiales)
- `cien-cuadras` - Cien Cuadras
- `doctor-aki` - Doctor Aki
- `seguros-bolivar` - Seguros Bolívar

### Temas

- `light` - Tema claro
- `dark` - Tema oscuro

### Cambio Dinámico de Tema

```javascript
import { themeManager } from '@seguros-bolivar-ui/formio';

// Cambiar marca
themeManager.setBrand('davivienda');

// Cambiar tema
themeManager.setTheme('dark');

// Alternar tema
themeManager.toggleTheme();

// Escuchar cambios
document.addEventListener('sb-ui:theme-change', (event) => {
  console.log('Nuevo tema:', event.detail);
});
```

## 🔧 API Avanzada

### Event Bus

```javascript
import { EventBus } from '@seguros-bolivar-ui/formio';

// Escuchar eventos de botón
EventBus.on('button:click', (data) => {
  console.log('Botón clickeado:', data);
});

// Emitir eventos personalizados
EventBus.emit('custom:event', { message: 'Hello' });
```

### Validaciones

```javascript
import { Validator } from '@seguros-bolivar-ui/formio';

// Validar email
const isValid = Validator.email('user@example.com');

// Validaciones múltiples
const result = Validator.validate('test@email.com', [
  { type: 'required', message: 'Email es requerido' },
  { type: 'email', message: 'Email inválido' },
]);

console.log(result.isValid, result.errors);
```

### Componente Personalizado

```javascript
import { BaseComponent } from '@seguros-bolivar-ui/formio';

class CustomComponent extends BaseComponent {
  static schema = {
    type: 'custom',
    label: 'Custom Component',
    key: 'custom',
  };

  render() {
    return `<div class="custom-component">Custom Content</div>`;
  }
}

// Registrar componente
Components.setComponent('custom', CustomComponent);
```

## 📁 Estructura de Archivos

```
form-io/
├── dist/                                    # Archivos compilados
│   ├── seguros-bolivar-ui-formio-{brand}-{theme}.min.css  # CSS por marca
│   ├── seguros-bolivar-ui-formio.min.css                  # CSS universal
│   ├── seguros-bolivar-ui-formio.min.js                   # JS minificado
│   ├── seguros-bolivar-ui-formio.bundle.js                # JS desarrollo
│   ├── seguros-bolivar-ui-formio-complete-{brand}.bundle.js # Bundle completo
│   └── INSTRUCTIONS.md                             # Instrucciones
├── src/
│   ├── components/
│   │   ├── BaseComponent.ts                # Componente base
│   │   └── Button.ts                       # Componente Button
│   ├── utils/
│   │   ├── EventBus.ts                     # Sistema de eventos
│   │   ├── ThemeManager.ts                 # Gestor de temas
│   │   └── Validator.ts                    # Validaciones
│   ├── styles/
│   │   ├── formio-integration.css          # Estilos Form.io
│   │   └── index.css                       # CSS principal
│   └── index.ts                            # Entry point
├── scripts/
│   └── build-bundle.js                     # Script de build
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Build y Desarrollo

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Watch mode TypeScript
npm run build        # Build completo
npm run build:ts     # Solo TypeScript
npm run build:bundle # Solo bundles

# Utilidades
npm run clean        # Limpiar dist/
npm run lint         # Linter
npm run test         # Tests
```

### Build Manual

```bash
# Instalar dependencias
npm install

# Build completo
npm run build

# Los archivos se generan en dist/
```

## 📊 Tamaños de Bundle

| Archivo                                             | Tamaño | Gzip  | Descripción           |
| --------------------------------------------------- | ------ | ----- | --------------------- |
| `seguros-bolivar-ui-formio.min.css`                 | ~15KB  | ~3KB  | CSS universal         |
| `seguros-bolivar-ui-formio-{brand}-{theme}.min.css` | ~18KB  | ~4KB  | CSS con tokens        |
| `seguros-bolivar-ui-formio.min.js`                  | ~25KB  | ~8KB  | JavaScript minificado |
| Bundle completo                                     | ~43KB  | ~12KB | CSS + JS combinado    |

## 🔧 Configuración Avanzada

### Personalización de Estilos

```css
/* Sobrescribir variables CSS */
:root {
  --sb-ui-button-border-radius: 8px;
  --sb-ui-button-font-weight: 600;
}

/* Estilos específicos para Form.io */
.formio-component-button .sb-ui-button {
  margin-bottom: 1rem;
}
```

### Configuración de Form.io

```javascript
// Configurar Form.io para usar Seguros Bolivar UI
Formio.use({
  framework: 'rootblock',
  iconset: 'fontawesome',
});

// Configurar validaciones globales
Formio.validators.rootblock = {
  key: 'rootblock',
  message: 'Validation failed',
  check: (component, setting, value) => {
    return Validator.validate(value, component.validate?.rules || []);
  },
};
```

## 🐛 Troubleshooting

### Problemas Comunes

1. **Estilos no se aplican**
   - Verificar que el CSS se carga antes que el JS
   - Comprobar que `data-sb-ui-brand` está en el HTML

2. **Componentes no aparecen**
   - Asegurar que Form.io se carga antes que Seguros Bolivar UI
   - Verificar que el componente está registrado correctamente

3. **Temas no cambian**
   - Verificar que `ThemeManager` está inicializado
   - Comprobar que los archivos CSS de tema existen

### Debug

```javascript
// Verificar componentes registrados
console.log(Object.keys(Components.components));

// Verificar tema actual
console.log(themeManager.getCurrentConfig());

// Verificar eventos
EventBus.on('*', (data) => console.log('Event:', data));
```

## 📚 Recursos

- [Form.io Documentation](https://help.form.io/)
- [Seguros Bolivar UI Design System](../README.md)
- [Storybook Components](https://rootblock-storybook.netlify.app/)

## 🤝 Contribuir

1. Fork el repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Add nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

MIT License - ver [LICENSE](../LICENSE) para detalles.

---

**Desarrollado con ❤️ por el equipo de Seguros Bolivar UI Design System**
