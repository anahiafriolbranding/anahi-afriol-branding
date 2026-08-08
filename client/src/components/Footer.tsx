import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

/*
 * Footer - Minimalista, cálido
 * Colores warm-gray-dark con acentos naranja
 */

export default function Footer() {
  return (
    <footer className="bg-warm-bg border-t border-border" role="contentinfo">
      <div className="container py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand + Info */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/manus-storage/logo-anahi-afriol_59af9d71.png"
                alt="Logo Anahí Afriol Branding y Comunicación para Pymes"
                className="h-10 w-auto object-contain"
                width="120"
                height="40"
              />
            </Link>
            <p className="text-warm-gray leading-relaxed mb-6 max-w-md">
              Especialista en branding verbal, visual y espacial para Pymes, profesionales y emprendedores que necesitan una marca que comunique su verdadero valor.
            </p>
            <div className="space-y-3">
              <a href="https://wa.link/eesy3f" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-warm-gray-dark hover:text-orange transition-colors text-sm">
                <Phone className="w-4 h-4 text-orange" />
                WhatsApp: Consultá por tu proyecto
              </a>
              <a href="mailto:contacto@anahiafriolbranding.com.ar" className="flex items-center gap-3 text-warm-gray-dark hover:text-orange transition-colors text-sm">
                <Mail className="w-4 h-4 text-orange" />
                contacto@anahiafriolbranding.com.ar
              </a>
              <div className="flex items-center gap-3 text-warm-gray text-sm">
                <MapPin className="w-4 h-4 text-orange" />
                Pilar, Buenos Aires - Argentina
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-warm-gray-dark mb-4">Navegación</h3>
            <nav className="space-y-2.5" aria-label="Navegación footer">
              <a href="#servicios" className="block text-warm-gray hover:text-orange transition-colors text-sm">Servicios</a>
              <a href="#cliente-ideal" className="block text-warm-gray hover:text-orange transition-colors text-sm">Para quién</a>
              <a href="#unidades" className="block text-warm-gray hover:text-orange transition-colors text-sm">Unidades de Negocio</a>
              <a href="#sobre-mi" className="block text-warm-gray hover:text-orange transition-colors text-sm">Sobre mí</a>
              <a href="#contacto" className="block text-warm-gray hover:text-orange transition-colors text-sm">Contacto</a>
            </nav>
          </div>

          {/* Business Units */}
          <div className="lg:col-span-4">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-warm-gray-dark mb-4">Unidades de negocio</h3>
            <div className="space-y-4">
              <div>
                <p className="text-warm-gray text-xs uppercase tracking-wider mb-1">Principal</p>
                <p className="text-warm-gray-dark text-sm font-medium">Branding para Pymes</p>
                <p className="text-warm-gray text-xs mt-1">Estrategia, identidad y comunicación</p>
              </div>
              <div>
                <p className="text-warm-gray text-xs uppercase tracking-wider mb-1">Diseño de espacios</p>
                <a href="https://semasespaciosdemarca.my.canva.site/" target="_blank" rel="noopener noreferrer" className="text-warm-gray-dark text-sm font-medium hover:text-orange transition-colors">
                  SE+, Diseño de Espacios de Marca →
                </a>
                <p className="text-warm-gray text-xs mt-1">Identidad + Arquitectura</p>
              </div>
              <div>
                <p className="text-warm-gray text-xs uppercase tracking-wider mb-1">Branding bilingüe</p>
                <a href="https://www.aslanguageservices.org/pampavox-latam" target="_blank" rel="noopener noreferrer" className="text-warm-gray-dark text-sm font-medium hover:text-orange transition-colors">
                  PAMPA VOX →
                </a>
                <p className="text-warm-gray text-xs mt-1">Marcas que venden en inglés</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray text-sm">
            © {new Date().getFullYear()} Anahí Afriol Branding y Comunicación para Pymes
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.behance.net/anahiafriol" target="_blank" rel="noopener noreferrer" className="text-warm-gray hover:text-orange transition-colors" aria-label="Behance">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 3.786h-3.411c-.259-.896-1.049-1.558-2.077-1.558-1.367 0-2.36.911-2.36 3.116 0 2.226 1.049 3.116 2.36 3.116 1.206 0 1.884-.716 2.137-1.865h3.175zm-13.328-4.5H5.8v1.6h4.598V12.5zm0-3.2H5.8v1.6h4.598V8.3zM2 4h8v1.2H2V4zm8 14.8c0 1.6-1.2 2.8-3.6 2.8H2V12h4.4c2.4 0 3.6 1.2 3.6 2.8V18.8zM3.2 16h3.2c.8 0 1.2-.4 1.2-.8 0-.4-.4-.8-1.2-.8H3.2v1.6zm0-4h3.2c.8 0 1.2-.4 1.2-.8 0-.4-.4-.8-1.2-.8H3.2v1.6z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/anahi-afriol-branding-pymes" target="_blank" rel="noopener noreferrer" className="text-warm-gray hover:text-orange transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.instagram.com/anahiafriolbrandingpymes/" target="_blank" rel="noopener noreferrer" className="text-warm-gray hover:text-orange transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
