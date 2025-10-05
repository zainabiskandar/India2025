import React from 'react';
import { MapPin, Calendar, Users, BookOpen } from 'lucide-react';

interface PlacesPageProps {
  onNavigate: (page: string, day?: number) => void;
}

interface Activity {
  name: string;
  type: 'cultural' | 'educational' | 'social' | 'reflection';
}

interface DayData {
  day: number;
  date: string;
  activities: Activity[];
  location: string;
}

export function PlacesPage({ onNavigate }: PlacesPageProps) {
  // Define post status for each day
  const dayStatuses = [
    { day: 0, status: 'posted' as const },    // Singapore airport
    { day: 1, status: 'planned' as const },   // Chennai arrival
    { day: 2, status: 'planned' as const },   // Chennai
    { day: 3, status: 'not-planned' as const },
    { day: 4, status: 'not-planned' as const },
    { day: 5, status: 'not-planned' as const },
    { day: 6, status: 'not-planned' as const },
    { day: 7, status: 'not-planned' as const },
    { day: 8, status: 'not-planned' as const },
    { day: 9, status: 'not-planned' as const },
    { day: 10, status: 'not-planned' as const }
  ];

  const getDayStatus = (day: number) => {
    const statusEntry = dayStatuses.find(s => s.day === day);
    return statusEntry?.status || 'not-planned';
  };

  const journeyData: DayData[] = [
    {
      day: 0,
      date: "Oct 7",
      location: "Singapore",
      activities: [
        { name: "Airport Departure", type: "social" },
        { name: "Pre-Journey Reflections", type: "reflection" },
        { name: "Flight to Chennai", type: "social" }
      ]
    },
    {
      day: 1,
      date: "Oct 8",
      location: "Chennai",
      activities: [
        { name: "Arrival & Orientation", type: "social" },
        { name: "Cultural Welcome", type: "cultural" },
        { name: "First Impressions", type: "reflection" }
      ]
    },
    {
      day: 2,
      date: "Oct 9", 
      location: "Chennai",
      activities: [
        { name: "IIT Madras Visit", type: "educational" },
        { name: "Campus Tour", type: "educational" },
        { name: "Student Interactions", type: "social" }
      ]
    },
    {
      day: 3,
      date: "Oct 10",
      location: "Chennai", 
      activities: [
        { name: "Kapaleeshwarar Temple", type: "cultural" },
        { name: "Mylapore Heritage Walk", type: "cultural" },
        { name: "Spiritual Reflections", type: "reflection" }
      ]
    },
    {
      day: 4,
      date: "Oct 11",
      location: "Chennai",
      activities: [
        { name: "Government Museum", type: "educational" },
        { name: "Bronze Gallery Tour", type: "cultural" },
        { name: "Historical Analysis", type: "reflection" }
      ]
    },
    {
      day: 5,
      date: "Oct 12",
      location: "Chennai",
      activities: [
        { name: "DakshinaChitra", type: "cultural" },
        { name: "Craft Workshops", type: "educational" },
        { name: "Community Lunch", type: "social" }
      ]
    },
    {
      day: 6,
      date: "Oct 13",
      location: "Coimbatore",
      activities: [
        { name: "Travel Day", type: "social" },
        { name: "City Orientation", type: "educational" },
        { name: "Evening Reflection", type: "reflection" }
      ]
    },
    {
      day: 7,
      date: "Oct 14",
      location: "Coimbatore",
      activities: [
        { name: "Isha Yoga Center", type: "cultural" },
        { name: "Meditation Session", type: "reflection" },
        { name: "Spiritual Dialogue", type: "social" }
      ]
    },
    {
      day: 8,
      date: "Oct 15",
      location: "Coimbatore",
      activities: [
        { name: "Textile Industry Visit", type: "educational" },
        { name: "Manufacturing Tour", type: "educational" },
        { name: "Economic Insights", type: "reflection" }
      ]
    },
    {
      day: 9,
      date: "Oct 16",
      location: "Coimbatore",
      activities: [
        { name: "Cultural Center", type: "cultural" },
        { name: "Local Community", type: "social" },
        { name: "Final Thoughts", type: "reflection" }
      ]
    },
    {
      day: 10,
      date: "Oct 17",
      location: "Coimbatore",
      activities: [
        { name: "Departure Prep", type: "social" },
        { name: "Journey Summary", type: "reflection" },
        { name: "Farewell Ceremony", type: "cultural" }
      ]
    }
  ];

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'cultural': return 'var(--saffron)';
      case 'educational': return 'var(--green)';
      case 'social': return 'var(--singapore-red)';
      case 'reflection': return 'var(--navy)';
      default: return 'var(--muted)';
    }
  };

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'cultural': return '🏛️';
      case 'educational': return '📚';
      case 'social': return '👥';
      case 'reflection': return '✍️';
      default: return '📍';
    }
  };

  const handleDayClick = (day: number) => {
    const status = getDayStatus(day);
    // Only allow navigation to posted entries
    if (status === 'posted') {
      onNavigate('post', day);
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
              An 11-day journey from Singapore to South India, exploring Chennai and Coimbatore through cultural immersion, educational discoveries, and personal reflections (Oct 7-17, 2025).
            </p>
            
            {/* Integrated legend */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
              <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>
                Status:
              </span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--green)' }} />
                <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>Posted</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--singapore-red)' }} />
                <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>Planned</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--muted)' }} />
                <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>Draft</span>
              </div>
              <span className="small mx-2" style={{ color: 'var(--border)' }}>•</span>
              <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>
                Activities:
              </span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--saffron)' }} />
                <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>Cultural</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--green)' }} />
                <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>Educational</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--singapore-red)' }} />
                <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>Social</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--navy)' }} />
                <span className="small" style={{ color: 'var(--muted)', fontStyle: 'normal' }}>Reflection</span>
              </div>
            </div>
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
                <div className="text-center mb-4">
                  <div 
                    className="text-2xl lg:text-3xl font-bold mb-1"
                    style={{ 
                      color: status === 'not-planned' ? 'var(--muted)' : 'var(--navy)',
                      fontFamily: "'Cormorant Garamond', serif"
                    }}
                  >
                    Day {dayData.day}
                  </div>
                  <div 
                    className="small"
                    style={{ 
                      color: 'var(--muted)',
                      fontStyle: 'normal',
                      fontSize: '13px'
                    }}
                  >
                    {dayData.date} • {dayData.location}
                  </div>
                </div>

                {/* Activity Dots and Labels */}
                <div className="space-y-2">
                  {status === 'not-planned' ? (
                    <div className="text-center py-4">
                      <span 
                        style={{ 
                          fontSize: '12px',
                          color: 'var(--muted)',
                          fontFamily: "'Work Sans', system-ui, sans-serif",
                          fontWeight: '400',
                          fontStyle: 'italic'
                        }}
                      >
                        Coming soon...
                      </span>
                    </div>
                  ) : (
                    dayData.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div 
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ 
                            backgroundColor: status === 'not-planned' ? 'var(--muted)' : getActivityColor(activity.type),
                            opacity: status === 'not-planned' ? '0.5' : '1'
                          }}
                        />
                        <span 
                          className="text-left truncate"
                          style={{ 
                            fontSize: '12px',
                            color: status === 'not-planned' ? 'var(--muted)' : 'var(--text)',
                            fontFamily: "'Work Sans', system-ui, sans-serif",
                            fontWeight: '400',
                            fontStyle: 'normal'
                          }}
                        >
                          {activity.name}
                        </span>
                      </div>
                    ))
                  )}
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
              Three Places, Eleven Days, Countless Discoveries
            </h3>
            <p style={{ color: 'var(--subtitle-color)' }}>
              Click on any day to read detailed reflections, see photos, and explore the cultural insights gained during our immersive journey through Tamil Nadu's educational institutions, spiritual centers, and heritage sites.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Overview */}
      <section 
        className="py-20"
        style={{ backgroundColor: 'var(--subtle)' }}
      >
        <div className="container-desktop">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Chennai */}
            <div className="text-center">
              <h4 
                className="mb-4"
                style={{ 
                  color: 'var(--saffron)',
                  fontFamily: "'Cormorant Garamond', serif"
                }}
              >
                Chennai • Days 1-5
              </h4>
              <p style={{ color: 'var(--muted)' }}>
                India's fourth-largest city, where ancient Tamil heritage meets modern innovation. Our base for exploring temples, museums, cultural centers, and academic institutions.
              </p>
            </div>

            {/* Coimbatore */}
            <div className="text-center">
              <h4 
                className="mb-4"
                style={{ 
                  color: 'var(--green)',
                  fontFamily: "'Cormorant Garamond', serif"
                }}
              >
                Coimbatore • Days 6-10
              </h4>
              <p style={{ color: 'var(--muted)' }}>
                The Manchester of South India, balancing industrial significance with spiritual depth. Our window into textile manufacturing and meditation practices, concluding our journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}