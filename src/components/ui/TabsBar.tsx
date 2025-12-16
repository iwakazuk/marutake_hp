import type { PropsWithChildren } from 'react';
import Container from '@/components/ui/Container';

type Props = PropsWithChildren<{ className?: string; sticky?: boolean }>;

export default function TabsBar({ children, className = '', sticky = false }: Props) {
  return (
    <section
      className={`${sticky ? 'sticky top-0 z-40' : ''} bg-surface-1 border-b border-gray-200 shadow-sm ${className}`}
    >
      <Container className="py-4">{children}</Container>
    </section>
  );
}
