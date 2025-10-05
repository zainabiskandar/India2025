import React from 'react';
import { Badge } from './ui/badge';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
}

export function Tag({ children, variant = 'secondary' }: TagProps) {
  return (
    <Badge 
      variant={variant}
      className="px-3 py-1 rounded-md border caption"
      style={{
        backgroundColor: 'var(--subtle)',
        borderColor: 'var(--border)',
        color: 'var(--text)',
        fontSize: 'var(--small)'
      }}
    >
      {children}
    </Badge>
  );
}

interface DayChipProps {
  day: number;
  status: 'published' | 'planned' | 'not-planned';
  onClick?: () => void;
}

export function DayChip({ day, status, onClick }: DayChipProps) {
  const isPublished = status === 'published';

  return (
    <button
      onClick={onClick}
      className={`day-chip ${isPublished ? 'day-chip-posted' : 'day-chip-planned'} ${onClick ? 'hover:opacity-80' : ''}`}
      disabled={!onClick}
    >
      <span className={`status-dot ${isPublished ? 'status-dot-posted' : 'status-dot-planned'}`} />
      Day {day}
    </button>
  );
}