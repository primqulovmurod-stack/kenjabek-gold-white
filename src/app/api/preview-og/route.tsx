import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const groom = searchParams.get('groom') || 'Kuyov';
    const bride = searchParams.get('bride') || 'Kelin';
    const date = searchParams.get('date') || '2026';

    const baseUrl = 'https://www.taklifnoma.asia';

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
            backgroundColor: '#FFF5F7',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Image */}
          <img 
            src={`${baseUrl}/assets/wedding-bg-new.jpg`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1200px',
              height: '630px',
              objectFit: 'cover',
            }}
          />

          {/* White Card Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '60px 40px',
              borderRadius: '80px',
              width: '580px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
              position: 'relative',
            }}
          >
            {/* Initials Circle */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '150px',
                height: '150px',
                borderRadius: '100px',
                border: '2px solid #F3E8FF',
                marginBottom: '35px',
                color: '#9333EA',
                fontSize: '65px',
                fontFamily: 'serif',
                fontStyle: 'italic',
              }}
            >
              {(groom || 'K')[0].toUpperCase()}&{(bride || 'B')[0].toUpperCase()}
            </div>

            {/* Names Title */}
            <div
              style={{
                display: 'flex',
                fontSize: '52px',
                fontWeight: 'bold',
                color: '#111827',
                textAlign: 'center',
                marginBottom: '10px',
                letterSpacing: '-0.02em',
              }}
            >
              {groom} <span style={{ color: '#9333EA', margin: '0 12px' }}>&</span> <span style={{ color: '#9333EA' }}>{bride}</span>
            </div>

            {/* Subtitle 1 */}
            <div
              style={{
                fontSize: '22px',
                color: '#374151',
                fontWeight: '500',
                marginBottom: '4px',
              }}
            >
              Siz uchun maxsus taklifnoma
            </div>

            {/* Subtitle 2 */}
            <div
              style={{
                fontSize: '14px',
                color: '#9CA3AF',
                marginBottom: '45px',
              }}
            >
              Taklifnoma tafsilotlarini ko'rish uchun bosing.
            </div>

            {/* Action Button */}
            <div
              style={{
                display: 'flex',
                padding: '24px 70px',
                background: 'linear-gradient(to right, #9333EA, #EC4899)',
                borderRadius: '100px',
                color: 'white',
                fontSize: '26px',
                fontWeight: 'bold',
                boxShadow: '0 20px 40px rgba(147, 51, 234, 0.3)',
              }}
            >
              Taklifnomani ochish →
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
