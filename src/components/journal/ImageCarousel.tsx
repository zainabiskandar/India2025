import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import firecrackerPhoto from '../../assets/photo_2025-11-04_19-46-30.jpg';

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
      url: firecrackerPhoto,
      alt: 'Playing with firecrackers on the last night before leaving for the airport'
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {placeholderImages.map((image) => (
            <CarouselItem key={image.id} className="pl-3 basis-1/2 md:basis-1/3 lg:basis-1/5">
              <div
                className="relative aspect-[3/2] rounded-md overflow-hidden"
                style={{
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--subtle)',
                  height: '200px'
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
                {image.id !== 5 && (
                  <div
                    className="absolute bottom-0 left-0 right-0 p-2"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                    }}
                  >
                    <p
                      style={{
                        color: 'rgba(255, 255, 255, 0.85)',
                        fontFamily: "'Work Sans', system-ui, sans-serif",
                        fontWeight: '400',
                        fontSize: '10px',
                        fontStyle: 'italic'
                      }}
                    >
                      Coming soon
                    </p>
                  </div>
                )}
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
