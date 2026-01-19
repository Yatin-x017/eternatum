import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'game' | 'stats';
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', hoverEffect = true, children, ...props }, ref) => {

        const baseStyles = "relative overflow-hidden rounded-lg border border-white/10 bg-surface text-gray-100 transition-all duration-300";

        const variants = {
            default: "p-6",
            game: "p-0 group border-white/5 hover:border-cyan-500/50",
            stats: "p-4 border-l-4 border-l-purple-500 bg-surface-highlight",
        };

        const hoverStyles = hoverEffect ? "hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:border-cyan-500/30" : "";

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], hoverStyles, className)}
                {...props}
            >
                {/* Corner Accents for Game Cards */}
                {variant === 'game' && (
                    <>
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                )}
                {children}
            </div>
        );
    }
);
Card.displayName = "Card";

export { Card };
