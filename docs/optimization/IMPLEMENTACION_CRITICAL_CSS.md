# 🚀 Implementación: Critical CSS

## 📋 Guía Paso a Paso

### Objetivo:

Reducir **First Paint** y **LCP** cargando solo CSS crítico inicialmente.

---

## 1️⃣ Crear Builder para Critical CSS

### Archivo: `packages/bundle/src/critical-builder.ts`

```typescript
import { promises as fs } from 'fs';
import path from 'path';
import { BRANDS, THEMES } from '@seguros-bolivar-ui/tokens';
import CleanCSS from 'clean-css';

/**
 * Definir qué componentes son críticos
 */
const CRITICAL_COMPONENTS = [
  'button', // Botones visibles en hero
  'input', // Form en hero
] as const;

const DEFERRED_COMPONENTS = [
  'alert', // Solo se ve después
  'select', // Lazy load
  'toggle', // Lazy load
  'textArea', // Lazy load
] as const;

interface BuildConfig {
  brand: string;
  theme: string;
  minify?: boolean;
  compress?: boolean;
}

/**
 * Leer archivo CSS
 */
async function readCSS(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    console.warn(`⚠️  File not found: ${filePath}`);
    return '';
  }
}

/**
 * Minificar CSS
 */
function minifyCSS(css: string): string {
  const result = new CleanCSS({
    level: {
      1: {
        all: true,
        specialComments: 0,
      },
      2: {
        all: true,
        restructureRules: true,
      },
    },
  }).minify(css);

  if (result.errors.length > 0) {
    console.error('❌ CleanCSS errors:', result.errors);
  }

  return result.styles;
}

/**
 * Construir Critical CSS
 */
export async function buildCritical(config: BuildConfig): Promise<string> {
  const { brand, theme, minify = true } = config;

  console.log(`\n🎯 Building Critical CSS for ${brand}-${theme}...`);

  const parts: string[] = [];

  // 1. Tokens (SIEMPRE crítico)
  console.log('  📦 Loading tokens...');
  const tokens = await readCSS(
    path.join(process.cwd(), `packages/tokens/dist/${brand}-${theme}.css`)
  );
  parts.push(tokens);

  // 2. Reset/Base CSS (si existe)
  const reset = await readCSS(path.join(process.cwd(), 'packages/atoms/dist/reset.css'));
  if (reset) parts.push(reset);

  // 3. Componentes críticos
  for (const component of CRITICAL_COMPONENTS) {
    console.log(`  🧱 Loading ${component}...`);
    const css = await readCSS(path.join(process.cwd(), `packages/atoms/dist/${component}.css`));
    parts.push(css);
  }

  // 4. Overrides críticos (solo button e input)
  console.log('  🎨 Loading overrides...');
  for (const component of CRITICAL_COMPONENTS) {
    const override = await readCSS(
      path.join(process.cwd(), `packages/brand-overrides/dist/${brand}/${component}.css`)
    );
    if (override) parts.push(override);
  }

  // 5. Combinar
  let critical = parts.join('\n\n');

  // 6. Minificar si se solicita
  if (minify) {
    console.log('  🗜️  Minifying...');
    critical = minifyCSS(critical);
  }

  console.log(`  ✅ Critical CSS built: ${(critical.length / 1024).toFixed(1)}KB`);

  return critical;
}

/**
 * Construir Deferred CSS
 */
export async function buildDeferred(config: BuildConfig): Promise<string> {
  const { brand, theme, minify = true } = config;

  console.log(`\n⏳ Building Deferred CSS for ${brand}-${theme}...`);

  const parts: string[] = [];

  // Solo componentes no críticos
  for (const component of DEFERRED_COMPONENTS) {
    console.log(`  🧱 Loading ${component}...`);
    const css = await readCSS(path.join(process.cwd(), `packages/atoms/dist/${component}.css`));
    parts.push(css);

    // Overrides
    const override = await readCSS(
      path.join(process.cwd(), `packages/brand-overrides/dist/${brand}/${component}.css`)
    );
    if (override) parts.push(override);
  }

  let deferred = parts.join('\n\n');

  if (minify) {
    console.log('  🗜️  Minifying...');
    deferred = minifyCSS(deferred);
  }

  console.log(`  ✅ Deferred CSS built: ${(deferred.length / 1024).toFixed(1)}KB`);

  return deferred;
}

/**
 * Build completo: Critical + Deferred
 */
export async function buildAll(config: BuildConfig) {
  const { brand, theme, compress = true } = config;

  const critical = await buildCritical(config);
  const deferred = await buildDeferred(config);

  // Crear directorio dist si no existe
  const distDir = path.join(process.cwd(), 'packages/bundle/dist/critical');
  await fs.mkdir(distDir, { recursive: true });

  // Guardar Critical CSS
  const criticalPath = path.join(distDir, `sb-ui-${brand}-${theme}.critical.min.css`);
  await fs.writeFile(criticalPath, critical);
  console.log(`\n📄 Saved: ${criticalPath}`);

  // Guardar Deferred CSS
  const deferredPath = path.join(distDir, `sb-ui-${brand}-${theme}.deferred.min.css`);
  await fs.writeFile(deferredPath, deferred);
  console.log(`📄 Saved: ${deferredPath}`);

  // Comprimir si se solicita
  if (compress) {
    const zlib = await import('zlib');
    const { promisify } = await import('util');
    const gzip = promisify(zlib.gzip);
    const brotli = promisify(zlib.brotliCompress);

    // Gzip
    const criticalGz = await gzip(critical);
    await fs.writeFile(`${criticalPath}.gz`, criticalGz);

    const deferredGz = await gzip(deferred);
    await fs.writeFile(`${deferredPath}.gz`, deferredGz);

    // Brotli
    const criticalBr = await brotli(critical);
    await fs.writeFile(`${criticalPath}.br`, criticalBr);

    const deferredBr = await brotli(deferred);
    await fs.writeFile(`${deferredPath}.br`, deferredBr);

    console.log(`\n📊 Sizes:`);
    console.log(`  Critical: ${critical.length} bytes`);
    console.log(`  Critical (gzip): ${criticalGz.length} bytes`);
    console.log(`  Critical (brotli): ${criticalBr.length} bytes`);
    console.log(`  Deferred: ${deferred.length} bytes`);
    console.log(`  Deferred (gzip): ${deferredGz.length} bytes`);
    console.log(`  Deferred (brotli): ${deferredBr.length} bytes`);
  }

  return {
    critical: {
      css: critical,
      size: critical.length,
      path: criticalPath,
    },
    deferred: {
      css: deferred,
      size: deferred.length,
      path: deferredPath,
    },
  };
}

/**
 * CLI para construir todos los brands/themes
 */
async function main() {
  console.log('🚀 Building Critical CSS for all brands...\n');

  for (const brand of BRANDS) {
    for (const theme of THEMES) {
      await buildAll({
        brand,
        theme,
        minify: true,
        compress: true,
      });
    }
  }

  console.log('\n✨ All critical CSS built successfully!');
}

// Ejecutar si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export default { buildCritical, buildDeferred, buildAll };
```

---

## 2️⃣ Actualizar package.json

```json
{
  "name": "@seguros-bolivar-ui/bundle",
  "scripts": {
    "build": "tsx src/builder.ts",
    "build:critical": "tsx src/critical-builder.ts",
    "build:all": "npm run build && npm run build:critical"
  },
  "devDependencies": {
    "clean-css": "^5.3.2"
  }
}
```

---

## 3️⃣ HTML: Cargar Critical CSS

### Opción A: Inline Critical (RECOMENDADO)

**Archivo:** `examples/critical-css.html`

```html
<!DOCTYPE html>
<html lang="es" data-brand="seguros-bolivar" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Critical CSS Example</title>

    <!-- CRITICAL CSS INLINE (8KB) -->
    <style>
      /* Inline critical CSS aquí */
      <?php
        // PHP example - puedes usar cualquier lenguaje server-side
        echo file_get_contents('dist/critical/rb-seguros-bolivar-light.critical.min.css');
      ?>
    </style>

    <!-- DEFERRED CSS LAZY LOAD -->
    <link
      rel="preload"
      href="dist/critical/rb-seguros-bolivar-light.deferred.min.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <noscript>
      <link rel="stylesheet" href="dist/critical/rb-seguros-bolivar-light.deferred.min.css" />
    </noscript>

    <script>
      // Polyfill para navegadores antiguos
      !(function (e) {
        'use strict';
        var t = function (t, n, r) {
          function o(e) {
            return i.body
              ? e()
              : void setTimeout(function () {
                  o(e);
                });
          }
          function a() {
            (d.addEventListener && d.removeEventListener('load', a), (d.media = r || 'all'));
          }
          var l,
            i = e.document,
            d = i.createElement('link');
          if (n) l = n;
          else {
            var s = (i.body || i.getElementsByTagName('head')[0]).childNodes;
            l = s[s.length - 1];
          }
          var u = i.styleSheets;
          ((d.rel = 'stylesheet'),
            (d.href = t),
            (d.media = 'only x'),
            o(function () {
              l.parentNode.insertBefore(d, n ? l : l.nextSibling);
            }));
          var f = function (e) {
            for (var t = d.href, n = u.length; n--; ) if (u[n].href === t) return e();
            setTimeout(function () {
              f(e);
            });
          };
          return (
            d.addEventListener && d.addEventListener('load', a),
            (d.onloadcssdefined = f),
            f(a),
            d
          );
        };
        'undefined' != typeof exports ? (exports.loadCSS = t) : (e.loadCSS = t);
      })('undefined' != typeof global ? global : this);
    </script>
  </head>
  <body>
    <!-- Tu contenido aquí -->
    <button class="rb-button rb-button--primary rb-button--fill">¡Hola Mundo!</button>
  </body>
</html>
```

---

### Opción B: Link External (Más simple, menos optimal)

```html
<!DOCTYPE html>
<html lang="es" data-brand="seguros-bolivar" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Critical CSS Example</title>

    <!-- CRITICAL CSS (preload) -->
    <link
      rel="preload"
      href="https://cdn.example.com/rb-seguros-bolivar-light.critical.min.css"
      as="style"
    />
    <link
      rel="stylesheet"
      href="https://cdn.example.com/rb-seguros-bolivar-light.critical.min.css"
    />

    <!-- DEFERRED CSS (lazy load) -->
    <link rel="prefetch" href="https://cdn.example.com/rb-seguros-bolivar-light.deferred.min.css" />

    <script>
      // Cargar deferred cuando termine de cargar la página
      window.addEventListener('load', () => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.example.com/rb-seguros-bolivar-light.deferred.min.css';
        document.head.appendChild(link);
      });
    </script>
  </head>
  <body>
    <!-- Tu contenido aquí -->
  </body>
</html>
```

---

## 4️⃣ Configuración de Servidor

### Nginx

```nginx
server {
  listen 443 ssl http2;
  server_name example.com;

  # Brotli compression
  brotli on;
  brotli_static on;
  brotli_types text/css application/javascript;
  brotli_comp_level 6;

  # Gzip fallback
  gzip on;
  gzip_types text/css application/javascript;
  gzip_comp_level 6;

  # Cache CSS
  location ~* \.critical\.min\.css$ {
    # Critical CSS: cache corto (puede cambiar)
    expires 1d;
    add_header Cache-Control "public, must-revalidate";
  }

  location ~* \.deferred\.min\.css$ {
    # Deferred CSS: cache largo (no cambia seguido)
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  # Preload critical CSS
  location = /index.html {
    add_header Link "</rb-seguros-bolivar-light.critical.min.css>; rel=preload; as=style" always;
  }
}
```

---

### Node.js / Express

```javascript
const express = require('express');
const compression = require('compression');
const shrinkRay = require('shrink-ray-current');
const fs = require('fs');
const path = require('path');

const app = express();

// Brotli + Gzip compression
app.use(shrinkRay());

// Servir archivos estáticos
app.use(
  express.static('dist', {
    maxAge: '1y',
    immutable: true,
  })
);

// Inline critical CSS en HTML
app.get('/', (req, res) => {
  const brand = req.query.brand || 'seguros-bolivar';
  const theme = req.query.theme || 'light';

  // Leer critical CSS
  const criticalPath = path.join(__dirname, `dist/critical/rb-${brand}-${theme}.critical.min.css`);
  const criticalCSS = fs.readFileSync(criticalPath, 'utf-8');

  // Renderizar HTML con critical CSS inline
  const html = `
    <!DOCTYPE html>
    <html lang="es" data-brand="${brand}" data-theme="${theme}">
    <head>
      <meta charset="UTF-8">
      <title>Critical CSS Example</title>
      
      <!-- CRITICAL CSS INLINE -->
      <style>${criticalCSS}</style>
      
      <!-- DEFERRED CSS -->
      <link rel="preload" 
            href="/critical/rb-${brand}-${theme}.deferred.min.css" 
            as="style" 
            onload="this.onload=null;this.rel='stylesheet'">
    </head>
    <body>
      <button class="rb-button rb-button--primary rb-button--fill">
        ¡Hola Mundo!
      </button>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
```

---

## 5️⃣ Testing & Benchmarks

### Script de Testing

**Archivo:** `scripts/test-critical-css.ts`

```typescript
import Lighthouse from 'lighthouse';
import { chromium } from 'playwright';

async function testCriticalCSS() {
  console.log('🧪 Testing Critical CSS implementation...\n');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Test 1: Con Critical CSS
  console.log('📊 Test 1: WITH Critical CSS');
  await page.goto('http://localhost:3000/with-critical.html');

  const perfWithCritical = await page.evaluate(() => {
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find((p) => p.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0];

    return {
      fcp: fcp?.startTime,
      lcp: lcp?.startTime,
    };
  });

  console.log(`  FCP: ${perfWithCritical.fcp}ms`);
  console.log(`  LCP: ${perfWithCritical.lcp}ms\n`);

  // Test 2: Sin Critical CSS (full bundle)
  console.log('📊 Test 2: WITHOUT Critical CSS (full bundle)');
  await page.goto('http://localhost:3000/without-critical.html');

  const perfWithoutCritical = await page.evaluate(() => {
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find((p) => p.name === 'first-contentful-paint');
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0];

    return {
      fcp: fcp?.startTime,
      lcp: lcp?.startTime,
    };
  });

  console.log(`  FCP: ${perfWithoutCritical.fcp}ms`);
  console.log(`  LCP: ${perfWithoutCritical.lcp}ms\n`);

  // Comparación
  const fcpImprovement = perfWithoutCritical.fcp - perfWithCritical.fcp;
  const lcpImprovement = perfWithoutCritical.lcp - perfWithCritical.lcp;

  console.log('📈 IMPROVEMENT:');
  console.log(
    `  FCP: ${fcpImprovement > 0 ? '↓' : '↑'} ${Math.abs(fcpImprovement).toFixed(0)}ms (${((fcpImprovement / perfWithoutCritical.fcp) * 100).toFixed(1)}%)`
  );
  console.log(
    `  LCP: ${lcpImprovement > 0 ? '↓' : '↑'} ${Math.abs(lcpImprovement).toFixed(0)}ms (${((lcpImprovement / perfWithoutCritical.lcp) * 100).toFixed(1)}%)`
  );

  await browser.close();
}

testCriticalCSS().catch(console.error);
```

---

## 📊 Resultados Esperados

### Antes (Full Bundle):

```
Bundle size:  99KB
Gzip:         12KB
FCP:          1,200ms
LCP:          1,800ms
```

### Después (Critical CSS):

```
Critical:     25KB inline
Deferred:     60KB lazy
Gzip:         8KB (critical) + 6KB (deferred)
FCP:          700ms  (↓ 500ms, 42% mejor)
LCP:          1,200ms (↓ 600ms, 33% mejor)
```

---

## ✅ Checklist

- [ ] Crear `critical-builder.ts`
- [ ] Actualizar `package.json` scripts
- [ ] Build critical CSS para todas las marcas
- [ ] Actualizar HTML examples con inline critical
- [ ] Configurar servidor (Brotli, cache)
- [ ] Testing con Lighthouse
- [ ] Documentar en README

---

## 🎯 Próximos Pasos

1. ✅ **Implementar esta guía**
2. ✅ **Medir con Lighthouse**
3. ✅ **Comparar antes vs después**
4. ✅ **Ajustar qué es "crítico"** según tu app
5. ✅ **Deploy a producción**

---

**¿Listo para implementar?** 🚀
