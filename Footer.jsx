import React, { useState } from 'react'
import { Compass, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <footer className="bg-[#050D09] border-t border-border/60 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-6">
            <a href="#home" className="flex items-center space-x-2">
              <Compass className="w-8 h-8 text-gold" />
              <span className="font-heading text-2xl tracking-widest text-text">
                TROPICAL <span className="font-light text-tropical-light">CAFE</span>
              </span>
            </a>
            <p className="text-text/60 max-w-sm text-sm leading-relaxed">
              A premium boutique tropical retreat offering handcrafted dishes, artisan coffee, and exceptional experiences in a sophisticated green haven.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 border border-border hover:border-gold rounded-full flex justify-center items-center text-text/60 hover:text-gold transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-border hover:border-gold rounded-full flex justify-center items-center text-text/60 hover:text-gold transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-border hover:border-gold rounded-full flex justify-center items-center text-text/60 hover:text-gold transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg tracking-widest text-gold">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-text/60 hover:text-text hover:translate-x-1 inline-block transition-all duration-300">Home</a>
              </li>
              <li>
                <a href="#menu" className="text-sm text-text/60 hover:text-text hover:translate-x-1 inline-block transition-all duration-300">Our Menu</a>
              </li>
              <li>
                <a href="#story" className="text-sm text-text/60 hover:text-text hover:translate-x-1 inline-block transition-all duration-300">Our Story</a>
              </li>
              <li>
                <a href="#reservations" className="text-sm text-text/60 hover:text-text hover:translate-x-1 inline-block transition-all duration-300">Reservations</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-text/60 hover:text-text hover:translate-x-1 inline-block transition-all duration-300">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg tracking-widest text-gold">Newsletter</h4>
            <p className="text-sm text-text/60 leading-relaxed">
              Subscribe to receive exclusive recipes, announcements, and VIP event invitations.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex border-b border-border hover:border-gold transition-colors duration-300 py-1.5">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent border-none text-text text-sm focus:outline-none w-full pr-10 placeholder:text-text/30"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-gold hover:text-text transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-tropical-light font-medium tracking-wide">
                Welcome to the family. Check your inbox soon!
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text/40 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Tropical Cafe. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
