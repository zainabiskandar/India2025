import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PostCardProps {
  title: string;
  date: string;
  summary: string;
  day?: number;
  onReadPost?: () => void;
  imageUrl?: string;
  imageAlt?: string;
  variant?: 'image-top' | 'image-left' | 'text-only';
  tags?: string[];
}

export function PostCard({ 
  title, 
  date, 
  summary, 
  day, 
  onReadPost, 
  imageUrl, 
  imageAlt,
  variant = 'text-only',
  tags = []
}: PostCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow border" style={{ borderColor: 'var(--border)' }}>
      {variant === 'image-top' && imageUrl && (
        <div className="aspect-[4/3] overflow-hidden rounded-t-md">
          <ImageWithFallback 
            src={imageUrl} 
            alt={imageAlt || ''} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardContent className={`${variant === 'image-left' ? 'flex gap-4' : ''} p-6 flex-col h-full`}>
        {variant === 'image-left' && imageUrl && (
          <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
            <ImageWithFallback 
              src={imageUrl} 
              alt={imageAlt || ''} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <h3 
              className="mb-2 font-bold"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: '600',
                fontStyle: 'italic',
                color: 'var(--text)'
              }}
            >
              {title}
            </h3>
            <p 
              className="small mb-3"
              style={{ color: 'var(--muted)' }}
            >
              {date}
            </p>
            <p
              className="caption mb-4 flex-1"
              style={{
                color: 'var(--muted)'
              }}
            >
              {summary}
            </p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="caption px-2 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--subtle)',
                      color: 'var(--muted)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onReadPost}
            className="ui-text self-start mt-auto border transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text)',
              fontSize: 'var(--small)'
            }}
          >
            Read post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}