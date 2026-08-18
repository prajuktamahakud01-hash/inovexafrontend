const stack = [
  {
    name: 'React',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <circle cx="24" cy="24" r="5" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="2" fill="none">
          <ellipse cx="24" cy="24" rx="16" ry="6" />
          <ellipse cx="24" cy="24" rx="6" ry="16" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="6" ry="16" transform="rotate(120 24 24)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <polygon points="12,12 36,12 42,24 36,36 12,36 6,24" fill="#339933" />
        <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">N</text>
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M12 12h12a6 6 0 0 1 6 6v6H12z" fill="#3776AB" />
        <circle cx="18" cy="16" r="2" fill="#ffd43b" />
        <path d="M36 36H24a6 6 0 0 1-6-6v-6h18z" fill="#ffd43b" />
        <circle cx="30" cy="32" r="2" fill="#3776AB" />
      </svg>
    ),
  },
  {
    name: 'PHP',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <ellipse cx="24" cy="24" rx="18" ry="12" fill="#777BB4" />
        <text x="24" y="28" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">PHP</text>
      </svg>
    ),
  },
  {
    name: 'Laravel',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M10 34 L18 14 h10 l8 20" fill="none" stroke="#F05340" strokeWidth="4" strokeLinecap="round" />
        <path d="M16 26 h16" stroke="#F05340" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M24 10c-8 6-10 12-8 20 3-1 7-4 8-4s5 3 8 4c2-8 0-14-8-20z" fill="#47A248" />
        <path d="M24 10c-3 4-4 8-4 12 1 0 3-1 4-1s3 1 4 1c0-4-1-8-4-12z" fill="#fff" opacity="0.25" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M24 10c-10 8-12 18-10 24s4 8 10 8 10-2 10-8-2-16-10-24z" fill="#00758F" />
        <path d="M24 10c-7 6-8 13-7 18 0 2 2 3 7 3s7-1 7-3c1-5 0-12-7-18z" fill="#fff" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M10 26c4 6 10 8 14 8s10-2 14-8" fill="none" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" />
        <text x="24" y="30" textAnchor="middle" fontSize="12" fontWeight="700" fill="#FF9900">aws</text>
      </svg>
    ),
  },
  {
    name: 'AI / ML',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <rect x="10" y="14" width="28" height="20" rx="6" fill="#7C3AED" />
        <path d="M16 24h16M16 28h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="24" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
        <path d="M14 10l12 12-12 12 6 6 18-18-18-18z" fill="#02569B" />
        <path d="M18 10l12 12-6 6" fill="#87CEFA" />
      </svg>
    ),
  },
]

export default function TechStrip() {
  return (
    <section className="border-y border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-navy-950/60 px-6 py-14 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-6">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
            <span className="text-sm font-semibold uppercase tracking-[0.25em]">T</span>
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-semibold">Technology that powers modern businesses</p>
            <p className="mt-1 text-2xl font-display font-bold text-slate-900 dark:text-white">Powered by modern tools and proven platforms</p>
          </div>
        </div>

        <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-5">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900/80 px-4 py-3.5 shadow-sm transition-all duration-300 hover:border-blue-300 dark:hover:border-electric-400/40 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-100 dark:border-white/10">
                {tech.icon}
              </span>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


