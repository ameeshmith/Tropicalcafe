import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Award, Sun } from 'lucide-react'

const experiences = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'Locally sourced organic ingredients selected daily to ensure the highest standards of flavor and quality.',
  },
  {
    icon: Award,
    title: 'Artisan Creations',
    description: 'Handcrafted signature drinks, gourmet brunch plates, house desserts, and unique seasonal pairings.',
  },
  {
    icon: Sun,
    title: 'Tropical Atmosphere',
    description: 'A carefully curated, lush boutique haven inspired by serene tropical resorts and modern NYC hospitality.',
  },
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Bespoke Hospitality</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wider">The Tropical Experience</h2>
        <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {experiences.map((exp, idx) => {
          const IconComponent = exp.icon
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, borderColor: '#D4A76A' }}
              className="premium-card-gradient border border-border/60 p-8 md:p-10 text-left transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-border group-hover:border-gold transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-border group-hover:border-gold transition-colors duration-300" />

              <div className="w-14 h-14 bg-surface border border-border/80 flex justify-center items-center mb-8 group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                <IconComponent className="w-6 h-6 text-gold" />
              </div>

              <h3 className="font-heading text-xl tracking-wider text-text mb-4 group-hover:text-gold transition-colors duration-300">
                {exp.title}
              </h3>
              
              <p className="text-sm text-text/60 leading-relaxed font-light">
                {exp.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
