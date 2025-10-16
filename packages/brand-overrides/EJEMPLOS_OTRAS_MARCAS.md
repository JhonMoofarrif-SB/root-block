# 🎨 Ejemplos de Overrides para Otras Marcas

## 🎯 Estrategia Simple

**Seguros Bolívar ya implementó todo el patrón.** Solo necesitas:

1. ✅ Copiar el archivo de Seguros Bolívar
2. ✅ Cambiar `seguros-bolivar` por tu marca
3. ✅ Ajustar los colores según tu diseño
4. ✅ ¡Listo!

---

## 📋 Checklist Rápido

Para crear override de **SECONDARY button** en tu marca:

- [ ] Copiar `seguros-bolivar/button.css` a `tu-marca/button.css`
- [ ] Buscar y reemplazar `seguros-bolivar` → `tu-marca`
- [ ] Decidir qué personalizar:
  - [ ] ¿STROKE usa colores diferentes?
  - [ ] ¿FILL usa colores diferentes?
  - [ ] ¿TEXT usa colores diferentes?
  - [ ] ¿Focus outline usa otro color?
- [ ] Compilar: `npm run build`
- [ ] Probar en navegador

---

## 🎨 Ejemplo 1: Jelpit (Sin Override)

### Situación:

- ✅ Los colores del BASE (amarillo) funcionan perfectamente
- ✅ No necesita cambios especiales

### Acción:

**NO CREAR OVERRIDE** ❌

```html
<!-- Funciona directamente con el BASE -->
<div data-brand="jelpit">
  <button class="rb-button rb-button--secondary rb-button--stroke">Botón Stroke (amarillo)</button>
</div>
```

**Archivos necesarios:** `0` 🎉

---

## 🎨 Ejemplo 2: Davivienda (Override Parcial - Solo FILL)

### Situación:

- STROKE y TEXT: ✅ Funcionan con el BASE
- FILL: ❌ Necesita ser rojo en lugar de amarillo

### Paso 1: Crear archivo

```bash
touch packages/brand-overrides/src/davivienda/button.css
```

### Paso 2: Solo override de FILL

**Archivo:** `packages/brand-overrides/src/davivienda/button.css`

```css
/**
 * Davivienda - Button Overrides
 * Solo personaliza SECONDARY FILL (rojo)
 */

@layer brand-overrides {
  /* SECONDARY FILL - Rojo en lugar de amarillo */
  :where([data-brand='davivienda']) .rb-button--secondary.rb-button--fill {
    /* Cambiar de amarillo (secondary) a rojo (error) */
    --rb-button-bg-color: var(--rb-color-feedback-error-base);
    --rb-button-bg-hover: var(--rb-color-feedback-error-D100);
    --rb-button-bg-active: var(--rb-color-feedback-error-D200);

    /* Texto blanco para mejor contraste */
    --rb-button-text-color: var(--rb-color-grayscale-white);
    --rb-button-text-hover: var(--rb-color-grayscale-white);
    --rb-button-text-active: var(--rb-color-grayscale-white);

    --rb-button-border-color: var(--rb-color-feedback-error-base);
    --rb-button-border-hover: var(--rb-color-feedback-error-D100);
    --rb-button-border-active: var(--rb-color-feedback-error-D200);
  }

  /* Focus outline - Rojo claro */
  :where([data-brand='davivienda']) .rb-button--secondary.rb-button--fill:focus-visible {
    outline-color: var(--rb-color-feedback-error-L100);
  }
}
```

### Paso 3: Importar en index.css

**Archivo:** `packages/brand-overrides/src/davivienda/index.css`

```css
/**
 * Davivienda - All Overrides
 */

@import './button.css';
```

**Total de líneas:** ~25 líneas 🎯

---

## 🎨 Ejemplo 3: Doctor Aki (Override Completo - Como Seguros Bolívar)

### Situación:

- SECONDARY debe usar TERTIARY (violeta) en lugar de SECONDARY (amarillo)
- Igual que Seguros Bolívar pero con colores violetas

### Paso 1: Copiar archivo de Seguros Bolívar

```bash
cp packages/brand-overrides/src/seguros-bolivar/button.css \
   packages/brand-overrides/src/doctor-aki/button.css
```

### Paso 2: Buscar y reemplazar

```bash
# En doctor-aki/button.css
Buscar:    seguros-bolivar
Reemplazar: doctor-aki

Buscar:    primary  (en comentarios de secondary)
Reemplazar: tertiary
```

### Paso 3: Ajustar colores

**Archivo:** `packages/brand-overrides/src/doctor-aki/button.css`

```css
@layer brand-overrides {
  /* SECONDARY STROKE - Solo cambios de color TERTIARY vs SECONDARY */
  :where([data-brand='doctor-aki']) .rb-button--secondary.rb-button--stroke,
  :where([data-brand='doctor-aki'])
    .rb-button--secondary:not(.rb-button--fill):not(.rb-button--text) {
    /* Cambiar de SECONDARY (amarillo) a TERTIARY (violeta) */
    --rb-button-text-color: var(--rb-color-tertiary-D100);
    --rb-button-border-color: var(--rb-color-tertiary-D100);

    --rb-button-bg-hover: var(--rb-color-tertiary-L400);
    --rb-button-text-hover: var(--rb-color-tertiary-D200);
    --rb-button-border-hover: var(--rb-color-tertiary-D200);

    --rb-button-bg-active: var(--rb-color-tertiary-L300);
    --rb-button-text-active: var(--rb-color-tertiary-D200);
    --rb-button-border-active: var(--rb-color-tertiary-D200);
  }

  :where([data-brand='doctor-aki']) .rb-button--secondary.rb-button--stroke:focus-visible,
  :where([data-brand='doctor-aki'])
    .rb-button--secondary:not(.rb-button--fill):not(.rb-button--text):focus-visible {
    outline-color: var(--rb-color-tertiary-L100);
  }
}

@layer brand-overrides {
  /* SECONDARY FILL - Solo cambios de color TERTIARY vs SECONDARY */
  :where([data-brand='doctor-aki']) .rb-button--secondary.rb-button--fill {
    --rb-button-bg-color: var(--rb-color-tertiary-L300);
    --rb-button-text-color: var(--rb-color-tertiary-D200);
    --rb-button-border-color: var(--rb-color-tertiary-L300);

    --rb-button-bg-hover: var(--rb-color-tertiary-L200);
    --rb-button-text-hover: var(--rb-color-tertiary-D300);
    --rb-button-border-hover: var(--rb-color-tertiary-L200);

    --rb-button-bg-active: var(--rb-color-tertiary-L200);
    --rb-button-text-active: var(--rb-color-tertiary-D300);
    --rb-button-border-active: var(--rb-color-tertiary-L200);
  }

  :where([data-brand='doctor-aki']) .rb-button--secondary.rb-button--fill:focus-visible {
    outline-color: var(--rb-color-tertiary-L100);
  }
}

@layer brand-overrides {
  /* SECONDARY TEXT - Solo cambios de color TERTIARY vs SECONDARY */
  :where([data-brand='doctor-aki']) .rb-button--secondary.rb-button--text {
    --rb-button-text-color: var(--rb-color-tertiary-D100);

    --rb-button-bg-hover: var(--rb-color-tertiary-L400);
    --rb-button-text-hover: var(--rb-color-tertiary-D200);

    --rb-button-bg-active: var(--rb-color-tertiary-L300);
    --rb-button-text-active: var(--rb-color-tertiary-D200);
  }

  :where([data-brand='doctor-aki']) .rb-button--secondary.rb-button--text:focus-visible {
    outline-color: var(--rb-color-tertiary-L100);
  }
}
```

**Total de líneas:** ~60 líneas 🎯

---

## 🎨 Ejemplo 4: Cien Cuadras (Solo Focus Outline Diferente)

### Situación:

- STROKE, FILL, TEXT: ✅ Funcionan con el BASE
- Focus outline: ❌ Necesita ser más grueso y color diferente

### Archivo: `packages/brand-overrides/src/cien-cuadras/button.css`

```css
/**
 * Cien Cuadras - Button Overrides
 * Solo personaliza focus outline (más grueso)
 */

@layer brand-overrides {
  /* Focus outline más grueso para TODAS las variantes secondary */
  :where([data-brand='cien-cuadras']) .rb-button--secondary.rb-button--stroke:focus-visible,
  :where([data-brand='cien-cuadras'])
    .rb-button--secondary:not(.rb-button--fill):not(.rb-button--text):focus-visible {
    outline-color: var(--rb-color-tertiary-base);
    outline-width: 4px; /* Más grueso que el base (2px) */
    outline-offset: 4px; /* Más separado */
  }

  :where([data-brand='cien-cuadras']) .rb-button--secondary.rb-button--fill:focus-visible {
    outline-color: var(--rb-color-tertiary-base);
    outline-width: 4px;
    outline-offset: 4px;
  }

  :where([data-brand='cien-cuadras']) .rb-button--secondary.rb-button--text:focus-visible {
    outline-color: var(--rb-color-tertiary-base);
    outline-width: 4px;
    outline-offset: 4px;
  }
}
```

**Total de líneas:** ~15 líneas 🎯

---

## 📊 Matriz de Decisión

| Marca               | STROKE     | FILL       | TEXT       | Focus      | Override          |
| ------------------- | ---------- | ---------- | ---------- | ---------- | ----------------- |
| **Jelpit**          | ✅ Base    | ✅ Base    | ✅ Base    | ✅ Base    | ❌ **0 líneas**   |
| **Davivienda**      | ✅ Base    | ❌ Rojo    | ✅ Base    | ❌ Rojo    | ✅ **~25 líneas** |
| **Doctor Aki**      | ❌ Violeta | ❌ Violeta | ❌ Violeta | ❌ Violeta | ✅ **~60 líneas** |
| **Cien Cuadras**    | ✅ Base    | ✅ Base    | ✅ Base    | ❌ Grueso  | ✅ **~15 líneas** |
| **Seguros Bolívar** | ❌ Verde   | ❌ Verde   | ❌ Verde   | ❌ Verde   | ✅ **~60 líneas** |

---

## 🔧 Plantilla Rápida

### Para copiar y pegar:

```css
/**
 * [TU-MARCA] - Button Overrides
 * Personalización de SECONDARY button
 */

@layer brand-overrides {
  /* ============================================
     SECONDARY STROKE
     ============================================ */
  :where([data-brand='tu-marca']) .rb-button--secondary.rb-button--stroke,
  :where([data-brand='tu-marca'])
    .rb-button--secondary:not(.rb-button--fill):not(.rb-button--text) {
    /* Solo definir lo que CAMBIA vs BASE */
    --rb-button-text-color: var(--rb-color-???);
    --rb-button-border-color: var(--rb-color-???);

    --rb-button-bg-hover: var(--rb-color-???);
    --rb-button-text-hover: var(--rb-color-???);
    --rb-button-border-hover: var(--rb-color-???);

    --rb-button-bg-active: var(--rb-color-???);
    --rb-button-text-active: var(--rb-color-???);
    --rb-button-border-active: var(--rb-color-???);
  }

  :where([data-brand='tu-marca']) .rb-button--secondary.rb-button--stroke:focus-visible,
  :where([data-brand='tu-marca'])
    .rb-button--secondary:not(.rb-button--fill):not(.rb-button--text):focus-visible {
    outline-color: var(--rb-color-???);
  }
}

@layer brand-overrides {
  /* ============================================
     SECONDARY FILL
     ============================================ */
  :where([data-brand='tu-marca']) .rb-button--secondary.rb-button--fill {
    --rb-button-bg-color: var(--rb-color-???);
    --rb-button-text-color: var(--rb-color-???);
    --rb-button-border-color: var(--rb-color-???);

    --rb-button-bg-hover: var(--rb-color-???);
    --rb-button-text-hover: var(--rb-color-???);
    --rb-button-border-hover: var(--rb-color-???);

    --rb-button-bg-active: var(--rb-color-???);
    --rb-button-text-active: var(--rb-color-???);
    --rb-button-border-active: var(--rb-color-???);
  }

  :where([data-brand='tu-marca']) .rb-button--secondary.rb-button--fill:focus-visible {
    outline-color: var(--rb-color-???);
  }
}

@layer brand-overrides {
  /* ============================================
     SECONDARY TEXT
     ============================================ */
  :where([data-brand='tu-marca']) .rb-button--secondary.rb-button--text {
    --rb-button-text-color: var(--rb-color-???);

    --rb-button-bg-hover: var(--rb-color-???);
    --rb-button-text-hover: var(--rb-color-???);

    --rb-button-bg-active: var(--rb-color-???);
    --rb-button-text-active: var(--rb-color-???);
  }

  :where([data-brand='tu-marca']) .rb-button--secondary.rb-button--text:focus-visible {
    outline-color: var(--rb-color-???);
  }
}
```

---

## 🎯 Tokens Disponibles por Marca

Cada marca tiene estos tokens disponibles (revisar en `packages/tokens/src/primitives/brands/tu-marca.json`):

### Colores Principales:

```css
/* Primary (color principal de marca) */
var(--rb-color-primary-D400)  /* Muy muy oscuro */
var(--rb-color-primary-D300)  /* Muy oscuro */
var(--rb-color-primary-D200)  /* Oscuro */
var(--rb-color-primary-D100)  /* Medio oscuro */
var(--rb-color-primary-base)  /* Base */
var(--rb-color-primary-L100)  /* Claro medio */
var(--rb-color-primary-L200)  /* Claro */
var(--rb-color-primary-L300)  /* Muy claro */
var(--rb-color-primary-L400)  /* Casi blanco */

/* Secondary (color secundario de marca) */
var(--rb-color-secondary-D400) /* ... misma escala ... */
var(--rb-color-secondary-base)
var(--rb-color-secondary-L400)

/* Tertiary (color terciario de marca) */
var(--rb-color-tertiary-D400) /* ... misma escala ... */
var(--rb-color-tertiary-base)
var(--rb-color-tertiary-L400)

/* Grayscale (grises neutrales) */
var(--rb-color-grayscale-black)
var(--rb-color-grayscale-base)
var(--rb-color-grayscale-white)

/* Feedback (estados) */
var(--rb-color-feedback-error-base)
var(--rb-color-feedback-success-base)
var(--rb-color-feedback-warning-base)
var(--rb-color-feedback-info-base)
```

---

## 🚀 Quick Start

### 1. ¿Necesito override?

**NO** si:

- ✅ Los colores del BASE (amarillo para secondary) funcionan para tu marca

**SÍ** si:

- ❌ SECONDARY debe usar otros colores (primary, tertiary, feedback)
- ❌ Focus outline debe ser diferente
- ❌ Hover/pressed tienen comportamiento especial

### 2. ¿Qué tipo de override?

- **Parcial** (~15-25 líneas): Solo 1 variante o focus
- **Completo** (~60 líneas): Las 3 variantes (stroke, fill, text)

### 3. Implementar

```bash
# 1. Crear archivo
touch packages/brand-overrides/src/tu-marca/button.css

# 2. Copiar plantilla o ejemplo
# 3. Ajustar colores
# 4. Compilar
npm run build

# 5. Probar
open examples/button-secondary.html
```

---

## 📚 Referencias

- `GUIA_PERSONALIZACION_SECONDARY.md` - Guía completa
- `seguros-bolivar/button.css` - Ejemplo completo
- `packages/tokens/src/primitives/brands/` - Tokens por marca

---

## 💡 Tips

1. ✅ **Empieza con lo mínimo**: Solo override lo que necesites
2. ✅ **Copia de Seguros Bolívar**: Ya tiene todo el patrón
3. ✅ **Usa `:where()`**: Baja especificidad, evita conflictos
4. ✅ **Usa `@layer brand-overrides`**: Orden de cascada correcto
5. ✅ **Comenta por qué**: Ayuda a futuros desarrolladores

---

**¡Listo para crear tu override!** 🎨
