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
  :where([data-brand='davivienda']) .sb-ui-button--secondary.sb-ui-button--fill {
    /* Cambiar de amarillo (secondary) a rojo (error) */
    --sb-ui-button-bg-color: var(--sb-ui-color-feedback-error-base);
    --sb-ui-button-bg-hover: var(--sb-ui-color-feedback-error-D100);
    --sb-ui-button-bg-active: var(--sb-ui-color-feedback-error-D200);

    /* Texto blanco para mejor contraste */
    --sb-ui-button-text-color: var(--sb-ui-color-grayscale-white);
    --sb-ui-button-text-hover: var(--sb-ui-color-grayscale-white);
    --sb-ui-button-text-active: var(--sb-ui-color-grayscale-white);

    --sb-ui-button-border-color: var(--sb-ui-color-feedback-error-base);
    --sb-ui-button-border-hover: var(--sb-ui-color-feedback-error-D100);
    --sb-ui-button-border-active: var(--sb-ui-color-feedback-error-D200);
  }

  /* Focus outline - Rojo claro */
  :where([data-brand='davivienda']) .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
    outline-color: var(--sb-ui-color-feedback-error-L100);
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
  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--stroke,
  :where([data-brand='doctor-aki'])
    .sb-ui-button--secondary:not(.sb-ui-button--fill):not(.sb-ui-button--text) {
    /* Cambiar de SECONDARY (amarillo) a TERTIARY (violeta) */
    --sb-ui-button-text-color: var(--sb-ui-color-tertiary-D100);
    --sb-ui-button-border-color: var(--sb-ui-color-tertiary-D100);

    --sb-ui-button-bg-hover: var(--sb-ui-color-tertiary-L400);
    --sb-ui-button-text-hover: var(--sb-ui-color-tertiary-D200);
    --sb-ui-button-border-hover: var(--sb-ui-color-tertiary-D200);

    --sb-ui-button-bg-active: var(--sb-ui-color-tertiary-L300);
    --sb-ui-button-text-active: var(--sb-ui-color-tertiary-D200);
    --sb-ui-button-border-active: var(--sb-ui-color-tertiary-D200);
  }

  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--stroke:focus-visible,
  :where([data-brand='doctor-aki'])
    .sb-ui-button--secondary:not(.sb-ui-button--fill):not(.sb-ui-button--text):focus-visible {
    outline-color: var(--sb-ui-color-tertiary-L100);
  }
}

@layer brand-overrides {
  /* SECONDARY FILL - Solo cambios de color TERTIARY vs SECONDARY */
  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--fill {
    --sb-ui-button-bg-color: var(--sb-ui-color-tertiary-L300);
    --sb-ui-button-text-color: var(--sb-ui-color-tertiary-D200);
    --sb-ui-button-border-color: var(--sb-ui-color-tertiary-L300);

    --sb-ui-button-bg-hover: var(--sb-ui-color-tertiary-L200);
    --sb-ui-button-text-hover: var(--sb-ui-color-tertiary-D300);
    --sb-ui-button-border-hover: var(--sb-ui-color-tertiary-L200);

    --sb-ui-button-bg-active: var(--sb-ui-color-tertiary-L200);
    --sb-ui-button-text-active: var(--sb-ui-color-tertiary-D300);
    --sb-ui-button-border-active: var(--sb-ui-color-tertiary-L200);
  }

  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
    outline-color: var(--sb-ui-color-tertiary-L100);
  }
}

@layer brand-overrides {
  /* SECONDARY TEXT - Solo cambios de color TERTIARY vs SECONDARY */
  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--text {
    --sb-ui-button-text-color: var(--sb-ui-color-tertiary-D100);

    --sb-ui-button-bg-hover: var(--sb-ui-color-tertiary-L400);
    --sb-ui-button-text-hover: var(--sb-ui-color-tertiary-D200);

    --sb-ui-button-bg-active: var(--sb-ui-color-tertiary-L300);
    --sb-ui-button-text-active: var(--sb-ui-color-tertiary-D200);
  }

  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--text:focus-visible {
    outline-color: var(--sb-ui-color-tertiary-L100);
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
  :where([data-brand='cien-cuadras']) .sb-ui-button--secondary.sb-ui-button--stroke:focus-visible,
  :where([data-brand='cien-cuadras'])
    .sb-ui-button--secondary:not(.sb-ui-button--fill):not(.sb-ui-button--text):focus-visible {
    outline-color: var(--sb-ui-color-tertiary-base);
    outline-width: 4px; /* Más grueso que el base (2px) */
    outline-offset: 4px; /* Más separado */
  }

  :where([data-brand='cien-cuadras']) .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
    outline-color: var(--sb-ui-color-tertiary-base);
    outline-width: 4px;
    outline-offset: 4px;
  }

  :where([data-brand='cien-cuadras']) .sb-ui-button--secondary.sb-ui-button--text:focus-visible {
    outline-color: var(--sb-ui-color-tertiary-base);
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
  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--stroke,
  :where([data-brand='tu-marca'])
    .sb-ui-button--secondary:not(.sb-ui-button--fill):not(.sb-ui-button--text) {
    /* Solo definir lo que CAMBIA vs BASE */
    --sb-ui-button-text-color: var(--sb-ui-color-???);
    --sb-ui-button-border-color: var(--sb-ui-color-???);

    --sb-ui-button-bg-hover: var(--sb-ui-color-???);
    --sb-ui-button-text-hover: var(--sb-ui-color-???);
    --sb-ui-button-border-hover: var(--sb-ui-color-???);

    --sb-ui-button-bg-active: var(--sb-ui-color-???);
    --sb-ui-button-text-active: var(--sb-ui-color-???);
    --sb-ui-button-border-active: var(--sb-ui-color-???);
  }

  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--stroke:focus-visible,
  :where([data-brand='tu-marca'])
    .sb-ui-button--secondary:not(.sb-ui-button--fill):not(.sb-ui-button--text):focus-visible {
    outline-color: var(--sb-ui-color-???);
  }
}

@layer brand-overrides {
  /* ============================================
     SECONDARY FILL
     ============================================ */
  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--fill {
    --sb-ui-button-bg-color: var(--sb-ui-color-???);
    --sb-ui-button-text-color: var(--sb-ui-color-???);
    --sb-ui-button-border-color: var(--sb-ui-color-???);

    --sb-ui-button-bg-hover: var(--sb-ui-color-???);
    --sb-ui-button-text-hover: var(--sb-ui-color-???);
    --sb-ui-button-border-hover: var(--sb-ui-color-???);

    --sb-ui-button-bg-active: var(--sb-ui-color-???);
    --sb-ui-button-text-active: var(--sb-ui-color-???);
    --sb-ui-button-border-active: var(--sb-ui-color-???);
  }

  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
    outline-color: var(--sb-ui-color-???);
  }
}

@layer brand-overrides {
  /* ============================================
     SECONDARY TEXT
     ============================================ */
  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--text {
    --sb-ui-button-text-color: var(--sb-ui-color-???);

    --sb-ui-button-bg-hover: var(--sb-ui-color-???);
    --sb-ui-button-text-hover: var(--sb-ui-color-???);

    --sb-ui-button-bg-active: var(--sb-ui-color-???);
    --sb-ui-button-text-active: var(--sb-ui-color-???);
  }

  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--text:focus-visible {
    outline-color: var(--sb-ui-color-???);
  }
}
```

---

## 🎯 Tokens Disponibles por Marca

Cada marca tiene estos tokens disponibles (revisar en `packages/tokens/src/primitives/brands/tu-marca.json`):

### Colores Principales:

```css
/* Primary (color principal de marca) */
var(--sb-ui-color-primary-D400)  /* Muy muy oscuro */
var(--sb-ui-color-primary-D300)  /* Muy oscuro */
var(--sb-ui-color-primary-D200)  /* Oscuro */
var(--sb-ui-color-primary-D100)  /* Medio oscuro */
var(--sb-ui-color-primary-base)  /* Base */
var(--sb-ui-color-primary-L100)  /* Claro medio */
var(--sb-ui-color-primary-L200)  /* Claro */
var(--sb-ui-color-primary-L300)  /* Muy claro */
var(--sb-ui-color-primary-L400)  /* Casi blanco */

/* Secondary (color secundario de marca) */
var(--sb-ui-color-secondary-D400) /* ... misma escala ... */
var(--sb-ui-color-secondary-base)
var(--sb-ui-color-secondary-L400)

/* Tertiary (color terciario de marca) */
var(--sb-ui-color-tertiary-D400) /* ... misma escala ... */
var(--sb-ui-color-tertiary-base)
var(--sb-ui-color-tertiary-L400)

/* Grayscale (grises neutrales) */
var(--sb-ui-color-grayscale-black)
var(--sb-ui-color-grayscale-base)
var(--sb-ui-color-grayscale-white)

/* Feedback (estados) */
var(--sb-ui-color-feedback-error-base)
var(--sb-ui-color-feedback-success-base)
var(--sb-ui-color-feedback-warning-base)
var(--sb-ui-color-feedback-info-base)
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
