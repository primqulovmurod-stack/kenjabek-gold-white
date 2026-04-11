'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LockScreenProps {
  onUnlock: () => void;
  groomName: string;
  brideName: string;
}

export function LockScreen({ onUnlock, groomName, brideName }: LockScreenProps) {
  const getInitial = (name: string) => {
    if (!name || typeof name !== 'string') return '';
    const trimmed = name.trim();
    return trimmed.length > 0 ? trimmed[0].toUpperCase() : '';
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: "-100%", 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-cover bg-center font-sans selection:bg-purple-200"
      style={{ backgroundImage: 'url("/assets/lock-bg.png")' }}
    >
      {/* Dark overlay for better readability if needed */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      {/* Main Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex flex-col items-center justify-center space-y-8 px-8 py-12 max-w-[340px] w-[90%] bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-purple-900/10 border border-white"
      >
        {/* E-Commerce style Logo / Monogram */}
        <div className="w-24 h-24 rounded-full bg-white shadow-xl shadow-purple-900/10 flex flex-col items-center justify-center border-4 border-double border-purple-200 relative">
            <div className="absolute inset-[3px] rounded-full border-[0.5px] border-purple-100" />
            <span className="text-purple-300 text-[10px] mb-1 opacity-80">⚜</span>
            <span 
              className="text-3xl text-[#7E22CE] leading-none tracking-widest flex items-center justify-center italic"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              {getInitial(groomName)}<span className="text-purple-300 font-light text-xl mx-0.5" style={{ fontFamily: 'var(--font-playfair)' }}>&amp;</span>{getInitial(brideName)}
            </span>
            <span className="text-purple-300 text-[10px] mt-1 opacity-80 rotate-180">⚜</span>
          </div>

        {/* Text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
            Siz uchun maxsus
          </h2>
          <p className="text-sm text-[#64748B] font-medium px-4">
            Taklifnoma tafsilotlarini ko&apos;rish uchun bosing.
          </p>
        </div>

        {/* Unlock Button */}
        <button
          onClick={onUnlock}
          className="group relative flex items-center justify-center w-full h-14 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300"
        >
          <span className="relative z-10 font-bold text-sm tracking-wide flex items-center gap-2">
            Taklifnomani ochish <span>&rarr;</span>
          </span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </button>
      </motion.div>
    </motion.div>
  );
}
