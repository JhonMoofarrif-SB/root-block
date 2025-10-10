# 🎯 Opción 2: Brand Overrides con Data Attributes

Approach simple, flexible y escalable para personalización por marca.

---

## 💡 **CONCEPTO**

En lugar de JSON + Builder complejo, usamos **data attributes + CSS variables**.

```html
<body data-brand="seguros-bolivar">
  <button class="rb-button rb-button--primary">Click</button>
</body>
```

---

## 🏗️ **ARQUITECTURA**

### **1. Button.css Base** (Define estructura)

```css
@layer tokens {
  .rb-button {
    /* Defaults globales */
    --rb-button-primary-bg: var(--rb-color-primary-base);
    --rb-button-primary-text: var(--rb-color-grayscale-white);
    --rb-button-secondary-bg: var(--rb-color-secondary-base);
    /* ... */
  }
}

@layer base {
  .rb-button--primary {
    background: var(--rb-button-primary-bg);
    color: var(--rb-button-primary-text);
    
    &:hover {
      background: var(--rb-button-primary-bg-hover, var(--rb-button-primary-bg));
    }
  }
}
```

### **2. Brand Overrides** (Personaliza por marca)

```css
[data-brand="seguros-bolivar"] {
  --rb-button-primary-bg: var(--rb-color-secondary-base); /* Amarillo */
  --rb-button-primary-text: var(--rb-color-primary-D100); /* Verde */
}

[data-brand="davivienda"] {
  --rb-button-primary-bg: var(--rb-color-primary-base); /* Rojo */
  --rb-button-primary-text: white;
}
```

---

## ✅ **VENTAJAS**

### **1. Simplicidad**
- ❌ No JSON
- ❌ No Builder
- ❌ No Schema
- ✅ Solo CSS puro

### **2. Flexibilidad Total**
```css
/* Cada marca puede override SOLO lo que necesita */
[data-brand="jelpit"] {
  --rb-button-text-bg-hover: #f2fdf1; /* Solo esto */
}

[data-brand="seguros-bolivar"] {
  /* Todo el button */
  --rb-button-primary-bg: ...;
  --rb-button-primary-text: ...;
  --rb-button-primary-bg-hover: ...;
}
```

### **3. Facilidad de Mantenimiento**
```css
/* Agregar nueva marca: 5 minutos */
[data-brand="nueva-marca"] {
  --rb-button-primary-bg: #FF5733;
}
```

### **4. Performance**
- ✅ CSS nativo (más rápido que JS)
- ✅ Sin build step adicional
- ✅ CSS-in-CSS (no CSS-in-JS)

### **5. Escalabilidad**
```css
/* Agregar variante custom por marca */
[data-brand="seguros-bolivar"] {
  --rb-button-accent-bg: #FF5733;
  --rb-button-accent-text: white;
}

.rb-button--accent {
  background: var(--rb-button-accent-bg, var(--rb-button-primary-bg));
  color: var(--rb-button-accent-text, var(--rb-button-primary-text));
}
```

---

## 📋 **ESTRUCTURA DE ARCHIVOS**

```
packages/
├── atoms/src/
│   └── button.css                  ← Base con variables
├── brand-overrides/src/
│   ├── seguros-bolivar.css         ← Override específico
│   ├── davivienda.css
│   ├── jelpit.css
│   └── index.css                   ← Import all
└── bundle/
    └── builder.ts                  ← Concatena: tokens + atoms + overrides
```

---

## 🎨 **CASOS DE USO**

### **Caso 1: Cambiar colores PRIMARY**

```css
[data-brand="mi-marca"] {
  --rb-button-primary-bg: #0066CC;
  --rb-button-primary-text: white;
}
```

**Resultado:**
```html
<body data-brand="mi-marca">
  <button class="rb-button rb-button--primary">
    <!-- Fondo #0066CC, texto white -->
  </button>
</body>
```

---

### **Caso 2: Solo cambiar hover**

```css
[data-brand="mi-marca"] {
  --rb-button-primary-bg-hover: #0055AA;
}
```

**Resultado:** Default usa base, solo hover cambia.

---

### **Caso 3: Swap de colores (Seguros Bolívar)**

```css
[data-brand="seguros-bolivar"] {
  /* Primary usa secondary colors */
  --rb-button-primary-bg: var(--rb-color-secondary-base);
  --rb-button-primary-text: var(--rb-color-primary-D100);
  
  /* Secondary usa primary colors */
  --rb-button-secondary-bg: var(--rb-color-primary-base);
  --rb-button-secondary-text: var(--rb-color-secondary-base);
}
```

---

### **Caso 4: Variante custom por marca**

```css
[data-brand="seguros-bolivar"] {
  /* Nueva variante "accent" solo para esta marca */
  --rb-button-accent-bg: linear-gradient(90deg, #FFE16F, #009056);
  --rb-button-accent-text: #038450;
  --rb-button-accent-border: transparent;
}
```

```html
<body data-brand="seguros-bolivar">
  <button class="rb-button rb-button--accent">
    <!-- Solo funciona en Seguros Bolívar -->
  </button>
</body>
```

---

## 🔧 **IMPLEMENTACIÓN**

### **Paso 1: Button.css Base**

```css
@layer tokens {
  .rb-button {
    /* Todas las variables que brands pueden override */
    --rb-button-primary-bg: var(--rb-color-primary-base);
    --rb-button-primary-bg-hover: var(--rb-color-primary-D100);
    --rb-button-primary-bg-active: var(--rb-color-primary-D200);
    --rb-button-primary-text: var(--rb-color-grayscale-white);
    --rb-button-primary-border: var(--rb-color-primary-base);
    
    --rb-button-secondary-bg: var(--rb-color-secondary-base);
    /* ... más variables */
  }
}

@layer base {
  .rb-button--primary {
    background: var(--rb-button-primary-bg);
    color: var(--rb-button-primary-text);
    border: 1px solid var(--rb-button-primary-border);
    
    &:hover:not(:disabled) {
      background: var(--rb-button-primary-bg-hover);
    }
    
    &:active {
      background: var(--rb-button-primary-bg-active);
    }
  }
}
```

### **Paso 2: Brand Override**

```css
/* packages/brand-overrides/src/seguros-bolivar.css */
[data-brand="seguros-bolivar"] {
  --rb-button-primary-bg: var(--rb-color-secondary-base);
  --rb-button-primary-bg-hover: var(--rb-color-secondary-D100);
  --rb-button-primary-text: var(--rb-color-primary-D100);
}
```

### **Paso 3: Bundle**

```typescript
// packages/bundle/src/builder.ts
const css = `
  ${tokensCSS}
  ${buttonCSS}
  ${segurrosBolivarOverrides}
`;
```

---

## 📊 **COMPARACIÓN: JSON vs Data Attributes**

| Aspecto | JSON Tokens | Data Attributes |
|---------|-------------|-----------------|
| **Complejidad** | Alta | Baja |
| **Build step** | Necesario | Opcional |
| **Facilidad** | Media | Alta |
| **Flexibilidad** | Alta | Alta |
| **Performance** | Buena | Excelente |
| **Type safety** | Con Schema | No |
| **Autocomplete** | Con Schema | CSS nativo |
| **Curva aprendizaje** | Media | Baja |
| **Tiempo agregar marca** | 15-20 min | 5 min |
| **Líneas código/marca** | JSON + Schema | Solo CSS |

---

## 💪 **VENTAJAS CLAVE**

### **1. Developer Experience**
```css
/* Antes (JSON) */
{
  "jelpit": {
    "components": {
      "button": {
        "primary": {
          "text": {
            "default": {
              "bg": { "$value": "#f2fdf1" }
            }
          }
        }
      }
    }
  }
}

/* Ahora (CSS) */
[data-brand="jelpit"] {
  --rb-button-text-bg-hover: #f2fdf1;
}
```

### **2. Sin Build Complexity**
```bash
# Antes
pnpm run build:tokens  # Genera CSS desde JSON
pnpm run build:bundle  # Compila todo

# Ahora
# CSS ya está listo, solo bundle concatena
```

### **3. Hot Reload**
```css
/* Cambias variable → refresh → ves cambio inmediato */
[data-brand="seguros-bolivar"] {
  --rb-button-primary-bg: #FF0000; /* Prueba rápida */
}
```

---

## 🚀 **WORKFLOW**

### **Agregar Nueva Marca: 3 Pasos**

```bash
# 1. Crear archivo (2 min)
touch packages/brand-overrides/src/mi-marca.css

# 2. Escribir overrides (3 min)
echo '[data-brand="mi-marca"] {
  --rb-button-primary-bg: #0066CC;
}' > packages/brand-overrides/src/mi-marca.css

# 3. Importar (30 seg)
# Agregar a index.css: @import './mi-marca.css';

# ✅ Listo en 5 minutos
```

---

## 🎯 **RECOMENDACIÓN**

**Usar Data Attributes cuando:**
- ✅ Quieres simplicidad
- ✅ CSS es suficiente
- ✅ Build process simple
- ✅ Prototipado rápido
- ✅ Pocas marcas (<10)

**Usar JSON Tokens cuando:**
- ⚠️ Necesitas validación estricta
- ⚠️ Type safety crítico
- ⚠️ Muchas marcas (>20)
- ⚠️ Integración con herramientas (Figma, etc.)
- ⚠️ Generación automática desde diseño

---

## 📝 **CONCLUSIÓN**

**Data Attributes = 80/20 rule**
- 80% de funcionalidad
- 20% de complejidad

**JSON Tokens = Enterprise ready**
- 100% de funcionalidad
- 60% más complejidad

---

## 🎨 **DECISIÓN FINAL**

Para Root Block, **recomendamos Data Attributes** porque:

1. ✅ 6 marcas (no necesitamos complejidad de JSON)
2. ✅ Equipo pequeño (CSS es más familiar)
3. ✅ Prototipado rápido (cambios inmediatos)
4. ✅ Menos abstracción (más directo)
5. ✅ Escalable cuando sea necesario (migrar a JSON después es fácil)

---

**¿Procedemos con implementar Data Attributes en button.css?** 🚀

