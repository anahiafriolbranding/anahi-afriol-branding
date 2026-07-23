import { ExternalLink } from "lucide-react";

/*
 * Portfolio Section - Zona caliente #6 (prueba social)
 * SEO: Keywords de casos de trabajo reales
 * Layout: Editor-style con imágenes y mockups de proyectos
 */

const projects = [
  {
    name: "SECUPRO",
    category: "Branding Verbal y Visual",
    type: "Rebranding completo",
    color: "from-petrol to-petrol-light",
    letter: "S",
    accent: "#D95040",
  },
  {
    name: "Grupo CTS",
    category: "Rebranding + Gráfica Vehicular",
    type: "Identidad completa",
    color: "from-coral to-coral-dark",
    letter: "C",
    accent: "#0F2C3E",
  },
  {
    name: "Easy House",
    category: "Rebranding + Identidad Visual",
    type: "Marca + Redes Sociales",
    color: "from-petrol to-petrol-light",
    letter: "E",
    accent: "#D95040",
  },
  {
    name: "Aviguri",
    category: "Branding completo + Arquigrafía",
    type: "Papelería + Packaging + Espacio",
    color: "from-coral to-coral-dark",
    letter: "A",
    accent: "#0F2C3E",
  },
  {
    name: "Coteflan",
    category: "Rebranding + Submarca",
    type: "Identidad + Redes",
    color: "from-petrol to-petrol-light",
    letter: "C",
    accent: "#D95040",
  },
  {
    name: "Los Atilios",
    category: "Rebranding + Packaging",
    type: "Marca completa",
    color: "from-coral to-coral-dark",
    letter: "L",
    accent: "#0F2C3E",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-petrol/5" aria-label="Casos de branding para Pymes">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-3 block">
              Proyectos destacados
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-petrol leading-tight">
              Marcas que transformamos<br />en motores de crecimiento
            </h2>
            <p className="text-muted-foreground text-lg mt-4">
              Rebranding completo, identidad visual, papelería, packaging, arquigrafía y gráfica vehicular para pymes de distintos rubros.
            </p>
          </div>
          <a
            href="https://www.behance.net/anahiafriol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-coral font-semibold text-sm hover:text-coral-dark transition-colors lg:self-center"
          >
            Ver portfolio completo en Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Featured project - large */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-petrol/10 group">
          <div className="relative bg-gradient-to-br from-petrol to-petrol-light p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center border border-white/20">
                <span className="text-4xl font-bold text-white font-[family-name:var(--font-display)]">S</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-coral text-white text-xs font-bold px-3 py-1 rounded-full">REBRANDING</span>
                <span className="text-white/50 text-sm">Verbal + Visual</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)] mb-2">SECUPRO</h3>
              <p className="text-white/70 leading-relaxed max-w-lg">
                Rebranding completo que redefinió la identidad corporativa, incluyendo naming, logotipo, paleta cromática y sistema de aplicación.
              </p>
            </div>
            <a href="https://www.behance.net/anahiafriol" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-coral transition-colors">
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Grid of remaining projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {projects.slice(1).map((project) => (
            <a
              key={project.name}
              href="https://www.behance.net/anahiafriol"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card relative rounded-xl overflow-hidden border border-border bg-card hover:border-coral/30 transition-all duration-300 hover:shadow-md"
            >
              {/* Gradient header with brand mark */}
              <div className={`h-24 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                <span className="text-3xl font-bold text-white/90 font-[family-name:var(--font-display)] opacity-80 group-hover/card:opacity-100 transition-opacity">
                  {project.letter}
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-petrol mb-1">
                  {project.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-snug">
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
