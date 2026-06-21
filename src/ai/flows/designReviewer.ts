import { ai } from '../genkit';
import { z } from 'zod';
import * as fs from 'fs/promises';
import * as path from 'path';

// Herramienta segura de lectura de archivos locales del repositorio de Firebase Studio
export const leerCodigoFuente = ai.defineTool(
    {
        name: 'leerCodigoFuente',
        description: 'Lee el código de componentes o configuraciones del proyecto de manera segura.',
        inputSchema: z.object({
            rutaRelativa: z.string().describe('Ruta al archivo. Ej: tailwind.config.ts o src/app/page.tsx'),
        }),
        outputSchema: z.object({
            codigo: z.string(),
            error: z.string().optional(),
        }),
    },
    async (input) => {
        try {
            const rutaAbsoluta = path.resolve(process.cwd(), input.rutaRelativa);
            // Guardrail para evitar Path Traversal fuera de la raíz del proyecto
            if (!rutaAbsoluta.startsWith(process.cwd())) {
                return { codigo: '', error: 'Acceso denegado: Intento de lectura fuera del directorio raíz.' };
            }

            const codigo = await fs.readFile(rutaAbsoluta, 'utf-8');
            return { codigo };
        } catch (err: any) {
            return { codigo: '', error: `No se pudo acceder al archivo: ${err.message}` };
        }
    }
);

// Flujo de revisión de diseño y generación de arte para Google Flow
export const designReviewerFlow = ai.defineFlow(
    {
        name: 'designReviewerFlow',
        inputSchema: z.object({
            rutaArchivo: z.string().describe('Ruta del componente de React/Next.js a auditar'),
            accion: z.enum(['auditar_lineamientos_ux', 'crear_prompt_render_google_flow']),
        }),
        outputSchema: z.object({
            resultadoAnalisis: z.string(),
            puntosCriticosADevolver: z.array(z.string()).optional(),
            promptDeImagenGoogleFlow: z.string().optional(),
        }),
    },
    async (input) => {
        const response = await ai.generate({
            model: 'googleai/gemini-2.5-flash',
            tools: [leerCodigoFuente],
            prompt: `Eres el Auditor de UX/UI y Director de Arte Senior de Envíos DosRuedas.
              Analiza el archivo local ubicado en "${input.rutaArchivo}" llamando a la herramienta de lectura.
              Tu objetivo es ejecutar la acción: ${input.accion}.
              
              REGLAS DE IDENTIDAD VISUAL DE ENVIOS DOSRUEDAS:
              - Colores permitidos: Twilight Blue (#1E3A8A), Royal Blue (#3B82F6), Honeycomb Yellow (#EAB308) y Snow White (#F8FAFC). Prohibido usar Azul Astronaut (#2D3277) o tonos neón.
              - Tipografías oficiales: 'Anton' para títulos destacados y 'Bebas Neue' para datos duros/métricas logísticas. Prohibido usar Montserrat o Inter.
              
              - Si ejecutas 'auditar_lineamientos_ux': Verifica si las clases de Tailwind CSS o la estructura Radix UI implementada en el archivo violan la paleta o las restricciones tipográficas corporativas.
              - Si ejecutas 'crear_prompt_render_google_flow': Traduce la lógica estructural y el propósito del código del componente en un prompt descriptivo en inglés fotorrealista de alto impacto arquitectónico/conceptual para Google Flow. El prompt resultante debe forzar los colores oficiales y un ambiente de Mar del Plata moderno y pulcro, sin incluir texto.`,
        });

        return JSON.parse(response.text);
    }
);
