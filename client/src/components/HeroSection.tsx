import { ArrowRight, MessageCircle } from "lucide-react";

/*
 * Hero Section - Minimalista, cálido, profesional
 * Fondo claro con acentos naranja
 * Logo y paleta alineados al branding oficial
 */

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      aria-label="Introducción al servicio de branding para Pymes"
    >
      {/* Subtle warm gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-warm-gray/5 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-32 right-20 w-64 h-64 bg-orange/3 rounded-full blur-3xl" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-orange/10 border border-orange/20 rounded-full px-5 py-2.5">
              <span className="w-2.5 h-2.5 bg-orange rounded-full animate-pulse" />
              <span className="text-sm text-warm-gray-dark font-medium">Especialista en Branding para Pymes · 20+ años</span>
            </div>

            {/* H1 - Keyword principal SEO */}
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-warm-gray-dark leading-[1.08] tracking-tight">
              Tu marca te quedó{" "}
              <span className="relative inline-block">
                <span className="text-orange">chica</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 7 Q50 0 100 5 Q150 8 200 2" fill="none" stroke="#EF7B48" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              .
              <br className="hidden sm:block" />
              <span className="text-warm-gray">Hagámosla </span>
              <span className="text-orange">crecer</span>.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-warm-gray leading-relaxed max-w-xl">
              <strong className="text-warm-gray-dark font-semibold">Branding verbal, visual y espacial</strong> para Pymes, profesionales y emprendedores que necesitan una marca que comunique su verdadero valor y los elijan por lo que valen — no por lo que cobran.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.link/eesy3f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-orange text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:bg-orange-dark hover:scale-[1.02] active:scale-[0.97] shadow-lg shadow-orange/25"
              >
                <MessageCircle className="w-5 h-5" />
                Agenda tu consulta gratuita
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-warm-gray/30 text-warm-gray-dark px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:bg-warm-gray/5 hover:border-warm-gray/50"
              >
                Cómo trabajo
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-6 border-t border-border">
              <div className="flex -space-x-2.5">
                <div className="w-10 h-10 rounded-full bg-orange/20 border-2 border-white flex items-center justify-center text-orange text-[10px] font-bold font-[family-name:var(--font-display)]">50+</div>
                <div className="w-10 h-10 rounded-full bg-warm-gray/20 border-2 border-white flex items-center justify-center text-warm-gray text-xs font-bold">P</div>
                <div className="w-10 h-10 rounded-full bg-orange/10 border-2 border-white flex items-center justify-center text-orange text-xs font-bold">M</div>
              </div>
              <p className="text-warm-gray text-sm leading-snug">
                <strong className="text-warm-gray-dark">+50 marcas transformadas</strong><br />
                para pymes argentinas
              </p>
            </div>
          </div>

          {/* Right: Image with floating elements */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-6 bg-orange/5 rounded-3xl blur-2xl" />
              <img
                src="/manus-storage/hero-branding-office_47214cff.png"
                alt="Espacio corporativo con branding aplicado - ejemplo de branding espacial para eventos, oficinas y locales"
                className="relative rounded-2xl shadow-lg w-full object-cover"
                loading="eager"
              />
              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-5 max-w-[220px] border border-border">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-3 h-3 bg-orange rounded-full" />
                  <span className="text-xs font-bold text-warm-gray-dark font-[family-name:var(--font-display)]">Branding Espacial</span>
                </div>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Puestos de venta, oficinas y eventos que comunican tu marca
                </p>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-orange text-white rounded-lg px-4 py-3 shadow-lg">
                <div className="text-xs text-white/80 mb-0.5">Servicios</div>
                <div className="font-bold text-sm font-[family-name:var(--font-display)]">Verbal · Visual · Espacial</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
