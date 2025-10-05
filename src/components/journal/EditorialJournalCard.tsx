import React from 'react';
import { Card, CardContent } from '../ui/card';

interface EditorialJournalCardProps {
  whereWeWent: string;
  oneConversation: string;
  oneInsight: string;
  myReflection: string;
  tomorrowIllLookFor: string;
  className?: string;
}

export function EditorialJournalCard({ 
  whereWeWent, 
  oneConversation, 
  oneInsight, 
  myReflection, 
  tomorrowIllLookFor,
  className = ""
}: EditorialJournalCardProps) {
  return (
    <Card 
      className={`w-full max-w-2xl mx-auto ${className}`}
      style={{ border: '1px solid var(--border)' }}
    >
      <CardContent className="p-6 space-y-6">
        {/* Where We Went */}
        <div>
          <div className="mb-3">
            <h3 
              className="uppercase tracking-wider mb-2 caption"
              style={{
                fontSize: 'var(--small)',
                color: 'var(--muted)',
                letterSpacing: '1px'
              }}
            >
              Where We Went
            </h3>
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: 'var(--saffron)' }}
            />
          </div>
          <p 
            style={{
              color: 'var(--text)'
            }}
          >
            {whereWeWent}
          </p>
        </div>

        {/* One Conversation */}
        <div>
          <div className="mb-3">
            <h3 
              className="uppercase tracking-wider mb-2 caption"
              style={{
                fontSize: '12px',
                color: 'var(--muted)',
                letterSpacing: '1px'
              }}
            >
              One Conversation
            </h3>
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: 'var(--saffron)' }}
            />
          </div>
          <blockquote 
            className="border-l-2 pl-4 ml-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '16px',
              lineHeight: '1.7',
              fontWeight: '600',
              fontStyle: 'italic',
              color: 'var(--text)',
              borderLeftColor: 'var(--green)'
            }}
          >
            "{oneConversation}"
          </blockquote>
        </div>

        {/* One Insight */}
        <div>
          <div className="mb-3">
            <h3 
              className="uppercase tracking-wider mb-2 caption"
              style={{
                fontSize: '12px',
                color: 'var(--muted)',
                letterSpacing: '1px'
              }}
            >
              Insight of the Day
            </h3>
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: 'var(--saffron)' }}
            />
          </div>
          <div 
            className="p-3 rounded"
            style={{
              backgroundColor: 'var(--subtle)',
              border: '1px solid var(--border)'
            }}
          >
            <p 
              style={{
                color: 'var(--text)',
                margin: '0'
              }}
            >
              {oneInsight}
            </p>
          </div>
        </div>

        {/* My Reflection */}
        <div>
          <div className="mb-3">
            <h3 
              className="uppercase tracking-wider mb-2 caption"
              style={{
                fontSize: '12px',
                color: 'var(--muted)',
                letterSpacing: '1px'
              }}
            >
              My Reflection
            </h3>
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: 'var(--saffron)' }}
            />
          </div>
          <p 
            style={{
              color: 'var(--text)'
            }}
          >
            {myReflection}
          </p>
        </div>

        {/* Tomorrow I'll Look For */}
        <div>
          <div className="mb-3">
            <h3 
              className="uppercase tracking-wider mb-2 caption"
              style={{
                fontSize: '12px',
                color: 'var(--muted)',
                letterSpacing: '1px'
              }}
            >
              Tomorrow, I'll Look For
            </h3>
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: 'var(--saffron)' }}
            />
          </div>
          <p 
            style={{
              color: 'var(--text)'
            }}
          >
            {tomorrowIllLookFor}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}