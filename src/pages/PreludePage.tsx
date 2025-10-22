import React from 'react';

interface PreludePageProps {
  onNavigate: (page: string, day?: number) => void;
}

export function PreludePage({ onNavigate }: PreludePageProps) {
  const line = { height: '2px', backgroundColor: 'var(--saffron)' };

  return (
    <main className="max-w-3xl mx-auto px-6 md:px-6 py-12 md:py-16" style={{ backgroundColor: 'var(--bg)' }}>
      <p
        className="italic mb-4"
        style={{
          color: 'var(--muted)',
          fontSize: 'clamp(12px, 1.5vw, 15px)',
          fontFamily: "'Work Sans', system-ui, sans-serif"
        }}
      >
        Note: I did not manage to update this journal during the 10 days in India.
        I was fully immersed, learning and living in the world around me. What follows is written
        after returning home, as I begin to remember and reflect.
      </p>

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
        Prelude: Returning
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
        <p><em>22 October 2025 · Singapore</em></p>

        <p>
          It is 12:45 a.m. on the 22nd of October. I returned home from India on Saturday morning.
          I slept the entire day, drifted through Sunday, and let Monday pass quietly—it was Diwali,
          after all, and a national holiday. Since this week is home-based learning, I have been
          taking things slowly.
        </p>

        <p>
          On Monday night, I met my friends, but I still could not answer most questions about India.
          I had not processed anything yet. And now, in the stillness of early Wednesday morning,
          I feel ready to begin.
        </p>

        <p>
          I did not update my website or even my Telegram channel during the ten days I was away.
          I was completely immersed in India—present, grounded, almost woven into its world. I have
          no excuse other than that. Technology felt distracting; life there was too real to filter
          through a screen.
        </p>

        <p>
          Even so, traces of India remain with me. I have been holding onto them gently so they do
          not slip away. I listen to the songs that coloured my days there. I scroll through photos in our group chat. The memories hum quietly
          under the surface.
        </p>

        <h2
          className="mt-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(20px, 3vw, 28px)',
            lineHeight: '1.4',
            color: 'var(--navy)',
            fontWeight: '700'
          }}
        >
          The Surface Layer — Memories & Movement
        </h2>
        <p>
          My journey took me to the south of India, to Tamil Nadu, to the cities of Chennai and
          Coimbatore. I had not given much thought to the cities before the trip; my imagination
          had been captured by the vastness of India itself — a world of colours, flavours, and sounds.
          And it truly was.
        </p>
        <p>
          The first five days in Chennai were fast-paced: industry visits, sharp minds, quick reflections.
          We ate well, laughed hard, and thought even harder. In Coimbatore, the rhythm softened.
          The factories and organisational visits showed another face of India...less about nation-building,
          more about the quiet hands that keep a nation moving. Together, both cities revealed how
          the smallest pieces — people, places, effort — form the living puzzle of India.
        </p>
        <p>
          Ten days may seem short, but I was intentionally present. I arrived unattached, open, ready
          to receive. I lived among the people, ate their food, breathed their air, used their water.
          I truly lived in India for ten days. And in return, India lived in me.
        </p>

        <h2
          className="mt-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(20px, 3vw, 28px)',
            lineHeight: '1.4',
            color: 'var(--navy)',
            fontWeight: '700'
          }}
        >
          The Human Layer
        </h2>
        <p>
          I went to India because many of my close friends call it home. They have always been generous with their stories of their
          motherland, with its rhythms and colours. We had always dreamed of travelling there
          together, and who would have thought I would make the trip alone first?
        </p>
        <p>
          In a way, it felt like carrying a piece of them with me. I saw their home through my own
          eyes, but with their hearts in mind. When India greeted me with warmth, I felt it on their
          behalf too. Meeting industry leaders, students, and hosts reminded me how vast and
          interconnected the world is. We are all travellers, each of us born somewhere, carrying
          our own stories. To listen to another's story is a privilege; to be welcomed into their time and space is grace.
        </p>

        <h2
          className="mt-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(20px, 3vw, 28px)',
            lineHeight: '1.4',
            color: 'var(--navy)',
            fontWeight: '700'
          }}
        >
          Learning & Faith
        </h2>
        <p>
          I learned about service through hospitality. Every place we visited offered us something—chai,
          biscuits, time, attention. Gratitude became second nature. Humility came easily there; you
          cannot stand before such vibrancy, faith, and human devotion without feeling small. I did
          not always manage to pray my five daily prayers on time, but I found reflections of worship
          everywhere—temples, ashrams, quiet acts of care. Among my Hindu brothers and sisters, I felt
          a shared reverence, a humility before the Divine.
        </p>

        <h2
          className="mt-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(20px, 3vw, 28px)',
            lineHeight: '1.4',
            color: 'var(--navy)',
            fontWeight: '700'
          }}
        >
          Coming Home
        </h2>
        <p>
          Since returning, I feel calm. My soul feels nourished. For months, I had longed to go somewhere unfamiliar, to be re-enchanted
          with the world, and Allah granted that wish. What I want to keep from India is its spirit of
          hospitality and its rhythm of community. Even in Singapore, there are always new people to
          meet, stories to hear, places to discover. I want to live in motion again—developing,
          pulsing, alive.
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
        As I settle back home, I want to hold on to the traces of those ten days. In the pages
        that follow, I will revisit them one by one: what we saw, who we met, and what stayed with me.
      </p>
      <button
        onClick={() => onNavigate('goodbye-sg')}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors text-sm"
        style={{
          borderColor: 'var(--saffron)',
          color: 'var(--navy)',
          background: 'var(--saffron)',
          cursor: 'pointer',
          fontFamily: "'Work Sans', system-ui, sans-serif",
          fontSize: 'clamp(12px, 1.5vw, 14px)'
        }}
        aria-label="Continue to Goodbye Singapore"
      >
        <span>Continue: Goodbye Singapore</span>
        <span aria-hidden="true">→</span>
      </button>
    </main>
  );
}
