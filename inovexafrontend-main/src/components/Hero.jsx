import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import HeroArchitecture from './HeroArchitecture.jsx'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20 lg:pt-40">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-400/10 dark:bg-blue-500/20 noise-orb animate-pulse-slow" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[26rem] w-[26rem] rounded-full bg-indigo-400/10 dark:bg-violet-500/20 noise-orb animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 noise-orb" />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-blue-500/20 dark:bg-white/20 animate-drift"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 1.3}s`,
              animationDuration: `${18 + (i % 5) * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-20">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6 font-mono tracking-wider text-xs uppercase"
          >
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            SOFTWARE • DATA • AI • DIGITAL PRODUCTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white"
          >
            We build world-class products that{' '}
            <span className="gradient-text">transform businesses</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            From data engineering and enterprise platforms to AI-powered solutions, we turn complex challenges into scalable products built for a global market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#services" className="btn-primary">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="btn-secondary">
              Start a Project
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex items-center gap-8 text-sm text-slate-500 dark:text-slate-400"
          >
            <div>
              <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">100+</p>
              <p>Projects delivered</p>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">20+</p>
              <p>Years experience</p>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />
            <div>
              <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">50+</p>
              <p>Happy clients</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Interactive Architecture Diagram */}
        <div className="relative mx-auto w-full max-w-lg">
          <HeroArchitecture />
        </div>
      </div>
    </section>
  )
}


