import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Compass } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Menu', href: '#menu' },
  { name: 'Story', href: '#story' },
  { name: 'Reservations', href: '#reservations' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glassmorphism py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <Compass className="w-8 h-8 text-gold group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-heading text-2xl tracking-widest text-text group-hover:text-gold transition-colors duration-300">
              TROPICAL <span className="font-light text-tropical-light">CAFE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm uppercase tracking-widest text-text/80 hover:text-gold transition-colors duration-300 py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-background text-xs uppercase tracking-widest rounded-none transition-all duration-300"
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="font-heading text-3xl tracking-widest text-text hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#reservations"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-4 px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-background text-sm uppercase tracking-widest rounded-none transition-all"
              >
                Reserve Table
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
