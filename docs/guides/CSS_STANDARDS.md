# 🎨 CSS Standards - Seguros Bolivar UI Design System

## 📋 Estructura Estándar para Componentes CSS

Este documento define las reglas y estructura estándar que **TODOS** los desarrolladores deben seguir al crear componentes CSS en el Seguros Bolivar UI Design System.

---

## 🏗️ Estructura Obligatoria de Archivos CSS

### 1. **Comentario de Cabecera** (OBLIGATORIO)

```css
/**
 * [ComponentName] Component - Seguros Bolivar UI Design System
 * Componente CSS puro con variables --sb-ui-* personalizables por marca
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

.sb-ui-[component] {
  /* Colores - Pueden ser sobreescritos por marca */
  --sb-ui-[component]-bg-color: var(--sb-ui-color-primary-base, #007acc);
  --sb-ui-[component]-bg-hover: var(--sb-ui-color-primary-D100, #005a9e);
  --sb-ui-[component]-bg-active: var(--sb-ui-color-primary-D200, #004578);
  --sb-ui-[component]-bg-disabled: var(--sb-ui-color-grayscale-L200, #e1e1e1);
  --sb-ui-[component]-text-color: var(--sb-ui-color-grayscale-white, #fff);
  --sb-ui-[component]-text-disabled: var(--sb-ui-color-grayscale-base, #9b9b9b);
  --sb-ui-[component]-border-color: var(--sb-ui-color-primary-base, #007acc);
  --sb-ui-[component]-border-width: 1px;
  --sb-ui-[component]-border-radius: 8px;

  /* Espaciado */
  --sb-ui-[component]-padding-x: 1.5rem;
  --sb-ui-[component]-padding-y: 0.657rem;
  --sb-ui-[component]-gap: 0.5rem;

  /* Tipografía */
  --sb-ui-[component]-font-family: var(--sb-ui-typography-fontFamily, 'Roboto', sans-serif);
  --sb-ui-[component]-font-size: 1rem;
  --sb-ui-[component]-font-weight: 700;
  --sb-ui-[component]-line-height: 1.188rem;

  /* Tamaños */
  --sb-ui-[component]-min-width: 91px;
  --sb-ui-[component]-min-height: 40px;

  /* Sombras */
  --sb-ui-[component]-shadow: none;
  --sb-ui-[component]-shadow-hover: var(--sb-ui-shadow-s, 0 2px 4px rgb(0 0 0 / 10%));
  --sb-ui-[component]-shadow-active: inset 2px 4px 8px rgb(0 0 0 / 16%);

  /* Transiciones */
  --sb-ui-[component]-transition: all 0.2s ease;

  /* [Otras variables específicas del componente] */
}
```

### 3. **Estilos Base del Componente** (OBLIGATORIO)

```css
.sb-ui-[component] {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Spacing */
  padding: var(--sb-ui-[component]-padding-y) var(--sb-ui-[component]-padding-x);
  gap: var(--sb-ui-[component]-gap);

  /* Sizing */
  min-width: var(--sb-ui-[component]-min-width);
  min-height: var(--sb-ui-[component]-min-height);
  width: auto;

  /* Typography */
  font-family: var(--sb-ui-[component]-font-family);
  font-style: normal;
  font-weight: var(--sb-ui-[component]-font-weight);
  font-size: var(--sb-ui-[component]-font-size);
  line-height: var(--sb-ui-[component]-line-height);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  /* Appearance */
  background-color: var(--sb-ui-[component]-bg-color);
  color: var(--sb-ui-[component]-text-color);
  border: var(--sb-ui-[component]-border-width) solid var(--sb-ui-[component]-border-color);
  border-radius: var(--sb-ui-[component]-border-radius);
  box-shadow: var(--sb-ui-[component]-shadow);
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;

  /* Animation */
  transition: var(--sb-ui-[component]-transition);
}
```

### 4. **Estados Interactivos** (OBLIGATORIO)

```css
.sb-ui-[component]:hover:not(:disabled) {
  background-color: var(--sb-ui-[component]-bg-hover);
  border-color: var(--sb-ui-[component]-bg-hover);
  box-shadow: var(--sb-ui-[component]-shadow-hover);
}

.sb-ui-[component]:active:not(:disabled) {
  background-color: var(--sb-ui-[component]-bg-active);
  border-color: var(--sb-ui-[component]-bg-active);
  box-shadow: var(--sb-ui-[component]-shadow-active);
}

.sb-ui-[component]:focus-visible:not(:disabled) {
  outline: 2px solid var(--sb-ui-color-primary-L100, #80bfff);
  outline-offset: 2px;
}

.sb-ui-[component]:disabled {
  background-color: var(--sb-ui-[component]-bg-disabled);
  color: var(--sb-ui-[component]-text-disabled);
  border-color: var(--sb-ui-[component]-bg-disabled);
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
.sb-ui-[component]--primary {
  --sb-ui-[component]-bg-color: var(--sb-ui-color-primary-base);
  --sb-ui-[component]-bg-hover: var(--sb-ui-color-primary-D100);
  --sb-ui-[component]-bg-active: var(--sb-ui-color-primary-D200);
  --sb-ui-[component]-border-color: var(--sb-ui-color-primary-base);
  --sb-ui-[component]-text-color: var(--sb-ui-color-grayscale-white, #fff);
}

/* Secondary */
.sb-ui-[component]--secondary {
  --sb-ui-[component]-bg-color: var(--sb-ui-color-secondary-base);
  --sb-ui-[component]-bg-hover: var(--sb-ui-color-secondary-D100);
  --sb-ui-[component]-bg-active: var(--sb-ui-color-secondary-D200);
  --sb-ui-[component]-border-color: var(--sb-ui-color-secondary-base);
  --sb-ui-[component]-text-color: var(--sb-ui-color-primary-base);
}

/* [Otras variantes según el componente] */
```

### 6. **Tamaños** (OBLIGATORIO)

```css
/* ========================================
   [COMPONENT] SIZES
   ======================================== */

.sb-ui-[component]--small {
  --sb-ui-[component]-padding-x: 0.8rem;
  --sb-ui-[component]-padding-y: 0.4rem;
  --sb-ui-[component]-font-size: 0.875rem;
  --sb-ui-[component]-min-height: 32px;
  --sb-ui-[component]-line-height: 1rem;
}

.sb-ui-[component]--medium {
  --sb-ui-[component]-padding-x: 1.5rem;
  --sb-ui-[component]-padding-y: 0.657rem;
  --sb-ui-[component]-font-size: 1rem;
  --sb-ui-[component]-min-height: 40px;
  --sb-ui-[component]-line-height: 1.188rem;
}

.sb-ui-[component]--large {
  --sb-ui-[component]-padding-x: 2rem;
  --sb-ui-[component]-padding-y: 0.875rem;
  --sb-ui-[component]-font-size: 1.125rem;
  --sb-ui-[component]-min-height: 48px;
  --sb-ui-[component]-line-height: 1.375rem;
}
```

### 7. **Modificadores** (OBLIGATORIO)

```css
/* ========================================
   [COMPONENT] MODIFIERS
   ======================================== */

/* Rounded corners */
.sb-ui-[component]--rounded {
  --sb-ui-[component]-border-radius: 2.1rem;
}

/* Block (full width) */
.sb-ui-[component]--block {
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
.sb-ui-[component]--loading {
  --sb-ui-[component]-loading-animation-duration: 0.6s;
  --sb-ui-[component]-loading-bg-animation: none;

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
  .sb-ui-[component] {
    --sb-ui-[component]-border-width: 2px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .sb-ui-[component] {
    --sb-ui-[component]-transition: none;
  }

  .sb-ui-[component]--loading::after {
    animation: none;
  }
}

/* Mobile optimizations */
@media (width <= 640px) {
  .sb-ui-[component] {
    width: 100%;
  }
}

/* Desktop optimizations */
@media (width >= 641px) {
  .sb-ui-[component] {
    width: auto;
  }
}

/* Print styles */
@media print {
  .sb-ui-[component] {
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

- **Prefijo obligatorio**: `--sb-ui-`
- **Formato**: `--sb-ui-[component]-[property]-[state]`
- **Ejemplos**:
  - `--sb-ui-button-bg-color`
  - `--sb-ui-input-border-color-focus`
  - `--sb-ui-alert-text-color-error`

### Clases CSS

- **Prefijo obligatorio**: `sb-ui-`
- **Formato**: `sb-ui-[component]` o `sb-ui-[component]--[modifier]`
- **Ejemplos**:
  - `sb-ui-button`
  - `sb-ui-button--primary`
  - `sb-ui-input--error`
  - `sb-ui-alert--dismissible`

### Estados

- **Error**: `--error`
- **Success**: `--success`
- **Warning**: `--warning`
- **Disabled**: `:disabled`
- **Loading**: `--loading`

---

## 🎯 Reglas de Implementación

### 1. **Variables CSS**

- ✅ **SIEMPRE** usar variables CSS con prefijo `--sb-ui-`
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
- [ ] ✅ Variables CSS con prefijo `--sb-ui-` y fallbacks
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
**Mantenedor**: Seguros Bolivar UI Design System Team
