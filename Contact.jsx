import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

const contacts = [
  {
    icon: MapPin,
    title: 'Location',
    details: '148 Lafayette St, New York, NY 10013',
    link: 'https://maps.google.com/?q=148+Lafayette+St,+New+York,+NY+10013',
  },
  {
    icon: Phone,
    title: 'Phone & Bookings',
    details: '+1 (212) 555-0198',
    link: 'tel:+12125550198',
  },
  {
    icon: Mail,
    title: 'Inquiries',
    details: 'hello@tropicalcafe.com',
    link: 'mailto:hello@tropicalcafe.com',
  },
]

const hours = [
  { days: 'Monday – Thursday', time: '8:00 AM – 9:00 PM' },
  { days: 'Friday – Saturday', time: '8:00 AM – 11:00 PM' },
  { days: 'Sunday', time: '9:00 AM – 9:00 PM' },
]

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Connect With Us</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wider">Contact & Hours</h2>
        <div className="w-12 h-[2px] bg-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <motion.div 
          className="lg:col-span-6 flex flex-col justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {contacts.map((item, idx) => {
            const Icon = item.icon
            return (
              <a
                href={item.link}
                key={idx}
                target={item.title === 'Location' ? '_blank' : '_self'}
                rel="noreferrer"
                className="premium-card-gradient border border-border/60 p-6 flex items-center space-x-6 hover:border-gold hover:translate-x-1 transition-all duration-300 group text-left"
              >
                <div className="w-12 h-12 bg-surface border border-border/80 flex justify-center items-center group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500 flex-shrink-0">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-xs tracking-wider text-gold uppercase">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text/80 font-light group-hover:text-text transition-colors">
                    {item.details}
                  </p>
                </div>
              </a>
            )
          })}
        </motion.div>

        <motion.div 
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="premium-card-gradient border border-border p-8 md:p-10 h-full flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold" />
                <h4 className="font-heading text-lg tracking-widest text-text">Opening Hours</h4>
              </div>
              <div className="w-full h-[1px] bg-border/60" />
              <div className="space-y-4">
                {hours.map((slot, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm font-light">
                    <span className="text-text/75">{slot.days}</span>
                    <span className="text-gold font-medium">{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs text-text/50 uppercase tracking-widest font-light">Follow our lifestyle</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 border border-border/60 hover:border-gold rounded-full flex justify-center items-center text-text/60 hover:text-gold transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 border border-border/60 hover:border-gold rounded-full flex justify-center items-center text-text/60 hover:text-gold transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 border border-border/60 hover:border-gold rounded-full flex justify-center items-center text-text/60 hover:text-gold transition-all duration-300">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
