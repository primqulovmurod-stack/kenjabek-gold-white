'use client'

import React from 'react'

const TargoCTA = () => {
  return (
    <section className="bg-black py-16 px-8 md:px-16 font-rubik overflow-hidden">
      <div className="relative w-full max-w-7xl mx-auto py-20 px-10 md:px-20 bg-targo-red clip-corner flex flex-col md:flex-row items-center justify-between gap-12 group">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            Ready to <br /> Scale Global?
          </h2>
          <p className="text-white/80 max-w-md text-lg">
            Join 2,500+ enterprises that trust Targo for their critical supply chain operations and global distribution.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-targo-red px-10 py-5 text-sm font-black uppercase clip-corner transition-all hover:scale-105 active:scale-95 shadow-xl">
            Start Exporting
          </button>
          <button className="bg-transparent text-white border-2 border-white/30 px-10 py-5 text-sm font-black uppercase clip-corner transition-all hover:bg-white/10">
            Learn More
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
      </div>
    </section>
  )
}

export default TargoCTA
