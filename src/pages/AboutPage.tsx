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
            <h2
              className="mb-8 text-center"
              style={{
                color: 'var(--navy)',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: '600'
              }}
            >
              Welcome to My Digital Diary
            </h2>

            <div
              className="prose prose-lg max-w-none"
              style={{
                color: 'var(--text)',
                lineHeight: '1.8'
              }}
            >
              <p className="text-lg mb-6" style={{ color: 'var(--text)' }}>
                Hi, everyone. Welcome to my corner of the internet, where I'll be documenting an adventure that I'll soon be embarking on—a 10-day immersion across Chennai and Coimbatore, India. This is my first time visiting India, and I find myself both excited and curious about what lies ahead.
              </p>

              <p className="text-lg mb-6" style={{ color: 'var(--text)' }}>
                This journal isn't just about recording what happens. It's about pausing to reflect, to question, and to truly absorb the experiences as they unfold. I've always believed that the most meaningful learning happens when we take the time to process our observations, to sit with our questions, and to be honest about what we don't yet understand.
              </p>

              <p className="text-lg mb-0" style={{ color: 'var(--text)' }}>
                So consider this both a travelogue and a thinking space—somewhere between a formal journal and an ongoing conversation with myself about culture, community, and what it means to step outside familiar boundaries.
              </p>
            </div>
          </div>

          {/* About Me */}
          <div className="mb-20">
            <h2
              className="mb-8"
              style={{
                color: 'var(--navy)',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: '600'
              }}
            >
              A Bit About Me
            </h2>

            <div
              className="space-y-6"
              style={{
                color: 'var(--text)',
                lineHeight: '1.8'
              }}
            >
              <p className="text-lg" style={{ color: 'var(--text)' }}>
                I'm currently a student at [Your University/Program], studying [Your Field]. My academic interests have always leaned toward [placeholder for your interests—e.g., "understanding how policy shapes lived experiences" or "exploring the intersection of culture and innovation"]. But beyond the formal learning, I'm drawn to the kind of education that comes from simply being present in a place that's new to you, listening more than speaking, and remaining open to having your assumptions gently challenged.
              </p>

              <p className="text-lg" style={{ color: 'var(--text)' }}>
                [Placeholder: Add more about your background, what drives your curiosity, your approach to learning, or any relevant context about who you are as a student and thinker. This could be 2-3 more paragraphs about your journey, interests, or what shaped your perspective.]
              </p>
            </div>
          </div>

          {/* Why This Trip - Intentions */}
          <div className="mb-20">
            <h2
              className="mb-8"
              style={{
                color: 'var(--navy)',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: '600'
              }}
            >
              Why This Trip: My Intentions
            </h2>

            <div
              className="space-y-6"
              style={{
                color: 'var(--text)',
                lineHeight: '1.8'
              }}
            >
              <p className="text-lg" style={{ color: 'var(--text)' }}>
                I decided to go on this trip because it was an opportunity I didn't want to miss. When I first heard about the India Experience programme, something about it felt right—not just intellectually interesting, but personally significant. There was a pull toward understanding a part of the world I knew very little about, beyond the surface-level narratives we often encounter.
              </p>

              <p className="text-lg" style={{ color: 'var(--text)' }}>
                My intentions for this journey are both specific and open-ended. Specifically, I want to [placeholder: e.g., "understand how traditional values coexist with rapid modernization," "learn about community-led innovation," "observe how different cultures approach problem-solving"]. But I'm also intentionally leaving space for the unexpected—the conversations I didn't anticipate, the questions I didn't know to ask, the moments that shift how I see not just India, but my own context back home.
              </p>

              <p className="text-lg" style={{ color: 'var(--text)' }}>
                [Placeholder: Continue with more about your intentions. What do you hope to learn? What questions are you bringing with you? What do you hope this experience will change about how you think or see the world? This could be several more paragraphs—don't hold back on the reflection.]
              </p>
            </div>
          </div>

          {/* What I Hope to Discover */}
          <div className="mb-20">
            <h2
              className="mb-8"
              style={{
                color: 'var(--navy)',
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: '600'
              }}
            >
              What I Hope to Discover
            </h2>

            <div
              className="space-y-6"
              style={{
                color: 'var(--text)',
                lineHeight: '1.8'
              }}
            >
              <p className="text-lg" style={{ color: 'var(--text)' }}>
                Beyond the structured programme activities and planned site visits, I'm most curious about the in-between moments—the informal conversations, the observations that happen when you're just walking through a neighbourhood, the patterns you start to notice after a few days in a place. I want to understand not just what people do, but why they do it, and what that reveals about different ways of organizing society, family, community, and purpose.
              </p>

              <p className="text-lg" style={{ color: 'var(--text)' }}>
                [Placeholder: What else are you hoping to discover or understand? What aspects of Indian culture, society, or daily life are you most curious about? What do you hope to bring back with you—not just intellectually, but in terms of perspective or understanding? Add as many paragraphs as you need to fully express your hopes and curiosities for this journey.]
              </p>
            </div>
          </div>

          {/* Closing Note */}
          <div className="mb-16">
            <div
              className="p-8 rounded-lg"
              style={{
                backgroundColor: 'var(--subtle)',
                border: '1px solid var(--border)'
              }}
            >
              <p
                className="text-center italic mb-0"
                style={{
                  color: 'var(--muted)',
                  lineHeight: '1.7'
                }}
              >
                Thank you for being here. I hope these reflections spark your own curiosity about cross-cultural understanding, travel as learning, and the value of approaching the unfamiliar with openness rather than certainty. Feel free to reach out if anything here resonates with you—I'd love to hear your thoughts.
              </p>
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