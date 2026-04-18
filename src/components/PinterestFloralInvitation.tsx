'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Calendar, Clock, Gift, Heart, Volume2, VolumeX } from 'lucide-react';

interface PinterestFloralInvitationProps {
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

const FadeInView = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function PinterestFloralInvitation({
  groomName = "Murod",
  brideName = "Odina",
  date = "24 - APREL - 2026",
  time = "19:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Jizzax Shahar, Demir ko'chasi",
  locationUrl = "https://maps.google.com",
  imageUrl = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  imageUrl2 = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  musicUrl = "/assets/die_with_a_smile.mp3",
  cardNumber = "8600 1234 5678 9012",
  cardName = "Murod Primqulov",
}: PinterestFloralInvitationProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.2], [0, -2]);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      setIsPlaying(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-[#FDFCF9] overflow-x-hidden selection:bg-[#E2D1B3]/30"
      style={{ fontFamily: 'var(--font-cormorant)' }}
    >
      {musicUrl && <audio ref={audioRef} src={musicUrl} loop />}

      {/* Intro / Envelope Section */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="intro"
            exit={{ 
              opacity: 0, 
              scale: 1.1, 
              filter: "blur(20px)",
              transition: { duration: 1.2, ease: "easeInOut" } 
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF9F6] px-4"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/handmade-paper.png")' }} />
            
            <div className="relative text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4"
              >
                <p className="text-[#C4A484] uppercase tracking-[0.5em] text-[10px] font-sans font-bold">Together With Their Families</p>
                <h1 className="text-4xl md:text-5xl text-[#5D4037] italic font-serif">
                   Invitation
                </h1>
              </motion.div>

              {/* Envelope / Stamp */}
              <div className="relative group cursor-pointer" onClick={handleOpen}>
                <div className="w-[320px] h-[450px] md:w-[400px] md:h-[560px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-xl relative overflow-hidden flex flex-col items-center justify-center p-8 border border-[#F0EBE3]">
                   {/* Floral Frame Image (Generated) */}
                   <img 
                    src="/assets/pinterest-frame.png" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt="Pinterest Style Frame"
                   />
                   
                   {/* Wax Seal on top */}
                   <motion.div 
                    className="relative z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                   >
                     <img src="/assets/gold-wax-seal.png" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-xl" alt="Seal" />
                   </motion.div>

                   <div className="relative z-10 mt-8 text-center space-y-4">
                      <p className="text-[#8D6E63] text-[8px] uppercase tracking-[0.4em] animate-pulse font-sans font-bold">Bosing</p>
                   </div>
                </div>

                <motion.div 
                  animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-[#E2D1B3] rounded-3xl blur-3xl -z-10"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`relative transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        
        {/* Floating Controls */}
        <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
          <button onClick={() => setIsPlaying(!isPlaying)} className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-[#E2D1B3] flex items-center justify-center text-[#8D6E63] shadow-lg">
            {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>

        {/* HERO - Pinterest Card Recreation */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
           <motion.div 
            style={{ scale: cardScale, rotate: cardRotate }}
            className="w-[350px] h-[500px] md:w-[600px] md:h-[840px] bg-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] rounded-[2rem] relative overflow-hidden flex flex-col items-center p-12 md:p-20 border border-[#F0EBE3]"
           >
              {/* Floral Border */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                 <img src="/assets/pinterest-frame.png" className="w-full h-full object-cover" alt="" />
              </div>

              <div className="relative z-10 flex flex-col items-center h-full text-center">
                 <div className="space-y-6 flex-1 flex flex-col items-center justify-center">
                    <p className="text-[#C4A484] uppercase tracking-[0.5em] text-[10px] md:text-xs font-sans font-bold">Together With Their Families</p>
                    <div className="w-px h-12 bg-[#E2D1B3]" />
                    
                    <div className="space-y-4">
                       <h1 className="text-6xl md:text-8xl text-[#5D4037] font-serif leading-none italic">
                          {groomName}
                       </h1>
                       <span className="text-2xl md:text-3xl text-[#C4A484] italic">&</span>
                       <h1 className="text-6xl md:text-8xl text-[#5D4037] font-serif leading-none italic">
                          {brideName}
                       </h1>
                    </div>

                    <div className="pt-12 space-y-2">
                       <p className="text-[#8D6E63] text-[9px] md:text-[11px] tracking-[0.3em] font-sans font-bold uppercase transition-spacing duration-1000">Invites you to their</p>
                       <p className="text-[#8D6E63] text-[9px] md:text-[11px] tracking-[0.3em] font-sans font-bold uppercase">Wedding Celebration</p>
                    </div>

                    <div className="pt-16">
                       <div className="relative px-12 py-6 border-y border-[#E2D1B3]">
                          <div className="flex items-center gap-12">
                             <div className="text-left">
                                <p className="text-[10px] md:text-xs font-bold font-sans text-[#C4A484] tracking-widest uppercase">Sat, 25th</p>
                                <p className="text-[10px] md:text-xs font-bold font-sans text-[#C4A484] tracking-widest uppercase">Oct, 2026</p>
                             </div>
                             <div className="h-10 w-[1.5px] bg-[#E2D1B3]" />
                             <div className="text-center">
                                <span className="text-5xl md:text-6xl font-serif text-[#5D4037] leading-none">19</span>
                             </div>
                             <div className="h-10 w-[1.5px] bg-[#E2D1B3]" />
                             <div className="text-right">
                                <p className="text-[10px] md:text-xs font-bold font-sans text-[#C4A484] tracking-widest uppercase">PM</p>
                                <p className="text-[10px] md:text-xs font-bold font-sans text-[#C4A484] tracking-widest uppercase">GMT</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="relative z-10 pt-10 text-[9px] md:text-[11px] text-[#C4A484] tracking-widest leading-relaxed uppercase font-sans font-bold max-w-[280px]">
                    {locationName} <br /> {locationAddress}
                 </div>
              </div>
           </motion.div>
        </section>

        {/* DETAILS SCROLLABLE AREA */}
        <section className="py-32 px-6 space-y-32 max-w-lg mx-auto overflow-hidden">
           
           <FadeInView>
              <div className="text-center space-y-8">
                 <Heart className="mx-auto text-[#E2D1B3]" size={32} />
                 <h2 className="text-4xl font-serif text-[#5D4037] italic">Aziz Mehmonlarimiz!</h2>
                 <p className="text-lg text-[#8D6E63] leading-relaxed italic">
                    "Ushbu baxtli va unutilmas kunimizda sizlarni mehmon qilishdan bag'oyat mamnun bo'lamiz."
                 </p>
              </div>
           </FadeInView>

           <FadeInView delay={0.2}>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-[#E2D1B3]/20 border border-[#F0EBE3] space-y-10 text-center">
                 <MapPin className="mx-auto text-[#E2D1B3]" size={32} />
                 <div className="space-y-4">
                   <h3 className="text-2xl font-serif text-[#5D4037]">{locationName}</h3>
                   <p className="text-sm text-[#8D6E63] leading-relaxed">{locationAddress}</p>
                 </div>
                 <a 
                   href={locationUrl} target="_blank"
                   className="inline-block px-10 py-4 bg-[#5D4037] text-white rounded-full text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-[#3E2723] transition-colors"
                 >
                   Kartaga o'tish
                 </a>
              </div>
           </FadeInView>

           <FadeInView>
              <div className="bg-[#FAF9F6] p-10 rounded-[2.5rem] border border-[#E2D1B3] space-y-10 text-center">
                 <Gift className="mx-auto text-[#E2D1B3]" size={32} />
                 <div className="space-y-4">
                    <h3 className="text-2xl font-serif text-[#5D4037]">To'yona</h3>
                    <p className="text-xs text-[#8D6E63] italic">Baxtimizni baham ko'ring</p>
                 </div>
                 <div className="space-y-4 bg-white p-6 rounded-2xl border border-[#F0EBE3]">
                    <p className="text-xl font-mono text-[#5D4037] tracking-widest">{cardNumber}</p>
                    <p className="text-sm italic text-[#8D6E63]">{cardName}</p>
                 </div>
              </div>
           </FadeInView>
        </section>

        {/* FOOTER */}
        <footer className="py-40 px-6 text-center bg-white border-t border-[#F0EBE3]">
           <div className="space-y-12">
              <h1 className="text-6xl md:text-8xl font-serif text-[#5D4037] italic">{groomName} & {brideName}</h1>
              <div className="pt-20 space-y-8">
                 <p className="text-[#C4A484] text-[9px] font-bold uppercase tracking-[1em]">Taklifnoma.Asia</p>
              </div>
           </div>
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
