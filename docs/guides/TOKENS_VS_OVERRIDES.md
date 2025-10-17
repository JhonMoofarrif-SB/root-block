# 🎨 Tokens vs Overrides: ¿Cuándo usar cada uno?

## 🤔 La Pregunta

> "Si usamos tokenización, ¿por qué necesitamos overrides?"

## 📊 La Respuesta Corta

**Tokens** definen **qué colores tiene una marca**.  
**Overrides** definen **cómo se usan esos colores en componentes específicos**.

---

## 🎯 Caso Real: Seguros Bolívar - Botón SECONDARY

### Paleta de Colores (Tokens)

```json
{
  "primary": {
    "base": "#009056" // Verde - Color principal de marca
  },
  "secondary": {
    "base": "#ffe16f" // Amarillo - Color secundario de marca
  }
}
```

✅ **Correcto**: Los tokens reflejan la **identidad de marca**.

---

### Uso en Componentes (BASE)

```css
/* BASE espera que SECONDARY buttons usen colores SECONDARY (amarillo) */
.b-ui-button--secondary {
  --b-ui-button-bg-color: var(--b-ui-color-secondary-base); /* Amarillo */
  --b-ui-button-text-color: var(--b-ui-color-primary-D100); /* Verde */
}
```

✅ **Correcto**: Patrón universal para todas las marcas.

---

### Decisión de Diseño Específica (Override)

**Diseño de Seguros Bolívar dice:**

> "Los botones SECONDARY deben ser verdes (PRIMARY), no amarillos (SECONDARY)"

```css
/* Override para Seguros Bolívar */
@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .b-ui-button--secondary {
    --b-ui-button-bg-color: var(--b-ui-color-primary-L300); /* Verde claro */
    --b-ui-button-text-color: var(--b-ui-color-primary-D200); /* Verde oscuro */
  }
}
```

✅ **Correcto**: Override permite **remapping conceptual** sin romper tokens.

---

## 🎨 Cuándo Usar Tokens (Sin Override)

### ✅ Caso 1: Misma Paleta, Mismo Uso

**Jelpit:**

- Paleta: PRIMARY = Naranja, SECONDARY = Azul
- Botón SECONDARY: Usa colores SECONDARY (azul)

```html
<!-- Zero override necesario -->
<div data-brand="jelpit">
  <button class="rb-button rb-button--secondary">Botón Azul</button>
</div>
```

**Tokens:**

```json
{
  "jelpit": {
    "secondary": {
      "base": "#0060ff" // Azul
    }
  }
}
```

**Override:** ❌ NO necesario

---

### ✅ Caso 2: Solo Cambian Valores, No Conceptos

**Davivienda:**

- Paleta: PRIMARY = Rojo, SECONDARY = Gris
- Botón SECONDARY: Usa colores SECONDARY (gris)

```html
<!-- Zero override necesario -->
<div data-brand="davivienda">
  <button class="rb-button rb-button--secondary">Botón Gris</button>
</div>
```

**Tokens:**

```json
{
  "davivienda": {
    "secondary": {
      "base": "#6c757d" // Gris
    }
  }
}
```

**Override:** ❌ NO necesario

---

## 🔧 Cuándo Usar Overrides

### ✅ Caso 1: Remapping Conceptual (Seguros Bolívar)

**Situación:**

- Tokens: PRIMARY = Verde, SECONDARY = Amarillo
- Diseño dice: Botón SECONDARY usa verde (PRIMARY)

**Razón del Override:**

- **Remapping**: Componente SECONDARY usa colores PRIMARY
- **No podemos cambiar tokens** porque otros componentes SÍ usan amarillo

```css
/* Override necesario */
@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .b-ui-button--secondary {
    --b-ui-button-bg-color: var(--b-ui-color-primary-L300);
  }
}
```

**Override:** ✅ NECESARIO

---

### ✅ Caso 2: Patrón de Hover Diferente

**Doctor Aki:**

- Botón SECONDARY: Hover muestra background cuando el base es transparent

```css
/* Override necesario */
@layer brand-overrides {
  :where([data-brand='doctor-aki']) .b-ui-button--secondary.b-ui-button--text {
    --b-ui-button-bg-hover: var(--b-ui-color-tertiary-L400); /* Aparece en hover */
  }
}
```

**Override:** ✅ NECESARIO (comportamiento diferente)

---

### ✅ Caso 3: Focus Outline Especial

**Cien Cuadras:**

- Focus outline más grueso y con color diferente

```css
/* Override necesario */
@layer brand-overrides {
  :where([data-brand='cien-cuadras']) .b-ui-button--secondary:focus-visible {
    outline-color: var(--b-ui-color-tertiary-base);
    outline-width: 4px; /* Más grueso que el base (2px) */
  }
}
```

**Override:** ✅ NECESARIO (comportamiento de UX diferente)

---

## 📋 Checklist: ¿Necesito Override?

### 1️⃣ **¿Solo cambia el VALOR del color?**

```
Ejemplo: Botón secondary es azul en Jelpit, gris en Davivienda
```

→ ❌ NO necesitas override, **solo cambiar tokens**

---

### 2️⃣ **¿Cambia QUÉ TOKEN se usa?**

```
Ejemplo: Botón secondary usa PRIMARY en lugar de SECONDARY
```

→ ✅ SÍ necesitas override para **remapping**

---

### 3️⃣ **¿Cambia el COMPORTAMIENTO?**

```
Ejemplo: Hover muestra background, el base es transparent
```

→ ✅ SÍ necesitas override para **comportamiento**

---

### 4️⃣ **¿Cambia la ESTRUCTURA?**

```
Ejemplo: Border radius diferente, padding diferente
```

→ ✅ SÍ necesitas override para **estructura**

---

## 🏗️ Arquitectura Correcta

### Tokens (Qué colores existen)

```
/packages/tokens/src/primitives/brands/seguros-bolivar.json

{
  "primary": { "base": "#009056" },    // Verde
  "secondary": { "base": "#ffe16f" },  // Amarillo
  "tertiary": { "base": "#02d46f" }    // Verde claro
}
```

**Propósito:** Define la **paleta de identidad de marca**.

---

### BASE (Cómo se usan universalmente)

```
/packages/atoms/src/button.css

.b-ui-button--secondary {
  /* Usa tokens SECONDARY porque así se llama el botón */
  --b-ui-button-bg-color: var(--b-ui-color-secondary-base);
}
```

**Propósito:** Define el **patrón universal** para todas las marcas.

---

### Override (Excepciones específicas)

```
/packages/brand-overrides/src/seguros-bolivar/button.css

@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .b-ui-button--secondary {
    /* Remapping: secondary button usa colores primary */
    --b-ui-button-bg-color: var(--b-ui-color-primary-L300);
  }
}
```

**Propósito:** Define **excepciones** cuando la marca tiene patrones únicos.

---

## 🤝 Ventajas de Esta Separación

### 1️⃣ **Tokens Semánticamente Correctos**

```
PRIMARY = Color principal de marca (independiente de dónde se use)
SECONDARY = Color secundario de marca (independiente de dónde se use)
```

✅ Los tokens reflejan **identidad de marca**, no uso en componentes.

---

### 2️⃣ **BASE Predecible**

```css
.b-ui-button--primary → Usa colores PRIMARY
.b-ui-button--secondary → Usa colores SECONDARY
.b-ui-button--tertiary → Usa colores TERTIARY
```

✅ Patrón claro y consistente para 95% de las marcas.

---

### 3️⃣ **Overrides para el 5% Especial**

```css
/* Solo cuando el diseño lo requiere */
[data-brand='seguros-bolivar'] .b-ui-button--secondary {
  /* Remapping específico */
}
```

✅ Flexibilidad sin romper la arquitectura.

---

## ❌ Anti-Patrón: Forzar Todo en Tokens

### Malo: Cambiar tokens para acomodar un componente

```json
// ❌ MAL: Cambiar secondary a verde solo porque el botón lo usa
{
  "seguros-bolivar": {
    "secondary": {
      "base": "#e5f4ee" // Verde (pero la marca dice amarillo!)
    }
  }
}
```

**Problemas:**

1. ❌ Los tokens ya no reflejan la paleta de marca
2. ❌ Otros componentes (alerts, badges) quedan inconsistentes
3. ❌ Documentación de marca se vuelve confusa

---

### Bueno: Tokens reflejan paleta, overrides manejan excepciones

```json
// ✅ BIEN: Tokens reflejan la realidad de la marca
{
  "seguros-bolivar": {
    "primary": { "base": "#009056" }, // Verde
    "secondary": { "base": "#ffe16f" } // Amarillo
  }
}
```

```css
/* ✅ BIEN: Override maneja el remapping en el botón */
@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .b-ui-button--secondary {
    --b-ui-button-bg-color: var(--b-ui-color-primary-L300);
  }
}
```

**Beneficios:**

1. ✅ Tokens correctos semánticamente
2. ✅ Override claro y documentado
3. ✅ Otros componentes funcionan correctamente

---

## 📊 Matriz de Decisión

| Situación                     | Tokens | Override | Ejemplo                         |
| ----------------------------- | ------ | -------- | ------------------------------- |
| Mismo patrón, diferente color | ✅     | ❌       | Jelpit secondary azul           |
| Remapping conceptual          | ✅     | ✅       | Seguros Bolívar secondary verde |
| Comportamiento diferente      | ✅     | ✅       | Doctor Aki hover aparece        |
| Estructura diferente          | ✅     | ✅       | Cien Cuadras border radius      |
| Solo valor cambia             | ✅     | ❌       | Davivienda secondary gris       |

---

## 🎯 Conclusión

### ¿Por qué existe el override de Seguros Bolívar si usamos tokenización?

**Respuesta:**

1. **Tokens** definen **qué colores tiene la marca** (verde, amarillo, gris)
2. **BASE** define **cómo se usan normalmente** (secondary button = amarillo)
3. **Override** permite **remapping conceptual** (secondary button = verde en Seguros Bolívar)

**Sin override:**

- Tendríamos que cambiar `secondary` tokens a verde
- Perderíamos el amarillo como color semántico
- Otros componentes se romperían

**Con override:**

- Tokens reflejan la paleta real de marca
- BASE mantiene patrón universal
- Override maneja la excepción específica

---

## 🚀 Reglas de Oro

### Para TOKENS:

1. ✅ Reflejan la **identidad de marca**
2. ✅ Nombrados semánticamente (primary, secondary, tertiary)
3. ✅ **NO** cambian para acomodar un componente
4. ✅ Documentados en design system de marca

### Para BASE:

1. ✅ Usa tokens **como están nombrados**
2. ✅ Patrón universal para **todas las marcas**
3. ✅ **NO** hace suposiciones de marca específica
4. ✅ 95% de las marcas funcionan sin override

### Para OVERRIDES:

1. ✅ Solo cuando hay **remapping** o **comportamiento diferente**
2. ✅ Usa `@layer brand-overrides` y `:where()`
3. ✅ **NO** duplica lógica del BASE
4. ✅ Documentado con comentarios claros

---

**Fecha:** Octubre 16, 2025  
**Autor:** Bolivar UI Team  
**Versión:** 1.0  
**Estado:** ✅ Architectural Decision Record
