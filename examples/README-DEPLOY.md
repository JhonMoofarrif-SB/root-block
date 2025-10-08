# 🚀 Deployment Guide - Root Block Design System

Este documento explica cómo está configurado el deployment en Vercel.

## 📋 Arquitectura del Deployment

Este proyecto despliega **una única aplicación** que incluye:

- **Raíz (`/`)**: Storybook (Documentación)
- **Subpath (`/examples/`)**: Demos interactivos

### URLs Resultantes

```
https://root-bloock.vercel.app/              → Storybook
https://root-bloock.vercel.app/examples/     → Demo principal
https://root-bloock.vercel.app/examples/bootstrap-style.html → Demo Bootstrap
```

## 🔧 Configuración de Vercel

### Archivo: `vercel.json` (en la raíz)

```json
{
  "buildCommand": "pnpm run build:all && pnpm --filter @rb/docs run build-storybook && mkdir -p packages/docs/storybook-static/examples && cp -r examples/*.html examples/dist examples/*.md packages/docs/storybook-static/examples/",
  "outputDirectory": "packages/docs/storybook-static",
  "installCommand": "pnpm install",
  "framework": null
}
```

### ¿Qué hace el build?

1. **`pnpm run build:all`**: Compila todos los paquetes (tokens, atoms, molecules, bundle)
2. **`pnpm --filter @rb/docs run build-storybook`**: Genera Storybook estático
3. **`mkdir -p packages/docs/storybook-static/examples`**: Crea carpeta para examples
4. **`cp -r examples/*.html examples/dist examples/*.md packages/docs/storybook-static/examples/`**: Copia los demos

### Configuración en Vercel Dashboard

1. **Root Directory**: Déjalo **vacío** (raíz del proyecto)
2. **Framework Preset**: Other
3. **Build Command**: Se toma de `vercel.json`
4. **Output Directory**: Se toma de `vercel.json`
5. **Install Command**: Se toma de `vercel.json`

## ✅ Ventajas de esta Arquitectura

### 🎯 Un Solo Proyecto
- **Una URL principal**: Fácil de compartir
- **Un deployment por commit**: Más rápido y eficiente
- **Navegación integrada**: Links entre docs y demos

### 📦 Todo Incluido
- Storybook con toda la documentación
- Demos interactivos con cambio de marca
- CSS y JS bundles optimizados

### 💰 Ahorro de Costos
- 1 proyecto en lugar de 2
- Un solo build por commit
- Cache compartido

### 🔄 Navegación Cohesiva
- Desde Storybook → Botón "Ver Demo en Vivo" → `/examples/`
- Desde Examples → Botón "Ver Documentación" → `/`
- Experiencia unificada para el usuario

## 🆚 Alternativas Consideradas

### Opción 1: Dos Proyectos Separados (❌ No recomendado)
```
Proyecto 1: root-bloock-docs.vercel.app     → Storybook
Proyecto 2: root-bloock-examples.vercel.app → Examples
```

**Desventajas:**
- Dos URLs diferentes para compartir
- Dos builds por cada commit
- Navegación desconectada
- Más costos en Vercel

### Opción 2: Un Proyecto con Subpaths (✅ IMPLEMENTADO)
```
root-bloock.vercel.app/          → Storybook
root-bloock.vercel.app/examples/ → Examples
```

**Ventajas:**
- Una URL principal
- Un build por commit
- Navegación integrada
- Más profesional

## 🧪 Testing Local

Para probar localmente cómo se verá en producción:

```bash
# 1. Build completo
pnpm run build:all

# 2. Build Storybook
pnpm --filter @rb/docs run build-storybook

# 3. Copiar examples
mkdir -p packages/docs/storybook-static/examples
cp -r examples/*.html examples/dist examples/*.md packages/docs/storybook-static/examples/

# 4. Servir todo
cd packages/docs/storybook-static
npx serve -p 3000

# Ahora abre:
# http://localhost:3000/         → Storybook
# http://localhost:3000/examples → Demos
```

## 📊 Bundle Sizes en Producción

| Archivo | Tamaño | Gzip | Descripción |
|---------|--------|------|-------------|
| Storybook HTML + Assets | ~500 KB | ~120 KB | Documentación completa |
| `rb-jelpit-light.min.css` | 11.6 KB | 2.5 KB | Tokens + Atoms |
| `rb-davivienda-light.min.css` | 13.5 KB | 2.7 KB | Tokens + Atoms + Overrides |
| `rb-components.min.js` | 29.7 KB | 8.6 KB | Web Components |
| Examples HTML | ~20 KB | ~5 KB | Páginas demo |

**Total para usuario final:**
- **Docs**: ~120 KB (primera carga)
- **Demo**: ~13 KB (CSS + JS)

## 🔍 Troubleshooting

### Error: "No Output Directory named 'dist' found"
**Causa**: Vercel busca `dist` pero Storybook genera `storybook-static`  
**Solución**: Verificar que `outputDirectory` en `vercel.json` apunte a `packages/docs/storybook-static`

### Error: "could not find task build-storybook in project"
**Causa**: El comando se ejecuta en el contexto equivocado  
**Solución**: Usar `pnpm --filter @rb/docs run build-storybook` en lugar de `turbo run build-storybook`

### Links rotos en examples
**Causa**: Las rutas relativas pueden no funcionar correctamente  
**Solución**: Verificar que los archivos se copien correctamente con el comando `cp -r`

## 📝 Mantenimiento

### Agregar un nuevo demo
1. Crear `examples/nuevo-demo.html`
2. Commit y push
3. Vercel automáticamente lo copiará a `/examples/nuevo-demo.html`

### Actualizar Storybook
1. Modificar archivos en `packages/docs/src/`
2. Commit y push
3. Build automático con Vercel

### Cambiar configuración de build
1. Editar `vercel.json` en la raíz
2. Commit y push
3. Vercel usará la nueva configuración

## 🎉 Resultado Final

Una aplicación web cohesiva y profesional con:
- ✅ Documentación completa en Storybook
- ✅ Demos interactivos integrados
- ✅ Navegación fluida entre secciones
- ✅ Una sola URL para compartir
- ✅ Deployment automático en cada commit
- ✅ Build optimizado y rápido

---

**Última actualización**: Octubre 2025  
**Versión**: 1.1.0

