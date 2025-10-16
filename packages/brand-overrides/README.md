# 🎨 @rb/brand-overrides

> Customizaciones específicas de marca para el Root Block Design System

Este package contiene estilos adicionales específicos para marcas que necesitan comportamientos o estilos diferentes a los componentes base.

## 📁 Estructura

```
packages/brand-overrides/
├── src/
│   ├── davivienda/
│   │   ├── button.css         # Overrides de botón para Davivienda
│   │   └── index.css          # Entry point de Davivienda
│   ├── jelpit/
│   │   ├── button.css         # Overrides de botón para Jelpit
│   │   └── index.css          # Entry point de Jelpit
│   └── ...
└── README.md
```

## 🎯 Propósito

Los overrides permiten que marcas específicas tengan:

- **Animaciones personalizadas** (ej: animación de loading especial)
- **Formas diferentes** (ej: botones triangulares)
- **Comportamientos únicos** (ej: efectos hover específicos)
- **Variantes exclusivas** (ej: estilos que solo una marca necesita)

## 📦 Uso en el Build

Los overrides se incluyen automáticamente en el bundle de cada marca:

```css
/* rb-davivienda-light.min.css incluye: */
1. Tokens de Davivienda (variables CSS)
2. Componentes base (atoms)
3. Overrides de Davivienda (este package) ← Automático
```

## 🛠️ Crear un Override

### 1. Crear estructura

```bash
mkdir -p packages/brand-overrides/src/mi-marca
touch packages/brand-overrides/src/mi-marca/button.css
touch packages/brand-overrides/src/mi-marca/index.css
```

### 2. Definir estilos específicos

```css
/* packages/brand-overrides/src/mi-marca/button.css */

/**
 * Mi Marca - Button Overrides
 * Estilos específicos que solo esta marca necesita
 */

/* Ejemplo: Animación especial en loading */
.rb-button--loading.rb-button--mi-marca-special::before {
  animation: mi-marca-pulse 1s infinite;
}

@keyframes mi-marca-pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

### 3. Importar en index.css

```css
/* packages/brand-overrides/src/mi-marca/index.css */

/**
 * Mi Marca - All Overrides
 */

@import './button.css';
/* @import './input.css'; */
/* @import './modal.css'; */
```

### 4. Build automático

El builder detecta automáticamente los overrides y los incluye:

```bash
pnpm build  # En el root del proyecto
```

## 📝 Ejemplos

### Seguros Bolívar - Swap de Colores SECONDARY

Seguros Bolívar usa colores PRIMARY (verde) donde el base usa SECONDARY (amarillo) en los botones secondary.

```css
/* Solo personaliza colores, el comportamiento viene del BASE */
:where([data-brand='seguros-bolivar']) .rb-button--secondary.rb-button--stroke {
  --rb-button-text-color: var(--rb-color-primary-D100); /* Verde */
  --rb-button-border-color: var(--rb-color-primary-D100);
}
```

Ver: `src/seguros-bolivar/button.css`

**📖 Para más ejemplos de personalización SECONDARY:** Ver [GUIA_PERSONALIZACION_SECONDARY.md](../../GUIA_PERSONALIZACION_SECONDARY.md)

### Davivienda - Animación de Loading

Davivienda tiene una animación especial de gradiente que se mueve cuando el botón está en estado loading.

```html
<!-- Cualquier botón de Davivienda en loading tiene la animación -->
<button class="rb-button rb-button--primary rb-button--loading">Cargando...</button>
```

Ver: `src/davivienda/button.css`

## 🎨 Convenciones

### Cuándo usar overrides

✅ **Usar override cuando:**

- El estilo es específico de UNA marca
- La funcionalidad es única o experimental
- Requiere animaciones/comportamientos complejos

❌ **NO usar override cuando:**

- El estilo beneficia a TODAS las marcas → Agregar a `@rb/atoms`
- Es solo un cambio de color/token → Usar variables CSS en tokens
- Es una variante común → Agregar modificador en componente base

### Nomenclatura

```css
/* ✅ Bueno: Específico y claro */
.rb-button--loading.rb-button--davivienda-animation

/* ❌ Malo: Genérico, debería estar en atoms */
.rb-button--animated
```

### Variables CSS

Los overrides pueden usar y extender variables:

```css
.rb-button--loading {
  /* Override puede definir nuevas variables */
  --rb-btn-loading-animation-duration: 2s;
  --rb-btn-bg-loading-animation: linear-gradient(90deg, ...);
}
```

## 🔍 Debugging

Para verificar qué overrides se aplicaron:

```bash
# Ver bundle generado
cat packages/bundle/dist/rb-davivienda-light.min.css
```

## 📊 Impacto en tamaño

Los overrides agregan ~0.5-1KB por marca (minificado y gzip):

| Marca        | Base   | Con Overrides | Delta                 |
| ------------ | ------ | ------------- | --------------------- |
| Cien Cuadras | 2.4 KB | 2.4 KB        | +0 KB (sin overrides) |
| Davivienda   | 2.4 KB | 2.9 KB        | +0.5 KB               |
| Jelpit       | 2.4 KB | 3.0 KB        | +0.6 KB               |

## 🚀 Próximos pasos

1. Agregar overrides según necesidad real
2. Documentar cada override con comentarios
3. Crear ejemplos en Storybook
4. Considerar mover overrides comunes a atoms

## 📄 Licencia

MIT © Root Block
