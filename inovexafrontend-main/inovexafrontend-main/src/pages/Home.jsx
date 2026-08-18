import Hero from '../components/Hero.jsx'
import AboutPreview from '../components/AboutPreview.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import TechnologyStack from '../components/TechnologyStack.jsx'
import Process from '../components/Process.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTA from '../components/CTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <WhyChooseUs />
      <TechnologyStack />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}
