import { ImageResponse } from 'next/og';

import { BUSINESS } from '@/lib/business';
export const alt = 'Fairweight — We Buy & Sell Gold & Silver | Mobile, DMV';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'radial-gradient(120% 90% at 50% 0%, #2a2114 0%, #15110a 55%, #0e0b06 100%)',
          color: '#F4EEDC',
          fontFamily: 'serif',
          padding: '60px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '2px solid #D8B23F',
            marginBottom: 28,
            color: '#D8B23F',
            fontSize: 52,
            fontWeight: 700,
            letterSpacing: 2,
          }}
        >
          FW
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: 8,
            color: '#D8B23F',
          }}
        >
          FAIRWEIGHT
        </div>
        <div
          style={{
            fontSize: 30,
            letterSpacing: 6,
            color: '#9b8a5f',
            marginTop: 6,
            textTransform: 'uppercase',
          }}
        >
          Honest Weight · Fair Dealings
        </div>
        <div style={{ display: 'flex', gap: 14, fontSize: 56, marginTop: 40, color: '#F4EEDC' }}>
          <span>We Buy &amp; Sell</span>
          <span style={{ color: '#E7C75A' }}>Gold &amp; Silver</span>
        </div>
        <div style={{ fontSize: 30, marginTop: 22, color: '#cdbf9c' }}>
          {`Mobile · Serving Maryland & the DMV · ${BUSINESS.phone.display}`}
        </div>
      </div>
    ),
    { ...size }
  );
}
