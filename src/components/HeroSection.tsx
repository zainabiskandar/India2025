import React from 'react';

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

      {/* Minimal Bottom Fade for Text Readability */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: `linear-gradient(to top, 
            rgba(0, 0, 0, 0.3) 0%, 
            rgba(0, 0, 0, 0.1) 50%, 
            transparent 100%
          )`
        }}
      />



      {/* Central Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main Title - Just "India" - Reduced by 20% */}
        <h1 
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.2rem, 9.6vw, 6.4rem)',
            lineHeight: '0.9',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 0.98)',
            letterSpacing: '0.02em',
            textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            marginBottom: 'clamp(1.5rem, 3vw, 3rem)'
          }}
        >
          India
        </h1>

        {/* New Subtitle */}
        <p 
          style={{
            fontFamily: "'Work Sans', system-ui, sans-serif",
            fontSize: 'clamp(16px, 2.2vw, 18px)',
            lineHeight: '1.6',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
          }}
        >
          Reflections from a participant on the India Experience program organized by Singapore-India Partnership Foundation and Institute of South Asian Studies.
        </p>
      </div>


    </section>
  );
}