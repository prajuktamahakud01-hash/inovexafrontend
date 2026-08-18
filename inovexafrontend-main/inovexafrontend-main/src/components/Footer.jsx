import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react'
import Logo from './Logo.jsx'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Products', to: '/products' },
      { label: 'Services', to: '/services' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    title: 'Products & Platforms',
    links: [
      { label: 'FlowNexa (Workload Orchestration)', to: '/products' },
      { label: 'Data Engineering & ETL', to: '/products' },
      { label: 'Apache Hop Data Studio', to: '/products' },
      { label: 'Enterprise Automation SaaS', to: '/products' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-950 px-6 pt-20 sm:px-10 lg:px-20 text-slate-600 dark:text-slate-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="flex items-center gap-3" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Enterprise Software for Data, Analytics &amp; Automation. Combining deep enterprise experience with modern product innovation.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 shadow-sm transition-all duration-300 hover:border-blue-400 dark:hover:border-electric-400/40 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-blue-50 dark:hover:bg-electric-500/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-display text-sm font-bold text-slate-900 dark:text-white">{col.title}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.to.includes('#') ? (
                    <a href={l.to} className="text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-cyan-300 font-medium">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="text-sm text-slate-600 dark:text-slate-400 transition-colors hover:text-blue-600 dark:hover:text-cyan-300 font-medium">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-display text-sm font-bold text-slate-900 dark:text-white">Contact</p>
          <ul className="mt-5 space-y-3.5 text-sm text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-cyan-400" />
              hello@inovexa.com
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-cyan-400" />
              +91 7008049087
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-cyan-400" />
              Bhubaneswar, Odisha, India
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-white/10 py-8 text-xs text-slate-500 sm:flex-row">
        <p>© 2026 Inovexa. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  )
}


