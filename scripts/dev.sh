#!/bin/bash

# 🔥 Seguros Bolívar UI Design System - Development Script
# Script inteligente para desarrollo con watch mode

set -e

echo "🔥 Seguros Bolívar UI Design System - Development Mode"
echo "============================================="

# Función para cleanup al salir
cleanup() {
    echo ""
    echo "🛑 Deteniendo procesos..."
    jobs -p | xargs -r kill
    exit 0
}

trap cleanup SIGINT SIGTERM

# Verificar si hay cambios sin commitear
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Hay cambios sin commitear. Considera hacer commit antes de desarrollar."
    echo ""
fi

# Opciones de desarrollo
echo "Selecciona el modo de desarrollo:"
echo "1) 🎨 Storybook (documentación interactiva)"
echo "2) 🎮 Demo (ejemplos en vivo)"
echo "3) 🔧 Bundle Watch (rebuild automático)"
echo "4) 🧪 Test Watch (tests en tiempo real)"
echo "5) 🚀 Full Dev (Storybook + Bundle Watch)"
echo ""

read -p "Opción (1-5): " choice

case $choice in
    1)
        echo "🎨 Iniciando Storybook..."
        pnpm run storybook
        ;;
    2)
        echo "🎮 Iniciando Demo..."
        pnpm run demo
        ;;
    3)
        echo "🔧 Iniciando Bundle Watch..."
        pnpm --filter @seguros-bolivar-ui/bundle dev
        ;;
    4)
        echo "🧪 Iniciando Test Watch..."
        pnpm test -- --watch
        ;;
    5)
        echo "🚀 Iniciando Full Dev Mode..."
        echo "   - Bundle Watch en background"
        echo "   - Storybook en foreground"
        echo ""

        # Bundle watch en background
        pnpm --filter @seguros-bolivar-ui/bundle dev &

        # Esperar un poco para que el bundle se genere
        sleep 3

        # Storybook en foreground
        pnpm run storybook
        ;;
    *)
        echo "❌ Opción inválida"
        exit 1
        ;;
esac
