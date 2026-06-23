@echo off
title Lanzador Claude Code + Colab Ollama (Bypass 403)
color 0B
cls

echo ============================================================
echo   🚀 INICIANDO ENTORNO AGÉNTICO GRATUITO (QWEN 2.5)
echo ============================================================
echo.

:: 1. Cambiar al directorio del proyecto de envíos
cd /d "E:\proyectos\localesenviosdosruedasjunio"
echo [✓] Directorio de trabajo establecido en: %cd%

:: 2. Desactivar explícitamente la página de advertencia de ngrok
set NGROK_SKIP_BROWSER_WARNING=true
echo [✓] Bypass de advertencia ngrok activado.

:: 3. Configurar la URL Base apuntando a la compatibilidad nativa de Ollama
set ANTHROPIC_BASE_URL=https://urologist-playable-tumble.ngrok-free.dev
echo [✓] Base URL redirigida a Colab: %ANTHROPIC_BASE_URL%

:: 4. Configurar la API Key ficticia (Bypass para Ollama)
set ANTHROPIC_API_KEY=ollama
echo [✓] API Key simulada establecida correctamente.

:: 5. Definir el modelo detectado en tu servidor de Colab
set MODELO_TARGET=qwen2.5:latest
echo [✓] Modelo objetivo configurado: %MODELO_TARGET%
echo.
echo ============================================================
echo   CONECTANDO CLAUDE CODE CON EL CEREBRO EN LA NUBE...
echo ============================================================
echo.

:: 6. Lanzar Claude Code con las variables aplicadas
call claude launch --model %MODELO_TARGET%

echo.
echo ============================================================
echo   Sesión finalizada con éxito.
echo ============================================================
pause
