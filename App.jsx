import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Menu from './components/Menu'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background text-text min-h-screen font-body selection:bg-gold selection:text-background relative">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tropical/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[20%] left-[-100px] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-100px] w-[500px] h-[500px] bg-tropical/5 rounded-full blur-[130px] pointer-events-none z-0" />
      
      {/* Core components */}
      <Navbar />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>
        
        <section id="experience" className="py-24 border-b border-border/20">
          <Experience />
        </section>
        
        <section id="menu" className="py-24 border-b border-border/20 bg-surface/30">
          <Menu />
        </section>
        
        <section id="story" className="py-24 border-b border-border/20">
          <Story />
        </section>
        
        <section id="gallery" className="py-24 border-b border-border/20 bg-surface/30">
          <Gallery />
        </section>
        
        <section id="reservations" className="py-24 border-b border-border/20">
          <Reservation />
        </section>
        
        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
