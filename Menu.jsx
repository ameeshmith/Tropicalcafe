import React from 'react'
import { motion } from 'framer-motion'

const menuItems = [
  {
    name: 'Signature Tropical Latte',
    price: '$8.50',
    description: 'Double shot espresso infused with organic coconut blossom syrup, finished with velvety steamed macadamia milk and gold dust.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Mango Passion Cooler',
    price: '$9.00',
    description: 'Cold-pressed Kensington Pride mango juice, fresh passionfruit pulp, lime juice, and sparkling club soda over crushed ice.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Coconut Pancakes',
    price: '$16.00',
    description: 'Fluffy buttermilk pancakes topped with whipped coconut mascarpone, roasted macadamias, fresh mango slices, and dark maple syrup.',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Avocado Toast Deluxe',
    price: '$18.00',
    description: 'Sourdough toast topped with heirloom cherry tomatoes, whipped feta, sliced avocado, microgreens, and a drizzle of hot honey.',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Tropical Chicken Bowl',
    price: '$22.00',
    description: 'Mojo grilled chicken breast, wild black rice, sliced mango, black beans, grilled pineapple chunks, avocado, and lime-cilantro dressing.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Passionfruit Cheesecake',
    price: '$12.00',
    description: 'Velvety vanilla bean cheesecake on a buttery graham cracker crust, topped with a vibrant passionfruit glaze and edible flower petals.',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600',
  },
]

export default function Menu() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Boutique Offerings</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wider">Signature Menu</h2>
        <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {menuItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="bg-[#0b130e] border border-border/40 overflow-hidden group flex flex-col justify-between"
          >
            <div className="relative overflow-hidden h-64 w-full">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10" />
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1 border border-border text-gold font-heading text-lg z-20">
                {item.price}
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="font-heading text-lg tracking-wider text-text group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-xs text-text/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-widest text-gold font-medium border-b border-gold/30 group-hover:border-gold pb-0.5 transition-colors">
                  Order Now
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
