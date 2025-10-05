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
      alt: 'Placeholder for journey photo 1',
      bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      alt: 'Placeholder for journey photo 2',
      bgColor: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      alt: 'Placeholder for journey photo 3',
      bgColor: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      alt: 'Placeholder for journey photo 4',
      bgColor: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      alt: 'Placeholder for journey photo 5',
      bgColor: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
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
                className="relative aspect-[4/3] rounded-lg overflow-hidden flex items-center justify-center"
                style={{
                  background: image.bgColor,
                  border: '1px solid var(--border)'
                }}
              >
                <div className="text-center px-6">
                  <div
                    className="text-4xl mb-3"
                    style={{ opacity: 0.5 }}
                  >
                    📷
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontFamily: "'Work Sans', system-ui, sans-serif",
                      fontWeight: '500'
                    }}
                  >
                    Journey memories will be added here
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
