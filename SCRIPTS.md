# 📜 Guía de Scripts - Root Block

Scripts simplificados. Solo necesitas saber estos 4:

---

## 🎯 **Los 4 Comandos Que Necesitas**

### 1️⃣ **Compilar Todo**

```bash
pnpm run build
```

- Limpia archivos anteriores
- Compila tokens, atoms, molecules
- Genera bundles con overrides
- Copia todo a `examples/` y `docs/`
- **Úsalo cuando:** hagas cambios en cualquier parte

---

### 2️⃣ **Ver el Demo**

```bash
pnpm run demo
```

- Compila todo (si es necesario)
- Abre el demo en http://localhost:3000
- **Úsalo cuando:** quieras ver los cambios en el navegador

---

### 3️⃣ **Modo Desarrollo (Watch)**

```bash
pnpm run dev
```

- Recompila automáticamente cuando cambias archivos
- **Úsalo cuando:** estés trabajando en CSS o overrides
- **Nota:** Necesitas refrescar el navegador manualmente

---

### 4️⃣ **Storybook (Documentación)**

```bash
pnpm run storybook
```

- Compila todo
- Abre Storybook en http://localhost:6007
- **Úsalo cuando:** quieras ver todos los componentes documentados

---

## 🧹 **Extra: Limpiar Todo**

```bash
pnpm run clean
```

- Borra todos los archivos compilados
- **Úsalo cuando:** algo salió mal y quieres empezar de cero

---

## 📊 **Resumen Visual**

```
pnpm run build    → Compila todo
pnpm run demo     → Abre el demo
pnpm run dev      → Modo watch
pnpm run storybook → Documentación
pnpm run clean    → Limpia todo
```

---

## ❓ **Preguntas Frecuentes**

### ¿Qué hago después de clonar el repo?

```bash
pnpm install
pnpm run build
pnpm run demo
```

### ¿Cómo veo mis cambios?

```bash
# Opción 1: Compilar y ver demo
pnpm run build
pnpm run demo

# Opción 2: Modo watch
pnpm run dev
# Luego abre examples/demo.html en el navegador
```

### ¿Cómo agrego un override para Davivienda?

```bash
# 1. Edita packages/brand-overrides/src/davivienda/button.css
# 2. Compila
pnpm run build
# 3. Ve los cambios
pnpm run demo
```

### ¿Qué hace cada paso del build?

```bash
pnpm run build
```

Internamente hace:

1. `clean` → Borra archivos viejos
2. `tokens` → Genera CSS con colores/variables
3. `atoms` → Copia CSS de botones
4. `molecules` → Compila Web Components
5. `bundle` → Combina todo + overrides + minifica
6. `copy` → Copia a examples/ y docs/

**Pero tú solo necesitas ejecutar `pnpm run build`** 🎉

---

## 🎨 **Flujo de Trabajo Típico**

### Cambiar estilos de Davivienda:

```bash
# 1. Abre el archivo
code packages/brand-overrides/src/davivienda/button.css

# 2. Haz tus cambios

# 3. Compila
pnpm run build

# 4. Ver resultado
pnpm run demo
```

### Agregar nuevo color a Jelpit:

```bash
# 1. Edita
code packages/tokens/src/brands/jelpit.ts

# 2. Compila
pnpm run build

# 3. Ver resultado
pnpm run demo
```

---

## 🚨 **Si Algo Sale Mal**

```bash
# El fix universal:
pnpm run clean
pnpm install
pnpm run build
pnpm run demo
```

Si aún no funciona:

- En el navegador: `Cmd + Shift + R` (Mac) o `Ctrl + Shift + R` (Windows)
- Esto hace un "hard refresh" que limpia la caché

---

**Eso es todo. Solo 4 comandos principales.** 🎉

¿Necesitas más detalles? → [BUILD.md](./BUILD.md)
