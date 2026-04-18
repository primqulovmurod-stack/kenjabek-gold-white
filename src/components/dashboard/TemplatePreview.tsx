'use client';

import React from 'react';
import { InvitationContent } from '@/lib/types';
import GoldWhiteInvitation from '@/components/GoldWhiteInvitation';
import { FloralInvitation } from '@/components/FloralInvitation';
import GoldClassicInvitation from '@/components/GoldClassicInvitation';
import GoldClassicWhiteInvitation from '@/components/GoldClassicWhiteInvitation';
import RolexLuxuryInvitation from '@/components/RolexLuxuryInvitation';
import MilliyInvitation from '@/components/MilliyInvitation';
import WatchDesignInvitation from '@/components/WatchDesignInvitation';
import PinkLuxuryInvitation from '@/components/PinkLuxuryInvitation';
import { ElegantInvitation } from '@/components/ElegantInvitation';
import LuxuryDarkInvitation from '@/components/LuxuryDarkInvitation';
import PinkWhiteInvitation from '@/components/PinkWhiteInvitation';
import StitchInvitation from '@/components/StitchInvitation/Main';
import Premium3DInvitation from '@/components/Premium3DInvitation';
import ShadcnAnimatedInvitation from '@/components/ShadcnAnimatedInvitation';
import WhiteGold3DInvitation from '@/components/WhiteGold3DInvitation';
import FloralPearlInvitation from '@/components/FloralPearlInvitation';




export const templates = [
  { 
    id: 'pink-flower', 
    name: 'Pink Flower', 
    image: '/assets/pink_invite_mockup.png',
    style: 'Modern & Soft'
  },
  { 
    id: 'goldclassic', 
    name: 'Gold Classic Black', 
    image: 'https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg',
    style: 'Gold & Black'
  },
  { 
    id: 'gold-classic-white', 
    name: 'Gold Classic White', 
    image: 'https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    style: 'Gold & White'
  },
  { 
    id: 'premium-3d', 
    name: 'Premium 3D (NEW)', 
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop',
    style: '3D & Animated'
  },
  { 
    id: 'shadcn-animated', 
    name: 'Shadcn Luxury', 
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
    style: 'Clean & Animated'
  },
  { 
    id: 'white-gold-3d', 
    name: 'White Gold 3D', 
    image: 'https://images.unsplash.com/photo-1544924405-4c0787b4a240?q=80&w=2070&auto=format&fit=crop',
    style: 'Premium Paper-Cut'
  },
  { 
    id: 'floral-pearl', 
    name: 'Floral Pearl (NEW)', 
    image: '/assets/floral-pearl.png',
    style: 'Luxury Floral'
  }
];




interface TemplatePreviewProps {
  content: InvitationContent;
  cardName?: string;
  isPreview?: boolean;
  isMuted?: boolean;
}

export default function TemplatePreview({ content, isPreview, isMuted }: TemplatePreviewProps) {
  const theme = content.theme || 'pink-flower';

  switch (theme) {
    case 'pink-flower':
    case 'pink-white': // Map legacy pink to the new luxury design
        return <PinkLuxuryInvitation {...content} isPreview={isPreview} isMuted={isMuted} />;
    case 'gold-white': // Map legacy gold-white to the new luxury pink if requested (based on user migration)
    case 'gold-classic-white':
        // If the user specifically wants the new Pink design, we'll give it to them here 
        // as per the migration logic in the Edit page.
        if (content.theme === 'pink-luxury' || content.theme === 'pink-white') {
           return <PinkLuxuryInvitation {...content} isPreview={isPreview} isMuted={isMuted} />;
        }
        return <GoldWhiteInvitation {...content} isPreview={isPreview} isMuted={isMuted} />;
    case 'floral':
      return <FloralInvitation content={content} isPreview={isPreview} />;
    case 'goldclassic':
        return <GoldClassicInvitation {...content} isPreview={isPreview} isMuted={isMuted} />;
    case 'rolex':
        return <RolexLuxuryInvitation {...content} isPreview={isPreview} />;
    case 'milliy':
        return <MilliyInvitation {...content} isPreview={isPreview} />;
    case 'watch-design':
        return <WatchDesignInvitation {...content} isPreview={isPreview} />;
    case 'elegant':
        return <ElegantInvitation content={content} isPreview={isPreview} />;
    case 'luxury-dark':
        return <LuxuryDarkInvitation {...content} isPreview={isPreview} />;
    case 'stitch':
        return <StitchInvitation isPreview={isPreview} />;
    case 'premium-3d':
        return <Premium3DInvitation {...content} isPreview={isPreview} isMuted={isMuted} />;
    case 'shadcn-animated':
        return <ShadcnAnimatedInvitation content={content} />;
    case 'white-gold-3d':
        return <WhiteGold3DInvitation content={content} />;
    case 'floral-pearl':
        return <FloralPearlInvitation {...content} isPreview={isPreview} isMuted={isMuted} />;
    default:



      return <PinkLuxuryInvitation {...content} isPreview={isPreview} isMuted={isMuted} />;
  }
}
