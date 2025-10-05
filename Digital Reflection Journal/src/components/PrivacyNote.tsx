import React from 'react';
import { Alert, AlertDescription } from './ui/alert';
import { Info } from 'lucide-react';

export function PrivacyNote() {
  return (
    <Alert className="mb-6 bg-blue-50 border-[var(--border)] text-[var(--navy)]">
      <Info className="h-4 w-4 text-[var(--navy)]" />
      <AlertDescription className="small">
        <strong>Privacy first:</strong> We keep posts respectful and photo-light. No sensitive details; 
        faces only with consent; follow site rules (temples, hospitals, factories).{' '}
        <a href="#" className="underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-opacity-50 rounded">
          View guidelines
        </a>
      </AlertDescription>
    </Alert>
  );
}