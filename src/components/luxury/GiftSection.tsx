'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface GiftSectionProps {
  cardNumber?: string;
  cardName?: string;
  isPreview?: boolean;
}

export function GiftSection({ 
  cardNumber = "8600 1234 5678 9012", 
  cardName = "MUROD P.",
  isPreview = false
}: GiftSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className={`relative w-full ${isPreview ? 'py-12' : 'py-24'} bg-transparent flex flex-col items-center justify-center overflow-hidden font-sans`}>

      <motion.div 
        initial={{ opacity: 0, y: 70, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full ${isPreview ? 'max-w-xs' : 'max-w-lg'} px-6 relative z-10 flex flex-col items-center ${isPreview ? 'gap-6' : 'gap-12'}`}
      >
        <div className="text-center space-y-4">
          <h2 className={`${isPreview ? 'text-2xl' : 'text-4xl md:text-5xl'} font-extrabold text-[#0F172A] tracking-tight`}>
            To&apos;yona uchun
          </h2>
        </div>

        {/* Vibrant E-commerce Card */}
        <div className="perspective-1000 w-full">
          <motion.div 
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative w-full aspect-[1.6/1] ${isPreview ? 'rounded-2xl p-4' : 'rounded-3xl p-6 md:p-10'} flex flex-col justify-between overflow-hidden shadow-2xl shadow-purple-900/30`}
            style={{
              background: 'linear-gradient(135deg, #7E22CE 0%, #4C1D95 100%)',
            }}
          >
            {/* Card Overlays */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D8B4FE]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="flex justify-between items-start z-10">
              <div className={`rounded-md bg-[#FCD34D] bg-opacity-90 shadow-inner flex flex-col justify-evenly px-2 relative overflow-hidden border border-yellow-400 ${isPreview ? 'w-10 h-7' : 'w-12 h-9'}`}>
                <div className="w-full h-[1px] bg-yellow-600/30" />
                <div className="w-full h-[1px] bg-yellow-600/30" />
                <div className="w-full h-[1px] bg-yellow-600/30" />
              </div>
              <span className={`text-white/80 font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md ${isPreview ? 'text-[8px]' : 'text-xs'}`}>
                Gift Card
              </span>
            </div>

            <div className={`space-y-4 z-10 w-full`}>
              <div className={`font-sans ${isPreview ? 'text-[13px]' : 'text-[15px] min-[400px]:text-lg sm:text-2xl md:text-[28px]'} text-white font-extrabold tracking-wider tabular-nums drop-shadow-md whitespace-nowrap text-center`}>
                {cardNumber}
              </div>
              
              <div className="flex justify-between items-end w-full">
                <div className="flex flex-col">
                  <p className={`font-bold text-white uppercase tracking-wider ${isPreview ? 'text-xs' : 'text-sm'}`}>{cardName}</p>
                </div>
                <button 
                  onClick={handleCopy}
                  className={`group relative ${isPreview ? 'px-3 py-1.5' : 'px-4 sm:px-6 py-2.5 sm:py-3'} rounded-full border border-white/20 bg-white/10 hover:bg-white transition-all duration-300 backdrop-blur-md flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/30`}
                >
                  {copied ? <Check size={isPreview ? 12 : 16} className="text-[#0F172A]" /> : <Copy size={isPreview ? 12 : 16} className="text-white group-hover:text-[#0F172A]" />}
                  <span className={`font-bold uppercase tracking-widest text-white group-hover:text-[#0F172A] transition-colors ${isPreview ? 'text-[8px]' : 'text-[10px] md:text-xs'}`}>
                    {copied ? "Saqlandi" : "Nusxa"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
