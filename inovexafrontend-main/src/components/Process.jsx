import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Discover', desc: 'Understand business requirements.' },
  { n: '02', title: 'Strategy', desc: 'Define technology and product strategy.' },
  { n: '03', title: 'Design', desc: 'Create UI/UX prototypes.' },
  { n: '04', title: 'Develop', desc: 'Build the product using modern technologies.' },
  { n: '05', title: 'Test', desc: 'Quality assurance and security testing.' },
  { n: '06', title: 'Launch', desc: 'Deploy and monitor the solution.' },
  { n: '07', title: 'Scale', desc: 'Continuous improvement and support.' },
]

export default function Process() {
  return (
    <section className="section-pad relative bg-slate-50/80 dark:bg-navy-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto mb-5 w-fit">How we work</p>
          <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-white">A process built for clarity, start to finish</h2>
        </div>

        <div className="relative mt-20 overflow-x-auto pb-4">
          <div className="relative flex min-w-[900px] justify-between lg:min-w-0">
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-slate-200 dark:bg-white/10" />
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex w-full flex-col items-center px-3 text-center"
              >
                <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border-2 border-blue-600 dark:border-cyan-400 bg-white dark:bg-navy-950 font-mono text-sm font-bold text-blue-600 dark:text-cyan-300 shadow-md shadow-blue-500/10 dark:shadow-glow">
                  {s.n}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 max-w-[10rem] text-xs leading-relaxed text-slate-600 dark:text-slate-400">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


