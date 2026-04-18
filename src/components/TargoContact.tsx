'use client'

import React from 'react'
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react'

const TargoContact = () => {
  return (
    <section id="contact" className="bg-[#050505] text-white py-24 md:py-32 px-8 md:px-16 font-rubik border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="targo-headline text-4xl md:text-5xl">Get in Touch</h2>
            <p className="text-white/50 text-xl leading-relaxed max-w-md">
              Our 24/7 global support desk is ready to assist with any logistical challenge, no matter the volume.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 flex items-center justify-center clip-corner border border-white/10 group-hover:bg-targo-red/10 transition-all">
                <MapPin className="text-targo-red" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Headquarters</div>
                <div className="text-lg font-medium italic">12 Innovation Way, Singapure</div>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 flex items-center justify-center clip-corner border border-white/10 group-hover:bg-targo-red/10 transition-all">
                <Mail className="text-targo-red" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Direct Email</div>
                <div className="text-lg font-medium italic">partners@targo.global</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white/5 flex items-center justify-center clip-corner border border-white/10 group-hover:bg-targo-red/10 transition-all">
                <Phone className="text-targo-red" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Phone Line</div>
                <div className="text-lg font-medium italic">+1 (800) TARGO-OPS</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all clip-corner">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Simple Glass Form */}
        <div className="liquid-glass p-8 md:p-12 relative overflow-hidden group">
          <div className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-targo-red transition-all italic" placeholder="Enter name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Company</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-targo-red transition-all italic" placeholder="Company.inc" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-targo-red transition-all italic" placeholder="email@address.com" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-targo-red transition-all italic resize-none" placeholder="Requirements..." />
            </div>

            <button className="w-full bg-targo-red text-white py-5 font-black uppercase clip-corner transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-targo-red/20">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-white/20">
        <div>© 2026 TARGO GLOBAL LOGISTICS. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-targo-red">Privacy</a>
          <a href="#" className="hover:text-targo-red">Terms</a>
          <a href="#" className="hover:text-targo-red">Cookie Policy</a>
        </div>
      </footer>
    </section>
  )
}

export default TargoContact
