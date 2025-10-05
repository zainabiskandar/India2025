import React from 'react';

interface PreTripPageProps {
  onNavigate: (page: string) => void;
}

export function PreTripPage({ onNavigate }: PreTripPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--singapore-red)]/5 to-white">
      <div className="container-desktop py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4" style={{ color: 'var(--singapore-red)' }}>
            Pre-Trip Preparation
          </h1>
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-2xl">🇸🇬</span>
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--singapore-red)' }}></div>
            <span className="text-2xl">✈️</span>
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--singapore-red)' }}></div>
            <span className="text-2xl">🇮🇳</span>
          </div>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            These essential preparation steps and resources were required for the program,
            including application processes, pre-departure requirements, and cultural preparation. Some of them can be found below.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid gap-8 md:gap-12">
          {/* Application Process */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-[var(--singapore-red)]/10">
            <h2 className="mb-6" style={{ color: 'var(--singapore-red)' }}>
              Application Process
            </h2>
            <div className="space-y-4">
              <p>Information about the application process will be added here, including etc., etc.</p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: 'var(--muted)' }}>
                <li>Eligibility requirements</li>
                <li>Application deadlines</li>
                <li>Required documents</li>
                <li>Selection criteria</li>
              </ul>
            </div>
          </section>

          {/* Pre-Departure Tasks */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-[var(--singapore-red)]/10">
            <h2 className="mb-6" style={{ color: 'var(--singapore-red)' }}>
              Pre-Departure Tasks
            </h2>
            <div className="space-y-4">
              <p>Essential tasks to complete before departure:</p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: 'var(--muted)' }}>
                <li>Visa and passport requirements</li>
                <li>Travel insurance</li>
                <li>Vaccination requirements</li>
                <li>Cultural preparation resources</li>
                <li>Packing guidelines</li>
              </ul>
            </div>
          </section>

          {/* Cultural Preparation */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-[var(--singapore-red)]/10">
            <h2 className="mb-6" style={{ color: 'var(--singapore-red)' }}>
              Cultural Preparation
            </h2>
            <div className="space-y-4">
              <p>Resources that were used to prepare for the exciting culture experience:</p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: 'var(--muted)' }}>
                <li>Introduction to Indian culture and customs</li>
                <li>Basic Hindi and Tamil phrases</li>
                <li>Regional differences between Chennai and Coimbatore</li>
                <li>Business etiquette and practices</li>
                <li>Recommended reading materials</li>
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
              backgroundColor: 'var(--singapore-red)',
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