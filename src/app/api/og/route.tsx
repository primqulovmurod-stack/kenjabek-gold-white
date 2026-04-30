import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const groom = searchParams.get('groom') || 'Kuyov';
    const bride = searchParams.get('bride') || 'Kelin';
    const date = searchParams.get('date') || '2026';
    const theme = searchParams.get('theme') || 'luxury';

    const isDark = ['luxury', 'goldclassic', 'rolex', 'milliy', 'premium-3d', 'luxury-dark', 'shadcn-animated', 'black-gold', 'dark-luxury'].includes(theme);

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isDark ? '#0A0A0A' : '#FFF5F7',
            position: 'relative',
          }}
        >
          {/* Background Image */}
          <img 
            src="https://www.taklifnoma.asia/assets/wedding-bg-new.jpg"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1200px',
              height: '630px',
              objectFit: 'cover',
              opacity: isDark ? 0.4 : 1,
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)',
              padding: '60px',
              borderRadius: '40px',
              border: isDark ? '2px solid #E11D48' : '2px solid #9333EA',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{ fontSize: '30px', color: isDark ? '#E11D48' : '#9333EA', marginBottom: '20px', fontWeight: 'bold' }}>
              Taklifnoma.Asia
            </div>
            
            <div style={{ fontSize: '80px', fontWeight: 'bold', color: isDark ? 'white' : '#111827', marginBottom: '10px' }}>
              {groom} & {bride}
            </div>

            <div style={{ fontSize: '32px', color: isDark ? '#9CA3AF' : '#1F2937', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
              NIKOH TO'YI TAKLIFNOMASI
            </div>

            <div style={{ fontSize: '24px', color: isDark ? 'white' : '#111827', backgroundColor: isDark ? '#E11D48' : '#9333EA', padding: '10px 30px', borderRadius: '50px' }}>
              {date}
            </div>
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
    return new Response(`Error: ${e.message}`, { status: 500 });
  }
}
