import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/feature/Hero';
import SectionHeader from '@/components/feature/SectionHeader';
import { SITE } from '@/config/site';
import LinkButton from '@/components/ui/LinkButton';
import CircleIcon from '@/components/ui/CircleIcon';
import Container from '@/components/ui/Container';
import { categories as FAQ_CATEGORIES, faqs } from '@/data/faq';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('すべて');


  const filteredFAQs = activeCategory === 'すべて' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>

      {/* Hero Section (common) */}
      <Hero
        image="https://readdy.ai/api/search-image?query=friendly%20people%20having%20conversation%20in%20modern%20cozy%20living%20room%2C%20warm%20atmosphere%20with%20natural%20light%2C%20comfortable%20interior%20design%2C%20diverse%20group%20discussing%20and%20smiling%2C%20welcoming%20home%20environment%20with%20soft%20colors&width=1920&height=1080&seq=faq-hero001&orientation=landscape"
        title={<>よくある質問</>}
        subtitle={<>MARUTAKEについて、皆さまからよくいただく質問にお答えします</>}
        heightClass="h-[60vh]"
      />

      {/* Category Filter */}
      <section className="py-12 bg-surface-1 sticky top-16 z-40 border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-center space-x-3 overflow-x-auto pb-2">
            {FAQ_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-surface-4 text-gray-700 hover:bg-surface-2 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-surface-2">
        <Container className="max-w-4xl">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-surface-4 rounded-2xl border border-gray-100 overflow-hidden transition-all hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-surface-2 rounded-full text-xs text-gray-600 mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                    </div>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i
                      className={`ri-arrow-down-s-line text-2xl text-gray-600 transition-transform ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-alt rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <p className="flex-1 text-gray-700 leading-relaxed pt-2">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-surface-2">
        <Container>
          <div className="bg-surface-4 rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader title={<>まだ疑問がありますか？</>} subtitle={<>ここに載っていない質問や、もっと詳しく知りたいことがあれば、お気軽にLINEでお問い合わせください。見学のご予約も承っております。</>} align="left" spacing="tight" />

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CircleIcon icon="ri-chat-smile-3-line" size="md" className="w-10 h-10" iconClassName="text-lg" />
                    <span className="text-gray-700">LINEで気軽に質問できます</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CircleIcon icon="ri-time-line" size="md" className="w-10 h-10" iconClassName="text-lg" />
                    <span className="text-gray-700">24時間以内に返信します</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CircleIcon icon="ri-calendar-check-line" size="md" className="w-10 h-10" iconClassName="text-lg" />
                    <span className="text-gray-700">見学予約もLINEで簡単</span>
                  </div>
                </div>

                <LinkButton href={SITE.social.line} target="_blank" rel="noopener noreferrer">
                  LINEで相談する
                  <i className="ri-arrow-right-line ml-3 text-xl"></i>
                </LinkButton>
              </div>

              <div className="rounded-2xl overflow-hidden h-96">
                <img
                  src="https://readdy.ai/api/search-image?query=friendly%20staff%20member%20helping%20customer%20with%20questions%20in%20modern%20office%2C%20warm%20welcoming%20atmosphere%2C%20professional%20consultation%20scene%2C%20natural%20light%2C%20comfortable%20environment%20with%20plants%20and%20soft%20colors&width=800&height=600&seq=faq-contact001&orientation=landscape"
                  alt="お問い合わせ"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-surface-1">
        <Container>
          <SectionHeader title={<>もっと詳しく知る</>} subtitle={<>MARUTAKEについて、さらに詳しい情報はこちら</>} size="md" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/sharehouse"
              className="group bg-surface-2 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            >
              <CircleIcon icon="ri-information-line" size="xl" className="mb-6 group-hover:scale-110 transition-transform" iconClassName="text-3xl" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">シェアハウス情報</h3>
              <p className="text-gray-600 mb-4">
                料金、入居条件、ハウスルールなど基本情報をご確認いただけます。
              </p>
              <div className="flex items-center text-primary font-medium">
                詳しく見る
                <i className="ri-arrow-right-line ml-2"></i>
              </div>
            </Link>

            <Link
              to="/rooms"
              className="group bg-surface-2 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            >
              <CircleIcon icon="ri-home-4-line" size="xl" className="mb-6 group-hover:scale-110 transition-transform" iconClassName="text-3xl" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">部屋・共用スペース</h3>
              <p className="text-gray-600 mb-4">
                各部屋の詳細情報と共用スペースの写真をご覧いただけます。
              </p>
              <div className="flex items-center text-primary-alt font-medium">
                詳しく見る
                <i className="ri-arrow-right-line ml-2"></i>
              </div>
            </Link>

            <Link
              to="/access"
              className="group bg-surface-2 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            >
              <CircleIcon icon="ri-map-pin-line" size="xl" className="mb-6 group-hover:scale-110 transition-transform" iconClassName="text-3xl" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">アクセス</h3>
              <p className="text-gray-600 mb-4">
                天王寺駅からの行き方と周辺施設の情報をご確認いただけます。
              </p>
              <div className="flex items-center text-primary font-medium">
                詳しく見る
                <i className="ri-arrow-right-line ml-2"></i>
              </div>
            </Link>
          </div>
        </Container>
      </section>

    </Layout>
  );
}
