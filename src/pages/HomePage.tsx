import React from 'react';
import { DayChip } from '../components/Tag';
import { HeroSection } from '../components/HeroSection';

interface HomePageProps {
  onNavigate: (page: string, day?: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // Mock data for day status
  const dayStatuses = [
    { day: 1, status: 'posted' as const },
    { day: 2, status: 'posted' as const },
    { day: 3, status: 'posted' as const },
    { day: 4, status: 'planned' as const },
    { day: 5, status: 'planned' as const },
    { day: 6, status: 'planned' as const },
    { day: 7, status: 'planned' as const },
    { day: 8, status: 'planned' as const },
    { day: 9, status: 'planned' as const },
    { day: 10, status: 'planned' as const },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Journey Overview Box */}
      <section className="flex justify-center px-4 md:px-6 mb-12 relative z-10" style={{ marginTop: '4rem' }}>
        <div 
          className="w-full max-w-4xl"
          style={{ 
            backgroundColor: 'white',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px 32px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="flex items-center gap-1">
                <span className="text-xl">🇸🇬</span>
                <div className="w-4 h-px" style={{ backgroundColor: 'var(--singapore-red)' }}></div>
                <span className="text-xl">🌏</span>
                <div className="w-4 h-px" style={{ backgroundColor: 'var(--saffron)' }}></div>
                <span className="text-xl">🇮🇳</span>
              </div>
              <h2 
                style={{ 
                  color: 'var(--navy)',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'var(--h3)',
                  fontWeight: '700'
                }}
              >
                Journey Overview
              </h2>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="status-dot status-dot-planned" />
                <span className="caption" style={{ color: 'var(--muted)' }}>Planned</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot status-dot-posted" />
                <span className="caption" style={{ color: 'var(--muted)' }}>Posted</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {dayStatuses.map(({ day, status }) => (
              <DayChip 
                key={day}
                day={day} 
                status={status}
                onClick={status === 'posted' ? () => onNavigate('post', day) : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Intro Paragraph Section */}
      <section className="container-mobile md:container-desktop mb-16" style={{ marginTop: '2rem' }}>
        <div className="text-center max-w-3xl mx-auto">
          <p
            style={{
              color: 'var(--subtitle-color)',
              marginBottom: '16px'
            }}
          >
            This journal will capture reflections and learnings from a 10-day immersion across Chennai and Coimbatore—updated daily during the programme.
          </p>
        </div>
      </section>


    </div>
  );
}