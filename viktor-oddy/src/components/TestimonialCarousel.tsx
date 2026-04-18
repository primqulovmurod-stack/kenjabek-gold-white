import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Marcus Anderson",
    role: "CEO, Data.storage",
    text: "With very little guidance team delivered designs that were consistently spot on...",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "alexwu",
    role: "Founder, Nexgate",
    text: "Viktor led the creation of our best fundraising deck to date!...",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "James Mitchell",
    role: "VP Product, LaunchPad",
    text: "Working with Viktor transformed our product vision...",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Rachel Foster",
    role: "Co-founder, Nexus Labs",
    text: "The design quality exceeded our expectations...",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "David Zhang",
    role: "Head of Design, Paradigm Labs",
    text: "Incredible work from start to finish...",
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

// Triple for infinite scroll
const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1));
  };

  // Reset to middle set when reaching ends for pseudo-infinite effect
  useEffect(() => {
    if (currentIndex >= displayTestimonials.length - 2) {
      setTimeout(() => {
        // disable transition briefly to jump
        if (containerRef.current) containerRef.current.style.transition = 'none';
        setCurrentIndex(currentIndex - testimonials.length);
        setTimeout(() => {
          if (containerRef.current) containerRef.current.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 50);
      }, 800);
    }
    if (currentIndex <= 1) {
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.transition = 'none';
        setCurrentIndex(currentIndex + testimonials.length);
        setTimeout(() => {
          if (containerRef.current) containerRef.current.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 50);
      }, 800);
    }
  }, [currentIndex]);

  const cardWidth = 427.5; // px

  return (
    <div className="py-20 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 md:ml-auto md:mr-0">
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight">
          What <span className="font-mondwest italic">builders</span> say
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <span className="font-medium text-slate-900">Clutch 5/5</span>
        </div>
      </div>

      <div 
        className="relative px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          ref={containerRef}
          className="flex gap-6 transition-transform duration-800"
          style={{ 
            transform: `translateX(calc(-${currentIndex * (cardWidth + 24)}px + 0px))`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '800ms'
          }}
        >
          {displayTestimonials.map((t, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-[calc(100vw-48px)] md:w-[427.5px] bg-white rounded-[32px] md:rounded-[40px] shadow-card-light px-6 md:pl-10 md:pr-10 py-8 flex flex-col justify-between h-[300px]"
            >
              <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                  <path d="M10 20H16V26H10V20ZM10 14H16V18H10V14ZM24 20H30V26H24V20ZM24 14H30V18H24V14Z" fill="#0D212C" fillOpacity="0.1" />
                </svg>
                <p className="text-base text-[#0D212C] leading-relaxed italic">{t.text}</p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-sm text-[#0D212C]">{t.name}</h4>
                  <p className="text-xs text-[#0D212C]/60 flex items-center">
                    <span className="mr-1">→</span> {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-start gap-4 mt-12 px-0 md:px-0">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#0D212C]/5 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-[#0D212C]/5 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
