import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Color cycling utility for alternating theme (Yellow -> Red -> Green)
export function getAlternatingColor(index: number): {
    border: string;
    text: string;
    glow: string;
    glowColor: string;
} {
    const colors = [
        {
            border: 'border-neon-yellow/50 hover:border-neon-yellow',
            text: 'text-neon-yellow',
            glow: 'box-glow-yellow',
            glowColor: 'rgba(255, 255, 0, 0.3)',
        },
        {
            border: 'border-neon-red/50 hover:border-neon-red',
            text: 'text-neon-red',
            glow: 'box-glow-red',
            glowColor: 'rgba(255, 0, 85, 0.3)',
        },
        {
            border: 'border-neon-green-bright/50 hover:border-neon-green-bright',
            text: 'text-neon-green-bright',
            glow: 'box-glow-green',
            glowColor: 'rgba(57, 255, 20, 0.3)',
        },
    ];

    return colors[index % colors.length];
}
