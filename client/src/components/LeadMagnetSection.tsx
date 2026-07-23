import { Download } from "lucide-react";

/*
 * Lead Magnet Section - Naranja cálido
 */

export default function LeadMagnetSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange to-orange-dark text-white" aria-label="Guía gratuita de branding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Download className="w-4 h-4" />
            Recurso gratuito
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-4">
            Descargá gratis la Guía Práctica de Marca
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Un recurso práctico para evaluar el estado actual de tu marca y descubrir qué necesita para comunicar su verdadero valor.
          </p>
          <a
            href="https://form.jotform.com/250844533721657"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-orange px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.97] shadow-lg"
          >
            <Download className="w-5 h-5" />
            Quiero mi guía gratis
          </a>
        </div>
      </div>
    </section>
  );
}
