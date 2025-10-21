import React from 'react';
import indiaExpLogo from '../../assets/The India Experience Logo copy.png';

export function HeroSection() {
  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden" 
      style={{ 
        height: 'clamp(600px, 100vh, 900px)', 
        minHeight: '600px'
      }}
    >
      {/* Full-Bleed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589655800451-94a58156dd41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb2ltYmF0b3JlJTIwaGlsbHMlMjBXZXN0ZXJuJTIwR2hhdHMlMjBzdW5yaXNlfGVufDF8fHx8MTc1OTY0Nzg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
        role="img"
        aria-label="Sunrise over the Western Ghats hills near Coimbatore, Tamil Nadu, with golden light illuminating misty mountain ridges"
      />

      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(0, 0, 0, 0.25)'
        }}
      />



      {/* Central Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Logo */}
        <div className="flex justify-center mb-4">
          <div
            style={{
              background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.6) 40%, transparent 70%)',
              padding: '40px 60px',
              borderRadius: '20px'
            }}
          >
            <img
              src={indiaExpLogo}
              alt="The India Experience"
              style={{
                width: 'clamp(300px, 60vw, 600px)',
                height: 'auto',
                filter: 'drop-shadow(0 8px 32px rgba(0, 0, 0, 0.4))'
              }}
            />
          </div>
        </div>

        {/* Location and Year */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '400',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'
          }}
        >
          Chennai · Coimbatore · 2025
        </p>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Work Sans', system-ui, sans-serif",
            fontSize: 'clamp(16px, 2.2vw, 18px)',
            lineHeight: '1.6',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: 'clamp(500px, 80%, 700px)',
            margin: '0 auto',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
            padding: '0 1rem'
          }}
        >
          Reflections of a participant on The India Experience programme organised by Singapore-India Partnership Foundation and NUS, Institute of South Asian Studies.
        </p>
      </div>


    </section>
  );
}