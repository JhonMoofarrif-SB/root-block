# 🎨 DISABLED + HOVER - Guía Completa

> **Versión:** 1.0.0  
> **Fecha:** 2025-01-16  
> **Implementado en:** CSS.mdc v3.3.0, CSS_OVERRIDE_BRAND.mdc v2.1.0

---

## 📋 ¿Qué es Disabled + Hover?

Es un patrón UX que permite mostrar **visual feedback** cuando el usuario pasa el mouse sobre un componente deshabilitado, sin cambiar su funcionalidad.

### Beneficios
✅ **UX mejorada:** Usuario sabe que el componente detecta hover pero está deshabilitado  
✅ **Flexible:** Cada marca puede personalizar su feedback visual  
✅ **Fallback automático:** Si no se define `-disabled-hover`, usa `-disabled`  
✅ **Consistente:** Mismo patrón para todos los componentes  
✅ **Backward compatible:** No rompe implementaciones existentes  

---

## 🎯 Variables Disponibles

Para cada propiedad (`bg`, `text`, `border`), ahora hay **2 variables disabled**:

```css
/* Sin hover */
--rb-[component]-[variant]-[style]-bg-disabled
--rb-[component]-[variant]-[style]-text-disabled
--rb-[component]-[variant]-[style]-border-disabled

/* Con hover (NUEVO en v3.3.0) */
--rb-[component]-[variant]-[style]-bg-disabled-hover
--rb-[component]-[variant]-[style]-text-disabled-hover
--rb-[component]-[variant]-[style]-border-disabled-hover
```

### Fallback Automático

Si **NO defines** `-disabled-hover`, el sistema usa automáticamente `-disabled`:

```css
/* Si solo defines esto: */
--rb-button-bg-disabled: var(--rb-color-grayscale-L300);

/* El hover usará el mismo valor automáticamente */
/* NO necesitas definir --rb-button-bg-disabled-hover */
```

---

## 📊 Patrones Comunes por Variante

| Variante | Disabled (sin hover) | Disabled + Hover | Feedback Visual |
|----------|----------------------|------------------|-----------------|
| **STROKE** | `bg: transparent`, `text: #9B9B9B`, `border: #9B9B9B` | `bg: #E1E1E1`, `text: #9B9B9B`, `border: #9B9B9B` | ✨ Fondo aparece |
| **FILL** | `bg: #F5F5F5`, `text: #9B9B9B`, `border: #F5F5F5` | `bg: #F5F5F5`, `text: #B9B9B9`, `border: #F5F5F5` | ✨ Texto se aclara |
| **TEXT** | `bg: transparent`, `text: #9B9B9B` | `bg: #F5F5F5`, `text: #9B9B9B` | ✨ Fondo aparece |

---

## 🎨 Tokens Recomendados

| Token | Hex | Uso Recomendado |
|-------|-----|-----------------|
| `--rb-color-grayscale-base` | `#9B9B9B` | Texto/icono disabled (oscuro) |
| `--rb-color-grayscale-L100` | `#B9B9B9` | Texto/icono disabled hover (más claro) |
| `--rb-color-grayscale-L200` | `#E1E1E1` | Fondo disabled hover (STROKE) |
| `--rb-color-grayscale-L300` | `#F5F5F5` | Fondo disabled (FILL) |

---

## 💻 Ejemplos de Implementación

### PRIMARY STROKE

```css
@layer brand-overrides {
  [data-brand='seguros-bolivar'] .rb-button--primary {
    /* DISABLED (sin hover) */
    --rb-button-bg-disabled: transparent;
    --rb-button-text-disabled: var(--rb-color-grayscale-base); /* #9B9B9B */
    --rb-button-border-disabled: var(--rb-color-grayscale-base);
    
    /* DISABLED + HOVER (aparece fondo gris) */
    --rb-button-bg-disabled-hover: var(--rb-color-grayscale-L200); /* #E1E1E1 */
    --rb-button-text-disabled-hover: var(--rb-color-grayscale-base); /* #9B9B9B mantiene */
    --rb-button-border-disabled-hover: var(--rb-color-grayscale-base);
  }
}
```

### PRIMARY FILL

```css
@layer brand-overrides {
  [data-brand='seguros-bolivar'] .rb-button--primary.rb-button--fill {
    /* DISABLED (sin hover) */
    --rb-button-bg-disabled: var(--rb-color-grayscale-L300); /* #F5F5F5 */
    --rb-button-text-disabled: var(--rb-color-grayscale-base); /* #9B9B9B */
    --rb-button-border-disabled: var(--rb-color-grayscale-L300);
    
    /* DISABLED + HOVER (texto se aclara) */
    --rb-button-bg-disabled-hover: var(--rb-color-grayscale-L300); /* #F5F5F5 mantiene */
    --rb-button-text-disabled-hover: var(--rb-color-grayscale-L100); /* #B9B9B9 más claro */
    --rb-button-border-disabled-hover: var(--rb-color-grayscale-L300);
  }
}
```

### PRIMARY TEXT

```css
@layer brand-overrides {
  [data-brand='seguros-bolivar'] .rb-button--primary.rb-button--text {
    /* DISABLED (sin hover) */
    --rb-button-bg-disabled: transparent;
    --rb-button-text-disabled: var(--rb-color-grayscale-base); /* #9B9B9B */
    
    /* DISABLED + HOVER (aparece fondo gris) */
    --rb-button-bg-disabled-hover: var(--rb-color-grayscale-L300); /* #F5F5F5 aparece */
    --rb-button-text-disabled-hover: var(--rb-color-grayscale-base); /* #9B9B9B mantiene */
  }
}
```

---

## 🚀 Cómo Implementar en Tu Marca

### Paso 1: Identificar la Variante

¿Es STROKE, FILL o TEXT?

### Paso 2: Decidir el Feedback Visual

| Estrategia | Ejemplo |
|------------|---------|
| **Aparecer fondo** | `bg: transparent` → `bg: #E1E1E1` |
| **Cambiar texto** | `text: #9B9B9B` → `text: #B9B9B9` |
| **Aparecer fondo + mantener texto** | `bg: transparent`, `text: #9B9B9B` → `bg: #F5F5F5`, `text: #9B9B9B` |

### Paso 3: Aplicar en Brand Override

```css
@layer brand-overrides {
  [data-brand='tu-marca'] .rb-button--primary.rb-button--fill {
    /* Disabled */
    --rb-button-bg-disabled: var(--rb-color-grayscale-L300);
    --rb-button-text-disabled: var(--rb-color-grayscale-base);
    
    /* Disabled + Hover */
    --rb-button-bg-disabled-hover: var(--rb-color-grayscale-L300);
    --rb-button-text-disabled-hover: var(--rb-color-grayscale-L100); /* Más claro */
  }
}
```

### Paso 4: Test

```bash
pnpm build
pnpm demo
```

Abre `http://localhost:3000` y verifica el comportamiento al pasar el mouse sobre botones disabled.

---

## 🔍 Implementación en el Componente Base

### En `@layer tokens`

```css
@layer tokens {
  .rb-button {
    /* Disabled (sin hover) */
    --rb-button-bg-disabled: var(--rb-color-grayscale-L300);
    --rb-button-text-disabled: var(--rb-color-grayscale-base);
    --rb-button-border-disabled: var(--rb-color-grayscale-L300);
    
    /* Disabled + Hover (con fallback) */
    --rb-button-bg-disabled-hover: var(--rb-color-grayscale-L300);
    --rb-button-text-disabled-hover: var(--rb-color-grayscale-base);
    --rb-button-border-disabled-hover: var(--rb-color-grayscale-L300);
  }
}
```

### En `@layer base`

```css
@layer base {
  .rb-button {
    &:disabled:hover,
    &.rb-button--disabled:hover {
      /* Usa -disabled-hover con fallback a -disabled */
      background-color: var(--rb-button-bg-disabled-hover, var(--rb-button-bg-disabled)) !important;
      color: var(--rb-button-text-disabled-hover, var(--rb-button-text-disabled)) !important;
      border-color: var(--rb-button-border-disabled-hover, var(--rb-button-border-disabled)) !important;
      cursor: not-allowed;
      box-shadow: none;
      outline: none;
    }
  }
}
```

---

## 📝 Prompts para IA

### Crear Disabled + Hover para una marca

```
@CSS_OVERRIDE_BRAND.mdc Quiero configurar disabled + hover para PRIMARY FILL en [marca].
- Disabled: bg #F5F5F5, text #9B9B9B
- Disabled + Hover: bg #F5F5F5 (mantiene), text #B9B9B9 (más claro)
Match con variables de tokens.
```

### Completar todas las variantes

```
@CSS_OVERRIDE_BRAND.mdc Completa disabled + hover para PRIMARY STROKE, FILL y TEXT 
en [marca] siguiendo estos principios:
- STROKE: aparece fondo gris en hover
- FILL: texto se aclara en hover
- TEXT: aparece fondo gris en hover
Usa tokens de grayscale.
```

### Aplicar a SECONDARY, TERTIARY, ERROR

```
@CSS_OVERRIDE_BRAND.mdc Aplica el mismo patrón de disabled + hover que PRIMARY 
a SECONDARY, TERTIARY y ERROR para [marca].
```

---

## 📚 Referencias

- **CSS.mdc v3.3.0:** Regla general con template base
- **CSS_OVERRIDE_BRAND.mdc v2.1.0:** Regla específica para brand overrides
- **button.css:** Implementación de referencia (gold standard)
- **seguros-bolivar/button.css:** Ejemplo completo de brand override

---

## ✅ Checklist de Implementación

- [ ] Variables `-disabled` definidas para `bg`, `text`, `border`
- [ ] Variables `-disabled-hover` definidas cuando se quiere feedback diferente
- [ ] Usa tokens de `grayscale` (`base`, `L100`, `L200`, `L300`)
- [ ] Implementado dentro de `@layer brand-overrides`
- [ ] Testeado en navegador (hover sobre botón disabled)
- [ ] Aplicado a las 3 variantes de estilo (STROKE, FILL, TEXT)
- [ ] Documentado el feedback visual esperado

---

## 🎯 Resultado Final

✨ **Mejor UX:** Usuario recibe feedback visual al interactuar con componentes disabled  
✨ **Consistente:** Todas las marcas pueden aplicar el mismo patrón  
✨ **Flexible:** Cada marca personaliza según su guía de estilo  
✨ **Escalable:** Se aplica a todos los componentes del sistema  

---

**¿Preguntas?** Consulta `CSS.mdc` o `CSS_OVERRIDE_BRAND.mdc` para más detalles.

