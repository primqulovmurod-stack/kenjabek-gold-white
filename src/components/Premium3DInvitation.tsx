'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, MotionValue } from 'framer-motion';
import { Volume2, VolumeX, MapPin, Calendar, Clock, Gift, Navigation, Heart } from 'lucide-react';
import { InvitationContent } from '@/lib/types';

interface Premium3DInvitationProps extends InvitationContent {
  isPreview?: boolean;
  isMuted?: boolean;
}

/**
 * Main wrapper component to handle hydration safely.
 * Rendering the content only after mounting prevents 'ref hydration' errors.
 */
export default function Premium3DInvitation(props: Premium3DInvitationProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return <Premium3DInvitationContent {...props} />;
}

function Premium3DInvitationContent({
  groomName = "Murod",
  brideName = "Odina",
  date = "2026-04-24",
  time = "19:00",
  locationName = "Toshkent",
  locationAddress = "",
  locationUrl = "",
  imageUrl = "",
  imageUrl2 = "",
  imageUrl3 = "",
  musicUrl = "",
  cardNumber = "",
  cardName = "",
  showGift = false,
  description = "Sizni kutib qolamiz!",
  isPreview = false,
  isMuted = false
}: Premium3DInvitationProps) {
  const [isUnlocked, setIsUnlocked] = useState(isPreview);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // useScroll is now safe because this component only renders on client
  const { scrollYProgress } = useScroll({
    target: isPreview ? containerRef : undefined,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
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
    if (!isPreview) {
      document.body.style.overflow = isUnlocked ? 'auto' : 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isUnlocked, isPreview]);

  const formattedDate = date && date.includes('-') 
    ? date.split('-').reverse().join('.') 
    : date;

  return (
    <div 
      ref={containerRef} 
      className={`relative bg-[#020202] text-white selection:bg-amber-400 selection:text-black font-sans overflow-x-hidden ${isPreview ? 'h-full no-scrollbar' : 'min-h-[500vh]'}`}
    >
      {musicUrl && <audio ref={audioRef} src={musicUrl} loop muted={isMuted} />}

      {/* PERSPECTIVE WRAPPER */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ perspective: "1000px" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]" />
        <BackgroundBeams />
      </div>

      <AnimatePresence>
        {!isUnlocked && (
          <LockScreen 
            groomName={groomName} 
            brideName={brideName} 
            onUnlock={() => {
              setIsUnlocked(true);
              if (audioRef.current) {
                audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
                setIsPlaying(true);
              }
            }} 
          />
        )}
      </AnimatePresence>

      {isUnlocked && (
        <>
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={toggleMusic}
            className="fixed top-6 right-6 z-[100] p-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl text-amber-500 hover:scale-110 active:scale-95 transition-transform"
          >
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-6">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [8, 24, 12, 20, 8] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 bg-amber-500 rounded-full"
                  />
                ))}
              </div>
            ) : <VolumeX size={24} />}
          </motion.button>

          <motion.div 
            className="fixed right-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/10 z-[100] rounded-full overflow-hidden"
          >
            <motion.div 
              className="w-full bg-amber-500 origin-top h-full"
              style={{ scaleY: scrollYProgress }}
            />
          </motion.div>

          <main className="relative z-10">
            <HeroSection 
              groomName={groomName} 
              brideName={brideName} 
              imageUrl={imageUrl} 
              progress={smoothProgress} 
            />

            <DetailsSection 
              date={formattedDate} 
              time={time} 
              locationName={locationName} 
              locationAddress={locationAddress} 
              locationUrl={locationUrl}
              progress={smoothProgress}
              description={description}
            />

            <GallerySection 
              imageUrl2={imageUrl2} 
              imageUrl3={imageUrl3} 
              imageUrlHero={imageUrl}
              progress={smoothProgress} 
            />

            {showGift && (
              <GiftSection 
                cardName={cardName} 
                cardNumber={cardNumber} 
                progress={smoothProgress} 
              />
            )}

            <Footer 
              groomName={groomName} 
              brideName={brideName} 
            />
          </main>
        </>
      )}
    </div>
  );
}

// --- SUB-COMPONENTS (Kept same as before but refined for better performance) ---

function LockScreen({ groomName, brideName, onUnlock }: { groomName: string; brideName: string; onUnlock: () => void }) {
  return (
    <motion.div 
      exit={{ opacity: 0, y: -100, filter: "blur(20px)" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center space-y-12 px-6"
      >
        <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0, letterSpacing: "1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.5 }}
              className="text-amber-500 font-black uppercase text-[10px] md:text-xs"
            >
              ASALOMU ALAYKUM
            </motion.p>
            <h1 className="text-5xl md:text-8xl font-serif italic text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-tight">
              {groomName} <span className="text-amber-500 font-light not-italic">&amp;</span> {brideName}
            </h1>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">To&apos;y oqshomiga taklif etamiz</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(245, 158, 11, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onUnlock}
          className="group relative px-16 py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-[11px] rounded-full overflow-hidden transition-all shadow-2xl"
        >
          <span className="relative z-10 flex items-center gap-4">
            TAKLIFNOMANI OCHISH <Heart className="fill-black group-hover:scale-125 transition-transform" size={16} />
          </span>
          <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

function HeroSection({ groomName, brideName, imageUrl, progress }: { groomName: string; brideName: string; imageUrl: string; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 0.2], [0, -150]);
  const opacity = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const scale = useTransform(progress, [0, 0.2], [1, 1.15]);
  const imageY = useTransform(progress, [0, 0.2], [0, 100]);

  return (
    <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden">
      <motion.div style={{ scale, opacity, y: imageY }} className="absolute inset-0">
        <img 
          src={imageUrl || "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop"} 
          className="w-full h-full object-cover opacity-50"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-black/60" />
      </motion.div>

      <motion.div 
        style={{ y, opacity }}
        className="relative text-center px-6"
      >
        <div className="space-y-6">
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-amber-500 mx-auto mb-8" />
            <p className="text-amber-500 font-black tracking-[0.6em] uppercase text-[10px] mb-4">TAK Taklifnoma asia</p>
            <h2 className="text-6xl md:text-[10rem] font-serif text-white leading-[0.85] tracking-tighter">
               <span className="block mb-4">{groomName}</span>
               <span className="text-amber-500 block opacity-50 text-4xl md:text-6xl font-sans not-italic font-light">&amp;</span>
               <span className="block mt-4">{brideName}</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
                <div className="h-[1px] w-12 bg-white/20" />
                <Heart className="text-amber-500 fill-amber-500/10" size={20} />
                <div className="h-[1px] w-12 bg-white/20" />
            </div>
        </div>
      </motion.div>
    </section>
  );
}

function DetailsSection({ date, time, locationName, locationAddress, locationUrl, progress, description }: any) {
  const y = useTransform(progress, [0.15, 0.3, 0.45, 0.6], [600, 0, 0, -600]);
  const opacity = useTransform(progress, [0.15, 0.3, 0.45, 0.6], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(progress, [0.15, 0.3, 0.45, 0.6], [30, 0, 0, -30]);

  return (
    <section className="h-screen sticky top-0 flex items-center justify-center pointer-events-none">
      <motion.div 
        style={{ y, opacity, scale, rotateX }}
        className="max-w-5xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center pointer-events-auto"
      >
        <div className="space-y-10">
            <div className="space-y-4">
                <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] border-l-2 border-amber-500 pl-4">TANLANGAN KUN</span>
                <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">Yagona va unutilmas kun</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">{description}</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                <DetailCard icon={<Calendar className="text-amber-500" />} label="To&apos;y sanasi" value={date} />
                <DetailCard icon={<Clock className="text-amber-500" />} label="Boshlanish vaqti" value={time} />
                <DetailCard icon={<MapPin className="text-amber-500" />} label="Manzil" value={locationName} subValue={locationAddress} />
            </div>
            
            <motion.a 
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                href={locationUrl || "#"}
                target="_blank"
                className="inline-flex items-center gap-4 px-10 py-5 bg-amber-500 text-black font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-2xl shadow-amber-500/20"
            >
                NAVIGATSIYANI OCHISH <Navigation size={18} />
            </motion.a>
        </div>

        <div className="hidden md:block relative aspect-[4/5] perspective-1000">
            <motion.div 
                animate={{ rotateY: [0, 5, 0], rotateX: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 p-12 flex flex-col items-center justify-center text-center space-y-8 overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(245,158,11,0.1),transparent_50%)]" />
                <Heart className="w-24 h-24 text-amber-500/30 animate-pulse fill-amber-500/5" strokeWidth={0.5} />
                <div className="space-y-2">
                    <p className="text-amber-500 font-serif italic text-3xl">Lutfan taklif etamiz</p>
                    <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">Sizning tashrifingiz biz uchun katta sharaf</p>
                </div>
                <div className="absolute bottom-12 w-12 h-px bg-white/20" />
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function DetailCard({ icon, label, value, subValue }: any) {
    return (
        <motion.div 
            whileHover={{ x: 10 }}
            className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
        >
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-amber-500/30 group-hover:scale-110 transition-all duration-500">
                {icon}
            </div>
            <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">{label}</p>
                <p className="text-2xl font-medium text-white tracking-tight">{value}</p>
                {subValue && <p className="text-xs text-gray-500 mt-1 max-w-[250px] font-light">{subValue}</p>}
            </div>
        </motion.div>
    );
}

function GallerySection({ imageUrl2, imageUrl3, imageUrlHero, progress }: any) {
  const y1 = useTransform(progress, [0.55, 0.75], [600, 0]);
  const y2 = useTransform(progress, [0.65, 0.85], [800, 50]);
  const y3 = useTransform(progress, [0.6, 0.8], [400, -100]);
  
  const rotate1 = useTransform(progress, [0.55, 0.8], [-15, -5]);
  const rotate2 = useTransform(progress, [0.65, 0.9], [15, 8]);
  const rotate3 = useTransform(progress, [0.6, 0.85], [0, -10]);

  return (
    <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden px-6">
        <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center gap-8">
            <motion.div style={{ y: y1, rotate: rotate1 }} className="absolute left-[5%] w-1/3 aspect-[3/4] rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl z-10">
                <img 
                  src={imageUrl2 || "https://images.unsplash.com/photo-1541250848049-b4f71413cc30?q=80&w=2000&auto=format&fit=crop"} 
                  className="w-full h-full object-cover" 
                  alt="Gallery 1"
                />
            </motion.div>
            
            <motion.div style={{ y: y3, rotate: rotate3, scale: 1.1 }} className="relative w-1/3 aspect-[3/4] rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] z-20">
                <img 
                  src={imageUrlHero || "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop"} 
                  className="w-full h-full object-cover" 
                  alt="Hero Center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-8">
                    <p className="text-white font-serif italic text-2xl uppercase tracking-widest opacity-60">Love</p>
                </div>
            </motion.div>

            <motion.div style={{ y: y2, rotate: rotate2 }} className="absolute right-[5%] w-1/3 aspect-[3/4] rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl z-10">
                 <img 
                  src={imageUrl3 || "https://images.unsplash.com/photo-1519225495810-7517c31ca3d5?q=80&w=2000&auto=format&fit=crop"} 
                  className="w-full h-full object-cover" 
                  alt="Gallery 2"
                />
            </motion.div>
        </div>
    </section>
  );
}

function GiftSection({ cardName, cardNumber, progress }: any) {
  const y = useTransform(progress, [0.85, 0.98], [600, 0]);
  const opacity = useTransform(progress, [0.85, 0.95], [0, 1]);
  const rotateX = useTransform(progress, [0.85, 0.98], [40, 0]);

  return (
    <section className="h-screen sticky top-0 flex items-center justify-center">
        <motion.div 
            style={{ y, opacity, rotateX }} 
            className="max-w-xl w-full bg-white/5 border border-white/10 rounded-[4rem] p-16 text-center backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
        >
            <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-amber-500/20">
                <Gift className="text-amber-500" size={40} />
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 italic">To&apos;yona uchun</h3>
            <p className="text-gray-500 mb-12 text-sm md:text-base font-light max-w-sm mx-auto">Agarda bizni quvontirmoqchi bo&apos;lsangiz, quyidagi karta orqali amalga oshirishingiz mumkin</p>
            
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-10 rounded-[2.5rem] text-black text-left relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full -mr-24 -mt-24 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <div className="flex justify-between items-start mb-12">
                     <p className="text-[11px] font-black uppercase tracking-[0.3em] opacity-80">CARD RECIPIENT</p>
                     <div className="flex gap-1">
                        <div className="w-8 h-8 rounded-full bg-black/10 backdrop-blur-md" />
                        <div className="w-8 h-8 rounded-full bg-black/10 backdrop-blur-md -ml-4" />
                     </div>
                </div>
                <p className="text-2xl md:text-3xl font-mono tracking-tighter mb-4 text-black/90">{cardNumber || "8600 0000 0000 0000"}</p>
                <p className="text-[13px] font-black uppercase tracking-[0.2em]">{cardName || "ISMOILOV MUROD"}</p>
            </div>
        </motion.div>
    </section>
  );
}

function Footer({ groomName, brideName }: any) {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-black relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(245,158,11,0.1),transparent_50%)]" />
             <div className="w-16 h-[2px] bg-amber-500/30 rounded-full mb-16" />
             <div className="text-center space-y-6 relative z-10">
                 <h2 className="text-6xl md:text-[8rem] font-serif italic text-white drop-shadow-2xl">
                    {groomName} <span className="text-amber-500 not-italic font-light">&amp;</span> {brideName}
                 </h2>
                 <p className="text-amber-500 font-black tracking-[0.5em] uppercase text-[10px] md:text-xs pt-8">BAXTIMIZGA SHERIK BO&apos;LING</p>
             </div>
             
             <div className="mt-32 pt-16 border-t border-white/5 w-full max-w-md text-center flex flex-col items-center gap-8 relative z-10">
                <p className="text-[10px] md:text-xs font-bold text-gray-600 uppercase tracking-[0.3em] italic">
                    Taklifnoma Asia — Sifat va dizayn uyg&apos;unligi
                </p>
                <a href="https://taklifnoma.asia" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all duration-500 uppercase text-[10px] font-black tracking-widest shadow-2xl">
                    O&apos;Z TAKLIFNOMANGIZNI YARATING
                </a>
             </div>
        </section>
    );
}

function BackgroundBeams() {
  return (
    <div className="absolute inset-0 bg-[#020202]">
      <div className="absolute h-full w-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      <motion.div 
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 left-0 right-0 h-full bg-[radial-gradient(circle_at_50%_100%,rgba(245,158,11,0.12),transparent_70%)] blur-[120px]" 
      />
    </div>
  );
}
