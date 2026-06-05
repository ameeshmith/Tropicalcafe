import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Clock, Mail, User, CheckCircle2 } from 'lucide-react'

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address'
    }
    if (!formData.date) tempErrors.date = 'Date is required'
    if (!formData.time) tempErrors.time = 'Time is required'
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      setTimeout(() => {
        setIsSubmitted(true)
      }, 600)
    }
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
    })
    setIsSubmitted(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <motion.div 
          className="lg:col-span-5 space-y-6 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Table Booking</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-wider">Book A Table</h2>
          <div className="w-12 h-[2px] bg-gold" />
          
          <p className="text-sm text-text/60 leading-relaxed font-light">
            Secure your spot in our botanical haven. We accept reservations for brunch, afternoon tea, dinner, and private gatherings.
          </p>

          <div className="space-y-4 pt-4 border-t border-border/40 text-sm">
            <div>
              <p className="font-heading tracking-wider text-gold uppercase text-xs">Reservations Policy</p>
              <p className="text-xs text-text/50 mt-1">We hold tables for a maximum of 15 minutes. For parties larger than 8 guests, please reach out to us directly via phone or email.</p>
            </div>
            <div>
              <p className="font-heading tracking-wider text-gold uppercase text-xs">Opening Slots</p>
              <p className="text-xs text-text/50 mt-1">Daily from 8:00 AM – 10:00 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="premium-card-gradient border border-border p-8 md:p-12 relative min-h-[460px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-6 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-text/60">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full bg-background/50 border ${errors.name ? 'border-red-500' : 'border-border/80'} focus:border-gold py-3 pl-10 pr-4 text-sm focus:outline-none transition-colors duration-300`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-text/60">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                        <input
                          type="email"
                          placeholder="yourname@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full bg-background/50 border ${errors.email ? 'border-red-500' : 'border-border/80'} focus:border-gold py-3 pl-10 pr-4 text-sm focus:outline-none transition-colors duration-300`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-text/60">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className={`w-full bg-background/50 border ${errors.date ? 'border-red-500' : 'border-border/80'} focus:border-gold py-3 pl-10 pr-4 text-sm focus:outline-none transition-colors duration-300 [color-scheme:dark]`}
                        />
                      </div>
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-wider text-text/60">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className={`w-full bg-background/50 border ${errors.time ? 'border-red-500' : 'border-border/80'} focus:border-gold py-3 pl-10 pr-4 text-sm focus:outline-none transition-colors duration-300 [color-scheme:dark]`}
                        />
                      </div>
                      {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs uppercase tracking-wider text-text/60">Number of Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full bg-background/50 border border-border/80 focus:border-gold py-3 pl-10 pr-4 text-sm focus:outline-none transition-colors duration-300 appearance-none [color-scheme:dark]"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                          <option value="6">6 Guests</option>
                          <option value="7">7 Guests</option>
                          <option value="8">8+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-dark text-background py-4 text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 mt-4 shadow-lg hover:shadow-gold/20"
                  >
                    Confirm Table Reservation
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center space-y-6 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-gold" />
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl tracking-widest text-text">Reservation Confirmed</h3>
                    <p className="text-xs text-text/60 max-w-sm leading-relaxed">
                      Thank you, {formData.name}. A confirmation email has been sent to {formData.email} with your booking details. We look forward to welcoming you!
                    </p>
                  </div>
                  <div className="bg-background/80 border border-border px-6 py-4 flex flex-col items-center space-y-2 text-xs">
                    <p><span className="text-gold uppercase tracking-wider font-heading">Date:</span> {formData.date}</p>
                    <p><span className="text-gold uppercase tracking-wider font-heading">Time:</span> {formData.time}</p>
                    <p><span className="text-gold uppercase tracking-wider font-heading">Guests:</span> {formData.guests} Persons</p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 border border-border hover:border-gold text-text hover:text-gold text-xs uppercase tracking-widest transition-colors duration-300"
                  >
                    Book Another Table
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </div>
  )
}
