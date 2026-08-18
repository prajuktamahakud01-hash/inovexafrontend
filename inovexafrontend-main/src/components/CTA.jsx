import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 px-8 py-16 text-center sm:px-16 shadow-2xl">
        <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-blue-500/20 noise-orb animate-pulse-slow" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-indigo-500/20 noise-orb animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="pointer-events-none absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/30 animate-drift"
              style={{ top: `${(i * 41) % 100}%`, left: `${(i * 29) % 100}%`, animationDuration: `${16 + i}s` }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Have an idea? Let's build it together.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-slate-300 leading-relaxed sm:text-base">
            Whether you're launching a new product, modernizing an existing system or
            looking for a technology partner, our team is ready to help.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5">
              <PhoneCall className="h-4 w-4" />
              Talk to an Expert
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

