import { Building, Briefcase, Rocket } from "lucide-react";

/*
 * Client Ideal Section - Zona caliente #3
 * SEO: H2 con segmentos de cliente ideal
 * Layout: 3 cards identificando los 3 perfiles de cliente
 * Copy: Más directo, diagnóstico, con lenguaje de estratega
 */

const clients = [
  {
    icon: Building,
    title: "Pymes en crecimiento",
    description: "Tu negocio funciona bien, pero los clientes que llegan no perciben su verdadero valor. Competís por precio cuando deberías ser elegido por lo que valés.",
    signal: "Tu marca no convence al primer vistazo",
    color: "text-coral",
  },
  {
    icon: Briefcase,
    title: "Profesionales independientes",
    description: "Consultores, arquitectos, médicos y especialistas que necesitan una marca personal sólida que los diferencie y les permita cobrar por su expertise real.",
    signal: "Necesitás que tu marca hable antes que vos",
    color: "text-coral-light",
  },
  {
    icon: Rocket,
    title: "Emprendedores escalando",
    description: "Llegaste a un punto de crecimiento donde la marca informal ya no alcanza. Necesitás estructura para escalar, atraer inversores o dejar de competir por precio.",
    signal: "Tu negocio creció, tu marca se quedó atrás",
    color: "text-white",
  },
];

export default function ClientSection() {
  return (
    <section id="cliente-ideal" className="py-24 bg-petrol text-white relative overflow-hidden" aria-label="Para quién trabaja Anahí Afriol">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral/3 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header - more editorial */}
        <div className="max-w-4xl mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <span className="text-coral font-semibold text-sm uppercase tracking-wider mb-3 block">
                Para quién trabajo
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold leading-tight">
                ¿Tu negocio es bueno<br />pero tu marca no lo comunica?
              </h2>
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              La mayoría de los negocios que no crecen como deberían no tienen un problema de producto. Tienen un problema de identidad. No saben comunicar lo que los hace diferentes, y entonces compiten por precio cuando deberían ser elegidos por valor.
            </p>
          </div>
        </div>

        {/* Client cards - asymmetric layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client, i) => (
            <div
              key={client.title}
              className={`relative rounded-xl p-8 transition-all duration-300 group ${
                i === 1
                  ? "bg-coral/15 border border-coral/25 md:translate-y-4"
                  : "bg-white/5 border border-white/10 hover:bg-white/8"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                i === 1 ? "bg-coral/25" : "bg-white/10"
              }`}>
                <client.icon className={`w-6 h-6 ${client.color}`} />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3">
                {client.title}
              </h3>
              <p className="text-white/60 leading-relaxed mb-5">
                {client.description}
              </p>
              <div className={`flex items-center gap-2 text-sm font-medium ${
                i === 1 ? "text-coral-light" : "text-white/50"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${i === 1 ? "bg-coral" : "bg-white/40"}`} />
                {client.signal}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-white/70 text-lg mb-6">
            Si te reconocés en alguno de estos perfiles, ya empezamos a trabajar.
          </p>
          <a
            href="https://wa.link/eesy3f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:bg-coral-light hover:scale-[1.02] active:scale-[0.97] shadow-lg shadow-coral/25"
          >
            Escribime y detectamos qué le falta a tu marca
          </a>
        </div>
      </div>
    </section>
  );
}
