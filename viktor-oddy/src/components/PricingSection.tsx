import React from 'react';
import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const PricingSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInViewAnimation();

  return (
    <section 
      ref={sectionRef as any}
      className="w-full py-12 px-6 flex justify-center md:justify-end"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Card 1: Dark */}
        <div 
          className={`bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-10 pb-10 transition-all duration-700 shadow-inner ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <h3 className="text-[22px] font-medium text-[#F6FCFF] mb-2">Monthly Partnership</h3>
          <p className="text-[#E0EBF0] text-sm mb-8 leading-relaxed">
            A dedicated creative design team. <br />
            You work directly with Viktor.
          </p>
          <div className="mb-8">
            <span className="text-2xl text-[#F6FCFF] font-semibold">$5,000</span>
            <p className="text-[#E0EBF0] text-xs">Monthly</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="primary" className="w-full sm:w-auto text-center" onClick={() => window.open('https://halaskastudio.com/./book', '_blank')}>
              Start a chat
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto text-center bg-transparent border border-[#E0EBF0]/20 text-[#F6FCFF]" onClick={() => window.open('https://halaskastudio.com/./book', '_blank')}>
              How it works
            </Button>
          </div>
        </div>

        {/* Card 2: Light */}
        <div 
          className={`bg-white rounded-[40px] pl-10 pr-10 md:pr-24 pt-10 pb-10 transition-all duration-700 shadow-card-light ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <h3 className="text-[22px] font-medium text-[#0D212C] mb-2">Custom Project</h3>
          <p className="text-[#051A24]/70 text-sm mb-8 leading-relaxed">
            Fixed scope, fixed timeline. <br />
            Same team, same standards.
          </p>
          <div className="mb-8">
            <span className="text-2xl text-[#0D212C] font-semibold">$5,000</span>
            <p className="text-[#051A24]/50 text-xs">Minimum</p>
          </div>
          <Button variant="tertiary" className="w-full sm:w-auto text-center" onClick={() => window.open('https://halaskastudio.com/./book', '_blank')}>
            Start a chat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
