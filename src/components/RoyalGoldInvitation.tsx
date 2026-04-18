'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, Calendar, Clock, Gift, Heart, Volume2, VolumeX, ArrowDown } from 'lucide-react';

interface RoyalGoldInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  locationUrl?: string;
  imageUrl?: string;
  imageUrl2?: string;
  musicUrl?: string;
  cardNumber?: string;
  cardName?: string;
}

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative min-h-screen py-32 px-6 flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default function RoyalGoldInvitation({
  groomName = "Murod",
  brideName = "Odina",
  date = "24 - APREL - 2026",
  time = "19:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Jizzax Shahar, Demir ko'chasi",
  locationUrl = "https://maps.google.com",
  imageUrl = "https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2070&auto=format&fit=crop",
  imageUrl2 = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  musicUrl = "/assets/die_with_a_smile.mp3",
  cardNumber = "8600 1234 5678 9012",
  cardName = "Murod Primqulov",
}: RoyalGoldInvitationProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div ref={containerRef} className="relative bg-[#050505] text-[#D4AF37] selection:bg-[#D4AF37]/20 selection:text-white">
      {musicUrl && <audio ref={audioRef} src={musicUrl} loop />}

      {/* FIXED BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: 'url("/assets/royal-gold-bg.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* LOCK SCREEN - ENVELOPE */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="lock-screen"
            exit={{ 
              y: '-100%',
              transition: { duration: 1.5, ease: [0.83, 0, 0.17, 1] }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808] px-4 overflow-hidden"
          >
             <div className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
             
             <div className="relative z-10 text-center space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="space-y-4"
                >
                  <p className="tracking-[1em] text-[10px] uppercase text-[#D4AF37]/60">Wedding Invitation</p>
                  <h1 className="text-4xl md:text-5xl font-serif italic">{groomName} & {brideName}</h1>
                </motion.div>

                {/* 3D Envelope */}
                <div className="relative group cursor-pointer perspective-1000" onClick={handleOpen}>
                  <motion.div 
                    initial={{ rotateX: 20, rotateY: -10 }}
                    animate={{ rotateX: 0, rotateY: 0 }}
                    whileHover={{ rotateY: 5, rotateX: 5 }}
                    className="w-[320px] h-[220px] md:w-[450px] md:h-[300px] bg-[#111] border border-[#D4AF37]/20 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative rounded-sm"
                  >
                    {/* Flaps */}
                    <div className="absolute inset-0 overflow-hidden">
                       <svg className="w-full h-full" viewBox="0 0 450 300">
                         <path d="M0 0 L225 150 L450 0" fill="#151515" />
                         <path d="M0 300 L180 150" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" fill="none" />
                         <path d="M450 300 L270 150" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" fill="none" />
                       </svg>
                    </div>

                    {/* WAX SEAL (STAMP) */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="relative">
                        <img 
                          src="/assets/gold-wax-seal.png" 
                          alt="Seal" 
                          className="w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                        />
                        <motion.div 
                          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 bg-[#D4AF37]/10 rounded-full blur-xl -z-1"
                        />
                      </div>
                    </motion.div>

                    <div className="absolute bottom-8 w-full text-center">
                       <span className="text-[8px] tracking-[0.5em] text-[#D4AF37]/40 uppercase animate-pulse">Basib ko'ring</span>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="space-y-4"
                >
                   <div className="w-px h-16 bg-[#D4AF37]/20 mx-auto" />
                   <p className="text-[10px] tracking-widest text-zinc-500 uppercase">Premium Digital Experience</p>
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT PAGE */}
      <main className={`relative z-10 transition-all duration-1000 ${isOpened ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
        
        {/* TOP NAV BAR */}
        <div className="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center mix-blend-difference">
           <span className="text-[10px] tracking-[0.6em] uppercase font-bold text-white/50">M & O</span>
           <button onClick={() => setIsPlaying(!isPlaying)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white">
             {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
           </button>
        </div>

        {/* HERO SECTION */}
        <Section className="!justify-end !pb-20">
           <div className="absolute inset-0 z-[-1] overflow-hidden">
             <motion.img 
              style={{ scale: 1.2, y: useTransform(scrollYProgress, [0, 0.5], [0, 100]) }}
              src={imageUrl} 
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Hero"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/50" />
           </div>

           <div className="text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <Heart className="mx-auto text-[#D4AF37]" size={40} strokeWidth={1} />
                <p className="text-[10px] tracking-[1em] text-[#D4AF37] uppercase">Nikoh Kechasi</p>
              </motion.div>

              <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] text-white">
                {groomName} <br />
                <span className="text-[#D4AF37] text-4xl md:text-5xl italic">&</span> <br />
                {brideName}
              </h1>

              <div className="space-y-6 pt-10">
                <p className="text-zinc-500 tracking-[0.3em] uppercase text-xs">Taklif Etamiz</p>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                   <ArrowDown className="mx-auto text-zinc-700" size={24} />
                </motion.div>
              </div>
           </div>
        </Section>

        {/* INVITATION TEXT */}
        <Section className="bg-[#080808]">
           <div className="max-w-2xl mx-auto text-center space-y-12 px-6">
              <div className="w-12 h-px bg-[#D4AF37]/50 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] italic">Aziz Mehmonlarimiz!</h2>
              <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed italic">
                "Hayotimizning ushbu unutilmas kunida, quvonchimizni baham ko'rish uchun sizni ham tabarruk mehmonlarimiz safida kutib qolamiz."
              </p>
              <div className="w-12 h-px bg-[#D4AF37]/50 mx-auto" />
           </div>
        </Section>

        {/* DATE & TIME SECTION */}
        <Section>
           <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-center">
              <div className="space-y-4 border-b md:border-b-0 md:border-r border-[#D4AF37]/20 pb-12 md:pb-0">
                 <Calendar className="mx-auto mb-6 opacity-30" size={48} />
                 <h4 className="text-[10px] tracking-[0.4em] uppercase text-zinc-500">Kuning</h4>
                 <p className="text-4xl font-serif">{date}</p>
              </div>

              <div className="py-12 md:py-0">
                 <div className="w-32 h-32 md:w-48 md:h-48 border border-[#D4AF37]/30 rounded-full mx-auto flex items-center justify-center relative">
                    <div className="text-center">
                       <p className="text-5xl font-serif text-white">{time}</p>
                       <span className="text-[10px] tracking-widest text-[#D4AF37]">VAQTI</span>
                    </div>
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 border border-[#D4AF37]/10 rounded-full animate-ping" />
                 </div>
              </div>

              <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#D4AF37]/20 pt-12 md:pt-0">
                 <Clock className="mx-auto mb-6 opacity-30" size={48} />
                 <h4 className="text-[10px] tracking-[0.4em] uppercase text-zinc-500">Dastur</h4>
                 <p className="text-4xl font-serif italic text-white">To'y Kechasi</p>
              </div>
           </div>
        </Section>

        {/* PHOTO SECTION */}
        <Section className="!p-0 h-[150vh]">
           <div className="sticky top-0 h-screen w-full overflow-hidden">
              <motion.div 
                style={{ scale: useTransform(scrollYProgress, [0.4, 0.6], [1.2, 1]) }}
                className="absolute inset-0"
              >
                <img src={imageUrl2} alt="Gallery" className="w-full h-full object-cover grayscale brightness-50" />
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center space-y-8 px-6">
                    <h2 className="text-6xl md:text-8xl font-serif text-white">Baxtli Onlar</h2>
                    <p className="text-[#D4AF37] italic text-xl tracking-[0.2em]">Sizning tashrifingiz baxtimizni to'ldiradi</p>
                 </div>
              </div>
           </div>
        </Section>

        {/* LOCATION SECTION */}
        <Section className="bg-white text-black !justify-start">
           <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 py-20">
              <div className="space-y-12">
                 <div className="space-y-2">
                    <p className="text-[10px] tracking-[0.5em] font-bold text-[#D4AF37] uppercase">Manzilimiz</p>
                    <h3 className="text-6xl font-serif leading-tight">{locationName}</h3>
                 </div>
                 <p className="text-xl text-zinc-400 font-light leading-relaxed">{locationAddress}</p>
                 
                 <a 
                   href={locationUrl} target="_blank"
                   className="inline-flex items-center gap-6 px-12 py-6 bg-black text-[#D4AF37] rounded-full text-xs font-bold tracking-[0.3em] uppercase hover:scale-105 transition-transform"
                 >
                   <span>Xaritada ko'rish</span>
                   <MapPin size={18} />
                 </a>
              </div>

              <div className="h-[500px] bg-zinc-100 rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-[#D4AF37]/10">
                 <img 
                  src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Location"
                 />
                 <div className="absolute inset-0 bg-[#D4AF37]/10 mix-blend-color" />
              </div>
           </div>
        </Section>

        {/* GIFT SECTION */}
        <Section className="bg-[#050505]">
           <div className="max-w-2xl mx-auto w-full space-y-20">
              <div className="text-center space-y-6">
                 <Gift className="mx-auto text-[#D4AF37]" size={40} />
                 <h2 className="text-4xl md:text-5xl font-serif text-white">To'yona</h2>
                 <p className="text-zinc-500 italic">Sizning duolaringiz va tashrifingiz biz uchun eng go'zal sovg'adir. Biroq, ko'ngildan chiqsa:</p>
              </div>

              <div className="relative p-12 bg-zinc-900/50 rounded-[3rem] border border-[#D4AF37]/20 shadow-2xl backdrop-blur-xl group overflow-hidden">
                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
                 <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
                 
                 <div className="relative z-10 space-y-10">
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] tracking-[0.5em] uppercase text-zinc-500 font-bold">Bank Card Details</span>
                       <div className="w-12 h-1 bg-[#D4AF37]/40 rounded-full" />
                    </div>
                    
                    <div className="space-y-2">
                       <p className="text-[9px] text-zinc-600 uppercase tracking-widest">Card Number (click to copy)</p>
                       <p 
                        onClick={() => {
                           navigator.clipboard.writeText(cardNumber);
                           alert("Karta raqami nusxalandi!");
                        }}
                        className="text-3xl md:text-4xl font-mono text-white tracking-widest cursor-pointer hover:text-[#D4AF37] transition-colors"
                       >
                         {cardNumber}
                       </p>
                    </div>

                    <div className="pt-6 border-t border-zinc-800">
                       <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">Account Holder</p>
                       <p className="text-2xl font-serif text-[#D4AF37] italic">{cardName}</p>
                    </div>
                 </div>
              </div>
           </div>
        </Section>

        {/* FOOTER */}
        <Section className="!min-h-[70vh] border-t border-zinc-900">
           <div className="text-center space-y-16">
              <div className="space-y-4">
                <p className="text-[10px] tracking-[0.8em] text-[#D4AF37] uppercase">See You Soon</p>
                <h1 className="text-6xl md:text-8xl font-serif text-white">{groomName} & {brideName}</h1>
              </div>

              <div className="pt-20 space-y-8">
                 <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-[1em]">Taklifnoma.Asia</p>
                 <a 
                   href="https://taklifnoma.asia" target="_blank"
                   className="inline-block px-10 py-4 border border-[#D4AF37]/20 text-[#D4AF37] rounded-full text-[10px] uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all font-bold"
                 >
                   Create Your Own
                 </a>
              </div>
           </div>
        </Section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
