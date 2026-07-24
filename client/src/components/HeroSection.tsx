import { ArrowRight, MessageCircle } from "lucide-react";

/*
 * Hero Section - H1 corregido, fotos reales, jerarquía semántica
 * H1 único en toda la página
 * Foto de Anahí como retrato cálido
 * Foto Aviguri como branding espacial real
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
            {/* Badge - E-E-A-T signal */}
            <div className="inline-flex items-center gap-2.5 bg-orange/10 border border-orange/20 rounded-full px-5 py-2.5">
              <span className="w-2.5 h-2.5 bg-orange rounded-full animate-pulse" />
              <span className="text-sm text-warm-gray-dark font-medium">Especialista en Branding para Pymes · 20+ años</span>
            </div>

            {/* H1 - ÚNICO en toda la página */}
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-warm-gray-dark leading-[1.08] tracking-tight">
              Tu negocio creció.<br />
              Tu marca,{" "}
              <span className="relative inline-block">
                <span className="text-orange">todavía no</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 7 Q50 0 100 5 Q150 8 200 2" fill="none" stroke="#EF7B48" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>

            {/* Subheadline revisado - sin redundancia con H1 */}
            <p className="text-lg sm:text-xl text-warm-gray leading-relaxed max-w-xl">
              <strong className="text-warm-gray-dark font-semibold">Branding verbal, visual y espacial</strong> para Pymes y profesionales que ya crecieron en su negocio, y ahora necesitan una marca que los acompañe — que comunique su verdadero valor y los elijan por lo que valen, no por lo que cobran.
            </p>

            {/* CTAs - NO MODIFICADOS */}
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

            {/* Social proof - NO MODIFICADO */}
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

          {/* Right: Photo of Anahí + Branding Espacial card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-6 bg-orange/5 rounded-3xl blur-2xl" />
              {/* FOTO REAL DE ANAHÍ */}
              <img
                src="/manus-storage/anahi-retrato_20b7b201.jpg"
                alt="Anahí Afriol, consultora de branding y comunicación para pymes"
                className="relative rounded-2xl shadow-lg w-full object-cover"
                loading="eager"
                width="467"
                height="605"
              />
              {/* Tarjeta flotante con foto real de branding espacial Aviguri */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 max-w-[240px] border border-border">
                <img
                  src="/manus-storage/aviguri-fachada_24c0e602.webp"
                  alt="Aplicación de branding espacial en fachada de Aviguri - Frutería y Verdulería con identidad de marca completa"
                  className="rounded-lg w-full h-28 object-cover mb-3"
                  loading="eager"
                />
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-orange rounded-full" />
                  <h3 className="text-xs font-bold text-warm-gray-dark font-[family-name:var(--font-display)]">Branding Espacial</h3>
                </div>
                <p className="text-xs text-warm-gray leading-relaxed">
                  Fachada completa con identidad de marca aplicada
                </p>
              </div>
              {/* Badge servicios - h2 semántico */}
              <div className="absolute -top-4 -right-4 bg-orange text-white rounded-lg px-4 py-3 shadow-lg">
                <p className="text-xs text-white/80 mb-0.5">Servicios</p>
                <p className="font-bold text-sm font-[family-name:var(--font-display)]">Branding</p>
                <p className="text-xs text-white/70 mt-0.5">Verbal · Visual · Espacial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
