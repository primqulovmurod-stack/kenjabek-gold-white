'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Gift, Heart, ArrowLeft, MoreHorizontal, Bell, Link, Copy, Check } from 'lucide-react';

interface ModernMobileInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  locationUrl?: string;
  imageUrl?: string;
  musicUrl?: string;
  cardNumber?: string;
  cardName?: string;
  description?: string;
}

export default function ModernMobileInvitation({
  groomName = "Murod",
  brideName = "Odina",
  date = "2026-04-24",
  time = "19:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Jizzax Shahar, Demir ko'chasi",
  locationUrl = "https://maps.google.com",
  imageUrl = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
  musicUrl = "/assets/die_with_a_smile.mp3",
  cardNumber = "8600 1234 5678 9012",
  cardName = "Murod Primqulov",
  description = "Bizning baxtli kunimizga lutfan taklif etamiz. Sizning tashrifingiz biz uchun katta quvonch!"
}: ModernMobileInvitationProps) {
  const [activeTab, setActiveTab] = useState('Dastur');
  const [isCopied, setIsCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyCard = () => {
    if (cardNumber) {
      navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#1A1A1A] flex justify-center pb-20">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative overflow-hidden">
        
        {/* Mock Mobile Status Bar & Notch */}
        <div className="sticky top-0 z-50 bg-white pt-2">
            <div className="flex justify-between items-center px-8 h-8">
               <span className="text-xs font-bold">17:58</span>
               <div className="w-20 h-5 bg-black rounded-full" />
               <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full border border-black" />
                  <div className="w-3 h-3 bg-black rounded-full" />
               </div>
            </div>
            {/* App Nav */}
            <div className="flex justify-between items-center px-6 py-4">
                <button className="p-2 rounded-xl bg-gray-50 text-gray-400">
                   <ArrowLeft size={18} />
                </button>
                <h1 className="text-sm font-bold tracking-tight">Taklifnoma</h1>
                <button className="p-2 rounded-xl bg-gray-50 text-gray-400">
                   <MoreHorizontal size={18} />
                </button>
            </div>
        </div>

        {/* Hero Section - Mirroring the "Doctor" profile view */}
        <div className="px-6 pt-2">
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] bg-[#FFB74D] overflow-hidden shadow-lg border-4 border-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 p-8">
                   {[...Array(20)].map((_, i) => (
                      <Heart key={i} size={24} className="text-white fill-white" />
                   ))}
                </div>
                
                <img 
                  src={imageUrl} 
                  alt="Couple" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                
                <div className="absolute top-8 right-8 space-y-2 text-right">
                   <h2 className="text-3xl font-black text-white leading-none">
                      {groomName} <br /> {brideName}
                   </h2>
                   <p className="text-[10px] text-white/80 font-bold uppercase tracking-widest bg-black/10 backdrop-blur-sm inline-block px-2 py-1 rounded">Nikoh To'yi</p>
                </div>
            </div>
        </div>

        {/* Content Body */}
        <div className="px-6 py-8 space-y-8">
            {/* Mini Profile Info */}
            <div className="flex justify-between items-center">
               <div className="space-y-1">
                  <h3 className="text-lg font-black">{groomName} & {brideName}</h3>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                     <span className="flex items-center gap-1"><Calendar size={12} className="text-[#FFB74D]" /> {date}</span>
                     <span className="flex items-center gap-1"><Clock size={12} className="text-[#FFB74D]" /> {time}</span>
                  </div>
               </div>
               <div className="flex items-center gap-1 bg-[#FFF3E0] px-3 py-1.5 rounded-full text-[#FFB74D] text-[10px] font-black uppercase">
                  Baxtli Kun
               </div>
            </div>

            {/* About Section */}
            <div className="space-y-3">
               <h4 className="text-sm font-black">Taklifnoma haqida</h4>
               <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  {description}
               </p>
            </div>

            {/* Program / Appointment Style Date Picker */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h4 className="text-sm font-black">To'y Dasturi</h4>
                    <span className="text-xs font-bold text-[#FFB74D]">Aprel, 2026 {">"}</span>
                </div>
                <div className="flex justify-between">
                    {[
                      { d: 'pan', n: '23' },
                      { d: 'jum', n: '24', active: true },
                      { d: 'shan', n: '25' },
                      { d: 'yak', n: '26' },
                      { d: 'dus', n: '27' }
                    ].map((item, i) => (
                       <button 
                        key={i}
                        className={`w-14 h-20 rounded-[1.5rem] flex flex-col items-center justify-center gap-2 transition-all ${item.active ? 'bg-[#FFB74D] text-white shadow-lg shadow-orange-100' : 'bg-gray-50 text-gray-400'}`}
                       >
                          <span className="text-[10px] uppercase font-bold">{item.d}</span>
                          <span className="text-base font-black">{item.n}</span>
                       </button>
                    ))}
                </div>
            </div>

            {/* Appointment Details - Card Items */}
            <div className="space-y-4">
                <div className="bg-[#FAF9F6] p-5 rounded-[2rem] flex items-center gap-4 border border-gray-100">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#FFB74D] shadow-sm">
                      <MapPin size={20} />
                   </div>
                   <div className="flex-1 space-y-1">
                      <p className="text-xs font-black">{locationName}</p>
                      <p className="text-[10px] text-gray-400 font-bold">{locationAddress}</p>
                   </div>
                </div>

                <div className="bg-[#FAF9F6] p-5 rounded-[2rem] flex items-center gap-4 border border-gray-100">
                   <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#FFB74D] shadow-sm">
                      <Gift size={20} />
                   </div>
                   <div className="flex-1 space-y-1">
                      <p className="text-xs font-black">To'yona uchun</p>
                      <p className="text-[10px] text-gray-400 font-bold font-mono">{cardNumber}</p>
                   </div>
                   <button 
                    onClick={copyCard}
                    className={`p-3 rounded-2xl transition-all ${isCopied ? 'bg-green-500 text-white' : 'bg-white text-gray-300'}`}
                   >
                      {isCopied ? <Check size={16} /> : <Copy size={16} />}
                   </button>
                </div>
            </div>
        </div>

        {/* Floating Action Bar */}
        <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/80 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-2xl flex justify-between items-center border border-white/50">
               <div className="pl-6">
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Tashrifingiz</p>
                  <p className="text-sm font-black italic">Intizormiz!</p>
               </div>
               <a 
                href={locationUrl} target="_blank"
                className="bg-[#FFB74D] text-white px-8 py-4 rounded-[1.8rem] text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-100 hover:scale-105 transition-transform"
               >
                 Manzilni Ko'rish
               </a>
            </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
