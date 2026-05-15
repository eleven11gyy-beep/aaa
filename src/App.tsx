import ParticleBg from './components/ParticleBg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative bg-[#0a0a1a] text-white min-h-screen">
      <ParticleBg />
      <Navbar />
      <Hero />

      {/* Wave divider after hero */}
      <div className="relative">
        <div className="wave-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0a0a1a" />
          </svg>
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
