import type { HTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export default function Container({ className = '', children, ...rest }: Props) {
  return (
    <div className={`max-w-7xl mx-auto px-6 ${className}`} {...rest}>
      {children}
    </div>
  );
}

