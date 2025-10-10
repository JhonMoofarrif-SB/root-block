# 🔘 Guía Rápida: Uso de Botones rb-button

## 📋 Reglas Básicas

### 1. **Clase Base (OBLIGATORIA)**
Todos los botones deben tener la clase `.rb-button`:

```html
<button class="rb-button">Botón</button>
```

### 2. **Tipo de Botón (OPCIONAL)**
Define el color/propósito del botón. Si no especificas, usa PRIMARY por defecto:

```html
<button class="rb-button rb-button--primary">Primary</button>
<button class="rb-button rb-button--secondary">Secondary</button>
<button class="rb-button rb-button--tertiary">Tertiary</button>
<button class="rb-button rb-button--error">Error</button>
```

### 3. **Variante de Estilo (OPCIONAL)**
El **default es FILL** (fondo sólido). Solo especifica si quieres STROKE o TEXT:

```html
<!-- FILL es el default, no necesitas especificarlo -->
<button class="rb-button rb-button--primary">Primary Fill</button>

<!-- Especifica solo si quieres STROKE (borde) -->
<button class="rb-button rb-button--primary rb-button--stroke">Primary Stroke</button>

<!-- Especifica solo si quieres TEXT (sin fondo/borde) -->
<button class="rb-button rb-button--primary rb-button--text">Primary Text</button>
```

### 4. **Tamaño (OPCIONAL)**
El **default es MEDIUM**. Solo especifica si quieres SMALL o LARGE:

```html
<button class="rb-button rb-button--primary rb-button--small">Small</button>
<button class="rb-button rb-button--primary">Medium (default)</button>
<button class="rb-button rb-button--primary rb-button--large">Large</button>
```

### 5. **Con Iconos (OPCIONAL)**
Especifica la posición del icono:

```html
<!-- Icono a la izquierda -->
<button class="rb-button rb-button--primary rb-button--icon-left">
  <i class="fa-solid fa-save"></i>
  Guardar
</button>

<!-- Icono a la derecha -->
<button class="rb-button rb-button--primary rb-button--icon-right">
  Siguiente
  <i class="fa-solid fa-arrow-right"></i>
</button>

<!-- Solo icono (automáticamente redondo 40x40px) -->
<button class="rb-button rb-button--primary rb-button--icon-only" title="Usuario">
  <i class="fa-solid fa-user"></i>
</button>
```

### 6. **Estados (OPCIONAL)**
Usa clases o atributos HTML según el estado:

```html
<!-- Loading -->
<button class="rb-button rb-button--primary rb-button--loading">Loading...</button>

<!-- Disabled (usa el atributo HTML) -->
<button class="rb-button rb-button--primary" disabled>Disabled</button>
```

---

## ✅ Ejemplos Completos

### Ejemplo 1: Botón Simple
```html
<button class="rb-button rb-button--primary">
  Aceptar
</button>
```
**Resultado**: Botón PRIMARY, FILL (default), MEDIUM (default)

### Ejemplo 2: Botón con Todas las Opciones
```html
<button class="rb-button rb-button--secondary rb-button--stroke rb-button--large rb-button--icon-left">
  <i class="fa-solid fa-download"></i>
  Descargar
</button>
```
**Resultado**: Botón SECONDARY, STROKE, LARGE, con icono a la izquierda

### Ejemplo 3: Botón Icon Only
```html
<button class="rb-button rb-button--primary rb-button--icon-only" title="Editar">
  <i class="fa-solid fa-edit"></i>
</button>
```
**Resultado**: Botón circular 40x40px con solo icono

---

## ❌ Errores Comunes

### ❌ Redundancia con `--fill`
```html
<!-- MAL: --fill es redundante porque es el default -->
<button class="rb-button rb-button--primary rb-button--fill">Botón</button>

<!-- BIEN: Omite --fill -->
<button class="rb-button rb-button--primary">Botón</button>
```

### ❌ Redundancia con `--medium`
```html
<!-- MAL: --medium es redundante porque es el default -->
<button class="rb-button rb-button--primary rb-button--medium">Botón</button>

<!-- BIEN: Omite --medium -->
<button class="rb-button rb-button--primary">Botón</button>
```

### ❌ Múltiples variantes de estilo
```html
<!-- MAL: No puedes tener STROKE y TEXT al mismo tiempo -->
<button class="rb-button rb-button--primary rb-button--stroke rb-button--text">Botón</button>

<!-- BIEN: Elige solo una -->
<button class="rb-button rb-button--primary rb-button--stroke">Botón</button>
```

---

## 🎯 Combinaciones Válidas

| Quiero | Clases |
|--------|--------|
| Botón primario simple | `.rb-button .rb-button--primary` |
| Botón secundario con borde | `.rb-button .rb-button--secondary .rb-button--stroke` |
| Botón grande de error | `.rb-button .rb-button--error .rb-button--large` |
| Botón pequeño terciario transparente | `.rb-button .rb-button--tertiary .rb-button--text .rb-button--small` |
| Botón con icono izquierda | `.rb-button .rb-button--primary .rb-button--icon-left` |
| Botón solo icono circular | `.rb-button .rb-button--primary .rb-button--icon-only` |

---

## 🔧 Modificadores Adicionales

### Ancho Completo
```html
<button class="rb-button rb-button--primary rb-button--block">
  Botón Full Width
</button>
```

### Esquinas Cuadradas
```html
<button class="rb-button rb-button--primary rb-button--square">
  Botón Cuadrado
</button>
```

---

## 📚 Resumen de Defaults

- **Tipo**: PRIMARY (si no especificas `--secondary`, `--tertiary`, etc.)
- **Variante**: FILL (fondo sólido)
- **Tamaño**: MEDIUM
- **Sin iconos**: Por defecto no tiene iconos

**Regla de oro**: Solo agrega las clases que necesitas cambiar del default.

---

**Última actualización**: 2025-01-10

