# ✅ Pre-Commit Checklist - Root Block Design System

## 📋 Antes de hacer el primer commit

### 1. ✅ Archivos Esenciales (COMPLETADO)
- [x] `.gitignore` configurado
- [x] `LICENSE` creado (MIT)
- [x] `README.md` completo con badges
- [x] `CONTRIBUTING.md` con guía de contribución
- [x] `CHANGELOG.md` presente
- [x] `.github/workflows/ci.yml` para CI/CD

### 2. 🔍 Verificar antes de subir

```bash
# Verificar que todo compila
pnpm build

# Verificar linting
pnpm lint

# Verificar tests (si los tienes)
pnpm test

# Verificar que los ejemplos funcionan
pnpm build:examples
open examples/bootstrap-style.html
```

### 3. 🔒 Seguridad

```bash
# NO subir archivos sensibles
# Verificar .gitignore incluye:
- [ ] node_modules/
- [ ] dist/ (si es temporal)
- [ ] .env
- [ ] .env.local
- [ ] *.log
- [ ] .DS_Store
```

### 4. 📦 package.json

Actualizar información del repositorio:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/tu-usuario/root-bloock.git"
  },
  "bugs": {
    "url": "https://github.com/tu-usuario/root-bloock/issues"
  },
  "homepage": "https://github.com/tu-usuario/root-bloock#readme"
}
```

### 5. 📸 Screenshots y Assets

```bash
# Crear carpeta para imágenes
mkdir -p docs/images

# Tomar screenshots de los demos
# Guardar en: docs/images/demo-screenshot.png
```

### 6. 🌐 GitHub Pages (Opcional)

Para publicar los demos:

```bash
# Crear rama gh-pages
git checkout --orphan gh-pages

# Copiar ejemplos
cp -r examples/* .

# Commit y push
git add .
git commit -m "docs: initial gh-pages deploy"
git push origin gh-pages

# Volver a main
git checkout main
```

### 7. 📝 Actualizar URLs

En `README.md` y `package.json`, reemplazar:
- `tu-usuario` → tu usuario real de GitHub
- `support@rootblock.com` → email real
- URLs de demo → URLs reales de GitHub Pages

### 8. 🏷️ Tags y Releases

Después del primer commit:

```bash
# Crear tag inicial
git tag -a v1.0.0 -m "Release v1.0.0: Initial release"
git push origin v1.0.0

# En GitHub, crear Release desde el tag
```

### 9. 📊 Badges Adicionales (Opcional)

Considerar agregar:
- Code coverage (Codecov)
- Dependencies status (David DM)
- Bundle size (Bundlephobia)
- Code quality (CodeClimate, SonarCloud)

### 10. 🚀 Primer Commit

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "feat: initial commit - Root Block Design System

- Multi-brand design system with 6 brands
- 2 themes per brand (light/dark)
- CSS tokens and Web Components
- Storybook documentation
- Examples and demos"

# Crear repo en GitHub y conectar
git remote add origin https://github.com/tu-usuario/root-bloock.git
git branch -M main
git push -u origin main

# Push tags
git push --tags
```

## ✨ Después de subir

1. **Configurar GitHub Pages**: Settings → Pages → Source: gh-pages
2. **Habilitar Issues**: Settings → Features → Issues
3. **Agregar Topics**: Settings → Topics: `design-system`, `multi-brand`, `web-components`, `lit`, `css-variables`
4. **Agregar descripción**: En la página principal del repo
5. **Crear primer Issue**: "Welcome! 👋"
6. **Configurar Branch Protection**: Settings → Branches → Add rule para `main`

## 🎯 Recomendaciones Finales

- ✅ Usa **Conventional Commits** desde el inicio
- ✅ Configura **Dependabot** para actualizaciones automáticas
- ✅ Añade **Code Owners** (`.github/CODEOWNERS`)
- ✅ Configura **Issue Templates** (`.github/ISSUE_TEMPLATE/`)
- ✅ Configura **PR Template** (`.github/PULL_REQUEST_TEMPLATE.md`)
- ✅ Considera usar **Changesets** para versionado automático

---

¡Listo para compartir con el mundo! 🚀
