import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';
import cssnano from 'cssnano';
import * as esbuild from 'esbuild';
import { gzipSync, brotliCompressSync } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Configuración de marcas y temas
 */
const BRANDS = [
  'white-label',
  'jelpit',
  'davivienda',
  'cien-cuadras',
  'doctor-aki',
  'seguros-bolivar',
] as const;

const THEMES = ['light', 'dark'] as const;

type Brand = (typeof BRANDS)[number];
type Theme = (typeof THEMES)[number];

/**
 * Paths de los packages
 */
const PACKAGES_DIR = path.resolve(__dirname, '../..');
const DIST_DIR = path.resolve(__dirname, '../dist');

const TOKENS_DIST = path.join(PACKAGES_DIR, 'tokens/dist');
const ATOMS_DIST = path.join(PACKAGES_DIR, 'atoms/dist');
const MOLECULES_DIST = path.join(PACKAGES_DIR, 'molecules/dist');
const BRAND_OVERRIDES_SRC = path.join(PACKAGES_DIR, 'brand-overrides/src');

/**
 * CSS Minifier con cssnano (optimización avanzada)
 */
async function minifyCSS(css: string): Promise<string> {
  const result = await postcss([
    postcssNesting(), // Expandir CSS Nesting ANTES de minificar
    cssnano({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: { removeQuotes: true },
          calc: { precision: 5 },
          convertValues: { length: true },
          mergeLonghand: false, // DESACTIVADO: estaba simplificando border-radius incorrectamente
          mergeRules: true,
          minifySelectors: true,
          reduceIdents: false, // Mantener nombres de animaciones/keyframes
          svgo: false,
        },
      ],
    }),
  ]).process(css, { from: undefined });

  return result.css;
}

/**
 * Comprimir archivo con gzip y brotli
 */
async function compressFile(content: string, filePath: string): Promise<void> {
  const buffer = Buffer.from(content, 'utf-8');

  // Gzip
  const gzipped = gzipSync(buffer, { level: 9 });
  await fs.writeFile(`${filePath}.gz`, gzipped);

  // Brotli (mejor compresión)
  const brotlified = brotliCompressSync(buffer, {
    params: {
      [0]: 11, // BROTLI_PARAM_QUALITY - máxima calidad
    },
  });
  await fs.writeFile(`${filePath}.br`, brotlified);
}

/**
 * Lee un archivo CSS y procesa @import statements
 */
async function readCSSFile(filePath: string): Promise<string> {
  try {
    const css = await fs.readFile(filePath, 'utf-8');

    // SIEMPRE procesar con PostCSS para expandir @import y CSS Nesting
    const result = await postcss([
      postcssImport(),
      postcssNesting()
    ]).process(css, {
      from: filePath,
    });
    return result.css;
  } catch (error) {
    console.warn(`⚠️  Could not read ${filePath}:`, error instanceof Error ? error.message : error);
    return '';
  }
}

/**
 * Genera bundle COMPLETO para una marca/tema específica
 * Incluye: Tokens + Atoms + Brand Overrides (si existen)
 */
async function buildCompleteBrandBundle(brand: Brand, theme: Theme): Promise<void> {
  console.log(`\n🎨 Building complete bundle: ${brand}-${theme}`);

  const cssFiles: string[] = [];

  // 1. Leer tokens de la marca
  const tokensCSS = await readCSSFile(path.join(TOKENS_DIST, `${brand}-${theme}.css`));
  if (tokensCSS) {
    cssFiles.push(tokensCSS);
    console.log(`  ✓ Tokens loaded`);
  }

  // 2. Leer componentes base (atoms)
  const atomsFiles = ['button.css', 'input.css', 'textArea.css', 'select.css', 'toggle.css', 'alert.css', 'index.css'];
  for (const file of atomsFiles) {
    const atomCSS = await readCSSFile(path.join(ATOMS_DIST, file));
    if (atomCSS && file !== 'index.css') {
      // Solo agregar archivos individuales, no el index
      cssFiles.push(atomCSS);
      console.log(`  ✓ Atom loaded: ${file}`);
    }
  }

  // 3. Leer overrides específicos de la marca (si existen)
  const overridesPath = path.join(BRAND_OVERRIDES_SRC, brand, 'index.css');
  try {
    await fs.access(overridesPath);
    const overridesCSS = await readCSSFile(overridesPath);
    if (overridesCSS) {
      cssFiles.push(overridesCSS);
      console.log(`  ✅ Brand overrides loaded for ${brand}`);
    }
  } catch {
    console.log(`  ℹ️  No overrides for ${brand} (using base styles only)`);
  }

  // Combinar todo
  const combinedCSS = cssFiles.filter(Boolean).join('\n\n');

  // Agregar header con metadatos
  const header = `/**
 * Root Block Design System - Complete Bundle
 * Brand: ${brand} | Theme: ${theme}
 * Generated: ${new Date().toISOString()}
 * 
 * Includes:
 * - Design Tokens (variables CSS)
 * - Base Components (atoms)
 * - Brand Overrides (if any)
 * 
 * Usage:
 * <link rel="stylesheet" href="rb-${brand}-${theme}.min.css">
 * <script type="module" src="rb-components.min.js"></script>
 * 
 * @brand ${brand}
 * @theme ${theme}
 */

`;

  const cssWithHeader = header + combinedCSS;

  // Minificar CSS con cssnano
  const minified = await minifyCSS(cssWithHeader);

  // Guardar bundles
  const fileName = `rb-${brand}-${theme}`;

  // Versión normal
  await fs.writeFile(path.join(DIST_DIR, `${fileName}.css`), cssWithHeader, 'utf-8');

  // Versión minificada
  const minFilePath = path.join(DIST_DIR, `${fileName}.min.css`);
  await fs.writeFile(minFilePath, minified, 'utf-8');

  // Comprimir versión minificada
  await compressFile(minified, minFilePath);

  const originalSize = (cssWithHeader.length / 1024).toFixed(2);
  const minifiedSize = (minified.length / 1024).toFixed(2);
  const gzSize = ((await fs.readFile(`${minFilePath}.gz`)).length / 1024).toFixed(2);
  const brSize = ((await fs.readFile(`${minFilePath}.br`)).length / 1024).toFixed(2);
  const savings = (((cssWithHeader.length - minified.length) / cssWithHeader.length) * 100).toFixed(
    1
  );

  console.log(`  ✅ ${fileName}.css (${originalSize} KB)`);
  console.log(`  ✅ ${fileName}.min.css (${minifiedSize} KB, ${savings}% smaller)`);
  console.log(`  📦 ${fileName}.min.css.gz (${gzSize} KB)`);
  console.log(`  📦 ${fileName}.min.css.br (${brSize} KB)`);
}

/**
 * Genera bundle JavaScript (Web Components)
 */
async function buildJSBundle(): Promise<void> {
  console.log(`\n🧬 Building JS bundle (Web Components)`);

  const moleculesEntry = path.join(MOLECULES_DIST, 'index.js');

  // Verificar si existe el bundle de molecules
  try {
    await fs.access(moleculesEntry);
  } catch {
    console.warn('⚠️  Molecules bundle not found, skipping JS bundle');
    return;
  }

  // Build con esbuild - optimización agresiva
  await esbuild.build({
    entryPoints: [moleculesEntry],
    bundle: true,
    minify: true,
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    format: 'esm',
    target: 'es2020',
    outfile: path.join(DIST_DIR, 'rb-components.min.js'),
    sourcemap: true,
    treeShaking: true,
    external: [], // Bundle everything
    drop: ['console', 'debugger'], // Eliminar console.log y debugger
    legalComments: 'none', // Eliminar comentarios legales
    mangleProps: /^_/, // Mangle propiedades privadas
  });

  const jsFilePath = path.join(DIST_DIR, 'rb-components.min.js');
  const stats = await fs.stat(jsFilePath);
  const size = (stats.size / 1024).toFixed(2);

  // Comprimir JS
  const jsContent = await fs.readFile(jsFilePath, 'utf-8');
  await compressFile(jsContent, jsFilePath);

  const gzSize = ((await fs.readFile(`${jsFilePath}.gz`)).length / 1024).toFixed(2);
  const brSize = ((await fs.readFile(`${jsFilePath}.br`)).length / 1024).toFixed(2);

  console.log(`  ✅ rb-components.min.js (${size} KB)`);
  console.log(`  📦 rb-components.min.js.gz (${gzSize} KB)`);
  console.log(`  📦 rb-components.min.js.br (${brSize} KB)`);
}

/**
 * NO genera archivos HTML en dist/ - solo archivos de producción
 */
async function generateIndexHTML(): Promise<void> {
  // Skip - no generamos HTMLs en dist/
  console.log('\n  ℹ️  Skipping HTML generation (demos are in examples/)');
}

/**
 * Main build process
 */
async function build(): Promise<void> {
  console.log('🚀 Building Complete Brand Bundles...\n');
  console.log('📦 Packages:');
  console.log(`  - Tokens: ${TOKENS_DIST}`);
  console.log(`  - Atoms: ${ATOMS_DIST}`);
  console.log(`  - Molecules: ${MOLECULES_DIST}`);
  console.log(`  - Brand Overrides: ${BRAND_OVERRIDES_SRC}`);

  // Crear directorio dist
  await fs.mkdir(DIST_DIR, { recursive: true });

  // 1. Build complete bundles para cada marca/tema (tokens + atoms + overrides)
  for (const brand of BRANDS) {
    for (const theme of THEMES) {
      await buildCompleteBrandBundle(brand, theme);
    }
  }

  // 2. Build JS bundle (Web Components)
  await buildJSBundle();

  // 3. Generar index.html
  await generateIndexHTML();

  console.log('\n✨ Build completed successfully!');
  console.log('\n📦 Generated files:');
  console.log(
    `  - ${BRANDS.length * THEMES.length} complete brand bundles (tokens + atoms + overrides)`
  );
  console.log(`  - 1 Web Components bundle: rb-components.min.js`);
  console.log('\n🗜️  Compression formats:');
  console.log('  - .min.css / .min.js (minified)');
  console.log('  - .min.css.gz / .min.js.gz (gzip - compatible con todos los CDN)');
  console.log('  - .min.css.br / .min.js.br (brotli - mejor compresión, CDN modernos)');
  console.log(`\n📁 Output directory: ${DIST_DIR}`);
  console.log(`\n🌐 To serve: cd ${path.relative(process.cwd(), DIST_DIR)} && npx serve`);
  console.log('\n📝 New Usage (Simple):');
  console.log('  <link rel="stylesheet" href="rb-jelpit-light.min.css">');
  console.log('  <script type="module" src="rb-components.min.js"></script>');
  console.log('\n🎨 Brand-specific overrides included automatically!');
  console.log('  - Davivienda: Special gradient slide loading animation ✨');
  console.log('  - Seguros Bolívar: Primary/Secondary color swap (Yellow/Green) 🔄');
  console.log('\n💡 Tip: Configure tu CDN para servir .br o .gz automáticamente');
}

// Ejecutar build
build().catch((error) => {
  console.error('\n❌ Build failed:', error);
  process.exit(1);
});
