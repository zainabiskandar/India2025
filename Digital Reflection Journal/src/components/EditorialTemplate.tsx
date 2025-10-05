import React from 'react';
import { EditorialJournalCard } from './EditorialJournalCard';

interface EditorialTemplateProps {
  className?: string;
}

export function EditorialTemplate({ className = "" }: EditorialTemplateProps) {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Template Header */}
      <div className="text-center mb-12">
        <h2 
          className="mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '28px',
            fontWeight: '700',
            color: 'var(--text)'
          }}
        >
          Editorial Journal Template
        </h2>
        <p 
          style={{
            color: 'var(--subtitle-color)',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          A reusable template for daily reflections during The India Experience Programme. 
          This format encourages structured reflection while maintaining the personal narrative tone.
        </p>
      </div>

      {/* Template Example */}
      <EditorialJournalCard
        whereWeWent="IIT Madras Research Park, Chennai — Meetings with startup founders and technology researchers working on solutions for rural India."
        oneConversation="A young entrepreneur developing solar-powered water purification systems shared her approach: 'We don't just design for the village — we design with the village. Every prototype goes through months of community feedback before we even think about scaling.'"
        oneInsight="Over 70% of Indian startups focus on solving local problems first, then scale globally — a reverse of the typical Silicon Valley model."
        myReflection="The emphasis on community-centered design struck me. Instead of assuming what people need, these innovators spend time understanding daily rhythms and existing solutions. It's humility disguised as methodology."
        tomorrowIllLookFor="How traditional knowledge systems inform modern innovation approaches in other sectors we'll visit."
      />

      {/* Template Guidelines */}
      <div 
        className="mt-12 p-6 rounded-lg"
        style={{ backgroundColor: 'var(--subtle)', border: '1px solid var(--border)' }}
      >
        <h3 
          className="mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18px',
            fontWeight: '600',
            fontStyle: 'italic',
            color: 'var(--text)'
          }}
        >
          Template Guidelines
        </h3>
        <div className="space-y-3">
          <div>
            <h4 
              className="mb-1 caption"
              style={{
                color: 'var(--text)'
              }}
            >
              Where We Went
            </h4>
            <p 
              className="caption"
              style={{
                color: 'var(--muted)'
              }}
            >
              Brief location and context. Keep to 1-2 sentences.
            </p>
          </div>
          
          <div>
            <h4 
              className="mb-1 caption"
              style={{
                color: 'var(--text)'
              }}
            >
              One Conversation
            </h4>
            <p 
              className="caption"
              style={{
                color: 'var(--muted)'
              }}
            >
              Anonymous quote or paraphrased insight from a meaningful interaction. Include context but protect privacy.
            </p>
          </div>
          
          <div>
            <h4 
              className="mb-1 caption"
              style={{
                color: 'var(--text)'
              }}
            >
              Insight of the Day
            </h4>
            <p 
              className="caption"
              style={{
                color: 'var(--muted)'
              }}
            >
              A fact, statistic, or small truth that surprised you. Can be quantitative or qualitative.
            </p>
          </div>
          
          <div>
            <h4 
              className="mb-1 caption"
              style={{
                color: 'var(--text)'
              }}
            >
              My Reflection
            </h4>
            <p 
              className="caption"
              style={{
                color: 'var(--muted)'
              }}
            >
              Personal response in 2-3 sentences. What resonated? What challenged your assumptions?
            </p>
          </div>
          
          <div>
            <h4 
              className="mb-1 caption"
              style={{
                color: 'var(--text)'
              }}
            >
              Tomorrow, I'll Look For
            </h4>
            <p 
              className="caption"
              style={{
                color: 'var(--muted)'
              }}
            >
              A question or intention to carry forward. What will you pay attention to?
            </p>
          </div>
        </div>
      </div>

      {/* Accessibility Notes */}
      <div 
        className="mt-8 p-4 rounded border-l-4"
        style={{ 
          backgroundColor: 'var(--posted-bg)', 
          borderLeftColor: 'var(--green)',
          border: '1px solid var(--border)'
        }}
      >
        <h4 
          className="mb-2 caption"
          style={{
            color: 'var(--text)'
          }}
        >
          Accessibility & Export
        </h4>
        <ul 
          className="space-y-1 caption"
          style={{
            color: 'var(--text)'
          }}
        >
          <li>• All interactive elements include focus states</li>
          <li>• Color contrast meets WCAG AA standards</li>
          <li>• Template is screen reader compatible</li>
          <li>• Cards can be exported for future participants</li>
          <li>• Alt-text fields included for all images</li>
        </ul>
      </div>
    </div>
  );
}