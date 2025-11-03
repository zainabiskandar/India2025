import React from 'react';

interface GoodbyeSingaporePageProps {
  onNavigate: (page: string, day?: number | string) => void;
}

export function GoodbyeSingaporePage({ onNavigate }: GoodbyeSingaporePageProps) {
  const line = { height: '2px', backgroundColor: 'var(--saffron)' };

  return (
    <main className="max-w-3xl mx-auto px-6 md:px-6 py-12 md:py-16" style={{ backgroundColor: 'var(--bg)' }}>
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
        Goodbye Singapore
      </h1>
      <div style={line} className="w-16 mb-8" />

      <section
        className="space-y-6"
        style={{
          color: 'var(--text)',
          lineHeight: '1.6',
          fontFamily: "'Work Sans', system-ui, sans-serif",
          fontSize: 'var(--body)'
        }}
      >
        <p>
          The week before India passes in a blur of late nights and half-packed bags. I try my best to prepare for the ten days ahead, knowing I will miss some important classes but grateful there are no tests or assignments due. Still, my rhythm feels disrupted. I worry about falling behind, about how my professors might perceive my absence, about leaving things unfinished. In the end, I remind myself that sometimes doing what you can is already enough.
        </p>

        <p>
          It is, in many ways, an exercise in adaptability. I think of people whose work takes them away on short notice...and wonder if this might be a small rehearsal for that kind of life. You learn to move quickly, adjust your pace, and trust that the rest will fall into place.
        </p>

        <p>
          Music carries me through those long nights. I find myself replaying Young Hearts Run Free by Candi Staton over and over again. It becomes my small anthem of courage, a song to keep my heart light. I redownload Spotify and begin a playlist for India: instrumental tracks, Tamil songs I have never heard before, a few familiar Bollywood pieces. I want sound to accompany sight, rhythm to accompany memory. My relationship with music has been complicated, but this time I allow it back in. I want every moment of this trip to have a place to return to, a sound that reminds me how I felt before it even began.
        </p>

        <p>
          The morning of the flight arrives quietly. I have not slept at all. My parents wake early to send me off before my father leaves for work. It is just the three of us at the airport. We have breakfast downstairs; everything feels peaceful and familiar. Between sips of Milo and small talk, I try to memorise their faces and their voices. I know I will not see them for ten days, and while I am excited for the independence, I also feel a quiet ache. I am grateful that they trust me enough to go, that they are letting their daughter—the one who loves to wander—wander again.
        </p>

        <p>
          It has been a season of travel for our family. Within a single week, my parents and brother fly to Bali, my sister to Japan, and now me to India. Only my youngest sister stays behind, but she shares in our adventures from home. We joke that the house must feel too quiet without us.
        </p>

        <p>
          Before the trip, my father tells me to change the quote I had chosen for this website I was building. "Maybe something by that guy...the former president...Abdul Kalam," he says, half-absentmindedly but with that instinct fathers have for meaning. I do not know then that I will encounter not just Kalam's words, but the spirit of what he stood for: vision, humility, and hope stitched into the ordinary rhythms of life. India has a way of teaching you the lessons you did not know you were being prepared for.
        </p>

        <p>
          That quiet suggestion, offered over breakfast in the calm before departure, was the best parting gift my parents could have given me.
        </p>
        
              >
        A few hours later, I am airborne, en route to Incredible India.
      </section>

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
                Alt text: Singapore departure scene
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
                Alt text: Travel preparations
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

      <p
        className="mt-10 md:mt-12 mb-6"
        style={{
          color: 'var(--text)',
          lineHeight: '1.6',
          fontFamily: "'Work Sans', system-ui, sans-serif",
          fontSize: 'var(--body)'
        }}
      >
        A few hours later, I am airborne, en route to Incredible India.
      </p>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => onNavigate('prelude')}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors text-sm"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text)',
            background: 'transparent',
            cursor: 'pointer',
            fontFamily: "'Work Sans', system-ui, sans-serif",
            fontSize: 'clamp(12px, 1.5vw, 14px)'
          }}
          aria-label="Back to Prelude"
        >
          <span aria-hidden="true">←</span>
          <span>Prelude</span>
        </button>

        <button
          onClick={() => onNavigate('post', 1)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors text-sm"
          style={{
            borderColor: 'var(--saffron)',
            color: 'var(--navy)',
            background: 'var(--saffron)',
            cursor: 'pointer',
            fontFamily: "'Work Sans', system-ui, sans-serif",
            fontSize: 'clamp(12px, 1.5vw, 14px)'
          }}
          aria-label="Begin Day 1 – Chennai"
        >
          <span>Continue: Day 1</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </main>
  );
}
