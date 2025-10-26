import React from 'react';
import { Button } from '../components/ui/button';
import { PrivacyNote } from '../components/PrivacyNote';
import { ChevronLeft, ChevronRight, Chrome as Home } from 'lucide-react';
import { getJournalPost } from '../data/journalPosts';
import { isPublished } from '../data/journalConfig';

interface DailyPostPageProps {
  day: number | string;
  onNavigate: (page: string, day?: number | string) => void;
}

export function DailyPostPage({ day, onNavigate }: DailyPostPageProps) {
  const published = isPublished(day);
  const currentPost = getJournalPost(day);

  const getAdjacentDay = (direction: 'prev' | 'next'): number | null => {
    if (typeof day !== 'number') return null;
    const targetDay = direction === 'prev' ? day - 1 : day + 1;
    if (targetDay < 1 || targetDay > 10) return null;
    return isPublished(targetDay) ? targetDay : null;
  };

  const getPreviousLink = (): { type: 'page' | 'post'; value: string | number; label: string } | null => {
    if (typeof day === 'number' && day === 1) {
      return { type: 'page', value: 'goodbye-sg', label: 'Goodbye Singapore' };
    }
    const prevDay = getAdjacentDay('prev');
    if (prevDay) {
      return { type: 'post', value: prevDay, label: `Day ${prevDay}` };
    }
    return null;
  };

  const getNextLink = (): { type: 'page' | 'post'; value: string | number; label: string } | null => {
    if (typeof day === 'number' && day === 10) {
      if (isPublished('goodbye-india')) {
        return { type: 'page', value: 'goodbye-india', label: 'Goodbye India' };
      }
    }
    const nextDay = getAdjacentDay('next');
    if (nextDay) {
      return { type: 'post', value: nextDay, label: `Day ${nextDay}` };
    }
    return null;
  };

  const previousLink = getPreviousLink();
  const nextLink = getNextLink();

  if (!currentPost || !published) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="container-mobile md:container-desktop py-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-6">
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{
                  backgroundColor: 'var(--planned-bg)',
                  color: 'var(--singapore-red)'
                }}
              >
                Coming Soon
              </div>
            </div>
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: 'var(--navy)'
              }}
            >
              This Reflection Hasn't Been Published Yet
            </h2>
            <p
              className="mb-8"
              style={{ color: 'var(--muted)' }}
            >
              Daily reflections will be published as the journey unfolds. Check back soon to read about this day's experiences and insights.
            </p>
            <Button
              onClick={() => onNavigate('home')}
              style={{
                backgroundColor: 'var(--saffron)',
                color: 'white'
              }}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const line = { height: '2px', backgroundColor: 'var(--saffron)' };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <PrivacyNote />

      {/* Sticky Back Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <Button
          onClick={() => onNavigate('home')}
          className="rounded-full p-3 shadow-lg"
          style={{
            backgroundColor: 'var(--saffron)',
            color: 'var(--text)'
          }}
        >
          <Home className="h-5 w-5" />
        </Button>
      </div>

      <main className="max-w-3xl mx-auto px-6 md:px-6 py-12 md:py-16">
        {/* Header */}
        <h1
          className="mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: '1.4',
            color: 'var(--navy)',
            fontWeight: '700'
          }}
        >
          {currentPost.title}
        </h1>
        <div style={line} className="w-16 mb-8" />

        {/* Journal Content */}
        <section
          className="space-y-6"
          style={{
            color: 'var(--text)',
            lineHeight: '1.6',
            fontFamily: "'Work Sans', system-ui, sans-serif",
            fontSize: 'var(--body)'
          }}
        >
          {currentPost.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        {/* Image Gallery Placeholder */}
        <section className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div
              className="aspect-[4/3] rounded-md flex items-center justify-center border"
              style={{ backgroundColor: 'var(--subtle)', borderColor: 'var(--border)' }}
            >
              <div className="text-center">
                <p
                  className="small mb-2"
                  style={{ color: 'var(--muted)' }}
                >
                  Photo placeholder
                </p>
                <p
                  className="small"
                  style={{ color: 'var(--muted)' }}
                >
                  Alt text: {currentPost.location} street scene
                </p>
              </div>
            </div>
            <div
              className="aspect-[3/2] rounded-md flex items-center justify-center border"
              style={{ backgroundColor: 'var(--subtle)', borderColor: 'var(--border)' }}
            >
              <div className="text-center">
                <p
                  className="small mb-2"
                  style={{ color: 'var(--muted)' }}
                >
                  Photo placeholder
                </p>
                <p
                  className="small"
                  style={{ color: 'var(--muted)' }}
                >
                  Alt text: Traditional architecture detail
                </p>
              </div>
            </div>
          </div>
          <p
            className="small mt-4"
            style={{ color: 'var(--muted)' }}
          >
            Photos by consent only.
          </p>
        </section>

        {/* Navigation Buttons */}
        <div className="mt-10 md:mt-12">
          <div className="flex gap-4 items-center flex-wrap">
            {previousLink && (
              <button
                onClick={() => previousLink.type === 'page'
                  ? onNavigate(previousLink.value as string)
                  : onNavigate('post', previousLink.value)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors text-sm"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  background: 'transparent',
                  cursor: 'pointer',
                  fontFamily: "'Work Sans', system-ui, sans-serif",
                  fontSize: 'clamp(12px, 1.5vw, 14px)'
                }}
                aria-label={`Back to ${previousLink.label}`}
              >
                <span aria-hidden="true">←</span>
                <span>{previousLink.label}</span>
              </button>
            )}

            {nextLink && (
              <button
                onClick={() => nextLink.type === 'page'
                  ? onNavigate(nextLink.value as string)
                  : onNavigate('post', nextLink.value)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors text-sm"
                style={{
                  borderColor: 'var(--saffron)',
                  color: 'var(--navy)',
                  background: 'var(--saffron)',
                  cursor: 'pointer',
                  fontFamily: "'Work Sans', system-ui, sans-serif",
                  fontSize: 'clamp(12px, 1.5vw, 14px)'
                }}
                aria-label={`Continue to ${nextLink.label}`}
              >
                <span>Continue: {nextLink.label}</span>
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>

          <button
            onClick={() => onNavigate('places')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors text-sm mt-4"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--muted)',
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: "'Work Sans', system-ui, sans-serif",
              fontSize: 'clamp(12px, 1.5vw, 14px)'
            }}
            aria-label="View all journal posts"
          >
            <span>All Posts</span>
          </button>
        </div>
      </main>
    </div>
  );
}