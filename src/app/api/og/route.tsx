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

    // Configuration based on theme
    const isDark = ['luxury', 'goldclassic', 'rolex', 'milliy', 'premium-3d', 'luxury-dark', 'shadcn-animated'].includes(theme);
    const isGold = ['gold-white', 'gold-classic-white', 'white-gold-3d', 'goldclassic', 'rolex'].includes(theme);
    const isPink = ['pink-flower', 'pink-white', 'pink-luxury', 'floral-pearl', 'floral'].includes(theme);

    if (isDark) {
      styleConfig = {
        bg: theme === 'milliy' ? '#003366' : '#0A0A0A',
        accent: theme === 'milliy' || isGold ? '#FFD700' : '#E11D48',
        text: 'white',
        subtext: theme === 'milliy' ? '#B0C4DE' : '#9CA3AF',
        gradient: theme === 'milliy' 
          ? 'radial-gradient(circle at 50% 50%, #004080 0%, transparent 80%)' 
          : `radial-gradient(circle at 50% 50%, ${isGold ? '#D4AF37' : '#E11D48'}20 0%, transparent 80%)`,
        border: theme === 'milliy' ? '#00264d' : '#141416',
        ornament: isGold ? 'rgba(212, 175, 55, 0.1)' : 'rgba(225, 29, 72, 0.1)',
        label: theme.includes('Premium') ? "Premium Nikoh Taklifnomasi" : "Nikoh To'yi Taklifnomasi"
      };
    } else {
      // Light Themes (Pink, Flower, White Gold, etc)
      styleConfig = {
        bg: '#FFFFFF',
        accent: isPink ? '#E11D48' : '#D4AF37',
        text: '#1A1A1A',
        subtext: '#6B7280',
        gradient: isPink 
          ? 'radial-gradient(circle at 50% 50%, #FFE4E6 0%, transparent 80%)' 
          : 'radial-gradient(circle at 50% 50%, #FAF3E0 0%, transparent 80%)',
        border: '#F3F4F6',
        ornament: isPink ? 'rgba(225, 29, 72, 0.05)' : 'rgba(212, 175, 55, 0.1)',
        label: "Nikoh To'yi Taklifnomasi"
      };
    }

    return new ImageResponse(
      (
          {/* Main Container - Floral Background Mimic */}
          <div
            style={{
              display: 'flex',
              height: '100%',
              width: '100%',
              backgroundColor: isPink ? '#FCE4EC' : styleConfig.bg,
              backgroundImage: isPink 
                ? 'radial-gradient(circle at 10% 10%, #F8BBD0 0%, transparent 20%), radial-gradient(circle at 90% 90%, #F8BBD0 0%, transparent 20%), radial-gradient(circle at 50% 50%, #FCE4EC 0%, #F8BBD0 100%)' 
                : styleConfig.gradient,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* The Central Card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                padding: '60px 80px',
                borderRadius: '40px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                width: '700px',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            >
              {/* Circular Logo Initials */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '150px',
                  height: '150px',
                  borderRadius: '100px',
                  border: `2px solid ${isPink ? '#E11D48' : styleConfig.accent}`,
                  marginBottom: '40px',
                  color: isPink ? '#E11D48' : styleConfig.accent,
                  fontSize: '60px',
                  fontFamily: 'serif',
                  opacity: 0.3,
                }}
              >
                {groom[0]}&{bride[0]}
              </div>

              {/* Names */}
              <div
                style={{
                  display: 'flex',
                  fontSize: '70px',
                  fontWeight: 900,
                  color: '#1A1A1A',
                  textAlign: 'center',
                  marginBottom: '10px',
                  fontFamily: 'serif',
                }}
              >
                <span style={{ color: '#1A1A1A' }}>{groom}</span>
                <span style={{ color: isPink ? '#E11D48' : styleConfig.accent, margin: '0 20px' }}>&</span>
                <span style={{ color: isPink ? '#E11D48' : '#1A1A1A' }}>{bride}</span>
              </div>

              {/* Tagline */}
              <div
                style={{
                  fontSize: '28px',
                  color: '#4B5563',
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                Siz uchun maxsus taklifnoma
              </div>

              {/* Date */}
              <div
                style={{
                  display: 'flex',
                  padding: '12px 30px',
                  background: isPink ? 'linear-gradient(to right, #E11D48, #FF4D94)' : styleConfig.accent,
                  borderRadius: '100px',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 800,
                }}
              >
                {date}
              </div>
            </div>

            {/* Site Logo Watermark */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: isPink ? '#E11D48' : styleConfig.accent,
                fontSize: '24px',
                fontWeight: 900,
                letterSpacing: '0.2em',
                opacity: 0.2,
              }}
            >
              TAKLIFNOMA.ASIA
            </div>
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
