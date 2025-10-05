import React, { useState, useEffect } from 'react';
import isasLogo from '../assets/22e75610c3a946444f55eb83e3c3444cbfc62469.png';
import sipfLogo from '../assets/dc27718dc48aedf9e62fdd3712da801632bf1f39.png';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function NavBar({ currentPage, onNavigate }: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'places', label: 'Journal' },
    { id: 'handoff', label: 'Reference' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-md border-b shadow-sm' 
          : 'backdrop-blur-sm border-b border-transparent'
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.1)',
        borderColor: isScrolled ? 'var(--border)' : 'rgba(255, 255, 255, 0.2)',
        boxShadow: isScrolled ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="w-full px-4 md:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Experience Title, Flags & Logos - Left Aligned */}
          <div className="flex items-center gap-4 nav-left" style={{ opacity: '0.9' }}>
            {/* Globe Home Icon - Mobile Only */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className="brand-home-icon"
              aria-label="Go to Home"
              title="Home"
              style={{
                color: isScrolled ? 'var(--navy)' : 'rgba(255, 255, 255, 0.95)'
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.02a15.9 15.9 0 00-.74-4.02 8.03 8.03 0 013.76 4.02zM12 4c.93 0 2.52 2.24 3.03 6H8.97C9.48 6.24 11.07 4 12 4zM8.05 6.98A15.9 15.9 0 007.09 11H4.07a8.03 8.03 0 014-4.02zM4.07 13h3.02c.18 1.39.51 2.77.98 4.02A8.03 8.03 0 014.07 13zM12 20c-.93 0-2.52-2.24-3.03-6h6.06C14.52 17.76 12.93 20 12 20zm3.95-2.98c.47-1.25.8-2.63.98-4.02h3.02a8.03 8.03 0 01-4 4.02z"/>
              </svg>
            </a>

            {/* The India Experience Title - Desktop/Tablet Only */}
            <button
              onClick={() => onNavigate('home')}
              className={`brand-text font-medium transition-all duration-300 hidden sm:block hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-sm px-3 py-2 ${
                isScrolled ? 'hover:bg-[var(--navy)]/10 hover:text-[var(--navy)]' : 'hover:bg-white/20 hover:text-white'
              }`}
              style={{
                color: isScrolled ? 'var(--text)' : 'rgba(255, 255, 255, 0.95)',
                letterSpacing: '0.5px',
                fontSize: 'var(--body)',
                textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.4)',
                fontStyle: 'normal'
              }}
            >
              The India Experience
            </button>
            
            {/* Divider after title */}
            <div 
              className="w-px h-6 hidden sm:block" 
              style={{ 
                backgroundColor: isScrolled ? 'var(--divider-color)' : 'rgba(255, 255, 255, 0.3)' 
              }} 
            />
            
            {/* Flags */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('pretrip')}
                className="flag-sg flex items-center transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-sm p-1"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}
                aria-label="Singapore Pre-Trip Preparation"
              >
                <span className="text-xl" style={{ fontStyle: 'normal' }}>🇸🇬</span>
              </button>

              <button
                onClick={() => onNavigate('indiainfo')}
                className="flag-in flex items-center transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-sm p-1"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}
                aria-label="About India"
              >
                <span className="text-xl" style={{ fontStyle: 'normal' }}>🇮🇳</span>
              </button>

              <div
                className="w-px h-6 mx-2"
                style={{
                  backgroundColor: isScrolled ? 'var(--divider-color)' : 'rgba(255, 255, 255, 0.3)'
                }}
              />

              <div className="partner-logos flex items-center gap-3">
                <a 
                  href="https://www.isas.nus.edu.sg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-sm" 
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}
                  aria-label="Visit ISAS - Institute of South Asian Studies website"
                >
                  <img 
                    src={isasLogo} 
                    alt="ISAS - Institute of South Asian Studies"
                    className="h-5 w-auto transition-opacity duration-300"
                    style={{ 
                      opacity: isScrolled ? '0.7' : '0.9',
                      filter: isScrolled ? 'none' : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))'
                    }}
                  />
                </a>
                
                <div 
                  className="w-px h-4" 
                  style={{ 
                    backgroundColor: isScrolled ? 'var(--divider-color)' : 'rgba(255, 255, 255, 0.3)' 
                  }} 
                />
                
                <a 
                  href="https://www.facebook.com/p/Singapore-India-Partnership-Foundation-61554203843763/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-sm" 
                  style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}
                  aria-label="Visit SIPF - Singapore India Partnership Foundation Facebook page"
                >
                  <img 
                    src={sipfLogo} 
                    alt="SIPF - Singapore India Partnership Foundation"
                    className="h-5 w-auto transition-opacity duration-300"
                    style={{ 
                      opacity: isScrolled ? '0.7' : '0.9',
                      filter: isScrolled ? 'none' : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))'
                    }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-sm px-3 py-2 caption ${
                  currentPage === item.id 
                    ? (isScrolled ? 'bg-[var(--navy)]/10 text-[var(--navy)]' : 'bg-white/20 text-white') 
                    : (isScrolled ? 'hover:bg-[var(--navy)]/10 text-[var(--text)] hover:text-[var(--navy)]' : 'hover:bg-white/20 text-white/90 hover:text-white')
                }`}
                style={{ 
                  letterSpacing: '0.5px',
                  fontSize: 'var(--body)',
                  textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.4)'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden nav-menu-toggle">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-[var(--subtle)] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{
                color: isScrolled ? 'var(--text)' : 'rgba(255, 255, 255, 0.9)',
                textShadow: isScrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.5)'
              }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden border-t backdrop-blur-md" 
            style={{ 
              borderColor: 'var(--border)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)'
            }}
          >
            <div className="py-4 space-y-4" style={{ padding: '16px' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ui-text ${
                    currentPage === item.id 
                      ? 'bg-[var(--saffron)]/10 border-l-2' 
                      : 'hover:bg-[var(--subtle)]'
                  }`}
                  style={{
                    fontSize: 'var(--body)',
                    padding: '12px 16px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    borderLeftColor: currentPage === item.id ? 'var(--saffron)' : 'transparent',
                    color: currentPage === item.id ? 'var(--navy)' : 'var(--text)',
                    textAlign: 'left'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}