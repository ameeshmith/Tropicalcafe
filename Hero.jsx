import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import ThreeScene from './ThreeScene'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-20 min-h-[calc(100vh-80px)]">
        
        {/* Left Content */}
        <motion.div 
          className="lg:col-span-6 flex flex-col justify-center space-y-8 text-left py-12 lg:py-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="w-8 h-[1px] bg-gold" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Boutique Lifestyle Experience</p>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-heading font-bold tracking-wider leading-[0.95]"
          >
            TROPICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-tropical-light">
              CAFE
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-text/80 leading-relaxed font-light max-w-xl"
          >
            A premium tropical escape where exceptional food, artisan drinks, and unforgettable moments come together. Inspired by boutique hospitality and refined botanicals.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#menu" 
              className="px-8 py-4 bg-gold hover:bg-gold-dark text-background text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg hover:shadow-gold/20"
            >
              Explore Menu
            </a>
            <a 
              href="#reservations" 
              className="px-8 py-4 border border-border hover:border-gold text-text hover:text-gold text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300"
            >
              Reserve Table
            </a>
          </motion.div>
        </motion.div>

        {/* Right Canvas */}
        <motion.div 
          className="lg:col-span-6 w-full h-[450px] lg:h-[650px] relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-tropical/10 rounded-full blur-[80px] animate-pulse-slow" />
          </div>
          
          <Suspense fallback={
            <div className="text-gold font-heading tracking-widest text-sm flex flex-col items-center space-y-2">
              <span className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin" />
              <span>CREATING 3D ENVIRONMENT...</span>
            </div>
          }>
            <ThreeScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Down arrow */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2 pointer-events-none opacity-40 md:opacity-75"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-text/60">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-gold" />
      </motion.div>
    </div>
  )
}
