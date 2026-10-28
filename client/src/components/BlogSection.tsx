import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, ExternalLink, Loader2 } from "lucide-react";

const WORDPRESS_API = "https://public-api.wordpress.com/rest/v1.1/sites/anahiafriolbrandingpymes.wordpress.com/posts/?number=3";
const WORDPRESS_HOME = "https://anahiafriolbrandingpymes.wordpress.com/";

const fallbackPosts = [
  {
    title: "Una marca no empieza con un logo. Empieza con una pregunta.",
    date: "2026-09-29T09:30:00-03:00",
    excerpt: "Antes de diseñar una identidad, hay preguntas estratégicas que ayudan a entender qué necesita comunicar una marca.",
    link: "https://anahiafriolbrandingpymes.wordpress.com/2026/09/29/una-marca-no-empieza-con-un-logo-empieza-con-una-pregunta/",
    category: "Branding",
  },
  {
    title: "Necesito un logo para fin de mes",
    date: "2026-09-23T10:00:00-03:00",
    excerpt: "Un logo puede ser una parte de la identidad, pero no reemplaza una estrategia de marca clara y consistente.",
    link: "https://anahiafriolbrandingpymes.wordpress.com/2026/09/23/necesito-un-logo-para-fin-de-mes/",
    category: "Identidad visual",
  },
  {
    title: "Una marca no solo cambia cómo te ven",
    date: "2026-09-18T09:00:00-03:00",
    excerpt: "Una marca bien trabajada también ayuda a descubrir con quién te conviene trabajar y qué oportunidades querés atraer.",
    link: "https://anahiafriolbrandingpymes.wordpress.com/2026/09/18/una-marca-no-solo-cambia-como-te-ven-tambien-puede-ayudarte-a-descubrir-con-quien-te-conviene-trabajar/",
    category: "Estrategia",
  },
];

type Post = (typeof fallbackPosts)[number];

type WordPressPost = {
  title: string;
  date: string;
  URL: string;
  excerpt?: string;
  categories?: Record<string, { name?: string }>;
};

function stripHtml(value = "") {
  const element = document.createElement("div");
  element.innerHTML = value;
  return (element.textContent || "").replace(/\s+/g, " ").trim();
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function trackBlogEvent(event: string, label: string) {
  if (typeof window === "undefined") return;
  const dataLayer = ((window as typeof window & { dataLayer?: unknown[] }).dataLayer ??= []);
  dataLayer.push({ event, eventCategory: "content", eventAction: "click", eventLabel: label });
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(WORDPRESS_API, { signal: controller.signal, headers: { Accept: "application/json" } })
      .then((response) => {
        if (!response.ok) throw new Error("Blog API unavailable");
        return response.json() as Promise<{ posts?: WordPressPost[] }>;
      })
      .then((data) => {
        const latest = (data.posts ?? []).slice(0, 3).map((post) => ({
          title: stripHtml(post.title),
          date: post.date,
          excerpt: stripHtml(post.excerpt).slice(0, 150).replace(/\s+$/, "") + "…",
          link: post.URL,
          category: post.categories ? Object.values(post.categories)[0]?.name || Object.keys(post.categories)[0] || "Branding" : "Branding",
        }));
        if (latest.length) {
          setPosts(latest);
          setLive(true);
          trackBlogEvent("blog_posts_loaded", "wordpress_api");
        }
      })
      .catch(() => {
        // Keep the curated fallback visible if WordPress is temporarily unavailable.
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <section id="blog" className="bg-warm-bg py-24" aria-label="Blog de branding y comunicación para Pymes">
      <div className="container">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-orange">Ideas y recursos</span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-warm-gray-dark sm:text-4xl">
              Notas para construir una marca que se entienda y se elija
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-warm-gray">
              Reflexiones prácticas sobre branding, comunicación y decisiones de marca para Pymes y profesionales.
            </p>
          </div>
          <a
            href={WORDPRESS_HOME}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBlogEvent("blog_all_click", "blog_all_posts")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange transition-colors hover:text-orange-dark"
          >
            Ver todos los artículos <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3" aria-live="polite">
          {posts.map((post) => (
            <article key={post.link} className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex items-center justify-between gap-3 text-xs">
                <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-orange">
                  <BookOpen className="h-4 w-4" /> {post.category}
                </span>
                <time className="text-warm-gray" dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-warm-gray-dark">{post.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-warm-gray">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBlogEvent("blog_post_click", "blog_post_dynamic")}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange transition-colors hover:text-orange-dark"
              >
                Leer nota <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-warm-gray" aria-live="polite">
          {loading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          {loading ? "Actualizando las últimas notas…" : live ? "Últimas notas actualizadas desde WordPress" : "Mostrando las últimas notas disponibles"}
        </div>
      </div>
    </section>
  );
}
