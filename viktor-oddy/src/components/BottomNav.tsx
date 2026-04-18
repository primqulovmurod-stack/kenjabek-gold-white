import React from 'react';
import Button from './Button';

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full px-8 py-2 flex items-center gap-6 shadow-secondary border border-black/5">
      <span className="font-mondwest text-2xl font-semibold text-[#051A24]">V</span>
      <Button variant="primary" className="py-2.5 px-6 whitespace-nowrap">
        Start a chat
      </Button>
    </nav>
  );
};

export default BottomNav;
