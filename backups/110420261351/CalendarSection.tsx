'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function CalendarSection({ date, isPreview = false }: { date?: string; isPreview?: boolean }) {
  const days = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
  
  // Parse date
  const weddingDate = date ? new Date(date) : new Date('2026-05-15');
  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth();
  const highlightedDay = weddingDate.getDate();

  // Uzbek month names
  const monthNames = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 
    'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
  ];
  const monthLabel = `${monthNames[month]} ${year}`;

  // Calculate first day of the month
  const firstDay = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)
  
  // Convert to Mon-Sun (Mon=0, Sun=6)
  // 0 (Sun) -> 6
  // 1 (Mon) -> 0
  // 2 (Tue) -> 1
  // ...
  // 6 (Sat) -> 5
  const emptyDaysCount = (firstDay + 6) % 7;
  const emptyDays = Array(emptyDaysCount).fill(null);
  
  // Calculate total days in month
  const totalDays = new Date(year, month + 1, 0).getDate();
  const monthDays = Array.from({ length: totalDays }, (_, i) => i + 1);
  
  return (
    <section className={`relative w-full ${isPreview ? 'py-8' : 'py-12 md:py-24'} bg-[#F8FAFC] flex flex-col items-center justify-center font-sans border-t border-gray-100`}>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`text-center ${isPreview ? 'mb-6' : 'mb-8 md:mb-12'} space-y-2 md:space-y-3`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2">
          {date ? date.split('-').reverse().join('.') : 'Sana'}
        </span>
        <h2 className={`${isPreview ? 'text-2xl' : 'text-3xl md:text-4xl lg:text-5xl'} font-extrabold text-[#0F172A] tracking-tight`}>{monthLabel}</h2>
        <p className="text-xs md:text-sm font-medium text-[#64748B]">
          Ushbu kun kalendaringizda belgilangan bo&apos;lsin
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`w-full ${isPreview ? 'max-w-xs' : 'max-w-lg'} px-4 sm:px-6`}
      >
        <div className={`bg-white ${isPreview ? 'rounded-[1rem] p-4' : 'rounded-[1.5rem] md:rounded-[2rem] p-5 sm:p-6 md:p-10'} shadow-xl shadow-purple-900/5 border border-purple-50`}>
          <div className={`grid grid-cols-7 ${isPreview ? 'gap-y-2 gap-x-1' : 'gap-y-4 md:gap-y-6 gap-x-1 sm:gap-x-2 md:gap-x-4'} text-center`}>
            {days.map((day, i) => (
              <div key={i} className="text-[10px] md:text-xs font-bold text-[#64748B] uppercase pb-2 md:pb-4 border-b border-gray-100">
                {day}
              </div>
            ))}
            
            {emptyDays.map((_, i) => (
              <div key={`empty-${i}`} className={`${isPreview ? 'h-8' : 'h-10 md:h-12'}`} />
            ))}
            
            {monthDays.map((day) => {
              const isWeddingDay = day === highlightedDay;
              return (
                <div key={day} className={`relative flex items-center justify-center ${isPreview ? 'h-8' : 'h-10 md:h-12'}`}>
                  {isWeddingDay ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
                      className={`absolute inset-0 flex items-center justify-center bg-purple-700 text-white ${isPreview ? 'rounded-[0.7rem]' : 'rounded-[1rem]'} shadow-lg shadow-purple-500/40 z-10`}
                    >
                      <span className={`${isPreview ? 'text-sm' : 'text-lg'} font-bold`}>{day}</span>
                    </motion.div>
                  ) : (
                    <span className={`${isPreview ? 'text-xs' : 'text-[15px]'} font-medium text-[#0F172A]/80 hover:text-purple-700 transition-colors cursor-default`}>
                      {day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
