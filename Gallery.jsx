import React from 'react'
import { motion } from 'framer-motion'

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=600',
    title: 'Acai Coconut Bowl',
    category: 'Gourmet Food',
    gridSpan: 'md:col-span-2 md:row-span-1',
  },
  {
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=600',
    title: 'Cold Brew Passion',
    category: 'Artisan Drinks',
    gridSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=600',
    title: 'Botanical Seating',
    category: 'Interior Design',
    gridSpan: 'md:col-span-1 md:row-span-2',
  },
  {
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    title: 'Single Origin Pour',
    category: 'Artisan Coffee',
    gridSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    title: 'Social Sanctuary',
    category: 'Community Lifestyle',
    gridSpan: 'md:col-span-2 md:row-span-1',
  },
]

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Bespoke Aesthetics</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wider">Lifestyle Gallery</h2>
        <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`relative overflow-hidden border border-border/40 group aspect-[4/3] md:aspect-auto ${item.gridSpan}`}
            style={{ minHeight: '300px' }}
          >
            <div className="absolute inset-0 bg-[#07110C]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-6 md:p-8" />
            
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                {item.category}
              </span>
              <h3 className="font-heading text-xl tracking-wider text-text mt-1">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
