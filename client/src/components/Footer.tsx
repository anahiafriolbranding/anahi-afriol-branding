import { MapPin } from "lucide-react";

/*
 * Footer - SEO local + información de contacto + navegación
 */

export default function Footer() {
  return (
    <footer className="bg-petrol text-white py-12 border-t border-white/10" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/manus-storage/logo-afriol_f2e98382.png"
                alt="Logo Anahí Afriol"
                className="w-8 h-8 object-contain"
                width="32"
                height="32"
              />
              <div>
                <span className="font-[family-name:var(--font-display)] font-bold text-base">Anahí Afriol</span>
                <span className="block text-xs text-white/50">Branding & Comunicación</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Especialista en desarrollo de marcas para Pymes, profesionales y emprendedores. Más de 20 años transformando marcas invisibles en motores de crecimiento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-white/60 text-sm hover:text-coral transition-colors">Servicios</a></li>
              <li><a href="#cliente-ideal" className="text-white/60 text-sm hover:text-coral transition-colors">Para quién</a></li>
              <li><a href="#unidades" className="text-white/60 text-sm hover:text-coral transition-colors">Unidades de Negocio</a></li>
              <li><a href="#sobre-mi" className="text-white/60 text-sm hover:text-coral transition-colors">Sobre mí</a></li>
              <li><a href="#contacto" className="text-white/60 text-sm hover:text-coral transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact + Location */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-coral" />
                Pilar, Buenos Aires, Argentina
              </div>
              <a href="https://wa.link/eesy3f" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 text-sm hover:text-coral transition-colors">
                WhatsApp
              </a>
              <a href="https://www.behance.net/anahiafriol" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 text-sm hover:text-coral transition-colors">
                Behance Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Anahí Afriol. Branding y Comunicación para Pymes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-white/40 text-xs">
            <a href="https://semasespaciosdemarca.my.canva.site/" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">SE+ Espacios</a>
            <span>|</span>
            <a href="https://www.aslanguageservices.org/pampavox-latam" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors">PAMPA VOX</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
