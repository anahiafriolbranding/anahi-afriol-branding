import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, MessageCircle, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljrgjgg";

function trackEvent(event: string, label: string) {
  if (typeof window === "undefined") return;
  const dataLayer = ((window as typeof window & { dataLayer?: unknown[] }).dataLayer ??= []);
  dataLayer.push({
    event,
    eventCategory: "contact",
    eventAction: event === "form_conversion" ? "success" : "submit",
    eventLabel: label,
  });
}

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Simple honeypot to reduce automated submissions without adding friction.
    if (String(formData.get("_gotcha") ?? "").trim()) return;

    setStatus("sending");
    trackEvent("form_submit", "contact_form");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      form.reset();
      trackEvent("form_conversion", "contact_form_formspree_success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-warm-gray-dark py-24 text-white"
      aria-label="Contactar a Anahí Afriol para branding de Pymes"
    >
      <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-orange/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-orange-light">
            Contactame
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight sm:text-4xl">
            Detectamos qué no está
            <br />
            comunicando tu marca.
            <br />
            <span className="text-orange-light">Y lo volvemos claro, vendible y coherente.</span>
          </h2>
          <p className="mb-10 mt-6 text-lg leading-relaxed text-white/60">
            Escribime y conversemos sobre tu proyecto. La primera consulta es gratuita y sin compromiso.
            Te respondo personalmente para orientarte sobre el mejor próximo paso.
          </p>

          <div className="mb-10 grid max-w-lg gap-4 sm:mx-auto sm:grid-cols-2">
            <a
              href="https://wa.link/eesy3f"
              target="_blank"
              rel="noopener noreferrer"
              data-track="whatsapp_click"
              data-track-category="contact"
              data-track-action="click"
              data-track-label="contact_whatsapp"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange/25 transition-all duration-200 hover:scale-[1.02] hover:bg-orange-dark active:scale-[0.97]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href="mailto:contacto@anahiafriolbranding.com.ar"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-white/15 active:scale-[0.97]"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
          </div>

          <div className="mb-4 flex items-center gap-4 text-sm text-white/40 before:h-px before:flex-1 before:bg-white/15 after:h-px after:flex-1 after:bg-white/15">
            <span>o completá el formulario</span>
          </div>

          {status === "success" ? (
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-10 text-center">
              <CheckCircle2 className="mx-auto mb-3 h-10 w-10 text-emerald-400" aria-hidden="true" />
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">Mensaje recibido</h3>
              <p className="mt-2 text-sm text-white/60">
                Gracias por escribirme. Voy a revisar tu consulta y responderte personalmente.
              </p>
            </div>
          ) : (
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-5 text-left sm:p-7"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white/80">Nombre *</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-orange-light focus:ring-2 focus:ring-orange/30"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white/80">Email *</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@email.com"
                    className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-orange-light focus:ring-2 focus:ring-orange/30"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-white/80">Teléfono o WhatsApp (opcional)</span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+54 11 1234-5678"
                    className="w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-orange-light focus:ring-2 focus:ring-orange/30"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-medium text-white/80">¿Qué necesitás resolver? *</span>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Contame brevemente qué necesitás para tu marca..."
                    className="w-full resize-y rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-orange-light focus:ring-2 focus:ring-orange/30"
                  />
                </label>
              </div>

              <input
                name="_gotcha"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-px w-px opacity-0"
              />

              {status === "error" && (
                <p className="mt-4 rounded-lg border border-red-300/30 bg-red-400/10 px-4 py-3 text-sm text-red-100" role="alert">
                  No pudimos enviar el mensaje. Probá nuevamente o escribime directamente por WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                data-track="form_submit_click"
                data-track-category="contact"
                data-track-action="submit"
                data-track-label="contact_form"
                className="mx-auto mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-orange px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange/25 transition-all duration-200 hover:bg-orange-dark active:scale-[0.97] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          )}

          <div className="mt-8 flex items-center justify-center gap-5">
            <a href="https://www.linkedin.com/in/anahi-afriol-branding-pymes" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-orange" aria-label="LinkedIn de Anahí Afriol">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/anahiafriolbrandingpymes/" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-orange" aria-label="Instagram de Anahí Afriol Branding">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@anahiafriolbrandingpymes" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-orange" aria-label="TikTok de Anahí Afriol Branding">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
