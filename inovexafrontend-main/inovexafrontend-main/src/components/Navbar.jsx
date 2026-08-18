import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'
import Logo from './Logo.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme, isDark } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 dark:bg-navy-950/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-20">
        <Logo className="group flex items-center gap-3" />

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              {l.to.startsWith('/#') || l.to.includes('#') ? (
                <a
                  href={l.to}
                  className="relative px-4 py-2 text-sm text-slate-600 dark:text-slate-300 font-medium transition-colors hover:text-slate-900 dark:hover:text-white group"
                >
                  {l.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ) : (
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-colors group ${
                      isActive
                        ? 'text-blue-600 dark:text-cyan-400 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`
                  }
                >
                  {l.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 scale-x-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100" />
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions (Theme toggle + CTA button) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-400 hover:text-blue-600 hover:scale-105 dark:border-white/15 dark:bg-white/[0.06] dark:text-amber-400 dark:hover:border-amber-400/50"
          >
            {isDark ? (
              <Sun className="h-4.5 w-4.5 text-amber-400 animate-spin-slow" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-slate-700" />
            )}
          </button>

          <Link to="/contact" className="btn-primary text-xs px-5 py-3">
            Let's Talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-white/15 dark:bg-white/[0.06] dark:text-amber-400"
          >
            {isDark ? (
              <Sun className="h-4.5 w-4.5 text-amber-400" />
            ) : (
              <Moon className="h-4.5 w-4.5 text-slate-700" />
            )}
          </button>

          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 dark:border-white/15 dark:bg-white/[0.06] dark:text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden bg-white/95 dark:bg-navy-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8 pt-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {l.to.includes('#') ? (
                    <a
                      href={l.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-slate-900 dark:hover:text-white"
                    >
                      {l.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center">
                Let's Talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


