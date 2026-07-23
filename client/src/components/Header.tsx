import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";

/*
 * Header - Logo oficial + paleta naranja/gris
 * Estilo: Minimalista, profesional, cálido
 */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#cliente-ideal", label: "Para quién" },
    { href: "#unidades", label: "Unidades de Negocio" },
    { href: "#sobre-mi", label: "Sobre mí" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/90 backdrop-blur-sm"
      }`}
      role="banner"
    >
      <nav className="container flex items-center justify-between py-4" role="navigation" aria-label="Navegación principal">
        {/* Logo oficial */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/manus-storage/logo-anahi-afriol_59af9d71.png"
            alt="Logo Anahí Afriol Branding y Comunicación para Pymes"
            className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            width="120"
            height="40"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-orange ${
                scrolled ? "text-warm-gray-dark" : "text-warm-gray-dark"
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* CTA Header - Zona caliente */}
          <a
            href="https://wa.link/eesy3f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 hover:bg-orange-dark hover:scale-[1.02] active:scale-[0.97] shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-warm-gray-dark" />
          ) : (
            <Menu className="w-6 h-6 text-warm-gray-dark" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-warm-gray-dark font-medium text-base py-2 border-b border-muted hover:text-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.link/eesy3f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-orange text-white px-5 py-3 rounded-md font-semibold text-base mt-2"
            >
              <Phone className="w-4 h-4" />
              Hablemos por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
