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
    default:
      return <PinkLuxuryInvitation {...content} isPreview={isPreview} isMuted={isMuted} />;
  }
}
