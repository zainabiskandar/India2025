import React from 'react';
import { BookOpen } from 'lucide-react';
import { journalConfig, getDayStatus, isPublished } from '../data/journalConfig';
import { ImageCarousel } from '../components/journal/ImageCarousel';

interface JournalPageProps {
  onNavigate: (page: string, day?: number | string) => void;
}

interface DayData {
  day: number | string;
  label: string;
}

export function JournalPage({ onNavigate }: JournalPageProps) {
  const journeyData: DayData[] = journalConfig;

  const handleDayClick = (day: number | string) => {
    if (isPublished(day)) {
      if (typeof day === 'number') {
        onNavigate('post', day);
      } else if (day === 'prelude') {
        onNavigate('prelude');
      } else if (day === 'goodbye-sg') {
        onNavigate('goodbye-sg');
      } else if (day === 'goodbye-india') {
        onNavigate('post', 'goodbye-india');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--green)]/5 to-white">
      {/* Consistent Header Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--green)/10' }}>
        <div className="container-desktop">
          <div className="text-center max-w-4xl mx-auto">
            {/* Header */}
            <h1 className="mb-4" style={{ color: 'var(--navy)' }}>
              Travel Journal
            </h1>
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="text-2xl">✍🏻</span>
              <div className="w-16 h-px" style={{ backgroundColor: 'var(--saffron)' }}></div>
              <span className="text-2xl">📖</span>
            </div>

            {/* Descriptive subtitle */}
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
              A 10-day journey from Singapore to South India exploring Chennai and Coimbatore through cultural immersion, educational discoveries, and personal reflections.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Calendar Grid */}
      <section className="py-16">
        <div className="container-desktop">

          {/* Prelude full-width card */}
          <div className="max-w-6xl mx-auto mb-6">
            <button
              onClick={() => handleDayClick('prelude')}
              className="group relative border rounded-xl p-4 lg:p-6 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-navy/20 cursor-pointer hover:shadow-xl w-full text-left"
              style={{
                backgroundColor: 'white',
                borderColor: 'var(--saffron)',
                minHeight: '180px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--navy)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--saffron)';
              }}
              aria-label="Read Prelude: Returning"
            >
              <div className="absolute top-3 right-3">
                <div
                  className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
                  style={{
                    backgroundColor: 'var(--posted-bg)',
                    color: 'var(--green)',
                    fontSize: '10px',
                    fontWeight: '500',
                    fontFamily: "'Work Sans', system-ui, sans-serif"
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--green)' }}
                  />
                  Posted
                </div>
              </div>

              <div className="text-center flex items-center justify-center h-full">
                <div
                  className="font-bold"
                  style={{
                    color: 'var(--navy)',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.25rem, 3.5vw, 1.875rem)',
                    lineHeight: '1.3',
                    wordBreak: 'break-word',
                    hyphens: 'auto'
                  }}
                >
                  Prelude: Returning
                </div>
              </div>

              <div
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: 'var(--navy)' }}
              >
                <BookOpen size={16} />
              </div>
            </button>
          </div>

          {/* Calendar Grid - 2x5 on desktop, 2-column stack on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {journeyData.filter(d => d.day !== 'prelude').map((dayData) => {
              const status = getDayStatus(dayData.day);
              const isClickable = status === 'published';
              
              return (
                <button
                  key={dayData.day}
                  onClick={() => handleDayClick(dayData.day)}
                  className={`group relative border rounded-xl p-4 lg:p-6 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-navy/20 ${
                    isClickable ? 'cursor-pointer hover:shadow-xl' : 'cursor-not-allowed'
                  }`}
                  style={{
                    backgroundColor: status === 'published' ? 'white' :
                                    status === 'planned' ? 'var(--planned-bg)' :
                                    'var(--subtle)',
                    borderColor: status === 'published' ? 'var(--border)' :
                                status === 'planned' ? 'var(--singapore-red)' :
                                'var(--border)',
                    borderWidth: status === 'planned' ? '2px' : '1px',
                    opacity: status === 'not-planned' ? '0.6' : '1',
                    filter: status === 'not-planned' ? 'blur(1px)' : 'none',
                    minHeight: '180px'
                  }}
                  onMouseEnter={(e) => {
                    if (isClickable) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'var(--navy)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isClickable) {
                      e.currentTarget.style.transform = 'translateY(0)'; 
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }
                  }}
                >
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <div
                    className="flex items-center gap-1 px-2 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: status === 'published' ? 'var(--posted-bg)' :
                                      status === 'planned' ? 'var(--planned-bg)' :
                                      'var(--subtle)',
                      color: status === 'published' ? 'var(--green)' :
                             status === 'planned' ? 'var(--singapore-red)' :
                             'var(--muted)',
                      fontSize: '10px',
                      fontWeight: '500',
                      fontFamily: "'Work Sans', system-ui, sans-serif"
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor: status === 'published' ? 'var(--green)' :
                                        status === 'planned' ? 'var(--singapore-red)' :
                                        'var(--muted)'
                      }}
                    />
                    {status === 'published' ? 'Posted' : status === 'planned' ? 'Planned' : 'Draft'}
                  </div>
                </div>

                {/* Day Header */}
                <div className="text-center flex items-center justify-center h-full">
                  <div
                    className="font-bold"
                    style={{
                      color: 'var(--navy)',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 'clamp(1.25rem, 3.5vw, 1.875rem)',
                      lineHeight: '1.3',
                      wordBreak: 'break-word',
                      hyphens: 'auto'
                    }}
                  >
                    {dayData.label}
                  </div>
                </div>

                {/* Hover indicator */}
                {isClickable && (
                  <div 
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: 'var(--navy)' }}
                  >
                    <BookOpen size={16} />
                  </div>
                )}

                {/* Not clickable overlay for planned/draft items */}
                {!isClickable && (
                  <div 
                    className="absolute bottom-2 right-2 text-xs"
                    style={{ 
                      color: 'var(--muted)',
                      fontFamily: "'Work Sans', system-ui, sans-serif",
                      fontStyle: 'italic'
                    }}
                  >
                    {status === 'planned' ? '✏️' : '⏳'}
                  </div>
                )}
              </button>
            );
          })}
          </div>

          {/* Journey Summary */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <h3
              className="mb-6"
              style={{
                color: 'var(--navy)',
                fontFamily: "'Cormorant Garamond', serif"
              }}
            >
              Two Cities, Ten Days, Countless Discoveries
            </h3>
          </div>

          {/* Image Gallery */}
          <div className="mt-8 max-w-6xl mx-auto">
            <ImageCarousel />
          </div>
        </div>
      </section>

    </div>
  );
}