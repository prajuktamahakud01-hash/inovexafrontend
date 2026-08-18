import { motion } from 'framer-motion'
import {
  Target,
  Network,
  Cpu,
  UsersRound,
  ShieldCheck,
  LifeBuoy,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Award,
  Zap,
  TrendingUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const points = [
  {
    icon: Target,
    number: '01',
    badge: 'Outcome Focused',
    title: 'Business-Driven Engineering',
    desc: 'Every architecture choice, tech stack decision, and line of code is directly tied to measurable business ROI—not hype.',
    highlight: 'Zero vanity features • Direct ROI',
    color: 'from-blue-500/10 via-cyan-500/5 to-transparent',
    iconColor: 'text-blue-600',
    borderColor: 'hover:border-blue-300',
  },
  {
    icon: Network,
    number: '02',
    badge: 'Cloud Native',
    title: 'Infinitely Scalable Architecture',
    desc: 'Modular, microservices or clean monolith systems engineered to scale effortlessly from your first 1,000 users to millions.',
    highlight: 'Auto-scaling • Zero rebuilds',
    color: 'from-blue-600/10 via-indigo-500/5 to-transparent',
    iconColor: 'text-indigo-600',
    borderColor: 'hover:border-indigo-300',
  },
  {
    icon: Cpu,
    number: '03',
    badge: 'Future Proof',
    title: 'Modern & Maintainable Stack',
    desc: 'We build with modern industry standards (React, Next.js, Node, Python, Apache Hop) that remain maintainable and debt-free for years.',
    highlight: 'Clean code • Comprehensive docs',
    color: 'from-purple-500/10 via-pink-500/5 to-transparent',
    iconColor: 'text-purple-600',
    borderColor: 'hover:border-purple-300',
  },
  {
    icon: UsersRound,
    number: '04',
    badge: 'Dedicated Pod',
    title: 'Dedicated Product Teams',
    desc: 'Work directly with senior full-stack engineers and product architects who understand your domain inside out with zero churn.',
    highlight: 'Direct Slack/Teams sync • Agile sprints',
    color: 'from-amber-500/10 via-orange-500/5 to-transparent',
    iconColor: 'text-amber-600',
    borderColor: 'hover:border-amber-300',
  },
  {
    icon: ShieldCheck,
    number: '05',
    badge: 'Enterprise Grade',
    title: 'Security-First Development',
    desc: 'Multi-layer security, strict data isolation, RBAC governance, and compliance best practices baked in from day zero.',
    highlight: 'Encrypted pipelines • SOC2 ready',
    color: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    iconColor: 'text-emerald-600',
    borderColor: 'hover:border-emerald-300',
  },
  {
    icon: LifeBuoy,
    number: '06',
    badge: 'Post-Launch Partner',
    title: 'Long-Term Support & SLA',
    desc: 'Launch is just day one. We stay on board for 24/7 monitoring, security patching, feature expansion, and continuous optimization.',
    highlight: 'Guaranteed SLAs • 24/7 monitoring',
    color: 'from-cyan-500/10 via-blue-500/5 to-transparent',
    iconColor: 'text-cyan-600',
    borderColor: 'hover:border-cyan-300',
  },
]

const stats = [
  { value: '99.4%', label: 'On-Time Project Delivery' },
  { value: '50+', label: 'Digital Products Shipped' },
  { value: '4.9/5', label: 'Client Satisfaction Score' },
  { value: '< 1 hr', label: 'Critical Support SLA' },
]

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden section-pad bg-slate-50/50 dark:bg-navy-950/40">
      {/* 1. Dynamic Ambient Lighting Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[550px] w-[800px] rounded-full bg-gradient-to-b from-blue-400/10 via-cyan-400/5 to-transparent dark:from-blue-500/20 dark:via-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -left-60 h-[450px] w-[450px] rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 -right-60 h-[450px] w-[450px] rounded-full bg-cyan-400/10 dark:bg-violet-600/15 blur-[100px]" />

      {/* 2. Cyber Mesh Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      {/* 3. Constellation & Floating Data Nodes Animation */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="whyNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#0891B2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F5C12A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated connecting constellation rays */}
        {[
          { x1: '15%', y1: '25%', x2: '45%', y2: '15%' },
          { x1: '55%', y1: '15%', x2: '85%', y2: '30%' },
          { x1: '10%', y1: '65%', x2: '35%', y2: '80%' },
          { x1: '65%', y1: '75%', x2: '90%', y2: '60%' },
          { x1: '35%', y1: '40%', x2: '65%', y2: '50%' },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#whyNodeGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, delay: i * 0.2 }}
          />
        ))}

        {/* Glowing pulse nodes */}
        {[
          { cx: '15%', cy: '25%' },
          { cx: '45%', cy: '15%' },
          { cx: '85%', cy: '30%' },
          { cx: '10%', cy: '65%' },
          { cx: '65%', cy: '75%' },
          { cx: '90%', cy: '60%' },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.cx} cy={node.cy} r="3" fill="#0891B2" />
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="8"
              stroke="#2563EB"
              strokeWidth="1"
              fill="none"
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={{ scale: [0.8, 1.8, 0.8], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4 }}
            />
          </g>
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header section */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-500/30 bg-blue-50 dark:bg-blue-500/10 px-4 py-1.5 text-xs font-mono tracking-widest text-blue-700 dark:text-cyan-300 uppercase shadow-sm mb-6">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400 animate-pulse" />
              The Difference
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
              Why ambitious businesses{' '}
              <span className="gradient-text">choose Inovexa</span>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              We eliminate technical bottlenecks with clean engineering, strategic thinking,
              and dedicated teams that care about product outcomes as much as you do.
            </p>
          </motion.div>
        </div>

        {/* 6 Feature Advantage Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 dark:border-white/[0.08] bg-white/95 dark:bg-navy-900/60 p-8 backdrop-blur-xl transition-all duration-500 shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-card hover:-translate-y-1.5 ${p.borderColor}`}
              >
                {/* Dynamic gradient hover overlay */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Subtle top light bar */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  {/* Card Header: Icon badge & Number */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] p-2.5 ${p.iconColor} dark:text-cyan-400 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-electric-500/10 group-hover:border-blue-200 dark:group-hover:border-electric-400/40`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-sm font-semibold tracking-wider text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                      {p.number}
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="mt-6">
                    <span className="inline-block rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 transition-colors group-hover:border-blue-200 dark:group-hover:border-electric-400/40 group-hover:bg-blue-50 dark:group-hover:bg-electric-500/10 group-hover:text-blue-700 dark:group-hover:text-cyan-300">
                      {p.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-300">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 transition-colors">
                    {p.desc}
                  </p>
                </div>

                {/* Card Footer: Highlight pill */}
                <div className="relative z-10 mt-8 border-t border-slate-100 dark:border-white/[0.06] pt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                    <span>{p.highlight}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 4. Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-6 sm:p-10 shadow-md backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((st, i) => (
              <div
                key={st.label}
                className={`text-center ${
                  i !== stats.length - 1 ? 'lg:border-r lg:border-slate-200 dark:lg:border-white/10' : ''
                }`}
              >
                <p className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl gradient-text">
                  {st.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">{st.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


