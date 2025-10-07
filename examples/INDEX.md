# 🎨 Root Block Design System - Demos

## 📁 Archivos Disponibles

### 1. **bootstrap-style.html** ⭐ Recomendado

Demo **completo** con toda la documentación y ejemplos.

**Incluye:**

- ✅ Instrucciones de uso detalladas
- ✅ Selector dinámico de marca y tema
- ✅ Todas las variantes del botón
- ✅ Diferentes tamaños y estados
- ✅ Modal Web Component
- ✅ Paleta de colores por marca
- ✅ Variables CSS documentadas

**Abrir:**

```
file:///Users/moofarrif/Documents/sb/front/dev/web-components/root-bloock/examples/bootstrap-style.html
```

### 2. **demo.html**

Demo **simplificado** enfocado en mostrar solo los componentes.

**Incluye:**

- ✅ Selector de marca y tema
- ✅ Botones básicos
- ✅ Version más ligera

**Abrir:**

```
file:///Users/moofarrif/Documents/sb/front/dev/web-components/root-bloock/examples/demo.html
```

## 🚀 Quick Start

### Opción 1: Abrir Directamente

Arrastra cualquier `.html` a tu navegador o haz doble clic.

### Opción 2: Servidor HTTP (Mejor experiencia)

```bash
cd examples
npx serve
```

Luego abre:

- http://localhost:3000/bootstrap-style.html
- http://localhost:3000/demo.html

## 🔄 Actualizar Archivos

Cuando hagas cambios en tokens, atoms o molecules:

```bash
# Desde la raíz del proyecto
pnpm build:examples
```

Esto compila y copia automáticamente todos los archivos necesarios a `examples/dist/`.

## 📦 Archivos en dist/

Los archivos en `examples/dist/` son **generados automáticamente** y NO deben editarse manualmente:

```
examples/dist/
├── rb-styles.min.css              ← Estilos universales (6.7 KB)
├── rb-components.min.js           ← Web Components (30 KB)
└── rb-{marca}-{tema}.min.css      ← 12 tokens files (~4 KB c/u)
```

## 🎯 ¿Cuál demo usar?

| Demo                   | Cuando Usar                                                 |
| ---------------------- | ----------------------------------------------------------- |
| `bootstrap-style.html` | Documentación completa, presentaciones, aprender el sistema |
| `demo.html`            | Testing rápido, desarrollo, versión ligera                  |

## 🔍 Debugging

Si no ves los estilos:

1. **Verifica la consola del navegador** (F12)
2. **Confirma que los archivos existen:**
   ```bash
   ls -la examples/dist/
   ```
3. **Recompila si es necesario:**
   ```bash
   pnpm build:examples
   ```

## ✨ Características

Ambos demos incluyen:

- 🎨 **6 marcas**: White Label, Jelpit, Davivienda, Cien Cuadras, Doctor Aki, Seguros Bolívar
- 🌗 **2 temas**: Light y Dark por cada marca
- 🔄 **Cambio dinámico**: Selecciona marca y tema en tiempo real
- 🎯 **Variables --rb-**: Todos los tokens con prefijo para evitar colisiones

---

**Más info:** Ver [README.md](./README.md) para detalles completos.
