import { ExternalLink } from "lucide-react";

/*
 * Portfolio Section - Minimalista, profesional
 * Colores naranja y warm-gray
 */

const projects = [
  {
    name: "SECUPRO",
    category: "Branding Verbal y Visual",
    type: "Branding completo",
    color: "from-warm-gray-dark to-warm-gray",
    letter: "S",
  },
  {
    name: "Grupo CTS",
    category: "Rebranding + Arquitectura de Marca + Papelería + Gráfica Vehicular",
    type: "Identidad completa",
    color: "from-orange to-orange-dark",
    letter: "C",
    link: "https://www.behance.net/gallery/185364447/GRUPO-CTS-Rebranding-papeleria-grafica-vehicular",
  },
  {
    name: "Easy House Construcción",
    category: "Rebranding + Identidad Visual + Redes",
    type: "Marca + Redes Sociales",
    color: "from-warm-gray-dark to-warm-gray",
    letter: "E",
    link: "https://www.behance.net/gallery/185666503/EASY-HOUSE-CONSTRUCCION-Rebranding-Id-Visual-Redes",
  },
  {
    name: "Aviguri",
    category: "Rebranding + Arquigrafía (diseño de local) + Packaging",
    type: "Papelería + Packaging + Espacio",
    color: "from-orange to-orange-dark",
    letter: "A",
    link: "https://www.behance.net/gallery/183706611/AVIGURI-Rebranding-Papeleria-Packaging-Arquigrafia",
  },
  {
    name: "Coteflan",
    category: "Rebranding + Submarca + Sistema Gráfico + Redes Sociales",
    type: "Identidad + Redes",
    color: "from-warm-gray-dark to-warm-gray",
    letter: "C",
    link: "https://www.behance.net/gallery/181922751/COTEFLAN-Rebranding-Redes-Submarca",
  },
  {
    name: "Andrea Sacchi | Language Services",
    category: "Personal Branding + Redes Sociales",
    type: "Marca personal",
    color: "from-orange to-orange-dark",
    letter: "A",
    link: "https://www.behance.net/gallery/181565837/ANDREA-SACCHI-LANGUAGE-SERVICES-Marca-Personal",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-secondary" aria-label="Casos de branding para Pymes">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider mb-3 block">
              Proyectos destacados
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-warm-gray-dark leading-tight">
              Marcas que transformamos<br />en motores de crecimiento
            </h2>
            <p className="text-warm-gray text-lg mt-4">
              Rebranding completo, identidad visual, papelería, packaging, arquigrafía y gráfica vehicular para pymes de distintos rubros.
            </p>
          </div>
          <a
            href="https://www.behance.net/anahiafriol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:text-orange-dark transition-colors lg:self-center"
          >
            Ver portfolio completo en Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Featured project */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-warm-gray/20 group">
          <div className="relative bg-gradient-to-br from-warm-gray-dark to-warm-gray p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/manus-storage/secupro-logo_8fbdabe5.png"
                alt="Logo SECUPRO Seguridad Tecnológica - Branding completo"
                className="w-28 h-28 object-contain bg-white rounded-xl p-2 shadow-md"
                loading="lazy"
                width="112"
                height="112"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">BRANDING</span>
                <span className="text-white/50 text-sm">Verbal + Visual</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-2">SECUPRO</h3>
              <p className="text-white/70 leading-relaxed max-w-lg">
                Branding completo que definió la identidad corporativa, incluyendo naming, logotipo, paleta cromática y sistema de aplicación.
              </p>
            </div>
            <a href="https://www.behance.net/gallery/242665185/SECUPRO-BRANDING-VERBAL-Y-VISUAL" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange transition-colors">
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Grid of remaining projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {projects.slice(1).map((project) => (
            <a
              key={project.name}
              href={project.link || "https://www.behance.net/anahiafriol"}
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative rounded-xl overflow-hidden border border-border bg-card hover:border-orange/30 transition-all duration-300 hover:shadow-md"
            >
              <div className={`h-24 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                <span className="text-3xl font-bold text-white/90 font-[family-name:var(--font-display)] opacity-80 group-hover/card:opacity-100 transition-opacity">
                  {project.letter}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-warm-gray-dark mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-warm-gray leading-snug">
                  {project.category}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
