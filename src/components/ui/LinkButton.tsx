import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

type Variant = 'primary' | 'light' | 'dark' | 'outline';

type Props = PropsWithChildren<{
  variant?: Variant;
  className?: string;
  href: string;
}> & AnchorHTMLAttributes<HTMLAnchorElement>;

const variants: Record<Variant, string> = {
  primary:
    'inline-flex items-center px-10 py-5 bg-brand text-white text-lg font-medium rounded-full hover:bg-brand-hover transition-all shadow-xl hover:shadow-2xl whitespace-nowrap',
  light:
    'inline-flex items-center px-10 py-5 bg-surface-2 text-brand text-lg font-medium rounded-full hover:bg-surface-2 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap',
  dark:
    'inline-flex items-center px-10 py-5 bg-brand text-white text-lg font-medium rounded-full hover:bg-brand-hover transition-all shadow-xl hover:shadow-2xl whitespace-nowrap',
  outline:
    'inline-flex items-center px-10 py-5 border border-gray-300 text-gray-700 text-lg font-medium rounded-full hover:bg-surface-2 transition-colors',
};

export default function LinkButton({ variant = 'primary', className = '', children, href, ...rest }: Props) {
  return (
    <a href={href} className={`${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
