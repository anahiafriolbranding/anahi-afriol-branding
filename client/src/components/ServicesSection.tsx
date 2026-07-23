import { MessageSquare, Palette, Building2 } from "lucide-react";

/*
 * Services Section - Jerarquía semántica corregida
 * h2: título de sección
 * h3: cada tarjeta de servicio
 */

const services = [
  {
    icon: MessageSquare,
    title: "Branding Verbal",
    description: "Naming, taglines, tono de comunicación y mensajes que conectan con tu cliente ideal. Tu marca debe hablar con una voz clara, coherente y memorable — o estar perdiendo oportunidades todos los días.",
    color: "bg-orange/10 text-orange",
    accent: "border-l-orange",
    tags: ["Naming", "Tagline", "Tono de marca", "Messaging"],
  },
  {
    icon: Palette,
    title: "Branding Visual",
    description: "Identidad visual completa: logo, paleta, tipografía, papelería, packaging y todos los puntos de contacto. Cuando la estrategia está clara, el diseño es una consecuencia lógica — no una apuesta estética.",
    color: "bg-warm-gray/10 text-warm-gray-dark",
    accent: "border-l-warm-gray-dark",
    tags: ["Logo", "Paleta", "Papelería", "Packaging"],
  },
  {
    icon: Building2,
    title: "Branding Espacial",
    description: "Eventos corporativos, oficinas, puestos de venta y locales comerciales que materializan tu marca en el espacio físico. Tu marca no solo se ve, se vive — y eso cambia todo.",
    color: "bg-orange/10 text-orange",
    accent: "border-l-orange",
    tags: ["Arquigrafía", "Eventos", "Puestos de venta", "Oficinas"],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-background" aria-label="Servicios de branding verbal, visual y espacial para Pymes">
      <div className="container">
        {/* Section header - editorial layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <span className="text-orange font-semibold text-sm uppercase tracking-wider mb-3 block">
              Mis Servicios
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-warm-gray-dark leading-tight">
              Branding 360°:<br />verbal, visual y espacial
            </h2>
          </div>
          <p className="text-warm-gray text-lg leading-relaxed">
            No empiezo por el logo. Empiezo por entender tu negocio, tu mercado y tu cliente ideal. Construyo la identidad estratégica completa para que tu marca sea percibida exactamente como lo que es — y elegida por lo que vale.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className={`group relative bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-l-4 ${service.accent}`}
            >
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-warm-gray-dark mb-3">
                {service.title}
              </h3>
              <p className="text-warm-gray leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-secondary text-warm-gray px-2.5 py-1 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Process strip */}
        <div className="mt-20 bg-warm-gray-dark rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-2">
              Mi método de trabajo
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Un proceso probado en más de 50 marcas
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Diagnóstico", desc: "Entender tu negocio, mercado, competencia y lo que no está comunicando tu marca hoy." },
                { step: "02", title: "Estrategia", desc: "Definir posicionamiento, propuesta de valor y el mensaje central que debe transmitir tu marca." },
                { step: "03", title: "Desarrollo", desc: "Construir la identidad verbal, visual y espacial que materializa tu estrategia." },
                { step: "04", title: "Implementación", desc: "Aplicar la marca en todos los puntos de contacto: digital, físico y experiencia." },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <span className="text-orange font-bold text-4xl font-[family-name:var(--font-display)]">{item.step}</span>
                  <h4 className="font-semibold text-white mt-3 mb-2 text-lg">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
