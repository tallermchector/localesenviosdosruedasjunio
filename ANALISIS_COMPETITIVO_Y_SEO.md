# 1) ANÁLISIS DE COMPETENCIA EN 3 NIVELES

## a) LOCAL (Mar del Plata)
**Competidores Identificados:** Cadetería MDP Express, Envíos Flex Mar del Plata, MDQ Logística.
*   **Identidad Visual:** Suelen tener identidades muy anticuadas o generadas con plantillas genéricas. Predominan los colores azules genéricos o rojos rápidos. Poco uso de jerarquía visual.
*   **Google Business Profile (GBP):** Muchos carecen de productos bien listados y descripciones ricas en keywords. Las reseñas suelen ser su principal activo, pero no las explotan visualmente.
*   **Oportunidades:** Un diseño profesional, corporativo pero accesible, destaca inmediatamente. El uso del "Neo-Brutalismo" o estructuras limpias tipo SaaS posiciona a DosRuedas no como un cadete más, sino como un *partner tecnológico* de logística.

## b) NACIONAL (Argentina)
**Competidores Identificados:** Treggo, Chazki, Moova.
*   **Identidad Visual:** Transición clara hacia un estilo "Startup Tech". Uso de ilustraciones isométricas (ya un poco anticuado), y ahora yendo hacia un estilo más fotográfico/minimalista.
*   **Interacción:** Fuerte enfoque en el rastreo en vivo (tracking) y la integración de APIs.
*   **Oportunidades:** Tomar la limpieza visual del mundo SaaS (espacios amplios, jerarquías claras de información, tipografías legibles como Inter) pero inyectar el ADN rudo y confiable de la logística tradicional a través de los colores y tipografías display (Anton/Bebas Neue).

## c) INTERNACIONAL
**Competidores Identificados:** Stuart, Deliveroo (rama corporativa), Lalamove, Onfleet.
*   **Identidad Visual:** "Utility First" o "Neo-Brutalismo Corporativo". Interfaces altamente funcionales donde la tipografía es el principal elemento decorativo. Uso de badges para estados, tarjetas con mucho contraste, y CTAs gigantes que no dejan lugar a dudas.
*   **Oportunidades:** El uso de bordes sólidos y colores primarios muy contrastantes (#1E3A8A y #EAB308) es una tendencia fuerte en UI B2B moderno. Transmite transparencia, durabilidad y cero pretensiones.

**Conclusión / Aprendizajes Visuales:**
El diseño debe huir del aspecto genérico de "agencia de envíos local" y acercarse al de una "plataforma de infraestructura logística". Esto se logra manteniendo el esqueleto (layout y componentes) altamente estructurado y casi de "Dashboard", mientras la personalidad de marca (colores fijos y tipografía Anton/Bebas) aporta la energía y el impacto visual B2B necesario.

---

# 2) SEO TÉCNICO Y LOCAL

*   **Metadatos:**
    *   Title: `Envíos Flex y Logística E-commerce en Mar del Plata | Envíos DosRuedas`
    *   Meta Description: `Servicio de mensajería express y logística de última milla para tiendas online en Mar del Plata. Corte 13hs y 15hs. Retiro en local. Cotizá tu envío hoy.`
    *   Open Graph: Imagen 1200x630px usando Navy (#1E3A8A) de fondo y título en Anton Amarillo (#EAB308).
*   **Schema.org:**
    *   Implementar `LocalBusiness` asegurando que el NAP (Name: Envíos DosRuedas, Address: Friuli 1972, Mar del Plata, Phone: [Teléfono Oficial]) sea idéntico en el footer web y en Google Business Profile.
    *   Implementar `Service` para detallar: "Envío Lowcost", "Flex Express", "Distribución Nacional".
    *   Implementar `FAQPage` para resolver dudas de zonas, tarifas y horarios de corte.
*   **Sitemap & Robots.txt:** Asegurar indexación rápida priorizando rutas `/servicios` y `/contacto`.
*   **Jerarquía de Encabezados:** Un único H1 (ej. "LA LOGÍSTICA DE TU E-COMMERCE EN MAR DEL PLATA") usando la fuente Anton. H2 y H3 estructurando los servicios y diferenciales.
*   **Core Web Vitals:** Al usar Next.js App Router, garantizar un LCP óptimo utilizando `<Image>` de Next.js para fotos de flota/base operando en formatos WebP/AVIF con `fetchPriority="high"` en la imagen hero.
*   **SEO Local (GBP):** Fuerte estrategia de reseñas con comercios de MDP. Nombrar las zonas en el copy de la web (Microcentro, Güemes, Puerto, Constitución, etc.).
