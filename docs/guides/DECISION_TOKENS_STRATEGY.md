# 🏗️ Decisión Arquitectónica: Estrategia de Tokens

## 🤔 La Pregunta Original

> "Si tenemos tokenización, ¿por qué existe el override de Seguros Bolívar?  
> ¿No deberíamos usar semantic tokens para esto?"

## ✅ Respuesta Corta

**Sí tenemos ambas estrategias disponibles**, pero elegimos **NO usar semantic tokens** para este caso específico porque:

1. El override CSS es más simple y explícito
2. Semantic tokens agregarían complejidad sin beneficio claro
3. El caso de Seguros Bolívar es una excepción, no la regla

---

## 📊 Análisis Completo

### Estrategia 1: Primitive Tokens (Actual)

```
Primitives (por marca)
     ↓
  Componentes usan primitives directamente
     ↓
  Override CSS cuando sea necesario
```

#### Archivos:

- `packages/tokens/src/primitives/brands/seguros-bolivar.json`
- `packages/atoms/src/button.css` (usa `--sb-ui-color-primary-*`)
- `packages/brand-overrides/src/seguros-bolivar/button.css` (override)

#### Ejemplo:

```css
/* BASE */
.sb-ui-button--secondary {
  --sb-ui-button-bg-color: var(--sb-ui-color-secondary-base);
}

/* OVERRIDE (Seguros Bolívar) */
@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary {
    --sb-ui-button-bg-color: var(--sb-ui-color-primary-L300);
  }
}
```

**✅ Ventajas:**

- Simple y directo
- Fácil de debuggear (DevTools muestra qué override aplica)
- Flexibilidad máxima
- El 95% de las marcas NO necesitan override

**❌ Desventajas:**

- Necesita override CSS para casos especiales

---

### Estrategia 2: Semantic Tokens (Considerada)

```
Primitives (por marca)
     ↓
  Semantic Tokens (por marca)
     ↓
  Componentes usan semantic tokens
     ↓
  NO necesita override CSS
```

#### Archivos hipotéticos:

- `packages/tokens/src/semantic/light.json` (genérico)
- `packages/tokens/src/semantic/seguros-bolivar-light.json` (específico)
- `packages/atoms/src/button.css` (usa `--sb-ui-component-button-secondary-bg`)

#### Ejemplo:

```json
// semantic/light.json (genérico)
{
  "component": {
    "button": {
      "secondary": {
        "bg": "{color.secondary.base}"
      }
    }
  }
}

// semantic/seguros-bolivar-light.json (específico)
{
  "component": {
    "button": {
      "secondary": {
        "bg": "{color.primary.L300}"  // Override en tokens
      }
    }
  }
}
```

```css
/* BASE usa semantic tokens */
.sb-ui-button--secondary {
  --sb-ui-button-bg-color: var(--sb-ui-component-button-secondary-bg);
}

/* NO necesita override CSS */
```

**✅ Ventajas:**

- Override en tokens (más "puro")
- Componentes más simples (usan semantic directamente)
- Centralización en tokens

**❌ Desventajas:**

- **Complejidad**: Necesita configurar Style Dictionary para referencias
- **Debugging difícil**: Errores de referencia no son claros
- **Escalabilidad**: Cada componente/estado necesita semantic token
- **Duplicación**: Semantic genérico + semantic por marca
- **Mantenimiento**: Más archivos JSON que mantener
- **Performance build**: Más tiempo de compilación

---

## 🎯 Decisión Final

### Usar **Primitive Tokens + Override CSS**

**Razones:**

### 1️⃣ Simplicidad

```
Override CSS:
- 1 archivo CSS (~50 líneas)
- Cambios visibles inmediatamente
- DevTools muestra qué aplica

Semantic Tokens:
- 2+ archivos JSON (~200+ líneas)
- Requiere recompilar
- Debugging complejo
```

### 2️⃣ Caso Excepcional

Seguros Bolívar es **el único** que hace remapping:

- Jelpit ✅ usa tokens directamente
- Davivienda ✅ usa tokens directamente
- Doctor Aki ✅ usa tokens directamente
- Cien Cuadras ✅ usa tokens directamente
- **Seguros Bolívar ❌ necesita remapping**

**No tiene sentido** crear infraestructura compleja para 1 de 5 marcas.

### 3️⃣ Flexibilidad

Override CSS permite:

- Cambiar cualquier propiedad (no solo colores)
- Animaciones especiales
- Pseudo-estados complejos
- Media queries específicas

Semantic tokens solo permiten:

- Cambiar valores de tokens
- No hay flexibilidad para lógica CSS

### 4️⃣ Claridad

```css
/* Override es explícito */
@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary {
    /* 👀 Se VE qué cambia y por qué */
    --sb-ui-button-bg-color: var(--sb-ui-color-primary-L300);
  }
}
```

vs

```json
// Semantic es indirecto
{
  "component": {
    "button": {
      "secondary": {
        "bg": "{color.primary.L300}" // ¿Por qué primary? No está claro
      }
    }
  }
}
```

---

## 📚 Cuándo Usar Cada Estrategia

### Usar **Primitive Tokens** (Sin Override):

✅ **95% de los casos**

```html
<!-- Jelpit: funciona directamente -->
<div data-brand="jelpit">
  <button class="rb-button rb-button--secondary">Botón Amarillo</button>
</div>
```

**Tokens:**

```json
{
  "jelpit": {
    "secondary": {
      "base": "#FFA500" // Naranja
    }
  }
}
```

**CSS BASE:**

```css
.sb-ui-button--secondary {
  --sb-ui-button-bg-color: var(--sb-ui-color-secondary-base);
}
```

**Override:** ❌ NO necesario

---

### Usar **Primitive Tokens + Override CSS**:

✅ **Cuando hay remapping o comportamiento especial**

```html
<!-- Seguros Bolívar: necesita remapping -->
<div data-brand="seguros-bolivar">
  <button class="rb-button rb-button--secondary">Botón Verde (PRIMARY)</button>
</div>
```

**Tokens:**

```json
{
  "seguros-bolivar": {
    "primary": { "base": "#009056" }, // Verde
    "secondary": { "base": "#ffe16f" } // Amarillo
  }
}
```

**CSS BASE:**

```css
.sb-ui-button--secondary {
  --sb-ui-button-bg-color: var(--sb-ui-color-secondary-base);  // Amarillo
}
```

**Override CSS:**

```css
@layer brand-overrides {
  :where([data-brand='seguros-bolivar']) .sb-ui-button--secondary {
    --sb-ui-button-bg-color: var(--sb-ui-color-primary-L300);  // Verde
  }
}
```

**Semantic Tokens:** ❌ NO necesario (override CSS es más simple)

---

### Usar **Semantic Tokens**:

✅ **Solo si TODAS estas condiciones son verdad:**

1. **Múltiples marcas** necesitan el mismo override
2. **Patrón repetitivo** que ocurre en varios componentes
3. **Beneficio claro** vs complejidad añadida
4. **Equipo familiarizado** con Style Dictionary avanzado

**Ejemplo hipotético (NO implementado):**

Si 4 de 5 marcas necesitaran remapping similar:

```
- Seguros Bolívar: secondary → primary
- Davivienda: secondary → tertiary
- Doctor Aki: secondary → primary
- Cien Cuadras: secondary → tertiary
```

**Entonces SÍ** valdría la pena semantic tokens.

**Pero actualmente:** Solo Seguros Bolívar lo necesita.

---

## 🎨 Arquitectura Actual (Elegida)

```
┌─────────────────────────────────────────────────────────┐
│  PRIMITIVES (por marca)                                 │
│  - seguros-bolivar.json                                 │
│  - jelpit.json                                          │
│  - davivienda.json                                      │
│  - ...                                                  │
│                                                         │
│  Define: ¿Qué colores tiene esta marca?                │
│  Ejemplo: primary=#009056, secondary=#ffe16f           │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  SEMANTIC (genérico, VACÍO actualmente)                 │
│  - light.json                                           │
│  - dark.json                                            │
│                                                         │
│  Define: (nada, está vacío intencionalmente)           │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  BUILDER                                                │
│  - Combina primitives + semantic                        │
│  - Genera CSS variables                                 │
│  - Salida: --sb-ui-color-primary-base, etc.               │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  BASE CSS (packages/atoms/src/button.css)               │
│                                                         │
│  .sb-ui-button--secondary {                                │
│    --sb-ui-button-bg-color: var(--sb-ui-color-secondary-base);│
│  }                                                      │
│                                                         │
│  Usa: Primitive tokens directamente                    │
└─────────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────────┐
│  OVERRIDES CSS (cuando necesario)                       │
│  - seguros-bolivar/button.css                           │
│                                                         │
│  @layer brand-overrides {                               │
│    :where([data-brand='seguros-bolivar'])               │
│      .sb-ui-button--secondary {                            │
│      --sb-ui-button-bg-color:                              │
│        var(--sb-ui-color-primary-L300);                    │
│    }                                                    │
│  }                                                      │
│                                                         │
│  Override: Solo cuando hay remapping                   │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 Reglas de Implementación

### Para Tokens:

1. ✅ Define la paleta de marca (primary, secondary, tertiary)
2. ✅ Usa nombres semánticos (no `green-500`, usa `primary-base`)
3. ✅ **NO** cambies tokens para acomodar un componente
4. ✅ Mantén semantic vacío (por ahora)

### Para BASE CSS:

1. ✅ Usa primitive tokens directamente (`--sb-ui-color-secondary-base`)
2. ✅ Patrón universal para todas las marcas
3. ✅ **NO** hace suposiciones de marca específica

### Para Overrides CSS:

1. ✅ Solo cuando hay remapping o comportamiento diferente
2. ✅ Usa `@layer brand-overrides` y `:where()`
3. ✅ Solo define lo que cambia
4. ✅ Documenta POR QUÉ existe el override

---

## 🚀 Próximos Pasos

### Si en el futuro necesitamos Semantic Tokens:

**Señales de que SÍ los necesitamos:**

1. 3+ marcas necesitan el mismo tipo de remapping
2. Mismo patrón se repite en múltiples componentes
3. Overrides CSS se vuelven repetitivos

**Entonces:**

1. Implementar semantic tokens genéricos
2. Implementar semantic por marca cuando difiere
3. Actualizar BASE para usar semantic
4. Eliminar overrides CSS redundantes

### Por ahora (Estado actual):

1. ✅ Mantener primitives + override CSS
2. ✅ Documentar por qué existe cada override
3. ✅ Monitorear si más marcas necesitan remapping
4. ✅ Reevaluar cuando tengamos 3+ casos similares

---

## 📚 Referencias

- `TOKENS_VS_OVERRIDES.md` - Cuándo usar cada estrategia
- `GUIA_PERSONALIZACION_SECONDARY.md` - Cómo crear overrides
- `packages/tokens/README.md` - Documentación de tokens
- `packages/brand-overrides/README.md` - Documentación de overrides

---

## 🎯 Conclusión

### ¿Por qué NO usamos semantic tokens?

**Porque:**

1. Solo 1 de 5 marcas necesita remapping
2. Override CSS es más simple
3. Semantic tokens agregarían complejidad sin beneficio
4. Más fácil de debuggear con override CSS
5. Más flexible para casos especiales

### ¿Cuándo SÍ los usaríamos?

**Cuando:**

1. 3+ marcas necesiten el mismo tipo de remapping
2. Patrón se repita en múltiples componentes
3. Beneficio supere la complejidad

---

**Fecha:** Octubre 16, 2025  
**Decisión:** Mantener Primitive Tokens + Override CSS  
**Razón:** Simplicidad y flexibilidad para casos excepcionales  
**Estado:** ✅ Decidido y Documentado  
**Próxima revisión:** Cuando tengamos 3+ casos de remapping similares
