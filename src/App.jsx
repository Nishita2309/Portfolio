import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <main className="relative bg-[#050505] text-white overflow-hidden">
      <ParticleBackground />

      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
