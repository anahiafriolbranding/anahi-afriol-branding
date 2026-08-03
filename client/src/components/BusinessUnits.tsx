import { ExternalLink, Languages } from "lucide-react";

/*
 * Business Units Section - 3 unidades de negocio
 * Minimalista, cálido, profesional
 */

export default function BusinessUnits() {
  return (
    <section id="unidades" className="py-24 bg-background" aria-label="Unidades de negocio de Anahí Afriol">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-orange font-semibold text-sm uppercase tracking-wider mb-3 block">
              Ecosistema de marca
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-warm-gray-dark leading-tight">
              Tres formas de transformar<br />tu marca
            </h2>
          </div>
          <p className="text-warm-gray text-lg max-w-md">
            Además del branding estratégico para Pymes, ofrezco dos unidades especializadas que complementan la transformación integral.
          </p>
        </div>

        {/* Units - asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Unit 1: Branding Principal */}
          <div className="lg:col-span-4 bg-card border border-border rounded-xl p-8 hover:border-orange/30 transition-all duration-300 hover:shadow-lg">
            <div className="w-20 h-20 bg-orange rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img src="/manus-storage/logo-blanco_ca56deba.png" alt="Anahí Afriol Branding" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-warm-gray-dark mb-3">
              Branding para Pymes
            </h3>
            <p className="text-warm-gray leading-relaxed mb-6">
              Desarrollo integral de marcas: estrategia, identidad verbal, visual y espacial. Para empresas que necesitan diferenciarse y ser elegidas por valor.
            </p>
            <div className="flex items-center gap-2 text-orange font-semibold text-sm">
              <span className="w-2 h-2 bg-orange rounded-full" />
              Servicio principal
            </div>
          </div>

          {/* Unit 2: SE+ (featured) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-warm-gray-dark via-warm-gray-dark to-warm-gray rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/3 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange/10 rounded-full translate-y-10 -translate-x-10" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-orange rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src="/manus-storage/logo-se-blanco_8d74d713.png" alt="SE+ Diseño de Espacios de Marca" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                    SE+ Espacios de Marca
                  </h3>
                  <p className="text-white/60 text-sm">Identidad + Arquitectura</p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                Fusión de arquitectura e identidad. Transformamos marcas en experiencias palpables: puestos de venta, oficinas, locales comerciales y eventos que se <strong className="text-white">viven</strong>, no solo se ven.
              </p>

              <a
                href="https://semasespaciosdemarca.my.canva.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-orange-dark hover:scale-[1.02] active:scale-[0.97] shadow-lg shadow-orange/25"
              >
                Conocé SE+
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Unit 3: PAMPA VOX */}
          <div className="lg:col-span-3 bg-card border border-border rounded-xl p-8 hover:border-warm-gray-dark/25 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-warm-gray-dark/3 rounded-full" />
            <div className="relative z-10">
              <div className="w-20 h-14 flex items-center justify-center mb-6">
                <img src="/manus-storage/logo-pampavox_c0e7419b.png" alt="PAMPA VOX - Your brand, fluently rebuilt for bilingual growth" className="h-full w-auto object-contain" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-warm-gray-dark mb-2">
                PAMPA VOX
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-5">
                Branding bilingüe para startups Latam que expanden a mercados angloparlantes. Tu marca que vende en inglés.
              </p>
              <a
                href="https://www.aslanguageservices.org/pampavox-latam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-warm-gray-dark font-semibold text-sm hover:text-orange transition-colors"
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
