import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Code, Award, Mail } from 'lucide-react'
import { ExpandableTabs } from './ui/expandable-tabs'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300"
    >
      <div className="container-max h-full">
        <div className="flex items-center justify-between h-16 relative">
          <div></div>


          {/* Center Navigation - Dynamic Island Style */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <ExpandableTabs
              className="rounded-full px-2 py-1.5 border border-white/10 bg-slate-900/80 backdrop-blur-md shadow-lg"
              activeColor="text-primary-600 dark:text-primary-400"
              tabs={[
                { title: 'Home', icon: Home },
                { title: 'About', icon: User },
                { title: 'Projects', icon: Briefcase },
                { title: 'Skills', icon: Code },
                { title: 'Certifications', icon: Award },
                { type: 'separator' },
                { title: 'Contact', icon: Mail },
              ]}
              onChange={(index) => {
                if (index === null) return;
                const hrefs = ['#home', '#about', '#projects', '#skills', '#certifications', null, '#contact'];
                const href = hrefs[index];
                if (href) scrollToSection(href);
              }}
            />
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
