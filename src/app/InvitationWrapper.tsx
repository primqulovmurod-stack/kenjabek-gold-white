'use client';

import React, { useState, useEffect } from 'react';
import RolexLuxuryInvitation from '@/components/RolexLuxuryInvitation';
import PinkLuxuryInvitation from '@/components/PinkLuxuryInvitation';
import WatchDesignInvitation from '@/components/WatchDesignInvitation';
import GoldClassicInvitation from '@/components/GoldClassicInvitation';
import GoldWhiteInvitation from '@/components/GoldWhiteInvitation';
import PinkWhiteInvitation from '@/components/PinkWhiteInvitation';
import PremiumPinkFloralInvitation from '@/components/PremiumPinkFloralInvitation';
import WaxSealInvitation from '@/components/WaxSealInvitation';
import RoyalGoldInvitation from '@/components/RoyalGoldInvitation';
import PinterestFloralInvitation from '@/components/PinterestFloralInvitation';
import MasterpieceInvitation from '@/components/MasterpieceInvitation';
import ModernMobileInvitation from '@/components/ModernMobileInvitation';

interface InvitationWrapperProps {
  initialHost: string;
}

export default function InvitationWrapper({ initialHost }: InvitationWrapperProps) {
  const [mounted, setMounted] = useState(false);
  // Improved detection
  const hostLower = initialHost.toLowerCase();
  const isXurshid = hostLower.includes('xurshid') || hostLower.includes('mohinur') || hostLower.includes('rolex') || hostLower.includes('watch');
  
  const [theme, setTheme] = useState<'rolex' | 'pink' | 'watch' | 'goldclassic' | 'goldwhite' | 'premium-pink' | 'wax-seal' | 'royal-gold' | 'pinterest-floral' | 'masterpiece' | 'modern-mobile'>(() => {
    if (hostLower.includes('modern') || hostLower.includes('localhost')) return 'modern-mobile';
    if (hostLower.includes('master')) return 'masterpiece';
    if (hostLower.includes('watch')) return 'watch';
    if (hostLower.includes('goldclassic')) return 'goldclassic';
    if (hostLower.includes('goldwhite') || hostLower.includes('white')) return 'goldwhite';
    if (hostLower.includes('rolex')) return 'rolex';
    if (hostLower.includes('premium')) return 'premium-pink';
    if (hostLower.includes('stamp') || hostLower.includes('seal')) return 'wax-seal';
    if (hostLower.includes('royal')) return 'royal-gold';
    if (hostLower.includes('pinterest') || hostLower.includes('george')) return 'pinterest-floral';
    if (isXurshid) return 'rolex'; // default to rolex theme for Xurshid if no specific keyword
    if (hostLower.includes('localhost')) return 'pinterest-floral'; // Default to Pinterest design locally
    return 'pink';
  });

  useEffect(() => {
    setMounted(true);
    const search = window.location.search.replace(/%3D/gi, '=').toLowerCase();
    const params = new URLSearchParams(search);
    const themeParam = params.get('theme');
    const windowHost = window.location.hostname.toLowerCase();
    const isXurshidHost = windowHost.includes('xurshid') || windowHost.includes('mohinur') || windowHost.includes('rolex') || windowHost.includes('watch');
    
    if (themeParam === 'rolex' || (windowHost.includes('rolex') && isXurshidHost)) {
      setTheme('rolex');
    } else if (themeParam === 'modern' || themeParam === 'app-style' || windowHost.includes('localhost')) {
      setTheme('modern-mobile');
    } else if (themeParam === 'master' || themeParam === 'masterpiece') {
      setTheme('masterpiece');
    } else if (themeParam === 'pinterest' || themeParam === 'floral-3d' || windowHost.includes('pinterest')) {
      setTheme('pinterest-floral');
    } else if (themeParam === 'royal' || themeParam === 'royal-gold' || windowHost.includes('royal')) {
      setTheme('royal-gold');
    } else if (themeParam === 'stamp' || themeParam === 'wax-seal' || windowHost.includes('stamp')) {
      setTheme('wax-seal');
    } else if (themeParam === 'premium' || themeParam === 'premium-pink' || windowHost.includes('premium')) {
      setTheme('premium-pink');
    } else if (themeParam === 'pink-luxury' || (windowHost.includes('pink') && isXurshidHost)) {
      setTheme('rolex'); // We'll handle pink luxury separately in the return
    } else if (themeParam === 'watch' || windowHost.includes('watch')) {
      setTheme('watch');
    } else if (themeParam === 'goldwhite' || windowHost.includes('goldwhite') || windowHost.includes('gold-white') || windowHost.includes('white')) {
      setTheme('goldwhite');
    } else if (themeParam === 'goldclassic' || windowHost.includes('goldclassic')) {
      setTheme('goldclassic');
    } else if (themeParam === 'pink' || (windowHost.includes('pink') && !isXurshidHost)) {
      setTheme('pink');
    } else if (windowHost.includes('localhost')) {
      setTheme('pinterest-floral');
    } else {
      setTheme('pink');
    }
  }, []);

  if (!mounted) return null;

  // FORCE FOR LOCAL COPY
  const isLocal = typeof window !== 'undefined' && window.location.hostname.includes('localhost');
  
  let content;
  if (isLocal) {
    content = (
      <ModernMobileInvitation 
        groomName="Murod"
        brideName="Odina"
        date="24 - APREL - 2026"
        time="19:00"
        locationName="Oqsaroy Koshonasi"
        locationAddress="Jizzax Shahar"
        locationUrl="https://maps.google.com"
        musicUrl="/assets/die_with_a_smile.mp3"
        cardNumber="8600 1234 5678 9012"
        cardName="Murod Primqulov"
      />
    );
  } else if (isXurshid) {
    if (hostLower.includes('pink') || theme === 'pink') {
      content = <PinkLuxuryInvitation groomName="Xurshidbek" brideName="Mohinur" />;
    } else {
      content = <RolexLuxuryInvitation groomName="Xurshidbek" brideName="Mohinur" />;
    }
  } else if (theme === 'pink' || hostLower.includes('pink')) {
    content = (
      <PinkLuxuryInvitation 
        groomName="Kenjabek"
        brideName="Safiya"
        date="2026-04-24"
        time="19:00"
        locationName="Demir (Asr)"
        locationAddress="Jizzax Shahar"
        locationUrl="https://www.google.com/maps/place/ASR+Wedding+Hall/@40.1490597,67.8229612,20.75z/data=!4m6!3m5!1s0x38b2969244164953:0xcf441bf7b030ea16!8m2!3d40.1490952!4d67.8228464!16s%2Fg%2F11h9w32rg7!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
        imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
        musicUrl="/assets/die_with_a_smile.mp3"
      />
    );
  } else if (theme === 'rolex' || hostLower.includes('rolex')) {
    content = <RolexLuxuryInvitation groomName="Xurshidbek" brideName="Mohinur" />;
  } else if (theme === 'watch') {
    content = (
      <div className="bg-black">
        <WatchDesignInvitation 
          groomName="Xurshid"
          brideName="Mohinur"
          date="20 Iyun 2026"
          time="18:00"
          locationName="Oqsaroy Koshonasi"
          locationAddress="Sho'rchi tumani"
          imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
          musicUrl="/assets/die_with_a_smile.mp3"
        />
      </div>
    );
  } else if (theme === 'goldclassic') {
    content = (
      <GoldClassicInvitation 
        groomName="Kenjabek"
        brideName="Safiya"
        date="24 - APREL - 2026"
        time="19:00"
        locationName="Demir (Asr)"
        locationAddress="Jizzax Shahar"
        locationUrl="https://www.google.com/maps/place/ASR+Wedding+Hall/@40.1490597,67.8229612,20.75z/data=!4m6!3m5!1s0x38b2969244164953:0xcf441bf7b030ea16!8m2!3d40.1490952!4d67.8228464!16s%2Fg%2F11h9w32rg7!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
        imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
        musicUrl="/assets/die_with_a_smile.mp3"
        cardName="Kenjabek"
      />
    );
  } else if (theme === 'goldwhite') {
    content = (
      <GoldWhiteInvitation 
        groomName="Kenjabek"
        brideName="Snejana"
        date="24 - АПРЕЛЬ - 2026, ПЯТНИЦА"
        time="19:00"
        locationName="Demir (Asr)"
        locationAddress="Jizzax Shahar"
        locationUrl="https://www.google.com/maps/place/ASR+Wedding+Hall/@40.1490112,67.822955,20.25z/data=!4m6!3m5!1s0x38b2969244164953:0xcf441bf7b030ea16!8m2!3d40.1490952!4d67.8228464!16s%2Fg%2F11h9w32rg7!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
        imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
        musicUrl="/assets/die_with_a_smile.mp3"
        cardName="Kenjabek"
      />
    );
  } else if (theme === 'modern-mobile') {
    content = (
      <ModernMobileInvitation 
        groomName="Murod"
        brideName="Odina"
        date="24 - APREL - 2026"
        time="19:00"
        locationName="Oqsaroy Koshonasi"
        locationAddress="Jizzax Shahar"
        locationUrl="https://maps.google.com"
      />
    );
  } else {
    content = (
      <div className="bg-[#f8f8f8]">
        <RolexLuxuryInvitation 
          groomName="Xurshidbek"
          brideName="Mohinur"
          date="20 Iyun 2026"
          time="18:00"
          locationName="Oqsaroy Koshonasi"
          locationAddress="Surxondaryo viloyati, Sho'rchi tumani"
          imageUrl="https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg"
          musicUrl="/assets/die_with_a_smile.mp3"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {content}
      </div>
    </div>
  );
}

