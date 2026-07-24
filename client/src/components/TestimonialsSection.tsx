import { Quote } from "lucide-react";

/*
 * Testimonials Section - Minimalista, cálido
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
    text: "Conocí a Anahí fuera del ámbito laboral, así que cuando decidí independizarme en Inglaterra y crear mi propia marca, ya sabía quién era como persona. Aun así, cuando la contacté para pedirle ayuda profesional, superó todas mis expectativas.\n\nA pesar de la distancia, le conté lo que quería lograr y me presentó varias opciones que me ayudaron a ver con mucha más claridad lo que realmente estaba buscando. Fue evidente desde el principio que había entendido no solo lo que yo decía, sino lo que yo aspiraba a construir. Eso no es algo que se consigue fácil.\n\nEl resultado fue un manual de marca completo con todas las indicaciones para aplicar mi identidad de forma coherente, templates listos para usar en redes sociales y mis logos en distintas escalas y versiones según el fondo — todo pensado para que yo pudiera aplicarlo sola sin perder consistencia. Hoy, siete años después, mi marca sigue siendo sólida, mi negocio ha recibido reconocimientos a lo largo del camino y estoy convencida de que contar con una identidad visual clara y profesional fue clave para ganarme la confianza de mis clientes desde el principio.\n\nSi estás pensando en invertir en tu marca, hacelo con alguien que te escuche de verdad. Yo tuve esa suerte.",
    author: "Andrea Sacchi",
    role: "Language Services",
    link: "https://www.behance.net/gallery/181565837/ANDREA-SACCHI-LANGUAGE-SERVICES-Marca-Personal",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background" aria-label="Testimonios de clientes de branding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider mb-3 block">
            Testimonios
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-warm-gray-dark leading-tight">
            Lo que dicen quienes confiaron
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="bg-card border border-border rounded-xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-orange/20 mb-4" />
              <p className="text-warm-gray leading-relaxed italic mb-6">
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
                    <span className="font-semibold text-warm-gray-dark">{testimonial.author}</span>
                    <span className="block text-sm text-warm-gray">{testimonial.role}</span>
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
