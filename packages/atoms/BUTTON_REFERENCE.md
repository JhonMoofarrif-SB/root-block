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
<button class="rb-button rb-button--primary">Primary Stroke</button>

<!-- También explícito -->
<button class="rb-button rb-button--primary rb-button--stroke">Primary Stroke</button>

<!-- Secondary Stroke -->
<button class="rb-button rb-button--secondary">Secondary Stroke</button>

<!-- Danger Stroke -->
<button class="rb-button rb-button--danger">Danger Stroke</button>
```

### 2️⃣ **FILL (Sólido)**

```html
<!-- Primary Fill -->
<button class="rb-button rb-button--primary rb-button--fill">Primary Fill</button>

<!-- Secondary Fill -->
<button class="rb-button rb-button--secondary rb-button--fill">Secondary Fill</button>

<!-- Danger Fill -->
<button class="rb-button rb-button--danger rb-button--fill">Danger Fill</button>

<!-- Success Fill -->
<button class="rb-button rb-button--success rb-button--fill">Success Fill</button>
```

### 3️⃣ **TEXT (Sin fondo ni borde)**

```html
<!-- Primary Text -->
<button class="rb-button rb-button--primary rb-button--text">Primary Text</button>

<!-- Secondary Text -->
<button class="rb-button rb-button--secondary rb-button--text">Secondary Text</button>

<!-- Danger Text -->
<button class="rb-button rb-button--danger rb-button--text">Danger Text</button>
```

### 4️⃣ **ICONOS**

```html
<!-- Icon Left -->
<button class="rb-button rb-button--primary rb-button--icon-left">
  <svg width="20" height="20">...</svg>
  Icon Left
</button>

<!-- Icon Right -->
<button class="rb-button rb-button--primary rb-button--icon-right">
  Icon Right
  <svg width="20" height="20">...</svg>
</button>

<!-- Icon Only -->
<button class="rb-button rb-button--primary rb-button--icon-only">
  <svg width="20" height="20">...</svg>
</button>

<!-- Icon Left + Fill -->
<button class="rb-button rb-button--primary rb-button--fill rb-button--icon-left">
  <svg width="20" height="20">...</svg>
  Icon Left Fill
</button>

<!-- Icon Right + Text -->
<button class="rb-button rb-button--danger rb-button--text rb-button--icon-right">
  Delete
  <svg width="20" height="20">...</svg>
</button>
```

### 5️⃣ **TAMAÑOS**

```html
<!-- Small -->
<button class="rb-button rb-button--primary rb-button--small">Small</button>

<!-- Medium (default) -->
<button class="rb-button rb-button--primary">Medium</button>

<!-- Large -->
<button class="rb-button rb-button--primary rb-button--large">Large</button>

<!-- Small + Fill + Icon Left -->
<button class="rb-button rb-button--primary rb-button--fill rb-button--small rb-button--icon-left">
  <svg>...</svg> Small Fill
</button>
```

### 6️⃣ **MODIFICADORES**

```html
<!-- Square (esquinas menos redondeadas) -->
<button class="rb-button rb-button--primary rb-button--square">Square</button>

<!-- Circle (circular perfecto) -->
<button class="rb-button rb-button--primary rb-button--circle">
  <svg>...</svg>
</button>

<!-- Block (full width) -->
<button class="rb-button rb-button--primary rb-button--block">Block Full Width</button>
```

### 7️⃣ **ESTADOS**

```html
<!-- Default (estado normal) -->
<button class="rb-button rb-button--primary">Default</button>

<!-- Hover (automático con CSS :hover) -->
<!-- No requiere clase adicional -->

<!-- Pressed/Active (automático con CSS :active) -->
<!-- No requiere clase adicional -->

<!-- Focus (automático con CSS :focus-visible) -->
<!-- No requiere clase adicional -->

<!-- Loading (clase adicional) -->
<button class="rb-button rb-button--primary rb-button--loading">Loading...</button>

<!-- Loading con spinner a la derecha -->
<button class="rb-button rb-button--primary rb-button--loading rb-button--loading-right">
  Loading Right...
</button>

<!-- Loading icon-only -->
<button class="rb-button rb-button--primary rb-button--loading rb-button--icon-only">
  <svg>...</svg>
</button>

<!-- Disabled (atributo HTML) -->
<button class="rb-button rb-button--primary" disabled>Disabled</button>

<!-- Disabled Hover (automático con CSS :disabled:hover) -->
<!-- No requiere clase adicional -->
```

---

## 🎨 Combinaciones Comunes

### Botones de Acción Principal

```html
<!-- CTA Principal (Fill Primary) -->
<button class="rb-button rb-button--primary rb-button--fill rb-button--large">Get Started</button>

<!-- CTA Secundario (Stroke Primary) -->
<button class="rb-button rb-button--primary rb-button--large">Learn More</button>

<!-- CTA Terciario (Text Primary) -->
<button class="rb-button rb-button--primary rb-button--text">View Details</button>
```

### Botones con Iconos

```html
<!-- Save Button -->
<button class="rb-button rb-button--success rb-button--fill rb-button--icon-left">
  <svg>💾</svg> Save
</button>

<!-- Delete Button -->
<button class="rb-button rb-button--danger rb-button--stroke rb-button--icon-left">
  <svg>🗑️</svg> Delete
</button>

<!-- Icon Only Circle -->
<button class="rb-button rb-button--primary rb-button--fill rb-button--circle">
  <svg>+</svg>
</button>
```

### Botones de Estado

```html
<!-- Loading Primary Fill -->
<button class="rb-button rb-button--primary rb-button--fill rb-button--loading">Saving...</button>

<!-- Loading Secondary Stroke -->
<button class="rb-button rb-button--secondary rb-button--loading">Processing...</button>

<!-- Disabled Danger -->
<button class="rb-button rb-button--danger rb-button--fill" disabled>Cannot Delete</button>
```

### Formularios

```html
<!-- Submit Button -->
<button type="submit" class="rb-button rb-button--primary rb-button--fill rb-button--block">
  Submit Form
</button>

<!-- Cancel Button -->
<button type="button" class="rb-button rb-button--secondary rb-button--text">Cancel</button>
```

---

## 📋 Tabla de Variantes de Estilo

| Tipo           | STROKE (default)         | FILL                                      | TEXT                                      |
| -------------- | ------------------------ | ----------------------------------------- | ----------------------------------------- |
| **Primary**    | `.rb-button--primary`    | `.rb-button--primary .rb-button--fill`    | `.rb-button--primary .rb-button--text`    |
| **Secondary**  | `.rb-button--secondary`  | `.rb-button--secondary .rb-button--fill`  | `.rb-button--secondary .rb-button--text`  |
| **Tertiary**   | `.rb-button--tertiary`   | `.rb-button--tertiary .rb-button--fill`   | `.rb-button--tertiary .rb-button--text`   |
| **Danger**     | `.rb-button--danger`     | `.rb-button--danger .rb-button--fill`     | `.rb-button--danger .rb-button--text`     |
| **Success**    | `.rb-button--success`    | `.rb-button--success .rb-button--fill`    | `.rb-button--success .rb-button--text`    |
| **Quinary**    | `.rb-button--quinary`    | `.rb-button--quinary .rb-button--fill`    | `.rb-button--quinary .rb-button--text`    |
| **Quaternary** | `.rb-button--quaternary` | `.rb-button--quaternary .rb-button--fill` | `.rb-button--quaternary .rb-button--text` |

---

## 🎯 Nomenclatura BEM Completa

```
.rb-button                          ← Base
.rb-button--primary                 ← Tipo de color
.rb-button--secondary               ← Tipo de color
.rb-button--tertiary                ← Tipo de color
.rb-button--danger                  ← Tipo de color
.rb-button--success                 ← Tipo de color
.rb-button--quinary                 ← Tipo de color
.rb-button--quaternary              ← Tipo de color

.rb-button--stroke                  ← Estilo (opcional, es default)
.rb-button--fill                    ← Estilo sólido
.rb-button--text                    ← Estilo texto

.rb-button--small                   ← Tamaño
.rb-button--medium                  ← Tamaño (default)
.rb-button--large                   ← Tamaño

.rb-button--icon-left               ← Posición icono
.rb-button--icon-right              ← Posición icono
.rb-button--icon-only               ← Posición icono

.rb-button--square                  ← Modificador
.rb-button--circle                  ← Modificador
.rb-button--block                   ← Modificador

.rb-button--loading                 ← Estado
.rb-button--loading-right           ← Modificador de loading
```

---

## ✅ Reglas CSS Implementadas

### ✅ SIEMPRE Usar:

- ✅ CSS Nesting nativo con `&`
- ✅ `@layer` para control de cascada (10 capas)
- ✅ Logical Properties (inline-size, padding-inline, etc.)
- ✅ `clamp()` para responsive fluido
- ✅ Variables CSS con prefijo `--rb-`
- ✅ Nomenclatura BEM con prefijo `rb-`
- ✅ Accesibilidad completa

### ❌ NUNCA Usar:

- ❌ Physical properties
- ❌ Media queries para tamaños
- ❌ Selectores sin prefijo `rb-`
- ❌ Variables sin prefijo `--rb-`
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
