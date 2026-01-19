import Phaser from 'phaser';

export const PhaserConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game-container',
    backgroundColor: '#111',
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
            debug: false,
        },
    },
    scene: {
        create: function () {
            // Default placeholder scene
            const scene = this as Phaser.Scene;
            scene.add.text(400, 300, 'Eternatum Engine Ready', {
                fontSize: '32px',
                color: '#ffffff'
            }).setOrigin(0.5);
        }
    },
};
