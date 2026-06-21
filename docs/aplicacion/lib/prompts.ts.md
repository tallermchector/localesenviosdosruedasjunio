# lib/prompts.ts

```ts
import type { MediaItem, AnalysisMode } from "../types";

export function buildAuditPrompt(selection: MediaItem[], mode: AnalysisMode): string {
  const modeInstructions = {
    RAPIDO: `Foco: Detección de desviaciones cromáticas inmediatas respecto al Egyptian Blue #0636A5.`,
    DETALLADO: `Foco: Mapeo de colorimetría completo. Evalúa el equilibrio entre #0636A5, #FFEC01 y #FFFFFF.`,
    EXHAUSTIVO: `Foco: Informe de Re-Colorización. Análisis técnico de iluminación y sombras para integración perfecta de los brand tokens.`
  }[mode];

  return `Eres el Master Colorist de "Envíos DosRuedas". 
Tu tarea es auditar cromáticamente la imagen adjunta para su alineación con el DNA #0636A5 y #FFEC01.

REGLAS CRÍTICAS:
1. NO sugieras cambios de texto. La tipografía y el copy son responsabilidad exclusiva del usuario.
2. CONCÉNTRATE en los colores: ¿Cómo transformar los colores actuales en la paleta oficial (#0636A5, #FFEC01, #FFFFFF)?
3. GENERA UN PROMPT TÉCNICO: Al final, proporciona un prompt optimizado para IA que convierta la imagen actual a los colores de DosRuedas manteniendo la estructura original.

BRAND TOKENS:
- Primario: Egyptian Blue #0636A5
- Acento: Sunbeam Yellow #FFEC01
- Fondo/Brillo: #FFFFFF

TAREA:
${modeInstructions}

FORMATO DE RESPUESTA:
## DIAGNÓSTICO CROMÁTICO
(Breve análisis de por qué los colores actuales no cumplen el DNA)

## PROMPT TÉCNICO DE CORRECCIÓN
(Proporciona aquí el texto exacto para usar en el generador de imágenes para realizar el cambio de color)`;
}

export function buildExpertBusinessPrompt(): string {
  return `Actúa como Consultor Senior de Branding y Especialista en SEO Local para Mar del Plata.
Marca: "Envíos DosRuedas | Logística E-commerce".

TAREA: Genera un reporte estratégico basado en estos tokens fijos actualizados:

## 1. DESIGN TOKENS (JSON)
Tokens técnicos para el sistema:
- primary: #0636A5
- secondary: #3B82F6
- tertiary: #FFEC01
- surface: #FFFFFF

## 2. ESTRATEGIA SEO LOCAL MDP
Palabras clave (Mensajería Mar del Plata, Reparto Mar del Plata) y optimización de zonas (Constitución, Centro, Puerto).

## 3. COMPONENTES REACT
Código JSON con el mapa de colores para inyectar en CSS variables.

## 4. ROADMAP LOGÍSTICO
Cómo escalar la identidad visual en flotas de reparto locales usando #0636A5.

IDIOMA: Español. TONO: Técnico, Autoritario.`;
}

export function getFullExternalConsultancyPrompt(): string {
  return `Actúa como Master Prompt Engineer.
CONTEXTO: Reconstrucción de plataforma Envíos DosRuedas MDP.
TOKENS: Egyptian Blue #0636A5, Sunbeam Yellow #FFEC01, White #FFFFFF.
OBJETIVO: Generar un sistema de diseño Neo-Brutalista coherente para Mar del Plata.

Proporciona una guía técnica de implementación UI/UX basada en estos códigos Hex específicos.`;
}

export function buildSystemInstruction(): string {
  return `Eres el Intelligence Center de Envíos DosRuedas. Experto en auditoría de colorimetría técnica. Tu lenguaje es técnico y enfocado en la precisión de los hex codes #0636A5 y #FFEC01. No haces sugerencias editoriales de texto.`;
}

export function buildReimaginePrompt(userPrompt: string, auditText?: string): string {
  let prompt = `DosRuedas Professional Color-Correction:
- Core Objective: Recolor image to Egyptian Blue #0636A5 and Sunbeam Yellow #FFEC01.
- Palette: #0636A5 primary, #FFEC01 accent, #FFFFFF pure highlights.
- Structure: Preserve original layout and objects exactly.`;

  if (auditText) {
    // We look for the "PROMPT TÉCNICO" part if the AI included it
    const promptMatch = auditText.match(/## PROMPT TÉCNICO DE CORRECCIÓN([\s\S]*)/i);
    const techPrompt = promptMatch ? promptMatch[1].trim() : auditText.substring(0, 500);
    prompt += `\n- Technical Color Correction Guidance: ${techPrompt}`;
  }

  if (userPrompt) {
    prompt += `\n- User Typography/Text Requirements: ${userPrompt}`;
  }

  prompt += `\n- Style: Neo-Brutalist, high contrast, commercial photography.`;
  
  return prompt;
}

```
