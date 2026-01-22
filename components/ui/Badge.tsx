import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'warning' | 'error' | 'outline';
    colorCycle?: boolean;
}

function Badge({ className, variant = 'default', colorCycle = false, ...props }: BadgeProps) {
    const variants = {
        default: "bg-surface-highlight text-cyan-400 border-cyan-500/30",
        success: "bg-green-950/30 text-green-400 border-green-500/30",
        warning: "bg-yellow-950/30 text-yellow-400 border-yellow-500/30",
        error: "bg-red-950/30 text-red-400 border-red-500/30",
        outline: "bg-transparent text-gray-400 border-gray-700",
    };

    const animationClass = colorCycle ? "animate-badge-color-cycle" : "";
    const baseVariantStyle = colorCycle ? "bg-transparent text-neon-red border-neon-red" : variants[variant];

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-pixel font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                baseVariantStyle,
                animationClass,
                className
            )}
            {...props}
        />
    );
}

export { Badge };
