import { cn } from '@/lib/utils';

interface RippleProps {
  className?: string;
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

// Adapted from https://magicui.design/r/ripple.json
export function Ripple({
  className,
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}: RippleProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 select-none', className)}
    >
      {Array.from({ length: numCircles }, (_, index) => {
        const size = mainCircleSize + index * 70;

        return (
          <div
            key={index}
            className="animate-ripple absolute top-1/2 left-[var(--ripple-x,50%)] rounded-full border border-current [transform:translate(-50%,-50%)]"
            style={{
              width: size,
              height: size,
              opacity: Math.max(0, mainCircleOpacity - index * 0.03),
              animationDelay: `${index * 0.16}s`,
            }}
          />
        );
      })}
    </div>
  );
}
