import React from 'react';
import { Tag } from '../components/Tag';
import { Button } from '../components/ui/button';
import { PrivacyNote } from '../components/PrivacyNote';
import { EditorialJournalCard } from '../components/EditorialJournalCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface DailyPostPageProps {
  day: number;
  onNavigate: (page: string, day?: number) => void;
}

export function DailyPostPage({ day, onNavigate }: DailyPostPageProps) {
  // Mock post data
  const postData = {
    1: {
      title: "Day 1 · Chennai",
      date: "October 6, 2025",
      location: "Kapaleeshwarar Temple & Mylapore",
      whereWeWent: "Started our journey at the ancient Kapaleeshwarar Temple in Mylapore, one of Chennai's most significant spiritual centers. Walked through the vibrant streets surrounding the temple, observing the blend of devotion and daily commerce.",
      conversation: "Spoke with a local artisan who has been creating traditional kolam designs for temple festivals for over 30 years. She shared how the art form has evolved to incorporate contemporary themes while maintaining its spiritual significance - 'The patterns change, but the intention to welcome prosperity remains the same.'",
      numberFact: "The Kapaleeshwarar Temple is over 1,300 years old and attracts more than 10,000 visitors daily during regular periods.",
      reflection: "What struck me most was how seamlessly the sacred and secular coexist here. There's no stark division between spiritual practice and everyday life - they flow into each other naturally. This integration feels like something we've lost in many Western contexts, where spirituality is often compartmentalized.",
      tomorrow: "How traditional wisdom systems inform modern problem-solving approaches in Tamil culture.",
      tags: ["Community", "Leadership"]
    },
    2: {
      title: "Day 2 · Chennai", 
      date: "October 7, 2025",
      location: "IIT Madras & Research Park",
      whereWeWent: "Spent the day at IIT Madras campus and the Research Park, meeting with students, faculty, and startup founders working on technology solutions for rural India.",
      conversation: "A computer science graduate student working on AI for agricultural prediction systems explained her motivation: 'My grandmother is a farmer in a village near Thanjavur. When I code, I think about whether this would actually help her make better decisions about her crops.'",
      numberFact: "IIT Madras Research Park hosts over 120 companies and startups, with 60% focused on solutions for the Indian market.",
      reflection: "The connection between personal story and professional purpose was so clear in every conversation. Unlike the abstract problem-solving I'm used to, here technology feels deeply rooted in lived experience and family responsibility. It's innovation with intention.",
      tomorrow: "How cultural heritage and innovation can inform each other rather than compete.",
      tags: ["Industry", "Leadership"]
    },
    3: {
      title: "Day 3 · Chennai",
      date: "October 8, 2025", 
      location: "DakshinaChitra Cultural Centre",
      whereWeWent: "Explored DakshinaChitra, a living museum showcasing South Indian heritage through reconstructed traditional homes, craft demonstrations, and cultural performances.",
      conversation: "A master potter from Pondicherry demonstrated traditional techniques while explaining how he's training young apprentices: 'The clay doesn't care about your hurry. You have to respect its timing. This patience, this is what we must teach the next generation - not just the technique, but the mindset.'",
      numberFact: "DakshinaChitra preserves 18 authentic heritage houses from across South India, some dating back over 400 years.",
      reflection: "Watching the craft demonstrations, I realized how much wisdom is embedded in traditional making processes. The potter's comment about patience resonated deeply - there's a different relationship with time here, one that values process over efficiency. It makes me question our obsession with speed and optimization.",
      tomorrow: "How traditional teaching methods might inform modern educational approaches.",
      tags: ["Community", "Leadership"]
    }
  };

  const currentPost = postData[day as keyof typeof postData];
  const hasPrevious = day > 1;
  const hasNext = day < 3; // Based on current mock data

  if (!currentPost) {
    return (
      <div className="container-mobile md:container-desktop py-12">
        <div className="text-center">
          <h2>Post not found</h2>
          <p className="text-muted-foreground mb-6">This reflection hasn't been published yet.</p>
          <Button onClick={() => onNavigate('home')}>Back to Home</Button>
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
          <p 
            className="small mb-6"
            style={{ color: 'var(--muted)' }}
          >
            {currentPost.date}
          </p>
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
            {hasPrevious && (
              <Button 
                variant="outline" 
                onClick={() => onNavigate('post', day - 1)}
                className="group border transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  fontFamily: "'Inter', system-ui, sans-serif"
                }}
              >
                <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Day {day - 1}
              </Button>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('places')}
            className="hidden md:block transition-colors"
            className="caption"
            style={{
              color: 'var(--muted)'
            }}
          >
            All Posts
          </Button>
          
          <div>
            {hasNext && (
              <Button 
                variant="outline" 
                onClick={() => onNavigate('post', day + 1)}
                className="group border transition-colors"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text)',
                  fontFamily: "'Inter', system-ui, sans-serif"
                }}
              >
                Day {day + 1}
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}
          </div>
        </nav>
      </article>
    </div>
  );
}