import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// Base Card Props
interface BaseCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'elevated' | 'colored-border';
  borderColor?: 'saffron' | 'green' | 'navy' | 'singapore-red';
}

// Preview Card for Homepage
interface PreviewCardProps {
  title: string;
  description: string;
  color: 'saffron' | 'green' | 'navy' | 'singapore-red';
  icon?: React.ReactNode;
  onClick?: () => void;
}

// Content Card for Posts
interface ContentCardProps {
  title: string;
  date: string;
  summary: string;
  tags?: string[];
  imageUrl?: string;
  imageAlt?: string;
  onRead?: () => void;
}

// Base Card Component
export function BaseCard({ 
  className = '', 
  children, 
  variant = 'default',
  borderColor 
}: BaseCardProps) {
  const variantStyles = {
    default: 'border shadow-sm',
    bordered: 'border-2',
    elevated: 'border shadow-md',
    'colored-border': 'border-l-4 border'
  };

  const colorMap = {
    saffron: 'var(--saffron)',
    green: 'var(--green)',
    navy: 'var(--navy)',
    'singapore-red': 'var(--singapore-red)'
  };

  const style = variant === 'colored-border' && borderColor ? {
    borderLeftColor: colorMap[borderColor],
    borderColor: 'var(--border)'
  } : {
    borderColor: 'var(--border)'
  };

  return (
    <Card 
      className={`${variantStyles[variant]} transition-shadow hover:shadow-md ${className}`}
      style={style}
    >
      {children}
    </Card>
  );
}

// Preview Card Component
export function PreviewCard({ 
  title, 
  description, 
  color, 
  icon, 
  onClick 
}: PreviewCardProps) {
  const colorMap = {
    saffron: 'var(--saffron)',
    green: 'var(--green)',
    navy: 'var(--navy)',
    'singapore-red': 'var(--singapore-red)'
  };

  return (
    <BaseCard 
      variant="colored-border" 
      borderColor={color}
      className="cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div 
              className="p-3 rounded-lg"
              style={{ backgroundColor: colorMap[color], color: 'white' }}
            >
              {icon}
            </div>
          )}
          <h3 style={{ color: colorMap[color] }}>{title}</h3>
        </div>
        <p 
          className="mb-6"
          style={{ color: 'var(--muted)' }}
        >
          {description}
        </p>
        <button 
          className="px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ui-text"
          style={{
            backgroundColor: colorMap[color],
            color: 'white',
            fontSize: 'var(--small)'
          }}
        >
          Explore {title} →
        </button>
      </CardContent>
    </BaseCard>
  );
}

// Content Card Component
export function ContentCard({ 
  title, 
  date, 
  summary, 
  tags = [], 
  imageUrl, 
  imageAlt,
  onRead 
}: ContentCardProps) {
  return (
    <BaseCard className="h-full">
      {imageUrl && (
        <div className="aspect-[4/3] overflow-hidden rounded-t-md">
          <ImageWithFallback 
            src={imageUrl} 
            alt={imageAlt || ''} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <h3 
            className="mb-2"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: '600',
              fontStyle: 'italic',
              color: 'var(--text)',
              fontSize: 'var(--h3)'
            }}
          >
            {title}
          </h3>
          <p 
            className="caption mb-3"
            style={{ color: 'var(--muted)', fontSize: 'var(--small)' }}
          >
            {date}
          </p>
          <p 
            className="mb-4 flex-1"
            style={{ color: 'var(--muted)' }}
          >
            {summary}
          </p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 rounded caption"
                  style={{
                    backgroundColor: 'var(--subtle)',
                    color: 'var(--muted)',
                    fontSize: 'var(--small)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <button 
          onClick={onRead}
          className="self-start mt-auto px-4 py-2 border rounded transition-colors ui-text"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text)',
            fontSize: 'var(--small)'
          }}
        >
          Read post
        </button>
      </CardContent>
    </BaseCard>
  );
}

// Export all variants
export const CardVariants = {
  Base: BaseCard,
  Preview: PreviewCard,
  Content: ContentCard
};