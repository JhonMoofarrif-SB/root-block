# 🎨 Guía: Cómo Usar `seguros-bolivar/button.css` como Template

> **Template para crear overrides de otras marcas basado en Seguros Bolívar**

---

## 🎯 ¿Para Qué Sirve Este Archivo?

`seguros-bolivar/button.css` es un **ejemplo completo** que muestra:

1. ✅ Cómo personalizar estructura (padding, border-radius, tamaños)
2. ✅ Cómo usar tokens de color de tu marca
3. ✅ Cómo override estados específicos (focus, disabled-hover)
4. ✅ Qué necesitas cambiar y qué NO

---

## 📋 Paso a Paso: Crear Override para Tu Marca

### **1. Copiar el Template**

```bash
cd packages/brand-overrides/src/
cp -r seguros-bolivar/ TU-MARCA/
cd TU-MARCA/
```

### **2. Editar `button.css`**

Abre `button.css` y reemplaza:

```css
/* ANTES (Seguros Bolívar) */
[data-brand='seguros-bolivar'] .rb-button {
  --rb-button-border-radius: 50px;
}

/* DESPUÉS (Tu Marca) */
[data-brand='tu-marca'] .rb-button {
  --rb-button-border-radius: 20px; /* 👈 Ajusta según diseño */
}
```

### **3. Crear Tokens de Color**

En `packages/tokens/src/primitives/brands/`, crea `tu-marca.json`:

```json
{
  "color": {
    "primary": {
      "base": { "value": "#FF5733" },
      "D100": { "value": "#CC4529" },
      "D200": { "value": "#99341F" }
    },
    "secondary": {
      "base": { "value": "#33C4FF" },
      "D100": { "value": "#29A3D9" },
      "L100": { "value": "#66D4FF" },
      "L300": { "value": "#CCF2FF" },
      "L400": { "value": "#E5F9FF" }
    },
    "grayscale": {
      "white": { "value": "#FFFFFF" },
      "L300": { "value": "#F5F5F5" },
      "L200": { "value": "#E1E1E1" },
      "L100": { "value": "#B9B9B9" },
      "base": { "value": "#9B9B9B" }
    }
  }
}
```

### **4. Crear `index.css`**

```css
/* packages/brand-overrides/src/tu-marca/index.css */
@import './button.css';
/* Aquí puedes agregar más componentes */
```

### **5. Build y Test**

```bash
# Desde la raíz del proyecto
pnpm build
pnpm demo
```

Abre `http://localhost:3000/button.html` y verifica con:

```html
<button class="rb-button rb-button--primary" data-brand="tu-marca">
  Tu Marca
</button>
```

---

## 📚 Secciones del Template Explicadas

### **SECCIÓN 1: Estructura Global** ⚙️

**Cuándo usarla:**
- Si necesitas tamaños fijos (no responsive)
- Si tu marca tiene border-radius específico
- Si quieres padding/gap diferentes del base

**Ejemplo:**
```css
[data-brand='jelpit'] .rb-button {
  --rb-button-border-radius: 8px;      /* Menos redondeado */
  --rb-button-padding-inline: 20px;    /* Más padding */
  --rb-button-min-block-size: 44px;    /* Más alto */
}
```

---

### **SECCIÓN 2: Focus Outline** 🎯

**Cuándo usarla:**
- Si tu marca usa un color específico para accesibilidad
- Si necesitas grosor diferente (2px vs 3px)

**Ejemplo:**
```css
/* Jelpit: outline naranja */
[data-brand='jelpit'] .rb-button--primary:focus-visible {
  outline: 3px solid var(--rb-color-primary-L100);
  outline-offset: 2px;
}
```

---

### **SECCIÓN 3: Text Decoration** 📝

**Cuándo usarla:**
- Siempre que uses botones TEXT (`.rb-button--text`)
- Para que el underline use tu color de marca

**Ejemplo:**
```css
[data-brand='davivienda'] .rb-button--primary.rb-button--text {
  text-decoration-color: var(--rb-color-primary-base) !important;
}
```

---

### **SECCIÓN 4: Disabled Hover** 🚫

**Cuándo usarla:**
- Si quieres feedback visual cuando se hace hover en disabled
- Si necesitas valores diferentes del base

**Valores comunes:**
```css
/* Opción 1: Aparece fondo gris claro */
--rb-button-bg-disabled-hover: var(--rb-color-grayscale-L300); /* #F5F5F5 */

/* Opción 2: Aparece fondo gris medio */
--rb-button-bg-disabled-hover: var(--rb-color-grayscale-L200); /* #E1E1E1 */

/* Opción 3: Sin cambio */
--rb-button-bg-disabled-hover: transparent;
```

---

### **SECCIÓN 5: Overrides Avanzados** 🔥

**Cuándo usarla:**
- SOLO si necesitas cambios muy específicos por variante (STROKE, FILL, TEXT)
- SOLO si el base no te funciona

**Ejemplo:**
```css
@layer brand-overrides {
  /* Cambiar hover de PRIMARY STROKE */
  [data-brand='tu-marca'] .rb-button--primary.rb-button--stroke {
    --rb-button-bg-hover: var(--rb-color-primary-L400);
  }
  
  /* Cambiar disabled-hover de PRIMARY FILL */
  [data-brand='tu-marca'] .rb-button--primary.rb-button--fill {
    --rb-button-text-disabled-hover: var(--rb-color-grayscale-L100);
  }
}
```

⚠️ **Seguros Bolívar NO usa SECCIÓN 5** porque el base ya tiene toda su lógica.

---

## ❌ Qué NO Necesitas Copiar

### **NO copies esto:**

```css
/* ❌ Lógica de hover/active (ya está en base) */
&:hover {
  background-color: var(--rb-button-bg-hover);
}

/* ❌ Variables de color (vienen de tokens) */
--rb-color-primary-D100: #038450;

/* ❌ Estados disabled genéricos (ya están en base) */
&:disabled {
  cursor: not-allowed;
}
```

### **SÍ copia esto:**

```css
/* ✅ Estructura específica */
--rb-button-border-radius: 20px;

/* ✅ Colores de tokens */
text-decoration-color: var(--rb-color-primary-D100);

/* ✅ Overrides específicos */
--rb-button-bg-disabled-hover: var(--rb-color-grayscale-L200);
```

---

## 🎨 Tokens de Seguros Bolívar (Referencia)

```css
/* ESTRUCTURA (override fijos) */
--rb-button-border-radius: 50px;
--rb-button-padding-inline: 16px;
--rb-button-padding-block: 8px;
--rb-button-gap: 8px;
--rb-button-min-block-size: 40px;

/* COLORES (vienen de tokens) */
--rb-color-primary-D100:    #038450  /* Verde oscuro */
--rb-color-secondary-L100:  #FFEA9A  /* Amarillo claro */
--rb-color-grayscale-L300:  #F5F5F5  /* Gris muy claro */
--rb-color-grayscale-base:  #9B9B9B  /* Gris medio */
```

---

## 🚀 Testing y Debug

### **1. Verificar que el override se aplica:**

```bash
# Ver el bundle compilado
cat packages/bundle/dist/rb-tu-marca-light.css | grep "data-brand"
```

### **2. Inspeccionar en DevTools:**

```html
<button 
  class="rb-button rb-button--primary" 
  data-brand="tu-marca"
  style="/* Inspecciona las CSS variables aquí */"
>
  Test
</button>
```

### **3. Verificar tokens:**

```bash
# Ver tokens de tu marca
cat packages/tokens/src/primitives/brands/tu-marca.json
```

---

## 📖 Referencias

- **CSS Standards:** `.cursor/rules/CSS.mdc` (v3.3.0)
- **Brand Override Guide:** `.cursor/rules/CSS_OVERRIDE_BRAND.mdc` (v2.1.0)
- **Disabled Hover Guide:** `DISABLED_HOVER_GUIDE.md`
- **Migration Guide:** `MIGRATION_BASE_TO_SEGUROS_BOLIVAR.md`
- **Base Button:** `packages/atoms/src/button.css`

---

## ✅ Checklist Final

- [ ] Copié el template a `packages/brand-overrides/src/TU-MARCA/`
- [ ] Reemplacé 'seguros-bolivar' por 'tu-marca'
- [ ] Creé tokens en `packages/tokens/src/primitives/brands/tu-marca.json`
- [ ] Ajusté SECCIÓN 1: Estructura (si necesito)
- [ ] Ajusté SECCIÓN 2: Focus outline (si necesito)
- [ ] Ajusté SECCIÓN 3: Text decoration (si uso TEXT buttons)
- [ ] Ajusté SECCIÓN 4: Disabled hover (si necesito feedback específico)
- [ ] Creé `index.css` que importa `button.css`
- [ ] Ejecuté `pnpm build`
- [ ] Probé en navegador con `data-brand='tu-marca'`
- [ ] Verifiqué colores en DevTools
- [ ] Documenté mis cambios

---

## 💡 Tips Finales

1. **Empieza simple:** Solo override lo que realmente necesites
2. **Usa tokens:** Todos los colores vienen de tu archivo de tokens
3. **Hereda del base:** El base tiene toda la lógica UX, tú solo ajustas
4. **Documenta:** Mantén comentarios claros para otros devs
5. **Testea bien:** Verifica todos los estados (hover, active, focus, disabled)

---

**¿Necesitas ayuda?** Consulta los archivos de referencia o abre un issue 🚀

