import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import CtaSection from '@/components/feature/CtaSection';
import Hero from '@/components/feature/Hero';
import SectionHeader from '@/components/feature/SectionHeader';
import Container from '@/components/ui/Container';
import TabsBar from '@/components/ui/TabsBar';
import { SITE } from '@/config/site';
import CircleIcon from '@/components/ui/CircleIcon';

export default function Concept() {
  const [activeTab, setActiveTab] = useState<'features' | 'sanno' | 'enjoy'>('features');

  // Sync tab with URL hash using router location
  const location = useLocation();
  useEffect(() => {
    const key = (location.hash || '').replace('#', '').toLowerCase();
    if (key === 'features') setActiveTab('features');
    else if (key === 'sanno') setActiveTab('sanno');
    else if (key === 'how-to-enjoy' || key === 'enjoy') setActiveTab('enjoy');
  }, [location.hash]);

  const features = [
    {
      title: '国際交流',
      description: '日本人と外国人が5：5の比率で暮らす環境。毎日が異文化交流の場です。',
      image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20people%20from%20different%20countries%20having%20animated%20conversation%20in%20modern%20share%20house%20living%20room%2C%20international%20cultural%20exchange%2C%20warm%20friendly%20atmosphere%2C%20natural%20lighting%2C%20multicultural%20friendship%2C%20lifestyle%20photography&width=800&height=600&seq=feature101&orientation=landscape',
      icon: 'ri-global-line',
      color: 'bg-primary'
    },
    {
      title: '英語環境',
      description: '日常会話で自然に英語が身につく環境。語学学校に通わなくても上達します。',
      image: 'https://readdy.ai/api/search-image?query=young%20people%20having%20bilingual%20conversation%20mixing%20English%20and%20Japanese%20in%20modern%20share%20house%2C%20language%20learning%20atmosphere%2C%20casual%20friendly%20setting%2C%20natural%20lighting%2C%20cultural%20exchange%20moment%2C%20lifestyle%20photography&width=800&height=600&seq=feature102&orientation=landscape',
      icon: 'ri-translate-2',
      color: 'bg-primary-alt'
    },
    {
      title: 'イベント充実',
      description: '月2回のごはん会、誕生日パーティー、映画鑑賞会など。自然と仲良くなれます。',
      image: 'https://readdy.ai/api/search-image?query=diverse%20group%20celebrating%20birthday%20party%20in%20modern%20share%20house%2C%20colorful%20decorations%2C%20happy%20people%20laughing%20together%2C%20warm%20festive%20atmosphere%2C%20natural%20lighting%2C%20multicultural%20celebration%2C%20lifestyle%20photography&width=800&height=600&seq=feature103&orientation=landscape',
      icon: 'ri-calendar-event-line',
      color: 'bg-primary'
    },
    {
      title: '好立地',
      description: '天王寺駅徒歩5分。梅田・難波へも15分以内。通勤・通学に便利な立地です。',
      image: 'https://readdy.ai/api/search-image?query=Tennoji%20station%20area%20in%20Osaka%20Japan%20at%20evening%2C%20modern%20urban%20landscape%2C%20busy%20train%20station%2C%20people%20commuting%2C%20city%20lights%2C%20convenient%20location%2C%20contemporary%20Japanese%20cityscape%2C%20warm%20lighting&width=800&height=600&seq=feature104&orientation=landscape',
      icon: 'ri-map-pin-line',
      color: 'bg-primary'
    },
    {
      title: '充実設備',
      description: '高速Wi-Fi、洗濯機、乾燥機、調理器具完備。すぐに生活を始められます。',
      image: 'https://readdy.ai/api/search-image?query=modern%20well-equipped%20share%20house%20kitchen%20with%20appliances%2C%20clean%20organized%20space%2C%20contemporary%20interior%20design%2C%20natural%20lighting%2C%20functional%20living%20space%2C%20comfortable%20home%20atmosphere&width=800&height=600&seq=feature105&orientation=landscape',
      icon: 'ri-home-wifi-line',
      color: 'bg-primary'
    },
    {
      title: '安心サポート',
      description: '24時間緊急連絡対応。日本語・英語でのサポート体制が整っています。',
      image: 'https://readdy.ai/api/search-image?query=friendly%20house%20manager%20helping%20residents%20in%20modern%20share%20house%2C%20supportive%20atmosphere%2C%20professional%20service%2C%20warm%20welcoming%20environment%2C%20natural%20lighting%2C%20customer%20care%20moment%2C%20lifestyle%20photography&width=800&height=600&seq=feature106&orientation=landscape',
      icon: 'ri-customer-service-2-line',
      color: 'bg-primary'
    }
  ];

  const enjoyments = [
    {
      title: '毎日の交流',
      description: 'リビングで自然に生まれる会話。料理を作りながら、映画を見ながら、いつでも誰かと話せる環境です。',
      image: 'https://readdy.ai/api/search-image?query=diverse%20young%20people%20chatting%20casually%20in%20modern%20share%20house%20living%20room%2C%20natural%20conversation%2C%20warm%20friendly%20atmosphere%2C%20comfortable%20seating%2C%20natural%20lighting%2C%20multicultural%20friendship%2C%20lifestyle%20photography&width=800&height=600&seq=enjoy101&orientation=landscape',
      icon: 'ri-chat-smile-3-line',
      color: 'bg-primary'
    },
    {
      title: '料理パーティー',
      description: '各国の料理を作り合う楽しみ。日本のカレー、アメリカのハンバーガー、台湾の小籠包...食卓が世界旅行に。',
      image: 'https://readdy.ai/api/search-image?query=multicultural%20group%20cooking%20together%20in%20modern%20share%20house%20kitchen%2C%20preparing%20international%20dishes%2C%20happy%20cooking%20scene%2C%20collaborative%20cooking%2C%20warm%20atmosphere%2C%20natural%20lighting%2C%20cultural%20food%20exchange&width=800&height=600&seq=enjoy102&orientation=landscape',
      icon: 'ri-restaurant-line',
      color: 'bg-primary-alt'
    },
    {
      title: '週末のお出かけ',
      description: '大阪観光、カフェ巡り、BBQ、カラオケ。住民同士で週末を楽しむイベントが盛りだくさん。',
      image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20friends%20exploring%20Osaka%20city%20together%2C%20sightseeing%20adventure%2C%20happy%20tourists%2C%20urban%20exploration%2C%20warm%20sunny%20day%2C%20friendship%20moment%2C%20lifestyle%20photography%2C%20joyful%20atmosphere&width=800&height=600&seq=enjoy103&orientation=landscape',
      icon: 'ri-map-2-line',
      color: 'bg-primary'
    },
    {
      title: '言語交換',
      description: '日本語を教えたり、英語を学んだり。お互いに先生であり生徒。自然な形で語学力が向上します。',
      image: 'https://readdy.ai/api/search-image?query=young%20people%20doing%20language%20exchange%20study%20session%20in%20share%20house%2C%20teaching%20each%20other%2C%20books%20and%20notes%2C%20collaborative%20learning%2C%20warm%20atmosphere%2C%20natural%20lighting%2C%20cultural%20exchange%20moment&width=800&height=600&seq=enjoy104&orientation=landscape',
      icon: 'ri-book-open-line',
      color: 'bg-primary'
    },
    {
      title: '誕生日サプライズ',
      description: '住民の誕生日は特別な日。みんなでサプライズを企画して、忘れられない思い出を作ります。',
      image: 'https://readdy.ai/api/search-image?query=surprise%20birthday%20celebration%20in%20share%20house%2C%20happy%20people%20with%20cake%20and%20decorations%2C%20joyful%20moment%2C%20warm%20festive%20atmosphere%2C%20natural%20lighting%2C%20friendship%20celebration%2C%20lifestyle%20photography&width=800&height=600&seq=enjoy105&orientation=landscape',
      icon: 'ri-cake-3-line',
      color: 'bg-primary'
    },
    {
      title: '屋上BBQ',
      description: '天気の良い日は屋上でBBQ。夕日を見ながら、みんなで食事を楽しむ贅沢な時間。',
      image: 'https://readdy.ai/api/search-image?query=diverse%20group%20having%20rooftop%20BBQ%20party%20at%20sunset%2C%20grilling%20food%2C%20happy%20gathering%2C%20warm%20evening%20atmosphere%2C%20city%20view%2C%20social%20event%2C%20lifestyle%20photography%2C%20joyful%20celebration&width=800&height=600&seq=enjoy106&orientation=landscape',
      icon: 'ri-fire-line',
      color: 'bg-primary'
    }
  ];

  return (
    <Layout>

      {/* Hero Section (common) */}
      <Hero
        image="https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20international%20people%20enjoying%20life%20together%20in%20modern%20share%20house%2C%20laughing%20and%20having%20fun%2C%20warm%20friendly%20atmosphere%2C%20natural%20lighting%2C%20multicultural%20community%2C%20lifestyle%20photography%2C%20vibrant%20social%20scene&width=1920&height=1080&seq=concept-hero&orientation=landscape"
        title={<>コンセプト</>}
        subtitle={<>ただの住まいじゃない。<br />人生を豊かにする、新しい暮らし方。</>}
        heightClass="h-[70vh]"
      />

      {/* Tab Navigation */}
      <TabsBar>
        <Tabs
          value={activeTab}
          onChange={(v: string) => {
            const val = v as 'features' | 'sanno' | 'enjoy';
            setActiveTab(val);
            const hash = val === 'enjoy' ? 'how-to-enjoy' : val;
            window.location.hash = hash;
          }}
        >
          <TabsList>
            <TabsTrigger value="features">MARUTAKEの特徴</TabsTrigger>
            <TabsTrigger value="sanno">山王</TabsTrigger>
            <TabsTrigger value="enjoy">MARUTAKEの楽しみ方</TabsTrigger>
          </TabsList>
        </Tabs>
      </TabsBar>

      {/* Features Tab */}
      {activeTab === 'features' && (
        <section id="features" className="py-24 bg-surface-2 scroll-mt-24">
          <Container>
            <SectionHeader title={<>MARUTAKEの特徴</>} subtitle={<>ここでしか体験できない、6つの魅力</>} />

            <div className="space-y-24">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-96 object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <CircleIcon icon={feature.icon} size="xl" className="mb-6" iconClassName="text-2xl" />
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* こんな人に向いています Section */}
            <div className="mt-32">
              <SectionHeader title={<>こんな人に向いています</>} subtitle={<>MARUTAKEで充実した生活を送れる方々</>} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-primary-alt/10 rounded-3xl p-8 border border-primary-alt/20">
                  <CircleIcon icon="ri-plane-line" size="xl" className="mb-6" iconClassName="text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    大阪で長期滞在したい<br />留学生・ワーホリの方
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    日本文化を深く体験しながら、国際的なコミュニティで生活したい方に最適です。日本語の上達と異文化交流を同時に楽しめます。
                  </p>
                </div>

                <div className="bg-primary-alt/10 rounded-3xl p-8 border border-primary-alt/20">
                  <CircleIcon icon="ri-translate-2" size="xl" className="mb-6" iconClassName="text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    英語/日本語を使う<br />環境に身を置きたい人
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    日常的に英語と日本語が飛び交う環境で、自然に語学力を向上させたい方。語学学校に通わなくても実践的な会話力が身につきます。
                  </p>
                </div>

                <div className="bg-primary-alt/10 rounded-3xl p-8 border border-primary-alt/20">
                  <CircleIcon icon="ri-briefcase-line" size="xl" className="mb-6" iconClassName="text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    個室は欲しいけど、<br />人とのつながりも欲しい<br />社会人/フリーランス
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    プライベート空間を確保しながら、仕事後や休日に気軽に交流できる環境を求める方。一人暮らしの孤独感なく、充実した生活が送れます。
                  </p>
                </div>

                <div className="bg-primary-alt/10 rounded-3xl p-8 border border-primary-alt/20">
                  <CircleIcon icon="ri-palette-line" size="xl" className="mb-6" iconClassName="text-2xl" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    クリエイターや<br />表現活動をしている人
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    多様なバックグラウンドを持つ住民との交流から刺激を受け、創作活動のインスピレーションを得たい方。アーティスト、デザイナー、ライターなど様々な職業の方が暮らしています。
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Sanno Tab */}
      {activeTab === 'sanno' && (
        <section id="sanno" className="py-24 bg-surface-2 scroll-mt-24">
          <Container className="max-w-5xl">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">
                山王というまち
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                天王寺から徒歩5分。下町の温かさが残る、特別な場所。
              </p>
            </div>

            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-16">
              <img
                src="https://readdy.ai/api/search-image?query=traditional%20Japanese%20neighborhood%20street%20view%2C%20Osaka%20downtown%20area%2C%20local%20shops%20and%20residential%20buildings%2C%20warm%20community%20atmosphere%2C%20nostalgic%20urban%20landscape%2C%20everyday%20life%20scene%2C%20natural%20lighting%2C%20authentic%20Japanese%20town&width=1600&height=900&seq=sanno-hero&orientation=landscape"
                alt="山王の街並み"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>

            {/* Introduction */}
            <div className="mb-20">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                山王は、大阪の中心地・天王寺から徒歩わずか5分という便利な立地にありながら、昔ながらの下町の雰囲気が色濃く残る特別なエリアです。
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                大通りから一本入ると、そこには地元の人々が行き交う商店街や、何十年も続く老舗のお店、そして温かいコミュニティが広がっています。
              </p>
            </div>

            {/* Features Grid */}
            <div className="space-y-16">
              {/* Feature 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://readdy.ai/api/search-image?query=traditional%20Japanese%20shopping%20street%2C%20local%20small%20shops%20and%20stores%2C%20friendly%20neighborhood%20atmosphere%2C%20everyday%20shopping%20scene%2C%20warm%20lighting%2C%20community%20gathering%20place%2C%20authentic%20local%20market&width=800&height=600&seq=sanno-shopping&orientation=landscape"
                      alt="商店街"
                      className="w-full h-80 object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-block bg-primary-alt text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    商店街
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    地元に愛される商店街
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    山王商店街には、昔ながらの八百屋さん、お肉屋さん、パン屋さんなど、地元の人々に愛されるお店が並んでいます。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    店主さんたちとの会話も楽しく、「おかえり」と声をかけてもらえる温かさがあります。大型スーパーでは味わえない、人と人とのつながりがここにはあります。
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://readdy.ai/api/search-image?query=cozy%20Japanese%20local%20restaurant%20interior%2C%20traditional%20izakaya%20atmosphere%2C%20warm%20lighting%2C%20wooden%20furniture%2C%20authentic%20dining%20experience%2C%20welcoming%20ambiance%2C%20local%20food%20culture&width=800&height=600&seq=sanno-restaurant&orientation=landscape"
                      alt="飲食店"
                      className="w-full h-80 object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-block bg-primary-alt text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    飲食店
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    隠れた名店がいっぱい
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    山王には、地元の人だけが知る隠れた名店がたくさんあります。昔ながらの定食屋さん、こだわりのラーメン店、おしゃれなカフェまで。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    MARUTAKEの住民たちも、お気に入りのお店を見つけて通っています。新しいお店を発見する楽しみも、この街の魅力の一つです。
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://readdy.ai/api/search-image?query=friendly%20Japanese%20neighborhood%20community%2C%20local%20people%20greeting%20each%20other%20on%20street%2C%20warm%20social%20interaction%2C%20everyday%20life%20scene%2C%20community%20bonds%2C%20welcoming%20atmosphere%2C%20natural%20candid%20moment&width=800&height=600&seq=sanno-community&orientation=landscape"
                      alt="コミュニティ"
                      className="w-full h-80 object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-block bg-primary-alt text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    コミュニティ
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    温かい人々との出会い
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    山王の最大の魅力は、そこに住む人々の温かさです。道で会えば挨拶を交わし、困っていれば助けてくれる。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    MARUTAKEの外国人住民たちも、地域の方々に温かく受け入れられています。「日本の本当の暮らし」を体験できる、貴重な環境です。
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://readdy.ai/api/search-image?query=Osaka%20Tennoji%20area%20cityscape%2C%20urban%20convenience%2C%20train%20station%20nearby%2C%20accessible%20location%2C%20modern%20city%20infrastructure%2C%20vibrant%20downtown%20area%2C%20easy%20transportation%20access&width=800&height=600&seq=sanno-access&orientation=landscape"
                      alt="アクセス"
                      className="w-full h-80 object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-block bg-primary-alt text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                    アクセス
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    便利さと静けさの両立
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    天王寺まで徒歩5分という抜群のアクセス。大阪の主要エリアへも電車一本で行けます。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    それでいて、住宅街は静かで落ち着いた雰囲気。都会の便利さと、下町の静けさを両方楽しめる、理想的な立地です。
                  </p>
                </div>
              </div>
            </div>

            {/* Local Events */}
            <div className="mt-20 bg-surface-2 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                山王の年間イベント
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-1 rounded-2xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <CircleIcon icon="ri-sun-line" size="md" className="w-12 h-12" iconClassName="text-xl" />
                    <h4 className="text-xl font-bold text-gray-900">春祭り</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    毎年4月に開催される地域のお祭り。屋台が並び、地元の人々が集まる賑やかなイベントです。
                  </p>
                </div>

                <div className="bg-surface-1 rounded-2xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <CircleIcon icon="ri-flashlight-line" size="md" className="w-12 h-12" iconClassName="text-xl" />
                    <h4 className="text-xl font-bold text-gray-900">夏祭り・盆踊り</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    8月の盆踊り大会。浴衣を着て参加する外国人住民も多く、日本文化を体験できる絶好の機会です。
                  </p>
                </div>

                <div className="bg-surface-1 rounded-2xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <CircleIcon icon="ri-leaf-line" size="md" className="w-12 h-12" iconClassName="text-xl" />
                    <h4 className="text-xl font-bold text-gray-900">秋の収穫祭</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    10月に開催される収穫祭。地元の新鮮な野菜や果物が並び、季節の味覚を楽しめます。
                  </p>
                </div>

                <div className="bg-surface-1 rounded-2xl p-6 shadow-md">
                  <div className="flex items-center space-x-3 mb-3">
                    <CircleIcon icon="ri-gift-line" size="md" className="w-12 h-12" iconClassName="text-xl" />
                    <h4 className="text-xl font-bold text-gray-900">年末イベント</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    12月には商店街でイルミネーションが点灯。年末の賑わいを感じられる温かい雰囲気です。
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="mt-20 bg-surface-3 rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">
                山王で、本当の大阪を体験しませんか？
              </h3>
              <p className="text-xl leading-relaxed mb-8">
                観光地では味わえない、地元の人々との温かい交流。<br />
                それが、山王の最大の魅力です。
              </p>
              <div className="inline-block bg-surface-2/10 backdrop-blur-sm rounded-2xl px-8 py-4">
                <p className="text-lg font-medium italic">
                  "Experience authentic Osaka life in Sanno"
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Enjoy Tab */}
      {activeTab === 'enjoy' && (
        <section id="how-to-enjoy" className="py-24 bg-surface-2 scroll-mt-24">
          <Container>
            <SectionHeader title={<>MARUTAKEの楽しみ方</>} subtitle={<>毎日が特別になる、6つの楽しみ方</>} />

            <div className="space-y-24">
              {enjoyments.map((enjoyment, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={enjoyment.image}
                        alt={enjoyment.title}
                        className="w-full h-96 object-cover object-top"
                      />
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <CircleIcon icon={enjoyment.icon} size="xl" className="mb-6" iconClassName="text-2xl" />
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      {enjoyment.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {enjoyment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section (common) */}
      <CtaSection
        variant="dark"
        title={<>
          まずは見学から<br />始めませんか？
        </>}
        subtitle={<>実際の雰囲気を体験して、住民と話してみてください。<br />オンライン見学も対応しています。</>}
        href={SITE.social.line}
        buttonText={<>LINEで見学予約</>}
        afterContent={
          <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
            <div className="flex items-center space-x-2">
              <i className="ri-time-line text-lg"></i>
              <span>見学所要時間：30分</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-calendar-check-line text-lg"></i>
              <span>平日・週末対応可</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-video-line text-lg"></i>
              <span>オンライン見学OK</span>
            </div>
          </div>
        }
      />

    </Layout>
  );
}
