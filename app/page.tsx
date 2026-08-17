import Nav from "@/components/Nav";
import Arches from "@/components/Arches";
import Reveal from "@/components/Reveal";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScasv6uelO55eDyfgPLRzbPi_l2Ewipv8F7pOTiciZNaUCl0A/viewform?usp=dialog";
const INSTAGRAM_URL = "https://www.instagram.com/texas.clay";
const LINKEDIN_URL = "#"; // TODO: swap in the club LinkedIn URL
const EMAIL = "clayoncampusut@gmail.com";

/* ---- Inline icons for the "What we do" cards ---- */
function IconFlag({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 3v18" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M5 4h11l-1.5 3L16 10H5z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconWorkflow({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="7" height="6" rx="2" fill={color} />
      <rect x="14" y="14" width="7" height="6" rx="2" fill={color} />
      <path
        d="M6.5 10v3.5A2.5 2.5 0 009 16h5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
function IconEvents({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2.5" fill={color} />
      <path d="M3 9h18" stroke="#fff" strokeWidth="1.6" />
      <path d="M8 3v4M16 3v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="8.5" cy="14" r="1.4" fill="#fff" />
      <circle cx="12" cy="14" r="1.4" fill="#fff" />
      <circle cx="15.5" cy="14" r="1.4" fill="#fff" />
    </svg>
  );
}

/* ---- Inline icons for the "What you get" perks ---- */
function IconSwag({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 8h18v3H3z" fill={color} />
      <path d="M5 11h14v9H5z" fill={color} opacity="0.85" />
      <path
        d="M12 8s-1-4-3.2-4A2.3 2.3 0 007 8m5 0s1-4 3.2-4A2.3 2.3 0 0117 8"
        stroke={color}
        strokeWidth="1.8"
        fill="none"
      />
      <path d="M12 8v12" stroke="#fff" strokeWidth="1.6" />
    </svg>
  );
}
function IconConnect({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="9" r="3" fill={color} />
      <circle cx="16" cy="9" r="3" fill={color} opacity="0.85" />
      <path
        d="M3 20c0-2.8 2.2-5 5-5s5 2.2 5 5M13 20c0-2.8 2.2-5 5-5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
function IconSkills({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l2.2 4.6L19 8.2l-3.5 3.4.8 4.9L12 14.2 7.7 16.5l.8-4.9L5 8.2l4.8-.6z"
        fill={color}
      />
    </svg>
  );
}
function IconPortfolio({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2.5" fill={color} />
      <path
        d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="10" y="12" width="4" height="3" rx="1" fill="#fff" />
    </svg>
  );
}

/* ---- Social logos (footer) ---- */
function InstagramLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}
function LinkedInLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6 2.5 2.5 0 004.98 3.5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z" />
    </svg>
  );
}
function EmailLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.9" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const doCards = [
  {
    title: "Champion Clay on campus",
    body: "We're UT's official Clay Ambassador crew — bringing modern GTM engineering to campus.",
    color: "#5FC3E7",
    Icon: IconFlag,
  },
  {
    title: "Run real workflows",
    body: "Get hands-on with Clay: build automations, enrich data, and ship outbound that actually runs.",
    color: "#F26D6D",
    Icon: IconWorkflow,
  },
  {
    title: "Events & teardowns",
    body: "Workshops, speaker events, and live workflow teardowns with top GTM operators.",
    color: "#FFD84D",
    Icon: IconEvents,
  },
];

const perks = [
  {
    title: "Free swag",
    body: "Clay merch, stickers, and gear — reps get rewarded.",
    color: "#FFD84D",
    Icon: IconSwag,
  },
  {
    title: "Connect with Clay",
    body: "Meet the Clay team and the people building modern go-to-market.",
    color: "#5FC3E7",
    Icon: IconConnect,
  },
  {
    title: "Learn GTM engineering",
    body: "The exact tooling and workflows top go-to-market teams run on.",
    color: "#F26D6D",
    Icon: IconSkills,
  },
  {
    title: "Resume + portfolio",
    body: "Real projects and a Clay Ambassador credential you can point to.",
    color: "#BF5700",
    Icon: IconPortfolio,
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-clay-bg">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-clay-sky/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-clay-yellow/25 blur-3xl"
          />

          <div className="mx-auto grid min-h-[calc(100vh-61px)] max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
            <Reveal className="relative z-10 text-center lg:text-left">
              <p className="mb-5 inline-block rounded-full border border-clay-ink/10 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-clay-ut">
                UT Austin · Powered by Clay
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-clay-ink sm:text-5xl lg:text-6xl">
                The first GTM Ambassador Club at any university.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-clay-ink/70 lg:mx-0">
                We&rsquo;re students learning modern go-to-market by doing it —
                running real Clay workflows and bringing GTM engineering to
                campus.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#apply"
                  className="rounded-full bg-clay-coral px-8 py-3.5 text-base font-semibold text-white shadow-clay transition-all hover:-translate-y-0.5 hover:shadow-clay-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-clay-coral"
                >
                  Apply to join
                </a>
                <a
                  href="#what-we-do"
                  className="group inline-flex items-center gap-1 rounded-full px-2 py-1 text-base font-semibold text-clay-ink transition-colors hover:text-clay-ut focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-coral"
                >
                  See what we build
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative z-10 order-first lg:order-none">
              <Arches />
            </Reveal>
          </div>
        </section>

        {/* ============ WHAT WE DO ============ */}
        <section id="what-we-do" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-clay-ink sm:text-4xl">
                What we do
              </h2>
              <p className="mt-4 text-lg text-clay-ink/65">
                We&rsquo;re the on-campus face of Clay — part builders, part
                ambassadors.
              </p>
            </Reveal>

            <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {doCards.map(({ title, body, color, Icon }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 110}
                  className="group rounded-card border border-clay-ink/10 bg-white p-7 shadow-clay transition-all hover:-translate-y-1 hover:shadow-clay-lg"
                >
                  <span
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${color}22` }}
                  >
                    <Icon color={color} />
                  </span>
                  <h3 className="text-xl font-bold text-clay-ink">{title}</h3>
                  <p className="mt-3 leading-relaxed text-clay-ink/65">{body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ WHAT YOU GET ============ */}
        <section id="perks" className="bg-clay-bg py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-clay-ink sm:text-4xl">
                What you get
              </h2>
              <p className="mt-4 text-lg text-clay-ink/65">
                Show up, ship, and walk away with more than a resume line.
              </p>
            </Reveal>

            <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map(({ title, body, color, Icon }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 90}
                  className="group rounded-card border border-clay-ink/10 bg-white p-7 shadow-clay transition-all hover:-translate-y-1 hover:shadow-clay-lg"
                >
                  <span
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${color}22` }}
                  >
                    <Icon color={color} />
                  </span>
                  <h3 className="text-lg font-bold text-clay-ink">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-clay-ink/65">
                    {body}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ WHO SHOULD JOIN ============ */}
        <section id="who" className="bg-white py-20 sm:py-28">
          <Reveal className="mx-auto max-w-[600px] px-5 text-center sm:px-8">
            <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-clay-ink sm:text-4xl">
              You don&rsquo;t need a sales background. Or a CS background.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-clay-ink/70">
              Founders, aspiring VCs, marketers, engineers, PMs — GTM is
              downstream of everything. Curiosity and follow-through matter more
              than a specific resume.
            </p>
          </Reveal>
        </section>

        {/* ============ APPLY CTA ============ */}
        <section
          id="apply"
          className="scroll-mt-20 bg-clay-coral py-24 text-white sm:py-32"
        >
          <Reveal className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
              Applications open for Fall 2026.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              First cohort is small. We&rsquo;re looking for people who ship.
            </p>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-white px-8 py-3.5 text-base font-bold text-clay-coral shadow-clay-lg transition-all hover:-translate-y-0.5 hover:bg-clay-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-clay-coral focus-visible:ring-white"
            >
              Fill out the interest form
            </a>
          </Reveal>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="bg-clay-ink py-12 text-white/80">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-3 md:items-start">
          <div>
            <div className="flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M14 50 V30 a18 18 0 0 1 36 0 V50 H38 V30 a6 6 0 0 0 -12 0 V50 Z" fill="#5FC3E7" />
                <path d="M22 50 V33 a10 10 0 0 1 20 0 V50 H36 V33 a4 4 0 0 0 -8 0 V50 Z" fill="#F26D6D" />
              </svg>
              <span className="font-bold text-white">Clay on Campus</span>
            </div>
            <p className="mt-2 text-sm text-white/60">UT Austin</p>
          </div>

          <div className="text-sm">
            <p className="font-semibold text-white/90">Get in touch</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Clay on Campus on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:-translate-y-0.5 hover:bg-clay-coral hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-sky"
              >
                <InstagramLogo />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Clay on Campus on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:-translate-y-0.5 hover:bg-clay-sky hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-sky"
              >
                <LinkedInLogo />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email Clay on Campus"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:-translate-y-0.5 hover:bg-clay-yellow hover:text-clay-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-sky"
              >
                <EmailLogo />
              </a>
            </div>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-3 inline-block text-white/60 transition-colors hover:text-clay-sky focus:outline-none focus-visible:underline"
            >
              {EMAIL}
            </a>
          </div>

          <div className="text-sm md:text-right">
            <p className="text-white/70">An official Clay Ambassador Club</p>
            <p className="mt-1 text-white/50">
              Not affiliated with UT Austin administration
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 pt-6 text-center text-xs text-white/45 sm:px-8">
          © 2026 Clay on Campus
        </div>
      </footer>
    </>
  );
}
