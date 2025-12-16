import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/feature/SectionHeader';
import Container from '@/components/ui/Container';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Layout>
      <section className="py-24 bg-surface-2">
        <Container className="max-w-3xl">
          <SectionHeader
            title={<>ページが見つかりません</>}
            subtitle={<>お探しのページは存在しないか、移動した可能性があります。</>}
          />
          <div className="text-center">
            <Link to="/" className="text-primary font-medium hover:underline">
              ホームに戻る →
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
