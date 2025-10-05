import React from 'react';
import { BookOpen } from 'lucide-react';

interface PlacesPageProps {
  onNavigate: (page: string, day?: number) => void;
}

interface DayData {
  day: number | string;
  label: string;
}

export function PlacesPage({ onNavigate }: PlacesPageProps) {
  // Define post status for each day
  const dayStatuses = [
    { day: 'goodbye-sg', status: 'posted' as const },
    { day: 1, status: 'planned' as const },
    { day: 2, status: 'planned' as const },
    { day: 3, status: 'planned' as const },
    { day: 4, status: 'planned' as const },
    { day: 5, status: 'planned' as const },
    { day: 6, status: 'planned' as const },
    { day: 7, status: 'planned' as const },
    { day: 8, status: 'planned' as const },
    { day: 9, status: 'planned' as const },
    { day: 10, status: 'planned' as const },
    { day: 'goodbye-india', status: 'planned' as const }
  ];

  const getDayStatus = (day: number | string) => {
    const statusEntry = dayStatuses.find(s => s.day === day);
    return statusEntry?.status || 'planned';
  };

  const journeyData: DayData[] = [
    {
      day: 'goodbye-sg',
      label: 'Goodbye Singapore'
    },
    { day: 1, label: 'Day 1' },
    { day: 2, label: 'Day 2' },
    { day: 3, label: 'Day 3' },
    { day: 4, label: 'Day 4' },
    { day: 5, label: 'Day 5' },
    { day: 6, label: 'Day 6' },
    { day: 7, label: 'Day 7' },
    { day: 8, label: 'Day 8' },
    { day: 9, label: 'Day 9' },
    { day: 10, label: 'Day 10' },
    {
      day: 'goodbye-india',
      label: 'Goodbye India'
    }
  ];

  const handleDayClick = (day: number | string) => {
    const status = getDayStatus(day);
    if (status === 'posted') {
      if (typeof day === 'number') {
        onNavigate('post', day);
      } else if (day === 'goodbye-sg') {
        onNavigate('post', 0);
      } else if (day === 'goodbye-india') {
        onNavigate('post', 11);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--green)]/5 to-white">
      {/* Consistent Header Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--green)/10' }}>
        <div className="container-desktop">
          <div className="text-center max-w-4xl mx-auto">
            {/* Large prominent title with decorative icon */}
            <div className="text-center mb-6">
              <h1 style={{ color: 'var(--navy)' }}>
                Journal
              </h1>
            </div>
            
            {/* Horizontal divider */}
            <div 
              className="w-24 h-1 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: 'var(--divider-color)' }}
            />
            
            {/* Descriptive subtitle */}
            <p style={{ color: 'var(--subtitle-color)' }}>
              A 10-day journey from Singapore to South India exploring Chennai and Coimbatore through cultural immersion, educational discoveries, and personal reflections.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Calendar Grid */}
      <section className="py-16">
        <div className="container-desktop">

          {/* Calendar Grid - 2x5 on desktop, 2-column stack on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 max-w-6xl mx-auto">
            {journeyData.map((dayData) => {
              const status = getDayStatus(dayData.day);
              const isClickable = status === 'posted';
              
              return (
                <button
                  key={dayData.day}
                  onClick={() => handleDayClick(dayData.day)}
                  className={`group relative border rounded-xl p-4 lg:p-6 transition-all duration-300 focus:outline-none focus:ring-3 focus:ring-navy/20 ${
                    isClickable ? 'cursor-pointer hover:shadow-xl' : 'cursor-not-allowed'
                  }`}
                  style={{ 
                    backgroundColor: status === 'posted' ? 'white' : 
                                    status === 'planned' ? 'var(--planned-bg)' : 
                                    'var(--subtle)',
                    borderColor: status === 'posted' ? 'var(--border)' : 
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
                      backgroundColor: status === 'posted' ? 'var(--posted-bg)' :
                                      status === 'planned' ? 'var(--planned-bg)' :
                                      'var(--subtle)',
                      color: status === 'posted' ? 'var(--green)' :
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
                        backgroundColor: status === 'posted' ? 'var(--green)' :
                                        status === 'planned' ? 'var(--singapore-red)' :
                                        'var(--muted)'
                      }}
                    />
                    {status === 'posted' ? 'Posted' : status === 'planned' ? 'Planned' : 'Draft'}
                  </div>
                </div>

                {/* Day Header */}
                <div className="text-center">
                  <div
                    className="text-2xl lg:text-3xl font-bold"
                    style={{
                      color: 'var(--navy)',
                      fontFamily: "'Cormorant Garamond', serif"
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
              className="mb-4"
              style={{
                color: 'var(--navy)',
                fontFamily: "'Cormorant Garamond', serif"
              }}
            >
              Two Cities, Ten Days, Countless Discoveries
            </h3>
          </div>
        </div>
      </section>

    </div>
  );
}