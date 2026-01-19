'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useGameLoop } from '@/hooks/useGameLoop';
import Image from 'next/image';

const NUM_BITS = 10;
const BIT_SPEED = 0.02;

const ICONS = [
  '/sprites/coin.svg',
  '/sprites/heart.svg',
  '/sprites/joystick.svg',
];

interface GameBit {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  icon: string;
}

export const FloatingGameBits = () => {
  const [bits, setBits] = useState<GameBit[]>([]);
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
      const initialBits = Array.from({ length: NUM_BITS }, (_, i) => ({
        id: i,
        x: Math.random() * windowSize.width,
        y: Math.random() * windowSize.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        icon: ICONS[Math.floor(Math.random() * ICONS.length)],
      }));
      setBits(initialBits);
    }
  }, [windowSize]);

  const updateBits = useCallback((deltaTime: number) => {
    setBits(prevBits => prevBits.map(bit => {
      let { x, y, vx, vy } = bit;

      x += vx * BIT_SPEED * deltaTime;
      y += vy * BIT_SPEED * deltaTime;

      if (x < -20) x = windowSize.width + 20;
      if (x > windowSize.width + 20) x = -20;
      if (y < -20) y = windowSize.height + 20;
      if (y > windowSize.height + 20) y = -20;

      return { ...bit, x, y };
    }));
  }, [windowSize]);

  useGameLoop(updateBits);

  if (!windowSize.width) return null;

  return (
    <div className="absolute inset-0 opacity-20">
      {bits.map(bit => (
        <div
          key={bit.id}
          className="absolute top-0 left-0"
          style={{ transform: `translate(${bit.x}px, ${bit.y}px)` }}
        >
          <Image src={bit.icon} alt="Game bit" width={16} height={16} />
        </div>
      ))}
    </div>
  );
};
