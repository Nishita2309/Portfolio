import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 1. Initialize Lenis for premium cinematic smooth scrolling
const lenis = new Lenis({
  duration: 1.5, // Slower, buttery smooth duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Cinematic ease-out-expo
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

// 2. Synchronize Lenis with GSAP ScrollTrigger to prevent jitter and layout shifts
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

// Disable lag smoothing to prevent double scrolling/jitter issues
gsap.ticker.lagSmoothing(0)

// 3. Handle Navbar Anchor Links correctly
document.addEventListener('click', (e) => {
  const target = e.target.closest('a')
  if (target && target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault()
    const id = target.getAttribute('href')
    if (id === '#') return // Ignore empty hashes
    lenis.scrollTo(id, { 
      offset: 72, // Account for the fixed cinematic navbar
      duration: 1.5, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
