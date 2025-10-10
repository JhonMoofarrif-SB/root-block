#!/usr/bin/env node

/**
 * CSS Standards Validator - Root Block Design System
 * 
 * Este script valida que los componentes CSS sigan las reglas estándar
 * definidas en CSS_STANDARDS.md
 * 
 * Uso:
 * node scripts/validate-css-standards.js
 * node scripts/validate-css-standards.js packages/atoms/src/button.css
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Reglas de validación
const CSS_STANDARDS = {
  // Estructura obligatoria
  requiredSections: [
    'VARIABLES CSS PERSONALIZABLES Y ESTILOS BASE',
    'VARIANTS',
    'SIZES', 
    'MODIFIERS',
    'STATES',
    'ANIMATIONS',
    'ACCESSIBILITY & RESPONSIVE'
  ],
  
  // Variables CSS obligatorias
  requiredVariables: [
    '--rb-',
    'bg-color',
    'text-color',
    'border-color',
    'border-width',
    'border-radius',
    'padding-x',
    'padding-y',
    'font-family',
    'font-size',
    'font-weight',
    'line-height',
    'transition'
  ],
  
  // Estados obligatorios (solo para componentes interactivos)
  requiredStates: {
    interactive: [
      ':hover:not(:disabled)',
      ':active:not(:disabled)',
      ':focus-visible:not(:disabled)',
      ':disabled'
    ],
    display: [
      ':focus-visible'
    ]
  },
  
  // Media queries obligatorias
  requiredMediaQueries: [
    'prefers-contrast: high',
    'prefers-reduced-motion: reduce',
    'width <= 640px',
    'width >= 641px',
    'print'
  ],
  
  // Tamaños obligatorios
  requiredSizes: [
    '--small',
    '--medium', 
    '--large'
  ]
};

class CSSValidator {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = '';
    this.errors = [];
    this.warnings = [];
    this.componentName = '';
  }

  async validate() {
    try {
      this.content = fs.readFileSync(this.filePath, 'utf8');
      this.componentName = this.extractComponentName();
      
      console.log(`🔍 Validando: ${this.filePath}`);
      console.log(`📦 Componente: ${this.componentName}`);
      console.log('─'.repeat(50));
      
      this.validateHeader();
      this.validateSections();
      this.validateVariables();
      this.validateStates();
      this.validateSizes();
      this.validateMediaQueries();
      this.validateNaming();
      
      this.printResults();
      
    } catch (error) {
      console.error(`❌ Error al validar ${this.filePath}:`, error.message);
      process.exit(1);
    }
  }

  extractComponentName() {
    const match = this.content.match(/class="rb-([^"]+)"/);
    return match ? match[1] : 'unknown';
  }

  validateHeader() {
    const hasHeader = this.content.includes('/**') && 
                     this.content.includes('Component - Root Block Design System');
    
    if (!hasHeader) {
      this.errors.push('❌ Falta comentario de cabecera con descripción del componente');
    } else {
      console.log('✅ Comentario de cabecera presente');
    }
  }

  validateSections() {
    CSS_STANDARDS.requiredSections.forEach(section => {
      if (!this.content.includes(section)) {
        this.errors.push(`❌ Falta sección obligatoria: ${section}`);
      } else {
        console.log(`✅ Sección presente: ${section}`);
      }
    });
  }

  validateVariables() {
    // Determinar si es un componente interactivo o de display
    const isInteractive = this.componentName.includes('button') ||
                         this.componentName.includes('input') ||
                         this.componentName.includes('select') ||
                         this.componentName.includes('toggle');
    
    const isDisplayComponent = this.componentName.includes('alert') ||
                              this.componentName.includes('card') ||
                              this.componentName.includes('badge');
    
    // Variables obligatorias para todos los componentes
    const baseVariables = [
      '--rb-',
      'bg-color',
      'text-color',
      'border-color',
      'border-width',
      'border-radius',
      'font-family',
      'font-size',
      'font-weight',
      'line-height',
      'transition'
    ];
    
    // Variables adicionales para componentes interactivos
    const interactiveVariables = [
      'padding'
    ];
    
    let requiredVariables;
    
    if (isInteractive) {
      requiredVariables = [...baseVariables, ...interactiveVariables];
    } else if (isDisplayComponent) {
      // Componentes de display necesitan padding pero no necesariamente padding-x/y
      requiredVariables = [...baseVariables, 'padding'];
    } else {
      requiredVariables = baseVariables;
    }
    
    requiredVariables.forEach(variable => {
      if (!this.content.includes(variable)) {
        this.errors.push(`❌ Falta variable obligatoria: ${variable}`);
      } else {
        console.log(`✅ Variable presente: ${variable}`);
      }
    });
  }

  validateStates() {
    // Determinar si es un componente interactivo o de display
    const isInteractive = this.componentName.includes('button') ||
                         this.componentName.includes('input') ||
                         this.componentName.includes('select') ||
                         this.componentName.includes('toggle');
    
    const isDisplayComponent = this.componentName.includes('alert') ||
                              this.componentName.includes('card') ||
                              this.componentName.includes('badge');
    
    let requiredStates;
    
    if (isInteractive) {
      requiredStates = CSS_STANDARDS.requiredStates.interactive;
    } else if (isDisplayComponent) {
      // Componentes de display solo necesitan focus-visible para accesibilidad
      requiredStates = [':focus-visible'];
    } else {
      requiredStates = CSS_STANDARDS.requiredStates.display;
    }
    
    requiredStates.forEach(state => {
      if (!this.content.includes(state)) {
        this.errors.push(`❌ Falta estado obligatorio: ${state}`);
      } else {
        console.log(`✅ Estado presente: ${state}`);
      }
    });
  }

  validateSizes() {
    CSS_STANDARDS.requiredSizes.forEach(size => {
      if (!this.content.includes(size)) {
        this.errors.push(`❌ Falta tamaño obligatorio: ${size}`);
      } else {
        console.log(`✅ Tamaño presente: ${size}`);
      }
    });
  }

  validateMediaQueries() {
    CSS_STANDARDS.requiredMediaQueries.forEach(query => {
      if (!this.content.includes(query)) {
        this.errors.push(`❌ Falta media query obligatoria: ${query}`);
      } else {
        console.log(`✅ Media query presente: ${query}`);
      }
    });
  }

  validateNaming() {
    // Verificar prefijo rb-
    const rbClasses = this.content.match(/\.rb-[a-zA-Z-]+/g);
    if (!rbClasses || rbClasses.length === 0) {
      this.errors.push('❌ No se encontraron clases con prefijo rb-');
    } else {
      console.log(`✅ ${rbClasses.length} clases con prefijo rb- encontradas`);
    }

    // Verificar variables con prefijo --rb-
    const rbVariables = this.content.match(/--rb-[a-zA-Z-]+/g);
    if (!rbVariables || rbVariables.length === 0) {
      this.errors.push('❌ No se encontraron variables con prefijo --rb-');
    } else {
      console.log(`✅ ${rbVariables.length} variables con prefijo --rb- encontradas`);
    }
  }

  printResults() {
    console.log('\n' + '═'.repeat(50));
    console.log('📊 RESULTADOS DE VALIDACIÓN');
    console.log('═'.repeat(50));
    
    if (this.errors.length === 0) {
      console.log('🎉 ¡EXCELENTE! El componente cumple con todos los estándares');
      console.log('✅ Listo para producción');
    } else {
      console.log(`❌ ${this.errors.length} errores encontrados:`);
      this.errors.forEach(error => console.log(`   ${error}`));
    }
    
    if (this.warnings.length > 0) {
      console.log(`\n⚠️  ${this.warnings.length} advertencias:`);
      this.warnings.forEach(warning => console.log(`   ${warning}`));
    }
    
    console.log('\n' + '═'.repeat(50));
    
    if (this.errors.length > 0) {
      process.exit(1);
    }
  }
}

// Función principal
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    // Validar todos los componentes
    const atomsDir = path.join(__dirname, '../packages/atoms/src');
    const files = fs.readdirSync(atomsDir).filter(file => file.endsWith('.css'));
    
    console.log('🔍 Validando todos los componentes CSS...\n');
    
    let totalErrors = 0;
    let totalFiles = 0;
    
    for (const file of files) {
      const filePath = path.join(atomsDir, file);
      const validator = new CSSValidator(filePath);
      
      try {
        await validator.validate();
        totalFiles++;
        
        if (validator.errors.length > 0) {
          totalErrors += validator.errors.length;
        }
        
        console.log('\n');
      } catch (error) {
        console.error(`❌ Error validando ${file}:`, error.message);
        totalErrors++;
      }
    }
    
    console.log('═'.repeat(50));
    console.log('📊 RESUMEN FINAL');
    console.log('═'.repeat(50));
    console.log(`📁 Archivos validados: ${totalFiles}`);
    console.log(`❌ Total errores: ${totalErrors}`);
    
    if (totalErrors === 0) {
      console.log('🎉 ¡Todos los componentes cumplen con los estándares!');
    } else {
      console.log('⚠️  Algunos componentes necesitan ajustes');
      process.exit(1);
    }
    
  } else {
    // Validar archivo específico
    const filePath = args[0];
    
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Archivo no encontrado: ${filePath}`);
      process.exit(1);
    }
    
    const validator = new CSSValidator(filePath);
    await validator.validate();
  }
}

// Ejecutar si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.includes('validate-css-standards.js')) {
  main().catch(error => {
    console.error('❌ Error:', error.message);
    process.exit(1);
  });
}

export default CSSValidator;
