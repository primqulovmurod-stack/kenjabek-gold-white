'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CollageSectionProps {
  groomName: string;
  brideName: string;
  date: string;
  photos?: string[];
  isPreview?: boolean;
}

export function CollageSection({ isPreview = false }: CollageSectionProps) {
  return (
    <section className={`relative w-full ${isPreview ? 'pb-8' : 'pb-16 md:pb-24'} bg-transparent flex flex-col items-center justify-center overflow-visible font-sans px-4`}>
       <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 1 }}
         className="relative w-full max-w-5xl mx-auto flex justify-center"
       >
         <img 
           src="/assets/collage-sample.jpg" 
           alt="Wedding Collage Design" 
           className="w-full max-w-4xl h-auto rounded-xl md:rounded-3xl shadow-2xl shadow-purple-900/10 mix-blend-multiply select-none" 
           style={{ pointerEvents: 'none' }}
         />
       </motion.div>
    </section>
  );
}
