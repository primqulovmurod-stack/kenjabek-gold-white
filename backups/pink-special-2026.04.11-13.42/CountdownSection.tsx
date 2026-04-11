'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownSectionProps {
  weddingDate: string; // Masalan: "24 - MAY, 2026"
  isPreview?: boolean;
}

const CountdownSection: React.FC<CountdownSectionProps> = ({ weddingDate, isPreview = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    let targetDate = new Date();
    
    // Parse DD.MM.YYYY format
    if (weddingDate && weddingDate.includes('.')) {
      const parts = weddingDate.split('.');
      if (parts.length === 3) {
        const day = parts[0].trim();
        const month = parts[1].trim();
        const year = parts[2].trim();
        const isoDate = `${year}-${month}-${day}T18:00:00`;
        const parsed = new Date(isoDate);
        if (!isNaN(parsed.getTime())) {
          targetDate = parsed;
        }
      }
    } else if (weddingDate) {
      // Fallback for YYYY-MM-DD
      const parsed = new Date(weddingDate);
      if (!isNaN(parsed.getTime())) {
          targetDate = parsed;
      }
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const TimeBlock = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center">
      <div className={`${isPreview ? 'w-12 h-12' : 'w-16 h-16 md:w-20 md:h-20'} bg-white shadow-xl rounded-2xl flex items-center justify-center border-b-4 border-[#E11D48]/20`}>
        <span className={`${isPreview ? 'text-lg' : 'text-2xl md:text-3xl'} font-black text-[#0F172A]`}>{value < 10 ? `0${value}` : value}</span>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E11D48] mt-3">{label}</span>
    </div>
  );

  return (
    <section className={`${isPreview ? 'py-8' : 'py-16'} px-6 bg-[#FFF9FA] relative overflow-hidden`}>
      {/* Background Decor olib tashlandi */}

      
      <div className="max-w-md mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${isPreview ? 'mb-6' : 'mb-10'}`}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-8 bg-[#E11D48]/30"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E11D48]">Teskari Sanoq</span>
            <div className="h-[1px] w-8 bg-[#E11D48]/30"></div>
          </div>
          <h2 className={`${isPreview ? 'text-base' : 'text-xl'} font-serif text-[#0F172A]`}>Baxitli kunimizga qolgan vaqt</h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 md:gap-4">
          <TimeBlock value={timeLeft.days} label="Kun" />
          <TimeBlock value={timeLeft.hours} label="Soat" />
          <TimeBlock value={timeLeft.minutes} label="Daqiqa" />
          <TimeBlock value={timeLeft.seconds} label="Soniya" />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
