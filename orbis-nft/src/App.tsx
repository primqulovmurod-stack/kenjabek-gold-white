import React from 'react';
import { Mail, ChevronRight } from 'lucide-react';

const Github = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Twitter = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);


const Navbar = () => (
  <nav className="hidden lg:block fixed top-8 left-1/2 -translate-x-1/2 z-40">
    <div className="liquid-glass rounded-[28px] px-[52px] py-[24px] flex gap-12 items-center">
      {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((link) => (
        <a
          key={link}
          href="#"
          className="font-grotesk text-[13px] uppercase tracking-wider hover:text-neon transition-colors duration-300"
        >
          {link}
        </a>
      ))}
    </div>
  </nav>
);

const SocialIcons = ({ mobile = false }) => (
  <div className={`flex flex-col gap-4 ${mobile ? 'lg:hidden items-center mt-12' : 'hidden lg:flex fixed top-8 right-8 z-40'}`}>
    {[Mail, Twitter, Github].map((Icon, i) => (
      <button
        key={i}
        className="w-[56px] h-[56px] liquid-glass rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
      >
        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    ))}
  </div>
);

const NFTCard = ({ video, score }: { video: string; score: string }) => (
  <div className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-all duration-500 group">
    <div className="relative pb-[100%] rounded-[24px] overflow-hidden mb-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
    <div className="liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
      <div>
        <p className="text-[11px] text-cream/70 uppercase font-mono mb-1">Rarity Score:</p>
        <p className="text-[16px] font-grotesk">{score}</p>
      </div>
      <button className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  </div>
);

export default function App() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden selection:bg-neon selection:text-background">
      {/* Texture Overlay */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none mix-blend-lighten opacity-60"
        style={{ backgroundImage: 'url("/texture.png")', backgroundSize: 'cover' }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex flex-col items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-b-[32px]"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" type="video/mp4" />
        </video>
        
        <header className="relative w-full max-w-[1831px] px-6 lg:px-12 py-8 flex justify-between items-center z-10">
          <div className="font-grotesk text-[16px] uppercase tracking-tighter">Orbis.Nft</div>
          <Navbar />
          <SocialIcons />
        </header>

        <div className="relative flex-1 w-full max-w-[1831px] px-6 lg:px-12 flex flex-col justify-center z-10">
          <div className="relative lg:ml-32 max-w-[780px]">
            <h1 className="font-grotesk text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] uppercase leading-[1.05] sm:leading-[1] tracking-tight">
              Beyond earth<br />
              and ( its ) familiar boundaries
            </h1>
            <span className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-8 font-condiment text-[24px] sm:text-[32px] md:text-[48px] text-neon mix-blend-exclusion opacity-90 -rotate-1 select-none whitespace-nowrap">
              Nft collection
            </span>
          </div>
          <SocialIcons mobile />
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="relative min-h-screen w-full py-16 lg:py-24 flex flex-col items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" type="video/mp4" />
        </video>

        <div className="relative w-full max-w-[1831px] px-6 lg:px-12 flex flex-col gap-32 z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="relative">
              <h2 className="font-grotesk text-[32px] sm:text-[45px] lg:text-[60px] uppercase leading-none">
                Hello!<br />
                I'm orbis
              </h2>
              <span className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/4 font-condiment text-[36px] sm:text-[50px] lg:text-[68px] text-neon mix-blend-exclusion -rotate-1 select-none">
                Orbis
              </span>
            </div>
            <p className="font-mono text-[14px] lg:text-[16px] uppercase max-w-[266px] leading-relaxed">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[14px] uppercase opacity-10">A digital object fixed beyond time and place.</p>
              <p className="font-mono text-[14px] uppercase opacity-10">An exploration of distance, form, and silence in space.</p>
            </div>
            <div className="hidden lg:flex flex-col gap-4 text-right">
              <p className="font-mono text-[14px] uppercase opacity-10">A digital object fixed beyond time and place.</p>
              <p className="font-mono text-[14px] uppercase opacity-10">An exploration of distance, form, and silence in space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COLLECTION */}
      <section className="relative w-full py-24 bg-background flex flex-col items-center">
        <div className="w-full max-w-[1831px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-grotesk text-[32px] sm:text-[45px] lg:text-[60px] uppercase leading-none">
              Collection of<br />
              <span className="flex items-center ml-12 sm:ml-24 lg:ml-32">
                <span className="font-condiment text-neon normal-case mr-4">Space</span> objects
              </span>
            </h2>
            <button className="group flex flex-col items-end">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-grotesk text-[32px] sm:text-[45px] lg:text-[60px] uppercase">See</span>
                <span className="flex flex-col font-grotesk text-[20px] sm:text-[28px] lg:text-[36px] uppercase leading-none">
                  <span>all</span>
                  <span>creators</span>
                </span>
              </div>
              <div className="w-full h-[6px] lg:h-[10px] bg-neon group-hover:scale-x-110 transition-transform origin-right" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            <NFTCard 
              video="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4"
              score="8.7/10"
            />
            <NFTCard 
              video="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4"
              score="9/10"
            />
            <NFTCard 
              video="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4"
              score="8.2/10"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="relative w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-end z-10 px-6 lg:pr-[20%] lg:pl-[15%]">
          <div className="relative text-right flex flex-col">
            <span className="absolute -top-8 left-0 lg:-top-16 lg:-left-32 font-condiment text-[17px] sm:text-[40px] lg:text-[68px] text-neon mix-blend-exclusion select-none whitespace-nowrap">
              Go beyond
            </span>
            <h2 className="font-grotesk text-[16px] sm:text-[40px] lg:text-[60px] uppercase leading-tight">
              <span className="block mb-4 sm:mb-8 lg:mb-12">Join us.</span>
              Reveal what's hidden.<br />
              Define what's next.<br />
              Follow the signal.
            </h2>
          </div>
        </div>

        {/* Footer Socials */}
        <div className="absolute left-[8%] bottom-[12%] sm:bottom-[15%] lg:bottom-[20%] z-20">
          <div className="liquid-glass rounded-[0.5rem] sm:rounded-[1.25rem] flex flex-col overflow-hidden">
            {[Mail, Twitter, Github].map((Icon, i) => (
              <button
                key={i}
                className="w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[6vh] sm:h-[4rem] flex items-center justify-center hover:bg-white/10 transition-colors border-b border-white/10 last:border-0 group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
