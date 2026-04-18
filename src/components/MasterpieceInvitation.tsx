'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Volume2, VolumeX, MapPin, Calendar, Clock, Gift, Heart, ChevronDown } from 'lucide-react';

interface MasterpieceInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  locationUrl?: string;
  musicUrl?: string;
  cardNumber?: string;
  cardName?: string;
}

const RevealText = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

export default function MasterpieceInvitation({
  groomName = "Murod",
  brideName = "Odina",
  date = "24 - APREL - 2026",
  time = "19:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Jizzax Shahar, Demir ko'chasi",
  locationUrl = "https://maps.google.com",
  musicUrl = "/assets/die_with_a_smile.mp3",
  cardNumber = "8600 1234 5678 9012",
  cardName = "Murod Primqulov",
}: MasterpieceInvitationProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  useEffect(() => {
    if (isStarted) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isStarted]);

  const handleStart = () => {
    setIsStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      setIsPlaying(true);
    }
  };

  const flowersY = useTransform(smoothProgress, [0, 0.4], [0, 100]);
  const flowersScale = useTransform(smoothProgress, [0, 0.4], [0.8, 1.2]);
  const flowersOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative bg-white text-[#1a1a1a] selection:bg-[#D4AF37]/20 overflow-x-hidden min-h-screen"
      style={{ fontFamily: 'var(--font-cormorant), serif' }}
    >
      {musicUrl && <audio ref={audioRef} src={musicUrl} loop />}

      {/* CUSTOM BACKGROUND - SILK TEXTURE */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
         <motion.div 
          style={{ y: useTransform(smoothProgress, [0, 1], [0, -200]) }}
          className="absolute inset-x-0 top-0 h-[120%] bg-cover bg-center"
          style={{ backgroundImage: 'url("/assets/master-bg.png")' }}
         />
         <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80" />
      </div>

      {/* CINEMATIC INTRO */}
      <AnimatePresence>
        {!isStarted && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(40px)",
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          >
            <div className="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center" 
                 style={{ backgroundImage: 'url("/assets/master-bg.png")' }} />
            
            <div className="relative text-center space-y-24 max-w-sm mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="space-y-6"
              >
                <div className="w-16 h-[0.5px] bg-[#D4AF37] mx-auto mb-12" />
                <p className="text-[10px] tracking-[1em] text-[#D4AF37] uppercase font-light font-sans">The Masterpiece</p>
                <h1 className="text-4xl md:text-5xl font-serif italic text-zinc-900 leading-tight">
                  {groomName} <span className="text-[#D4AF37]">&</span> {brideName}
                </h1>
              </motion.div>

              <div className="relative flex justify-center items-center">
                 <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleStart}
                  className="relative z-20 outline-none"
                 >
                    <img src="/assets/gold-wax-seal.png" className="w-28 h-28 md:w-36 md:h-36 drop-shadow-2xl" alt="Seal" />
                 </motion.button>
                 
                 <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] border border-[#D4AF37]/20 rounded-full border-dashed"
                 />
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-[10px] tracking-[0.5em] text-zinc-400 uppercase font-sans font-bold"
              >
                Muhmi Bosing
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MASTERPIECE CONTENT */}
      <main className={`relative z-10 transition-opacity duration-1000 ${isStarted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        
        {/* ARTISTIC NAV */}
        <nav className="fixed top-8 left-8 right-8 z-[50] flex justify-between items-center mix-blend-difference">
           <span className="text-white text-[10px] tracking-[0.6em] font-bold uppercase font-sans">M & O</span>
           <button onClick={() => setIsPlaying(!isPlaying)} className="text-white text-[10px] tracking-[0.4em] font-bold uppercase flex items-center gap-4 font-sans border-none bg-transparent cursor-pointer">
             {isPlaying ? "Music On" : "Music Off"}
             <div className="w-10 h-px bg-white/30" />
           </button>
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col items-center justify-center relative py-40 px-6">
           <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none mt-[-50px]">
              <motion.img 
                style={{ scale: flowersScale, opacity: flowersOpacity }}
                src="/assets/master-flowers.png" 
                className="w-[80vw] max-w-4xl h-auto" 
                alt="Artistic Flowers"
              />
           </div>

           <div className="text-center space-y-20 relative z-10 transition-transform duration-1000">
              <div className="space-y-4">
                <p className="text-[10px] tracking-[1em] text-[#D4AF37] uppercase font-black font-sans">Bismillahir Rohmanir Rohim</p>
                <div className="h-px w-20 bg-[#D4AF37]/30 mx-auto" />
              </div>

              <div className="space-y-4">
                <RevealText>
                   <h1 className="text-7xl md:text-9xl font-serif lowercase italic text-[#1a1a1a]">
                      {groomName}
                   </h1>
                </RevealText>
                <div className="py-2">
                   <span className="text-3xl md:text-4xl text-[#D4AF37] italic font-serif">&</span>
                </div>
                <RevealText delay={0.2}>
                   <h1 className="text-7xl md:text-9xl font-serif lowercase italic text-[#1a1a1a]">
                      {brideName}
                   </h1>
                </RevealText>
              </div>

              <div className="pt-20 space-y-4 flex flex-col items-center">
                <p className="text-[10px] tracking-[0.8em] text-zinc-400 uppercase font-black font-sans">Davom Etish</p>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                   <ChevronDown size={20} className="text-zinc-300" />
                </motion.div>
              </div>
           </div>
        </section>

        {/* POETIC SECTION */}
        <section className="py-60 px-12 text-center">
           <div className="max-w-2xl mx-auto space-y-16">
              <Heart className="mx-auto text-[#D4AF37]/30" size={40} strokeWidth={1} />
              <h2 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] italic leading-tight">
                 "İkki qalbning bir butunlikka intilishi, baxtli hayotning ibtidosidir."
              </h2>
              <p className="text-xl text-zinc-500 italic font-light max-w-md mx-auto">
                 Azizlarim, bizning eng quvonchli kunimizda sizlarni ham ko'rishdan mamnun bo'lamiz.
              </p>
           </div>
        </section>

        {/* INFO SECTION */}
        <section className="py-40 px-6">
           <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-2">
                    <p className="text-[#D4AF37] text-[10px] tracking-[0.5em] font-black uppercase font-sans">Sana</p>
                    <h3 className="text-5xl md:text-7xl font-serif">{date}</h3>
                    <p className="text-2xl text-zinc-400 font-serif italic">{time}</p>
                 </div>
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <p className="text-[#D4AF37] text-[10px] tracking-[0.5em] font-black uppercase font-sans">Manzil</p>
                       <h4 className="text-3xl font-serif">{locationName}</h4>
                       <p className="text-zinc-500 italic max-w-xs">{locationAddress}</p>
                    </div>
                    <a 
                      href={locationUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-10 py-5 border border-[#D4AF37]/20 text-[#D4AF37] rounded-full text-[10px] font-black uppercase tracking-widest font-sans hover:bg-[#D4AF37] hover:text-white transition-all"
                    >
                      Kartada ko'rish <MapPin size={14} />
                    </a>
                 </div>
              </div>
              <div className="relative">
                 <motion.div 
                   whileInView={{ rotate: 5 }}
                   className="aspect-[3/4] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl relative z-10"
                 >
                    <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000" className="w-full h-full object-cover" alt="Invitation" />
                 </motion.div>
                 <img src="/assets/master-flowers.png" className="absolute -top-10 -right-10 w-40 h-40 opacity-20 -z-0" alt="" />
              </div>
           </div>
        </section>

        {/* TOYONA */}
        <section className="py-60 px-6 text-center">
           <div className="max-w-xl mx-auto space-y-20 bg-[#FAF9F6] p-16 md:p-24 rounded-[4rem] border border-[#D4AF37]/10">
              <Gift className="mx-auto text-[#D4AF37]/60" size={32} />
              <div className="space-y-12">
                 <div className="space-y-2">
                    <p className="text-[9px] text-zinc-400 font-black uppercase tracking-[0.5em] font-sans">Karta raqami</p>
                    <p 
                      onClick={() => { navigator.clipboard.writeText(cardNumber); alert('Nusxalandi!'); }}
                      className="text-3xl md:text-4xl font-serif text-[#1a1a1a] tracking-widest cursor-pointer hover:scale-105 transition-transform"
                    >
                      {cardNumber}
                    </p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-[9px] text-zinc-400 font-black uppercase tracking-[0.5em] font-sans">Egasi</p>
                    <p className="text-xl font-serif italic text-[#D4AF37]">{cardName}</p>
                 </div>
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="py-60 px-6 text-center bg-white border-t border-zinc-50 relative overflow-hidden">
           <div className="space-y-16 relative z-10">
              <div className="space-y-6">
                 <p className="text-[10px] tracking-[2em] text-[#D4AF37] uppercase font-black font-sans ml-[2em]">Waiting</p>
                 <h1 className="text-7xl md:text-9xl font-serif italic">{groomName} & {brideName}</h1>
              </div>
              <div className="pt-20 space-y-8 flex flex-col items-center">
                 <div className="w-px h-20 bg-zinc-100" />
                 <p className="text-zinc-300 text-[8px] font-black uppercase tracking-[1.5em] font-sans ml-[1.5em]">Taklifnoma.Asia</p>
              </div>
           </div>
           <img src="/assets/master-flowers.png" className="absolute bottom-0 left-0 w-80 h-80 opacity-5 grayscale pointer-events-none" alt="" />
        </footer>

      </main>

      <style jsx global>{`
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
