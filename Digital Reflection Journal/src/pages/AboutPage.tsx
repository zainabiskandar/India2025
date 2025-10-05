import React from 'react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-[var(--navy)]/5 to-white">
      <div className="container-desktop">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="mb-4" style={{ color: 'var(--navy)' }}>
              About The India Experience 2025
            </h1>
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="text-2xl">🎓</span>
              <div className="w-16 h-px" style={{ backgroundColor: 'var(--navy)' }}></div>
              <span className="text-2xl">🤝</span>
              <div className="w-16 h-px" style={{ backgroundColor: 'var(--navy)' }}></div>
              <span className="text-2xl">🌏</span>
            </div>
            <p className="max-w-2xl mx-auto mb-8" style={{ color: 'var(--muted)' }}>
              A structured academic program fostering cross-cultural understanding between Singapore and India through immersive learning, policy research, and community engagement across Chennai and Coimbatore.
            </p>
          </div>

          {/* Programme Details */}
          <div className="space-y-8">
            
            <section>
              <h2 className="mb-4" style={{ color: 'var(--text)' }}>Programme Structure</h2>
              <p 
                style={{ 
                  color: 'var(--text)'
                }}
              >
                Participants engage with local institutions, startup ecosystems, cultural sites, and policy makers across Tamil Nadu. The programme emphasizes experiential learning over traditional academic approaches.
              </p>
            </section>

            <section>
              <h2 className="mb-4" style={{ color: 'var(--text)' }}>Key Partners</h2>
              <p 
                style={{ 
                  color: 'var(--text)'
                }}
              >
                Singapore Institute of Policy Studies (SIPF), Institute of South Asian Studies (ISAS), and local Chennai & Coimbatore institutions provide framework and support for meaningful cultural exchange.
              </p>
            </section>

            <section>
              <h2 className="mb-4" style={{ color: 'var(--text)' }}>Editorial Approach</h2>
              <p 
                style={{ 
                  color: 'var(--text)'
                }}
              >
                Each entry follows a structured template encouraging reflection on conversations, insights, and forward-looking questions. This format ensures consistency while preserving personal voice and authentic observation.
              </p>
            </section>

            <section>
              <h2 className="mb-4" style={{ color: 'var(--text)' }}>Privacy & Ethics</h2>
              <p 
                style={{ 
                  color: 'var(--text)'
                }}
              >
                All conversations are documented with participant consent. Individual identities are protected while cultural insights and policy observations are shared openly to benefit future programme participants and research initiatives.
              </p>
            </section>

          </div>

          {/* Navigation Link */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center px-6 py-3 border rounded-lg transition-colors ui-text"
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