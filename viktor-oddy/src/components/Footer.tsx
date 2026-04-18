import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 max-w-[1200px] mx-auto border-t border-gray-100 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <Button variant="primary" className="px-10">Start a chat</Button>
        </div>
        
        <div className="flex gap-8 items-start">
          <ArrowUpRight size={24} className="text-[#051A24]/40 mt-1" />
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-[#051A24]/40 text-xs font-mono uppercase tracking-widest">Navigation</h4>
              <a href="#services" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">Services</a>
              <a href="#work" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">Work</a>
              <a href="#about" className="text-base text-[#051A24] hover:opacity-70 transition-opacity">About</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="text-[#051A24]/40 text-xs font-mono uppercase tracking-widest">Connect</h4>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] flex items-center gap-1 hover:opacity-70 transition-opacity">
                x.com <ArrowUpRight size={14} className="text-[#051A24]/40" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base text-[#051A24] flex items-center gap-1 hover:opacity-70 transition-opacity">
                LinkedIn <ArrowUpRight size={14} className="text-[#051A24]/40" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
