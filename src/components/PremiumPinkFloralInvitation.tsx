'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Volume2, VolumeX, MapPin, Calendar, Clock, Gift, Heart, Music } from 'lucide-react';

interface PremiumPinkFloralInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  locationUrl?: string;
  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  musicUrl?: string;
  cardNumber?: string;
  cardName?: string;
  showGift?: boolean;
  description?: string;
  isPreview?: boolean;
  isMuted?: boolean;
}

export default function PremiumPinkFloralInvitation({
  groomName = "Xurshid",
  brideName = "Mohinur",
  date = "2026-04-24",
  time = "19:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Surxondaryo viloyati, Sho'rchi tumani",
  locationUrl = "",
  imageUrl = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  imageUrl2 = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  imageUrl3 = "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  musicUrl = "/assets/die_with_a_smile.mp3",
  cardNumber = "",
  cardName = "",
  showGift = true,
  description = "Sizni kutib qolamiz!",
  isPreview = false,
  isMuted = false
}: PremiumPinkFloralInvitationProps) {
  const [isUnlocked, setIsUnlocked] = useState(isPreview);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (isPreview) {
      document.body.style.overflow = 'auto';
      return;
    }
    
    if (!isUnlocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isUnlocked, isPreview]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[100svh] bg-[#FFF9F9] selection:bg-pink-100 overflow-x-hidden font-sans text-slate-900"
    >
      {/* Fixed Background Image with Parallax */}
      <div 
        className="fixed inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/premium-pink-bg.png")' }}
      />
      
      {/* Background Ornaments */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 opacity-60"
        >
          <img src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-contain mix-blend-multiply" alt="" />
        </motion.div>
        <motion.div 
          animate={{ 
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 opacity-60"
        >
          <img src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=500&auto=format&fit=crop" className="w-full h-full object-contain mix-blend-multiply rotate-180" alt="" />
        </motion.div>
      </div>

      {musicUrl && <audio ref={audioRef} src={musicUrl} loop muted={isMuted} />}

      {/* Lock Screen / Intro */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div
            key="lock-screen"
            exit={{ 
              opacity: 0, 
              scale: 1.1,
              filter: "blur(20px)",
              transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] } 
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          >
            <div 
              className="absolute inset-0 opacity-50 bg-cover bg-center"
              style={{ backgroundImage: 'url("/assets/premium-pink-bg.png")' }}
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10 text-center space-y-12 px-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, delay: 0.8 }}
                  className="w-24 h-24 mx-auto border-2 border-pink-200 rounded-full flex items-center justify-center bg-white/80 backdrop-blur shadow-xl"
                >
                   <span className="text-4xl text-pink-400 font-serif italic">B</span>
                </motion.div>
                <div className="space-y-2">
                  <h2 className="text-pink-300 tracking-[0.3em] uppercase text-xs font-bold font-sans">Wedding Invitation</h2>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="h-[1px] w-8 bg-pink-100" />
                    <span className="text-pink-200 text-xl font-serif">❦</span>
                    <span className="h-[1px] w-8 bg-pink-100" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h1 
                  className="text-5xl md:text-7xl text-slate-800 font-serif leading-tight"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  {groomName} <span className="text-pink-300">&amp;</span> {brideName}
                </h1>
                <p className="text-slate-400 font-light tracking-widest text-sm uppercase">Sizni baxtli kunimizga chorlaymiz</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsUnlocked(true);
                  if (audioRef.current) {
                    audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
                    setIsPlaying(true);
                  }
                }}
                className="px-12 py-5 bg-gradient-to-r from-pink-50 to-white border border-pink-100 text-pink-500 rounded-full shadow-lg shadow-pink-100/50 font-bold uppercase tracking-[0.2em] text-xs hover:shadow-2xl transition-all duration-500"
              >
                Ochish
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`relative z-10 w-full transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        
        {/* Floating Music Button */}
        {musicUrl && (
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={toggleMusic}
            className="fixed top-6 right-6 z-[150] w-12 h-12 flex items-center justify-center bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-xl text-pink-500"
          >
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            {isPlaying && (
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-pink-200"
              />
            )}
          </motion.button>
        )}

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
          <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="relative z-20 space-y-12 max-w-2xl mx-auto"
          >
             <div className="space-y-4">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-20 h-1 bg-pink-200 mx-auto rounded-full" 
                />
                <h3 className="text-pink-400 tracking-[0.5em] uppercase text-xs font-black">Bismillahir Rohmanir Rohim</h3>
             </div>

             <div className="space-y-6">
                <h1 
                  className="text-6xl md:text-8xl text-slate-800 font-serif leading-[1.1]"
                  style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="block"
                  >
                    {groomName}
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="block text-4xl md:text-5xl text-pink-200 py-4 font-light italic"
                  >
                    &amp;
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="block"
                  >
                    {brideName}
                  </motion.span>
                </h1>
                <p className="text-slate-500 font-light tracking-widest text-sm md:text-base uppercase max-w-sm mx-auto">
                  Bizning eng hayajonli va quvonchli kunimizda sizni ham oramizda ko&apos;rishdan mamnun bo&apos;lamiz
                </p>
             </div>

             <div className="flex flex-col items-center space-y-2">
                <span className="text-pink-300 font-serif italic text-3xl">{date.split('-').reverse().join('.')}</span>
                <span className="h-12 w-[1px] bg-pink-100" />
                <span className="text-slate-400 uppercase tracking-widest text-xs font-bold">{time}</span>
             </div>
          </motion.div>

          {/* Floating Leaves */}
          <motion.img 
            initial={{ opacity: 0, x: -100, rotate: -30 }}
            whileInView={{ opacity: 0.1, x: -50, rotate: 0 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=500&auto=format&fit=crop" 
            className="absolute top-1/4 -left-20 w-64 h-64 mix-blend-multiply pointer-events-none"
            alt=""
          />
        </section>

        {/* Circular Image Section (Link 9 inspiration) */}
        <section className="py-20 px-6">
          <div className="max-w-md mx-auto relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
               viewport={{ once: true }}
               className="relative aspect-square rounded-full border-[12px] border-white shadow-2xl overflow-hidden z-10"
             >
                <img 
                  src={imageUrl || "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop"} 
                  alt="Wedding Couple"
                  className="w-full h-full object-cover"
                />
             </motion.div>
             
             {/* Floral Frame Overlay */}
             <motion.div
               initial={{ scale: 1.2, opacity: 0, rotate: -10 }}
               whileInView={{ scale: 1, opacity: 0.8, rotate: 0 }}
               transition={{ duration: 2, delay: 0.5 }}
               className="absolute -inset-10 z-20 pointer-events-none"
             >
                <img 
                  src="https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?q=80&w=500&auto=format&fit=crop" 
                  className="w-full h-full object-contain mix-blend-screen opacity-40 scale-110"
                  alt=""
                />
             </motion.div>

             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white/80 backdrop-blur px-8 py-3 rounded-full border border-pink-100 shadow-xl">
                <p className="text-pink-400 font-serif italic text-xl">Love is Forever</p>
             </div>
          </div>
        </section>

        {/* Invitation Text Section */}
        <section className="py-24 px-8 bg-white/30 backdrop-blur-sm relative border-y border-pink-50">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <Heart className="mx-auto text-pink-200 fill-pink-50" size={40} strokeWidth={1} />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-slate-800" style={{ fontFamily: 'var(--font-cormorant)' }}>
                Aziz Mehmonlarimiz!
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed italic">
                {description || "Hayotimizning yangi fasli — nikoh to'yimizda sizlarni mehmon qilishdan bag'oyat mamnunmiz. Baxtimizni baham ko'ring!"}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 }}
                 className="space-y-4 p-8 bg-white border border-pink-50 rounded-3xl shadow-xl shadow-pink-100/20"
               >
                  <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto text-pink-400">
                    <Calendar size={24} />
                  </div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Sana</h4>
                  <p className="text-2xl font-serif text-pink-400">{date.split('-').reverse().join('.')}</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 }}
                 className="space-y-4 p-8 bg-white border border-pink-50 rounded-3xl shadow-xl shadow-pink-100/20"
               >
                  <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mx-auto text-pink-400">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold text-slate-800 uppercase tracking-widest text-sm">Vaqti</h4>
                  <p className="text-2xl font-serif text-pink-400">{time}</p>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery / More Photos */}
        <section className="py-20 px-4 md:px-12 space-y-12">
            <div className="text-center space-y-2">
               <h2 className="text-3xl font-serif text-slate-800" style={{ fontFamily: 'var(--font-cormorant)' }}>Baxtli Onlarimiz</h2>
               <div className="w-12 h-[2px] bg-pink-200 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
               >
                 <img src={imageUrl2} alt="Gallery 1" className="w-full h-full object-cover" />
               </motion.div>
               <motion.div 
                 whileHover={{ scale: 1.02 }}
                 className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white md:mt-12"
               >
                 <img src={imageUrl3} alt="Gallery 2" className="w-full h-full object-cover" />
               </motion.div>
            </div>
        </section>

        {/* Location Section */}
        <section className="py-20 px-8 bg-[#FFF2F2] relative overflow-hidden">
           <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
              <div className="space-y-4">
                 <MapPin className="mx-auto text-pink-400" size={48} strokeWidth={1} />
                 <h2 className="text-4xl font-serif text-slate-800" style={{ fontFamily: 'var(--font-cormorant)' }}>Manzilimiz</h2>
              </div>
              
              <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-slate-800">{locationName}</h3>
                 <p className="text-slate-500 font-light max-w-md mx-auto">{locationAddress}</p>
              </div>

              {locationUrl && (
                <a 
                  href={locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-12 py-5 bg-slate-900 text-white rounded-full shadow-2xl hover:bg-slate-800 transition-all font-bold tracking-widest text-xs uppercase"
                >
                  <MapPin size={18} />
                  <span>Xaritadan ko&apos;rish</span>
                </a>
              )}
           </div>

           {/* Decor */}
           <div className="absolute -bottom-20 -left-20 opacity-20 rotate-45 pointer-events-none">
              <img src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=500&auto=format&fit=crop" className="w-96 h-96" alt="" />
           </div>
        </section>

        {/* Gift Section */}
        {showGift && (cardNumber || cardName) && (
          <section className="py-24 px-8 bg-white relative">
            <div className="max-w-xl mx-auto text-center space-y-12 bg-pink-50/30 p-12 rounded-[3.5rem] border border-pink-100 shadow-inner">
               <div className="space-y-4">
                 <Gift className="mx-auto text-pink-300" size={40} />
                 <h2 className="text-3xl font-serif text-slate-800" style={{ fontFamily: 'var(--font-cormorant)' }}>To&apos;yona</h2>
                 <p className="text-slate-500 text-sm font-light leading-relaxed">
                   Baxtli kunimizni biz bilan baham ko&apos;rishning o&apos;zi katta sovg&apos;a. Agar qo&apos;shimcha sovg&apos;a qilish istagingiz bo&apos;lsa:
                 </p>
               </div>

               <div className="bg-white p-8 rounded-3xl shadow-xl shadow-pink-100/50 border border-pink-50 space-y-4">
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-pink-300">Karta raqami</p>
                  <p className="text-2xl font-mono text-slate-800 tracking-wider">
                    {cardNumber.replace(/(\d{4})/g, '$1 ').trim()}
                  </p>
                  <p className="text-lg font-serif italic text-slate-400">{cardName}</p>
               </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="py-32 px-8 text-center bg-white border-t border-pink-50">
           <div className="max-w-2xl mx-auto space-y-12">
              <div className="space-y-4">
                 <p className="text-pink-300 font-serif italic text-2xl uppercase tracking-[0.2em]">Tashrifingizdan mamnunmiz</p>
                 <div className="w-1 h-12 bg-pink-100 mx-auto" />
              </div>

              <h1 
                className="text-6xl md:text-8xl text-slate-800 font-serif"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {groomName} <span className="text-pink-100">&amp;</span> {brideName}
              </h1>

              <div className="pt-20 space-y-6">
                <p className="text-[10px] md:text-xs font-bold text-slate-300 uppercase tracking-[0.5em]">
                  Created by Taklifnoma.Asia
                </p>
                <a 
                  href="https://taklifnoma.asia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-10 py-4 border border-pink-100 text-pink-400 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-pink-50 transition-all"
                >
                  O&apos;z taklifnomangizni yarating
                </a>
              </div>
           </div>
        </footer>

      </main>
    </div>
  );
}
