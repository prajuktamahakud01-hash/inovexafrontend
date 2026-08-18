import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BriefcaseBusiness, Sparkles, Users, Trophy, BadgeCheck } from 'lucide-react'
import CTA from '../components/CTA.jsx'

const values = [
  { icon: Sparkles, title: 'Build meaningful products', desc: 'Work on software that actually improves how businesses run, sell and scale.' },
  { icon: Users, title: 'Collaborate with senior talent', desc: 'Learn from product thinkers, designers and engineers who care about craft.' },
  { icon: Trophy, title: 'Own outcomes', desc: 'You will be trusted to make decisions, ship features and improve product quality.' },
  { icon: BadgeCheck, title: 'Grow fast', desc: 'We value curiosity, feedback and continuous improvement over shortcuts.' },
]

const roles = [
  { title: 'Senior Frontend Engineer', type: 'Full-time', location: 'Remote / India' },
  { title: 'Product Designer', type: 'Full-time', location: 'Remote / Hybrid' },
  { title: 'Business Analyst', type: 'Full-time', location: 'Bhubaneswar, India' },
  { title: 'AI Solutions Engineer', type: 'Contract', location: 'Remote' },
]

export default function Careers() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16">
        <div className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_10%,black,transparent)]" />
        <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/10 dark:bg-blue-500/20 noise-orb" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
          <p className="eyebrow mx-auto mb-6 w-fit">Careers</p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl text-slate-900 dark:text-white">
            Join the team building <span className="gradient-text">the next wave</span> of digital products.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            At Inovexa, we bring together strategy, design and engineering to build software that helps businesses grow with clarity and speed.
          </p>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-6 shadow-sm dark:shadow-none"
              >
                <div className="rounded-xl bg-blue-50 dark:bg-electric-500/10 border border-blue-100 dark:border-electric-400/20 p-2.5 w-fit text-blue-600 dark:text-cyan-400 mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50/60 dark:bg-navy-900/30">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mx-auto mb-5 w-fit">Open roles</p>
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-white">Start your next chapter</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-6 shadow-sm dark:shadow-none transition-all hover:border-blue-300 dark:hover:border-electric-400/40 hover:shadow-md dark:hover:shadow-card"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 dark:bg-electric-500/10 border border-blue-100 dark:border-electric-400/20 text-blue-600 dark:text-cyan-400">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{role.title}</h3>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{role.type}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-300">
                    {role.location}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  We are looking for someone who loves problem-solving, collaborates well with teams and delivers polished digital experiences.
                </p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300">
                  Apply now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto mb-5 w-fit">Don’t see a role?</p>
          <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-white">Send us your profile anyway</h2>
          <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">
            We are always open to speaking with strong product, engineering and design talent — even if there is no current opening listed.
          </p>
          <a href="mailto:careers@inovexa.io" className="btn-primary mt-8 inline-flex">
            careers@inovexa.io
          </a>
        </div>
      </section>

      <CTA />
    </>
  )
}


