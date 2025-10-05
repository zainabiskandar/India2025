import React from 'react';

interface IndiaInfoPageProps {
  onNavigate: (page: string) => void;
}

export function IndiaInfoPage({ onNavigate }: IndiaInfoPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--saffron)]/5 via-white to-[var(--green)]/5">
      <div className="container-desktop py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4" style={{ color: 'var(--navy)' }}>
            About India
          </h1>
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-2xl">🇮🇳</span>
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--saffron)' }}></div>
            <span className="text-2xl">🕌</span>
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--green)' }}></div>
            <span className="text-2xl">🏛️</span>
          </div>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Discovered the rich culture, history, and wildlife of India in preparation for
            the exciting journey to Chennai, Coimbatore, and Tamil Nadu.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid gap-8 md:gap-12">
          {/* About Tamil Nadu */}
          <section className="bg-white rounded-lg p-8 shadow-sm border-l-4" style={{ borderLeftColor: 'var(--saffron)' }}>
            <h2 className="mb-6" style={{ color: 'var(--saffron)' }}>
              Tamil Nadu
            </h2>
            <div className="space-y-4">
              <p>Tamil Nadu, located in southern India, is known for its rich cultural heritage, ancient temples, and vibrant traditions.</p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="mb-3" style={{ color: 'var(--navy)' }}>Chennai</h4>
                  <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--muted)' }}>
                    <li>Capital city and major port</li>
                    <li>IT and automotive hub</li>
                    <li>Rich cultural scene</li>
                    <li>Gateway to South India</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3" style={{ color: 'var(--navy)' }}>Coimbatore</h4>
                  <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--muted)' }}>
                    <li>Textile and industrial center</li>
                    <li>Educational hub</li>
                    <li>Gateway to the Western Ghats</li>
                    <li>Pleasant climate year-round</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Culture & Language */}
          <section className="bg-white rounded-lg p-8 shadow-sm border-l-4" style={{ borderLeftColor: 'var(--green)' }}>
            <h2 className="mb-6" style={{ color: 'var(--green)' }}>
              Culture & Language
            </h2>
            <div className="space-y-4">
              <p>Tamil is one of the world's oldest languages, with a literary tradition spanning over 2,000 years.</p>
              <div className="bg-[var(--green)]/5 p-4 rounded-lg mt-4">
                <h4 className="mb-3" style={{ color: 'var(--green)' }}>Common Tamil Phrases</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="tamil">வணக்கம் (Vanakkam)</span>
                    <span style={{ color: 'var(--muted)' }}>- Hello/Greetings</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="tamil">நன்றி (Nandri)</span>
                    <span style={{ color: 'var(--muted)' }}>- Thank you</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="tamil">மன்னிக்கவும் (Mannikavum)</span>
                    <span style={{ color: 'var(--muted)' }}>- Excuse me/Sorry</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Historical Context */}
          <section className="bg-white rounded-lg p-8 shadow-sm border-l-4" style={{ borderLeftColor: 'var(--navy)' }}>
            <h2 className="mb-6" style={{ color: 'var(--navy)' }}>
              Historical Context
            </h2>
            <div className="space-y-4">
              <p>Understanding India's history helps appreciate its contemporary significance and the depth of its cultural traditions.</p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: 'var(--muted)' }}>
                <li>Ancient Dravidian civilization</li>
                <li>Colonial period and independence movement</li>
                <li>Post-independence development</li>
                <li>Modern economic transformation</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Back */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: 'var(--navy)',
              color: 'white'
            }}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}