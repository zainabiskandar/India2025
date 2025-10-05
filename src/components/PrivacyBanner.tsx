import React from 'react';
import { Alert, AlertDescription } from './ui/alert';
import { Shield } from 'lucide-react';

export function PrivacyBanner() {
  return (
    <Alert className="mb-6 border-primary/20 bg-secondary">
      <Shield className="h-4 w-4 text-primary" />
      <AlertDescription className="caption">
        <strong>Privacy note:</strong> No sensitive personal information is shared. 
        All photos are included with consent only, and conversations are anonymized to protect individual privacy.
      </AlertDescription>
    </Alert>
  );
}