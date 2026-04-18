'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TargoAbout = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" ref={ref} className="bg-[#050505] text-white py-24 md:py-40 px-8 md:px-16 font-rubik relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute left-[-2%] bottom-[10%] text-[20vw] font-black text-white/[0.02] uppercase pointer-events-none select-none italic">
        Since 1998
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10"
      >
        {/* Text Content */}
        <div className="space-y-10">
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 border border-targo-red/30 bg-targo-red/5 text-targo-red text-[10px] font-bold uppercase tracking-[0.2em] clip-corner">
            Our Legacy
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="targo-headline text-5xl md:text-7xl leading-[0.9]">
            Redefining <br /> 
            <span className="text-white/20 text-outline">Global Logistics</span> <br /> 
            with <span className="text-targo-red">Precision</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-white/50 leading-relaxed max-w-lg text-xl italic font-light">
            "At Targo, we believe that logistics is more than just moving items from A to B. It's about connectivity, speed, and safety. We've built a global network that ensures your cargo arrives on time, every time."
          </motion.p>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-12 pt-10 border-t border-white/5">
            <div className="space-y-3">
              <div className="text-5xl font-black text-white">120<span className="text-targo-red">+</span></div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-bold">Countries Covered</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-black text-white">15<span className="text-targo-red">M+</span></div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-bold">Safe Deliveries</div>
            </div>
          </motion.div>
        </div>

        {/* Visual Element */}
        <motion.div 
          variants={itemVariants}
          className="relative group"
        >
          <div className="absolute inset-0 bg-targo-red/10 blur-[120px] rounded-full group-hover:bg-targo-red/20 transition-all duration-1000" />
          <div className="relative aspect-[4/5] bg-black/40 backdrop-blur-xl border border-white/5 clip-corner overflow-hidden">
             <motion.img 
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 1.5 }}
               src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000" 
               alt="Targo BMW Fleet" 
               className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-6 liquid-glass p-8 clip-corner border border-white/10 hidden md:block"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-targo-red mb-2">Global Standard</div>
            <div className="text-3xl font-black">ISO 9001</div>
            <div className="text-[10px] text-white/30 font-bold uppercase mt-1">Certified 2025</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default TargoAbout
