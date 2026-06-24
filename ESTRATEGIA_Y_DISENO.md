# ESTRATEGIA INTEGRAL Y GUÍA DE ESTILOS: ENVÍOS DOSRUEDAS

**Contexto:** Logística e-commerce y mensajería en Mar del Plata (MDP), Argentina.

---

## 1. INFORME DE ADN DE COMPONENTES

El diseño de "Envíos DosRuedas" adopta un estilo **Neo-Brutalista**. Este estilo prioriza la audacia, la legibilidad extrema y la interactividad tangible, elementos clave para una empresa de logística que necesita transmitir rapidez, solidez y confianza.

*   **Botones (CTAs):**
    *   **Primarios (`.btn-primary`):** Fondo amarillo (#EAB308), texto oscuro (#0f172a), bordes marcados. *Hover state:* Cambio a fondo oscuro, texto amarillo, y una sombra neo-brutalista amarilla fuerte (`box-shadow: 6px 6px 0px var(--color-accent)`), simulando un botón físico siendo presionado con un ligero movimiento (-3px).
    *   **Secundarios (`.btn-secondary`):** Transparente con borde azul (#1E3A8A). *Hover state:* Efecto de llenado (`::after`) azul, texto blanco y sombra neo-brutalista.
*   **Tarjetas de Servicio (`ServiceCard`):**
    *   Fondos claros (#F8FAFC) para máximo contraste.
    *   Bordes gruesos y sólidos (#1E3A8A) sin radios (bordes rectos de 0px en elementos internos, brutalistas).
    *   Tipografía jerárquica clara: `Bebas Neue` para subtítulos, `Anton` para títulos principales.
    *   Efecto hover: El borde cambia de color (#3B82F6) para indicar interactividad.
*   **Estados Operativos / Badges (`.section-badge`, `SlaBanner`):**
    *   Uso estratégico del color para destacar información crítica (cortes de horario: 13:00 hs y 15:00 hs).
    *   Badges combinan fondos translúcidos (`bg-blue-500/10`) con bordes suaves para diferenciar de los componentes interactivos pesados.
    *   Uso de animaciones como `pulse-dot` (punto parpadeante) para denotar actividad o "en vivo" (ej. seguimiento).

---

## 2. LAYOUT PRINCIPAL (Landing Page Orientada a Conversión)

La estructura está optimizada para la conversión en B2B local (e-commerces y locales en MDP).

1.  **SLA Banner (Top Bar):** Inmediatamente establece la promesa de valor: "Logística E-commerce Ready" y muestra los horarios de corte (13:00 y 15:00) como prueba de eficiencia.
2.  **Navigation:** Limpia, CTA prominente para "Alta de Comercio".
3.  **Hero Section:** Propuesta de valor hiper-localizada. Mensaje directo a e-commerces de MDP. Uso de tipografía `Anton` gigante.
4.  **Sección "Servicios Core" (ServiceCards):** Presentación clara de las tres verticales:
    *   Envíos Lowcost (Corte 13:00hs)
    *   Flex Express (Corte 15:00hs)
    *   Distribución Nacional
5.  **Sección de Visión/Confianza:** Respaldar el servicio con garantías de entrega.
6.  **Corporate Solutions / Slider:** Demostración de capacidad operativa (vehículos, base en Friuli 1972).
7.  **Testimonios Locales (Social Proof):** Vital para SEO y conversión. Mostrar marcas conocidas de MDP que usan el servicio.
8.  **FAQ:** Reducir fricción de ventas (costos, zonas, integración).
9.  **Social Gallery:** Dinamismo y presencia de marca.
10. **Footer & CTA Final:** Llamado a la acción reiterado.

---

## 3. ESTRATEGIA DE POSICIONAMIENTO (SEO Local & GBP)

Para dominar el mercado logístico e-commerce en Mar del Plata, la estrategia en Google Business Profile (GBP) debe ser agresiva y técnica:

*   **Diferenciación del Perfil GBP:**
    *   **Categoría Principal:** "Servicio de Mensajería" (Courier service) o "Servicio Logístico".
    *   **Nombre Optimizado (si las políticas lo permiten o mediante marca registrada):** "Envíos DosRuedas - Logística E-commerce Mar del Plata".
    *   **Dirección Estratégica:** Confirmar la dirección de la base (Friuli 1972, Mar del Plata) para anclar el SEO Local al centro operativo.
*   **Dominio de Palabras Clave (Keywords):**
    *   Enfocarse en: "envíos flex mar del plata", "logística ecommerce mdp", "cadetería para empresas mar del plata", "envíos en el día mdp".
    *   Utilizar estas keywords en las **Publicaciones de Google (Updates)** y en las descripciones de los **Servicios**.
*   **Productos/Servicios en GBP:**
    *   Crear listados específicos para: "Envíos Flex Express", "Logística Lowcost E-commerce".
    *   Incluir precios base (ej. "Desde $X") para capturar la intención de búsqueda transaccional.
*   **Estrategia de Reseñas:**
    *   Implementar un sistema automatizado (o semi-automatizado) para solicitar reseñas a los comercios clientes B2B. Reseñas mencionando "Excelente servicio para mi tienda online" pesan mucho más en el algoritmo.
*   **Consistencia NAP:** Asegurar que el Nombre, Dirección y Teléfono (NAP) sean idénticos en el footer de la web y en el GBP.

---

## 4. RESUMEN TÉCNICO: GUÍA DE ESTILOS DEFINITIVA

**Paleta Corporativa:**
*   **Primario:** Azul Marino `#1E3A8A` (Sólido, corporativo, confianza).
*   **Secundario:** Azul Claro `#3B82F6` (Tecnología, modernidad, enlaces/hover).
*   **Acento:** Amarillo `#EAB308` (Llamado a la acción, urgencia, alertas).
*   **Neutros:** Blanco/Claro `#F8FAFC` (Fondos), Oscuro `#0f172a` (Textos fuertes).

**Tipografía:**
*   **Display (Títulos H1/H2):** `Anton` (Impactante, pesada, urbana). Todo en mayúsculas (`uppercase`).
*   **Subhead (Subtítulos/Botones):** `Bebas Neue` (Condensada, clara). Con espaciado (`tracking-wider`).
*   **Body (Texto General):** Sistema/Inter (`sans-serif`). Legible y limpio.

**Sombras Neo-Brutalistas:**
*   `box-shadow: 6px 6px 0px 0px rgba(234, 179, 8, 1);` (Para CTAs principales).
*   `box-shadow: 4px 4px 0px 0px #111c38;` (Para tarjetas e interacciones secundarias).

**Bordes:**
*   Uso extensivo de bordes sólidos de 2px a 4px, rectos (sin o mínimo radio), respetando el enfoque brutalista.
