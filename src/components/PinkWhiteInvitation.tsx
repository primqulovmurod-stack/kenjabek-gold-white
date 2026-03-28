'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CreditCard, 
  ChevronDown, 
  Volume2, 
  VolumeX,
  Heart,
  Music,
  MailOpen
} from 'lucide-react';

interface PinkWhiteInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  locationLink?: string;
  imageUrl?: string;
  musicUrl?: string;
}

const pinkText = "bg-clip-text text-transparent bg-gradient-to-b from-[#AD1457] via-[#D81B60] to-[#AD1457]";
const pinkGradient = "bg-gradient-to-br from-[#AD1457] via-[#D81B60] to-[#C2185B]";

export default function PinkWhiteInvitation({
  groomName = "Kenjabek",
  brideName = "Safiya",
  date = "24 - APREL - 2026",
  time = "19:00",
  locationName = "Demir (Asr)",
  locationAddress = "Sho'rchi tumani",
  locationLink = "https://maps.google.com",
  imageUrl = "https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg",
  musicUrl = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-MP3-File.mp3"
}: PinkWhiteInvitationProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Scrollni bloklash (Taklifnoma ochilmaguncha)
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpened]);

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

  const handleOpen = () => {
    setIsOpened(true);
    // Sahifani eng tepaga qaytarish
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      setIsPlaying(true);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: "easeOut" } as any
  };

  const SubtlePattern = () => (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="naqsh-pattern" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
             <path d="M80 10 Q100 10 110 30 T130 50 Q110 70 80 70 Q50 70 30 50 T50 30 Q60 10 80 10" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#AD1457]" />
             <path d="M80 90 Q100 90 110 110 T130 130 Q110 150 80 150 Q50 150 30 130 T50 110 Q60 90 80 90" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[#AD1457]" />
             <circle cx="80" cy="80" r="4" fill="currentColor" className="text-[#AD1457]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#naqsh-pattern)" />
      </svg>
    </div>
  );

  const PinkOrnament = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center justify-center gap-4 py-12 ${className}`}>
        <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent via-[#FFB6C1]/50 to-transparent" />
        <div className="relative group">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-[#db7093] relative z-10">
                <path d="M20 0L24 10L34 10L26 15L29 20L20 16L11 20L14 15L6 10L16 10L20 0Z" fill="currentColor" className="opacity-80" />
            </svg>
        </div>
        <div className="h-[0.5px] w-12 bg-gradient-to-l from-transparent via-[#D81B60]/50 to-transparent" />
    </div>
  );

  const dateParts = date.split(' - ');
  const day = parseInt(dateParts[0]) || 24;
  const monthName = dateParts[1] || "APREL";
  const year = dateParts[2] || "2026";

  const monthMap: { [key: string]: number } = {
    "YANVAR": 0, "FEVRAL": 1, "MART": 2, "APREL": 3, "MAY": 4, "IYUN": 5,
    "IYUL": 6, "AVGUST": 7, "SENTYABR": 8, "OKTYABR": 9, "NOYABR": 10, "DEKABR": 11
  };

  const targetDate = new Date(
    parseInt(year),
    monthMap[monthName.toUpperCase()] || 3,
    day,
    parseInt(time.split(':')[0]) || 19,
    parseInt(time.split(':')[1]) || 0
  ).toISOString();

  const firstDayOfMonth = new Date(
    parseInt(year),
    monthMap[monthName.toUpperCase()] || 3,
    1
  ).getDay();

  const daysInMonth = new Date(
    parseInt(year),
    (monthMap[monthName.toUpperCase()] || 3) + 1,
    0
  ).getDate();

  return (
    <div className="min-h-screen bg-[#FDF2F5] text-gray-900 font-sans overflow-x-hidden selection:bg-[#D81B60]/20 relative flex justify-center">
      <div className="w-full max-w-[500px] bg-white min-h-screen relative shadow-[0_0_100px_rgba(219,112,147,0.1)]">
        <audio ref={audioRef} src={musicUrl} loop />

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/natural-paper.png")` }} />

        {isOpened && (
          <button 
            onClick={toggleMusic}
            className="fixed top-6 right-6 z-50 p-4 bg-white/40 backdrop-blur-xl border border-[#D81B60]/40 rounded-full shadow-[0_10px_30px_rgba(255,182,193,0.3)] text-[#AD1457] hover:scale-110 transition-all active:scale-95"
          >
            {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        )}

        <AnimatePresence>
          {!isOpened && (
            <div className={`absolute inset-0 z-[100] flex flex-col items-center justify-center bg-white p-6 overflow-hidden ${isOpened ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ transition: 'opacity 1s ease-in-out' }}>
              <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D81B60]/30 blur-[120px] rounded-full" />
              </div>

              <div className="text-center space-y-20 relative z-10">
                <div className="relative">
                  <div className="w-40 h-40 border border-[#D81B60] rounded-full flex items-center justify-center mx-auto relative">
                      <div className="w-[112%] h-[112%] border border-[#D81B60]/30 rounded-full absolute" 
                           style={{ borderStyle: 'dashed' }} />
                      <h1 className={`text-5xl font-serif italic ${pinkText}`}>
                          {groomName[0]} <span className="text-3xl align-middle font-serif text-pink-300">&</span> {brideName[0]}
                      </h1>
                      
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 border border-[#D81B60]/30 rounded-full text-[#AD1457]">
                          <Heart size={18} fill="currentColor" />
                      </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <p className="text-[11px] tracking-[0.8em] uppercase font-bold text-[#AD1457]/70">TO'YIMIZGA TAKLIF ETAMIZ</p>
                  <PinkOrnament className="py-2" />
                  <div className="flex flex-col items-center gap-10">
                      <button 
                          onClick={handleOpen}
                          className="group relative flex flex-col items-center gap-6 hover:scale-105 transition-transform"
                      >
                          <div className="relative w-24 h-24 mb-2">
                               <div className="absolute inset-[-4px] border border-[#D81B60]/20 rounded-full animate-pulse" />
                               <div className="relative w-full h-full rounded-full border border-[#D81B60]/40 flex items-center justify-center bg-white shadow-sm group-hover:border-[#AD1457] transition-all duration-500 overflow-hidden">
                                   <MailOpen className="w-10 h-10 text-[#AD1457] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                               </div>
                          </div>

                          <div className="space-y-3 flex flex-col items-center">
                              <span className="text-[13px] font-bold tracking-[0.6em] text-[#AD1457] uppercase">
                                  TAKLIFNOMANI OCHISH
                              </span>
                          </div>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

        <main className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
          <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white">
            <SubtlePattern />
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 text-center px-4 space-y-16"
            >
              <div className="space-y-6">
                  <span className="text-[10px] tracking-[1em] font-bold text-[#AD1457]/60 uppercase block">OILALARIMIZ BILAN BIRGA</span>
                  <div className="w-16 h-px bg-[#AD1457]/20 mx-auto" />
              </div>

              <h1 className="flex flex-col items-center justify-center gap-6">
                <span className={`text-6xl font-serif italic ${pinkText}`}>{groomName}</span>
                <span className="text-serif italic text-2xl text-pink-200/60">va</span>
                <span className={`text-6xl font-serif italic ${pinkText}`}>{brideName}</span>
              </h1>

              <p className="text-xl font-serif italic tracking-wide text-gray-400 font-light leading-relaxed">
                  Sizni hayotimizdagi eng muhim kun - <br /> <span className="text-[#AD1457]/80">nikoh kechamizga</span> lutfan taklif etamiz
              </p>

              <div className="pt-16 uppercase">
                  <div className="inline-block relative px-12 py-8">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#D81B60]/30" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#D81B60]/30" />
                      <p className={`text-3xl font-serif tracking-[0.4em] ${pinkText} font-bold`}>{date}</p>
                  </div>
              </div>
            </motion.div>
          </section>

          <section className="py-32 px-6 bg-[#FFFBFC] relative overflow-hidden">
            <SubtlePattern />
            <div className="max-w-5xl mx-auto flex flex-col items-center">
              <motion.div {...fadeIn} className="text-center mb-24 space-y-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-12 h-px bg-[#D81B60]" />
                      <span className="text-[#AD1457] text-xs tracking-[0.6em] font-bold uppercase">Wedding Day</span>
                      <div className="w-12 h-px bg-[#D81B60]" />
                  </div>
                  <h2 className={`text-5xl font-serif italic tracking-tighter ${pinkText}`}>Sanani Eslab Qoling</h2>
                  <PinkOrnament />
              </motion.div>

              <motion.div 
                {...fadeIn}
                className="w-full max-w-sm bg-white p-8 rounded-3xl border border-[#D81B60]/20 shadow-sm relative"
              >
                <div className="text-center mb-10 pb-6 border-b border-[#D81B60]/10">
                  <h3 className={`text-2xl font-serif italic ${pinkText} font-bold`}>{monthName} {year}</h3>
                </div>
                
                <div className="grid grid-cols-7 gap-2 text-center text-[9px] font-bold text-[#AD1457] opacity-60 mb-8 tracking-[0.1em]">
                  <span>YA</span><span>DU</span><span>SE</span><span>CH</span><span>PA</span><span>JU</span><span>SH</span>
                </div>
                
                <div className="grid grid-cols-7 gap-y-6 text-center items-center">
                  {[...Array(firstDayOfMonth)].map((_, i) => (
                    <div key={`empty-${i}`} className="py-2" />
                  ))}

                  {[...Array(daysInMonth)].map((_, i) => (
                    <div key={i} className="relative py-2">
                      {i + 1 === day ? (
                        <div className="relative inline-flex items-center justify-center w-10 h-10">
                          <motion.div 
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            className={`absolute inset-0 ${pinkGradient} rounded shadow-lg shadow-[#D81B60]/20`}
                          />
                          <span className="text-white font-bold text-base relative z-10">{i + 1}</span>
                          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#AD1457] drop-shadow-md">
                              <Heart size={14} fill="currentColor" />
                          </div>
                        </div>
                      ) : (
                        <span className="opacity-40 text-sm font-medium text-[#AD1457]">{i + 1}</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-32 px-6 bg-white relative overflow-hidden">
            <SubtlePattern />
            <div className="max-w-3xl mx-auto relative z-10">
              <motion.div {...fadeIn} className="text-center mb-20 space-y-4">
                 <span className="text-[#AD1457] text-[10px] tracking-[0.8em] font-bold uppercase">EVENT DETAILS</span>
                 <h2 className={`text-5xl font-serif italic ${pinkText}`}>Nikoh Marosimi</h2>
                 <PinkOrnament />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-12 text-center space-y-12 border border-[#D81B60]/20 shadow-2xl rounded-3xl group"
              >
                  <div className="w-20 h-20 border-2 border-[#D81B60] rounded-full flex items-center justify-center mx-auto text-[#AD1457] relative">
                      <div className="absolute inset-1 border border-[#D81B60]/30 rounded-full animate-ping" />
                      <Heart size={32} />
                  </div>

                  <div className="space-y-6">
                      <div className="space-y-2">
                          <p className={`text-3xl font-serif italic text-gray-800`}>{locationName}</p>
                          <p className="text-[#AD1457] text-[10px] tracking-[0.4em] font-bold uppercase">{locationAddress}</p>
                      </div>
                      
                      <div className="w-16 h-px bg-[#D81B60]/30 mx-auto" />
                      
                      <p className="text-xl text-[#AD1457] font-serif italic tracking-wide">
                          {date}, JUMA <br />
                          <span className="text-[#AD1457] font-bold mt-2 inline-block">VAQT {time}</span>
                      </p>
                  </div>

                  <div className="pt-8">
                      <a 
                          href={locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full h-14 pink-shimmer text-white font-bold tracking-[0.3em] uppercase text-[11px] shadow-sm transition-all flex items-center justify-center gap-4 rounded-full active:scale-95`}
                      >
                          <MapPin size={18} />
                          XARITANI KO'RISH
                      </a>
                  </div>
              </motion.div>
            </div>
          </section>

          <section className="py-32 px-6 bg-white relative overflow-hidden text-center">
            <motion.div {...fadeIn} className="space-y-6">
              <span className="text-[#AD1457] text-[11px] tracking-[0.6em] font-bold uppercase opacity-80">QANCHA VAQT QOLDI?</span>
              <h2 className={`text-4xl font-serif italic ${pinkText}`}>Baxtli Kunimizgacha</h2>
              <PinkOrnament />
            </motion.div>

            <div className="grid grid-cols-2 gap-6 mt-16 max-w-sm mx-auto">
                <CountdownItem label="KUN" date={targetDate} type="days" />
                <CountdownItem label="SOAT" date={targetDate} type="hours" />
                <CountdownItem label="DAQIQA" date={targetDate} type="minutes" />
                <CountdownItem label="SONIYA" date={targetDate} type="seconds" />
            </div>
          </section>

          <footer className="py-32 px-6 bg-[#FFFBFC] text-center relative border-t border-[#D81B60]/10">
            <div className="space-y-12">
              <div className="space-y-4">
                 <p className="text-lg font-serif italic text-gray-400">Minnatdorchilik va sevgi bilan,</p>
                 <div className={`text-5xl font-serif italic ${pinkText}`}>{groomName} va {brideName}</div>
              </div>
              
              <PinkOrnament />
              
              <div className="pt-20 border-t border-gray-100 max-w-xs mx-auto space-y-8">
                <div className="space-y-2">
                  <p className="text-[10px] tracking-[0.8em] font-bold text-[#AD1457] uppercase">VIRTUAL TAKLIFNOMA</p>
                  <div className="h-px w-20 bg-[#D81B60]/30 mx-auto" />
                </div>

                <div className="space-y-4">
                  <p className="text-[9px] text-gray-500 uppercase tracking-[0.4em]">Buyurtma qilish uchun:</p>
                  <a href="tel:+998915930833" className={`text-xl font-medium ${pinkText}`}>+998 91 593 08 33</a>
                </div>

                <div>
                  <a 
                    href="https://t.me/taklifnomaai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-block text-[10px] font-bold tracking-[0.3em] text-white pink-shimmer px-8 py-4 rounded-full shadow-lg active:scale-95`}
                  >
                    TELEGRAM BUYURTMA
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@300;400;700&display=swap');
          
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
          
          .font-sans {
            font-family: 'Montserrat', sans-serif;
          }

          @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
          }

          .pink-shimmer {
              background: linear-gradient(90deg, #AD1457 25%, #D81B60 50%, #FFC0CB 75%);
              background-size: 200% auto;
              animation: shimmer 5s infinite linear;
          }
        `}</style>
      </div>
    </div>
  );
}

const CountdownItem = ({ label, date, type }: { label: string, date: string, type: string }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const target = new Date(date).getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;
            
            let val = 0;
            if (type === 'days') val = Math.floor(distance / (1000 * 60 * 60 * 24));
            else if (type === 'hours') val = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            else if (type === 'minutes') val = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            else if (type === 'seconds') val = Math.floor((distance % (1000 * 60)) / 1000);
            
            setValue(val >= 0 ? val : 0);
        }, 1000);
        return () => clearInterval(interval);
    }, [date, type]);

    return (
        <div className="relative p-6 bg-white border border-[#D81B60]/20 rounded-2xl flex flex-col items-center">
            <div className={`text-4xl font-serif font-bold mb-2 ${pinkText}`}>
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">{label}</div>
        </div>
    );
};
