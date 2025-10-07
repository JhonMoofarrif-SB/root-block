# 🎨 Root Block Design System - Examples

> Demos interactivos y ejemplos de uso del Root Block Design System

Esta carpeta contiene ejemplos completos y funcionales del Design System en acción.

## 📁 Archivos

### 🚀 Demos Principales

#### `bootstrap-style.html`

Demo completo al estilo Bootstrap con todas las secciones:

- ✅ Hero section con badges
- ✅ Instrucciones de uso (HTML, JS, CSS)
- ✅ Panel de control interactivo (cambio de marca/tema)
- ✅ Todos los componentes (botones, modal)
- ✅ Paleta de colores activa
- ✅ Variables CSS disponibles

**Características:**

- ~14KB total (sin comprimir)
- Funciona con `file://` protocol
- No requiere servidor
- Código comentado y explicado

#### `demo.html`

Demo simplificado y minimalista:

- ✅ Header informativo
- ✅ Panel de control
- ✅ Botones (Atoms - CSS)
- ✅ Modal (Molecule - Web Component)
- ✅ Footer con estadísticas

**Características:**

- ~9KB total (sin comprimir)
- Más ligero y rápido
- Ideal para quick start
- Perfecto para principiantes

### 📦 Carpeta `dist/`

Contiene todos los archivos compilados del Design System:

```
dist/
├── rb-white-label-light.min.css    (~4.3KB)
├── rb-white-label-dark.min.css     (~4.3KB)
├── rb-jelpit-light.min.css         (~4.3KB)
├── rb-jelpit-dark.min.css          (~4.3KB)
├── rb-davivienda-light.min.css     (~4.3KB)
├── rb-davivienda-dark.min.css      (~4.3KB)
├── rb-cien-cuadras-light.min.css   (~4.5KB)
├── rb-cien-cuadras-dark.min.css    (~4.5KB)
├── rb-doctor-aki-light.min.css     (~4.3KB)
├── rb-doctor-aki-dark.min.css      (~4.3KB)
├── rb-seguros-bolivar-light.min.css (~4.3KB)
├── rb-seguros-bolivar-dark.min.css  (~4.3KB)
├── rb-styles.min.css                (~6.7KB)
└── rb-components.min.js             (~30KB)
```

### 📄 Documentación

#### `INDEX.md`

Documentación detallada de los ejemplos con:

- Guía de uso
- Estructura de archivos
- Cómo funciona el sistema
- Personalización
- Troubleshooting

## 🚀 Cómo Usar

### Opción 1: Abrir Directo (File Protocol)

```bash
# Abrir en navegador
open bootstrap-style.html
# o
open demo.html
```

**Pros:**

- ✅ Funciona inmediatamente
- ✅ No requiere servidor
- ✅ Ideal para desarrollo rápido

**Cons:**

- ⚠️ Algunas funciones avanzadas podrían no funcionar

### Opción 2: Con Servidor HTTP

```bash
# Desde la carpeta examples/
npx serve -l 8080

# O usa cualquier servidor HTTP
python3 -m http.server 8080
```

**Pros:**

- ✅ Sin restricciones de CORS
- ✅ Más cercano a producción
- ✅ Todas las funciones funcionan

**Cons:**

- ⚠️ Requiere servidor (muy ligero)

### Opción 3: Live Server (VSCode)

1. Instala la extensión "Live Server"
2. Click derecho en `bootstrap-style.html` o `demo.html`
3. Selecciona "Open with Live Server"

## 🎨 Cambiar Marca en los Demos

Los demos incluyen un panel de control interactivo:

1. **Seleccionar Marca**: Dropdown con 6 opciones
2. **Seleccionar Tema**: Botones Light/Dark
3. **Ver Cambios**: Los estilos se actualizan en tiempo real

### Marcas Disponibles

- **White Label** - Gris neutral
- **Jelpit** - Morado + Verde
- **Davivienda** - Rojo + Gris azulado
- **Cien Cuadras** - Azul + Naranja
- **Doctor Aki** - Verde oliva + Verde salud
- **Seguros Bolívar** - Verde + Amarillo

## 📝 Personalizar los Demos

### Agregar tu Propia Marca

1. **Crear tokens** en `packages/tokens/src/primitives/brands/tu-marca.json`
2. **Build el proyecto**:
   ```bash
   cd ..
   pnpm build:examples
   ```
3. **Los archivos aparecerán automáticamente** en `examples/dist/`
4. **Actualizar dropdown** en los demos:
   ```html
   <select id="brandSelect">
     <option value="tu-marca">Tu Marca</option>
   </select>
   ```

### Modificar los Demos

Los archivos HTML son autocontenidos y fáciles de modificar:

```html
<!-- Cambiar marca inicial -->
<html data-brand="tu-marca" data-theme="light">
  <!-- Cambiar archivos CSS cargados -->
  <link rel="stylesheet" href="dist/rb-tu-marca-light.min.css" />
</html>
```

## 🔧 Troubleshooting

### Los estilos no cargan

**Problema:** Archivos CSS no se encuentran

**Solución:**

```bash
# Rebuild y copiar archivos
cd ..
pnpm build:examples
```

### El JavaScript no funciona

**Problema:** Web Components no inicializan

**Solución:**

- Verifica que `rb-components.min.js` esté en `dist/`
- Abre la consola del navegador (F12) para ver errores
- Usa un servidor HTTP en lugar de `file://`

### Los colores no cambian

**Problema:** Variables CSS no se actualizan

**Solución:**

- Verifica que los atributos `data-brand` y `data-theme` cambien
- Fuerza un refresh: Cmd+Shift+R (Mac) o Ctrl+Shift+R (Windows)
- Verifica que el archivo CSS de la marca exista en `dist/`

## 📊 Performance

### Métricas de los Demos

| Demo                   | Tamaño HTML | CSS     | JS   | Total |
| ---------------------- | ----------- | ------- | ---- | ----- |
| `bootstrap-style.html` | 14.5KB      | ~11KB\* | 30KB | ~55KB |
| `demo.html`            | 9.5KB       | ~11KB\* | 30KB | ~50KB |

_\*CSS = Tokens (4.3KB) + Styles (6.7KB)_

### Tiempos de Carga

Con compresión gzip:

- **First Paint**: <100ms
- **Interactive**: <200ms
- **Total Load**: <300ms

## 🎯 Próximos Pasos

Después de probar los demos:

1. **Integrar en tu proyecto**: Ver [README principal](../README.md)
2. **Customizar tokens**: Ver [tokens/README](../packages/tokens/README.md)
3. **Crear componentes**: Ver [atoms/README](../packages/atoms/README.md)
4. **Usar Storybook**: `pnpm storybook` en la raíz

## 📚 Recursos

- [Documentación Principal](../README.md)
- [Guía de Contribución](../CONTRIBUTING.md)
- [Changelog](../CHANGELOG.md)
- [INDEX.md](./INDEX.md) - Documentación detallada de ejemplos

## 💡 Tips

### Para Desarrolladores

```javascript
// Ver variables CSS activas
const styles = getComputedStyle(document.documentElement);
console.log(styles.getPropertyValue('--rb-color-primary-base'));

// Cambiar marca programáticamente
document.documentElement.setAttribute('data-brand', 'jelpit');
document.getElementById('tokens-css').href = 'dist/rb-jelpit-light.min.css';
```

### Para Diseñadores

- Usa el panel de control en `bootstrap-style.html` para explorar todas las marcas
- Inspecciona elementos (F12) para ver las variables CSS usadas
- Toma screenshots para presentaciones: la UI se adapta automáticamente

### Para Product Managers

- Los demos muestran la flexibilidad multi-marca
- Cambio de marca en tiempo real (<100ms)
- Solo ~11KB gzip por implementación completa

## 📄 Licencia

MIT © Root Block

---

¿Preguntas? Abre un [Issue](../../../issues) o consulta la [documentación](../README.md)
