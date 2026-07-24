import { Download } from "lucide-react";

/*
 * Lead Magnet Section - Naranja cálido
 */

export default function LeadMagnetSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange to-orange-dark text-white" aria-label="Evaluación gratuita de marca">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Download className="w-4 h-4" />
            Recurso gratuito
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-4">
            Evaluá tu marca gratis
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Muchas Pymes invierten en redes, publicidad y contenido… pero siguen sin ver resultados. El problema, casi siempre, está en la marca. Con este checklist gratuito vas a poder evaluar en minutos el estado real de tu identidad, tu posicionamiento y tu comunicación — y detectar exactamente dónde está la fuga.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 mb-8 text-white/90 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full" />
              Sin tecnicismos
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full" />
              Sin vueltas
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full" />
              100% accionable
            </li>
          </ul>
          <a
            href="https://tr.ee/kuaY2LirOz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-orange px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:bg-white/90 hover:scale-[1.02] active:scale-[0.97] shadow-lg"
          >
            <Download className="w-5 h-5" />
            Descargalo gratis
          </a>
        </div>
      </div>
    </section>
  );
}
