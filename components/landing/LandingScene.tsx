'use client';

import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const LandingSceneConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'landing-scene',
    transparent: true,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%',
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
        }
    },
    scene: {
        preload: function () {
            // Load nothing for now, procedurally generated
        },
        create: function () {
            const scene = this as Phaser.Scene;
            const width = scene.scale.width;
            const height = scene.scale.height;

            // Retro Grid Effect
            const grid = scene.add.grid(width / 2, height / 2, width * 2, height * 2, 64, 64, 0x000000, 0, 0x00ff00, 0.2);

            // 3D Perspective Tween
            scene.tweens.add({
                targets: grid,
                y: height / 2 + 64,
                duration: 1000,
                repeat: -1,
                ease: 'Linear'
            });

            // Floating Title Particles
            scene.add.particles(0, 0, 'flare', {
                x: { min: 0, max: width },
                y: { min: 0, max: height },
                lifespan: 2000,
                speedY: { min: -10, max: -50 },
                scale: { start: 0.1, end: 0 },
                quantity: 1,
                blendMode: 'ADD',
                emitting: true,
                frequency: 100
            });

            // Handle Resize
            scene.scale.on('resize', (gameSize: Phaser.Structs.Size) => {
                grid.setPosition(gameSize.width / 2, gameSize.height / 2);
                grid.width = gameSize.width * 2;
                grid.height = gameSize.height * 2;
            });
        },
        update: function () {
            // Perspective scrolling loop logic could go here
        }
    }
};

const LandingScene: React.FC = () => {
    const gameRef = useRef<Phaser.Game | null>(null);

    useEffect(() => {
        const initPhaser = async () => {
            if (typeof window !== 'undefined' && !gameRef.current) {
                const Phaser = (await import('phaser')).default;
                gameRef.current = new Phaser.Game(LandingSceneConfig);
            }
        };
        initPhaser();
        return () => {
            if (gameRef.current) {
                gameRef.current.destroy(true);
                gameRef.current = null;
            }
        }
    }, []);

    return <div id="landing-scene" className="absolute inset-0 z-0 pointer-events-none opacity-40" />;
}

export default LandingScene;
