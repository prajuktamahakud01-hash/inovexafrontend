import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Workflow,
  Database,
  BarChart3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Server,
  Zap,
  ShieldCheck,
  Building2,
  RefreshCw,
  Eye,
  Bell,
  Clock,
  Terminal,
  Activity,
  Boxes,
  FileCheck2,
  GitMerge,
  Search,
  CheckSquare2,
  LineChart,
  Calendar,
  Layers,
  ArrowUpRight,
  Sliders,
  Check,
} from 'lucide-react'
import CTA from '../components/CTA.jsx'

const productTenets = [
  'Scalability',
  'Automation',
  'Cloud Readiness',
  'Interoperability',
  'Enterprise Usability',
]

const productCategories = [
  { id: 'all', label: 'All Products (11)' },
  { id: 'automation', label: 'Automation & Orchestration', icon: Workflow },
  { id: 'data-eng', label: 'Data Engineering', icon: Database },
  { id: 'governance', label: 'Data Trust & Governance', icon: ShieldCheck },
  { id: 'observability', label: 'Data Observability & Testing', icon: Activity },
  { id: 'analytics', label: 'Analytics & BI', icon: BarChart3 },
]

const products = [
  // 1. FlowNexa (Flagship Universal Workload Scheduler)
  {
    num: '01',
    category: 'automation',
    badge: 'Flagship Platform',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-cyan-300 dark:border-cyan-500/30',
    title: 'FlowNexa',
    tagline: 'Universal Workload Scheduler & Workflow Orchestration',
    quote: 'Schedule Anything. Orchestrate Everything.',
    desc: 'FlowNexa is a universal workload scheduler and workflow orchestration platform that enables organizations to schedule, automate, monitor and manage Python, Shell, SQL, ETL, API and enterprise application workloads from one centralized platform.',
    capabilities: [
      'Universal workload scheduling',
      'Visual workflow designer',
      'Python & Shell execution',
      'SQL / database scheduling',
      'ETL workflow scheduling',
      'API & application execution',
      'Job dependencies (DAG)',
      'Sequential & parallel workflows',
      'Event & file-based triggers',
      'Retry & recovery policies',
      'Execution monitoring',
      'Logs & audit history',
      'Failure notifications & SLA monitoring',
    ],
    icon: Workflow,
    color: 'text-blue-600 dark:text-cyan-400',
    gradient: 'from-blue-600/15 via-cyan-500/10 to-indigo-600/5',
    isFlagship: true,
  },

  // 2. Inovexa DataFlow
  {
    num: '02',
    category: 'data-eng',
    badge: 'Data Engineering',
    title: 'Inovexa DataFlow',
    tagline: 'Metadata-Driven Data Integration & ETL Platform',
    quote: 'Build Less. Integrate More.',
    desc: 'A metadata-driven data integration platform that simplifies data ingestion, transformation and delivery across databases, files, APIs, cloud platforms and enterprise applications.',
    capabilities: [
      'Metadata-driven ETL/ELT',
      'Database integration',
      'File ingestion',
      'API integration',
      'Cloud data integration',
      'Full & incremental loads',
      'Data transformation',
      'Source-to-target mapping',
      'Data validation',
      'Error & rejection handling',
      'Audit logging & pipeline monitoring',
    ],
    icon: GitMerge,
    color: 'text-indigo-600 dark:text-violet-400',
    gradient: 'from-indigo-600/10 via-blue-500/5 to-transparent',
  },

  // 3. Inovexa Data Migration
  {
    num: '03',
    category: 'data-eng',
    badge: 'Data Engineering',
    title: 'Inovexa Data Migration',
    tagline: 'Enterprise Data Migration & Modernization',
    quote: 'Move Data with Confidence.',
    desc: 'A scalable data migration platform for moving, transforming and validating enterprise data across legacy, on-premise and cloud environments.',
    capabilities: [
      'Database migration',
      'Legacy modernization',
      'Cloud migration',
      'Data transformation',
      'Source-to-target mapping',
      'Full & incremental migration',
      'Data validation & reconciliation',
      'Migration monitoring',
      'Audit & reporting',
    ],
    icon: RefreshCw,
    color: 'text-cyan-600 dark:text-teal-400',
    gradient: 'from-cyan-600/10 via-blue-500/5 to-transparent',
  },

  // 4. Inovexa Data Quality
  {
    num: '04',
    category: 'governance',
    badge: 'Data Trust',
    title: 'Inovexa Data Quality',
    tagline: 'Enterprise Data Quality & Validation',
    quote: 'Make Every Data Point Count.',
    desc: 'A data quality platform that continuously validates enterprise data and helps organizations maintain accurate, complete, consistent and trusted information.',
    capabilities: [
      'Data profiling',
      'Completeness validation',
      'Null & blank validation',
      'Duplicate detection',
      'Data type & format validation',
      'Business-rule validation',
      'Exception management',
      'Quality scoring',
      'Automated alerts & quality dashboards',
    ],
    icon: ShieldCheck,
    color: 'text-emerald-600 dark:text-emerald-400',
    gradient: 'from-emerald-600/10 via-teal-500/5 to-transparent',
  },

  // 5. Inovexa Data Lineage
  {
    num: '05',
    category: 'governance',
    badge: 'Data Governance',
    title: 'Inovexa Data Lineage',
    tagline: 'Data Lineage & Impact Analysis',
    quote: 'Trace Your Data. Understand Its Journey.',
    desc: 'Provides end-to-end visibility into the origin, movement and transformation of enterprise data while enabling powerful dependency and impact analysis.',
    capabilities: [
      'End-to-end lineage',
      'Source-to-target lineage',
      'Table & column-level lineage',
      'ETL & database lineage',
      'Visual lineage graphs',
      'Upstream & downstream analysis',
      'Impact & dependency analysis',
      'Metadata integration',
    ],
    icon: Eye,
    color: 'text-violet-600 dark:text-purple-400',
    gradient: 'from-violet-600/10 via-indigo-500/5 to-transparent',
  },

  // 6. Inovexa Data Catalog
  {
    num: '06',
    category: 'governance',
    badge: 'Data Governance',
    title: 'Inovexa Data Catalog',
    tagline: 'Enterprise Data Discovery & Metadata Management',
    quote: 'Know Your Data. Find What Matters.',
    desc: 'A centralized data catalog that helps organizations discover, understand, document and manage enterprise data assets and metadata.',
    capabilities: [
      'Data asset discovery',
      'Dataset catalog',
      'Technical & business metadata',
      'Table & column information',
      'Data ownership & stewardship',
      'Business glossary',
      'Search & discovery',
      'Data classification',
      'Lineage integration & quality indicators',
    ],
    icon: Search,
    color: 'text-purple-600 dark:text-pink-400',
    gradient: 'from-purple-600/10 via-pink-500/5 to-transparent',
  },

  // 7. Inovexa Data Observability
  {
    num: '07',
    category: 'observability',
    badge: 'Data Observability',
    title: 'Inovexa Data Observability',
    tagline: 'Data & Pipeline Observability Platform',
    quote: 'See Your Data. Monitor Every Pipeline.',
    desc: 'A data observability platform that monitors data pipelines and data health to detect problems early and improve the reliability of enterprise data operations.',
    capabilities: [
      'Pipeline health monitoring',
      'Data freshness monitoring',
      'Volume anomaly detection',
      'Schema change detection',
      'Data quality monitoring',
      'SLA tracking & failure detection',
      'Automated alerts & notifications',
      'Operational dashboards & trends',
      'Root-cause analysis',
    ],
    icon: Activity,
    color: 'text-rose-600 dark:text-amber-400',
    gradient: 'from-rose-600/10 via-amber-500/5 to-transparent',
  },

  // 8. Inovexa ETL Test Automation
  {
    num: '08',
    category: 'observability',
    badge: 'Data Testing',
    title: 'Inovexa ETL Test Automation',
    tagline: 'Automated Data Pipeline Testing',
    quote: 'Automate Testing. Improve Data Reliability.',
    desc: 'An automated testing platform for validating ETL pipelines, transformations, data quality, business rules and source-to-target processing.',
    capabilities: [
      'Source-target count validation',
      'Sample & random record testing',
      'Transformation testing',
      'Date, timestamp & numeric testing',
      'Null, blank & duplicate checks',
      'Business-rule testing',
      'Rejection validation',
      'Automated test execution & reporting',
    ],
    icon: CheckSquare2,
    color: 'text-amber-600 dark:text-yellow-400',
    gradient: 'from-amber-600/10 via-orange-500/5 to-transparent',
  },

  // 9. Inovexa Data Reconciliation
  {
    num: '09',
    category: 'data-eng',
    badge: 'Data Validation',
    title: 'Inovexa Data Reconciliation',
    tagline: 'Automated Source-to-Target Reconciliation',
    quote: 'Know That Your Data Matches.',
    desc: 'An automated reconciliation platform that identifies data discrepancies and verifies the accuracy of data movement between enterprise systems.',
    capabilities: [
      'Record-count comparison',
      'Field-level comparison',
      'Aggregate validation',
      'Random record validation',
      'Source-to-target reconciliation',
      'Transformation validation',
      'Difference identification',
      'Exception & audit reporting',
    ],
    icon: FileCheck2,
    color: 'text-emerald-600 dark:text-teal-400',
    gradient: 'from-emerald-600/10 via-teal-500/5 to-transparent',
  },

  // 10. Inovexa Analytics
  {
    num: '10',
    category: 'analytics',
    badge: 'Analytics & BI',
    title: 'Inovexa Analytics',
    tagline: 'Enterprise Analytics & Business Intelligence',
    quote: 'Turn Data Into Decisions.',
    desc: 'An enterprise analytics platform that transforms trusted data into interactive dashboards, KPIs and actionable business insights.',
    capabilities: [
      'Interactive dashboards',
      'Business intelligence',
      'KPI monitoring',
      'Data visualization',
      'Executive dashboards',
      'Operational reporting',
      'Self-service analytics',
      'Drill-down & trend analysis',
      'Scheduled reporting & alerts',
    ],
    icon: BarChart3,
    color: 'text-blue-600 dark:text-cyan-400',
    gradient: 'from-blue-600/10 via-cyan-500/5 to-transparent',
  },

  // 11. Inovexa Workflow Automation
  {
    num: '11',
    category: 'automation',
    badge: 'Enterprise Automation',
    title: 'Inovexa Workflow Automation',
    tagline: 'Enterprise Workflow & Process Automation',
    quote: 'Automate Processes. Accelerate Business.',
    desc: 'An enterprise workflow automation platform that connects applications, APIs, jobs and processes to reduce manual effort and improve operational efficiency.',
    capabilities: [
      'Workflow automation',
      'Process orchestration',
      'Application integration',
      'API automation',
      'Conditional workflows',
      'Event-driven workflows',
      'Task automation & notifications',
      'Exception handling',
      'Workflow monitoring & execution history',
    ],
    icon: Zap,
    color: 'text-indigo-600 dark:text-violet-400',
    gradient: 'from-indigo-600/10 via-violet-500/5 to-transparent',
  },
]

export default function Products() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProducts =
    activeTab === 'all' ? products : products.filter((p) => p.category === activeTab)

  return (
    <div className="relative overflow-hidden pt-36 pb-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_10%,black,transparent)]" />
      <div className="pointer-events-none absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-blue-400/10 dark:bg-blue-500/15 noise-orb" />
      <div className="pointer-events-none absolute top-1/2 -right-48 h-96 w-96 rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 noise-orb" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header section */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mx-auto mb-5 w-fit">
              Inovexa Products · Enterprise Software
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
              Enterprise Software for <span className="gradient-text">Data, Analytics &amp; Automation</span>.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Inovexa builds enterprise software products that help organizations integrate data,
              improve data quality, understand data movement, monitor data platforms, automate workloads
              and transform data into actionable insights.
            </p>

            {/* 5 Product Tenets Badge Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {productTenets.map((tenet) => (
                <span
                  key={tenet}
                  className="rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-navy-900/80 px-4 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur-md"
                >
                  ✦ {tenet}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portfolio Architecture Progression Strip */}
        <div className="mt-14 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/60 dark:bg-navy-900/60 p-4 text-center backdrop-blur-md">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2">
            The Inovexa Data &amp; Automation Progression
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
            <span>Integrate</span>
            <span className="text-slate-400">→</span>
            <span>Migrate</span>
            <span className="text-slate-400">→</span>
            <span>Validate</span>
            <span className="text-slate-400">→</span>
            <span>Trace</span>
            <span className="text-slate-400">→</span>
            <span>Observe</span>
            <span className="text-slate-400">→</span>
            <span>Test</span>
            <span className="text-slate-400">→</span>
            <span>Analyze</span>
            <span className="text-slate-400">→</span>
            <span className="text-blue-600 dark:text-cyan-400 font-bold">Automate</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {productCategories.map((cat) => {
            const active = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20'
                    : 'border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.icon && <cat.icon className="h-4 w-4" />}
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Product Cards Grid (11 Products) */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => {
              const Icon = p.icon
              return (
                <motion.div
                  layout
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${
                    p.isFlagship
                      ? 'border-blue-400 dark:border-cyan-500/50 shadow-lg shadow-blue-500/10'
                      : 'border-slate-200/90 dark:border-white/[0.08]'
                  } bg-white dark:bg-navy-950/60 p-7 sm:p-9 shadow-sm dark:shadow-none backdrop-blur-xl transition-all duration-500 hover:border-blue-300 dark:hover:border-electric-400/40 hover:shadow-xl dark:hover:shadow-card hover:-translate-y-1`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative z-10">
                    {/* Top row: Number, Badge & Icon */}
                    <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                          {p.num}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-wider ${p.badgeColor}`}
                        >
                          <Sparkles className="h-3 w-3" />
                          {p.badge}
                        </span>
                      </div>
                      <div className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] text-blue-600 dark:text-cyan-400 transition-colors group-hover:bg-blue-50 dark:group-hover:bg-electric-500/10">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-300 sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-cyan-400">
                      {p.tagline}
                    </p>

                    {/* Tagline Quote */}
                    <p className="mt-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 italic">
                      "{p.quote}"
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {p.desc}
                    </p>

                    {/* Key capabilities */}
                    <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/[0.06]">
                      <p className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-400 font-semibold uppercase mb-2.5">
                        Key Capabilities
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="rounded-md border border-slate-200/80 dark:border-white/5 bg-slate-50 dark:bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-600 dark:text-slate-300"
                          >
                            ✓ {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="relative z-10 mt-8 pt-5 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Enterprise-ready
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-300 transition-colors hover:text-blue-700 dark:hover:text-white"
                    >
                      Request Demo &amp; Documentation
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Global CTA */}
      <CTA />
    </div>
  )
}
