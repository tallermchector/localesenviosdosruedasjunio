import React from 'react';

interface SpeedLineProps {
  width?: string;
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export function SpeedLine({ width = 'w-24', color = 'primary', className = '' }: SpeedLineProps) {
  const colorMap: Record<string, string> = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    white: 'bg-white',
  };

  return (
    <div className={`${width} h-0.5 mb-2 ${colorMap[color]} ${className}`} />
  );
}