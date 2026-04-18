import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Get parameters
    const groom = searchParams.get('groom') || 'Kuyov';
    const bride = searchParams.get('bride') || 'Kelin';
    const date = searchParams.get('date') || '2026';
    const theme = searchParams.get('theme') || 'luxury';

    const isDark = ['luxury', 'goldclassic', 'rolex', 'milliy', 'premium-3d', 'luxury-dark', 'shadcn-animated', 'black-gold', 'dark-luxury'].includes(theme);
    const isGold = ['gold-white', 'gold-classic-white', 'white-gold-3d', 'goldclassic', 'rolex', 'black-gold'].includes(theme);
    const isPink = ['pink-flower', 'pink-white', 'pink-luxury', 'floral-pearl', 'floral'].includes(theme);

    const styleConfig = isDark ? {
        bg: theme === 'milliy' ? '#003366' : '#0A0A0A',
        accent: isGold ? '#D4AF37' : '#E11D48',
        text: 'white',
        subtext: '#9CA3AF',
        gradient: `radial-gradient(circle at 50% 50%, ${isGold ? '#D4AF37' : '#E11D48'}20 0%, transparent 80%)`,
        label: "NIKOH TO'YI TAKLIFNOMASI"
    } : {
        bg: '#FFF0F3',
        accent: isPink ? '#E11D48' : '#D4AF37',
        text: '#1A1A1A',
        subtext: '#6B7280',
        gradient: isPink 
          ? 'radial-gradient(circle at center, #FFE4E6 0%, #FFF0F3 100%)' 
          : 'radial-gradient(circle at 50% 50%, #FAF3E0 0%, transparent 80%)',
        label: "Nikoh To'yi Taklifnomasi"
    };

    return new ImageResponse(
      (
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              backgroundColor: isDark ? '#0A0A0A' : '#FFF5F7',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              flexDirection: 'column',
            }}
          >
            {/* The Professional Mockup Background Layer */}
            {isPink ? (
              <img 
                src="https://www.taklifnoma.asia/assets/pink_invite_mockup.png"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '1200px',
                  height: '630px',
                  objectFit: 'cover',
                }}
                alt="Mockup BG"
              />
            ) : isDark ? (
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at center, #1A1A1A 0%, #000000 100%)',
                }}
              />
            ) : (
                <img 
                src="https://www.taklifnoma.asia/assets/floral-pearl.png"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '1200px',
                  height: '630px',
                  objectFit: 'cover',
                }}
                alt="Floral BG"
              />
            )}

            {/* THE EXACT WHITE CARD FROM SCREENSHOT (18:50) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '45px 50px',
                borderRadius: '60px',
                width: '600px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.15)',
                position: 'relative',
              }}
            >
              {/* Initials Circle (Purpleish Border) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '160px',
                  height: '160px',
                  borderRadius: '100px',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  background: 'linear-gradient(135deg, rgba(250, 245, 255, 1) 0%, rgba(245, 243, 255, 1) 100%)',
                  marginBottom: '30px',
                  color: '#A855F7',
                  fontSize: '64px',
                  fontFamily: 'serif',
                  fontStyle: 'italic',
                  position: 'relative',
                }}
              >
                {/* Visual stars / decor signs in screenshot */}
                <div style={{ position: 'absolute', top: '15px', fontSize: '12px', opacity: 0.4 }}>✦</div>
                <div style={{ position: 'absolute', bottom: '15px', fontSize: '12px', opacity: 0.4 }}>✦</div>
                {groom[0]}&{bride[0]}
              </div>

              {/* Bold Bi-Color Names */}
              <div style={{ display: 'flex', fontSize: '46px', fontWeight: '900', color: '#000000', textAlign: 'center', marginBottom: '10px' }}>
                {groom} <span style={{ color: '#D946EF', margin: '0 8px' }}>&</span> <span style={{ color: '#D946EF' }}>{bride}</span>
              </div>

              {/* Tagline */}
              <div style={{ fontSize: '22px', color: '#111827', fontWeight: 'bold', marginBottom: '8px' }}>
                Siz uchun maxsus taklifnoma
              </div>

              <div style={{ fontSize: '14px', color: '#6B7280', textAlign: 'center', marginBottom: '35px', maxWidth: '300px', lineHeight: '1.4' }}>
                Taklifnoma tafsilotlarini ko'rish uchun bosing.
              </div>

              {/* REPLICATING THE VIBRANT PURPLE-PINK BUTTON */}
              <div
                style={{
                  display: 'flex',
                  padding: '24px 75px',
                  background: 'linear-gradient(to right, #9333EA, #DB2777)',
                  borderRadius: '100px',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  boxShadow: '0 15px 35px rgba(147, 51, 234, 0.35)',
                }}
              >
                Taklifnomani ochish →
              </div>
            </div>
            
            {/* Added Wax Seal bottom right for extra premium feel (from the BG image area) */}
             <img 
               src="https://www.taklifnoma.asia/assets/gold-wax-seal.png"
               style={{
                 position: 'absolute',
                 bottom: '80px',
                 right: '120px',
                 width: '130px',
                 height: '130px',
                 transform: 'rotate(15deg)',
                 opacity: 0.85,
                 filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
               }}
               alt="Seal"
             />
          </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      }
    );
  } catch (e: any) {
    console.error('OG Image Error:', e.message);
    // Fallback to a plain response if it fails
    return new Response(`Error generating image`, { status: 500 });
  }
}
