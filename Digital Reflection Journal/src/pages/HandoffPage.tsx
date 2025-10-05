import React from "react";

interface HandoffPageProps {
  onNavigate: (page: string) => void;
}

export function HandoffPage({ onNavigate }: HandoffPageProps) {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-[var(--singapore-red)]/5 to-white">
      <div className="container-desktop">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="mb-4" style={{ color: 'var(--singapore-red)' }}>
              Brand Style Guide
            </h1>
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="text-2xl">🎨</span>
              <div className="w-16 h-px" style={{ backgroundColor: 'var(--singapore-red)' }}></div>
              <span className="text-2xl">📋</span>
              <div className="w-16 h-px" style={{ backgroundColor: 'var(--singapore-red)' }}></div>
              <span className="text-2xl">✨</span>
            </div>
            <p className="max-w-2xl mx-auto mb-8" style={{ color: 'var(--muted)' }}>
              Complete design system and brand guidelines for The India Experience 2025, 
              including typography, color palette, and component specifications for consistent visual identity.
            </p>
          </div>

          <div className="space-y-12">

        {/* Typography Table */}
        <section>
          <h2 className="mb-4" style={{ color: 'var(--navy)' }}>
            Typography System
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm font-['Work_Sans']">
              <thead>
                <tr className="bg-[var(--green)]/30 text-[var(--navy)]">
                  <th className="p-3 font-semibold">Style</th>
                  <th className="p-3 font-semibold">Font</th>
                  <th className="p-3 font-semibold">Weight</th>
                  <th className="p-3 font-semibold">Size</th>
                  <th className="p-3 font-semibold">Line Height</th>
                  <th className="p-3 font-semibold">Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--grey)]/20">
                {[
                  ["H1 / Title", "Cormorant Garamond", "700", "48px", "1.4x", "Main headers, home title"],
                  ["H2 / Subtitle", "Cormorant Garamond Italic", "600", "32px", "1.5x", "Section subtitles"],
                  ["H3 / Heading", "Work Sans", "600", "24px", "1.5x", "Card titles, section headers"],
                  ["Body Text", "Work Sans", "400", "18px", "1.6x", "Reflections, paragraphs"],
                  ["Small Text", "Inter", "500", "14px", "1.4x", "Navigation, captions"],
                  ["Quote", "Cormorant Garamond Italic", "500", "20px", "1.6x", "Pull quotes or highlights"],
                ].map(([style, font, weight, size, line, use], i) => (
                  <tr key={i} className="hover:bg-[var(--saffron)]/10 transition">
                    <td className="p-3 font-medium">{style}</td>
                    <td className="p-3">{font}</td>
                    <td className="p-3">{weight}</td>
                    <td className="p-3">{size}</td>
                    <td className="p-3">{line}</td>
                    <td className="p-3">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Color Tokens */}
        <section>
          <h2 className="mb-4" style={{ color: 'var(--navy)' }}>
            Color Tokens — Pastel India Palette
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              ["--color-saffron", "#F6C182"],
              ["--color-green", "#B9D5B5"],
              ["--color-coral", "#F5B6A1"],
              ["--color-navy", "#1A1A2E"],
              ["--color-grey", "#717171"],
              ["--color-white", "#FFFFFF"],
            ].map(([name, hex]) => (
              <div key={name} className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-lg border shadow-sm mb-2"
                  style={{ backgroundColor: hex }}
                ></div>
                <p className="text-sm font-medium">{name}</p>
                <p className="text-xs text-[var(--grey)]">{hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Grid & Layout */}
        <section>
          <h2 className="mb-4" style={{ color: 'var(--navy)' }}>
            Layout & Grid
          </h2>
          <ul className="list-disc pl-5 text-[var(--grey)] text-base leading-relaxed">
            <li>Grid width: 1200px max</li>
            <li>Columns: 12 (80px gutter)</li>
            <li>Margins: 64px desktop / 24px mobile</li>
            <li>Spacing scale: 8px baseline grid</li>
          </ul>
        </section>

        {/* Accessibility */}
        <section>
          <h2 className="mb-4" style={{ color: 'var(--navy)' }}>
            Accessibility
          </h2>
          <p className="text-[var(--grey)] text-base leading-relaxed">
            All interactive elements should have visible focus states and maintain a
            minimum color contrast ratio of 4.5:1. Include alt text for all images,
            and use clear hover/focus outlines for keyboard users.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-10 text-center">
          <p className="small" style={{ color: 'var(--muted)' }}>© 2025 The India Experience. Designed by Zainab Iskandar.</p>
        </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
