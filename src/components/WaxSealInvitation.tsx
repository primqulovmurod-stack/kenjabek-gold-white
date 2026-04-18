'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Volume2, VolumeX, MapPin, Calendar, Clock, Gift, Heart, Music, ChevronDown } from 'lucide-react';

interface WaxSealInvitationProps {
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
}

const FadeInWhenVisible = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export default function WaxSealInvitation({
  groomName = "Murod",
  brideName = "Odina",
  date = "2026-04-24",
  time = "19:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Jizzax Shahar",
  locationUrl = "https://maps.app.goo.gl/uXpD1p5m9K2wD1Uu7",
  imageUrl = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
  imageUrl2 = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  imageUrl3 = "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
  musicUrl = "/assets/die_with_a_smile.mp3",
  cardNumber = "8600 1234 5678 9012",
  cardName = "Murod Primqulov",
  showGift = true,
  description = "Bizning hayotimizdagi eng muhim va quvonchli kunda sizlarni ko'rishdan bag'oyat mamnun bo'lamiz.",
  isPreview = false
}: WaxSealInvitationProps) {
  const [isOpened, setIsOpened] = useState(isPreview);
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
    if (isOpened && !isPreview) {
      document.body.style.overflow = 'auto';
    } else if (!isPreview) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpened, isPreview]);

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
      className="relative min-h-screen bg-[#FDFBF7] overflow-x-hidden"
      style={{ fontFamily: 'var(--font-cormorant)' }}
    >
      {musicUrl && <audio ref={audioRef} src={musicUrl} loop />}

      {/* Intro / Envelope Screen */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="envelope-screen"
            exit={{ 
              opacity: 0, 
              scale: 1.2,
              filter: "blur(20px)",
              transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] } 
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F4F1EA] px-4"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/handmade-paper.png")' }} />
            
            <div className="relative text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4"
              >
                <p className="text-zinc-400 uppercase tracking-[0.4em] text-xs font-sans font-bold">Wedding Invitation</p>
                <h1 className="text-4xl md:text-5xl text-zinc-800 font-serif lowercase italic">
                  {groomName} & {brideName}
                </h1>
              </motion.div>

              {/* Envelope Design */}
              <div className="relative group cursor-pointer" onClick={handleOpen}>
                <motion.div 
                  className="w-[300px] h-[200px] md:w-[400px] md:h-[260px] bg-[#FFF] shadow-2xl rounded-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]"
                  initial={{ rotate: -2 }}
                  animate={{ rotate: 0 }}
                >
                  {/* Envelope Flap Lines */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-100" />
                    <svg className="w-full h-full" viewBox="0 0 400 260">
                      <path d="M0 0 L200 130 L400 0" fill="none" stroke="#F8F8F8" strokeWidth="2" />
                      <path d="M0 260 L150 130" fill="none" stroke="#F8F8F8" strokeWidth="1" />
                      <path d="M400 260 L250 130" fill="none" stroke="#F8F8F8" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Stamp / Wax Seal */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img 
                      src="/assets/gold-wax-seal.png" 
                      alt="Wax Seal" 
                      className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
                    />
                  </motion.div>

                  <div className="absolute bottom-6 text-zinc-300 font-sans text-[10px] tracking-[0.3em] uppercase">
                    Click to Open
                  </div>
                </motion.div>

                {/* Pulsing effect around stamp */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-200/20 rounded-full blur-2xl -z-10"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-zinc-500 flex flex-col items-center gap-2"
              >
                 <span className="text-xl">❦</span>
                 <p className="text-sm italic font-serif">Sizni intizorlik bilan kutamiz</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`relative z-10 transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        
        {/* Floating Music Toggle */}
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-[50] w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-zinc-200 flex items-center justify-center text-zinc-600 shadow-lg"
        >
          {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </motion.button>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20 bg-white">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/floral-paper.png")' }} />
          
          <div className="text-center space-y-12 max-w-4xl relative">
            <FadeInWhenVisible delay={0.2}>
              <div className="space-y-6">
                <span className="text-zinc-400 uppercase tracking-[0.5em] text-xs font-sans">Bismillahir Rohmanir Rohim</span>
                <div className="flex items-center justify-center gap-8">
                  <div className="h-[1px] w-12 bg-zinc-200" />
                  <Heart className="text-zinc-300" size={20} />
                  <div className="h-[1px] w-12 bg-zinc-200" />
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <h1 className="text-7xl md:text-9xl text-zinc-900 leading-none">
                {groomName} <br/> 
                <span className="text-4xl md:text-5xl text-zinc-300 italic font-serif lowercase">&</span> <br/>
                {brideName}
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.6}>
              <div className="space-y-4 pt-12">
                <p className="text-lg md:text-xl text-zinc-500 max-w-lg mx-auto leading-relaxed">
                  Hayot yo'limizni birgalikda davom ettirishga ahd qildik. Ushbu quvonchli lahzalarda sizning tashrifingiz biz uchun katta sharafdir.
                </p>
              </div>
            </FadeInWhenVisible>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-300"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-sans">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Details Section (Date & Location) */}
        <section className="py-32 px-6 bg-[#FAF9F6] border-y border-zinc-100">
           <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
              <FadeInWhenVisible>
                <div className="space-y-8 text-center md:text-left bg-white p-12 rounded-[2rem] shadow-sm border border-zinc-100">
                   <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 mb-6 mx-auto md:mx-0">
                     <Calendar size={24} />
                   </div>
                   <h2 className="text-4xl text-zinc-800">Sana va Vaqt</h2>
                   <div className="space-y-2">
                     <p className="text-5xl text-zinc-900 border-b border-zinc-100 pb-4">{date.split('-').reverse().join('.')}</p>
                     <p className="text-2xl text-zinc-400 pt-2">{time}</p>
                   </div>
                   <p className="text-zinc-500 font-sans text-sm tracking-wide lowercase">InshaAllah, baxtli kunimizda ko'rishamiz</p>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible delay={0.2}>
                <div className="space-y-8 text-center md:text-left bg-white p-12 rounded-[2rem] shadow-sm border border-zinc-100 h-full flex flex-col justify-between">
                   <div className="space-y-8">
                     <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 mb-6 mx-auto md:mx-0">
                       <MapPin size={24} />
                     </div>
                     <h2 className="text-4xl text-zinc-800">Manzil</h2>
                     <div className="space-y-4">
                        <p className="text-3xl text-zinc-900 leading-tight">{locationName}</p>
                        <p className="text-lg text-zinc-500">{locationAddress}</p>
                     </div>
                   </div>
                   
                   <a 
                    href={locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full text-xs font-sans font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors w-full mt-8"
                   >
                     <span>Kartadan ko'rish</span>
                     <MapPin size={16} />
                   </a>
                </div>
              </FadeInWhenVisible>
           </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 px-6 bg-white overflow-hidden">
           <div className="max-w-6xl mx-auto space-y-20">
              <FadeInWhenVisible>
                <div className="text-center space-y-4">
                  <h2 className="text-5xl text-zinc-900">Baxtli Onlar</h2>
                  <div className="w-16 h-[1px] bg-zinc-200 mx-auto" />
                </div>
              </FadeInWhenVisible>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <motion.div 
                   whileHover={{ y: -10 }}
                   className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 shadow-xl"
                 >
                    <img src={imageUrl} alt="Wedding 1" className="w-full h-full object-cover" />
                 </motion.div>
                 <motion.div 
                   whileHover={{ y: -10 }}
                   className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 shadow-xl md:mt-12"
                 >
                    <img src={imageUrl2} alt="Wedding 2" className="w-full h-full object-cover" />
                 </motion.div>
                 <motion.div 
                   whileHover={{ y: -10 }}
                   className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100 shadow-xl md:mt-24"
                 >
                    <img src={imageUrl3} alt="Wedding 3" className="w-full h-full object-cover" />
                 </motion.div>
              </div>
           </div>
        </section>

        {/* Gift Section */}
        {showGift && (
          <section className="py-32 px-6 bg-[#F9F9F9]">
             <FadeInWhenVisible>
               <div className="max-w-xl mx-auto text-center space-y-12 bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-zinc-100">
                  <Gift className="mx-auto text-zinc-300" size={40} />
                  <div className="space-y-4">
                    <h2 className="text-4xl text-zinc-900">To'yona</h2>
                    <p className="text-zinc-500 italic">Sizning tashrifingiz biz uchun eng katta sovg'adir, lekin bizni ushbu yo'l bilan quvontirmoqchi bo'lsangiz:</p>
                  </div>
                  
                  <div className="space-y-6 pt-6 text-left">
                     <div className="p-8 bg-zinc-50 rounded-2xl space-y-2 group hover:bg-zinc-100 transition-colors cursor-pointer" 
                          onClick={() => {
                            navigator.clipboard.writeText(cardNumber);
                            alert("Karta raqami nusxalandi!");
                          }}
                     >
                        <p className="text-[10px] font-sans font-black uppercase tracking-[0.2em] text-zinc-400">Karta raqami (nusxa olish)</p>
                        <p className="text-2xl font-mono text-zinc-800 tracking-wider ">{cardNumber}</p>
                        <p className="text-zinc-500 text-sm font-serif">{cardName}</p>
                     </div>
                  </div>
               </div>
             </FadeInWhenVisible>
          </section>
        )}

        {/* Closing */}
        <footer className="py-40 px-6 text-center bg-white relative">
           <FadeInWhenVisible>
             <div className="space-y-12">
                <div className="space-y-6">
                  <p className="text-zinc-400 text-sm tracking-[0.3em] uppercase font-sans">See you there</p>
                  <h1 className="text-6xl md:text-8xl text-zinc-900 border-t border-b border-zinc-100 py-12 inline-block px-12">
                    {groomName} & {brideName}
                  </h1>
                </div>
                
                <div className="pt-20 space-y-8">
                  <p className="text-zinc-300 text-[10px] uppercase tracking-[0.5em] font-sans">Taklifnoma.Asia</p>
                  <a 
                    href="https://taklifnoma.asia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 border border-zinc-200 text-zinc-400 rounded-full text-[10px] uppercase tracking-widest hover:bg-zinc-50 transition-all font-sans"
                  >
                    O'z taklifnomangizni yarating
                  </a>
                </div>
             </div>
           </FadeInWhenVisible>
        </footer>

      </main>

      {/* Global CSS for the paper texture if needed, but using inline now */}
      <style jsx global>{`
        body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
        }
        body::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
}
