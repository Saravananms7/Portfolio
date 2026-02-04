import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import { Hero } from './components/ui/animated-hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LampGlobalBackground } from './components/ui/lamp'

function App() {
  useEffect(() => {
    // Enforce dark mode permanently
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      <LampGlobalBackground />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
