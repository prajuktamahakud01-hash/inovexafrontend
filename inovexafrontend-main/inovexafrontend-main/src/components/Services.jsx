import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Database,
  BarChart3,
  Code2,
  Boxes,
  CloudCog,
  Bot,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Server,
  Layers,
  Workflow,
} from 'lucide-react'

const serviceCategories = [
  { id: 'all', label: 'All Solutions' },
  { id: 'data', label: 'Data & Analytics', icon: Database },
  { id: 'app', label: 'Application & Modernization', icon: Code2 },
  { id: 'cloud', label: 'Cloud & AI Automation', icon: CloudCog },
]

const services = [
  {
    n: '01',
    category: 'data',
    title: 'Data Engineering & ETL',
    tagline: 'High-Throughput Pipelines & Lakehouses',
    desc: 'Scalable data ingestion, Apache Hop ETL pipelines, streaming architectures, and modern cloud lakehouse implementations.',
    tags: ['Apache Hop', 'ETL/ELT', 'Data Lakehouse', 'Real-time Streaming'],
    icon: Database,
    color: 'text-blue-600 dark:text-cyan-400',
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    border: 'hover:border-blue-300 dark:hover:border-cyan-400/40',
    glow: 'from-blue-600/10 via-cyan-500/5 to-transparent',
  },
  {
    n: '02',
    category: 'data',
    title: 'Data Analytics & BI',
    tagline: 'From Raw Data to Real-Time Decisions',
    desc: 'Transform enterprise data into actionable visual insights with interactive executive dashboards, KPI telemetry, and predictive models.',
    tags: ['KPI Dashboards', 'Self-Serve BI', 'Predictive Insights', 'Visual Analytics'],
    icon: BarChart3,
    color: 'text-cyan-600 dark:text-teal-400',
    bg: 'bg-cyan-50 dark:bg-cyan-900/30',
    border: 'hover:border-cyan-300 dark:hover:border-teal-400/40',
    glow: 'from-cyan-600/10 via-teal-500/5 to-transparent',
  },
  {
    n: '03',
    category: 'app',
    title: 'Custom Enterprise Software',
    tagline: 'Bespoke Architecture for Core Workflows',
    desc: 'End-to-end custom business applications engineered around your exact operational workflows with zero technical debt.',
    tags: ['Full-Stack', 'API-First', 'Microservices', 'Clean Architecture'],
    icon: Code2,
    color: 'text-indigo-600 dark:text-violet-400',
    bg: 'bg-indigo-50 dark:bg-indigo-900/30',
    border: 'hover:border-indigo-300 dark:hover:border-violet-400/40',
    glow: 'from-indigo-600/10 via-purple-500/5 to-transparent',
  },
  {
    n: '04',
    category: 'app',
    title: 'Application Modernization',
    tagline: 'Transform Legacy into Cloud-Native',
    desc: 'Refactor cumbersome legacy monoliths into agile microservices, modernized UIs, and robust cloud APIs without operational downtime.',
    tags: ['Monolith to Microservices', 'UI/UX Redesign', 'Re-Platforming', 'Zero Downtime'],
    icon: Boxes,
    color: 'text-purple-600 dark:text-pink-400',
    bg: 'bg-purple-50 dark:bg-purple-900/30',
    border: 'hover:border-purple-300 dark:hover:border-pink-400/40',
    glow: 'from-purple-600/10 via-pink-500/5 to-transparent',
  },
  {
    n: '05',
    category: 'cloud',
    title: 'Cloud & DevOps Engineering',
    tagline: 'Automated, Resilient & Multi-Cloud',
    desc: 'Scalable infrastructure architecture across AWS, Azure, and GCP with automated CI/CD deployment pipelines and 24/7 monitoring.',
    tags: ['AWS / Azure / GCP', 'CI/CD Pipelines', 'IaC Terraform', 'High Availability'],
    icon: CloudCog,
    color: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-900/30',
    border: 'hover:border-sky-300 dark:hover:border-sky-400/40',
    glow: 'from-sky-600/10 via-blue-500/5 to-transparent',
  },
  {
    n: '06',
    category: 'cloud',
    title: 'AI & Intelligent Automation',
    tagline: 'Cognitive Workflows & Smart Operations',
    desc: 'Apply generative AI, machine learning, and intelligent automation across data processing and business operations to multiply productivity.',
    tags: ['Generative AI', 'LLM Integration', 'Process Automation', 'Smart Workflows'],
    icon: Bot,
    color: 'text-amber-600 dark:text-yellow-400',
    bg: 'bg-amber-50 dark:bg-amber-900/30',
    border: 'hover:border-amber-300 dark:hover:border-yellow-400/40',
    glow: 'from-amber-600/10 via-orange-500/5 to-transparent',
  },
  {
    n: '07',
    category: 'app',
    title: 'Mobile App Engineering',
    tagline: 'Native & Cross-Platform Experiences',
    desc: 'Engaging, fast, and secure mobile applications for iOS and Android built on Flutter and React Native with seamless backend sync.',
    tags: ['iOS & Android', 'Flutter / React Native', 'Offline-First', 'Biometric Auth'],
    icon: Smartphone,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/30',
    border: 'hover:border-emerald-300 dark:hover:border-emerald-400/40',
    glow: 'from-emerald-600/10 via-teal-500/5 to-transparent',
  },
  {
    n: '08',
    category: 'data',
    title: 'Data Quality & Lineage',
    tagline: 'Build Unshakable Trust in Data',
    desc: 'Automated data profiling, source-to-target reconciliation, column-level lineage tracking, and proactive data observability.',
    tags: ['Data Lineage', 'Continuous Quality', 'Reconciliation', 'Governance'],
    icon: ShieldCheck,
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-900/30',
    border: 'hover:border-rose-300 dark:hover:border-rose-400/40',
    glow: 'from-rose-600/10 via-pink-500/5 to-transparent',
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredServices =
    activeTab === 'all'
      ? services
      : services.filter((s) => s.category === activeTab)

  return (
    <section id="services" className="section-pad relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header section */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mx-auto mb-5 w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              What We Do · Full-Spectrum Engineering
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-[1.15]">
              Solutions Designed Around{' '}
              <span className="gradient-text">Your Business</span>.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We combine 20+ years of deep enterprise technology experience with modern product speed
              to design, build, and scale high-impact digital solutions.
            </p>
          </motion.div>

          {/* Interactive filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
          >
            {serviceCategories.map((cat) => {
              const active = activeTab === cat.id
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 scale-105'
                      : 'border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/[0.06]'
                  }`}
                >
                  {Icon && <Icon className="h-3.5 w-3.5" />}
                  {cat.label}
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* 8 Featured Services Cards Grid */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  layout
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/[0.08] bg-white/90 dark:bg-navy-900/60 p-7 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-card ${s.border}`}
                >
                  {/* Glowing background gradient on hover */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10">
                    {/* Top row: Number & Glowing Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {s.n}
                      </span>
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.bg} ${s.color} shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="mt-6 font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-300">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-cyan-400">
                      {s.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {s.desc}
                    </p>

                    {/* Tags / Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-200/80 dark:border-white/5 bg-slate-50 dark:bg-white/[0.03] px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1 group-hover:underline">
                      Explore Capabilities
                    </span>
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 transition-all duration-300 group-hover:bg-blue-600 dark:group-hover:bg-cyan-400 group-hover:text-white group-hover:translate-x-1">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Strip: Enterprise Experience Bar */}
        <div className="mt-14 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-navy-900/70 p-6 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
              <span>20+ Years Leadership Heritage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-500 shrink-0" />
              <span>Complete 20-Service Enterprise Portfolio</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
              <span>End-to-End Delivery &amp; SLA Support</span>
            </div>
          </div>

          <Link
            to="/services"
            className="btn-primary shrink-0 py-2.5 px-6 text-xs sm:text-sm"
          >
            View Complete 20-Service Portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
