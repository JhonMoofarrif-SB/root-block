const fs = require('fs').promises;
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const { build } = require('esbuild');

/**
 * Build script para generar el bundle de Form.io
 */
class FormIOBundleBuilder {
  constructor() {
    this.rootDir = path.resolve(__dirname, '..');
    this.srcDir = path.join(this.rootDir, 'src');
    this.distDir = path.join(this.rootDir, 'dist');
    this.atomsDir = path.resolve(this.rootDir, '../packages/atoms/src');
    this.tokensDir = path.resolve(this.rootDir, '../packages/tokens/dist');
  }

  /**
   * Ejecuta el build completo
   */
  async build() {
    console.log('🚀 Building Seguros Bolívar UI Form.io Bundle...\n');

    try {
      // Limpiar directorio dist
      await this.cleanDist();

      // Crear directorio dist
      await fs.mkdir(this.distDir, { recursive: true });

      // Build TypeScript
      await this.buildTypeScript();

      // Build CSS bundles
      await this.buildCSSBundles();

      // Build JavaScript bundles
      await this.buildJavaScriptBundles();

      // Copiar archivos adicionales
      await this.copyAssets();

      console.log('✨ Build completed successfully!\n');
      await this.showBuildSummary();
    } catch (error) {
      console.error('❌ Build failed:', error);
      process.exit(1);
    }
  }

  /**
   * Limpia el directorio dist
   */
  async cleanDist() {
    try {
      await fs.rm(this.distDir, { recursive: true, force: true });
      console.log('🧹 Cleaned dist directory');
    } catch (error) {
      // Directorio no existe, continuar
    }
  }

  /**
   * Build TypeScript files
   */
  async buildTypeScript() {
    console.log('📦 Building TypeScript...');

    // TypeScript se compila usando tsc (definido en package.json scripts)
    const { spawn } = require('child_process');

    return new Promise((resolve, reject) => {
      const tsc = spawn('npx', ['tsc'], {
        cwd: this.rootDir,
        stdio: 'inherit',
      });

      tsc.on('close', (code) => {
        if (code === 0) {
          console.log('✅ TypeScript build completed');
          resolve();
        } else {
          reject(new Error(`TypeScript build failed with code ${code}`));
        }
      });
    });
  }

  /**
   * Build CSS bundles para diferentes marcas
   */
  async buildCSSBundles() {
    console.log('🎨 Building CSS bundles...');

    const brands = [
      'white-label',
      'jelpit',
      'davivienda',
      'cien-cuadras',
      'doctor-aki',
      'seguros-bolivar',
    ];

    const themes = ['light', 'dark'];

    for (const brand of brands) {
      for (const theme of themes) {
        await this.buildBrandCSS(brand, theme);
      }
    }

    // Build CSS universal (sin tokens)
    await this.buildUniversalCSS();
  }

  /**
   * Build CSS para una marca específica
   */
  async buildBrandCSS(brand, theme) {
    const outputFile = `sb-ui-formio-${brand}-${theme}.min.css`;
    const outputPath = path.join(this.distDir, outputFile);

    try {
      // Leer archivos CSS
      const buttonCSS = await this.readFile(path.join(this.atomsDir, 'button.css'));
      const formioCSS = await this.readFile(
        path.join(this.srcDir, 'styles/formio-integration.css')
      );
      const tokensCSS = await this.readTokensCSS(brand, theme);

      // Combinar CSS
      const combinedCSS = [
        '/* Seguros Bolívar UI Design System - Form.io Bundle */',
        `/* Brand: ${brand} | Theme: ${theme} */`,
        '',
        '/* === DESIGN TOKENS === */',
        tokensCSS,
        '',
        '/* === BUTTON COMPONENT === */',
        buttonCSS,
        '',
        '/* === FORM.IO INTEGRATION === */',
        formioCSS,
      ].join('\n');

      // Procesar con PostCSS y minificar
      const result = await postcss([
        cssnano({
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              minifySelectors: true,
            },
          ],
        }),
      ]).process(combinedCSS, { from: undefined });

      // Escribir archivo
      await fs.writeFile(outputPath, result.css);

      console.log(`  ✅ ${outputFile} (${this.formatBytes(result.css.length)})`);
    } catch (error) {
      console.error(`  ❌ Failed to build ${outputFile}:`, error.message);
    }
  }

  /**
   * Build CSS universal (componentes sin tokens)
   */
  async buildUniversalCSS() {
    const outputFile = 'sb-ui-formio.min.css';
    const outputPath = path.join(this.distDir, outputFile);

    try {
      // Leer archivos CSS (sin tokens)
      const buttonCSS = await this.readFile(path.join(this.atomsDir, 'button.css'));
      const formioCSS = await this.readFile(
        path.join(this.srcDir, 'styles/formio-integration.css')
      );

      // Combinar CSS
      const combinedCSS = [
        '/* Seguros Bolívar UI Design System - Form.io Universal Bundle */',
        '/* Use with separate token files for theming */',
        '',
        '/* === BUTTON COMPONENT === */',
        buttonCSS,
        '',
        '/* === FORM.IO INTEGRATION === */',
        formioCSS,
      ].join('\n');

      // Procesar con PostCSS y minificar
      const result = await postcss([
        cssnano({
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              minifySelectors: true,
            },
          ],
        }),
      ]).process(combinedCSS, { from: undefined });

      // Escribir archivo
      await fs.writeFile(outputPath, result.css);

      console.log(`  ✅ ${outputFile} (${this.formatBytes(result.css.length)})`);
    } catch (error) {
      console.error(`  ❌ Failed to build ${outputFile}:`, error.message);
    }
  }

  /**
   * Lee los tokens CSS para una marca y tema
   */
  async readTokensCSS(brand, theme) {
    const tokenFile = `${brand}-${theme}.css`;
    const tokenPath = path.join(this.tokensDir, tokenFile);

    try {
      return await this.readFile(tokenPath);
    } catch (error) {
      console.warn(`  ⚠️  Token file not found: ${tokenFile}, using fallback`);
      return '/* No tokens available for this brand/theme combination */';
    }
  }

  /**
   * Build JavaScript bundles
   */
  async buildJavaScriptBundles() {
    console.log('📦 Building JavaScript bundles...');

    // Bundle principal
    await this.buildMainJSBundle();

    // Bundle minificado
    await this.buildMinifiedJSBundle();
  }

  /**
   * Build bundle JavaScript principal
   */
  async buildMainJSBundle() {
    try {
      await build({
        entryPoints: [path.join(this.srcDir, 'index.ts')],
        bundle: true,
        outfile: path.join(this.distDir, 'sb-ui-formio.bundle.js'),
        format: 'iife',
        globalName: 'SbUiFormIO',
        platform: 'browser',
        target: 'es2017',
        sourcemap: true,
        external: ['formiojs'], // Form.io será cargado externamente
      });

      console.log('  ✅ sb-ui-formio.bundle.js');
    } catch (error) {
      console.error('  ❌ Failed to build main JS bundle:', error);
    }
  }

  /**
   * Build bundle JavaScript minificado
   */
  async buildMinifiedJSBundle() {
    try {
      await build({
        entryPoints: [path.join(this.srcDir, 'index.ts')],
        bundle: true,
        outfile: path.join(this.distDir, 'sb-ui-formio.min.js'),
        format: 'iife',
        globalName: 'SbUiFormIO',
        platform: 'browser',
        target: 'es2017',
        minify: true,
        sourcemap: true,
        external: ['formiojs'], // Form.io será cargado externamente
      });

      console.log('  ✅ sb-ui-formio.min.js');
    } catch (error) {
      console.error('  ❌ Failed to build minified JS bundle:', error);
    }
  }

  /**
   * Build bundle completo (JS + CSS)
   */
  async buildCompleteBundle() {
    console.log('📦 Building complete bundle...');

    const brands = ['white-label', 'davivienda', 'jelpit'];

    for (const brand of brands) {
      await this.buildCompleteBrandBundle(brand);
    }
  }

  /**
   * Build bundle completo para una marca
   */
  async buildCompleteBrandBundle(brand) {
    const outputFile = `sb-ui-formio-complete-${brand}.bundle.js`;
    const outputPath = path.join(this.distDir, outputFile);

    try {
      // Leer JS bundle
      const jsBundle = await this.readFile(path.join(this.distDir, 'sb-ui-formio.min.js'));

      // Leer CSS para light theme
      const cssBundle = await this.readFile(
        path.join(this.distDir, `sb-ui-formio-${brand}-light.min.css`)
      );

      // Crear bundle completo que inyecta CSS
      const completeBundle = `
/* Seguros Bolívar UI Form.io Complete Bundle - ${brand} */
(function() {
  // Inyectar CSS
  var css = ${JSON.stringify(cssBundle)};
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css;
  document.head.appendChild(style);

  // Cargar JavaScript
  ${jsBundle}
})();
`;

      await fs.writeFile(outputPath, completeBundle);
      console.log(`  ✅ ${outputFile} (${this.formatBytes(completeBundle.length)})`);
    } catch (error) {
      console.error(`  ❌ Failed to build complete bundle for ${brand}:`, error);
    }
  }

  /**
   * Copia archivos adicionales
   */
  async copyAssets() {
    console.log('📁 Copying assets...');

    // Crear archivo de instrucciones
    await this.createInstructions();
  }

  /**
   * Crea archivo de instrucciones
   */
  async createInstructions() {
    const instructions = `# Seguros Bolívar UI Form.io Integration

## Archivos Generados

### CSS Bundles (por marca y tema)
- sb-ui-formio-{brand}-{theme}.min.css - Bundle completo con tokens
- sb-ui-formio.min.css - Bundle universal sin tokens

### JavaScript Bundles
- sb-ui-formio.bundle.js - Bundle desarrollo con sourcemap
- sb-ui-formio.min.js - Bundle minificado para producción

### Complete Bundles
- sb-ui-formio-complete-{brand}.bundle.js - JS + CSS en un archivo

## Uso Básico

### Opción 1: CSS + JS separados
\`\`\`html
<!-- Cargar Form.io primero -->
<script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>

<!-- Cargar estilos de Seguros Bolívar UI -->
<link rel="stylesheet" href="sb-ui-formio-davivienda-light.min.css">

<!-- Cargar componentes de Seguros Bolívar UI -->
<script src="sb-ui-formio.min.js"></script>
\`\`\`

### Opción 2: Bundle completo
\`\`\`html
<!-- Cargar Form.io primero -->
<script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>

<!-- Bundle completo (CSS + JS) -->
<script src="sb-ui-formio-complete-davivienda.bundle.js"></script>
\`\`\`

## Uso en Form.io

Los componentes se registran automáticamente al cargar el script.
Usa el tipo 'button' en tu formulario Form.io.

\`\`\`javascript
const form = {
  components: [{
    type: 'button',
    key: 'submitButton',
    label: 'Enviar',
    variant: 'primary',
    styleVariant: 'fill',
    size: 'large',
    action: 'submit'
  }]
};
\`\`\`
`;

    await fs.writeFile(path.join(this.distDir, 'INSTRUCTIONS.md'), instructions);
    console.log('  ✅ INSTRUCTIONS.md');
  }

  /**
   * Muestra resumen del build
   */
  async showBuildSummary() {
    const files = await fs.readdir(this.distDir);
    const stats = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(this.distDir, file);
        const stat = await fs.stat(filePath);
        return { file, size: stat.size };
      })
    );

    console.log('📊 Build Summary:');
    console.log('================');

    stats.forEach(({ file, size }) => {
      console.log(`  ${file.padEnd(40)} ${this.formatBytes(size)}`);
    });

    const totalSize = stats.reduce((sum, { size }) => sum + size, 0);
    console.log('  ' + '='.repeat(50));
    console.log(`  ${'Total'.padEnd(40)} ${this.formatBytes(totalSize)}`);
  }

  /**
   * Lee un archivo
   */
  async readFile(filePath) {
    return await fs.readFile(filePath, 'utf8');
  }

  /**
   * Formatea bytes a formato legible
   */
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}

// Ejecutar build
const builder = new FormIOBundleBuilder();
builder.build().catch(console.error);
