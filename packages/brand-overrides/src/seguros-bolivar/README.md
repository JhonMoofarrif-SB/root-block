# 💚 Seguros Bolívar - Brand Override

Override específico para la marca **Seguros Bolívar**.

## 🔄 Inversión de Colores

En Seguros Bolívar, los colores primary y secondary están invertidos:

- **PRIMARY** (acción principal) → Color **AMARILLO** (secondary de tokens)
- **SECONDARY** → Color **VERDE** (primary de tokens)

### Código

```css
/* PRIMARY → Amarillo */
--rb-button-bg-color: var(--rb-color-secondary-base); /* #ffe16f */
--rb-button-text-color: var(--rb-color-grayscale-black);

/* SECONDARY → Verde */
--rb-button-bg-color: var(--rb-color-primary-base); /* #009056 */
--rb-button-text-color: var(--rb-color-grayscale-white);
```

### Uso

```html
<link rel="stylesheet" href="rb-seguros-bolivar-light.min.css" />

<!-- Primary = Amarillo -->
<button class="rb-button rb-button--primary">Acción Principal</button>

<!-- Secondary = Verde -->
<button class="rb-button rb-button--secondary">Acción Secundaria</button>
```

## 📝 Notas

Este override solo cambia los colores de los botones primary y secondary. Todo lo demás (tamaños, modificadores, estados, etc.) usa los estilos base del sistema.
