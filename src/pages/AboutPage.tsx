import React from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-[var(--navy)]/5 to-white">
      <div className="container-mobile md:container-desktop">
        <div className="max-w-4xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="mb-4" style={{ color: 'var(--navy)' }}>
              Welcome | Vanakkam
            </h1>
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="text-2xl">🙏</span>
              <div className="w-16 h-px" style={{ backgroundColor: 'var(--saffron)' }}></div>
              <span className="text-2xl">🌏</span>
              <div className="w-16 h-px" style={{ backgroundColor: 'var(--saffron)' }}></div>
              <span className="text-2xl">✨</span>
            </div>
          </div>

          {/* Personal Welcome */}
          <div className="mb-20">
            <div
              className="prose prose-lg max-w-none"
              style={{
                color: 'var(--text)',
                lineHeight: '1.8'
              }}
            >
              <p className="text-lg mb-6" style={{ color: 'var(--text)' }}>
                Hi everyone, and welcome to my corner of the internet for an upcoming adventure.
              </p>

              <p className="text-lg mb-6" style={{ color: 'var(--text)' }}>
                In a few days, I will be embarking on The India Experience 2025, an immersion programme across Chennai and Coimbatore. I have never been to India before, and even now, as I write this, it feels a little surreal to say that I will be going.
              </p>

              <p className="text-lg mb-6" style={{ color: 'var(--text)' }}>
                Many people close to me call India home, and I think of dear Kim, Ishita, Nandini, Janhavee, Muwafiqa, and Rahul—all of whom have been so generous with their stories of their motherland, each sharing its varied rhythms and colours. We had always made plans to journey there together, and who would have thought that I would make the trip alone first. But I am excited to see for myself what connection, culture, and home might look like beyond what I know, and I hope to join more travels in the future, insyaAllah.
              </p>

              <p className="text-lg mb-6" style={{ color: 'var(--text)' }}>
                I chose to take this trip because I felt a quiet pull towards it—an opportunity not just to see a new place, but to explore questions that have always lived quietly in me about belonging, identity, and meaning. And honestly, how could I, as someone with a touch of wanderlust, say no?
              </p>

              <p className="text-lg mb-6" style={{ color: 'var(--text)' }}>
                For me, this journey is not only about travel or a short leave from school. It is also a kind of discovery—of place, of ideas, of faith, and, as with every adventure, of myself.
              </p>

              <p className="text-lg mb-6" style={{ color: 'var(--text)' }}>
                I have found that writing helps me make sense of what I am feeling and learning, so I hope this website becomes a space where I try to do that—gently, honestly, and with immense gratitude for the opportunity I have been given. Here, you will find my reflections, the moments that stay with me, and lessons from people I meet along the way. Some days may be long and detailed, while others may simply be a sentence or a photograph, but each one, I hope, will carry a little sincerity—and update you, Mama, that I am alive.
              </p>

              <p className="text-lg mb-0" style={{ color: 'var(--text)' }}>
                If you are reading this, thank you for being here. If you would like to receive daily updates, you can drop your email at the bottom of this page. I hope this space becomes not only a record of what I see, but also of how I grow.
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h3
                className="mb-6"
                style={{
                  color: 'var(--navy)',
                  fontFamily: "'Cormorant Garamond', serif"
                }}
              >
                If you would like to reach out to me, send me a Telegram (this probably means you're close to me). Otherwise, I'm contactable via email at zainab.iwr@gmail.com
              </h3>
            </div>
          </div>

          {/* Navigation Link */}
          <div className="text-center">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center px-6 py-3 border rounded-lg transition-colors ui-text hover:bg-gray-50"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text)',
                backgroundColor: 'transparent'
              }}
            >
              ← Back to Journal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}