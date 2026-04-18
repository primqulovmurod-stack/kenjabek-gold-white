import React from 'react';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import Button from './components/Button';
import TestimonialSection from './components/TestimonialSection';
import PricingSection from './components/PricingSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ProjectsSection from './components/ProjectsSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';
import CopyrightBar from './components/CopyrightBar';
import BottomNav from './components/BottomNav';

const MARQUEE_IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

const HeroSection: React.FC = () => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section 
      ref={ref as any}
      className="max-w-[440px] px-6 pt-12 md:pt-16 mx-auto text-center"
    >
      <h1 
        className={`text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4 font-mondwest ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        Viktor Oddy
      </h1>
      
      <p 
        className={`font-mono text-xs md:text-sm text-[#051A24] mb-2 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
      >
        The creative studio of Viktor Oddy
      </p>
      
      <h2 
        className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap mb-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.3s' }}
      >
        Build the <span className="font-mondwest italic">next wave,</span><br />
        the <span className="font-mondwest italic">bold way.</span>
      </h2>
      
      <div 
        className={`flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 text-left ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.4s' }}
      >
        <p>I spent seven years at Apple crafting products used by over a billion people. I founded Vortex Studio to bring that same level of thinking to innovators shaping what comes next.</p>
        <p>The studio is deliberately small. I guide the creative vision on every project, backed by a veteran design crew that moves fast without cutting corners.</p>
        <p className="font-semibold italic">Projects start at $5,000 per month.</p>
      </div>
      
      <div 
        className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 justify-center ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.5s' }}
      >
        <Button variant="primary">Start a chat</Button>
        <Button variant="secondary">View projects</Button>
      </div>
    </section>
  );
};

const InfiniteMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden mt-16 md:mt-20 mb-16 relative">
      <div className="flex animate-marquee-mobile md:animate-marquee whitespace-nowrap">
        {/* Double the images for seamless loop */}
        {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((img, i) => (
          <img 
            key={i}
            src={img}
            alt={`Work ${i}`}
            className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <InfiniteMarquee />
      <TestimonialSection />
      <div id="services">
        <PricingSection />
      </div>
      <TestimonialCarousel />
      <div id="work">
        <ProjectsSection />
      </div>
      <div id="about">
        <PartnerSection />
      </div>
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </main>
  );
}

export default App;
