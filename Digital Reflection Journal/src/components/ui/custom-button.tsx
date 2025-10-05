import React from 'react';
import { Button, ButtonProps } from './button';

interface CustomButtonProps extends ButtonProps {
  colorScheme?: 'saffron' | 'green' | 'navy' | 'singapore-red';
}

export function CustomButton({ 
  colorScheme = 'saffron', 
  className = '', 
  style = {},
  children,
  ...props 
}: CustomButtonProps) {
  const colorStyles = {
    saffron: {
      backgroundColor: 'var(--saffron)',
      color: 'white',
      border: '1px solid var(--saffron)'
    },
    green: {
      backgroundColor: 'var(--green)',
      color: 'white',
      border: '1px solid var(--green)'
    },
    navy: {
      backgroundColor: 'var(--navy)',
      color: 'white',
      border: '1px solid var(--navy)'
    },
    'singapore-red': {
      backgroundColor: 'var(--singapore-red)',
      color: 'white',
      border: '1px solid var(--singapore-red)'
    }
  };

  return (
    <Button
      className={`transition-all duration-300 hover:scale-105 ui-text ${className}`}
      style={{
        ...colorStyles[colorScheme],
        fontFamily: "'Work Sans', system-ui, sans-serif",
        fontStyle: 'italic',
        fontSize: 'var(--small)',
        ...style
      }}
      {...props}
    >
      {children}
    </Button>
  );
}