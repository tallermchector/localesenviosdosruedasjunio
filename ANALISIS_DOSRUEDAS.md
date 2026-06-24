# Análisis Estratégico y Técnico: Envíos Dosruedas

A continuación, se presenta un análisis integral combinando perspectivas de Diseño Gráfico, Marketing Digital, SEO Local e Ingeniería de Software UI/UX, enfocado en el mercado de logística e-commerce en Mar del Plata (MDP). Todo el diseño se rige estrictamente por la triada de colores identitarios: Azul, Amarillo y Blanco, junto a las tipografías del proyecto.

---

## 1. INFORME DE ADN DE COMPONENTES

El ADN visual de Envíos Dosruedas se basa en un estilo Brutalista/Neo-brutalista adaptado para transmitir solidez, velocidad y confianza logística.

**Paleta Restringida y Tipografía:**
- **Azul (Navy/Primary):** Transmite confianza, seguridad y profesionalismo.
- **Amarillo (Accent):** Alerta, velocidad, atención y llamados a la acción (CTA).
- **Blanco (Background):** Claridad, espacio de respiración y legibilidad.
- **Tipografías:** *Anton* (Display, impacto visual), *Bebas Neue* (Subtítulos, lectura rápida), *System-ui* (Cuerpo, máxima legibilidad).

**Estilos de Componentes:**

*   **Botones Principales (CTA de Conversión):**
    *   *Fondo:* Amarillo (`#EAB308`).
    *   *Texto:* Azul Oscuro/Negro (`#0f172a`), fuente *Bebas Neue*, mayúsculas, tracking amplio (`tracking-wider`).
    *   *Borde y Sombra:* Borde grueso sólido, sombra neo-brutalista offset (ej. `6px 6px 0px #1E3A8A` o negro).
    *   *Interacción (Hover):* Inversión de colores o sombra expandida, con ligero desplazamiento negativo (`-translate-x-[3px] -translate-y-[3px]`).

*   **Tarjetas de Servicio (Service Cards):**
    *   *Fondo:* Blanco sólido.
    *   *Bordes:* Gruesos en color Azul o Negro para delimitar claramente la oferta.
    *   *Titulares:* *Anton* en Azul.
    *   *Efecto de elevación:* Sombra sólida (sin difuminado) que refuerza la estética de "bloque/caja", en alusión a la paquetería.

*   **Estados Operativos (Tracking/Status):**
    *   *En Tránsito (Activo):* Uso de un `pulse-dot` amarillo para indicar movimiento y actividad en tiempo real.
    *   *Entregado (Éxito):* Acentos en Azul oscuro garantizando el cierre exitoso.
    *   *Pendiente:* Contornos limpios con fondos blancos y tipografía clara.

---

## 2. LAYOUT PRINCIPAL (Landing Page Estructura)

Estructura optimizada para alta conversión, enfocada en resolver el dolor de los e-commerce locales (velocidad y fiabilidad).

1.  **Header y Navegación Sticky:**
    *   Logo visible, CTA secundario "Ingresar" y CTA principal (Amarillo) "Cotizar Envío" siempre visibles.
2.  **Hero Section (Above the Fold):**
    *   *Headline (Anton):* Promesa de valor clara. Ej: "TU E-COMMERCE, ENTREGADO HOY EN MDP".
    *   *Subheadline (Bebas Neue):* Detalle de velocidad y seguridad.
    *   *CTA Principal:* Botón brutalista amarillo gigante ("QUIERO ENVIAR").
    *   *Fondo:* Blanco o patrón sutil con formas geométricas azules/amarillas.
3.  **Social Proof (Confianza Local):**
    *   Logos de marcas marplatenses que ya utilizan el servicio (en escala de grises o azul oscuro).
4.  **Propuesta de Valor y Servicios (Tarjetas Brutalistas):**
    *   Grilla mostrando "Flex", "Express", "Emprendedores". Iconografía clara en azul y amarillo.
5.  **Calculadora/Cotizador Rápido:**
    *   Widget interactivo de un solo paso. Input de origen/destino y botón amarillo para calcular precio al instante.
6.  **Testimonios y SLA:**
    *   Reseñas de clientes locales (Google Reviews embed).
    *   Garantía de entrega (SLA Banner).
7.  **Footer Estructurado:**
    *   Links legales, redes sociales, contacto directo por WhatsApp y dirección física en MDP.

---

## 3. ESTRATEGIA DE POSICIONAMIENTO (SEO Local MDP)

**Análisis de Competencia:**
Los competidores en Mar del Plata (ej. correos tradicionales, comisionistas) suelen tener una presencia digital desactualizada. Envíos Dosruedas puede dominar a través de una marca moderna, tecnológica y enfocada específicamente en B2B (E-commerce).

**Optimización de Google Business Profile (GBP):**
1.  **Nombre Optimizado:** "Envíos DosRuedas | Logística E-commerce y Mensajería MDP".
2.  **Categoría Principal:** "Servicio de mensajería" o "Empresa de logística".
3.  **Gestión de Reseñas:**
    *   Implementar un sistema automatizado (vía QR al entregar el paquete o email al e-commerce) para solicitar reseñas de 5 estrellas mencionando "rapidez", "entregas en el día" y "Mar del Plata".
4.  **Publicaciones (Posts) Frecuentes:**
    *   Actualizaciones semanales con diseño gráfico propio (usando la paleta Azul/Amarillo). Temas: Rutas nuevas, cierre de horarios Flex, casos de éxito de tiendas locales.
5.  **Productos/Servicios Estructurados en GBP:**
    *   Listar explícitamente "Envíos Flex", "Mensajería Express", "Planes para Emprendedores" con sus descripciones (usando keywords locales).
6.  **Imágenes Georeferenciadas:**
    *   Fotos de la flota (motos/vehículos plotteados con Azul y Amarillo), del equipo y de recolecciones en zonas clave de MDP (Güemes, San Juan, Puerto).

---

## 4. JSON DE CONFIGURACIÓN (Design Tokens)

Listo para ser consumido en Tailwind, Styled Components o cualquier motor de UI.

```json
{
  "brand": {
    "name": "Envíos DosRuedas",
    "theme": "neo-brutalist"
  },
  "colors": {
    "primary": {
      "name": "Navy Blue",
      "hex": "#1E3A8A",
      "rgb": "30, 58, 138",
      "usage": "Headers, primary borders, secondary CTAs, text on light backgrounds"
    },
    "accent": {
      "name": "Action Yellow",
      "hex": "#EAB308",
      "rgb": "234, 179, 8",
      "usage": "Primary CTAs, active states, pulse animations, hover highlights"
    },
    "background": {
      "name": "White/Light",
      "hex": "#FFFFFF",
      "alt": "#F8FAFC",
      "usage": "Main backgrounds, card backgrounds"
    },
    "text": {
      "dark": "#0f172a",
      "muted": "#334155"
    }
  },
  "typography": {
    "fonts": {
      "display": "'Anton', sans-serif",
      "subhead": "'Bebas Neue', sans-serif",
      "body": "system-ui, -apple-system, sans-serif"
    },
    "scale": {
      "h1": "clamp(3rem, 8vw, 6rem)",
      "h2": "clamp(2.5rem, 5vw, 4rem)",
      "h3": "clamp(1.8rem, 3vw, 2.5rem)",
      "body": "1.125rem",
      "small": "0.875rem"
    },
    "tracking": {
      "display": "0.02em",
      "subhead": "0.05em"
    }
  },
  "spacing": {
    "base": "4px",
    "padding_btn": "12px 32px",
    "card_padding": "24px"
  },
  "shadows": {
    "brutalist_primary": "6px 6px 0px 0px #1E3A8A",
    "brutalist_accent": "6px 6px 0px 0px #EAB308",
    "brutalist_dark": "6px 6px 0px 0px #0f172a"
  }
}
```

---

## 5. RESUMEN TÉCNICO DE ESTILOS (Guía Definitiva de Ingeniería UI/UX)

Para garantizar consistencia absoluta en el código futuro, los desarrolladores deben adherirse a las siguientes directivas extraídas del repositorio:

**Paleta Corporativa Restringida:**
- **Azul (`bg-primary`, `text-primary`, `#1E3A8A`):** Utilizado para fondos de secciones densas en información, textos de jerarquía h2, y bordes de tarjetas secundarias.
- **Amarillo (`bg-accent`, `text-accent`, `#EAB308`):** Restringido exclusivamente a elementos interactivos de alto valor (CTAs de conversión, badges destacados).
- **Blanco/Claro (`bg-background`, `bg-white`, `#FFFFFF` / `#F8FAFC`):** Espacio negativo. Todo el contenido principal debe vivir sobre blanco para maximizar el contraste de los textos oscuros.

**Especificaciones Tipográficas:**
- **Display (`font-display` -> Anton):** Únicamente para títulos de página (h1) y títulos de sección principal (h2). No usar para textos de más de 6-8 palabras debido a su peso visual. Debe estar siempre en mayúsculas (`uppercase`) y con tracking ajustado (`tracking-[0.02em]`).
- **Subheads (`font-subhead` -> Bebas Neue):** Utilizado para subtítulos (h3, h4), botones (`.btn`) y etiquetas (`badge`). Mayúsculas obligatorias, tracking más holgado (`tracking-wider`).
- **Body (`font-body` -> system-ui):** Texto de lectura. Color oscuro/pizarra (`text-slate-700`), interlineado relajado (`leading-relaxed`) y tamaño base `text-lg`.

**Reglas de Consistencia de Componentes:**
- **Ausencia de Esquinas Redondeadas Suaves:** El estilo brutalista exige geometrías duras. Los radios de borde deben ser mínimos o nulos (`rounded-none` o `rounded-md` como máximo para inputs).
- **Sombras de Contraste Duro:** Prohibido el uso de sombras difuminadas estándar (ej. `shadow-lg`). Se deben usar sombras sólidas (ej. `shadow-[6px_6px_0px_#000]`) que enfaticen la naturaleza bidimensional y agresiva del diseño.
- **Animaciones Funcionales:** Las animaciones deben ser decididas y funcionales. El efecto `fadeInUp` para cargar contenido, o el `pulseDot` (en amarillo) para indicar estados "en vivo" o "urgencia".

Esta guía asegura que la identidad de Envíos Dosruedas sea percibida en MDP no solo como un servicio de envío, sino como una plataforma tecnológica robusta, rápida y de extrema confianza.
