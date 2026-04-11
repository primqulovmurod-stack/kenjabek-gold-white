'use client';

import PinkLuxuryInvitation from '@/components/PinkLuxuryInvitation';

export default function TestPinkPage() {
  return (
    <PinkLuxuryInvitation 
      groomName="Kenjabek"
      brideName="Safiya"
      date="2026-05-15"
      time="18:30"
      locationName="Grand Ballroom"
      locationAddress="Toshkent shahri, Mustaqillik ko'chasi, 5-uy"
      locationUrl="https://maps.google.com"
      description="Sizlarni bizning baxtli kunimizda ko'rishdan mamnunmiz!"
      showGift={true}
      cardNumber="8600 1234 5678 9012"
      cardName="Kenjabek R."
      musicUrl="/assets/die_with_a_smile.mp3"
    />
  );
}
