# 🎨 Guía de Font Awesome en Seguros Bolivar UI Design System

## 📋 Configuración

Font Awesome 6 está **completamente integrado** en el Storybook del proyecto. Los iconos se cargan automáticamente desde el CDN de Cloudflare y están disponibles en todas las historias.

### Versión Instalada

- **Font Awesome 6.5.1** (Free)
- Cargado desde: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`

### Archivo de Configuración

La integración se encuentra en:

```
packages/docs/.storybook/preview.ts
```

---

## 🚀 Uso Básico

### Estructura HTML

```html
<button class="rb-button rb-button--primary rb-button--fill rb-button--icon-left">
  <i class="fa-solid fa-heart"></i>
  Me gusta
</button>
```

### Clases Disponibles

| Clase CSS                | Descripción                    | Uso                          |
| ------------------------ | ------------------------------ | ---------------------------- |
| `.sb-ui-button--icon-left`  | Icono a la izquierda del texto | Acciones principales         |
| `.sb-ui-button--icon-right` | Icono a la derecha del texto   | Navegación, enlaces externos |
| `.sb-ui-button--icon-only`  | Solo icono (circular 40x40px)  | Acciones compactas           |

---

## 📚 Tipos de Iconos Font Awesome

### 1. Solid Icons (fa-solid) - MÁS COMÚN

Los iconos más utilizados con relleno sólido:

```html
<i class="fa-solid fa-heart"></i>
<i class="fa-solid fa-user"></i>
<i class="fa-solid fa-trash"></i>
<i class="fa-solid fa-download"></i>
```

### 2. Regular Icons (fa-regular)

Iconos con estilo outline:

```html
<i class="fa-regular fa-heart"></i>
<i class="fa-regular fa-user"></i>
<i class="fa-regular fa-circle"></i>
```

### 3. Brand Icons (fa-brands)

Iconos de redes sociales y marcas:

```html
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-github"></i>
<i class="fa-brands fa-linkedin"></i>
```

---

## 🎯 Ejemplos Prácticos

### Botones de Acción

```html
<!-- Guardar -->
<button class="rb-button rb-button--primary rb-button--fill rb-button--icon-left">
  <i class="fa-solid fa-floppy-disk"></i>
  Guardar
</button>

<!-- Eliminar -->
<button class="rb-button rb-button--error rb-button--fill rb-button--icon-left">
  <i class="fa-solid fa-trash"></i>
  Eliminar
</button>

<!-- Editar -->
<button class="rb-button rb-button--secondary rb-button--fill rb-button--icon-left">
  <i class="fa-solid fa-pen-to-square"></i>
  Editar
</button>
```

### Botones de Navegación

```html
<!-- Anterior -->
<button class="rb-button rb-button--primary rb-button--stroke rb-button--icon-left">
  <i class="fa-solid fa-chevron-left"></i>
  Anterior
</button>

<!-- Siguiente -->
<button class="rb-button rb-button--primary rb-button--stroke rb-button--icon-right">
  Siguiente
  <i class="fa-solid fa-chevron-right"></i>
</button>

<!-- Inicio -->
<button class="rb-button rb-button--secondary rb-button--fill rb-button--icon-left">
  <i class="fa-solid fa-house"></i>
  Inicio
</button>
```

### Botones Solo Icono (Icon Only)

```html
<!-- Favorito -->
<button class="rb-button rb-button--primary rb-button--fill rb-button--icon-only" title="Favorito">
  <i class="fa-solid fa-heart"></i>
</button>

<!-- Usuario -->
<button class="rb-button rb-button--secondary rb-button--fill rb-button--icon-only" title="Usuario">
  <i class="fa-solid fa-user"></i>
</button>

<!-- Menú -->
<button class="rb-button rb-button--tertiary rb-button--fill rb-button--icon-only" title="Menú">
  <i class="fa-solid fa-bars"></i>
</button>
```

### Estados con Iconos

```html
<!-- Normal -->
<button class="rb-button rb-button--primary rb-button--fill rb-button--icon-left">
  <i class="fa-solid fa-cloud-arrow-up"></i>
  Subir archivo
</button>

<!-- Loading -->
<button
  class="rb-button rb-button--primary rb-button--fill rb-button--loading rb-button--icon-left"
>
  <i class="fa-solid fa-cloud-arrow-up"></i>
  Subiendo...
</button>

<!-- Disabled -->
<button
  class="rb-button rb-button--primary rb-button--fill rb-button--disabled rb-button--icon-left"
>
  <i class="fa-solid fa-cloud-arrow-up"></i>
  Subir archivo
</button>
```

---

## 🔍 Búsqueda de Iconos

### Catálogo Completo

Explora todos los iconos disponibles en Font Awesome:

🔗 **https://fontawesome.com/search**

### Iconos Populares por Categoría

#### 📁 Archivos y Documentos

- `fa-file` - Archivo genérico
- `fa-folder` - Carpeta
- `fa-download` - Descargar
- `fa-upload` - Subir
- `fa-cloud-arrow-up` - Subir a la nube
- `fa-cloud-arrow-down` - Descargar de la nube

#### 👤 Usuario y Cuenta

- `fa-user` - Usuario
- `fa-users` - Grupo de usuarios
- `fa-user-plus` - Agregar usuario
- `fa-user-minus` - Eliminar usuario
- `fa-right-from-bracket` - Cerrar sesión
- `fa-right-to-bracket` - Iniciar sesión

#### ⚙️ Acciones y Herramientas

- `fa-gear` - Configuración
- `fa-pen-to-square` - Editar
- `fa-trash` - Eliminar
- `fa-floppy-disk` - Guardar
- `fa-rotate-right` - Refrescar
- `fa-magnifying-glass` - Buscar

#### 🔔 Notificaciones y Estados

- `fa-bell` - Notificaciones
- `fa-circle-check` - Éxito
- `fa-circle-xmark` - Error
- `fa-circle-info` - Información
- `fa-triangle-exclamation` - Advertencia

#### 🧭 Navegación

- `fa-chevron-left` - Anterior
- `fa-chevron-right` - Siguiente
- `fa-chevron-up` - Arriba
- `fa-chevron-down` - Abajo
- `fa-house` - Inicio
- `fa-bars` - Menú hamburguesa

#### 💬 Comunicación y Social

- `fa-facebook` - Facebook
- `fa-x-twitter` - Twitter/X
- `fa-linkedin` - LinkedIn
- `fa-instagram` - Instagram
- `fa-github` - GitHub
- `fa-youtube` - YouTube

---

## 💡 Mejores Prácticas

### 1. Consistencia de Iconos

- **Solid (fa-solid)**: Usa para la mayoría de acciones
- **Regular (fa-regular)**: Usa para indicadores y opciones secundarias
- **Brands (fa-brands)**: Solo para redes sociales y marcas específicas

### 2. Posicionamiento Semántico

- **Icon Left**: Acciones principales (Guardar, Eliminar, Editar)
- **Icon Right**: Navegación y enlaces externos (Siguiente, Ver más)
- **Icon Only**: Acciones compactas en toolbars o FABs

### 3. Accesibilidad

Siempre usa el atributo `title` en botones icon-only:

```html
<button class="rb-button rb-button--primary rb-button--icon-only" title="Favorito">
  <i class="fa-solid fa-heart"></i>
</button>
```

### 4. Estados Interactivos

Los iconos heredan automáticamente el color del botón con `currentColor`, por lo que se adaptan perfectamente a todos los estados (hover, disabled, loading).

---

## 📖 Ver en Storybook

Para ver todos los ejemplos de Font Awesome en acción, navega a:

**Storybook > Atoms > Button > Font Awesome Examples**

Esta historia incluye:

- ⚡ Iconos de Acción
- 🧭 Iconos de Navegación
- 🎯 Botones Solo Icono
- 💬 Iconos de Redes Sociales
- 🎭 Estados con Iconos

---

## 🛠️ Troubleshooting

### Los iconos no se muestran

1. Verifica que Storybook esté corriendo correctamente
2. Abre las DevTools del navegador y confirma que Font Awesome se cargó desde el CDN
3. Busca errores de red en la consola

### Los iconos se ven mal o desalineados

- Asegúrate de usar las clases correctas del sistema Seguros Bolivar UI: `.sb-ui-button--icon-left`, `.sb-ui-button--icon-right`, o `.sb-ui-button--icon-only`
- Los iconos deben estar dentro de un elemento `<i>` con las clases de Font Awesome

### Quiero usar Font Awesome Pro

1. Edita `packages/docs/.storybook/preview.ts`
2. Reemplaza la URL del CDN con tu Kit Code de Font Awesome Pro
3. Reinicia Storybook

---

## 📝 Changelog

### v1.0.0 - 2025-01-10

- ✅ Integración inicial de Font Awesome 6.5.1
- ✅ Carga automática desde CDN
- ✅ Historia completa de ejemplos en Storybook
- ✅ Documentación de uso y mejores prácticas

---

## 🔗 Referencias

- [Font Awesome Docs](https://fontawesome.com/docs)
- [Font Awesome Icons Search](https://fontawesome.com/search)
- [Font Awesome Accessibility](https://fontawesome.com/docs/web/dig-deeper/accessibility)
- [Seguros Bolivar UI Button Component](./src/atoms/Button.stories.ts)
