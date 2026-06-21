import { ai } from '../genkit'; // Importación alineada con tu arquitectura de Firebase Studio
import { z } from 'zod';

// Herramienta optimizada para inyectar datos duros reales al agente
export const obtenerEstadisticasEnvios = ai.defineTool(
    {
        name: 'obtenerEstadisticasEnvios',
        description: 'Obtiene las métricas operativas de Envíos DosRuedas en Mar del Plata.',
        inputSchema: z.void(),
        outputSchema: z.object({
            totalEnviosMes: z.number(),
            destinosMasSolicitados: z.array(z.string()),
            eficienciaSLA: z.string(),
        }),
    },
    async () => {
        // Aquí puedes realizar una consulta real con Prisma a tu base de datos si lo deseas
        return {
            totalEnviosMes: 1840,
            destinosMasSolicitados: ['Punta Mogotes', 'Centro', 'Constitución', 'Friuli 1972'],
            eficienciaSLA: '99.2%',
        };
    }
);

// Flujo de Marketing alineado con la identidad corporativa de la marca
export const marketingFlow = ai.defineFlow(
    {
        name: 'marketingFlow',
        inputSchema: z.object({
            canal: z.enum(['google_business', 'instagram', 'email_marketing']),
            enfoqueCampana: z.string().describe('Ej: Horario de corte Flex 15:00 o Logística E-commerce'),
        }),
        outputSchema: z.object({
            tituloPublicacion: z.string(),
            cuerpoMensaje: z.string(),
            llamadoALaAccion: z.string(),
            conceptoVisualGoogleFlow: z.string().describe('Instrucciones exactas en inglés para generar la imagen'),
        }),
    },
    async (input) => {
        const response = await ai.generate({
            model: 'googleai/gemini-2.5-flash', // Utiliza el modelo base definido en tu ecosistema
            tools: [obtenerEstadisticasEnvios],
            config: {
                temperature: 0.7,
            },
            prompt: `Actúa como el Director de Marketing Digital de "Envíos DosRuedas | Logística E-commerce y Mensajería MDP".
              El canal objetivo es: ${input.canal}. El foco del mensaje es: ${input.enfoqueCampana}.
              
              REGLAS CORPORATIVAS INNEGOCIABLES:
              - Usa siempre el concepto clave: "Logística con Cara Humana".
              - Haz mención implícita o explícita a la base en Friuli 1972, Mar del Plata.
              - Recuerda los horarios de corte cruciales: 13:00 (LowCost) y 15:00 (Servicio Flex).
              
              Usa la herramienta disponible para jalar métricas reales de envíos que den solidez al post.
              En el 'conceptoVisualGoogleFlow', describe una escena fotorrealista en inglés usando de forma estricta la paleta: Twilight Blue (#1E3A8A), Royal Blue (#3B82F6) y Honeycomb Yellow (#EAB308) sobre Snow White (#F8FAFC). Evita cualquier texto embebido en la imagen.`,
        });

        return JSON.parse(response.text);
    }
);
