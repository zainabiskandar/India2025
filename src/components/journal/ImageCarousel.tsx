import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

interface ImageCarouselProps {
  className?: string;
}

export function ImageCarousel({ className = '' }: ImageCarouselProps) {
  const placeholderImages = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Traditional Indian temple architecture'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/3889751/pexels-photo-3889751.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Colorful traditional Indian market scene'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/3209049/pexels-photo-3209049.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'South Indian cultural heritage'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/2318370/pexels-photo-2318370.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Traditional Indian architecture detail'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Indian cultural landscape'
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {placeholderImages.map((image) => (
            <CarouselItem key={image.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
                style={{
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--subtle)'
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{
                    opacity: 0.85,
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.85'}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-3"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                  }}
                >
                  <p
                    className="text-xs"
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontFamily: "'Work Sans', system-ui, sans-serif",
                      fontWeight: '400',
                      fontStyle: 'italic'
                    }}
                  >
                    Placeholder - Journey photos coming soon
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="hidden md:flex"
          style={{
            backgroundColor: 'white',
            borderColor: 'var(--border)'
          }}
        />
        <CarouselNext
          className="hidden md:flex"
          style={{
            backgroundColor: 'white',
            borderColor: 'var(--border)'
          }}
        />
      </Carousel>
    </div>
  );
}
