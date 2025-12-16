import Container from '@/components/ui/Container';
import LinkButton from '@/components/ui/LinkButton';
import { SITE } from '@/config/site';
import type { ReactNode } from 'react';

type Variant = 'dark' | 'light';

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  href?: string;
  buttonText: ReactNode;
  variant?: Variant;
  afterContent?: ReactNode; // optional extra (e.g., small bullet info row)
};

export default function CtaSection({ title, subtitle, href = SITE.social.line, buttonText, afterContent }: Props) {
  return (
    <section className={'py-24 bg-surface-3'}>
      <Container className="text-center">
        <h2 className={`text-4xl md:text-4xl font-extrabold mb-6 text-white tracking-wider`}>{title}</h2>
        {subtitle ? (
          <p className={`text-base md:text-xl mb-12 text-white`}>{subtitle}</p>
        ) : null}

        <LinkButton
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant={'light'}
        >
          {buttonText}
          <i className="ri-arrow-right-line ml-3 text-2xl"></i>
        </LinkButton>

        {afterContent ? <div className="mt-12">{afterContent}</div> : null}
      </Container>
    </section>
  );
}
