'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { LockScreen } from '@/components/luxury/LockScreen';
import { HeroSection } from '@/components/luxury/HeroSection';
import CountdownSection from '@/components/luxury/CountdownSection';
import { CalendarSection } from '@/components/luxury/CalendarSection';
import { VenueSection } from '@/components/luxury/VenueSection';
import { GiftSection } from '@/components/luxury/GiftSection';

interface PinkLuxuryInvitationProps {
  groomName: string;
  brideName: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  locationUrl?: string;
  imageUrl?: string;
  musicUrl?: string;
  cardNumber?: string;
  cardName?: string;
  showGift?: boolean;
  description?: string;
  isPreview?: boolean;
  isMuted?: boolean;
}

export default function PinkLuxuryInvitation({
  groomName = "Murod",
  brideName = "Odina",
  date = "2026-04-24",
  time = "19:00",
  locationName = "Toshkent",
  locationAddress = "",
  locationUrl = "",
  imageUrl = "",
  musicUrl = "",
  cardNumber = "",
  cardName = "",
  showGift = false,
  description = "Sizni kutib qolamiz!",
  isPreview = false,
  isMuted = false
}: PinkLuxuryInvitationProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  // Disable scrolling while locked
  useEffect(() => {
    if (isPreview) return;
    if (!isUnlocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isUnlocked, isPreview]);

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  return (
    <div className="bg-white min-h-[100svh] selection:bg-purple-200 font-sans text-[#0F172A]">
      {musicUrl && <audio ref={audioRef} src={musicUrl} loop muted={isMuted} />}
      <AnimatePresence>
        {!isUnlocked && (
          <LockScreen 
            groomName={groomName}
            brideName={brideName}
            onUnlock={() => {
              setIsUnlocked(true);
              // Sahifani eng tepaga qaytarish
              window.scrollTo({ top: 0, behavior: 'instant' });
              
              if (audioRef.current) {
                audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
              }
            }} 
          />
        )}
      </AnimatePresence>

      <main 
        className={`relative w-full ${isUnlocked ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} transition-opacity duration-1000 delay-500`}
      >
        <HeroSection groomName={groomName} brideName={brideName} date={date} time={time} isPreview={isPreview} imageUrl={imageUrl} locationUrl={locationUrl} locationName={locationName} locationAddress={locationAddress} description={description} />
        <CountdownSection weddingDate={date} isPreview={isPreview} />
        
        {/* O'rtadagi rasm bo'limi */}
        <div className={`w-full max-w-lg mx-auto px-6 ${isPreview ? 'py-4' : 'py-8 md:py-12'}`}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${isPreview ? 'h-[300px]' : 'h-[400px] md:h-[500px]'} w-full overflow-hidden shadow-2xl rounded-[2rem] md:rounded-[3rem] border-8 border-white`}
          >
             <div 
               className="absolute inset-0 bg-cover bg-center" 
               style={{ backgroundImage: `url("${imageUrl || "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2000&auto=format&fit=crop"}")` }} 
             />
          </motion.div>
        </div>

        <CalendarSection date={date} isPreview={isPreview} />
        <VenueSection locationName={locationName} locationAddress={locationAddress} locationUrl={locationUrl} isPreview={isPreview} />
        {showGift && (
          <GiftSection cardNumber={cardNumber} cardName={cardName} isPreview={isPreview} />
        )}
        
        <footer className="py-12 md:py-24 bg-[#F8FAFC] text-center border-t border-purple-50 flex flex-col items-center justify-center space-y-4 md:space-y-6 font-sans px-4">
          <div className="w-12 h-[3px] bg-purple-600 rounded-full" />
          <p 
            className="text-3xl md:text-5xl font-medium text-[#0F172A] tracking-wider italic"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            {groomName} <span className="text-purple-300 font-light mx-1" style={{ fontFamily: 'var(--font-playfair)' }}>&amp;</span> {brideName}
          </p>
          <p className="text-xs md:text-sm font-bold text-[#64748B]">
            Eng baxtli kunimizda biz bilan bo'ling
          </p>

          <div className="mt-6 md:mt-8 pt-6 md:pt-8 w-full max-w-sm flex flex-col items-center gap-3 md:gap-4">
            <p className="text-[10px] md:text-sm font-bold text-[#64748B] uppercase tracking-widest italic">
              Taklifnoma Asia orqali yaratildi
            </p>
            <a href="https://taklifnoma.asia" target="_blank" rel="noopener noreferrer" className="text-sm font-black text-white bg-purple-600 hover:bg-purple-700 transition-all px-8 py-4 rounded-2xl shadow-xl shadow-purple-200 uppercase tracking-widest">
              Taklifnoma Yaratish
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
