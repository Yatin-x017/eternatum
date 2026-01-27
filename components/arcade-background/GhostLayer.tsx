'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useGameLoop } from '@/hooks/useGameLoop';
import Image from 'next/image';

const NUM_GHOSTS = 3;
const GHOST_SPEED = 0.05;

interface Ghost {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const GhostLayer = () => {
  const [ghosts, setGhosts] = useState<Ghost[]>([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width > 0 && windowSize.height > 0) {
      const initialGhosts = Array.from({ length: NUM_GHOSTS }, (_, i) => ({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      }));
      setTimeout(() => setGhosts(initialGhosts), 0);
    }
  }, [windowSize.width, windowSize.height]);

  const updateGhosts = useCallback((deltaTime: number) => {
    setGhosts(prevGhosts => prevGhosts.map(ghost => {
      let { x, y, vx, vy } = ghost;

      x += vx * GHOST_SPEED * deltaTime;
      y += vy * GHOST_SPEED * deltaTime;

      if (x <= 0 || x >= windowSize.width) vx *= -1;
      if (y <= 0 || y >= windowSize.height) vy *= -1;

      return { ...ghost, x, y, vx, vy };
    }));
  }, [windowSize]);

  useGameLoop(updateGhosts);

  if (!windowSize.width) return null;

  return (
    <>
      {ghosts.map(ghost => (
        <div
          key={ghost.id}
          className="absolute top-0 left-0"
          style={{ transform: `translate(${ghost.x}px, ${ghost.y}px)` }}
        >
          <Image src="/sprites/ghost.svg" alt="Ghost" width={24} height={24} />
        </div>
      ))}
    </>
  );
};
