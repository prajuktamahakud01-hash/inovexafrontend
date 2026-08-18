import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail, Sparkles } from 'lucide-react'

export default function Team({ team = [] }) {
  return (
    <div className="mt-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4"
      >
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-7 text-center shadow-sm backdrop-blur-xl transition-all duration-500 hover:border-blue-300 dark:hover:border-electric-400/40 hover:shadow-xl dark:hover:shadow-card hover:-translate-y-1.5"
          >
            {/* Ambient card background glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Photo with gradient ring */}
            <div className="relative mb-5">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-brand-yellow opacity-40 blur-sm transition-opacity duration-500 group-hover:opacity-100 group-hover:blur-md" />
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white dark:border-navy-800 bg-slate-100 dark:bg-navy-950 shadow-lg sm:h-32 sm:w-32">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center bg-gradient-to-br from-blue-600 via-brand-yellow to-cyan-500 font-display text-2xl font-bold text-white">
                    {m.name.split(' ').map((w) => w[0]).join('')}
                  </div>
                )}
              </div>
            </div>

            {/* Name & Role */}
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-300 sm:text-xl">
              {m.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              {m.role}
            </p>

            {/* Bio / Domain */}
            {m.bio && (
              <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {m.bio}
              </p>
            )}

            {/* Social handles */}
            <div className="mt-5 flex items-center justify-center gap-2.5 pt-4 border-t border-slate-100 dark:border-white/[0.06] w-full">
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} LinkedIn`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 transition-all hover:border-blue-300 dark:hover:border-cyan-400/40 hover:bg-blue-50 dark:hover:bg-electric-500/10 hover:text-blue-600 dark:hover:text-cyan-300"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              )}
              {m.twitter && (
                <a
                  href={m.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} Twitter`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 transition-all hover:border-cyan-300 dark:hover:border-cyan-400/40 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300"
                >
                  <Twitter className="h-3.5 w-3.5" />
                </a>
              )}
              {m.github && (
                <a
                  href={m.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} GitHub`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 transition-all hover:border-purple-300 dark:hover:border-violet-400/40 hover:bg-purple-50 dark:hover:bg-violet-500/10 hover:text-purple-600 dark:hover:text-violet-300"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}


