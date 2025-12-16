import type { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
  image: string;
  title: ReactNode;
  subtitle?: ReactNode;
  heightClass?: string; // e.g., "h-[60vh]"
  align?: 'center' | 'left';
}>;

export default function Hero({ image, title, subtitle, heightClass = 'h-[60vh]', align = 'center' }: Props) {
  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0">
        <img src={image} alt="hero" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className={`relative z-10 w-full ${align === 'center' ? 'text-center' : ''}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">{title}</h1>
          {subtitle ? <p className="text-2xl text-white/95 font-medium">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}
