import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LogoStripProps {
  isVisible: boolean;
  onToggle: () => void;
}

export function LogoStrip({ isVisible, onToggle }: LogoStripProps) {
  if (!isVisible) {
    return (
      <button
        onClick={onToggle}
        className="p-1 text-[var(--muted)] hover:text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-opacity-50 rounded"
        aria-label="Show logo strip"
      >
        <Eye className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        {/* Singapore Flag */}
        <div className="w-8 h-6 bg-gradient-to-b from-red-500 to-white rounded-sm border border-[var(--border)]" 
             title="Singapore Flag" />
        
        {/* India Flag */}
        <div className="w-8 h-6 bg-gradient-to-b from-orange-500 via-white to-green-500 rounded-sm border border-[var(--border)]" 
             title="India Flag" />
        
        {/* NUS-ISAS Logo Placeholder */}
        <div className="w-8 h-6 bg-[var(--subtle)] border border-[var(--border)] rounded-sm flex items-center justify-center">
          <span className="text-xs text-[var(--muted)]">NUS</span>
        </div>
        
        {/* SIPF Logo Placeholder */}
        <div className="w-8 h-6 bg-[var(--subtle)] border border-[var(--border)] rounded-sm flex items-center justify-center">
          <span className="text-xs text-[var(--muted)]">SIPF</span>
        </div>
      </div>
      
      <button
        onClick={onToggle}
        className="p-1 text-[var(--muted)] hover:text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-opacity-50 rounded"
        aria-label="Hide logo strip"
      >
        <EyeOff className="h-4 w-4" />
      </button>
    </div>
  );
}

export function LogoFootnote() {
  return (
    <p className="small text-[var(--muted)] text-center mt-4">
      Logos used with organiser permission.
    </p>
  );
}