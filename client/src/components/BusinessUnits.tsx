import { ExternalLink, Paintbrush, Languages } from "lucide-react";

/*
 * Business Units Section - Zona caliente #4
 * 3 unidades de negocio con diseño editorial y asimétrico
 * SEO: Enlaces con anchor text relevante + rel="noopener noreferrer"
 */

export default function BusinessUnits() {
  return (
    <section id="unidades" className="py-24 bg-background" aria-label="Unidades de negocio de Anahí Afriol">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-3 block">
              Ecosistema de marca
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-petrol leading-tight">
              Tres formas de transformar<br />tu marca
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md">
            Además del branding estratégico para Pymes, ofrezco dos unidades especializadas que complementan la transformación completa.
          </p>
        </div>

        {/* Units - editorial asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Unit 1: Branding Principal (smaller) */}
          <div className="lg:col-span-4 bg-card border border-border rounded-xl p-8 hover:border-coral/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-14 h-14 bg-coral rounded-lg flex items-center justify-center mb-6">
              <Paintbrush className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-petrol mb-3">
              Branding para Pymes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Desarrollo integral de marcas: estrategia, identidad verbal, visual y espacial. Para empresas que necesitan diferenciarse y ser elegidas por valor.
            </p>
            <div className="flex items-center gap-2 text-coral font-semibold text-sm">
              <span className="w-2 h-2 bg-coral rounded-full" />
              Servicio principal
            </div>
          </div>

          {/* Unit 2: SE+ (featured - larger) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-petrol via-petrol to-petrol-light rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/3 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-coral/10 rounded-full translate-y-10 -translate-x-10" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-coral rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                    SE+ Espacios de Marca
                  </h3>
                  <p className="text-white/60 text-sm">Anahí Afriol + Yanina Afriol</p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                Fusión de arquitectura e identidad. Transformamos marcas en experiencias palpables: puestos de venta, oficinas, locales comerciales y eventos que se <strong className="text-white">viven</strong>, no solo se ven.
              </p>

              <a
                href="https://semasespaciosdemarca.my.canva.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-coral text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-coral-light hover:scale-[1.02] active:scale-[0.97] shadow-lg shadow-coral/25"
              >
                Conocé SE+
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Unit 3: PAMPA VOX (medium) */}
          <div className="lg:col-span-3 bg-card border border-border rounded-xl p-8 hover:border-petrol/25 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-petrol/3 rounded-full" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-petrol/8 rounded-lg flex items-center justify-center mb-6">
                <Languages className="w-7 h-7 text-petrol" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-petrol mb-2">
                PAMPA VOX
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Branding bilingüe para startups Latam que expanden a mercados angloparlantes. Tu marca que vende en inglés.
              </p>
              <a
                href="https://www.aslanguageservices.org/pampavox-latam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-petrol font-semibold text-sm hover:text-coral transition-colors"
              >
                Descubrí más
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
