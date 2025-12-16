import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';

type Size = 'sm' | 'md' | 'lg' | 'xl';
type Spacing = 'tight' | 'normal' | 'loose';

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  size?: Size;
  spacing?: Spacing;
  className?: string;
};

const titleSize: Record<Size, string> = {
  sm: 'text-2xl',
  md: 'text-3xl',
  lg: 'text-5xl',
  xl: 'text-6xl',
};

const subtitleSize: Record<Size, string> = {
  sm: 'text-base',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const blockSpacing: Record<Spacing, string> = {
  tight: 'mb-8',
  normal: 'mb-16',
  loose: 'mb-20',
};

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  size = 'lg',
  spacing = 'normal',
  className = '',
}: Props) {
  return (
    <Container className={`${blockSpacing[spacing]} ${className}`}>
      <div className={align === 'center' ? 'text-center' : ''}>
        <h2 className={`${titleSize[size]} font-bold font-medium text-gray-900 mb-4`}>{title}</h2>
        {subtitle ? <p className={`text-gray-600 ${subtitleSize[size]}`}>{subtitle}</p> : null}
      </div>
    </Container>
  );
}
