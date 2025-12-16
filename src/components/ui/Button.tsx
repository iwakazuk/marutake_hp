import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Variant = 'primary' | 'ghost' | 'outline';

type Props = PropsWithChildren<{
  variant?: Variant;
  className?: string;
}> & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, string> = {
  primary:
    'inline-flex items-center px-10 py-4 bg-brand text-white text-sm font-medium rounded-full hover:bg-brand-hover transition-colors',
  ghost:
    'inline-flex items-center px-8 py-3 bg-surface-2/10 text-white rounded-full border border-surface-2/30 hover:bg-surface-2/20 transition-colors',
  outline:
    'inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-surface-2 transition-colors',
};

export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <button className={`${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
