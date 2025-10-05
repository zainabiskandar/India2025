import React from 'react';
import { Tag } from '../components/Tag';
import { Button } from '../components/ui/button';
import { PrivacyNote } from '../components/PrivacyNote';
import { EditorialJournalCard } from '../components/journal/EditorialJournalCard';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { getJournalPost } from '../data/journalPosts';
import { isPublished } from '../data/journalConfig';

interface DailyPostPageProps {
  day: number;
  onNavigate: (page: string, day?: number) => void;
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

  const hasPrevious = getAdjacentDay('prev') !== null;
  const hasNext = getAdjacentDay('next') !== null;

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

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <article className="container-mobile md:container-desktop py-8 max-w-4xl mx-auto">
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
        
        {/* Header */}
        <header className="mb-12">
          <h1
            className="mb-4 font-bold"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: '600',
              fontStyle: 'italic',
              color: 'var(--text)'
            }}
          >
            {currentPost.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {currentPost.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        {/* Editorial Journal Card */}
        <EditorialJournalCard
          whereWeWent={currentPost.whereWeWent}
          oneConversation={currentPost.conversation}
          oneInsight={currentPost.numberFact}
          myReflection={currentPost.reflection}
          tomorrowIllLookFor={currentPost.tomorrow}
          className="mb-16"
        />

        {/* Image Gallery Placeholder */}
        <section className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl">
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

        {/* Navigation */}
        <nav 
          className="flex justify-between items-center mt-16 pt-8 border-t"
          style={{ borderColor: 'var(--border)' }}
        >
          <div>
            {hasPrevious && getAdjacentDay('prev') && (
              <Button
                variant="outline"
                onClick={() => onNavigate('post', getAdjacentDay('prev')!)}
                className="group border transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  fontFamily: "'Inter', system-ui, sans-serif"
                }}
              >
                <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Day {getAdjacentDay('prev')}
              </Button>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('places')}
            className="hidden md:block transition-colors caption"
            style={{
              color: 'var(--muted)'
            }}
          >
            All Posts
          </Button>
          
          <div>
            {hasNext && getAdjacentDay('next') && (
              <Button
                variant="outline"
                onClick={() => onNavigate('post', getAdjacentDay('next')!)}
                className="group border transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  fontFamily: "'Inter', system-ui, sans-serif"
                }}
              >
                Day {getAdjacentDay('next')}
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </nav>
      </article>
    </div>
  );
}