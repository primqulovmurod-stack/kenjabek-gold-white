import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';

const THUMBNAILS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif'
];

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  url: string;
  opacity: number;
  scale: number;
}

const PartnerSection: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastSpawnTime = React.useRef(0);

  const spawnParticle = useCallback((x: number, y: number) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return;
    lastSpawnTime.current = now;

    const newParticle: Particle = {
      id: now,
      x,
      y,
      rotation: Math.random() * 20 - 10,
      url: THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)],
      opacity: 1,
      scale: 1
    };

    setParticles(prev => [...prev.slice(-15), newParticle]);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateParticles = () => {
      setParticles(prev => {
        const filtered = prev.map(p => ({
          ...p,
          opacity: p.opacity - 0.02,
          scale: p.scale - 0.01
        })).filter(p => p.opacity > 0);
        
        return filtered;
      });
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    animationFrameId = requestAnimationFrame(updateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="full-width py-12 px-6">
      <div 
        className="max-w-7xl mx-auto py-48 rounded-[40px] bg-white border border-gray-100 shadow-xl relative overflow-hidden flex flex-col items-center justify-center text-center cursor-none group"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          spawnParticle(e.clientX - rect.left, e.clientY - rect.top);
        }}
      >
        {/* Floating particles background overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map(p => (
            <img 
              key={p.id}
              src={p.url}
              alt=""
              className="absolute w-32 h-32 object-cover rounded-xl shadow-lg pointer-events-none"
              style={{
                left: p.x - 64,
                top: p.y - 64,
                transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
                opacity: p.opacity,
                zIndex: 10
              }}
            />
          ))}
        </div>

        <div className="relative z-20">
          <h2 className="text-[48px] md:text-[64px] lg:text-[80px] font-mondwest italic leading-tight text-[#0D212C] mb-12 px-4">
            Partner with us
          </h2>
          
          <Button variant="primary" className="flex items-center gap-3 py-4 px-8 group-hover:scale-105 transition-transform">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" 
              alt="Viktor" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
            />
            <span>Start chat with Viktor</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
