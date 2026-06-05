import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Story() {
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60])

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        <motion.div 
          className="lg:col-span-6 space-y-8 text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Boutique Heritage</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wider">Our Tropical Story</h2>
            <div className="w-12 h-[2px] bg-gold" />
          </div>

          <p className="text-sm text-text/80 leading-relaxed font-light">
            Tropical Cafe was born from a desire to escape the fast-paced rush of the city and find refuge in a lush, slower world. Inspired by the calm and vibrant botanicals of Bali, Tulum, and Amalfi, our cafe brings together boutique hospitality with a refined, tropical lifestyle.
          </p>

          <p className="text-sm text-text/80 leading-relaxed font-light">
            We believe that a cafe is more than just a place to get coffee—it is a community sanctuary, a space for creative gatherings, and a setting for unforgettable moments. Every corner of our design, from the warm ambient lighting to the natural stone and tropical palm trees, has been crafted to transport you.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-border/40">
            <div>
              <p className="font-heading text-4xl text-gold font-bold">2021</p>
              <p className="text-xs uppercase tracking-wider text-text/50 mt-1">Founding Year</p>
            </div>
            <div>
              <p className="font-heading text-4xl text-gold font-bold">100%</p>
              <p className="text-xs uppercase tracking-wider text-text/50 mt-1">Organic Sourced</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-6 relative h-[450px] lg:h-[600px] w-full overflow-hidden border border-border"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[#07110C]/40 z-10 mix-blend-multiply pointer-events-none" />
          
          <motion.img
            style={{ y: imgY }}
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800"
            alt="Tropical Cafe boutique interior seating with lush plants"
            className="w-full h-[120%] object-cover absolute -top-[10%] left-0"
            loading="lazy"
          />

          <div className="absolute bottom-6 left-6 z-20 bg-background/90 backdrop-blur-md px-6 py-4 border border-border max-w-[200px]">
            <p className="font-heading text-lg tracking-widest text-gold leading-tight">THE ESCAPE</p>
            <p className="text-[10px] text-text/60 uppercase tracking-widest mt-1">A Botanical Sanctuary</p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
