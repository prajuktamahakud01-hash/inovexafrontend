import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, CheckCircle2, Zap, Building2 } from 'lucide-react'
import Counter from './Counter.jsx'
import whoWeAreImg from '../image/who-we-are.webp'

const stats = [
  { to: 20, suffix: '+', label: 'Years leadership experience' },
  { to: 100, suffix: '+', label: 'Projects delivered' },
  { to: 50, suffix: '+', label: 'Enterprise clients' },
  { to: 100, suffix: '%', label: 'Delivery excellence' },
]

export default function AboutPreview() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-400/10 dark:bg-blue-500/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Eye-catching Studio Team Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glowing border backdrop */}
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-violet-500/20 blur-2xl opacity-60" />

          {/* Main Image Card */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-navy-900/60 p-2.5 shadow-xl backdrop-blur-xl">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-[1.6rem]">
              <img
                src={whoWeAreImg}
                alt="Inovexa engineering and leadership team"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/10" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/60 px-3.5 py-1.5 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-white tracking-wide">
                  Enterprise Pedigree (IBM · Capgemini · TCS · Infosys)
                </span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/20 bg-slate-900/80 p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/20 text-cyan-300">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Dual-Engine Capability</p>
                    <p className="text-[11px] text-slate-300">Enterprise Products + Engineering Services</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stat Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 -right-2 sm:-right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-navy-900/90 px-5 py-3 shadow-xl backdrop-blur-xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/20 text-blue-600 dark:text-cyan-400">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-slate-900 dark:text-white leading-tight">20+ Years</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Enterprise Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-5">Our Story &amp; Identity</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl text-slate-900 dark:text-white">
            Enterprise experience meets modern product innovation.
          </h2>
          <p className="mt-6 max-w-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Inovexa was founded by technology veterans with 20+ years of experience across global IT leaders like IBM, Capgemini, Tech Mahindra, Infosys, and TCS. We combine deep enterprise architecture maturity with the agility and velocity of a modern product company to solve complex data, automation, and workflow challenges.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-slate-200 dark:border-white/10 pl-4">
                <p className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 transition-colors hover:text-blue-700 dark:hover:text-cyan-300"
            >
              Read our full story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
