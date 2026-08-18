import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import StickySocialBar from './components/StickySocialBar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAFBFC] dark:bg-[#050816] text-slate-600 dark:text-slate-200 transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <StickySocialBar />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

