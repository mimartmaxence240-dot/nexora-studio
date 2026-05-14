import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Layers3,
  Mail,
  MonitorSmartphone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Réalisations", href: "#portfolio" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Création de site web",
    description:
      "Sites vitrines rapides, élégants et pensés pour présenter votre activité avec clarté.",
    icon: MonitorSmartphone,
  },
  {
    title: "Refonte de site",
    description:
      "Modernisation complète de votre présence en ligne, avec une direction visuelle plus premium.",
    icon: RefreshCw,
  },
  {
    title: "Landing pages",
    description:
      "Pages ciblées pour vos offres, campagnes ou lancements, optimisées pour convertir.",
    icon: Layers3,
  },
  {
    title: "Maintenance & mises à jour",
    description:
      "Suivi technique, ajustements de contenu et améliorations régulières pour garder un site fiable.",
    icon: ShieldCheck,
  },
];

const pricing = [
  {
    name: "Starter",
    description: "Landing page moderne",
    price: "À partir de 150€",
    features: ["Une page premium", "Design responsive", "Mise en ligne rapide"],
  },
  {
    name: "Business",
    description: "Site vitrine professionnel",
    price: "À partir de 350€",
    features: ["Plusieurs sections", "UI/UX personnalisée", "Structure orientée conversion"],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "Site sur mesure + suivi",
    price: "À partir de 700€",
    features: ["Direction artistique complète", "Accompagnement stratégique", "Suivi après lancement"],
  },
];

const portfolio = [
  {
    title: "Restaurant moderne",
    description:
      "Site immersif pour un restaurant urbain avec carte lisible, réservation mise en avant et ambiance haut de gamme.",
    tags: ["Hospitalité", "Réservation", "Mobile first"],
    gradient: "from-sky-500/30 to-violet-500/30",
  },
  {
    title: "Salle de sport premium",
    description:
      "Landing page dynamique pour une salle de sport locale, pensée pour présenter les offres et générer des demandes d’essai.",
    tags: ["Landing page", "Conversion", "Abonnements"],
    gradient: "from-indigo-500/30 to-cyan-400/25",
  },
  {
    title: "Agence immobilière",
    description:
      "Site vitrine élégant avec mise en valeur des biens, discours de confiance et parcours contact simplifié.",
    tags: ["Immobilier", "Catalogue", "Lead generation"],
    gradient: "from-violet-500/30 to-blue-500/25",
  },
];

const benefits = [
  "Sites rapides, lisibles et optimisés pour mobile.",
  "Design moderne inspiré des meilleurs standards SaaS.",
  "Accompagnement clair, flexible et adapté aux petites équipes.",
];

function Logo() {
  return (
    <a href="#hero" className="logo" aria-label="Accueil Kyvera">
      <span className="logo-symbol">K</span>
      <span className="logo-text">Kyvera</span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020513] text-white">
      <div className="site-ambient" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020513]/72 backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <div className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="button button-small">
            Me contacter
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28 lg:pt-44">
          <div className="relative z-10">
            <div className="eyebrow">
              <span className="status-dot" />
              Agence web freelance pour marques ambitieuses
            </div>
            <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Création de sites web modernes pour entreprises ambitieuses
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Kyvera conçoit des sites rapides, élégants et optimisés pour
              attirer plus de clients.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#services" className="button button-primary">
                Voir les services
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="button button-secondary">
                Me contacter
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              <div className="metric-tile">
                <div className="text-2xl font-semibold sm:text-3xl">100%</div>
                <div className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                  responsive
                </div>
              </div>
              <div className="metric-tile">
                <div className="text-2xl font-semibold sm:text-3xl">SEO</div>
                <div className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                  bases optimisées
                </div>
              </div>
              <div className="metric-tile">
                <div className="text-2xl font-semibold sm:text-3xl">7j</div>
                <div className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                  lancement possible
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Aperçu d'interface Kyvera">
            <div className="visual-glow" aria-hidden="true" />
            <div className="browser-shell">
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <div>kyvera.fr/projet-client</div>
              </div>
              <div className="dashboard-grid">
                <div className="dashboard-main">
                  <div className="panel-heading">
                    <span>Impact digital</span>
                    <Sparkles size={16} />
                  </div>
                  <div className="signal-graph" aria-hidden="true">
                    <span className="graph-line graph-line-one" />
                    <span className="graph-line graph-line-two" />
                    <span className="graph-node node-one" />
                    <span className="graph-node node-two" />
                    <span className="graph-node node-three" />
                  </div>
                  <div className="dashboard-row">
                    <span>Qualité perçue</span>
                    <strong>96%</strong>
                  </div>
                  <div className="progress-track">
                    <span style={{ width: "96%" }} />
                  </div>
                </div>
                <div className="mini-panel">
                  <span className="mini-kicker">Design</span>
                  <strong>UI/UX</strong>
                  <p>Interfaces sobres, modernes et orientées confiance.</p>
                </div>
                <div className="mini-panel accent-panel">
                  <span className="mini-kicker">Performance</span>
                  <strong>Fast</strong>
                  <p>Structure légère, claire et prête pour la croissance.</p>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-item active">
                    <CheckCircle2 size={15} />
                    Audit & cadrage
                  </div>
                  <div className="timeline-item active">
                    <CheckCircle2 size={15} />
                    Design premium
                  </div>
                  <div className="timeline-item">
                    <span />
                    Mise en ligne
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="brand-ribbon" aria-label="Expertises Kyvera">
          <div>
            <span>Sites vitrines</span>
            <span>Landing pages</span>
            <span>Refonte UI/UX</span>
            <span>Maintenance</span>
            <span>SEO technique</span>
            <span>Design responsive</span>
            <span>Performance</span>
            <span>Identité premium</span>
            <span>Sites vitrines</span>
            <span>Landing pages</span>
            <span>Refonte UI/UX</span>
            <span>Maintenance</span>
            <span>SEO technique</span>
            <span>Design responsive</span>
            <span>Performance</span>
            <span>Identité premium</span>
          </div>
        </div>
      </section>

      <section id="services" className="section-wrap">
        <div className="section-heading">
          <p className="section-label">Services</p>
          <h2>Des sites élégants, rapides et pensés pour générer des demandes.</h2>
          <p>
            Kyvera accompagne les indépendants, commerces, entreprises locales
            et startups qui veulent une présence web plus claire, plus moderne
            et plus crédible.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" aria-label={`Demander un devis pour ${service.title}`}>
                  Demander un devis
                  <ArrowRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="section-wrap">
        <div className="section-heading">
          <p className="section-label">Tarifs</p>
          <h2>Des offres simples pour lancer un site professionnel.</h2>
          <p>
            Chaque projet est ajusté selon vos objectifs, votre contenu et le
            niveau de personnalisation souhaité.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricing.map((offer) => (
            <article
              className={`pricing-card ${offer.highlighted ? "pricing-card-featured" : ""}`}
              key={offer.name}
            >
              <div>
                <div className="pricing-topline">
                  <span>{offer.name}</span>
                  {offer.highlighted ? <Sparkles size={17} /> : null}
                </div>
                <h3>{offer.description}</h3>
                <p className="price">{offer.price}</p>
              </div>
              <div className="pricing-features">
                {offer.features.map((feature) => (
                  <div key={feature}>
                    <CheckCircle2 size={17} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="button button-secondary">
                Choisir cette offre
                <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section-wrap">
        <div className="section-heading">
          <p className="section-label">Portfolio</p>
          <h2>Des concepts réalistes pour des activités qui doivent inspirer confiance.</h2>
          <p>
            Quelques directions de projets possibles pour montrer la qualité
            visuelle, la lisibilité mobile et l&apos;approche orientée conversion.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article className="portfolio-card" key={project.title}>
              <div className={`portfolio-mockup bg-gradient-to-br ${project.gradient}`}>
                <div className="mockup-window">
                  <div className="mockup-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mockup-hero" />
                  <div className="mockup-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-label">À propos</p>
          <h2 className="section-title">
            Kyvera crée des sites modernes et performants pour les entreprises
            locales et les startups.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            L&apos;agence combine design minimaliste, stratégie de conversion et
            développement propre pour livrer des sites faciles à comprendre,
            agréables à parcourir et simples à faire évoluer.
          </p>
          <div className="mt-8 space-y-4">
            {benefits.map((item) => (
              <div className="process-line" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-panel">
          <div className="about-stat">
            <span>01</span>
            <strong>Design premium</strong>
            <p>
              Une direction visuelle sobre, actuelle et cohérente avec votre
              image de marque.
            </p>
          </div>
          <div className="about-stat">
            <span>02</span>
            <strong>Expérience claire</strong>
            <p>
              Des parcours pensés pour présenter vos services et faciliter la
              prise de contact.
            </p>
          </div>
          <div className="about-stat">
            <span>03</span>
            <strong>Suivi durable</strong>
            <p>
              Des ajustements, mises à jour et améliorations possibles après la
              mise en ligne.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-wrap pb-24">
        <div className="contact-shell">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="section-title">
              Un site plus moderne peut devenir votre meilleur commercial.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Présentez votre activité, votre objectif et le type de site dont
              vous avez besoin. Kyvera vous répond avec une recommandation claire
              et une estimation adaptée.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
              <a className="contact-link" href="mailto:contact@kyvera.fr">
                <Mail size={18} />
                contact@kyvera.fr
              </a>
              <a className="contact-link" href="https://instagram.com/kyvera.studio">
                <Instagram size={18} />
                @kyvera.studio
              </a>
            </div>
          </div>
          <form className="contact-form">
            <label>
              <span>Votre email</span>
              <input type="email" name="email" placeholder="vous@entreprise.fr" />
            </label>
            <label>
              <span>Type de projet</span>
              <input
                type="text"
                name="projectType"
                placeholder="Site vitrine, landing page, refonte..."
              />
            </label>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                placeholder="Décrivez votre activité et votre objectif."
                rows={5}
              />
            </label>
            <button className="button button-primary w-full justify-center" type="submit">
              Demander un devis
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-9 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <Logo />
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {navItems.map((item) => (
              <a className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500">© 2026 Kyvera. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
