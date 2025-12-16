import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import type { BlogPost } from '@/types';
import Hero from '@/components/feature/Hero';
import SectionHeader from '@/components/feature/SectionHeader';
import Container from '@/components/ui/Container';
import { SITE } from '@/config/site';
import LinkButton from '@/components/ui/LinkButton';
import CircleIcon from '@/components/ui/CircleIcon';
import { categories as BLOG_CATEGORIES, blogPosts as BLOG_POSTS } from '@/data/blog';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('すべて');

  const categories = BLOG_CATEGORIES as unknown as string[];
  const blogPosts: BlogPost[] = BLOG_POSTS;

  const filteredPosts = selectedCategory === 'すべて' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>

      {/* Hero Section (common) */}
      <Hero
        image="https://readdy.ai/api/search-image?query=modern%20international%20share%20house%20community%20blog%20concept%2C%20diverse%20people%20sharing%20stories%20and%20experiences%2C%20warm%20welcoming%20atmosphere%2C%20multicultural%20environment%2C%20lifestyle%20photography%2C%20bright%20natural%20lighting%2C%20contemporary%20interior%20design%2C%20friendly%20community%20space&width=1920&height=600&seq=bloghero001&orientation=landscape"
        title={<>Blog</>}
        subtitle={<>MARUTAKEでの日常、イベント、住人の声をお届けします</>}
        heightClass="h-[60vh]"
      />

      {/* Category Filter */}
      <section className="py-12 bg-surface-1 border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-brand text-white shadow-lg'
                    : 'bg-surface-4 text-gray-700 hover:bg-surface-2'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

  {/* Blog Posts Grid */}
      <section className="py-24 bg-surface-2">
        <Container>
      <SectionHeader title={<>記事一覧</>} subtitle={<>最新の投稿</>} size="md" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-surface-4 rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-surface-2/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <i className="ri-calendar-line"></i>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="ri-time-line"></i>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <CircleIcon icon="ri-user-line" size="sm" />
                      <span className="text-sm text-gray-700">{post.author}</span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary text-sm font-medium hover:text-accent transition-colors whitespace-nowrap cursor-pointer"
                    >
                      続きを読む →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-surface-1">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-surface-4 rounded-3xl p-12 shadow-lg">
            <CircleIcon icon="ri-mail-line" size="xl" className="mx-auto mb-6" iconClassName="text-3xl" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              最新情報をお届けします
            </h2>
            <p className="text-gray-600 mb-8">
              MARUTAKEの最新ニュースやイベント情報をLINEでお知らせします
            </p>
            <LinkButton href={SITE.social.line} target="_blank" rel="noopener noreferrer">
              LINEで友だち追加
              <i className="ri-arrow-right-line ml-3 text-xl"></i>
            </LinkButton>
          </div>
        </div>
      </section>

    </Layout>
  );
}
