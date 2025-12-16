import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import CtaSection from '@/components/feature/CtaSection';
import Hero from '@/components/feature/Hero';
import CircleIcon from '@/components/ui/CircleIcon';
import TabsBar from '@/components/ui/TabsBar';

export default function Story() {
  const [activeTab, setActiveTab] = useState<'story' | 'logo' | 'owner'>('story');

  // Sync tab with URL hash using router location
  const location = useLocation();
  useEffect(() => {
    const key = (location.hash || '').replace('#', '').toLowerCase();
    if (key === 'story' || key === 'renovation') setActiveTab('story');
    else if (key === 'logo') setActiveTab('logo');
    else if (key === 'owner') setActiveTab('owner');
  }, [location.hash]);

  return (
    <Layout>

      {/* Hero Section (common) */}
      <Hero
        image="https://readdy.ai/api/search-image?query=traditional%20Japanese%20house%20being%20renovated%20into%20modern%20share%20house%2C%20construction%20and%20renovation%20process%2C%20old%20meets%20new%20architecture%2C%20warm%20nostalgic%20atmosphere%2C%20natural%20lighting%2C%20transformation%20story%2C%20heritage%20preservation&width=1920&height=1080&seq=story-hero&orientation=landscape"
        title={<>MARUTAKEが<br />できるまで</>}
        subtitle={<>一軒の古い家が、国際交流の場へと生まれ変わるまでの物語</>}
        heightClass="h-[70vh]"
      />

      {/* Tab Navigation */}
      <TabsBar>
        <Tabs
          value={activeTab}
          onChange={(v: string) => {
            const val = v as 'story' | 'logo' | 'owner';
            setActiveTab(val);
            const hash = val === 'story' ? 'renovation' : val;
            window.location.hash = hash;
          }}
        >
          <TabsList>
            <TabsTrigger value="story">改装ストーリー</TabsTrigger>
            <TabsTrigger value="logo">ロゴの意味</TabsTrigger>
            <TabsTrigger value="owner">オーナー挨拶</TabsTrigger>
          </TabsList>
        </Tabs>
      </TabsBar>

      {/* Story Tab */}
      {activeTab === 'story' && (
        <section id="renovation" className="py-24 bg-surface-2 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">
                改装ストーリー
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                築50年の古い一軒家が、多様な人々が集まる国際シェアハウスへと生まれ変わるまでの道のり。
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="sticky top-32">
                    <div className="inline-block bg-surface-3 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                      2019年 春
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      出会い
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      天王寺・山王エリアで偶然見つけた古い一軒家。誰も住んでいない空き家でしたが、その佇まいに何か特別なものを感じました。
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="https://readdy.ai/api/search-image?query=old%20abandoned%20traditional%20Japanese%20house%20exterior%2C%20weathered%20wooden%20structure%2C%20nostalgic%20atmosphere%2C%20overgrown%20garden%2C%20vintage%20architecture%2C%20natural%20aging%2C%20historical%20building%20before%20renovation%2C%20warm%20afternoon%20light&width=600&height=800&seq=story001&orientation=portrait"
                        alt="改装前の外観"
                        className="w-full h-80 object-cover object-top"
                      />
                      <div className="p-4 bg-surface-2">
                        <p className="text-sm text-gray-600">改装前の外観</p>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="https://readdy.ai/api/search-image?query=old%20Japanese%20house%20interior%20before%20renovation%2C%20dusty%20tatami%20room%2C%20vintage%20sliding%20doors%2C%20aged%20wooden%20beams%2C%20nostalgic%20atmosphere%2C%20natural%20light%20through%20old%20windows%2C%20historical%20interior%20space&width=600&height=800&seq=story002&orientation=portrait"
                        alt="改装前の内部"
                        className="w-full h-80 object-cover object-top"
                      />
                      <div className="p-4 bg-surface-2">
                        <p className="text-sm text-gray-600">改装前の内部</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="sticky top-32">
                    <div className="inline-block bg-primary-alt text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                      2019年 夏〜秋
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      構想と設計
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      「ただのシェアハウスではなく、国際交流の場にしたい」という想いから、設計を開始。住民同士が自然に交流できる空間づくりを目指しました。
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                    <div className="bg-surface-1 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">設計のポイント</h4>
                    <div className="space-y-4">
                      {[
                        {
                          icon: 'ri-group-line',
                          title: '広々としたリビング',
                          desc: '住民が自然に集まれる開放的な共用スペース'
                        },
                        {
                          icon: 'ri-restaurant-line',
                          title: 'アイランドキッチン',
                          desc: '料理を通じたコミュニケーションが生まれる設計'
                        },
                        {
                          icon: 'ri-door-line',
                          title: 'プライベート空間',
                          desc: '一人の時間も大切にできる個室設計'
                        },
                        {
                          icon: 'ri-plant-line',
                          title: '屋上テラス',
                          desc: 'BBQやイベントができる屋外スペース'
                        }
                      ].map((point, index) => (
                        <div key={index} className="flex items-start space-x-4 bg-surface-4 rounded-xl p-4">
                          <CircleIcon icon={point.icon} size="md" className="w-12 h-12 flex-shrink-0" iconClassName="text-xl" />
                          <div>
                            <h5 className="font-bold text-gray-900 mb-1">{point.title}</h5>
                            <p className="text-sm text-gray-600">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="sticky top-32">
                    <div className="inline-block bg-primary-alt text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                      2019年 冬〜2020年 春
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      改装工事
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      約6ヶ月間の改装工事。古い家の良さを残しながら、現代的な快適さを加える作業は試行錯誤の連続でした。
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="https://readdy.ai/api/search-image?query=house%20renovation%20construction%20site%2C%20workers%20renovating%20interior%2C%20construction%20materials%2C%20work%20in%20progress%2C%20transformation%20process%2C%20building%20renovation%20scene%2C%20natural%20lighting%2C%20active%20construction%20work&width=600&height=800&seq=story003&orientation=portrait"
                        alt="改装中の様子1"
                        className="w-full h-80 object-cover object-top"
                      />
                      <div className="p-4 bg-surface-4">
                        <p className="text-sm text-gray-600">改装中の様子</p>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="https://readdy.ai/api/search-image?query=interior%20renovation%20progress%2C%20new%20flooring%20installation%2C%20painting%20walls%2C%20modern%20renovation%20work%2C%20construction%20transformation%2C%20building%20upgrade%20process%2C%20clean%20workspace%2C%20professional%20renovation&width=600&height=800&seq=story004&orientation=portrait"
                        alt="改装中の様子2"
                        className="w-full h-80 object-cover object-top"
                      />
                      <div className="p-4 bg-surface-4">
                        <p className="text-sm text-gray-600">床と壁の施工</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="sticky top-32">
                    <div className="inline-block bg-brand text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                      2020年 5月
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      オープン
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      ついにMARUTAKEがオープン。最初の住民たちを迎え入れ、新しいコミュニティが始まりました。
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="https://readdy.ai/api/search-image?query=modern%20renovated%20share%20house%20living%20room%2C%20bright%20spacious%20interior%2C%20contemporary%20furniture%2C%20natural%20light%2C%20clean%20minimalist%20design%2C%20comfortable%20communal%20space%2C%20welcoming%20atmosphere%2C%20successful%20renovation%20result&width=600&height=800&seq=story005&orientation=portrait"
                        alt="完成したリビング"
                        className="w-full h-80 object-cover object-top"
                      />
                      <div className="p-4 bg-surface-4">
                        <p className="text-sm text-gray-600">完成したリビング</p>
                      </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20new%20share%20house%20residents%20celebrating%20together%2C%20happy%20multicultural%20people%20in%20modern%20living%20room%2C%20welcoming%20party%2C%20international%20community%2C%20joyful%20atmosphere%2C%20warm%20lighting%2C%20friendship%20moment&width=600&height=800&seq=story006&orientation=portrait"
                        alt="最初の住民たち"
                        className="w-full h-80 object-cover object-top"
                      />
                      <div className="p-4 bg-surface-4">
                        <p className="text-sm text-gray-600">最初の住民たち</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="sticky top-32">
                    <div className="inline-block bg-primary-alt text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                      2020年〜現在
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      成長と進化
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      これまでに30カ国以上、100名以上の住民を受け入れてきました。今も新しい出会いと交流が続いています。
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-surface-1 rounded-2xl p-8 text-white">
                    <h4 className="text-2xl font-bold mb-8">MARUTAKEの今</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-5xl font-extrabold mb-2">30+</div>
                        <p className="text-white/80 text-sm">出身国</p>
                      </div>
                      <div className="text-center">
                        <div className="text-5xl font-extrabold mb-2">100+</div>
                        <p className="text-white/80 text-sm">卒業生</p>
                      </div>
                      <div className="text-center">
                        <div className="text-5xl font-extrabold mb-2">500+</div>
                        <p className="text-white/80 text-sm">イベント開催</p>
                      </div>
                      <div className="text-center">
                        <div className="text-5xl font-extrabold mb-2">∞</div>
                        <p className="text-white/80 text-sm">思い出</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Logo Tab */}
      {activeTab === 'logo' && (
        <section id="logo" className="py-24 bg-surface-2 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">
                ロゴの意味
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                MARUTAKEという名前に込められた想い
              </p>
            </div>

            {/* Logo Display */}
            <div className="bg-surface-1 rounded-3xl p-16 mb-16 text-center">
              <div className="text-8xl font-extrabold text-brand mb-8" style={{ fontFamily: 'Noto Serif JP, serif' }}>
                MARUTAKE
              </div>
              <p className="text-3xl text-gray-600 font-medium">丸竹</p>
            </div>

            {/* Meaning Sections */}
            <div className="space-y-12">
              {/* MARU */}
              <div className="bg-surface-4 rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-48 h-48 mx-auto bg-primary rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-7xl font-bold text-white">丸</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">丸（まる）</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      円は完全性と調和の象徴。始まりも終わりもない形は、人と人とのつながりが永遠に続くことを表しています。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <i className="ri-checkbox-circle-fill text-primary text-xl"></i>
                        <span className="text-gray-700">完全性・調和</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-checkbox-circle-fill text-primary text-xl"></i>
                        <span className="text-gray-700">つながりの輪</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-checkbox-circle-fill text-primary text-xl"></i>
                        <span className="text-gray-700">包容力・受容</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TAKE */}
              <div className="bg-surface-4 rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                  <div className="md:w-1/3">
                    <div className="w-48 h-48 mx-auto bg-primary-alt rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-7xl font-bold text-white">竹</span>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">竹（たけ）</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      竹は柔軟でありながら強く、まっすぐに成長します。困難にも折れない強さと、素直に成長する姿勢を表しています。
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <i className="ri-checkbox-circle-fill text-primary-alt text-xl"></i>
                        <span className="text-gray-700">柔軟性と強さ</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-checkbox-circle-fill text-primary-alt text-xl"></i>
                        <span className="text-gray-700">まっすぐな成長</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <i className="ri-checkbox-circle-fill text-primary-alt text-xl"></i>
                        <span className="text-gray-700">清らかさ・誠実さ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Meaning */}
            <div className="mt-16 bg-primary-alt rounded-3xl p-12 text-white text-center">
              <h3 className="text-3xl font-bold mb-6">丸竹 = MARUTAKE</h3>
              <p className="text-xl leading-relaxed mb-8">
                調和のとれたコミュニティの中で、<br />
                一人ひとりがまっすぐに成長していく。<br />
                そんな場所でありたいという願いを込めています。
              </p>
              <div className="inline-block bg-surface-2/10 backdrop-blur-sm rounded-2xl px-8 py-4">
                <p className="text-lg font-medium italic">
                  "A place where everyone grows together in harmony"
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Owner Tab */}
      {activeTab === 'owner' && (
        <section id="owner" className="py-24 bg-surface-2 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold font-serif text-gray-900 mb-6">
                オーナー挨拶
              </h2>
            </div>

            {/* Owner Profile */}
            <div className="flex flex-col md:flex-row gap-12 mb-16">
              <div className="md:w-1/3">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://readdy.ai/api/search-image?query=friendly%20Japanese%20share%20house%20owner%20portrait%2C%20warm%20welcoming%20smile%2C%20professional%20yet%20approachable%2C%20natural%20lighting%2C%20genuine%20expression%2C%20business%20casual%20attire%2C%20confident%20posture%2C%20hospitable%20demeanor&width=600&height=800&seq=owner001&orientation=portrait"
                    alt="オーナー"
                    className="w-full h-96 object-cover object-top"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">田中 健太</h3>
                  <p className="text-gray-600">MARUTAKE オーナー</p>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    MARUTAKEのウェブサイトをご覧いただき、ありがとうございます。オーナーの田中健太です。
                  </p>

                  <p>
                    私自身、20代の頃にオーストラリアとカナダで計3年間生活した経験があります。その時に感じた「異文化の中で暮らす楽しさ」「言葉の壁を越えた友情」「多様な価値観に触れることで広がる視野」。これらの経験が、今の自分を形作っていると感じています。
                  </p>

                  <p>
                    帰国後、日本でも同じような経験ができる場所を作りたいと思い、MARUTAKEを立ち上げました。海外に行かなくても、大阪で国際交流ができる。日本人も外国人も、お互いの文化を尊重し合いながら、一つの家族として暮らせる場所。
                  </p>

                  <p>
                    MARUTAKEは単なる「住む場所」ではありません。ここは、新しい自分に出会える場所。一生の友達ができる場所。人生が変わるきっかけになる場所です。
                  </p>

                  <p className="text-lg font-medium text-gray-900">
                    あなたも、MARUTAKEファミリーの一員になりませんか？
                  </p>
                </div>
              </div>
            </div>

            {/* Owner's Vision */}
            <div className="bg-surface-1 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                MARUTAKEが目指すもの
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <CircleIcon icon="ri-global-line" size="xl" className="w-20 h-20 mx-auto mb-4" iconClassName="text-3xl" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">国際交流の拠点</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    日本人と外国人が自然に交流し、お互いの文化を学び合える場所を提供します。
                  </p>
                </div>

                <div className="text-center">
                  <CircleIcon icon="ri-heart-line" size="xl" className="w-20 h-20 mx-auto mb-4" iconClassName="text-3xl" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">第二の家族</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    血縁を超えた家族のような温かいコミュニティを育んでいきます。
                  </p>
                </div>

                <div className="text-center">
                  <CircleIcon icon="ri-seedling-line" size="xl" className="w-20 h-20 mx-auto mb-4" iconClassName="text-3xl" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">成長の場</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    多様な価値観に触れることで、一人ひとりが成長できる環境を作ります。
                  </p>
                </div>
              </div>
            </div>

            {/* Message from Residents */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                住民からのメッセージ
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-4 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=happy%20young%20woman%20smiling%20warmly%2C%20casual%20portrait%2C%20friendly%20expression%2C%20natural%20lighting%2C%20genuine%20smile%2C%20lifestyle%20photography%2C%20warm%20tones%2C%20approachable%20atmosphere&width=200&height=200&seq=resident-msg001&orientation=squarish"
                      alt="住民"
                      className="w-16 h-16 rounded-full object-cover object-top"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">エミリー（アメリカ）</h4>
                      <p className="text-sm text-gray-500">英語教師・入居2年</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「健太さんは本当に住民のことを考えてくれています。困ったことがあればすぐに相談できるし、イベントも一緒に楽しんでくれる。ここは本当に家族みたいな場所です。」
                  </p>
                </div>

                <div className="bg-surface-4 rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src="https://readdy.ai/api/search-image?query=cheerful%20young%20Japanese%20man%20smiling%20at%20camera%2C%20casual%20friendly%20portrait%2C%20natural%20lighting%2C%20genuine%20expression%2C%20lifestyle%20photography%2C%20warm%20tones%2C%20welcoming%20demeanor&width=200&height=200&seq=resident-msg002&orientation=squarish"
                      alt="住民"
                      className="w-16 h-16 rounded-full object-cover object-top"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">佐藤 大輔（日本）</h4>
                      <p className="text-sm text-gray-500">会社員・入居1年半</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「オーナーの健太さんの人柄が、このシェアハウスの雰囲気を作っていると思います。住民一人ひとりを大切にしてくれる姿勢が、みんなに伝わっています。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaSection
        title={<>MARUTAKEで<br />新しい人生を始めませんか？</>}
        subtitle={<>見学は随時受付中。LINEで気軽にご相談ください。</>}
        buttonText={<>LINEで相談する</>}
      />
    </Layout>
  );
}
