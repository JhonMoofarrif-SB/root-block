#!/bin/bash

# 🚀 Seguros Bolívar UI Design System - Setup Script
# Automatiza el setup inicial para nuevos desarrolladores

set -e

echo "🎨 Seguros Bolívar UI Design System - Setup"
echo "=================================="

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+ primero."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versión 18+ requerida. Versión actual: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Verificar PNPM
if ! command -v pnpm &> /dev/null; then
    echo "📦 Instalando PNPM..."
    npm install -g pnpm@latest
fi

echo "✅ PNPM $(pnpm -v) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
pnpm install

# Setup git hooks
echo "🔧 Configurando git hooks..."
pnpm exec husky install

# Build inicial
echo "🏗️ Build inicial..."
pnpm run build

# Verificar que todo funciona
echo "🧪 Verificando setup..."
pnpm run lint

echo ""
echo "🎉 ¡Setup completado exitosamente!"
echo ""
echo "📚 Próximos pasos:"
echo "   • pnpm run storybook  - Ver documentación"
echo "   • pnpm run demo       - Ver demo interactivo"
echo "   • pnpm run dev        - Modo desarrollo"
echo ""
echo "💡 Tip: Abre el proyecto en VSCode para mejor experiencia"
echo "   code ."
echo ""
