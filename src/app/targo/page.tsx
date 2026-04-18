import TargoHero from "@/components/TargoHero";
import TargoAbout from "@/components/TargoAbout";
import TargoFAQ from "@/components/TargoFAQ";
import TargoCTA from "@/components/TargoCTA";
import TargoContact from "@/components/TargoContact";
import TargoCursor from "@/components/TargoCursor";

export default function TargoDemoPage() {
  return (
    <main className="min-h-screen bg-black relative">
      <TargoCursor />
      
      <TargoHero />
      <TargoAbout />
      <TargoCTA />
      <TargoFAQ />
      <TargoContact />
    </main>
  );
}
