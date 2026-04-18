'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, ArrowUpRight } from 'lucide-react'

const TargoHero = () => {
  const { scrollY } = useScroll()
  const videoY = useTransform(scrollY, [0, 500], [0, 150])
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.2])

  return (
    <div className="relative w-full h-screen min-h-[750px] bg-black overflow-hidden font-rubik text-white select-none">
      {/* Video Background with Parallax */}
      <motion.div 
        style={{ y: videoY, scale: videoScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover opacity-70 pointer-events-none"
        >
          <source
            src="https://cdn.pixabay.com/video/2023/07/21/172591-847665215_large.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Infinite Marquee (Background Motion) */}
      <div className="absolute top-[40%] left-0 w-full overflow-hidden pointer-events-none z-1 opacity-[0.03]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap text-[20vw] font-black uppercase italic"
        >
          <span>BMW M-POWER • TARGO SPEED • GLOBAL LOGISTICS •&nbsp;</span>
          <span>BMW M-POWER • TARGO SPEED • GLOBAL LOGISTICS •&nbsp;</span>
        </motion.div>
      </div>

      {/* Decorative Text (Outline) */}
      <div className="absolute top-[20%] right-[-5%] text-[15vw] font-black uppercase text-outline pointer-events-none select-none">
        Logistics
      </div>

      {/* Header Container */}
      <header className="relative z-20 flex items-center justify-between px-8 md:px-16 py-8 md:py-10">
        {/* Logo */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4 group cursor-pointer focus:outline-none"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white transform transition-all duration-300 group-hover:scale-110"
            suppressHydrationWarning
          >
            <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="currentColor" fillOpacity="0.1" suppressHydrationWarning />
            <path d="M20 8L32 20L20 32L8 20L20 8Z" stroke="currentColor" strokeWidth="2" suppressHydrationWarning />
            <path d="M20 14L26 20L20 26L14 20L20 14Z" fill="currentColor" suppressHydrationWarning />
            <rect x="18" y="0" width="4" height="40" fill="currentColor" fillOpacity="0.05" suppressHydrationWarning />
            <rect x="0" y="18" width="40" height="4" fill="currentColor" fillOpacity="0.05" suppressHydrationWarning />
          </svg>
          <span className="text-2xl font-bold tracking-[-0.04em] uppercase">targo</span>
        </motion.div>

        {/* Navigation */}
        <motion.nav 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:flex items-center gap-14 font-medium text-[13px] tracking-wide uppercase"
        >
          {['Home', 'About', 'Contact Us'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="relative group overflow-hidden py-1">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
              <span className="absolute top-full left-0 block text-targo-red transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
            </a>
          ))}
        </motion.nav>

        {/* Header CTA */}
        <motion.button 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-targo-red text-white px-6 py-2.5 text-[11px] font-bold uppercase transition-all hover:brightness-110 active:scale-95 clip-corner shadow-[0_4px_20px_rgba(238,63,44,0.3)]"
        >
          Contact Us
        </motion.button>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 px-8 md:px-16 pt-20 md:pt-32">
        <div className="max-w-[800px]">
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="targo-headline text-[48px] leading-[0.85] md:text-[84px] mb-10"
          >
            Swift and <br />
            Simple <span className="text-targo-red italic">Transport</span>
          </motion.h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="group relative bg-targo-red text-white px-12 py-5 text-[13px] font-bold uppercase transition-all hover:pr-16 hover:shadow-[0_0_30px_rgba(238,63,44,0.4)] active:scale-95 clip-corner tracking-[0.08em] overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <ArrowUpRight 
                className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" 
                size={18} 
              />
            </button>
          </motion.div>
        </div>
      </main>

      {/* Bottom Consultation Widget */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20"
      >
        <motion.div 
          whileHover={{ y: -5 }}
          className="liquid-glass p-8 md:p-10 max-w-[380px] rounded-sm relative group overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Subtle Shine Gradient Surface */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          
          {/* Animated Diagonal Shine Effect */}
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[200%] pointer-events-none" />
          
          <h3 className="text-2xl font-bold mb-6 leading-[1.1] tracking-tight">
            Book a Free<br />Consultation
          </h3>
          
          <button className="w-full bg-white text-black px-8 py-4 text-[12px] font-bold uppercase flex items-center justify-center gap-3 transition-all hover:bg-white/90 active:scale-[0.98] clip-corner shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
            <Phone size={18} fill="currentColor" strokeWidth={3} suppressHydrationWarning />
            Book a Call
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TargoHero
