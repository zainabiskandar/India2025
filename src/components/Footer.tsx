import React, { useState, useEffect } from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxxr2mdfCpqLg38vhAXCeILHs6_njNFeSgB9Lwu7bBYG8HlupstkSgUeuNA2XtBzP3fwQ/exec';

function validEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [trap, setTrap] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (trap) return; // honeypot

    if (!validEmail(email)) {
      setFeedback('Please enter a valid email.');
      return;
    }

    setFeedback('Sending…');

    try {
      const fd = new FormData();
      fd.append('email', email);
      fd.append('source', 'footer');
      fd.append('user_agent', navigator.userAgent);

      const res = await fetch(GAS_ENDPOINT, { method: 'POST', body: fd });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data && data.ok) {
        setFeedback(data.dup ? 'You are already subscribed. Thank you!' : 'Thanks! Please check your inbox.');
        setEmail('');
      } else {
        setFeedback('Sorry, something went wrong. Please try again.');
      }
    } catch (err) {
      setFeedback('Network error. Please try again.');
      console.error(err);
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
          <section id="subscribe" className="text-center subscribe-section">
            <h4 className="mb-4 footer-heading" style={{ color: 'var(--saffron)' }}>
              Get Daily Updates
            </h4>
            <form id="subscribe-form" className="subscribe-form" method="POST" noValidate onSubmit={handleSubscribe}>
              <div className="subscribe-row">
                <input
                  id="subscribe-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                  className="subscribe-input"
                />
                <button
                  type="submit"
                  className="subscribe-btn subscribe-btn--icon"
                  aria-label="Subscribe"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" style={{ transform: 'rotate(180deg)' }}>
                    <path d="M2.5 12l18.5-9-4.5 9 4.5 9-18.5-9zm7 .5l7.5 4.5-7.5-1.5v-3z"/>
                  </svg>
                </button>
              </div>
              <p id="subscribe-feedback" className="subscribe-feedback" role="status" aria-live="polite">
                {feedback}
              </p>
              <input
                type="text"
                name="trap"
                className="visually-hidden"
                tabIndex={-1}
                autoComplete="off"
                value={trap}
                onChange={(e) => setTrap(e.target.value)}
              />
            </form>
          </section>

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