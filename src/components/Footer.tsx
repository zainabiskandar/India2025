import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer 
      className="border-t mt-16"
      style={{ 
        borderColor: 'var(--border)',
        backgroundColor: 'var(--subtle)'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main footer content with full width usage */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 xl:gap-32 mb-8">
          {/* Logo & Mission */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="text-xl" style={{ fontStyle: 'normal' }}>🇸🇬</span>
              <span className="text-xl" style={{ fontStyle: 'normal' }}>🇮🇳</span>
            </div>
            <h4 className="mb-3" style={{ color: 'var(--navy)' }}>
              The India Experience 2025
            </h4>
            <p className="small" style={{ color: 'var(--muted)' }}>
              A cross-cultural learning journey fostering understanding between Singapore and India.
            </p>
            <p className="small mt-2" style={{ color: 'var(--muted)' }}>
              © 2025 Reflections by Zainab Iskandar
            </p>
          </div>

          {/* Navigation Links - Now Clickable */}
          <div className="text-center">
            <h4 className="mb-4" style={{ color: 'var(--saffron)' }}>Navigation</h4>
            <div className="space-y-3">
              <div>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="small hover:underline transition-colors duration-200 cursor-pointer"
                  style={{ 
                    color: 'var(--muted)',
                    fontStyle: 'normal',
                    background: 'none',
                    border: 'none',
                    padding: 0
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--navy)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
                >
                  About
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleNavClick('pretrip')}
                  className="small hover:underline transition-colors duration-200 cursor-pointer"
                  style={{ 
                    color: 'var(--muted)',
                    fontStyle: 'normal',
                    background: 'none',
                    border: 'none',
                    padding: 0
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--navy)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
                >
                  Pre-Trip Info
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleNavClick('places')}
                  className="small hover:underline transition-colors duration-200 cursor-pointer"
                  style={{ 
                    color: 'var(--muted)',
                    fontStyle: 'normal',
                    background: 'none',
                    border: 'none',
                    padding: 0
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--navy)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
                >
                  Journal
                </button>
              </div>
              <div>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="small hover:underline transition-colors duration-200 cursor-pointer"
                  style={{ 
                    color: 'var(--muted)',
                    fontStyle: 'normal',
                    background: 'none',
                    border: 'none',
                    padding: 0
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--navy)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
                >
                  Journal
                </button>
              </div>
            </div>
          </div>

          {/* Supported By Section */}
          <div className="text-center md:text-right">
            <h4 className="mb-4" style={{ color: 'var(--green)' }}>Supported by</h4>
            <div className="space-y-3">
              <div><span className="small" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>Institute of South Asian Studies</span></div>
              <div><span className="small" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>Singapore-India Partnership Foundation</span></div>
              <div><span className="small" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>Confederation of Indian Industry</span></div>
              <div><span className="small" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>Singapore Universities</span></div>
            </div>
          </div>
        </div>

        {/* Tamil Phrase */}
        <div className="text-center py-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="tamil mb-2">கல்வி என்பது கற்றதை மற்றவர்களுடன் பகிர்ந்து கொள்வதே</p>
          <p className="small" style={{ color: 'var(--muted)' }}>
            "Education is sharing what we learn with others"
          </p>
        </div>
      </div>
    </footer>
  );
}