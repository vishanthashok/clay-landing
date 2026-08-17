/**
 * Three stacked claymation-style arches (blue, coral, yellow).
 * Hand-drawn feel via soft shadows, slightly irregular rounding, and a
 * gentle float animation. Decorative — hidden from assistive tech.
 */
export default function Arches() {
  return (
    <div
      className="relative mx-auto w-full max-w-[440px] animate-float"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 440 420"
        className="w-full h-auto overflow-visible"
        role="presentation"
      >
        <defs>
          <filter id="clay-soft" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="#1A1A1A"
              floodOpacity="0.16"
            />
          </filter>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7FD3F0" />
            <stop offset="100%" stopColor="#5FC3E7" />
          </linearGradient>
          <linearGradient id="coralGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F58686" />
            <stop offset="100%" stopColor="#F26D6D" />
          </linearGradient>
          <linearGradient id="yellowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE375" />
            <stop offset="100%" stopColor="#FFD84D" />
          </linearGradient>
        </defs>

        {/* Back arch — blue, widest */}
        <path
          filter="url(#clay-soft)"
          fill="url(#skyGrad)"
          d="M40 400 V200 C40 96 130 30 220 30 C310 30 400 96 400 200 V400 H300 V206 C300 150 262 118 220 118 C178 118 140 150 140 206 V400 Z"
        />
        {/* Middle arch — coral */}
        <path
          filter="url(#clay-soft)"
          fill="url(#coralGrad)"
          d="M92 400 V222 C92 150 150 100 220 100 C290 100 348 150 348 222 V400 H268 V228 C268 186 246 162 220 162 C194 162 172 186 172 228 V400 Z"
        />
        {/* Front arch — yellow, narrowest */}
        <path
          filter="url(#clay-soft)"
          fill="url(#yellowGrad)"
          d="M140 400 V250 C140 200 176 168 220 168 C264 168 300 200 300 250 V400 H244 V254 C244 228 234 212 220 212 C206 212 196 228 196 254 V400 Z"
        />
      </svg>
    </div>
  );
}
