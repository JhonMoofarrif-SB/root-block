# 🤝 Contributing to Root Block Design System

Gracias por tu interés en contribuir al Root Block Design System!

## 📋 Guía Rápida

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add: amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 🏗️ Setup de Desarrollo

```bash
# Clonar el repo
git clone https://github.com/tu-usuario/root-bloock.git
cd root-bloock

# Instalar dependencias
pnpm install

# Build inicial
pnpm build

# Modo desarrollo
pnpm dev
```

## 📁 Estructura del Monorepo

```
packages/
├── tokens/      # Design tokens (colores, tipografía, etc.)
├── atoms/       # Componentes CSS simples
├── molecules/   # Web Components complejos (Lit)
├── bundle/      # Generador de bundles CDN
└── docs/        # Storybook

examples/        # Demos y ejemplos de uso
```

## 🎨 Agregar una Nueva Marca

1. **Crear tokens de la marca:**
   - Añade `packages/tokens/src/primitives/brands/tu-marca.json`
   - Define colores, tipografía, sombras

2. **Actualizar builder:**
   - Añade el nombre de la marca a `BRANDS` en `packages/tokens/src/builder.ts`

3. **Build y verificar:**
   ```bash
   pnpm build
   # Verifica que se generó: packages/tokens/dist/tu-marca-light.css
   ```

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Watch mode
pnpm test:watch
```

## 📝 Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Bug fix
- `docs:` Cambios en documentación
- `style:` Formato, espacios (no afecta código)
- `refactor:` Refactorización de código
- `test:` Agregar o modificar tests
- `chore:` Tareas de mantenimiento

Ejemplos:

```
feat(tokens): add new brand coomeva
fix(button): correct hover state color
docs(readme): update installation steps
```

## 🔍 Code Review

- Asegúrate de que el código pase el linter: `pnpm lint`
- Formatea el código: `pnpm format`
- Todos los tests deben pasar: `pnpm test`
- Agrega tests para nuevas funcionalidades
- Actualiza documentación si es necesario

## 🎯 Prioridades

1. **Performance**: Los bundles deben ser pequeños
2. **Accesibilidad**: Cumplir WCAG 2.1 AA
3. **DX**: Developer Experience es clave
4. **Documentación**: Todo cambio debe estar documentado

## ❓ Preguntas

Si tienes dudas, abre un [Issue](https://github.com/tu-usuario/root-bloock/issues) o contacta al equipo.

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones serán licenciadas bajo MIT License.
