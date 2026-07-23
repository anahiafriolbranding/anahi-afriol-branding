import { Award, BookOpen, Users } from "lucide-react";

/*
 * About Section - Zona caliente #5 (confianza y autoridad)
 * SEO: Contenido con keywords naturales sobre experiencia y formación
 * Layout: Imagen + texto asimétrico editorial
 */

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 bg-warm-bg" aria-label="Sobre Anahí Afriol - Especialista en Branding">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-coral/8 rounded-2xl blur-xl" />
              <img
                src="/manus-storage/hero-strategy-meeting_beee53f5.png"
                alt="Anahí Afriol presentando estrategia de branding para Pymes - especialista en desarrollo de marcas"
                className="relative rounded-2xl shadow-lg w-full object-cover"
                loading="lazy"
              />
              {/* Floating credential card */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-white rounded-xl shadow-lg p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-coral/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Formación</div>
                    <div className="text-sm font-semibold text-petrol">Diseñadora UBA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content - editorial */}
          <div className="lg:col-span-7 space-y-6 lg:pl-8">
            <span className="text-coral font-semibold text-sm uppercase tracking-wider">
              Sobre mí
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-petrol leading-tight">
              20+ años detectando lo que tu marca<br />no está comunicando
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                Soy <strong className="text-petrol">Anahí Afriol</strong>, Diseñadora Gráfica y Especialista en Administración del Sector Cultural, ambas carreras de la Universidad de Buenos Aires. Me capacito continuamente en marketing digital e inteligencia artificial para ofrecer soluciones de branding actualizadas y efectivas.
              </p>
              <p>
                Con más de 20 años trabajando con pymes argentinas, aprendí algo que ningún libro de marketing enseña: <em className="text-petrol font-medium not-italic">la mayoría de los negocios que no crecen como deberían no tienen un problema de producto. Tienen un problema de identidad de marca.</em>
              </p>
              <p>
                No empiezo por el logo. Empiezo por entender tu negocio, tu mercado y tu cliente ideal. Cuando la estrategia está clara, el diseño es una consecuencia lógica — no una apuesta estética. Trabajé con más de 50 pymes de distintos rubros, ayudándolas a diferenciarse, subir precios sin perder clientes y comunicar con coherencia.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-coral font-[family-name:var(--font-display)]">20+</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wide">Años de experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral font-[family-name:var(--font-display)]">50+</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wide">Marcas transformadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral font-[family-name:var(--font-display)]">3</div>
                <div className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wide">Unidades de negocio</div>
              </div>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border shadow-sm">
                <BookOpen className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium text-petrol">Diseñadora Gráfica UBA</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border shadow-sm">
                <Award className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium text-petrol">Espec. Gestión Cultural UBA</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 border border-border shadow-sm">
                <Users className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium text-petrol">IA Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
