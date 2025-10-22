import React, { useState, useEffect } from 'react';
import isasLogo from '../../assets/NUS ISAS Logo copy.png';
import sipfLogo from '../../assets/dc27718dc48aedf9e62fdd3712da801632bf1f39.png';
import indiaExpLogo from '../../assets/The India Experience Logo copy.png';
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
    { id: 'journal', label: 'Journal' }
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
            {/* The India Experience Logo - All Screens */}
            <button
              onClick={() => onNavigate('home')}
              className="brand-logo flex items-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-sm px-2 py-1"
              aria-label="Go to Home - The India Experience"
            >
              <img
                src={indiaExpLogo}
                alt="The India Experience"
                className="transition-opacity duration-300"
                style={{
                  height: '36px',
                  width: 'auto',
                  opacity: isScrolled ? '0.85' : '0.95',
                  filter: isScrolled ? 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))' : 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))'
                }}
              />
            </button>

            {/* Divider after logo */}
            <div
              className="w-px h-6"
              style={{
                backgroundColor: isScrolled ? 'var(--divider-color)' : 'rgba(255, 255, 255, 0.3)'
              }}
            />
            
            {/* Flags */}
            <div className="flags-container flex items-center gap-3">
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
                    className="h-7 w-auto transition-opacity duration-300"
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
                    className="h-7 w-auto transition-opacity duration-300"
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