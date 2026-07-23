import { ArrowRight, MessageCircle } from "lucide-react";

/*
 * Hero Section - Zona caliente #1 (principal)
 * Copy SEO: H1 con keyword principal + propuesta de valor clara
 * Layout asimétrico editorial: texto dominante izquierda / imagen derecha con card flotante
 * Estilo: Warm Minimal con fondo petrol oscuro + coral accent
 * Tipografía: Más audaz, más contrastada, voz de estratega
 */

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, oklch(0.20 0.07 240) 0%, oklch(0.16 0.08 250) 40%, oklch(0.22 0.06 240) 100%)" }}
      aria-label="Introducción al servicio de branding para Pymes"
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Accent orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-coral/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-coral/3 rounded-full blur-3xl" />

      <div className="container relative z-10 pt-28 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Editorial Copy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full px-5 py-2.5">
              <span className="w-2.5 h-2.5 bg-coral rounded-full animate-pulse" />
              <span className="text-sm text-white/80 font-medium">Especialista en Branding para Pymes · 20+ años</span>
            </div>

            {/* H1 - Keyword principal SEO + voz estratégica */}
            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              Tu marca te quedó{" "}
              <span className="relative inline-block">
                <span className="text-coral">chica</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 7 Q50 0 100 5 Q150 8 200 2" fill="none" stroke="#D95040" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              .
              <br className="hidden sm:block" />
              <span className="text-white/90">Hagámosla </span>
              <span className="text-coral-light">crecer</span>.
            </h1>

            {/* Subheadline - más directa y estratégica */}
            <p className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              <strong className="text-white font-semibold">Branding verbal, visual y espacial</strong> para Pymes, profesionales y emprendedores que necesitan una marca que comunique su verdadero valor y los elijan por lo que valen — no por lo que cobran.
            </p>

            {/* CTAs - Zona caliente principal */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.link/eesy3f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-coral text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:bg-coral-light hover:scale-[1.02] active:scale-[0.97] shadow-xl shadow-coral/30"
              >
                <MessageCircle className="w-5 h-5" />
                Agenda tu consulta gratuita
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-200 hover:bg-white/8 hover:border-white/40"
              >
                Cómo trabajo
              </a>
            </div>

            {/* Social proof mini */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex -space-x-2.5">
                <div className="w-10 h-10 rounded-full bg-coral/40 border-2 border-petrol flex items-center justify-center text-white text-[10px] font-bold font-[family-name:var(--font-display)]">50+</div>
                <div className="w-10 h-10 rounded-full bg-coral/25 border-2 border-petrol flex items-center justify-center text-white text-xs font-bold">P</div>
                <div className="w-10 h-10 rounded-full bg-coral/15 border-2 border-petrol flex items-center justify-center text-white text-xs font-bold">M</div>
              </div>
              <p className="text-white/50 text-sm leading-snug">
                <strong className="text-white/80">+50 marcas transformadas</strong><br />
                para pymes argentinas
              </p>
            </div>
          </div>

          {/* Right: Image with floating elements */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute -inset-6 bg-coral/10 rounded-3xl blur-2xl" />

              {/* Main image */}
              <img
                src="/manus-storage/hero-branding-office_47214cff.png"
                alt="Espacio corporativo con branding aplicado - ejemplo de branding espacial para eventos, oficinas y locales"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
                loading="eager"
              />

              {/* Floating card - branding spatial */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-5 max-w-[220px] border border-border/50">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-3 h-3 bg-coral rounded-full" />
                  <span className="text-xs font-bold text-petrol font-[family-name:var(--font-display)]">Branding Espacial</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Puestos de venta, oficinas y eventos que comunican tu marca
                </p>
                <div className="mt-3 flex gap-1.5">
                  <span className="w-4 h-4 rounded bg-coral" />
                  <span className="w-4 h-4 rounded bg-petrol" />
                  <span className="w-4 h-4 rounded bg-petrol-light" />
                  <span className="w-4 h-4 rounded bg-muted" />
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 bg-petrol text-white rounded-lg px-4 py-3 shadow-xl">
                <div className="text-xs text-white/60 mb-0.5">Servicios</div>
                <div className="font-bold text-sm font-[family-name:var(--font-display)]">Verbal · Visual · Espacial</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40L48 35.3C96 30.7 192 21.3 288 25.3C384 29.3 480 46.7 576 52.3C672 58 768 52 864 43.3C960 34.7 1056 23.3 1152 25.3C1248 27.3 1344 42.7 1392 50.3L1440 58V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V40Z" fill="oklch(0.99 0.002 80)"/>
        </svg>
      </div>
    </section>
  );
}
