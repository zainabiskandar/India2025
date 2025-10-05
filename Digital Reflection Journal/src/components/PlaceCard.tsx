import React from 'react';
import { Card, CardContent } from './ui/card';
import { MapPin, Building, Landmark, GraduationCap, Heart, Factory, Users, Library, Mountain } from 'lucide-react';

interface PlaceCardProps {
  name: string;
  description: string;
  type: 'temple' | 'cultural' | 'heritage' | 'education' | 'ngo' | 'industry' | 'research' | 'museum' | 'spiritual';
}

const iconMap = {
  temple: Landmark,
  cultural: Heart,
  heritage: Mountain,
  education: GraduationCap,
  ngo: Users,
  industry: Factory,
  research: Building,
  museum: Library,
  spiritual: Mountain
};

export function PlaceCard({ name, description, type }: PlaceCardProps) {
  const Icon = iconMap[type] || MapPin;
  
  return (
    <Card className="border-border hover:shadow-sm transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-secondary rounded-md flex-shrink-0">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div className="min-w-0">
            <h4 className="font-medium mb-1">{name}</h4>
            <p className="caption text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}