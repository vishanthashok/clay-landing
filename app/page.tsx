import Nav from "@/components/Nav";
import Arches from "@/components/Arches";
import Reveal from "@/components/Reveal";

/* ---- Small inline icons for the "What we do" cards ---- */
function IconShip({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 13l7-9v6h9l-7 9v-6H4z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconLearn({ color }: { color: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l9 5-9 5-9-5 9-5z" fill={color} />
      <path
        d="M6 10.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
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

const cards = [
  {
    title: "Ship real GTM work",
    body: "Build Clay workflows for Austin startups, local businesses, and student ventures.",
    color: "#5FC3E7",
    Icon: IconShip,
  },
  {
    title: "Learn from operators",
    body: "Workshops, workflow teardowns, and speaker events with top GTM teams.",
    color: "#F26D6D",
    Icon: IconLearn,
  },
  {
    title: "Leave with a portfolio",
    body: "Real deliverables you can show in interviews, not just a resume line.",
    color: "#FFD84D",
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
          {/* soft decorative blobs */}
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
                running real Clay workflows for real Austin startups.
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
                  className="group inline-flex items-center gap-1 text-base font-semibold text-clay-ink transition-colors hover:text-clay-ut focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-coral rounded-full px-2 py-1"
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
                Hands-on go-to-market, from first workflow to final deliverable.
              </p>
            </Reveal>

            <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {cards.map(({ title, body, color, Icon }, i) => (
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

        {/* ============ THE TWO TRACKS ============ */}
        <section id="tracks" className="bg-clay-bg py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-clay-ink sm:text-4xl">
                The two tracks
              </h2>
              <p className="mt-4 text-lg text-clay-ink/65">
                Pick where you start. Most people end up fluent in both.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Reveal className="rounded-card border-t-4 border-clay-coral bg-white p-8 shadow-clay">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-clay-coral">
                  Track 01
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-clay-ink">
                  Builder
                </h3>
                <p className="mt-3 leading-relaxed text-clay-ink/70">
                  Masters Clay, writes prompts, wires APIs, and ships
                  automations that actually run in production.
                </p>
              </Reveal>

              <Reveal delay={110} className="rounded-card border-t-4 border-clay-yellow bg-white p-8 shadow-clay">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#C79A00]">
                  Track 02
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-clay-ink">
                  Strategist
                </h3>
                <p className="mt-3 leading-relaxed text-clay-ink/70">
                  Defines ICPs, writes outbound copy, runs campaigns, and
                  measures what actually converts.
                </p>
              </Reveal>
            </div>

            <Reveal className="mx-auto mt-10 max-w-2xl text-center">
              <p className="text-pretty text-lg font-medium leading-relaxed text-clay-ink/80">
                A great workflow with a bad message fails. A great message with
                no system doesn&rsquo;t scale.{" "}
                <span className="text-clay-ut">Both matter.</span>
              </p>
            </Reveal>
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
              href="#"
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
            <ul className="mt-2 space-y-1.5">
              <li>
                <a
                  href="mailto:clayoncampusut@gmail.com"
                  className="text-white/70 transition-colors hover:text-clay-sky focus:outline-none focus-visible:underline"
                >
                  clayoncampusut@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 transition-colors hover:text-clay-sky focus:outline-none focus-visible:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm md:text-right">
            <p className="text-white/70">
              An official Clay Ambassador Club
            </p>
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
