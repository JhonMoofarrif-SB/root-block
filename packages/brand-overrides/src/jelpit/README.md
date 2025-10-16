# 🎨 Jelpit - Brand Overrides

## ✅ Estado Actual

**Jelpit NO necesita overrides** para el botón SECONDARY.

Los colores del BASE funcionan perfectamente:

- ✅ STROKE: Borde amarillo, texto primary
- ✅ FILL: Fondo amarillo, texto primary
- ✅ TEXT: Texto amarillo

---

## 📝 Uso

```html
<!-- Funciona directamente, sin necesidad de overrides -->
<div data-brand="jelpit">
  <button class="rb-button rb-button--secondary rb-button--stroke">Botón Stroke</button>
  <button class="rb-button rb-button--secondary rb-button--fill">Botón Fill</button>
  <button class="rb-button rb-button--secondary rb-button--text">Botón Text</button>
</div>
```

---

## 🎯 Cuándo Agregar Override

Solo si en el futuro Jelpit necesita:

- ❌ Cambiar colores SECONDARY a otros (primary, tertiary)
- ❌ Focus outline diferente
- ❌ Comportamiento especial en hover/pressed

**Entonces:** Copiar `seguros-bolivar/button.css` y ajustar colores.

---

**Ver ejemplos:** `../EJEMPLOS_OTRAS_MARCAS.md`
