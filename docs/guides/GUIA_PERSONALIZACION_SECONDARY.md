# 🎨 Guía de Personalización: Botón SECONDARY

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [¿Cuándo personalizar?](#cuándo-personalizar)
3. [Lo que ya incluye el BASE](#lo-que-ya-incluye-el-base)
4. [Variables CSS Disponibles](#variables-css-disponibles)
5. [Ejemplos por Marca](#ejemplos-por-marca)
6. [Anatomía de un Override](#anatomía-de-un-override)
7. [Patrones Comunes](#patrones-comunes)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Introducción

El botón **SECONDARY** ya viene completamente implementado en el BASE con:

- ✅ 3 variantes: **stroke**, **fill**, **text**
- ✅ Todos los estados: default, hover, pressed, focus, disabled, disabled+hover
- ✅ Colores por defecto usando tokens semánticos (secondary, primary, grayscale)

**Solo necesitas crear overrides si tu marca requiere colores diferentes a los del BASE.**

---

## 🤔 ¿Cuándo personalizar?

### ✅ SÍ personalizar cuando:

1. **Los colores del diseño no coinciden con los del BASE**
   - Ejemplo: Seguros Bolívar usa verde (primary) en lugar de amarillo (secondary)

2. **Hay un background hover diferente**
   - Ejemplo: Aparece un background en hover cuando el base es transparent

3. **El focus outline usa otro color**
   - Ejemplo: Verde en lugar de amarillo

### ❌ NO personalizar cuando:

1. **Los comportamientos son iguales al BASE**
   - disabled sin outline
   - shadow en pressed
   - border-width

2. **Solo cambia el valor del token, no el token usado**
   - Si el base usa `--sb-ui-color-secondary-base` y tu marca también, NO necesitas override
   - El valor del token ya está en tu archivo JSON de primitivas

---

## 📦 Lo que ya incluye el BASE

El archivo `/packages/atoms/src/button.css` ya tiene **todo esto implementado**:

### SECONDARY STROKE (default)

```css
.sb-ui-button--secondary {
  /* Default */
  --sb-ui-button-bg-color: var(--sb-ui-color-grayscale-white);
  --sb-ui-button-text-color: var(--sb-ui-color-primary-D100); /* Verde */
  --sb-ui-button-border-color: var(--sb-ui-color-secondary-base); /* Amarillo */

  /* Hover */
  --sb-ui-button-bg-hover: var(--sb-ui-color-secondary-L400); /* Amarillo casi blanco */
  --sb-ui-button-text-hover: var(--sb-ui-color-primary-D100);
  --sb-ui-button-border-hover: var(--sb-ui-color-secondary-D100);

  /* Pressed */
  --sb-ui-button-bg-active: var(--sb-ui-color-secondary-L300);
  --sb-ui-button-shadow-pressed: inset 2px 2px 3px 0px rgba(27, 27, 27, 0.16);

  /* Disabled */
  --sb-ui-button-bg-disabled: var(--sb-ui-color-grayscale-white);
  --sb-ui-button-text-disabled: var(--sb-ui-color-grayscale-base);

  /* Disabled + Hover */
  --sb-ui-button-bg-disabled-hover: var(--sb-ui-color-grayscale-L200); /* Aparece gris */
}
```

### SECONDARY FILL

```css
&.sb-ui-button--fill {
  /* Default */
  --sb-ui-button-bg-color: var(--sb-ui-color-secondary-base); /* Amarillo */
  --sb-ui-button-text-color: var(--sb-ui-color-primary-base); /* Verde */

  /* Hover */
  --sb-ui-button-bg-hover: var(--sb-ui-color-secondary-D100);
  --sb-ui-button-text-hover: var(--sb-ui-color-primary-D100);

  /* Pressed */
  --sb-ui-button-bg-active: var(--sb-ui-color-secondary-D200);
  --sb-ui-button-shadow-pressed: inset 2px 2px 3px 0px rgba(27, 27, 27, 0.16);

  /* Disabled */
  --sb-ui-button-bg-disabled: var(--sb-ui-color-grayscale-L300);
  --sb-ui-button-text-disabled: var(--sb-ui-color-grayscale-L100);

  /* Disabled + Hover */
  --sb-ui-button-text-disabled-hover: var(--sb-ui-color-grayscale-base); /* Se oscurece */
}
```

### SECONDARY TEXT

```css
&.sb-ui-button--text {
  /* Default */
  --sb-ui-button-bg-color: transparent;
  --sb-ui-button-text-color: var(--sb-ui-color-secondary-base); /* Amarillo */

  /* Hover */
  --sb-ui-button-bg-hover: transparent;
  --sb-ui-button-text-hover: var(--sb-ui-color-secondary-D100);

  /* Pressed */
  --sb-ui-button-bg-active: transparent;
  --sb-ui-button-text-active: var(--sb-ui-color-secondary-D200);

  /* Disabled */
  --sb-ui-button-bg-disabled: transparent;
  --sb-ui-button-text-disabled: var(--sb-ui-color-grayscale-base);

  /* Disabled + Hover */
  --sb-ui-button-bg-disabled-hover: var(--sb-ui-color-grayscale-L300); /* Aparece gris */
}
```

---

## 🎨 Variables CSS Disponibles

### Por Estado:

| Variable                            | Descripción                | Cuándo se aplica                           |
| ----------------------------------- | -------------------------- | ------------------------------------------ |
| `--sb-ui-button-bg-color`              | Background default         | Estado normal                              |
| `--sb-ui-button-bg-hover`              | Background hover           | Al pasar el mouse                          |
| `--sb-ui-button-bg-active`             | Background pressed         | Al presionar (`:active`)                   |
| `--sb-ui-button-bg-disabled`           | Background disabled        | Cuando `disabled` o `.sb-ui-button--disabled` |
| `--sb-ui-button-bg-disabled-hover`     | Background disabled+hover  | Hover sobre botón deshabilitado            |
| `--sb-ui-button-text-color`            | Color de texto default     | Estado normal                              |
| `--sb-ui-button-text-hover`            | Color de texto hover       | Al pasar el mouse                          |
| `--sb-ui-button-text-active`           | Color de texto pressed     | Al presionar                               |
| `--sb-ui-button-text-disabled`         | Color de texto disabled    | Cuando deshabilitado                       |
| `--sb-ui-button-text-disabled-hover`   | Color texto disabled+hover | Hover sobre deshabilitado                  |
| `--sb-ui-button-border-color`          | Color de borde default     | Estado normal                              |
| `--sb-ui-button-border-hover`          | Color de borde hover       | Al pasar el mouse                          |
| `--sb-ui-button-border-active`         | Color de borde pressed     | Al presionar                               |
| `--sb-ui-button-border-disabled`       | Color de borde disabled    | Cuando deshabilitado                       |
| `--sb-ui-button-border-disabled-hover` | Color borde disabled+hover | Hover sobre deshabilitado                  |
| `--sb-ui-button-shadow-pressed`        | Sombra interna pressed     | Solo en `:active`                          |

### Para Focus:

```css
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--stroke:focus-visible {
  outline-color: var(--sb-ui-color-secondary-L100); /* O el color que necesites */
}
```

---

## 🏢 Ejemplos por Marca

### 1️⃣ Jelpit (Sin Override)

**Situación:** Los colores del BASE coinciden con el diseño de Jelpit.

**Acción:** ❌ **NO necesitas crear override**

```html
<!-- Funciona directamente con el BASE -->
<div data-brand="jelpit">
  <button class="rb-button rb-button--secondary rb-button--stroke">Stroke (amarillo border)</button>
  <button class="rb-button rb-button--secondary rb-button--fill">Fill (amarillo background)</button>
  <button class="rb-button rb-button--secondary rb-button--text">Text (amarillo text)</button>
</div>
```

---

### 2️⃣ Seguros Bolívar (Override Completo)

**Situación:** SECONDARY usa verde (primary) en lugar de amarillo (secondary).

**Archivo:** `/packages/brand-overrides/src/seguros-bolivar/button.css`

#### SECONDARY STROKE:

```css
@layer brand-overrides {
  /* Solo cambios de color PRIMARY vs SECONDARY */
  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary.sb-ui-button--stroke,
  :where([data-brand='seguros-bolivar'])
    .sb-ui-button--secondary:not(.sb-ui-button--fill):not(.sb-ui-button--text) {
    /* Cambiar de SECONDARY (amarillo) a PRIMARY (verde) */
    --sb-ui-button-text-color: var(--sb-ui-color-primary-D100); /* Verde en vez de amarillo */
    --sb-ui-button-border-color: var(--sb-ui-color-primary-D100);

    --sb-ui-button-bg-hover: var(--sb-ui-color-primary-L400); /* Verde claro en vez de amarillo */
    --sb-ui-button-text-hover: var(--sb-ui-color-primary-D200);
    --sb-ui-button-border-hover: var(--sb-ui-color-primary-D200);

    --sb-ui-button-bg-active: var(--sb-ui-color-primary-L300);
    --sb-ui-button-text-active: var(--sb-ui-color-primary-D200);
    --sb-ui-button-border-active: var(--sb-ui-color-primary-D200);
  }

  /* Focus outline - Verde en vez de amarillo */
  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary.sb-ui-button--stroke:focus-visible,
  :where([data-brand='seguros-bolivar'])
    .sb-ui-button--secondary:not(.sb-ui-button--fill):not(.sb-ui-button--text):focus-visible {
    outline-color: var(--sb-ui-color-primary-L100); /* Verde claro */
  }
}
```

#### SECONDARY FILL:

```css
@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary.sb-ui-button--fill {
    /* Cambiar de SECONDARY (amarillo) a PRIMARY (verde) */
    --sb-ui-button-bg-color: var(--sb-ui-color-primary-L300); /* Verde muy claro en vez de amarillo */
    --sb-ui-button-text-color: var(--sb-ui-color-primary-D200); /* Verde oscuro */
    --sb-ui-button-border-color: var(--sb-ui-color-primary-L300);

    --sb-ui-button-bg-hover: var(--sb-ui-color-primary-L200); /* Verde claro */
    --sb-ui-button-text-hover: var(--sb-ui-color-primary-D300); /* Verde muy oscuro */
    --sb-ui-button-border-hover: var(--sb-ui-color-primary-L200);

    --sb-ui-button-bg-active: var(--sb-ui-color-primary-L200);
    --sb-ui-button-text-active: var(--sb-ui-color-primary-D300);
    --sb-ui-button-border-active: var(--sb-ui-color-primary-L200);
  }

  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
    outline-color: var(--sb-ui-color-primary-L100);
  }
}
```

#### SECONDARY TEXT:

```css
@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary.sb-ui-button--text {
    /* Cambiar de SECONDARY (amarillo) a PRIMARY (verde) */
    --sb-ui-button-text-color: var(--sb-ui-color-primary-D100); /* Verde en vez de amarillo */

    --sb-ui-button-bg-hover: var(--sb-ui-color-primary-L400); /* Verde casi blanco (aparece en hover) */
    --sb-ui-button-text-hover: var(--sb-ui-color-primary-D200);

    --sb-ui-button-bg-active: var(--sb-ui-color-primary-L300); /* Verde claro (aparece en pressed) */
    --sb-ui-button-text-active: var(--sb-ui-color-primary-D200);
  }

  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary.sb-ui-button--text:focus-visible {
    outline-color: var(--sb-ui-color-primary-L100);
  }
}
```

---

### 3️⃣ Davivienda (Override Parcial - Solo FILL)

**Situación:** Solo quiere cambiar el FILL a rojo, dejando STROKE y TEXT con amarillo.

**Archivo:** `/packages/brand-overrides/src/davivienda/button.css`

```css
@layer brand-overrides {
  /* Solo personalizar FILL, stroke y text usan el BASE */
  :where([data-brand='davivienda']) .sb-ui-button--secondary.sb-ui-button--fill {
    /* Cambiar a rojo (error) */
    --sb-ui-button-bg-color: var(--sb-ui-color-error-base); /* Rojo */
    --sb-ui-button-bg-hover: var(--sb-ui-color-error-D100);
    --sb-ui-button-bg-active: var(--sb-ui-color-error-D200);

    /* Texto blanco para contraste */
    --sb-ui-button-text-color: var(--sb-ui-color-grayscale-white);
    --sb-ui-button-text-hover: var(--sb-ui-color-grayscale-white);
    --sb-ui-button-text-active: var(--sb-ui-color-grayscale-white);
  }

  :where([data-brand='davivienda']) .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
    outline-color: var(--sb-ui-color-error-L100); /* Rojo claro */
  }
}
```

---

### 4️⃣ Doctor Aki (Solo cambiar focus outline)

**Situación:** Los colores están bien, solo quiere un outline violeta en focus.

```css
@layer brand-overrides {
  /* Solo personalizar focus outline */
  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--stroke:focus-visible,
  :where([data-brand='doctor-aki'])
    .sb-ui-button--secondary:not(.sb-ui-button--fill):not(.sb-ui-button--text):focus-visible {
    outline-color: var(--sb-ui-color-tertiary-base); /* Violeta */
  }

  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
    outline-color: var(--sb-ui-color-tertiary-base);
  }

  :where([data-brand='doctor-aki']) .sb-ui-button--secondary.sb-ui-button--text:focus-visible {
    outline-color: var(--sb-ui-color-tertiary-base);
  }
}
```

---

## 🔧 Anatomía de un Override

### Estructura Básica:

```css
@layer brand-overrides {
  /* 
     1. Usar :where() para baja especificidad
     2. Solo definir las variables que cambian
     3. Comentar QUÉ cambia vs el BASE
  */
  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--VARIANTE {
    /* Solo las variables que DIFIEREN del BASE */
    --sb-ui-button-bg-color: var(--tu-token-especifico);
    --sb-ui-button-text-color: var(--tu-token-especifico);
  }

  /* Focus outline separado */
  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--VARIANTE:focus-visible {
    outline-color: var(--tu-color-focus);
  }
}
```

### Reglas de Oro:

1. ✅ **SIEMPRE** usar `@layer brand-overrides`
2. ✅ **SIEMPRE** usar `:where([data-brand='tu-marca'])` para baja especificidad
3. ✅ **SOLO** definir variables que cambien vs el BASE
4. ✅ **COMENTAR** qué cambia y por qué
5. ❌ **NUNCA** duplicar lógica de comportamiento (disabled, shadows, etc.)
6. ❌ **NUNCA** usar `!important`

---

## 📚 Patrones Comunes

### 🎯 Patrón 1: Swap de Colores (PRIMARY ↔ SECONDARY)

**Caso:** Tu marca usa primary donde el base usa secondary.

```css
/* BASE usa secondary, TÚ usas primary */
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--stroke {
  /* Solo reemplazar SECONDARY → PRIMARY */
  --sb-ui-button-border-color: var(--sb-ui-color-primary-D100);
  --sb-ui-button-border-hover: var(--sb-ui-color-primary-D200);
  --sb-ui-button-bg-hover: var(--sb-ui-color-primary-L400);
}
```

---

### 🎯 Patrón 2: Background que Aparece en Hover

**Caso:** El base tiene transparent, tú quieres un color.

```css
/* BASE: transparent, TÚ: color en hover */
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--text {
  /* Solo hover/active backgrounds */
  --sb-ui-button-bg-hover: var(--sb-ui-color-primary-L400);
  --sb-ui-button-bg-active: var(--sb-ui-color-primary-L300);
}
```

---

### 🎯 Patrón 3: Solo Focus Outline

**Caso:** Todo está bien, solo quieres otro color de outline.

```css
/* Solo personalizar outline, nada más */
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
  outline-color: var(--sb-ui-color-tertiary-base);
}
```

---

### 🎯 Patrón 4: Texto con Contraste Diferente

**Caso:** Tu background requiere texto blanco en lugar de primary.

```css
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--fill {
  /* Solo cambiar texto para mejor contraste */
  --sb-ui-button-text-color: var(--sb-ui-color-grayscale-white);
  --sb-ui-button-text-hover: var(--sb-ui-color-grayscale-white);
  --sb-ui-button-text-active: var(--sb-ui-color-grayscale-white);
}
```

---

## 🐛 Troubleshooting

### ❌ Problema: El override no se aplica

**Causa:** Especificidad incorrecta.

**Solución:** Verifica que uses `:where()`:

```css
/* ❌ MAL - Alta especificidad */
[data-brand='tu-marca'] .sb-ui-button--secondary.sb-ui-button--fill {
  ...
}

/* ✅ BIEN - Baja especificidad */
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--fill {
  ...
}
```

---

### ❌ Problema: El disabled muestra outline

**Causa:** No estás dejando que el BASE maneje disabled.

**Solución:** NO definas reglas de disabled, déjalo al BASE:

```css
/* ❌ MAL - Duplicando lógica de disabled */
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--stroke:disabled {
  outline: none; /* ❌ No hagas esto */
}

/* ✅ BIEN - El BASE ya maneja disabled */
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--stroke {
  /* Solo colores, no comportamiento */
  --sb-ui-button-text-color: var(--tu-color);
}
```

---

### ❌ Problema: No compila o lanza error

**Causa:** Falta `@layer` o sintaxis incorrecta.

**Solución:** Verifica la estructura:

```css
/* ✅ Estructura correcta */
@layer brand-overrides {
  :where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--stroke {
    --sb-ui-button-text-color: var(--sb-ui-color-primary-D100);
  }
}
```

---

### ❌ Problema: El focus outline no cambia

**Causa:** Falta definir `outline-color` en `:focus-visible`.

**Solución:** Agregar regla separada:

```css
/* ✅ Agregar focus outline */
:where([data-brand='tu-marca']) .sb-ui-button--secondary.sb-ui-button--stroke:focus-visible {
  outline-color: var(--tu-color-focus);
}
```

---

## 📝 Checklist para Crear Override

Antes de implementar, verifica:

- [ ] **¿El BASE ya tiene lo que necesito?** → Si sí, NO crear override
- [ ] **¿Solo necesito cambiar colores?** → Usar solo variables de color
- [ ] **¿Estoy usando `@layer brand-overrides`?** → Requerido
- [ ] **¿Estoy usando `:where([data-brand])`?** → Requerido para baja especificidad
- [ ] **¿Estoy comentando QUÉ cambia vs BASE?** → Ayuda a futuros mantenedores
- [ ] **¿Estoy duplicando lógica de disabled/shadow?** → ❌ No hacerlo
- [ ] **¿Necesito personalizar focus outline?** → Agregar regla `:focus-visible`
- [ ] **¿Compilé y probé?** → `npm run build` debe pasar

---

## 🚀 Próximos Pasos

1. **Revisa tu diseño** y compáralo con el BASE
2. **Identifica solo las diferencias de color**
3. **Crea override mínimo** siguiendo los patrones
4. **Compila** con `npm run build`
5. **Prueba** en `examples/button-secondary.html`

---

**Fecha:** Octubre 16, 2025  
**Versión:** 1.0  
**Autor:** Seguros Bolivar UI Team  
**Última actualización:** Migración SECONDARY a BASE
