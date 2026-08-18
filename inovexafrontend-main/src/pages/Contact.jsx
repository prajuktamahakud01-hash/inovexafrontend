import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Github, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = ['Custom Software', 'Web Development', 'Mobile App', 'SaaS Platform', 'AI / ML', 'ERP / CRM', 'UI/UX Design', 'Other']
const budgets = ['Under $10k', '$10k – $30k', '$30k – $75k', '$75k+', 'Not sure yet']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      <div className="absolute inset-0 grid-bg opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_10%,black,transparent)]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/10 dark:bg-blue-500/20 noise-orb" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto mb-6 w-fit">Get in touch</p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl text-slate-900 dark:text-white">
            Let's build something <span className="gradient-text">amazing</span>.
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { 
                icon: Mail, 
                label: 'Email', 
                value: 'info@inovexalabs.com', 
                href: 'mailto:info@inovexalabs.com' 
              },
              { 
                icon: Phone, 
                label: 'Phone (India)', 
                value: '+91 7008049087', 
                href: 'tel:+917008049087' 
              },
              { 
                icon: Phone, 
                label: 'Phone (Australia)', 
                value: '+61-433954587', 
                href: 'tel:+61433954587' 
              },
              { 
                icon: MapPin, 
                label: 'Offices', 
                details: ['Bhubaneswar, Odisha, India', 'Australia']
              },
              { 
                icon: Clock, 
                label: 'Working hours', 
                value: 'Mon – Fri, 9:00 AM – 6:00 PM' 
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-5 shadow-sm dark:shadow-none">
                <div className="rounded-xl bg-blue-50 dark:bg-electric-500/10 border border-blue-100 dark:border-electric-400/20 p-2.5 text-blue-600 dark:text-cyan-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 inline-block text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                      {item.value}
                    </a>
                  ) : item.details ? (
                    <div className="mt-1 space-y-0.5 text-sm font-semibold text-slate-900 dark:text-white">
                      {item.details.map((d) => (
                        <p key={d}>{d}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 shadow-sm transition-all hover:border-blue-400 dark:hover:border-cyan-400/40 hover:text-blue-600 dark:hover:text-cyan-300 hover:bg-blue-50 dark:hover:bg-cyan-500/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-8 shadow-xl shadow-slate-200/50 dark:shadow-none"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">Enquiry sent</h3>
                <p className="mt-2 max-w-xs text-sm text-slate-600 dark:text-slate-400">
                  Thanks for reaching out — a member of our team will reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jordan Lee" required />
                <Field label="Company" name="company" placeholder="Acme Inc." />
                <Field label="Email" name="email" type="email" placeholder="jordan@acme.com" required />
                <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Select service
                  <select
                    name="service"
                    defaultValue=""
                    className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-950/60 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition-all focus:border-blue-500 dark:focus:border-electric-400 focus:bg-white dark:focus:bg-navy-950 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="" disabled>Choose a service</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="dark:bg-navy-950 dark:text-white">{s}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Budget
                  <select
                    name="budget"
                    defaultValue=""
                    className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-950/60 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition-all focus:border-blue-500 dark:focus:border-electric-400 focus:bg-white dark:focus:bg-navy-950 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="" disabled>Select a range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="dark:bg-navy-950 dark:text-white">{b}</option>
                    ))}
                  </select>
                </label>

                <label className="col-span-full flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us a bit about your project…"
                    className="resize-none rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-950/60 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-electric-400 focus:bg-white dark:focus:bg-navy-950 focus:ring-2 focus:ring-blue-500/20"
                  />
                </label>

                <button type="submit" className="btn-primary col-span-full justify-center">
                  Send Enquiry
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900/40 shadow-md relative group"
        >
          <div className="absolute top-4 right-4 z-10">
            <a
              href="https://maps.google.com/?q=Bhubaneswar,+Odisha,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-navy-950/80 px-4 py-2 text-xs font-bold text-slate-800 dark:text-white shadow-md backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-cyan-300"
            >
              <MapPin className="h-3.5 w-3.5 text-blue-600 dark:text-cyan-400" />
              View on Google Maps
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
          <iframe
            title="Inovexa Office - Bhubaneswar, Odisha, India"
            src="https://maps.google.com/maps?q=Bhubaneswar%2C%20Odisha%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-96 w-full contrast-[1.02] transition-all duration-500"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-navy-950/60 px-4 py-3 text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-electric-400 focus:bg-white dark:focus:bg-navy-950 focus:ring-2 focus:ring-blue-500/20"
      />
    </label>
  )
}


