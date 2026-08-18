import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Database,
  BarChart3,
  Code2,
  Server,
  Bot,
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  GitMerge,
  RefreshCw,
  ShieldCheck,
  Eye,
  Layers,
  LineChart,
  Boxes,
  Smartphone,
  Workflow,
  Zap,
  CloudCog,
  Cpu,
  CheckSquare2,
  Headphones,
  Check,
  Building2,
  TrendingUp,
} from 'lucide-react'
import CTA from '../components/CTA.jsx'

const practiceAreas = [
  {
    id: 'data-engineering',
    num: '01',
    title: 'Data Engineering & Modernization',
    tagline: 'Build Reliable, Scalable & Modern Data Ecosystems',
    desc: 'From high-throughput data pipelines and automated ETL/ELT to legacy database migrations, governance, and cloud lakehouse adoption, we build the data foundation modern enterprises need to scale.',
    icon: Database,
    accent: 'from-blue-600 to-cyan-500',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-cyan-400 dark:border-cyan-500/30',
    services: [
      {
        title: 'Data Engineering',
        tagline: 'Scalable Ingestion & Lakehouse Architecture',
        desc: 'Design and develop robust data platforms that enable efficient data ingestion, transformation, storage, and real-time processing.',
        capabilities: ['Data architecture', 'ETL/ELT development', 'Real-time streaming', 'Data lakehouse solutions', 'Metadata frameworks'],
      },
      {
        title: 'Data Integration & ETL',
        tagline: 'Connect Data Across Your Enterprise',
        desc: 'Design and implement standardized ETL/ELT pipelines connecting databases, APIs, files, applications, and cloud systems.',
        capabilities: ['Database & API integration', 'File ingestion', 'Cloud integration', 'Source-to-target mapping', 'Error handling & audit logs'],
      },
      {
        title: 'Data Migration',
        tagline: 'Move Data with Confidence',
        desc: 'Safely move, transform, and validate enterprise data across legacy, on-premise, and multi-cloud environments with zero loss.',
        capabilities: ['Database & legacy migration', 'Cloud re-platforming', 'Reconciliation', 'Cutover support', 'Post-migration validation'],
      },
      {
        title: 'Data Quality',
        tagline: 'Build Trust in Your Data',
        desc: 'Establish continuous data validation frameworks that catch anomalies, completeness issues, and duplicates before they affect operations.',
        capabilities: ['Data profiling', 'Quality rules & checks', 'Duplicate detection', 'Exception management', 'Quality scoring dashboards'],
      },
      {
        title: 'Data Governance & Lineage',
        tagline: 'Understand, Govern & Control Your Data',
        desc: 'Provide complete visibility into data origins, movement, transformations, and consumption through visual lineage and metadata catalogs.',
        capabilities: ['Column-level lineage', 'Metadata management', 'Data catalogs & glossary', 'Data classification', 'Impact analysis'],
      },
      {
        title: 'Data Platform Modernization',
        tagline: 'Modernize Your Data Ecosystem',
        desc: 'Transition legacy on-premise data warehouses to modern, scalable, cloud-native architectures designed for high performance and analytics.',
        capabilities: ['Legacy assessment', 'Data warehouse modernization', 'Lakehouse adoption', 'Architecture redesign', 'Performance optimization'],
      },
    ],
  },
  {
    id: 'analytics-bi',
    num: '02',
    title: 'Data Analytics & BI',
    tagline: 'Turn Data into Actionable Business Intelligence',
    desc: 'Transform raw multi-source enterprise data into intuitive executive dashboards, real-time KPI metrics, and self-service analytics to power faster, smarter decisions.',
    icon: BarChart3,
    accent: 'from-cyan-500 to-teal-500',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-500/30',
    services: [
      {
        title: 'Data Analytics & BI',
        tagline: 'From Raw Data to Real-Time Decisions',
        desc: 'Transform enterprise data into meaningful insights through modern business intelligence, interactive KPI dashboards, and scheduled reporting.',
        capabilities: ['Executive dashboards', 'Operational KPI tracking', 'Self-service analytics', 'Analytical data marts', 'BI platform modernization'],
      },
      {
        title: 'Data Visualization',
        tagline: 'Make Complex Data Easy to Understand',
        desc: 'Design intuitive visual experiences, interactive dashboards, and visual storytelling that make complex datasets easy for business users to grasp.',
        capabilities: ['Interactive visual design', 'Executive metric cards', 'Drill-down charts', 'Data storytelling', 'Mobile-responsive dashboards'],
      },
    ],
  },
  {
    id: 'application-engineering',
    num: '03',
    title: 'Application Engineering',
    tagline: 'Design, Modernize & Scale Digital Applications',
    desc: 'End-to-end software development combining modern UI/UX design, cloud-native backend architecture, and agile product development to engineer platforms built for growth.',
    icon: Code2,
    accent: 'from-indigo-600 to-violet-600',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-violet-300 dark:border-violet-500/30',
    services: [
      {
        title: 'Application Development',
        tagline: 'Build Modern Business Applications',
        desc: 'Design and develop scalable, secure, and maintainable custom web and enterprise applications engineered around your exact workflows.',
        capabilities: ['Web application development', 'Custom backend & APIs', 'Microservices architecture', 'Frontend engineering', 'Database design'],
      },
      {
        title: 'Application Modernization',
        tagline: 'Transform Legacy Applications',
        desc: 'Refactor cumbersome legacy applications into modern, scalable microservices and APIs while minimizing disruption to business operations.',
        capabilities: ['Legacy assessment', 'Monolith-to-microservices', 'Cloud re-platforming', 'UI modernization', 'Technical debt reduction'],
      },
      {
        title: 'Mobile Application Development',
        tagline: 'Digital Experiences for iOS & Android',
        desc: 'Build high-performance native and cross-platform mobile apps that combine intuitive user experiences with scalable backend integration.',
        capabilities: ['iOS & Android development', 'Flutter & React Native', 'Offline-first design', 'Mobile APIs & sync', 'Enterprise app maintenance'],
      },
      {
        title: 'API & System Integration',
        tagline: 'Connect Your Digital Ecosystem',
        desc: 'Connect applications, databases, cloud platforms, and third-party systems through secure, scalable REST, SOAP, and event-driven APIs.',
        capabilities: ['REST & GraphQL APIs', 'Microservices connectivity', 'Third-party integrations', 'Database & file bridging', 'Event-driven webhooks'],
      },
      {
        title: 'Product Engineering',
        tagline: 'From Concept to Enterprise-Ready Product',
        desc: 'Partner with seasoned product engineers to design, architect, build, and scale SaaS products using modern cloud-native practices.',
        capabilities: ['Product discovery & UX', 'Cloud-native architecture', 'Multi-tenant engineering', 'DevOps & release automation', 'Continuous iteration'],
      },
    ],
  },
  {
    id: 'enterprise-technology',
    num: '04',
    title: 'Enterprise Technology',
    tagline: 'Robust Cloud, SAP & Infrastructure Engineering',
    desc: 'Empowering mission-critical enterprise operations through comprehensive SAP extensions, multi-cloud architectures (AWS, Azure, GCP), CI/CD automation, and automated testing.',
    icon: Server,
    accent: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-500/30',
    services: [
      {
        title: 'SAP Services',
        tagline: 'Extend & Modernize Your SAP Ecosystem',
        desc: 'Support SAP development, integration, data migration, analytics, custom extensions, and application support connected to your wider ecosystem.',
        capabilities: ['SAP development & integration', 'SAP data migration', 'SAP analytics & reporting', 'Custom modules', 'SAP modernization support'],
      },
      {
        title: 'Cloud Engineering',
        tagline: 'Build, Migrate & Scale in the Cloud',
        desc: 'Design, develop, and modernize applications and data platforms across leading cloud providers — AWS, Microsoft Azure, and Google Cloud.',
        capabilities: ['AWS / Azure / GCP architecture', 'Cloud migration & rehosting', 'Cloud data platforms', 'Security & cost optimization', 'Cloud-native apps'],
      },
      {
        title: 'DevOps & Automation',
        tagline: 'Automate Development & Operations',
        desc: 'Implement CI/CD pipelines, Infrastructure as Code, and automated environment management to accelerate software delivery and reliability.',
        capabilities: ['CI/CD automation', 'Infrastructure as Code (IaC)', 'Deployment automation', 'Containerization (Docker/K8s)', 'Monitoring & alerts'],
      },
      {
        title: 'Quality Engineering & Testing',
        tagline: 'Build Quality into Every Release',
        desc: 'Comprehensive automated testing across applications, APIs, data pipelines, and enterprise integrations to ensure flawless releases.',
        capabilities: ['Automated functional testing', 'ETL & data validation testing', 'API & integration testing', 'Performance & load testing', 'Regression suites'],
      },
    ],
  },
  {
    id: 'ai-automation',
    num: '05',
    title: 'AI & Intelligent Automation',
    tagline: 'Make Enterprise Technology Smarter',
    desc: 'Apply machine learning, generative AI, and intelligent workflow automation to data, applications, and business processes to multiply team productivity.',
    icon: Bot,
    accent: 'from-purple-600 to-pink-600',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-pink-300 dark:border-pink-500/30',
    services: [
      {
        title: 'AI Solutions',
        tagline: 'Custom AI Models & LLM Integrations',
        desc: 'Design and deploy custom AI models, generative AI applications, and cognitive services tailored to enterprise use cases.',
        capabilities: ['Generative AI apps', 'Custom model training & tuning', 'LLM prompt engineering', 'AI APIs & microservices', 'Cognitive processing'],
      },
      {
        title: 'Intelligent Automation',
        tagline: 'Automated Operations & Smart Workflows',
        desc: 'Automate document parsing, exception routing, and repetitive operational tasks using AI-assisted workflow engines.',
        capabilities: ['Intelligent document processing', 'Process automation', 'Smart exception routing', 'Human-in-the-loop validation', 'Automated task bots'],
      },
      {
        title: 'AI-Powered Data & Analytics',
        tagline: 'Predictive Intelligence & Anomaly Detection',
        desc: 'Enhance data platforms with predictive forecasting, automated anomaly detection, and natural language data querying.',
        capabilities: ['Predictive analytics', 'Anomaly detection in pipelines', 'Natural language queries', 'Automated recommendations', 'Real-time telemetry'],
      },
    ],
  },
  {
    id: 'consulting-managed',
    num: '06',
    title: 'Consulting & Managed Services',
    tagline: 'Strategy, Architecture & 24/7 Operations',
    desc: 'Strategic technology advisory and dedicated 24/7 managed services to help organizations make sound architectural investments and maintain peak operational health.',
    icon: Compass,
    accent: 'from-amber-500 to-orange-500',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-yellow-300 dark:border-yellow-500/30',
    services: [
      {
        title: 'Technology Consulting & Architecture',
        tagline: 'Turn Technology Challenges into Strategies',
        desc: 'Expert consulting backed by 20+ years of enterprise leadership to define data strategies, scalable architectures, and practical roadmaps.',
        capabilities: ['Technology & data strategy', 'Solution & cloud architecture', 'Platform evaluation', 'Modernization roadmaps', 'Digital transformation advisory'],
      },
      {
        title: 'Managed Technology Services',
        tagline: 'Operate. Monitor. Optimize.',
        desc: 'Continuous 24/7 support, production monitoring, ETL management, and platform optimization to ensure reliability and peace of mind.',
        capabilities: ['24/7 production monitoring', 'Data platform & ETL support', 'Application maintenance & patching', 'Incident management', 'SLA governance'],
      },
    ],
  },
]

export default function Services() {
  const [activeArea, setActiveArea] = useState('all')

  const displayedAreas =
    activeArea === 'all'
      ? practiceAreas
      : practiceAreas.filter((p) => p.id === activeArea)

  return (
    <div className="relative overflow-hidden pt-36 pb-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_10%,black,transparent)]" />
      <div className="pointer-events-none absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-blue-400/10 dark:bg-blue-500/15 noise-orb" />
      <div className="pointer-events-none absolute top-1/2 -right-48 h-96 w-96 rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 noise-orb" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mx-auto mb-5 w-fit">
              Technology Engineering &amp; Digital Transformation Services
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight">
              Enterprise Engineering Across{' '}
              <span className="gradient-text">6 Core Practice Areas</span>.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              Inovexa provides end-to-end technology services that help organizations build, modernize,
              integrate, automate, and optimize their digital and data ecosystems. Backed by 20+ years of
              enterprise leadership, we deliver structured excellence across 6 specialized practice areas.
            </p>
          </motion.div>

          {/* Quick-Jump Practice Area Nav Buttons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <button
              onClick={() => setActiveArea('all')}
              className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeArea === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              All 6 Practice Areas
            </button>
            {practiceAreas.map((p) => {
              const active = activeArea === p.id
              const Icon = p.icon
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveArea(p.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25 scale-105'
                      : 'border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>
                    {p.num}. {p.title.split('&')[0].trim()}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* THE 6 GROUPED PRACTICE SECTIONS */}
        {/* ========================================================================= */}
        <div className="mt-20 space-y-24">
          {displayedAreas.map((area, idx) => {
            const AreaIcon = area.icon
            return (
              <motion.section
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[2.5rem] border border-slate-200/90 dark:border-white/[0.08] bg-white/70 dark:bg-navy-950/50 p-7 sm:p-12 shadow-sm backdrop-blur-xl"
              >
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 dark:border-white/[0.08] pb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
                      <AreaIcon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-blue-600 dark:text-cyan-400">
                          PRACTICE AREA {area.num}
                        </span>
                        <span className={`inline-block rounded-full border px-3 py-0.5 text-[11px] font-semibold ${area.badgeColor}`}>
                          {area.services.length} Specialized Offerings
                        </span>
                      </div>
                      <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                        {area.title}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-blue-600 dark:text-cyan-400">
                        {area.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="max-w-md text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {area.desc}
                  </p>
                </div>

                {/* Services Cards Grid for this Area */}
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {area.services.map((s, sIdx) => (
                    <div
                      key={s.title}
                      className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-white/[0.06] bg-slate-50/70 dark:bg-navy-900/60 p-6 shadow-sm transition-all duration-300 hover:border-blue-300 dark:hover:border-cyan-400/40 hover:-translate-y-1.5 hover:shadow-xl dark:hover:shadow-card"
                    >
                      <div>
                        {/* Title & Tagline */}
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                            {s.title}
                          </h3>
                          <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500">
                            #{area.num}.{sIdx + 1}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-cyan-400">
                          {s.tagline}
                        </p>

                        {/* Description */}
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {s.desc}
                        </p>

                        {/* Key Capabilities Pills */}
                        <div className="mt-5 pt-4 border-t border-slate-200/70 dark:border-white/[0.06]">
                          <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 font-semibold mb-2">
                            Key Capabilities
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {s.capabilities.map((cap) => (
                              <span
                                key={cap}
                                className="rounded-md border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.03] px-2 py-0.5 text-[11px] text-slate-600 dark:text-slate-300"
                              >
                                ✓ {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Link */}
                      <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-white/[0.06] flex items-center justify-between">
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                          Inquire service
                        </span>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 transition-colors hover:text-blue-700 dark:hover:text-cyan-300"
                        >
                          Consult Experts
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )
          })}
        </div>
      </div>

      {/* Global CTA */}
      <CTA />
    </div>
  )
}
