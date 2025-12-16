import { useEffect, useMemo, useRef, useState } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';

type SliderProps<T> = PropsWithChildren<{
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  visible?: number; // desired visible items on large screens (default 3)
  gap?: number; // px gap between items (default 16)
  showDots?: boolean;
  showArrows?: boolean;
  autoplay?: boolean;
  interval?: number; // ms (default 3500)
  pauseOnHover?: boolean;
}>; 

export default function Slider<T>({
  items,
  renderItem,
  className = '',
  visible = 3,
  gap = 16,
  showDots = true,
  showArrows = true,
  autoplay = false,
  interval = 3500,
  pauseOnHover = true,
}: SliderProps<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(visible);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive visible count: 1 (mobile), 2 (tablet), 3 (desktop by default)
  useEffect(() => {
    const handleResize = () => {
      const w = containerRef.current?.clientWidth ?? 0;
      setContainerWidth(w);
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(Math.min(2, visible));
      else setVisibleCount(visible);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [visible]);

  const maxIndex = Math.max(items.length - visibleCount, 0);
  const itemWidth = useMemo(() => {
    if (containerWidth === 0) return 0;
    return (containerWidth - gap * (visibleCount - 1)) / visibleCount;
  }, [containerWidth, visibleCount, gap]);

  useEffect(() => {
    // clamp current when visibleCount changes
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    if (items.length <= visibleCount) return;
    if (maxIndex < 1) return;
    const id = window.setInterval(() => {
      if (isPaused) return;
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, Math.max(1000, interval));
    return () => clearInterval(id);
  }, [autoplay, interval, isPaused, maxIndex, items.length, visibleCount]);

  const trackStyle: React.CSSProperties = {
    display: 'flex',
    gap: `${gap}px`,
    transform: `translateX(-${current * (itemWidth + gap)}px)`,
    transition: 'transform 400ms ease',
  };

  const canPrev = current > 0;
  const canNext = current < maxIndex;

  return (
    <div
      className={`relative ${className}`}
      ref={containerRef}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div style={trackStyle}>
          {items.map((item, idx) => (
            <div key={idx} style={{ flex: '0 0 auto', width: itemWidth }}>
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      </div>

      {showArrows && items.length > visibleCount ? (
        <>
          <button
            type="button"
            onClick={() => canPrev && setCurrent((c) => Math.max(c - 1, 0))}
            aria-label="previous"
            className={`absolute left-0 top-1/2 -translate-y-1/2 -mt-6 md:-mt-10 w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/80 shadow transition-opacity cursor-pointer ${
              canPrev ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <i className="ri-arrow-left-s-line text-2xl text-gray-800"></i>
          </button>
          <button
            type="button"
            onClick={() => canNext && setCurrent((c) => Math.min(c + 1, maxIndex))}
            aria-label="next"
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mt-6 md:-mt-10 w-10 h-10 inline-flex items-center justify-center rounded-full bg-white/80 shadow transition-opacity cursor-pointer ${
              canNext ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <i className="ri-arrow-right-s-line text-2xl text-gray-800"></i>
          </button>
        </>
      ) : null}

      {showDots && items.length > visibleCount ? (
        <div className="mt-4 flex items-center justify-center space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === current ? 'bg-gray-800 w-6' : 'bg-gray-400/50 w-2.5'
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
