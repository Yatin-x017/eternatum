'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useGameLoop } from '@/hooks/useGameLoop';
import Image from 'next/image';

const SCREEN_BORDER = 20;

export const PacmanLayer = () => {
  const [position, setPosition] = useState({ x: SCREEN_BORDER, y: SCREEN_BORDER });
  const [direction, setDirection] = useState('right');
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updatePacman = useCallback((deltaTime: number) => {
    const speed = 0.1 * deltaTime;
    setPosition(prev => {
      let { x, y } = prev;
      switch (direction) {
        case 'right':
          x += speed;
          if (x >= windowSize.width - SCREEN_BORDER) {
            x = windowSize.width - SCREEN_BORDER;
            setDirection('down');
          }
          break;
        case 'down':
          y += speed;
          if (y >= windowSize.height - SCREEN_BORDER) {
            y = windowSize.height - SCREEN_BORDER;
            setDirection('left');
          }
          break;
        case 'left':
          x -= speed;
          if (x <= SCREEN_BORDER) {
            x = SCREEN_BORDER;
            setDirection('up');
          }
          break;
        case 'up':
          y -= speed;
          if (y <= SCREEN_BORDER) {
            y = SCREEN_BORDER;
            setDirection('right');
          }
          break;
      }
      return { x, y };
    });
  }, [direction, windowSize]);

  useGameLoop(updatePacman);

  const getRotation = () => {
    switch (direction) {
      case 'right': return 'rotate-0';
      case 'down': return 'rotate-90';
      case 'left': return 'rotate-180';
      case 'up': return '-rotate-90';
    }
  };

  if (!windowSize.width) return null;

  return (
    <div
      className={`absolute top-0 left-0 transition-transform duration-100 ${getRotation()}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <Image src="/sprites/pacman.svg" alt="Pacman" width={32} height={32} />
    </div>
  );
};
