import type { HTMLAttributes } from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const sizeClasses: Record<Size, { container: string; icon: string }> = {
  sm: { container: 'w-8 h-8', icon: 'text-base' },
  md: { container: 'w-10 h-10', icon: 'text-lg' },
  lg: { container: 'w-14 h-14', icon: 'text-2xl' },
  xl: { container: 'w-16 h-16', icon: 'text-3xl' },
};

type Props = HTMLAttributes<HTMLDivElement> & {
  icon: string; // e.g., 'ri-home-4-line'
  size?: Size;
  iconClassName?: string;
  ariaLabel?: string;
};

export default function CircleIcon({
  icon,
  size = 'md',
  className = '',
  iconClassName = '',
  ariaLabel,
  ...rest
}: Props) {
  const s = sizeClasses[size];
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full bg-surface-3 ${s.container} ${className}`}
      aria-label={ariaLabel}
      {...rest}
    >
      <i className={`${icon} text-text-2 ${s.icon} ${iconClassName}`}></i>
    </div>
  );
}

