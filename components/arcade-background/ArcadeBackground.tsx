import React from 'react';
import { PacmanLayer } from './PacmanLayer';
import { GhostLayer } from './GhostLayer';
import { FloatingGameBits } from './FloatingGameBits';

export const ArcadeBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1]">
      <PacmanLayer />
      <GhostLayer />
      <FloatingGameBits />
    </div>
  );
};
