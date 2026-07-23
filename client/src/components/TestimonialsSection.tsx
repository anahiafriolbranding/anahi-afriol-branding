import { Quote } from "lucide-react";

/*
 * Testimonials Section - Zona caliente #8 (prueba social)
 * SEO: Testimonios con nombre y empresa de clientes reales
 * Layout: Cards de testimonios en grid
 */

const testimonials = [
  {
    text: "Anahi Afriol realizó el branding de mi marca profesional llevándola a todo lo que esperaba y me representaba. Trabajó especialmente en los detalles de la esencia que quería mostrar. El resultado fue excelente. La recomiendo por su profesionalismo y su enorme capacidad de interpretar fielmente las necesidades del cliente.",
    author: "Betina Somma",
    role: "Arquitecta",
    link: "https://www.instagram.com/betinasommaarquitecta/",
  },
  {
    text: "Trabajar con Anahí ha sido un auténtico placer. Estamos muy satisfechos con su trabajo de branding y, sin duda, ha desempeñado un papel fundamental en el crecimiento de nuestra empresa.",
    author: "Carolina Agotegaray",
    role: "Grupo CTS",
    link: "https://www.grupocts.com.ar/",
  },
  {
    text: "Andrea hizo un trabajo excelente en nuestro proyecto. Demostró un profundo conocimiento del idioma y realizó correcciones claras y bien pensadas que hicieron que todo sonara preciso y natural.",
    author: "Head of Technology",
    role: "Clarity",
    link: "https://www.claritybhs.com",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background" aria-label="Testimonios de clientes de branding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-3 block">
            Testimonios
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-petrol leading-tight">
            Lo que dicen quienes confiaron
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="bg-card border border-border rounded-xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-coral/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed italic mb-6">
                "{testimonial.text}"
              </p>
              <footer>
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <cite className="not-italic">
                    <span className="font-semibold text-petrol">{testimonial.author}</span>
                    <span className="block text-sm text-muted-foreground">{testimonial.role}</span>
                  </cite>
                </a>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
