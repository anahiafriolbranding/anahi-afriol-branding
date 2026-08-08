import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ClientSection from "@/components/ClientSection";
import PortfolioSection from "@/components/PortfolioSection";
import BusinessUnits from "@/components/BusinessUnits";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

/**
 * Home Page - Anahí Afriol Branding y Comunicación para Pymes
 * 
 * Zona caliente (hot zones) implementadas:
 * 1. Header con CTA WhatsApp siempre visible
 * 2. Hero con H1 SEO + doble CTA (principal: WhatsApp)
 * 3. Servicios con cards interactivas
 * 4. Cliente ideal con diagnóstico del dolor
 * 5. Portfolio/Casos de éxito
 * 6. Unidades de negocio (SE+ y PAMPA VOX)
 * 7. Sobre mí con credenciales
 * 8. Testimonios de clientes reales
 * 9. Lead Magnet (Guía gratuita)
 * 10. Contacto final con múltiples canales
 * 11. Footer con navegación y SEO local
 */

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ClientSection />
        <PortfolioSection />
        <BusinessUnits />
        <AboutSection />
        <TestimonialsSection />
        <LeadMagnetSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
