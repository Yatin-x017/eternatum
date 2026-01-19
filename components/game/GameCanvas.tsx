'use client';

import React, { useEffect, useRef } from 'react';
import { PhaserConfig } from './PhaserConfig';

const GameCanvas: React.FC = () => {
    const gameRef = useRef<Phaser.Game | null>(null);

    useEffect(() => {
        // Dynamically import Phaser to avoid SSR issues
        const initPhaser = async () => {
            if (typeof window !== 'undefined' && !gameRef.current) {
                const Phaser = (await import('phaser')).default;
                gameRef.current = new Phaser.Game(PhaserConfig);
            }
        };

        initPhaser();

        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        };
    }, []);

    return <div id="game-container" className="h-full w-full bg-black d-flex items-center justify-center overflow-hidden" />;
};

export default GameCanvas;
