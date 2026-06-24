Análisis de arquitectura frontend, diseño visual y posicionamiento SEO local completado para el ecosistema de Envíos Dosruedas basado en el repositorio Next.js expuesto.
------------------------------
## 1. Informe de ADN de Componentes (Design System)
La interfaz se estructura sobre los tokens del repositorio (Blue #1E3A8A, Yellow #EAB308, White #FFFFFF) combinando la robustez tipográfica de Anton y Bebas Neue para impacto visual con la extrema legibilidad de Inter para la conversión digital.
## Botones (Call To Action - CTA)

* CTA Principal ("Cotizar Envío / Solicitar Cadete"): Fondo Azul Corporativo (#1E3A8A) con texto en Blanco Puro. Peso semibold, tipografía Inter para asegurar una lectura inmediata. Estados transicionales hacia variaciones más oscuras al hacer foco (hover:bg-[#152963]).
* CTA Secundario ("Planes Mensuales / PyMEs"): Variante con borde sólido (border-2 border-[#1E3A8A]), fondo transparente (bg-transparent) y texto en Azul. En dispositivos móviles vira a un fondo Amarillo (#EAB308) con texto oscuro para campañas agresivas de conversión local.

## Tarjetas de Servicio (Service Cards)

* Estructura Visual: Contenedores modulares con fondo claro (bg-[#FFFFFF]) o sutiles contrastes. Bordes definidos con esquinas redondeadas estándar (rounded-lg).
* Distribución de Contenido: Encabezados de tarjeta utilizando Bebas Neue para títulos de servicio compactos y estilizados (ej. "MERCADO FLEX"). El cuerpo informativo utiliza Inter con un color atenuado para no sobrecargar el layout visual.

## Estados Operativos (Status Badges)
Píldoras de visualización de eventos asíncronos para el tracking de mensajería:

* Asignado / En Viaje: Fondo Amarillo (#EAB308) con opacidad reducida y texto en contraste oscuro. Denota urgencia, velocidad y movimiento activo por las calles de MDP.
* Entregado con Éxito: Fondo verde pastel con texto verde oscuro. Indica el cierre efectivo de la cadena logística de última milla.
* Demora / Incidencia en Ruta: Fondo rojo sutil con tipografía en carmín profundo. Utilizado para notificar desvíos de tránsito o contingencias climáticas locales.

------------------------------
## 2. Layout Principal de la Landing Page
Diseño modular optimizado para el framework Next.js (App Router) y Tailwind CSS encontrado en el repositorio, enfocado en la conversión instantánea del sector comercial de Mar del Plata.

+-----------------------------------------------------------------------+

|  [Logo] Envíos Dosruedas          Cobertura  Tarifas  [CTA: Ingresar] |
+-----------------------------------------------------------------------+

|                                                                       |
|   ¡ENTREGAS EN EL DÍA! (H1 - Anton)                                   |
|   Logística de última milla para tu e-commerce en MDP (H2 - Bebas Neue)|
|                                                                       |
|   [ Formulario: Origen / Destino / Calcular ]  --> [CTA: Enviar Ya]   |
|                                                                       |
+-----------------------------------------------------------------------+

|  Confían en nosotros: [Tienda MDP] [Comercio Güemes] [E-Commerce Juan]|
+-----------------------------------------------------------------------+

|                                                                       |
|   NUESTROS SERVICIOS (H2 - Bebas Neue)                                 |
|   +-------------------+ +-------------------+ +-------------------+   |
|   |  MERCADO FLEX     | |  CADETERÍA EXPRESS| |  LOGÍSTICA PyME   |   |
|   |  (Bebas Neue)     | |  (Bebas Neue)     | |  (Bebas Neue)     |   |
|   |                   | |                   | |                   |   |
|   |  Texto descriptivo| |  Texto descriptivo| |  Texto descriptivo|   |
|   |  en fuente Inter. | |  en fuente Inter. | |  en fuente Inter. |   |
|   +-------------------+ +-------------------+ +-------------------+   |
|                                                                       |
+-----------------------------------------------------------------------+

|                                                                       |
|   COBERTURA GENERAL PUEYRREDÓN (H2 - Bebas Neue)                      |
|   [ Mapa Interactivo Base: Centro - Constitución - Puerto - Batán ]   |
|                                                                       |
+-----------------------------------------------------------------------+

## Especificación de Secciones (Next.js Components)

   1. HeroSection.tsx: Ocupa el primer pliegue completo. Utiliza la tipografía de gran impacto Anton para el mensaje comercial principal. Incorpora un calculador de tarifas dinámico para captar leads de forma inmediata.
   2. TrustBar.tsx: Fila horizontal de marcas nativas del mercado e-commerce de MDP. Actúa como prueba social masiva para los nuevos usuarios.
   3. FeaturesGrid.tsx: Tres columnas simétricas que desglosan los servicios logísticos de la empresa utilizando tarjetas visualmente consistentes.
   4. GeoMap.tsx: Módulo geográfico integrado que delimita las zonas operativas de Mar del Plata para validar la cobertura ante el cliente.
   5. Footer.tsx: Contenedor de cierre con fondo oscuro (bg-[#1E3A8A]), accesos técnicos a la API, redes sociales y datos de contacto en la ciudad.

------------------------------
## 3. Estrategia de Posicionamiento (SEO Local & Google Business Profile)
El mercado logístico en Mar del Plata exige una fuerte presencia geolocalizada para capturar el tráfico B2B (tiendas de ropa, electrónica y marketplaces locales) que busca resolver contingencias de entrega.
## Análisis de Competidores Locales en MDP

* Debilidades de la competencia: Las empresas tradicionales de mensajería o fletes en la Costa Atlántica carecen de integraciones tecnológicas modernas. Sus perfiles de Google Maps están abandonados, sufren de nombres con excesivo spam de palabras clave y no enlazan a cotizadores automatizados en tiempo real.
* Oportunidad Estratégica: Posicionar a Envíos Dosruedas como la solución logística con ADN puramente tecnológico y local para automatizar despachos de Mercado Libre Flex.

## Plan de Acción en Google Business Profile (GBP)

   1. Optimización Arquitectónica de Categorías:
   * Categoría Principal: Servicio de mensajería.
      * Categorías Secundarias: Servicio de logística, Servicio de transporte de carga.
   2. Estrategia de Intersección de Contenidos Geográficos (Posts):
   * Publicar semanalmente en el feed de GBP asociando los servicios de la marca con las arterias comerciales clave de MDP. Ejemplos de títulos optimizados: "Envíos en el día para locales comerciales en la zona de calle Güemes" o "Logística e-commerce express en Microcentro de Mar del Plata".
   3. Estrategia Semántica de Reseñas:
   * Implementar un disparador automático post-entrega que invite a los comercios a dejar reseñas utilizando palabras clave esenciales. Google indexa los comentarios de los usuarios para determinar el ranking en Google Maps. Patrón objetivo: "El mejor servicio de mensajería e-commerce para Mercado Libre Flex en Mar del Plata".

------------------------------
## 4. JSON de Configuración: Design Tokens
Este objeto JSON condensa de forma estructurada las definiciones de estilos analizadas a nivel de código y diseño, listo para ser inyectado en el archivo tailwind.config.ts o consumido por componentes de React en el repositorio.

```json
{
  "global": {
    "brand_name": "Envíos Dosruedas",
    "market_focus": "Mar del Plata (MDP), Argentina",
    "design_system_version": "2.0.0"
  },
  "colors": {
    "brand": {
      "blue_corporate": "#1E3A8A",
      "blue_hover": "#152963",
      "yellow_accent": "#EAB308",
      "yellow_hover": "#CA8A04",
      "white_pure": "#FFFFFF",
      "white_background": "#F8FAFC"
    },
    "text": {
      "light": "#FFFFFF",
      "dark": "#0F172A",
      "muted": "#475569"
    },
    "status": {
      "active_bg": "#FEF9C3",
      "active_text": "#854D0E",
      "success_bg": "#DCFCE7",
      "success_text": "#166534",
      "alert_bg": "#FEE2E2",
      "alert_text": "#991B1B"
    }
  },
  "typography": {
    "families": {
      "display_impact": "'Anton', sans-serif",
      "display_condensed": "'Bebas Neue', sans-serif",
      "body_text": "'Inter', sans-serif"
    },
    "hierarchy": {
      "h1": {
        "font": "display_impact",
        "size": "3rem",
        "letter_spacing": "normal"
      },
      "h2": {
        "font": "display_condensed",
        "size": "2.25rem",
        "letter_spacing": "0.05em"
      },
      "body": {
        "font": "body_text",
        "size": "1rem",
        "weight": "400"
      },
      "cta": {
        "font": "body_text",
        "size": "1rem",
        "weight": "600"
      }
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "48px",
    "section_gap": "64px"
  },
  "components": {
    "cards": {
      "border_radius": "8px",
      "background": "#FFFFFF",
      "shadow": "0 4px 6px -1px rgba(30, 58, 138, 0.1)"
    },
    "buttons": {
      "border_radius": "6px",
      "padding_y": "12px",
      "padding_x": "24px"
    }
  }
}
```

------------------------------
Para avanzar con la integración directa del código en la plataforma de desarrollo, indícame:

* ¿Deseas que prepare los archivos de layout.tsx y page.tsx base estruturados con Tailwind CSS y las clases tipográficas correspondientes?
* ¿Qué sistema o pasarela usarán para que el cliente ingrese los datos de origen/destino (ej. Google Places API o un listado plano de barrios de Mar del Plata)?
* ¿Requieren asistencia para estructurar los scripts automatizados de Genkit incluidos en el repositorio para la atención de consultas sobre envíos?
