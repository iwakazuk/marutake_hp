import Layout from '@/components/layout/Layout';
import Hero from '@/components/feature/Hero';
import { useParams, Link } from 'react-router-dom';
import { blogPosts as BLOG_POSTS } from '@/data/blog';

export default function BlogDetail() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => String(p.id) === String(id));

  if (!post) {
    return (
      <Layout>
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">記事が見つかりませんでした</h1>
            <Link to="/blog" className="text-primary font-medium">ブログ一覧へ戻る →</Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero
        image={post.image}
        title={<>{post.title}</>}
        subtitle={<>{post.category}・{post.date}・{post.readTime}</>}
        heightClass="h-[50vh]"
      />

      <section className="py-24 bg-surface-2">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-neutral max-w-none">
            <p>{post.excerpt}</p>
            <p>...本文は準備中です。イベントレポートや住人インタビューなど、今後追記していきます。</p>
          </div>
          <div className="mt-8">
            <Link to="/blog" className="text-primary font-medium">← ブログ一覧へ</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
