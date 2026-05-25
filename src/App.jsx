import Navbar from './components/Navbar'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <main className="relative z-10 bg-transparent text-white overflow-hidden">
      <ParticleBackground />

      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
