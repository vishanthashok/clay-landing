/**
 * Sticky top nav: wordmark left, Apply CTA right.
 * The href on Apply is a placeholder (#apply) the owner will swap for the
 * Google Form URL.
 */
export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-clay-bg/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-coral"
        >
          <span aria-hidden="true" className="inline-flex">
            <svg width="26" height="26" viewBox="0 0 64 64" className="transition-transform group-hover:-translate-y-0.5">
              <path d="M14 50 V30 a18 18 0 0 1 36 0 V50 H38 V30 a6 6 0 0 0 -12 0 V50 Z" fill="#5FC3E7" />
              <path d="M22 50 V33 a10 10 0 0 1 20 0 V50 H36 V33 a4 4 0 0 0 -8 0 V50 Z" fill="#F26D6D" />
            </svg>
          </span>
          <span className="text-[15px] font-extrabold tracking-tight text-clay-ink">
            Clay on Campus
          </span>
        </a>

        <a
          href="#apply"
          className="rounded-full bg-clay-ink px-5 py-2 text-sm font-semibold text-white shadow-clay transition-all hover:-translate-y-0.5 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-clay-coral"
        >
          Apply
        </a>
      </nav>
    </header>
  );
}
