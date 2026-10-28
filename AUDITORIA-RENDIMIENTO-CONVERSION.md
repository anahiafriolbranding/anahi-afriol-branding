# Auditoría de rendimiento y generación de consultas

**Proyecto:** Anahí Afriol Branding y Comunicación para Pymes  
**Fecha de revisión:** 28 de octubre de 2026  
**Dominio público auditado:** https://anahiafriolbranding.com.ar/  
**Preview del proyecto editable:** `anahi-afriol-branding` en Manus

## Resumen ejecutivo

El sitio público está disponible, carga correctamente y presenta una propuesta visual profesional. No encontré una falla técnica que explique por sí sola la ausencia de consultas. El problema más probable es de **medición incompleta + fricción de conversión + falta de evidencia sobre el volumen y la calidad del tráfico**.

Con los accesos disponibles no es posible afirmar cuántas visitas recibe el sitio, desde qué canales llegan, qué búsquedas realizan ni en qué punto abandonan. El HTML público incluye Google Tag Manager y eventos preparados, pero eso no demuestra que exista una propiedad GA4 correctamente conectada ni que las conversiones estén registrándose. Tampoco se obtuvo acceso a Search Console.

El hallazgo técnico más importante es la **divergencia entre producción y el proyecto editable**:

- Producción (`anahiafriolbranding.com.ar`) sirve un HTML estático de aproximadamente 120,6 KB, con formulario Formspree, blog dinámico y tracking GTM.
- El proyecto editable abierto en Manus usa React y su `ContactSection` solo muestra botones de WhatsApp y email; no contiene el formulario de producción.
- Publicar el preview de React sin sincronizar ambas versiones podría eliminar el formulario que hoy existe en el dominio público.

## Qué está funcionando bien

1. **Disponibilidad:** el dominio público respondió `HTTP 200` y no presentó redirecciones problemáticas. La respuesta desde el entorno de auditoría fue de aproximadamente 0,45 s; esto es una comprobación puntual, no un promedio de usuarios reales.
2. **Primera impresión:** el hero comunica un dolor concreto —“Tu negocio creció. Tu marca, todavía no”— y muestra a Anahí junto con un caso de branding espacial. La jerarquía visual es clara.
3. **Propuesta de valor:** se explican branding verbal, visual, espacial y bilingüe, junto con un proceso de cuatro etapas.
4. **Prueba social:** aparecen más de 50 marcas, portfolio, testimonios y enlaces a trabajos en Behance.
5. **Canales de contacto:** hay WhatsApp, Calendly, email y un formulario de contacto en la versión pública.
6. **SEO básico:** `lang="es"`, título, descripción, canonical, Open Graph y datos estructurados de tipo `ProfessionalService`/`Service` están presentes.
7. **Accesibilidad básica de imágenes:** las 14 imágenes detectadas en producción tienen texto alternativo; las imágenes principales tienen dimensiones declaradas.

## Qué no se puede saber todavía

Estas preguntas requieren datos de GA4/GTM y Search Console, que no están disponibles en la sesión:

- visitas y usuarios por día/mes;
- porcentaje de tráfico orgánico, redes, referidos y directo;
- ciudades, dispositivos y páginas de entrada;
- consultas exactas de Google e impresiones por palabra clave;
- tasa de clic en WhatsApp, Calendly, formulario y lead magnet;
- tasa de envío exitoso del formulario;
- puntos de abandono y tiempo de interacción;
- cantidad real de consultas que llegan por cada canal.

Por eso no sería responsable inventar un perfil de audiencia. El contenido permite plantear hipótesis —Pymes en crecimiento, profesionales independientes y emprendimientos que escalan—, pero deben validarse con Search Console y analítica.

## Diagnóstico del embudo

### 1. La página informa mucho, pero concentra la conversión al final

La página tiene muchas secciones valiosas, pero el visitante debe recorrer bastante contenido antes de encontrar el formulario. Hay CTA de WhatsApp en el header y CTA de Calendly en el hero, aunque no todos los CTA intermedios están instrumentados de forma visible.

**Riesgo:** una persona interesada puede no querer abrir un calendario, iniciar WhatsApp o completar un formulario largo sin conocer inversión, modalidad y siguiente paso.

**Mejora prioritaria:** ofrecer tres caminos con expectativas claras:

- **Quiero hablar:** WhatsApp con mensaje precargado.
- **Quiero reservar:** llamada de 30 minutos en Calendly.
- **Quiero orientarme:** formulario corto de 3 campos o checklist con una promesa concreta.

### 2. Falta una respuesta explícita a preguntas de decisión

La propuesta y los casos están bien presentados, pero no se ve con la misma claridad:

- para qué tipo de proyecto conviene cada servicio;
- duración aproximada;
- modalidad de trabajo;
- rango de inversión o al menos “desde dónde empieza”;
- qué sucede después de enviar una consulta;
- si se trabaja remoto y en qué zonas;
- qué entregables recibe el cliente.

**Mejora:** sumar una sección breve de “Cómo es trabajar conmigo” con modalidad, tiempos orientativos, entregables y un CTA. Si no se desea publicar precios, explicar qué factores determinan la inversión.

### 3. Hay demasiadas opciones de navegación para una landing de servicio

La navegación incluye Servicios, Para quién, Unidades de Negocio, Sobre mí y Blog. Es útil para explorar, pero puede diluir la decisión principal: consultar por un proyecto de branding.

**Mejora:** mantener la navegación, pero destacar un único CTA de conversión y convertir “Blog” y las unidades de negocio en opciones secundarias.

### 4. El lead magnet parece enviar fuera del sitio

El botón “Descargalo gratis” lleva a un enlace corto externo. La auditoría no confirma si ese enlace captura email, registra una conversión o simplemente redirige a un recurso.

**Mejora:** medir el clic y, preferentemente, usar una landing propia o una página de gracias con un segundo CTA hacia la consulta.

### 5. El formulario público existe, pero el proyecto editable no lo replica

En producción se detectó `contactForm` con envío a Formspree y mensaje de éxito. En el React editable, `ContactSection.tsx` solo contiene WhatsApp y email.

**Acción obligatoria antes de publicar cambios:** decidir cuál es la fuente de verdad y sincronizar el formulario, sus estados de éxito/error y sus eventos de medición. No publicar el preview de React tal como está si el formulario es un canal importante.

## Rendimiento técnico observado

- El HTML público pesa aproximadamente 120,6 KB sin comprimir. No es crítico para una landing, aunque puede reducirse si se separan estilos y scripts no esenciales.
- La respuesta de la página fue rápida desde el entorno de prueba, pero no sustituye una medición de Core Web Vitals en usuarios reales.
- Las imágenes locales inspeccionadas tienen tamaños razonables; la fachada principal ronda 195 KB y el retrato ronda 98 KB.
- El blog carga contenido desde WordPress mediante un servicio RSS externo. Si ese servicio tarda o falla, puede añadir espera o dejar contenido dinámico sin cargar.
- La producción usa imágenes locales relativas; el preview React usa rutas `/manus-storage/...`. Esto confirma que ambas implementaciones no son intercambiables automáticamente.
- Hay fuentes externas de Google Fonts y Google Tag Manager. Conviene revisar su impacto con Lighthouse y cargar solo pesos realmente usados.

## SEO técnico

### Correcto

- Un solo H1 principal.
- Título y meta description definidos.
- `lang="es"`.
- Canonical del dominio público.
- Datos estructurados de servicios.
- Enlaces internos por anclas.

### A corregir

1. **Sitemap:** incluye fragmentos como `/#servicios`, que no son URLs indexables independientes, y también URLs de un blog externo de WordPress. El sitemap del dominio debería contener solo URLs propias y canónicas.
2. **Blog:** si el blog es una fuente real de tráfico orgánico, conviene que sus artículos tengan una estrategia clara de enlaces hacia la página de servicios y hacia una conversión medible.
3. **Intención local:** el sitio menciona Pilar y Buenos Aires, pero podría reforzar búsquedas de servicio + ubicación en títulos, copy, datos de contacto y perfil de Google Business Profile si existe.
4. **Páginas de servicio:** una sola landing obliga a competir con una página muy amplia. Crear páginas independientes para “branding para Pymes”, “branding visual”, “branding verbal” y “branding espacial” permitiría responder mejor a búsquedas específicas.

## Instrumentación que ya está preparada en producción

El HTML público contiene eventos en `dataLayer` para, entre otros:

- clic en WhatsApp;
- clic en Calendly;
- clic en el botón flotante de WhatsApp;
- envío y conversión exitosa del formulario;
- clics en artículos del blog;
- carga de artículos dinámicos.

Esto es una buena base, pero falta comprobar en GTM/GA4 que:

1. cada evento tenga un trigger correcto;
2. los eventos lleguen a la propiedad correcta;
3. `form_conversion`, `calendly_click` y WhatsApp estén marcados como conversiones;
4. no se estén enviando datos personales del formulario como parámetros de analítica;
5. exista una conversión separada para cada canal.

## Plan recomendado por prioridad

### Prioridad 0 — antes de tocar el diseño

1. Confirmar la fuente de verdad: GitHub Pages/HTML estático o Manus/React.
2. Dar acceso de solo lectura a GA4, Search Console y GTM, o exportar los últimos 90 días.
3. Verificar que Formspree, Calendly, WhatsApp y el email reciben consultas realmente.
4. Probar una consulta real de punta a punta, sin usar datos ficticios.

### Prioridad 1 — impacto inmediato en consultas

1. Mantener un CTA principal consistente: “Agendá una consulta gratuita” o “Escribime por WhatsApp”.
2. Agregar WhatsApp con mensaje precargado y contexto, por ejemplo: “Hola Anahí, llegué desde tu web y quiero consultar por [servicio]”.
3. Reducir el formulario a nombre, email/WhatsApp y “¿Qué necesitás resolver?”.
4. Añadir una microsección de confianza junto al formulario: tiempo de respuesta, modalidad y qué pasa después.
5. Repetir CTA contextual después de Servicios, Casos y Sobre mí.

### Prioridad 2 — mejorar tráfico calificado

1. Crear páginas específicas por servicio e intención.
2. Publicar casos con estructura problema → decisión → resultado → entregables.
3. Enlazar cada artículo del blog a un servicio relacionado y a una consulta.
4. Optimizar búsquedas locales: branding para Pymes en Pilar/Zona Norte/Buenos Aires, según el mercado objetivo real.
5. Corregir sitemap y revisar indexación en Search Console.

### Prioridad 3 — rendimiento y experimentación

1. Medir Lighthouse/Core Web Vitals en móvil.
2. Comparar dos CTA durante 30 días: WhatsApp vs. Calendly.
3. Medir clics y conversiones por sección usando nombres de evento consistentes.
4. Revisar el rendimiento del RSS del blog y aplicar un fallback estático.
5. Comprimir/minificar CSS y scripts inline si las métricas reales muestran impacto.

## Panel mínimo que conviene revisar cada mes

| Indicador | Qué responde |
|---|---|
| Usuarios y sesiones | ¿Está llegando gente? |
| Sesiones orgánicas | ¿Google está trayendo tráfico? |
| Consultas de Search Console | ¿Qué está buscando la gente? |
| CTR de resultados | ¿El título y la descripción atraen clics? |
| Clics en WhatsApp | ¿La propuesta genera conversación? |
| Clics en Calendly | ¿La agenda resulta cómoda? |
| Formulario iniciado/enviado/exitoso | ¿Dónde se pierde la intención? |
| Conversiones por landing page | ¿Qué página trae mejores oportunidades? |
| Dispositivo y ciudad | ¿Para quién optimizar móvil y local? |

## Conclusión

La página no parece carecer de credibilidad ni de canales de contacto. Lo que falta es saber si tiene suficiente tráfico calificado y, cuando lo tiene, cuál de los canales falla. Antes de rediseñar todo, conviene cerrar la medición, unificar producción con el proyecto editable y reducir la fricción para iniciar una conversación.

La hipótesis más fuerte es: **la web puede estar recibiendo pocas visitas calificadas y, además, el embudo actual no permite distinguir si el problema está en el tráfico, en el CTA, en el formulario o en el seguimiento posterior**.

El siguiente paso correcto es obtener un export o acceso de lectura de GA4 + Search Console + GTM. Con esos datos se puede entregar un diagnóstico cuantitativo de origen, búsquedas, páginas de entrada, tasa de conversión y recomendaciones con prioridad económica.
