# Seguros Bolívar - Brand Overrides

## 📋 Resumen

Este directorio contiene los **overrides específicos** de la marca **Seguros Bolívar** para el Design System Seguros Bolivar UI. Los overrides permiten personalizar componentes sin modificar el código base, manteniendo la compatibilidad con otras marcas.

---

## 🎨 Componentes Personalizados

### 1. Button Component (`button.css`)

Archivo completo de personalización de botones con documentación detallada para servir como **template** para otras marcas.

#### 📊 Estructura General

**Todas las marcas tienen 4 tipos de botón:**

- **Primary** (principal)
- **Secondary** (secundario)
- **Tertiary** (terciario)
- **Error** (error/destructivo)

**Cada tipo tiene 3 variantes de estilo:**

- **STROKE** (default): Borde con fondo transparente/blanco
- **FILL**: Fondo sólido de color
- **TEXT**: Sin borde ni fondo, solo texto (con underline)

**Cada botón tiene 7 estados:**

- Default (normal)
- Hover (mouse encima)
- Pressed/Active (click)
- Focus (tabulación/accesibilidad)
- Loading (cargando)
- Disabled (deshabilitado)
- Disabled + Hover (feedback en disabled)

---

## 🟢🟡 Patrón de Colores Seguros Bolívar

### Paleta Principal

```css
/* PRIMARY (Verde) */
--sb-ui-color-primary-D300: #086d44 /* Muy oscuro */ --sb-ui-color-primary-D200: #05794a /* Oscuro */
  --sb-ui-color-primary-D100: #038450 /* Medio oscuro */ --sb-ui-color-primary-base: #009056 /* Base */
  --sb-ui-color-primary-L100: #66bc9a /* Claro medio */ --sb-ui-color-primary-L200: #cce9dd /* Claro */
  --sb-ui-color-primary-L300: #e5f4ee /* Muy claro */ --sb-ui-color-primary-L400: #f2f9f6
  /* Casi blanco */ /* SECONDARY (Amarillo) */ --sb-ui-color-secondary-D400: #ffc918 /* Muy oscuro */
  --sb-ui-color-secondary-D200: #ffd543 /* Oscuro */ --sb-ui-color-secondary-D100: #ffda55
  /* Medio oscuro */ --sb-ui-color-secondary-base: #ffe16f /* Base */
  --sb-ui-color-secondary-L100: #ffea9a /* Claro */ --sb-ui-color-secondary-L200: #fff0b7
  /* Claro medio */ --sb-ui-color-secondary-L300: #fff6d4 /* Muy claro */
  --sb-ui-color-secondary-L400: #fffcf0 /* Casi blanco */ /* GRAYSCALE (Grises para disabled) */
  --sb-ui-color-grayscale-L300: #f5f5f5 /* Muy claro */ --sb-ui-color-grayscale-L200: #e1e1e1 /* Claro */
  --sb-ui-color-grayscale-L100: #b9b9b9 /* Claro medio */ --sb-ui-color-grayscale-base: #9b9b9b
  /* Medio */;
```

---

## 🔧 Overrides Implementados

### SECCIÓN 1: Estructura Global

**Aplica a:** Todos los botones

```css
[data-brand='seguros-bolivar'] .sb-ui-button {
  --sb-ui-button-border-radius: 50px; /* Muy redondeado */
  --sb-ui-button-padding-inline: 16px; /* Fijo (no responsive) */
  --sb-ui-button-padding-block: 8px;
  --sb-ui-button-gap: 8px;
  --sb-ui-button-min-block-size: 40px;
}
```

**Personaliza:** Tamaños fijos en lugar de `clamp()` fluido del base.

---

### SECCIÓN 2: Focus Outline

**Aplica a:** Primary TEXT button

```css
[data-brand='seguros-bolivar'] .sb-ui-button--primary.sb-ui-button--text:focus-visible {
  outline: 2px solid var(--sb-ui-color-secondary-L100); /* #FFEA9A amarillo claro */
  outline-offset: 2px;
}
```

**Personaliza:** Color del outline en focus para accesibilidad.

---

### SECCIÓN 3: Text Decoration Color

**Aplica a:** Primary TEXT button

```css
[data-brand='seguros-bolivar'] .sb-ui-button--primary.sb-ui-button--text:not(:disabled) {
  text-decoration-color: var(--sb-ui-color-primary-D100) !important; /* #038450 verde */
}
```

**Personaliza:** Color del underline en botones TEXT.

---

### SECCIÓN 4: Disabled + Hover

**Aplica a:** Primary TEXT button

```css
/* Disabled (sin hover) */
[data-brand='seguros-bolivar'] .sb-ui-button--primary.sb-ui-button--text:disabled {
  color: var(--sb-ui-color-grayscale-base) !important; /* #9B9B9B gris */
  text-decoration-color: var(--sb-ui-color-grayscale-base) !important;
}

/* Disabled + Hover (aparece fondo gris) */
[data-brand='seguros-bolivar'] .sb-ui-button--primary.sb-ui-button--text:disabled:hover {
  background-color: var(--sb-ui-color-grayscale-L300) !important; /* #F5F5F5 gris claro */
  color: var(--sb-ui-color-grayscale-base) !important; /* #9B9B9B mantiene */
  text-decoration-color: var(--sb-ui-color-grayscale-base) !important;
}
```

**Personaliza:** Comportamiento específico cuando se hace hover sobre un botón deshabilitado.

---

### SECCIÓN 5: Secondary Button - Documentación

**Aplica a:** Secondary STROKE, FILL, TEXT

Esta sección es **puramente documental** y describe cómo funcionan las 3 variantes del secondary button. El base ya tiene toda la lógica correcta implementada.

#### Secondary STROKE (default)

```
DEFAULT:   bg=white, border=secondary-base (#FFE16F), text=primary-D100 (#038450)
HOVER:     bg=secondary-L400 (#FFFCF0), border=secondary-D100 (#FFDA55), text=primary-D100
PRESSED:   bg=secondary-L300 (#FFF6D4), border=secondary-D200 (#FFD543), text=primary-D100
FOCUS:     outline=secondary-L100 (#FFEA9A)
DISABLED:  bg=white, border=grayscale-base (#9B9B9B), text=grayscale-base
DISABLED+HOVER: bg=grayscale-L200 (#E1E1E1), border/text=grayscale-base
```

#### Secondary FILL (Base - Otras marcas)

```
DEFAULT:   bg=secondary-base (#FFE16F), text=primary-base (#009056)
HOVER:     bg=secondary-D100 (#FFDA55), text=primary-D100 (#038450)
PRESSED:   bg=secondary-D200 (#FFD543), text=primary-D200 (#05794A)
FOCUS:     outline=secondary-L100 (#FFEA9A)
DISABLED:  bg=grayscale-L300 (#F5F5F5), text=grayscale-L100 (#B9B9B9)
DISABLED+HOVER: bg=grayscale-L300, text=grayscale-base (#9B9B9B)
```

#### Secondary TEXT

```
DEFAULT:   bg=transparent, text=secondary-base (#FFE16F), underline=secondary-base
HOVER:     bg=transparent, text=secondary-D100 (#FFDA55), underline=secondary-D100
PRESSED:   bg=transparent, text=secondary-D200 (#FFD543), underline=secondary-D200
FOCUS:     outline=secondary-L100 (#FFEA9A)
DISABLED:  bg=grayscale-L300 (#F5F5F5), text=grayscale-base (#9B9B9B), underline=grayscale-base
DISABLED+HOVER: bg=grayscale-L300, text=grayscale-base, underline=grayscale-base
```

---

### SECCIÓN 6: Secondary FILL - Override Específico Seguros Bolívar ⚠️

**⚠️ IMPORTANTE:** Este es un **diseño específico de Seguros Bolívar** que difiere del base. El secondary FILL usa colores **PRIMARY (verde)** en lugar de SECONDARY (amarillo).

```css
@layer brand-overrides {
  [data-brand='seguros-bolivar'] .sb-ui-button--secondary.sb-ui-button--fill {
    /* DEFAULT STATE - Verde muy claro */
    --sb-ui-button-bg-color: var(--sb-ui-color-primary-L300); /* #E5F4EE */
    --sb-ui-button-text-color: var(--sb-ui-color-primary-D200); /* #05794A */
    --sb-ui-button-border-color: var(--sb-ui-color-primary-L300); /* #E5F4EE */

    /* HOVER STATE - Verde claro + texto muy oscuro */
    --sb-ui-button-bg-hover: var(--sb-ui-color-primary-L200); /* #CCE9DD */
    --sb-ui-button-text-hover: var(--sb-ui-color-primary-D300); /* #086D44 */
    --sb-ui-button-border-hover: var(--sb-ui-color-primary-L200); /* #CCE9DD */

    /* PRESSED/ACTIVE STATE - Mantiene hover + shadow inset */
    --sb-ui-button-bg-active: var(--sb-ui-color-primary-L200); /* #CCE9DD */
    --sb-ui-button-text-active: var(--sb-ui-color-primary-D300); /* #086D44 */
    --sb-ui-button-border-active: var(--sb-ui-color-primary-L200); /* #CCE9DD */
    --sb-ui-button-shadow-pressed: inset 2px 2px 3px 0px rgba(27, 27, 27, 0.16);

    /* DISABLED STATE - Gris */
    --sb-ui-button-bg-disabled: var(--sb-ui-color-grayscale-L300); /* #F5F5F5 */
    --sb-ui-button-text-disabled: var(--sb-ui-color-grayscale-L100); /* #B9B9B9 */
    --sb-ui-button-border-disabled: var(--sb-ui-color-grayscale-L300);

    /* DISABLED + HOVER STATE - Texto se oscurece */
    --sb-ui-button-bg-disabled-hover: var(--sb-ui-color-grayscale-L300); /* #F5F5F5 mantiene */
    --sb-ui-button-text-disabled-hover: var(--sb-ui-color-grayscale-base); /* #9B9B9B más oscuro */
    --sb-ui-button-border-disabled-hover: var(--sb-ui-color-grayscale-L300);

    /* SHADOW - Solo en hover, no en active (ya tiene inset) */
    --sb-ui-button-shadow-hover: var(--sb-ui-shadow-s, 0 2px 4px rgb(0 0 0 / 10%));
    --sb-ui-button-shadow-active: none;
  }

  /* FOCUS OUTLINE - Outline verde claro */
  [data-brand='seguros-bolivar'] .sb-ui-button--secondary.sb-ui-button--fill:focus-visible {
    outline: 2px solid var(--sb-ui-color-primary-L100); /* #66BC9A */
    outline-offset: 2px;
  }
}
```

#### Matriz Completa Secondary FILL (Seguros Bolívar):

```
DEFAULT:   bg=#E5F4EE (verde muy claro), text=#05794A (verde oscuro)
HOVER:     bg=#CCE9DD (verde claro), text=#086D44 (verde muy oscuro)
PRESSED:   bg=#CCE9DD (mantiene), text=#086D44 (mantiene), shadow inset
FOCUS:     bg=#E5F4EE (mantiene), text=#05794A (mantiene), outline=#66BC9A
DISABLED:  bg=#F5F5F5 (gris), text=#B9B9B9 (gris claro)
DISABLED+HOVER: bg=#F5F5F5 (mantiene), text=#9B9B9B (se oscurece)
```

---

## 📁 Estructura de Archivos

```
seguros-bolivar/
├── button.css           # Overrides de botones (COMPLETO)
├── index.css           # Import de todos los overrides
└── README.md           # Esta documentación
```

---

## 🚀 Uso

### HTML - Secondary Button (Todas las variantes)

```html
<!DOCTYPE html>
<html lang="es" data-brand="seguros-bolivar" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Secondary Button - Seguros Bolívar</title>

    <!-- Incluir bundle completo (tokens + atoms + overrides) -->
    <link rel="stylesheet" href="rb-seguros-bolivar-light.min.css" />

    <!-- Font Awesome para iconos (opcional) -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
  </head>
  <body>
    <h1>Secondary Button - Seguros Bolívar</h1>

    <!-- ================================ -->
    <!-- VARIANTE FILL (Verde - Override específico) -->
    <!-- ================================ -->
    <section>
      <h2>FILL - Fondo verde claro (#E5F4EE)</h2>

      <!-- Sin icono -->
      <button class="rb-button rb-button--secondary rb-button--fill">Secondary Fill</button>

      <!-- Con icono izquierda -->
      <button class="rb-button rb-button--secondary rb-button--fill rb-button--icon-left">
        <i class="fa-solid fa-star"></i>
        Con icono
      </button>

      <!-- Con icono derecha -->
      <button class="rb-button rb-button--secondary rb-button--fill rb-button--icon-right">
        Con icono
        <i class="fa-solid fa-star"></i>
      </button>

      <!-- Solo icono -->
      <button class="rb-button rb-button--secondary rb-button--fill rb-button--icon-only">
        <i class="fa-solid fa-star"></i>
      </button>

      <!-- Loading -->
      <button class="rb-button rb-button--secondary rb-button--fill rb-button--loading">
        Cargando...
      </button>

      <!-- Disabled -->
      <button class="rb-button rb-button--secondary rb-button--fill rb-button--disabled">
        Deshabilitado
      </button>
    </section>

    <!-- ================================ -->
    <!-- VARIANTE STROKE (Amarillo - Default) -->
    <!-- ================================ -->
    <section>
      <h2>STROKE - Borde amarillo, fondo blanco</h2>

      <!-- Sin icono -->
      <button class="rb-button rb-button--secondary rb-button--stroke">Secondary Stroke</button>

      <!-- Equivalente sin clase explícita (STROKE es default) -->
      <button class="rb-button rb-button--secondary">Secondary (default STROKE)</button>

      <!-- Con icono izquierda -->
      <button class="rb-button rb-button--secondary rb-button--stroke rb-button--icon-left">
        <i class="fa-solid fa-star"></i>
        Con icono
      </button>

      <!-- Con icono derecha -->
      <button class="rb-button rb-button--secondary rb-button--stroke rb-button--icon-right">
        Con icono
        <i class="fa-solid fa-star"></i>
      </button>

      <!-- Solo icono -->
      <button class="rb-button rb-button--secondary rb-button--stroke rb-button--icon-only">
        <i class="fa-solid fa-star"></i>
      </button>

      <!-- Loading -->
      <button class="rb-button rb-button--secondary rb-button--stroke rb-button--loading">
        Cargando...
      </button>

      <!-- Disabled -->
      <button class="rb-button rb-button--secondary rb-button--stroke rb-button--disabled">
        Deshabilitado
      </button>
    </section>

    <!-- ================================ -->
    <!-- VARIANTE TEXT (Amarillo con underline) -->
    <!-- ================================ -->
    <section>
      <h2>TEXT - Texto amarillo con underline</h2>

      <!-- Sin icono -->
      <button class="rb-button rb-button--secondary rb-button--text">Secondary Text</button>

      <!-- Con icono izquierda -->
      <button class="rb-button rb-button--secondary rb-button--text rb-button--icon-left">
        <i class="fa-solid fa-star"></i>
        Con icono
      </button>

      <!-- Con icono derecha -->
      <button class="rb-button rb-button--secondary rb-button--text rb-button--icon-right">
        Con icono
        <i class="fa-solid fa-star"></i>
      </button>

      <!-- Solo icono -->
      <button class="rb-button rb-button--secondary rb-button--text rb-button--icon-only">
        <i class="fa-solid fa-star"></i>
      </button>

      <!-- Loading -->
      <button class="rb-button rb-button--secondary rb-button--text rb-button--loading">
        Cargando...
      </button>

      <!-- Disabled -->
      <button class="rb-button rb-button--secondary rb-button--text rb-button--disabled">
        Deshabilitado
      </button>
    </section>

    <style>
      body {
        font-family: 'Roboto', sans-serif;
        padding: 2rem;
        background: #fafafa;
      }
      section {
        margin-block-end: 3rem;
        padding: 2rem;
        background: white;
        border-radius: 12px;
      }
      h1 {
        color: var(--sb-ui-color-secondary-base);
        margin-block-end: 2rem;
      }
      h2 {
        color: var(--sb-ui-color-primary-base);
        margin-block-end: 1.5rem;
        font-size: 1.25rem;
      }
      button {
        margin-inline-end: 1rem;
        margin-block-end: 1rem;
      }
    </style>
  </body>
</html>
```

### Clases Disponibles

#### Estructura Base (Requerido)

```css
.sb-ui-button                    /* Clase base (siempre requerida) */
.sb-ui-button--secondary         /* Tipo: secondary button */
```

#### Variantes de Estilo (Una de estas, STROKE es default)

```css
.sb-ui-button--stroke           /* Borde con fondo blanco (default, opcional) */
.sb-ui-button--fill             /* Fondo sólido verde claro (Seguros Bolívar) */
.sb-ui-button--text             /* Sin borde ni fondo, solo texto + underline */
```

#### Posición de Iconos (Opcional)

```css
.sb-ui-button--icon-left        /* Icono a la izquierda del texto */
.sb-ui-button--icon-right       /* Icono a la derecha del texto */
.sb-ui-button--icon-only        /* Solo icono, sin texto (botón circular) */
```

#### Estados (Opcional)

```css
.sb-ui-button--loading          /* Estado de carga (con spinner) */
.sb-ui-button--disabled         /* Estado deshabilitado (alternativa a :disabled) */
```

#### Tamaños (Opcional)

```css
.sb-ui-button--small            /* Botón pequeño */
.sb-ui-button--medium           /* Botón mediano (default) */
.sb-ui-button--large            /* Botón grande */
```

#### Modificadores (Opcional)

```css
.sb-ui-button--square           /* Esquinas menos redondeadas */
.sb-ui-button--block            /* Ancho completo (100%) */
```

---

## 🔍 Testing

### Ver ejemplos en el navegador:

```bash
# Desde la raíz del proyecto
npm run build
cd examples
open button-secondary.html
```

### Inspeccionar bundle compilado:

```bash
cat packages/bundle/dist/rb-seguros-bolivar-light.min.css | grep "secondary"
```

---

## 📚 Referencias

- **Base Button:** `packages/atoms/src/button.css`
- **Tokens:** `packages/tokens/src/primitives/brands/seguros-bolivar.json`
- **Bundle:** `packages/bundle/dist/rb-seguros-bolivar-light.css`
- **Ejemplos:** `examples/button-secondary.html`
- **Documentación:**
  - `CSS_STANDARDS.md` - Reglas CSS generales
  - `BRAND-OVERRIDE-SYSTEM.md` - Sistema de overrides
  - `DISABLED_HOVER_GUIDE.md` - Guía de disabled-hover

---

## 💡 Tips para Crear Overrides de Otras Marcas

1. **Copiar este archivo** como template:

   ```bash
   cp seguros-bolivar/button.css tu-marca/button.css
   ```

2. **Reemplazar** `seguros-bolivar` por `tu-marca` en todos los selectores

3. **Ajustar valores** según necesites:
   - SECCIÓN 1: Estructura (si necesitas tamaños fijos)
   - SECCIÓN 2: Focus outline (si necesitas color específico)
   - SECCIÓN 3: Text decoration (si usas botones TEXT)
   - SECCIÓN 4: Disabled hover (si necesitas feedback específico)
   - SECCIÓN 6: Solo si necesitas overrides MUY específicos como el secondary FILL

4. **Borrar secciones** que NO necesites personalizar (el base se encarga)

5. **Crear tokens** en: `packages/tokens/src/primitives/brands/tu-marca.json`

6. **Build y test:**
   ```bash
   npm run build
   # Verificar en navegador con data-brand='tu-marca'
   ```

---

## ✅ Checklist para Nuevas Marcas

- [ ] Copiar `button.css` a tu marca
- [ ] Crear tokens en `tu-marca.json`
- [ ] Reemplazar `seguros-bolivar` por `tu-marca`
- [ ] Ajustar SECCIÓN 1 (estructura) si necesario
- [ ] Ajustar SECCIÓN 2 (focus) si necesario
- [ ] Ajustar SECCIÓN 3 (text decoration) si necesario
- [ ] Ajustar SECCIÓN 4 (disabled hover) si necesario
- [ ] Agregar SECCIÓN 6 SOLO si necesitas overrides avanzados
- [ ] Crear `index.css` que importe `button.css`
- [ ] Build: `npm run build`
- [ ] Test en navegador con `data-brand='tu-marca'`
- [ ] Documentar cambios en comentarios

---

## 🎨 Filosofía de Overrides

### ✅ DO (Hacer):

- Solo override lo que REALMENTE difiere del base
- Documentar por qué existe cada override
- Usar tokens (CSS variables) en lugar de valores hardcodeados
- Mantener comentarios claros para futuros desarrolladores
- Usar `@layer brand-overrides` para máxima prioridad

### ❌ DON'T (No hacer):

- No duplicar lógica que ya existe en el base
- No hardcodear colores directamente (#FFEA9A)
- No override por override (solo lo necesario)
- No olvidar documentar cambios específicos de marca

---

## 📞 Soporte

Para preguntas o problemas:

1. Revisar documentación en `CSS_STANDARDS.md`
2. Verificar que el bundle se compiló: `npm run build`
3. Inspeccionar con DevTools las variables CSS aplicadas
4. Verificar que `data-brand='seguros-bolivar'` esté en el HTML

---

**Última actualización:** Enero 2025  
**Versión:** 1.0.0  
**Autor:** Seguros Bolivar UI Design System Team
