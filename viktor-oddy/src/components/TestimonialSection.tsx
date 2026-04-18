import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const TestimonialSection: React.FC = () => {
  const { ref: containerRef, isInView } = useInViewAnimation();
  const imageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the image is from the center of the viewport
      const centerOfViewport = windowHeight / 2;
      const centerOfImage = rect.top + rect.height / 2;
      const distance = centerOfImage - centerOfViewport;
      
      // max offset 200px
      const newOffset = (distance / windowHeight) * 200;
      
      animationFrameId = requestAnimationFrame(() => {
        setOffset(newOffset);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef as any}
      className="py-12 px-6 max-w-2xl mx-auto flex flex-col items-center text-center"
    >
      <div 
        className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <Quote className="w-6 h-6 text-slate-900 mb-6" />
      </div>

      <h2 
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        I left <span className="font-mondwest italic">Apple</span> to build the studio I always wanted to work with
      </h2>

      <p 
        className={`italic text-sm text-[#273C46] mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        Viktor Oddy
      </p>

      <div 
        className={`flex items-center gap-8 mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.4s' }}
      >
        <span className="font-medium text-slate-900 text-2xl w-[80px]">Apple</span>
        <span className="font-medium text-slate-900 text-2xl w-[83px]">IDEO</span>
        <span className="font-medium text-slate-900 text-2xl w-[110px]">Polygon</span>
      </div>

      <div 
        ref={imageRef}
        className={`relative w-full max-w-xs overflow-hidden rounded-2xl shadow-lg aspect-[4/5] ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.5s' }}
      >
        <img 
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85" 
          alt="Chris Halaska"
          className="w-full h-full object-cover transition-transform duration-100 ease-out scale-110"
          style={{ transform: `translateY(${offset}px)` }}
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
