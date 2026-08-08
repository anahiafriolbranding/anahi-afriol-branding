# Notas del sitio estático (GitHub Pages)

## Proyecto estático
- Código fuente: /home/ubuntu/anahi-repo-check/index.html (un solo archivo HTML con CSS y JS inline)
- Repositorio GitHub: anahiafriolbranding/anahi-afriol-branding (rama main, push manual)
- Workflow: editar index.html → git add/commit/push origin main
- También copiado a /home/ubuntu/anahi-afriol-branding/index.html y /home/ubuntu/anahi-afriol-branding-static/index.html
- URL producción: https://anahiafriolbranding.com.ar (GitHub Pages + Cloudflare)

## Cambios de esta sesión
1. Formulario de contacto → Formspree (endpoint https://formspree.io/f/xljrgjgg) con Vanilla JS fetch.
2. Formulario rediseñado: grid de 2 columnas (Nombre+Email izquierda, Teléfono+Mensaje derecha) encerrado en rectángulo .contact-form-grid, botón Enviar centrado abajo.
3. Sección contacto: quitados íconos redes sociales, texto "o completá el formulario" (.form-or) centrado arriba del formulario.
4. Botón flotante WhatsApp (.float-wa, esquina inferior derecha, fijo, z-index 60, link https://wa.link/eesy3f, animación pulse, tracking GTM float_whatsapp_click).
5. Blog dinámico: tarjetas estáticas reemplazadas por #blogGrid con loader; script carga RSS de WordPress (https://anahiafriolbrandingpymes.wordpress.com/feed/) vía api.rss2json.com, muestra últimas 3 entradas, caché localStorage 30 min (clave aa_blog_posts_v1), formato fecha en español, tracking blog_posts_loaded y blog_post_dynamic.

## Pendiente
- Probar render del blog y botón flotante en preview
- Commit y push a GitHub

## Datos clave
- WhatsApp link: https://wa.link/eesy3f
- Email contacto: contacto@anahiafriolbranding.com.ar
- GTM: GTM-5CDZPTH4
