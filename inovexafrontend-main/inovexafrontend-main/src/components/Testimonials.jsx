import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Priya Nair',
    role: 'CEO, Retailix',
    quote:
      'Inovexa rebuilt our storefront from the ground up and cut our page load times dramatically. The team thinks like product owners, not just contractors.',
    rating: 5,
  },
  {
    name: 'Daniel Cho',
    role: 'CTO, FinFlow',
    quote:
      'They understood our compliance constraints from week one and never treated them as an afterthought. Our dashboard has scaled to 40 institutional clients since.',
    rating: 5,
  },
  {
    name: 'Amara Okafor',
    role: 'Founder, CampusOne',
    quote:
      'We evaluated four agencies before Inovexa. They were the only team that pushed back on our original scope — and they were right to.',
    rating: 5,
  },
  {
    name: 'Marco Bellini',
    role: 'Head of Ops, ShipTrack',
    quote:
      'Real-time visibility across our fleet used to be a spreadsheet. Now it is a product our customers ask about in every sales call.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-pad relative bg-slate-50/60 dark:bg-navy-900/30">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mx-auto mb-5 w-fit">Client voices</p>
          <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-white">Trusted by businesses that think ahead</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.testimonial-pagination' }}
          className="mt-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200/90 dark:border-white/[0.08] bg-white dark:bg-navy-900/60 p-10 text-center shadow-md dark:shadow-glow">
                <div className="flex justify-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-slate-200 font-medium">"{t.quote}"</p>
                <div className="mt-8 flex items-center justify-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-blue-600 via-brand-yellow to-cyan-500 font-display text-sm font-bold text-white shadow-sm">
                    {t.name.split(' ').map((w) => w[0]).join('')}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-pagination mt-8 flex justify-center gap-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-slate-300 dark:[&_.swiper-pagination-bullet]:bg-white/20 [&_.swiper-pagination-bullet-active]:bg-blue-600 dark:[&_.swiper-pagination-bullet-active]:bg-cyan-400 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:cursor-pointer" />
      </div>
    </section>
  )
}


