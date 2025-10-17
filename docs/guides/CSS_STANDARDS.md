# 🎨 CSS Standards - Bolivar UI Design System

## 📋 Estructura Estándar para Componentes CSS

Este documento define las reglas y estructura estándar que **TODOS** los desarrolladores deben seguir al crear componentes CSS en el Bolivar UI Design System.

---

## 🏗️ Estructura Obligatoria de Archivos CSS

### 1. **Comentario de Cabecera** (OBLIGATORIO)

```css
/**
 * [ComponentName] Component - Bolivar UI Design System
 * Componente CSS puro con variables --b-ui-* personalizables por marca
 * [Descripción específica del componente]
 * 
 * Uso:
 * <elemento class="rb-[component] rb-[component]--primary">Contenido</elemento>
 * <elemento class="rb-[component] rb-[component]--secondary rb-[component]--small">Pequeño</elemento>
 */
```

### 2. **Variables CSS Personalizables** (OBLIGATORIO)

```css
/* ========================================
   VARIABLES CSS PERSONALIZABLES Y ESTILOS BASE
   ======================================== */

.b-ui-[component] {
  /* Colores - Pueden ser sobreescritos por marca */
  --b-ui-[component]-bg-color: var(--b-ui-color-primary-base, #007acc);
  --b-ui-[component]-bg-hover: var(--b-ui-color-primary-D100, #005a9e);
  --b-ui-[component]-bg-active: var(--b-ui-color-primary-D200, #004578);
  --b-ui-[component]-bg-disabled: var(--b-ui-color-grayscale-L200, #e1e1e1);
  --b-ui-[component]-text-color: var(--b-ui-color-grayscale-white, #fff);
  --b-ui-[component]-text-disabled: var(--b-ui-color-grayscale-base, #9b9b9b);
  --b-ui-[component]-border-color: var(--b-ui-color-primary-base, #007acc);
  --b-ui-[component]-border-width: 1px;
  --b-ui-[component]-border-radius: 8px;

  /* Espaciado */
  --b-ui-[component]-padding-x: 1.5rem;
  --b-ui-[component]-padding-y: 0.657rem;
  --b-ui-[component]-gap: 0.5rem;

  /* Tipografía */
  --b-ui-[component]-font-family: var(--b-ui-typography-fontFamily, 'Roboto', sans-serif);
  --b-ui-[component]-font-size: 1rem;
  --b-ui-[component]-font-weight: 700;
  --b-ui-[component]-line-height: 1.188rem;

  /* Tamaños */
  --b-ui-[component]-min-width: 91px;
  --b-ui-[component]-min-height: 40px;

  /* Sombras */
  --b-ui-[component]-shadow: none;
  --b-ui-[component]-shadow-hover: var(--b-ui-shadow-s, 0 2px 4px rgb(0 0 0 / 10%));
  --b-ui-[component]-shadow-active: inset 2px 4px 8px rgb(0 0 0 / 16%);

  /* Transiciones */
  --b-ui-[component]-transition: all 0.2s ease;

  /* [Otras variables específicas del componente] */
}
```

### 3. **Estilos Base del Componente** (OBLIGATORIO)

```css
.b-ui-[component] {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Spacing */
  padding: var(--b-ui-[component]-padding-y) var(--b-ui-[component]-padding-x);
  gap: var(--b-ui-[component]-gap);

  /* Sizing */
  min-width: var(--b-ui-[component]-min-width);
  min-height: var(--b-ui-[component]-min-height);
  width: auto;

  /* Typography */
  font-family: var(--b-ui-[component]-font-family);
  font-style: normal;
  font-weight: var(--b-ui-[component]-font-weight);
  font-size: var(--b-ui-[component]-font-size);
  line-height: var(--b-ui-[component]-line-height);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  /* Appearance */
  background-color: var(--b-ui-[component]-bg-color);
  color: var(--b-ui-[component]-text-color);
  border: var(--b-ui-[component]-border-width) solid var(--b-ui-[component]-border-color);
  border-radius: var(--b-ui-[component]-border-radius);
  box-shadow: var(--b-ui-[component]-shadow);
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;

  /* Animation */
  transition: var(--b-ui-[component]-transition);
}
```

### 4. **Estados Interactivos** (OBLIGATORIO)

```css
.b-ui-[component]:hover:not(:disabled) {
  background-color: var(--b-ui-[component]-bg-hover);
  border-color: var(--b-ui-[component]-bg-hover);
  box-shadow: var(--b-ui-[component]-shadow-hover);
}

.b-ui-[component]:active:not(:disabled) {
  background-color: var(--b-ui-[component]-bg-active);
  border-color: var(--b-ui-[component]-bg-active);
  box-shadow: var(--b-ui-[component]-shadow-active);
}

.b-ui-[component]:focus-visible:not(:disabled) {
  outline: 2px solid var(--b-ui-color-primary-L100, #80bfff);
  outline-offset: 2px;
}

.b-ui-[component]:disabled {
  background-color: var(--b-ui-[component]-bg-disabled);
  color: var(--b-ui-[component]-text-disabled);
  border-color: var(--b-ui-[component]-bg-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}
```

### 5. **Variantes** (OBLIGATORIO)

```css
/* ========================================
   [COMPONENT] VARIANTS
   ======================================== */

/* Primary (default) */
.b-ui-[component]--primary {
  --b-ui-[component]-bg-color: var(--b-ui-color-primary-base);
  --b-ui-[component]-bg-hover: var(--b-ui-color-primary-D100);
  --b-ui-[component]-bg-active: var(--b-ui-color-primary-D200);
  --b-ui-[component]-border-color: var(--b-ui-color-primary-base);
  --b-ui-[component]-text-color: var(--b-ui-color-grayscale-white, #fff);
}

/* Secondary */
.b-ui-[component]--secondary {
  --b-ui-[component]-bg-color: var(--b-ui-color-secondary-base);
  --b-ui-[component]-bg-hover: var(--b-ui-color-secondary-D100);
  --b-ui-[component]-bg-active: var(--b-ui-color-secondary-D200);
  --b-ui-[component]-border-color: var(--b-ui-color-secondary-base);
  --b-ui-[component]-text-color: var(--b-ui-color-primary-base);
}

/* [Otras variantes según el componente] */
```

### 6. **Tamaños** (OBLIGATORIO)

```css
/* ========================================
   [COMPONENT] SIZES
   ======================================== */

.b-ui-[component]--small {
  --b-ui-[component]-padding-x: 0.8rem;
  --b-ui-[component]-padding-y: 0.4rem;
  --b-ui-[component]-font-size: 0.875rem;
  --b-ui-[component]-min-height: 32px;
  --b-ui-[component]-line-height: 1rem;
}

.b-ui-[component]--medium {
  --b-ui-[component]-padding-x: 1.5rem;
  --b-ui-[component]-padding-y: 0.657rem;
  --b-ui-[component]-font-size: 1rem;
  --b-ui-[component]-min-height: 40px;
  --b-ui-[component]-line-height: 1.188rem;
}

.b-ui-[component]--large {
  --b-ui-[component]-padding-x: 2rem;
  --b-ui-[component]-padding-y: 0.875rem;
  --b-ui-[component]-font-size: 1.125rem;
  --b-ui-[component]-min-height: 48px;
  --b-ui-[component]-line-height: 1.375rem;
}
```

### 7. **Modificadores** (OBLIGATORIO)

```css
/* ========================================
   [COMPONENT] MODIFIERS
   ======================================== */

/* Rounded corners */
.b-ui-[component]--rounded {
  --b-ui-[component]-border-radius: 2.1rem;
}

/* Block (full width) */
.b-ui-[component]--block {
  display: flex;
  width: 100%;
}

/* [Otros modificadores según el componente] */
```

### 8. **Estados Especiales** (OBLIGATORIO)

```css
/* ========================================
   [COMPONENT] STATES
   ======================================== */

/* Loading state */
.b-ui-[component]--loading {
  --b-ui-[component]-loading-animation-duration: 0.6s;
  --b-ui-[component]-loading-bg-animation: none;

  color: transparent;
  pointer-events: none;
  position: relative;
}

/* [Otros estados según el componente] */
```

### 9. **Animaciones** (OBLIGATORIO)

```css
/* ========================================
   ANIMATIONS
   ======================================== */

@keyframes rb-[component]-spinner {
  to {
    transform: rotate(360deg);
  }
}

/* [Otras animaciones según el componente] */
```

### 10. **Accesibilidad y Responsive** (OBLIGATORIO)

```css
/* ========================================
   ACCESSIBILITY & RESPONSIVE
   ======================================== */

/* High contrast mode support */
@media (prefers-contrast: high) {
  .b-ui-[component] {
    --b-ui-[component]-border-width: 2px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .b-ui-[component] {
    --b-ui-[component]-transition: none;
  }

  .b-ui-[component]--loading::after {
    animation: none;
  }
}

/* Mobile optimizations */
@media (width <= 640px) {
  .b-ui-[component] {
    width: 100%;
  }
}

/* Desktop optimizations */
@media (width >= 641px) {
  .b-ui-[component] {
    width: auto;
  }
}

/* Print styles */
@media print {
  .b-ui-[component] {
    background: transparent !important;
    color: black !important;
    border: 1px solid black !important;
    box-shadow: none !important;
  }
}
```

---

## 📏 Reglas de Nomenclatura

### Variables CSS

- **Prefijo obligatorio**: `--b-ui-`
- **Formato**: `--b-ui-[component]-[property]-[state]`
- **Ejemplos**:
  - `--b-ui-button-bg-color`
  - `--b-ui-input-border-color-focus`
  - `--b-ui-alert-text-color-error`

### Clases CSS

- **Prefijo obligatorio**: `b-ui-`
- **Formato**: `b-ui-[component]` o `b-ui-[component]--[modifier]`
- **Ejemplos**:
  - `b-ui-button`
  - `b-ui-button--primary`
  - `b-ui-input--error`
  - `b-ui-alert--dismissible`

### Estados

- **Error**: `--error`
- **Success**: `--success`
- **Warning**: `--warning`
- **Disabled**: `:disabled`
- **Loading**: `--loading`

---

## 🎯 Reglas de Implementación

### 1. **Variables CSS**

- ✅ **SIEMPRE** usar variables CSS con prefijo `--b-ui-`
- ✅ **SIEMPRE** incluir fallbacks con valores por defecto
- ✅ **SIEMPRE** usar tokens del design system cuando estén disponibles
- ❌ **NUNCA** usar valores hardcodeados sin variables

### 2. **Estados**

- ✅ **SIEMPRE** incluir estados: hover, active, focus, disabled
- ✅ **SIEMPRE** usar `:not(:disabled)` en estados interactivos
- ✅ **SIEMPRE** incluir `:focus-visible` para accesibilidad
- ❌ **NUNCA** olvidar el estado disabled

### 3. **Responsive**

- ✅ **SIEMPRE** incluir media queries para mobile y desktop
- ✅ **SIEMPRE** incluir soporte para `prefers-reduced-motion`
- ✅ **SIEMPRE** incluir soporte para `prefers-contrast`
- ✅ **SIEMPRE** incluir estilos de impresión

### 4. **Accesibilidad**

- ✅ **SIEMPRE** incluir `outline` visible en focus
- ✅ **SIEMPRE** incluir `cursor: not-allowed` en disabled
- ✅ **SIEMPRE** incluir `user-select: none` en elementos interactivos
- ✅ **SIEMPRE** incluir `box-sizing: border-box`

---

## 📚 Ejemplos de Referencia

### Componentes que siguen la estructura:

- ✅ `button.css` - Referencia principal
- ✅ `input.css` - Formularios
- ✅ `textArea.css` - Texto largo
- ✅ `select.css` - Selección
- ✅ `toggle.css` - Interruptores
- ✅ `alert.css` - Notificaciones

### Estructura de archivos:

```
packages/atoms/src/
├── button.css      ← Referencia estándar
├── input.css       ← Sigue la estructura
├── textArea.css    ← Sigue la estructura
├── select.css      ← Sigue la estructura
├── toggle.css      ← Sigue la estructura
├── alert.css       ← Sigue la estructura
└── [nuevo].css     ← Debe seguir la estructura
```

---

## ✅ Checklist de Validación

Antes de crear un componente, verificar:

- [ ] ✅ Comentario de cabecera con descripción y ejemplos de uso
- [ ] ✅ Variables CSS con prefijo `--b-ui-` y fallbacks
- [ ] ✅ Estilos base del componente
- [ ] ✅ Estados interactivos (hover, active, focus, disabled)
- [ ] ✅ Variantes (primary, secondary, etc.)
- [ ] ✅ Tamaños (small, medium, large)
- [ ] ✅ Modificadores (rounded, block, etc.)
- [ ] ✅ Estados especiales (loading, error, success, warning)
- [ ] ✅ Animaciones (keyframes)
- [ ] ✅ Accesibilidad y responsive (media queries)
- [ ] ✅ Soporte para `prefers-reduced-motion`
- [ ] ✅ Soporte para `prefers-contrast`
- [ ] ✅ Estilos de impresión
- [ ] ✅ Nomenclatura consistente
- [ ] ✅ Documentación en comentarios

---

## 🚀 Workflow de Desarrollo

1. **Copiar** la estructura de `button.css` como plantilla
2. **Reemplazar** `[component]` con el nombre del nuevo componente
3. **Definir** variables CSS específicas del componente
4. **Implementar** estilos base y estados
5. **Agregar** variantes, tamaños y modificadores
6. **Incluir** animaciones y estados especiales
7. **Verificar** accesibilidad y responsive
8. **Validar** con el checklist
9. **Documentar** en comentarios
10. **Probar** en diferentes marcas y temas

---

## 📞 Soporte

Si tienes dudas sobre la implementación:

1. Revisa los componentes existentes como referencia
2. Consulta este documento
3. Pregunta al equipo de diseño
4. Valida con el checklist antes de hacer commit

---

**Última actualización**: 2024-01-09  
**Versión**: 1.0.0  
**Mantenedor**: Bolivar UI Design System Team
