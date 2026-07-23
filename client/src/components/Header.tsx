import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";

/*
 * Header - Zona caliente #1: Navegación fija con CTA visible siempre
 * Estilo: Warm Minimal - Coral accent on Petrol dark base
 * Tipografía: Plus Jakarta Sans (display) + DM Sans (nav links)
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
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container flex items-center justify-between py-4" role="navigation" aria-label="Navegación principal">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/manus-storage/logo-afriol_f2e98382.png"
            alt="Logo Anahí Afriol Branding"
            className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-105"
            width="40"
            height="40"
          />
          <div className="hidden sm:block">
            <span className={`font-[family-name:var(--font-display)] font-bold text-lg leading-tight ${scrolled ? "text-petrol" : "text-white"}`}>
              Anahí Afriol
            </span>
            <span className={`block text-xs font-medium leading-tight ${scrolled ? "text-coral" : "text-coral-light"}`}>
              Branding & Comunicación
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-coral ${
                scrolled ? "text-petrol" : "text-white/90"
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
            className="inline-flex items-center gap-2 bg-coral text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 hover:bg-coral-dark hover:scale-[1.02] active:scale-[0.97] shadow-md hover:shadow-lg"
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
            <X className={`w-6 h-6 ${scrolled ? "text-petrol" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-petrol" : "text-white"}`} />
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
                className="text-petrol font-medium text-base py-2 border-b border-muted hover:text-coral transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.link/eesy3f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-coral text-white px-5 py-3 rounded-md font-semibold text-base mt-2"
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
