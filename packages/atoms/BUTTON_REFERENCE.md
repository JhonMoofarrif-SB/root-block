# 🎨 Button Component - Referencia Completa

## 📊 Matriz de Combinaciones

```
TIPOS (7):           primary, secondary, tertiary, danger, success, quinary, quaternary
ESTILOS (3):         stroke (default), fill, text
ICONOS (4):          no-icon (default), icon-left, icon-right, icon-only
ESTADOS (7):         default, hover, pressed, focus, loading, disabled, disabled-hover
TAMAÑOS (3):         small, medium (default), large

TOTAL:               7 × 3 × 4 × 7 × 3 = 1,764 combinaciones posibles
```

---

## 🎯 Cambios Principales

### ✅ **DEFAULT = STROKE** (outline con borde)

El botón por defecto ahora es **STROKE** (outline), no fill.

### ✅ **Nuevas Variantes de Estilo**

1. **STROKE** (default): Outline con borde, fondo transparente
2. **FILL**: Sólido con fondo de color
3. **TEXT**: Sin fondo ni borde, solo texto

### ✅ **Nuevas Posiciones de Iconos**

1. **icon-left**: Icono a la izquierda del texto
2. **icon-right**: Icono a la derecha del texto
3. **icon-only**: Solo icono, sin texto
4. **no-icon** (default): Sin icono

### ✅ **Nueva Estructura de @layer**

```css
@layer reset, tokens, base, variants, style-variants, sizes, modifiers, icon-positions, states, utilities;
```

---

## 📝 Ejemplos de Uso

### 1️⃣ **STROKE (Default)**

```html
<!-- Primary Stroke (default) -->
<button class="sb-ui-button sb-ui-button--primary">Primary Stroke</button>

<!-- También explícito -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--stroke">Primary Stroke</button>

<!-- Secondary Stroke -->
<button class="sb-ui-button sb-ui-button--secondary">Secondary Stroke</button>

<!-- Danger Stroke -->
<button class="sb-ui-button sb-ui-button--danger">Danger Stroke</button>
```

### 2️⃣ **FILL (Sólido)**

```html
<!-- Primary Fill -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill">Primary Fill</button>

<!-- Secondary Fill -->
<button class="sb-ui-button sb-ui-button--secondary sb-ui-button--fill">Secondary Fill</button>

<!-- Danger Fill -->
<button class="sb-ui-button sb-ui-button--danger sb-ui-button--fill">Danger Fill</button>

<!-- Success Fill -->
<button class="sb-ui-button sb-ui-button--success sb-ui-button--fill">Success Fill</button>
```

### 3️⃣ **TEXT (Sin fondo ni borde)**

```html
<!-- Primary Text -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--text">Primary Text</button>

<!-- Secondary Text -->
<button class="sb-ui-button sb-ui-button--secondary sb-ui-button--text">Secondary Text</button>

<!-- Danger Text -->
<button class="sb-ui-button sb-ui-button--danger sb-ui-button--text">Danger Text</button>
```

### 4️⃣ **ICONOS**

```html
<!-- Icon Left -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--icon-left">
  <svg width="20" height="20">...</svg>
  Icon Left
</button>

<!-- Icon Right -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--icon-right">
  Icon Right
  <svg width="20" height="20">...</svg>
</button>

<!-- Icon Only -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--icon-only">
  <svg width="20" height="20">...</svg>
</button>

<!-- Icon Left + Fill -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--icon-left">
  <svg width="20" height="20">...</svg>
  Icon Left Fill
</button>

<!-- Icon Right + Text -->
<button class="sb-ui-button sb-ui-button--danger sb-ui-button--text sb-ui-button--icon-right">
  Delete
  <svg width="20" height="20">...</svg>
</button>
```

### 5️⃣ **TAMAÑOS**

```html
<!-- Small -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--small">Small</button>

<!-- Medium (default) -->
<button class="sb-ui-button sb-ui-button--primary">Medium</button>

<!-- Large -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--large">Large</button>

<!-- Small + Fill + Icon Left -->
<button
  class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--small sb-ui-button--icon-left"
>
  <svg>...</svg> Small Fill
</button>
```

### 6️⃣ **MODIFICADORES**

```html
<!-- Square (esquinas menos redondeadas) -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--square">Square</button>

<!-- Circle (circular perfecto) -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--circle">
  <svg>...</svg>
</button>

<!-- Block (full width) -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--block">Block Full Width</button>
```

### 7️⃣ **ESTADOS**

```html
<!-- Default (estado normal) -->
<button class="sb-ui-button sb-ui-button--primary">Default</button>

<!-- Hover (automático con CSS :hover) -->
<!-- No requiere clase adicional -->

<!-- Pressed/Active (automático con CSS :active) -->
<!-- No requiere clase adicional -->

<!-- Focus (automático con CSS :focus-visible) -->
<!-- No requiere clase adicional -->

<!-- Loading (clase adicional) -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--loading">Loading...</button>

<!-- Loading con spinner a la derecha -->
<button
  class="sb-ui-button sb-ui-button--primary sb-ui-button--loading sb-ui-button--loading-right"
>
  Loading Right...
</button>

<!-- Loading icon-only -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--loading sb-ui-button--icon-only">
  <svg>...</svg>
</button>

<!-- Disabled (atributo HTML) -->
<button class="sb-ui-button sb-ui-button--primary" disabled>Disabled</button>

<!-- Disabled Hover (automático con CSS :disabled:hover) -->
<!-- No requiere clase adicional -->
```

---

## 🎨 Combinaciones Comunes

### Botones de Acción Principal

```html
<!-- CTA Principal (Fill Primary) -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--large">
  Get Started
</button>

<!-- CTA Secundario (Stroke Primary) -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--large">Learn More</button>

<!-- CTA Terciario (Text Primary) -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--text">View Details</button>
```

### Botones con Iconos

```html
<!-- Save Button -->
<button class="sb-ui-button sb-ui-button--success sb-ui-button--fill sb-ui-button--icon-left">
  <svg>💾</svg> Save
</button>

<!-- Delete Button -->
<button class="sb-ui-button sb-ui-button--danger sb-ui-button--stroke sb-ui-button--icon-left">
  <svg>🗑️</svg> Delete
</button>

<!-- Icon Only Circle -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--circle">
  <svg>+</svg>
</button>
```

### Botones de Estado

```html
<!-- Loading Primary Fill -->
<button class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--loading">
  Saving...
</button>

<!-- Loading Secondary Stroke -->
<button class="sb-ui-button sb-ui-button--secondary sb-ui-button--loading">Processing...</button>

<!-- Disabled Danger -->
<button class="sb-ui-button sb-ui-button--danger sb-ui-button--fill" disabled>Cannot Delete</button>
```

### Formularios

```html
<!-- Submit Button -->
<button
  type="submit"
  class="sb-ui-button sb-ui-button--primary sb-ui-button--fill sb-ui-button--block"
>
  Submit Form
</button>

<!-- Cancel Button -->
<button type="button" class="sb-ui-button sb-ui-button--secondary sb-ui-button--text">
  Cancel
</button>
```

---

## 📋 Tabla de Variantes de Estilo

| Tipo           | STROKE (default)            | FILL                                            | TEXT                                            |
| -------------- | --------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| **Primary**    | `.sb-ui-button--primary`    | `.sb-ui-button--primary .sb-ui-button--fill`    | `.sb-ui-button--primary .sb-ui-button--text`    |
| **Secondary**  | `.sb-ui-button--secondary`  | `.sb-ui-button--secondary .sb-ui-button--fill`  | `.sb-ui-button--secondary .sb-ui-button--text`  |
| **Tertiary**   | `.sb-ui-button--tertiary`   | `.sb-ui-button--tertiary .sb-ui-button--fill`   | `.sb-ui-button--tertiary .sb-ui-button--text`   |
| **Danger**     | `.sb-ui-button--danger`     | `.sb-ui-button--danger .sb-ui-button--fill`     | `.sb-ui-button--danger .sb-ui-button--text`     |
| **Success**    | `.sb-ui-button--success`    | `.sb-ui-button--success .sb-ui-button--fill`    | `.sb-ui-button--success .sb-ui-button--text`    |
| **Quinary**    | `.sb-ui-button--quinary`    | `.sb-ui-button--quinary .sb-ui-button--fill`    | `.sb-ui-button--quinary .sb-ui-button--text`    |
| **Quaternary** | `.sb-ui-button--quaternary` | `.sb-ui-button--quaternary .sb-ui-button--fill` | `.sb-ui-button--quaternary .sb-ui-button--text` |

---

## 🎯 Nomenclatura BEM Completa

```
.sb-ui-button                          ← Base
.sb-ui-button--primary                 ← Tipo de color
.sb-ui-button--secondary               ← Tipo de color
.sb-ui-button--tertiary                ← Tipo de color
.sb-ui-button--danger                  ← Tipo de color
.sb-ui-button--success                 ← Tipo de color
.sb-ui-button--quinary                 ← Tipo de color
.sb-ui-button--quaternary              ← Tipo de color

.sb-ui-button--stroke                  ← Estilo (opcional, es default)
.sb-ui-button--fill                    ← Estilo sólido
.sb-ui-button--text                    ← Estilo texto

.sb-ui-button--small                   ← Tamaño
.sb-ui-button--medium                  ← Tamaño (default)
.sb-ui-button--large                   ← Tamaño

.sb-ui-button--icon-left               ← Posición icono
.sb-ui-button--icon-right              ← Posición icono
.sb-ui-button--icon-only               ← Posición icono

.sb-ui-button--square                  ← Modificador
.sb-ui-button--circle                  ← Modificador
.sb-ui-button--block                   ← Modificador

.sb-ui-button--loading                 ← Estado
.sb-ui-button--loading-right           ← Modificador de loading
```

---

## ✅ Reglas CSS Implementadas

### ✅ SIEMPRE Usar:

- ✅ CSS Nesting nativo con `&`
- ✅ `@layer` para control de cascada (10 capas)
- ✅ Logical Properties (inline-size, padding-inline, etc.)
- ✅ `clamp()` para responsive fluido
- ✅ Variables CSS con prefijo `--sb-ui-`
- ✅ Nomenclatura BEM con prefijo `sb-ui-`
- ✅ Accesibilidad completa

### ❌ NUNCA Usar:

- ❌ Physical properties
- ❌ Media queries para tamaños
- ❌ Selectores sin prefijo `sb-ui-`
- ❌ Variables sin prefijo `--sb-ui-`
- ❌ Repetir selectores
- ❌ `!important`

---

## 🏆 Características Modernas

1. **CSS Nesting nativo** - Código más limpio y mantenible
2. **@layer cascade control** - Especificidad predecible
3. **Logical Properties** - RTL/LTR ready automático
4. **clamp() responsive** - Fluido sin media queries
5. **Accesibilidad completa**:
   - `:focus-visible` con outline visible
   - `@media (prefers-reduced-motion: reduce)`
   - `@media (prefers-contrast: high)`
   - Estados `:disabled` claros
6. **Performance optimizada**:
   - Variables CSS para theming dinámico
   - Transiciones suaves con ease
   - Sin `!important` innecesarios

---

## 📦 Estructura de Archivos

```
packages/atoms/src/
├── button.css              ← Componente completo (actualizado)
└── index.css               ← Import general
```

---

## 🎨 Próximos Pasos

1. ✅ **Web Component (Lit)**: Crear el componente TypeScript
2. ✅ **Storybook**: Documentar todas las variantes
3. ✅ **Tests**: Implementar tests de accesibilidad
4. ✅ **Brand Overrides**: Actualizar Davivienda y Seguros Bolívar

---

**Última actualización:** 2025-01-09
**Versión:** 2.0.0
**Total de combinaciones:** 1,764
