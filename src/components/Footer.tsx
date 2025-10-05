import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('New subscription:', email);
      // TODO: Add backend integration here
      alert(`Thank you for subscribing! We'll send updates to ${email}`);
      setEmail('');
    }
  };

  return (
    <footer 
      className="border-t mt-16"
      style={{ 
        borderColor: 'var(--border)',
        backgroundColor: 'var(--subtle)'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main footer content with full width usage */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24 xl:gap-32 mb-8">
          {/* Logo & Mission */}
          <div className="text-center md:text-left">
            <h4 className="mb-3" style={{ color: 'var(--navy)' }}>
              The India Experience 2025
            </h4>
            <p className="small mb-4" style={{ color: 'var(--muted)' }}>
              A cross-cultural learning journey fostering understanding between Singapore and India.
            </p>
            <p className="small" style={{ color: 'var(--muted)' }}>
              © 2025 Reflections by Zainab Iskandar
            </p>
          </div>

          {/* Subscription Section */}
          <div className="text-center">
            <h4 className="mb-4" style={{ color: 'var(--saffron)', fontSize: '1.1rem' }}>
              Get Daily Updates
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="small px-4 py-2 rounded-md border transition-colors duration-200 w-full sm:w-64"
                  style={{
                    borderColor: 'var(--border)',
                    backgroundColor: 'white',
                    color: 'var(--text)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--saffron)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 hover:opacity-90"
                  style={{
                    backgroundColor: 'var(--saffron)',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  aria-label="Subscribe to daily updates"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>

          {/* Supported By Section */}
          <div className="text-center md:text-right">
            <h4 className="mb-4" style={{ color: 'var(--green)' }}>Supported by</h4>
            <div className="space-y-3">
              <div><span className="small" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>Institute of South Asian Studies</span></div>
              <div><span className="small" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>Singapore-India Partnership Foundation</span></div>
              <div><span className="small" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>Confederation of Indian Industry</span></div>
              <div><span className="small" style={{ color: 'var(--muted)', whiteSpace: 'nowrap' }}>Singapore Universities</span></div>
            </div>
          </div>
        </div>

        {/* Tamil Phrase */}
        <div className="text-center py-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="tamil mb-2">கல்வி என்பது கற்றதை மற்றவர்களுடன் பகிர்ந்து கொள்வதே</p>
          <p className="small" style={{ color: 'var(--muted)' }}>
            "Education is sharing what we learn with others"
          </p>
        </div>
      </div>
    </footer>
  );
}