import { motion } from 'framer-motion'
import {
  ShieldCheck,
  HeartHandshake,
  Eye,
  BookOpen,
  Award,
  Sparkles,
  Database,
  BarChart3,
  Cpu,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Building2,
  Rocket,
  Code2,
  Zap,
  Boxes,
  Briefcase,
  Target,
  Users2,
  Lightbulb,
  Compass,
  Check,
  Flame,
  ArrowUpRight,
  TrendingUp,
  Layers,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Counter from '../components/Counter.jsx'
import CTA from '../components/CTA.jsx'
import whoWeAreImg from '../image/who-we-are.webp'

const innovationIcon =
  'https://static.vecteezy.com/system/resources/thumbnails/053/963/658/small/a-colorful-light-bulb-with-various-icons-representing-innovation-technology-and-creativity-surrounding-it-png.png'

const enterprisePedigree = [
  { name: 'IBM', tag: 'Enterprise Tech & Cloud', accent: 'from-blue-600 to-indigo-700' },
  { name: 'Capgemini', tag: 'Global Transformation', accent: 'from-blue-500 to-cyan-600' },
  { name: 'Tech Mahindra', tag: 'Telecom & Automation', accent: 'from-red-600 to-rose-700' },
  { name: 'Infosys', tag: 'Next-Gen IT Services', accent: 'from-blue-600 to-sky-500' },
  { name: 'TCS', tag: 'Mission-Critical Scale', accent: 'from-purple-600 to-indigo-600' },
]

const productTenets = [
  { label: 'Simple to Adopt', desc: 'Friction-free onboarding and zero unnecessary bloat' },
  { label: 'Easy to Use', desc: 'Intuitive modern interfaces and visual workflows' },
  { label: 'Scalable', desc: 'Architected for distributed enterprise throughput' },
  { label: 'Secure', desc: 'Enterprise-grade encryption, governance & RBAC' },
  { label: 'Cloud-Ready', desc: 'Native hybrid, multi-cloud and container support' },
  { label: 'Cost-Effective', desc: 'Maximum enterprise capability without licensing penalties' },
  { label: 'Enterprise-Ready', desc: 'Full compliance, audit logging and 99.99% uptime resilience' },
]

const missionCommitments = [
  {
    title: 'Build Innovative Products',
    desc: 'Develop market-ready software products that solve real-world enterprise problems.',
    icon: Rocket,
    color: 'text-blue-600 dark:text-cyan-400',
    bg: 'bg-blue-50 dark:bg-blue-900/30',
  },
  {
    title: 'Simplify Complexity',
    desc: 'Transform complex technology processes into intuitive, automated and easy-to-manage solutions.',
    icon: Sparkles,
    color: 'text-indigo-600 dark:text-violet-400',
    bg: 'bg-indigo-50 dark:bg-indigo-900/30',
  },
  {
    title: 'Enable Data-Driven Organizations',
    desc: 'Help businesses efficiently integrate, manage, transform, govern and analyze their data.',
    icon: Database,
    color: 'text-cyan-600 dark:text-teal-400',
    bg: 'bg-cyan-50 dark:bg-cyan-900/30',
  },
  {
    title: 'Accelerate Digital Transformation',
    desc: 'Enable organizations to modernize applications, platforms and technology ecosystems.',
    icon: Zap,
    color: 'text-amber-600 dark:text-yellow-400',
    bg: 'bg-amber-50 dark:bg-amber-900/30',
  },
  {
    title: 'Deliver Engineering Excellence',
    desc: 'Provide reliable, scalable and high-quality technology services backed by strong engineering practices.',
    icon: Cpu,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/30',
  },
  {
    title: 'Create Long-Term Partnerships',
    desc: 'Build lasting relationships with customers by becoming a trusted technology and innovation partner rather than simply a service provider.',
    icon: HeartHandshake,
    color: 'text-rose-600 dark:text-pink-400',
    bg: 'bg-rose-50 dark:bg-rose-900/30',
  },
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We continuously look for better, smarter and more efficient ways to solve problems.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    desc: 'Our products and services are built around real customer needs and measurable business outcomes.',
  },
  {
    icon: Award,
    title: 'Engineering Excellence',
    desc: 'We believe quality, scalability, security and reliability are fundamental to building great technology.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'We operate with transparency, accountability and respect in everything we do.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    desc: 'Technology evolves rapidly. We encourage curiosity, learning and continuous improvement.',
  },
  {
    icon: Target,
    title: 'Ownership',
    desc: 'We take responsibility for our commitments, our products and the outcomes we deliver.',
  },
  {
    icon: Globe2,
    title: 'Global Mindset',
    desc: 'We build technology with a global perspective, designed to serve customers across industries and geographies.',
  },
]

const roadmapSteps = [
  { step: '01', title: 'Data Engineering', desc: 'High-throughput pipelines, ETL/ELT orchestration, and lakehouse integration.' },
  { step: '02', title: 'Data Analytics', desc: 'Operational intelligence, visual metrics, and self-serve decision dashboards.' },
  { step: '03', title: 'Enterprise Automation', desc: 'Universal workload scheduling, task orchestration, and automated triggers.' },
  { step: '04', title: 'AI-Enabled Platforms', desc: 'Intelligent process automation, cognitive telemetry, and predictive modeling.' },
  { step: '05', title: 'Digital Applications', desc: 'Scalable, modern enterprise platforms connecting users with systems seamlessly.' },
]

const stats = [
  { to: 20, suffix: '+', label: 'Years Leadership Experience' },
  { to: 100, suffix: '+', label: 'Enterprise & Digital Projects' },
  { to: 50, suffix: '+', label: 'Global Clients & Partners' },
  { to: 100, suffix: '%', label: 'Engineering Excellence' },
]

export default function About() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
        <div className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_15%,black,transparent)]" />
        <div className="pointer-events-none absolute top-10 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-400/10 dark:bg-blue-500/20 noise-orb animate-pulse-slow" />
        <div className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-cyan-400/10 dark:bg-cyan-500/15 noise-orb" />

        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mx-auto mb-6 w-fit"
          >
            <Sparkles className="h-3.5 w-3.5" />
            About Inovexa · Our Story &amp; Vision
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white"
          >
            Innovating Technology.{' '}
            <span className="gradient-text">Engineering Possibilities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg lg:text-xl"
          >
            Inovexa was founded with a simple but powerful idea — to combine deep enterprise
            technology experience with the speed, innovation, and flexibility of a modern product company.
          </motion.p>

          {/* Core Brand Pillars Equation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-navy-900/80 px-5 py-3 shadow-lg shadow-blue-500/5 backdrop-blur-xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200"
          >
            <span className="text-blue-600 dark:text-cyan-400">Enterprise Experience</span>
            <span className="text-slate-400 dark:text-slate-500 font-bold">+</span>
            <span className="text-indigo-600 dark:text-violet-400">Product Innovation</span>
            <span className="text-slate-400 dark:text-slate-500 font-bold">+</span>
            <span className="text-cyan-600 dark:text-emerald-400">Engineering Excellence</span>
          </motion.div>
        </div>
      </section>

      {/* 2. Enterprise Pedigree Strip */}
      <section className="border-y border-slate-200/80 dark:border-white/[0.08] bg-slate-50/50 dark:bg-navy-950/60 py-10 px-6 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Founding Leadership With 20+ Years Track Record Across Global Industry Leaders
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {enterprisePedigree.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/[0.06] bg-white dark:bg-navy-900/70 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-electric-400/40 hover:shadow-md"
              >
                <div className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                  {item.name}
                </div>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {item.tag}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Having led large-scale technology initiatives and worked with some of the world’s leading enterprises across multiple industries and geographies.
          </p>
        </div>
      </section>

      {/* 3. Deep Dive: Our Story */}
      <section className="section-pad relative">
        <div className="mx-auto max-w-6xl">
          {/* Main Visual Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative mb-20 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900/60 shadow-2xl"
          >
            <div className="relative aspect-[16/9] sm:aspect-[2.4/1] w-full overflow-hidden">
              <img
                src={whoWeAreImg}
                alt="Inovexa engineering and leadership team"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/80 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md mb-3">
                  <Sparkles className="h-3 w-3" />
                  <span>The Genesis of Inovexa</span>
                </div>
                <p className="font-display text-xl sm:text-3xl font-bold text-white leading-tight">
                  Born from real enterprise challenges, built for modern agility.
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Combining large-scale enterprise execution with accessible, fast, and scalable digital products.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Structured Story Narrative */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-8 sm:p-12 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-3">
              <Briefcase className="h-4 w-4" />
              Our Story
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              Solving the technology challenges we lived first-hand.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              <div className="space-y-4">
                <p>
                  Our founders and leadership team bring <strong>20+ years of experience</strong> across the global technology industry, having worked with leading organizations such as <strong>IBM, Capgemini, Tech Mahindra, Infosys, and TCS</strong>. Throughout their careers, they have been part of large-scale technology initiatives and have worked with some of the world's leading enterprises across multiple industries and geographies.
                </p>
                <p>
                  This experience provided us with a first-hand understanding of the challenges organizations face when dealing with complex data ecosystems, legacy technologies, fragmented applications, increasing automation needs and rapidly changing business requirements.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  We recognized that many of these challenges are common across organizations, yet businesses often rely on expensive, complex or highly fragmented technology solutions to address them.
                </p>
                <div className="rounded-2xl border-l-4 border-blue-600 dark:border-cyan-400 bg-blue-50/70 dark:bg-blue-950/40 p-5 text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  That realization became the foundation for Inovexa: building practical, scalable and enterprise-ready software products that simplify complex technology challenges while making advanced capabilities more accessible and cost-effective.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Vision & Product Tenets */}
      <section className="section-pad bg-slate-50/70 dark:bg-navy-900/30 relative">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left: Vision Statement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                <Eye className="h-4 w-4" />
                Our Vision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                To become a globally recognized technology company that builds intelligent software solutions.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We envision a future where organizations can solve complex technology and data challenges through simpler, smarter and more automated platforms.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Our long-term vision is to build a portfolio of globally relevant products across Data, Analytics, Automation and Digital Technology, while establishing Inovexa as a trusted technology partner for organizations around the world.
              </p>
              <div className="pt-2">
                <Link
                  to="/products"
                  className="btn-primary"
                >
                  Explore Our Products Portfolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: The 7 Product Standards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 rounded-3xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/70 p-7 sm:p-9 shadow-sm"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.06]">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  We Aspire to Create Products That Are:
                </h3>
                <span className="rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-cyan-400">
                  7 Core Tenets
                </span>
              </div>
              <div className="mt-6 space-y-3.5">
                {productTenets.map((item, idx) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <Check className="h-3 w-3" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{item.label}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-2">— {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Our Mission & 6 Commitments */}
      <section className="section-pad relative">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mx-auto mb-4 w-fit">Purpose &amp; Pledge</p>
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-white">
              Our Mission &amp; Commitments
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              To simplify complex technology challenges through innovative products and high-quality engineering services that deliver measurable business value. We combine our enterprise experience with modern technology to help organizations automate processes, unlock data value, and accelerate transformation.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {missionCommitments.map((m, idx) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-7 shadow-sm transition-all duration-300 hover:border-blue-300 dark:hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div>
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${m.bg} ${m.color} mb-5`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {m.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] text-xs font-semibold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <span>Inovexa Commitment</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. What Drives Us & Our Journey Ahead (Roadmap) */}
      <section className="section-pad bg-slate-50/70 dark:bg-navy-900/30 relative">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-yellow-400">
                  <Flame className="h-4 w-4" />
                  What Drives Us
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  A new generation of technology companies solving meaningful problems.
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  The technology landscape is changing rapidly. Data volumes are increasing, businesses are becoming more digital, and organizations are looking for ways to automate increasingly complex operations.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  We believe this creates an opportunity for a new generation of technology companies. Inovexa aims to be one of them. Our focus is not simply on building software — it is about building technology that solves meaningful problems, reduces complexity and creates lasting business value.
                </p>
              </div>

              <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 p-8 text-white shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold">
                  Evolution Roadmap
                </span>
                <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold">
                  Our Journey Ahead
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-blue-100">
                  From our foundation in enterprise technology and services, Inovexa is building towards becoming a global software product organization:
                </p>

                <div className="mt-6 space-y-3">
                  {roadmapSteps.map((r, i) => (
                    <div key={r.step} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-md border border-white/10">
                      <span className="font-mono text-xs font-bold text-cyan-300 px-2 py-0.5 rounded bg-white/10">
                        {r.step}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{r.title}</p>
                        <p className="text-[11px] text-blue-100">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Solve Real Problems · Build Great Products · Create Lasting Value
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our 7 Values */}
      <section className="section-pad bg-white dark:bg-navy-950">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mx-auto mb-5 w-fit">Guiding Principles</p>
            <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-white">
              Our Values
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              The foundational principles that guide how we engineer software and partner with organizations.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-50/50 dark:bg-navy-900/60 p-6 shadow-sm dark:shadow-none transition-all hover:border-blue-300 dark:hover:border-cyan-400/40 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center rounded-2xl border border-blue-200 dark:border-electric-400/20 bg-blue-50/80 dark:bg-electric-500/10 p-2.5 shadow-sm text-blue-600 dark:text-cyan-400 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">{v.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. Brand Manifesto Strip */}
      <section className="section-pad py-16 bg-gradient-to-r from-blue-900 via-indigo-950 to-navy-950 text-white relative overflow-hidden border-y border-white/10">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300 mb-4 font-semibold">
            Inovexa Brand Manifesto
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Innovating Technology. Engineering Possibilities.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 text-xs sm:text-sm font-medium">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
              <span className="block text-cyan-300 font-bold mb-1">Our Experience</span>
              gives us the foundation.
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
              <span className="block text-cyan-300 font-bold mb-1">Our Innovation</span>
              drives us forward.
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
              <span className="block text-cyan-300 font-bold mb-1">Our Customers</span>
              inspire us.
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
              <span className="block text-cyan-300 font-bold mb-1">Our Products</span>
              define our future.
            </div>
          </div>
        </div>
      </section>

      {/* Verified Stats */}
      <section className="section-pad bg-slate-50/60 dark:bg-navy-900/30">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-slate-900 dark:text-white">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Final CTA */}
      <CTA />
    </>
  )
}
