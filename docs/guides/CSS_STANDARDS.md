# 🎨 CSS Standards - Root Block Design System

## 📋 Estructura Estándar para Componentes CSS

Este documento define las reglas y estructura estándar que **TODOS** los desarrolladores deben seguir al crear componentes CSS en el Root Block Design System.

---

## 🏗️ Estructura Obligatoria de Archivos CSS

### 1. **Comentario de Cabecera** (OBLIGATORIO)

```css
/**
 * [ComponentName] Component - Root Block Design System
 * Componente CSS puro con variables --rb-* personalizables por marca
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

.rb-[component] {
  /* Colores - Pueden ser sobreescritos por marca */
  --rb-[component]-bg-color: var(--rb-color-primary-base, #007acc);
  --rb-[component]-bg-hover: var(--rb-color-primary-D100, #005a9e);
  --rb-[component]-bg-active: var(--rb-color-primary-D200, #004578);
  --rb-[component]-bg-disabled: var(--rb-color-grayscale-L200, #e1e1e1);
  --rb-[component]-text-color: var(--rb-color-grayscale-white, #fff);
  --rb-[component]-text-disabled: var(--rb-color-grayscale-base, #9b9b9b);
  --rb-[component]-border-color: var(--rb-color-primary-base, #007acc);
  --rb-[component]-border-width: 1px;
  --rb-[component]-border-radius: 8px;

  /* Espaciado */
  --rb-[component]-padding-x: 1.5rem;
  --rb-[component]-padding-y: 0.657rem;
  --rb-[component]-gap: 0.5rem;

  /* Tipografía */
  --rb-[component]-font-family: var(--rb-typography-fontFamily, 'Roboto', sans-serif);
  --rb-[component]-font-size: 1rem;
  --rb-[component]-font-weight: 700;
  --rb-[component]-line-height: 1.188rem;

  /* Tamaños */
  --rb-[component]-min-width: 91px;
  --rb-[component]-min-height: 40px;

  /* Sombras */
  --rb-[component]-shadow: none;
  --rb-[component]-shadow-hover: var(--rb-shadow-s, 0 2px 4px rgb(0 0 0 / 10%));
  --rb-[component]-shadow-active: inset 2px 4px 8px rgb(0 0 0 / 16%);

  /* Transiciones */
  --rb-[component]-transition: all 0.2s ease;

  /* [Otras variables específicas del componente] */
}
```

### 3. **Estilos Base del Componente** (OBLIGATORIO)

```css
.rb-[component] {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Spacing */
  padding: var(--rb-[component]-padding-y) var(--rb-[component]-padding-x);
  gap: var(--rb-[component]-gap);

  /* Sizing */
  min-width: var(--rb-[component]-min-width);
  min-height: var(--rb-[component]-min-height);
  width: auto;

  /* Typography */
  font-family: var(--rb-[component]-font-family);
  font-style: normal;
  font-weight: var(--rb-[component]-font-weight);
  font-size: var(--rb-[component]-font-size);
  line-height: var(--rb-[component]-line-height);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  /* Appearance */
  background-color: var(--rb-[component]-bg-color);
  color: var(--rb-[component]-text-color);
  border: var(--rb-[component]-border-width) solid var(--rb-[component]-border-color);
  border-radius: var(--rb-[component]-border-radius);
  box-shadow: var(--rb-[component]-shadow);
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;

  /* Animation */
  transition: var(--rb-[component]-transition);
}
```

### 4. **Estados Interactivos** (OBLIGATORIO)

```css
.rb-[component]:hover:not(:disabled) {
  background-color: var(--rb-[component]-bg-hover);
  border-color: var(--rb-[component]-bg-hover);
  box-shadow: var(--rb-[component]-shadow-hover);
}

.rb-[component]:active:not(:disabled) {
  background-color: var(--rb-[component]-bg-active);
  border-color: var(--rb-[component]-bg-active);
  box-shadow: var(--rb-[component]-shadow-active);
}

.rb-[component]:focus-visible:not(:disabled) {
  outline: 2px solid var(--rb-color-primary-L100, #80bfff);
  outline-offset: 2px;
}

.rb-[component]:disabled {
  background-color: var(--rb-[component]-bg-disabled);
  color: var(--rb-[component]-text-disabled);
  border-color: var(--rb-[component]-bg-disabled);
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
.rb-[component]--primary {
  --rb-[component]-bg-color: var(--rb-color-primary-base);
  --rb-[component]-bg-hover: var(--rb-color-primary-D100);
  --rb-[component]-bg-active: var(--rb-color-primary-D200);
  --rb-[component]-border-color: var(--rb-color-primary-base);
  --rb-[component]-text-color: var(--rb-color-grayscale-white, #fff);
}

/* Secondary */
.rb-[component]--secondary {
  --rb-[component]-bg-color: var(--rb-color-secondary-base);
  --rb-[component]-bg-hover: var(--rb-color-secondary-D100);
  --rb-[component]-bg-active: var(--rb-color-secondary-D200);
  --rb-[component]-border-color: var(--rb-color-secondary-base);
  --rb-[component]-text-color: var(--rb-color-primary-base);
}

/* [Otras variantes según el componente] */
```

### 6. **Tamaños** (OBLIGATORIO)

```css
/* ========================================
   [COMPONENT] SIZES
   ======================================== */

.rb-[component]--small {
  --rb-[component]-padding-x: 0.8rem;
  --rb-[component]-padding-y: 0.4rem;
  --rb-[component]-font-size: 0.875rem;
  --rb-[component]-min-height: 32px;
  --rb-[component]-line-height: 1rem;
}

.rb-[component]--medium {
  --rb-[component]-padding-x: 1.5rem;
  --rb-[component]-padding-y: 0.657rem;
  --rb-[component]-font-size: 1rem;
  --rb-[component]-min-height: 40px;
  --rb-[component]-line-height: 1.188rem;
}

.rb-[component]--large {
  --rb-[component]-padding-x: 2rem;
  --rb-[component]-padding-y: 0.875rem;
  --rb-[component]-font-size: 1.125rem;
  --rb-[component]-min-height: 48px;
  --rb-[component]-line-height: 1.375rem;
}
```

### 7. **Modificadores** (OBLIGATORIO)

```css
/* ========================================
   [COMPONENT] MODIFIERS
   ======================================== */

/* Rounded corners */
.rb-[component]--rounded {
  --rb-[component]-border-radius: 2.1rem;
}

/* Block (full width) */
.rb-[component]--block {
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
.rb-[component]--loading {
  --rb-[component]-loading-animation-duration: 0.6s;
  --rb-[component]-loading-bg-animation: none;

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
  .rb-[component] {
    --rb-[component]-border-width: 2px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .rb-[component] {
    --rb-[component]-transition: none;
  }

  .rb-[component]--loading::after {
    animation: none;
  }
}

/* Mobile optimizations */
@media (width <= 640px) {
  .rb-[component] {
    width: 100%;
  }
}

/* Desktop optimizations */
@media (width >= 641px) {
  .rb-[component] {
    width: auto;
  }
}

/* Print styles */
@media print {
  .rb-[component] {
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

- **Prefijo obligatorio**: `--rb-`
- **Formato**: `--rb-[component]-[property]-[state]`
- **Ejemplos**:
  - `--rb-button-bg-color`
  - `--rb-input-border-color-focus`
  - `--rb-alert-text-color-error`

### Clases CSS

- **Prefijo obligatorio**: `rb-`
- **Formato**: `rb-[component]` o `rb-[component]--[modifier]`
- **Ejemplos**:
  - `rb-button`
  - `rb-button--primary`
  - `rb-input--error`
  - `rb-alert--dismissible`

### Estados

- **Error**: `--error`
- **Success**: `--success`
- **Warning**: `--warning`
- **Disabled**: `:disabled`
- **Loading**: `--loading`

---

## 🎯 Reglas de Implementación

### 1. **Variables CSS**

- ✅ **SIEMPRE** usar variables CSS con prefijo `--rb-`
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
- [ ] ✅ Variables CSS con prefijo `--rb-` y fallbacks
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
**Mantenedor**: Root Block Design System Team
