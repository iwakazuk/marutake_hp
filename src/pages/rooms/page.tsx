import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import CtaSection from '@/components/feature/CtaSection';
import Hero from '@/components/feature/Hero';
import type { Room } from '@/types';
import { rooms as ROOM_DATA, sharedSpaces as SHARED_SPACES } from '@/data/rooms';
import SectionHeader from '@/components/feature/SectionHeader';
import Container from '@/components/ui/Container';
import TabsBar from '@/components/ui/TabsBar';
import { SITE } from '@/config/site';
import LinkButton from '@/components/ui/LinkButton';

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeTab, setActiveTab] = useState<'rooms' | 'shared'>('rooms');

  // Sync tab with URL hash using router location
  const location = useLocation();
  useEffect(() => {
    const key = (location.hash || '').replace('#', '').toLowerCase();
    if (key === 'rooms' || key === 'private') setActiveTab('rooms');
    else if (key === 'shared' || key === 'common') setActiveTab('shared');
  }, [location.hash]);

  const rooms: Room[] = ROOM_DATA;

  const sharedSpaces = SHARED_SPACES;

  return (
    <Layout>

      {/* Hero Section (common) */}
      <Hero
        image="https://readdy.ai/api/search-image?query=modern%20share%20house%20interior%20hallway%20with%20multiple%20bedroom%20doors%2C%20clean%20bright%20design%2C%20natural%20light%2C%20welcoming%20atmosphere%2C%20contemporary%20residential%20building%2C%20warm%20inviting%20space&width=1920&height=1080&seq=rooms-hero&orientation=landscape"
        title={<>Rooms &amp;<br />Shared Spaces</>}
        subtitle={<>あなたの居場所がここにあります</>}
        heightClass="h-[60vh]"
      />

      {/* Tab Navigation */}
      <TabsBar>
        <Tabs
          value={activeTab}
          onChange={(v: string) => {
            const val = v as 'rooms' | 'shared';
            setActiveTab(val);
            const hash = val; // 'rooms' or 'shared'
            window.location.hash = hash;
          }}
        >
          <TabsList>
            <TabsTrigger value="rooms">個室一覧</TabsTrigger>
            <TabsTrigger value="shared">共用スペース</TabsTrigger>
          </TabsList>
        </Tabs>
      </TabsBar>

      {/* Rooms Section */}
      {activeTab === 'rooms' && (
        <>
          <section id="rooms" className="py-24 bg-surface-2 scroll-mt-24">
            <Container>
            <SectionHeader title={<>個室一覧</>} subtitle={<>あなたのプライベート空間</>} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className="bg-surface-2 rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedRoom(room)}
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-full h-full object-cover object-top"
                      />
                      {room.available ? (
                        <div className="absolute top-4 right-4 bg-primary-alt text-white px-4 py-2 rounded-full text-sm font-medium">
                          空室あり
                        </div>
                      ) : (
                        <div className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          満室
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                      <div className="flex items-baseline space-x-2 mb-4">
                        <span className="text-3xl font-bold text-primary">¥{room.price.toLocaleString()}</span>
                        <span className="text-sm text-gray-500">/月</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-ruler-line text-primary"></i>
                          </div>
                          <span>{room.size}㎡</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-building-line text-primary"></i>
                          </div>
                          <span>{room.floor}階</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-surface-2 text-gray-700 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {room.available && room.availableDate && (
                        <p className="text-sm text-primary-alt font-medium mb-4">
                          入居可能日: {room.availableDate}
                        </p>
                      )}

                      <button className="w-full py-3 bg-brand text-white rounded-full hover:bg-brand-hover transition-colors text-sm font-medium whitespace-nowrap">
                        詳細を見る
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* Floor Plan Section */}
          <section className="py-24 bg-surface-1">
            <Container className="max-w-5xl">
              <SectionHeader title={<>間取り図</>} subtitle={<>MARUTAKEの全体像</>} />

              <div className="bg-surface-2 rounded-3xl p-12 shadow-lg">
                <div className="space-y-8">
                  <div className="bg-surface-2 rounded-2xl p-8 border-2 border-brand">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center mr-3 text-lg">3F</span>
                      3階
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-primary/10 border-2 border-primary rounded-xl p-4 text-center">
                        <p className="font-bold text-gray-900">Room C</p>
                        <p className="text-sm text-gray-600">9㎡</p>
                      </div>
                      <div className="bg-primary-alt/10 border-2 border-primary-alt rounded-xl p-4 text-center">
                        <p className="font-bold text-gray-900">ワークスペース</p>
                      </div>
                      <div className="bg-surface-2 border-2 border-gray-300 rounded-xl p-4 text-center">
                        <p className="font-bold text-gray-900">屋上テラス</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-2 rounded-2xl p-8 border-2 border-brand">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center mr-3 text-lg">2F</span>
                      2階
                    </h3>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-primary/10 border-2 border-primary rounded-xl p-4 text-center">
                        <p className="font-bold text-gray-900">Room A</p>
                        <p className="text-sm text-gray-600">8㎡</p>
                      </div>
                      <div className="bg-primary/10 border-2 border-primary rounded-xl p-4 text-center">
                        <p className="font-bold text-gray-900">Room B</p>
                        <p className="text-sm text-gray-600">10㎡</p>
                      </div>
                      <div className="bg-primary-alt/10 border-2 border-primary-alt rounded-xl p-4 text-center col-span-2">
                        <p className="font-bold text-gray-900">バスルーム・シャワー</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-surface-2 rounded-2xl p-8 border-2 border-brand">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center mr-3 text-lg">1F</span>
                      1階
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-primary/10 border-2 border-primary rounded-xl p-4 text-center">
                        <p className="font-bold text-gray-900">Room D</p>
                        <p className="text-sm text-gray-600">8.5㎡</p>
                      </div>
                      <div className="bg-primary-alt/10 border-2 border-primary-alt rounded-xl p-4 text-center">
                        <p className="font-bold text-gray-900">リビング</p>
                      </div>
                      <div className="bg-primary-alt/10 border-2 border-primary-alt rounded-xl p-4 text-center">
                        <p className="font-bold text-gray-900">キッチン</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center space-x-8 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary/20 border-2 border-primary rounded"></div>
                    <span className="text-gray-700">個室</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary-alt/20 border-2 border-primary-alt rounded"></div>
                    <span className="text-gray-700">共用スペース</span>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {/* Shared Spaces Section */}
      {activeTab === 'shared' && (
        <section id="shared" className="py-24 bg-surface-2 scroll-mt-24">
          <Container>
            <SectionHeader title={<>共用スペース</>} subtitle={<>みんなで使う、つながりの場所</>} />

            <div className="space-y-16">
              {sharedSpaces.map((space, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{space.name}</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{space.description}</p>

                  <div className="bg-surface-4 rounded-2xl p-6 shadow-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">設備・特徴</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {space.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <i className="ri-check-line text-primary-alt text-lg flex-shrink-0"></i>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl h-80">
                        <img
                          src={space.images[0]}
                          alt={space.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                        <img
                          src={space.images[1]}
                          alt={`${space.name} 2`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-lg h-48">
                        <img
                          src={space.images[2]}
                          alt={`${space.name} 3`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA (common) */}
      <CtaSection
        title={<>実際に見学してみませんか？</>}
        subtitle={<>写真だけでは伝わらない雰囲気を、ぜひ体感してください。</>}
        href={SITE.social.line}
        buttonText={<>LINEで見学予約</>}
      />

      {/* Room Detail Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="bg-surface-2 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-surface-2 border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
              <h3 className="text-3xl font-bold text-gray-900">{selectedRoom.name}</h3>
              <button
                onClick={() => setSelectedRoom(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-2 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl text-gray-600"></i>
              </button>
            </div>

            <div className="p-8">
              {/* Basic Info and Features - Top Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Basic Information */}
                  <div className="bg-surface-2 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-information-line text-primary mr-3 text-3xl"></i>
                    基本情報
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">家賃</span>
                      <span className="text-2xl font-bold text-primary">¥{selectedRoom.price.toLocaleString()}/月</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">初期費用</span>
                      <span className="font-medium text-gray-900">敷金1ヶ月・礼金なし</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">光熱費</span>
                      <span className="font-medium text-gray-900">¥8,000/月（定額）</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">広さ</span>
                      <span className="font-medium text-gray-900">{selectedRoom.size}㎡</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">階数</span>
                      <span className="font-medium text-gray-900">{selectedRoom.floor}階</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">契約期間</span>
                      <span className="font-medium text-gray-900">最低3ヶ月〜</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-300">
                      <span className="text-gray-600 font-medium">退去予告</span>
                      <span className="font-medium text-gray-900">1ヶ月前</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-gray-600 font-medium">空室状況</span>
                      {selectedRoom.available ? (
                        <span className="px-4 py-2 bg-primary-alt text-white rounded-full text-sm font-medium">
                          空室あり
                        </span>
                      ) : (
                        <span className="px-4 py-2 bg-gray-500 text-white rounded-full text-sm font-medium">
                          満室
                        </span>
                      )}
                    </div>
                    {selectedRoom.available && selectedRoom.availableDate && (
                      <div className="flex items-center justify-between py-3 bg-primary-alt/10 rounded-xl px-4 -mx-2">
                        <span className="text-gray-700 font-medium">入居可能日</span>
                        <span className="font-bold text-primary-alt text-lg">{selectedRoom.availableDate}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                  <div className="bg-surface-2 rounded-2xl p-6 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-star-line text-primary mr-3 text-3xl"></i>
                    お部屋の特徴
                  </h4>
                  <div className="space-y-4 mb-6">
                    {selectedRoom.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-surface-2 rounded-xl">
                        <i className="ri-check-double-line text-primary-alt text-2xl flex-shrink-0 mt-1"></i>
                        <div>
                          <span className="text-gray-900 font-medium text-lg">{feature}</span>
                          <p className="text-sm text-gray-600 mt-1">
                            {feature === '南向き' && '日当たりが良く、明るい室内環境'}
                            {feature === '日当たり良好' && '朝から夕方まで自然光が入ります'}
                            {feature === 'エアコン完備' && '冷暖房完備で一年中快適'}
                            {feature === '収納スペース' && 'クローゼット付きで荷物もすっきり'}
                            {feature === '広々スペース' && 'ゆとりのある居住空間'}
                            {feature === 'ダブルベッド' && 'ゆったり休める大きなベッド'}
                            {feature === '大型収納' && '長期滞在にも対応できる収納力'}
                            {feature === '静かな環境' && '集中できる落ち着いた空間'}
                            {feature === '最上階' && '眺望良好で開放感あり'}
                            {feature === 'デスク付き' && 'リモートワークや勉強に最適'}
                            {feature === '1階' && '出入りしやすく便利な立地'}
                            {feature === 'アクセス便利' && '玄関から近くて移動が楽'}
                            {feature === '収納充実' && '整理整頓しやすい収納設計'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 bg-primary/10 rounded-xl border-2 border-primary/20">
                    <h5 className="font-bold text-gray-900 mb-2 flex items-center">
                      <i className="ri-chat-quote-line text-primary mr-2"></i>
                      お部屋の雰囲気
                    </h5>
                    <p className="text-gray-700 leading-relaxed">{selectedRoom.description}</p>
                  </div>
                </div>
              </div>

              {/* Images Section */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-image-line text-primary mr-3 text-3xl"></i>
                  お部屋の写真
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {selectedRoom.images.map((image, index) => (
                    <div
                      key={index}
                      className={`rounded-2xl overflow-hidden shadow-lg ${
                        index === 0 ? 'col-span-3 h-96' : 'h-48'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedRoom.name} ${index + 1}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
            <div className="bg-surface-2 rounded-2xl p-6 mb-8 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-lightbulb-line text-primary-alt mr-3 text-2xl"></i>
                  共用設備について
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <i className="ri-wifi-line text-primary-alt"></i>
                    <span>高速WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <i className="ri-restaurant-line text-primary-alt"></i>
                    <span>キッチン</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <i className="ri-tv-line text-primary-alt"></i>
                    <span>リビング</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <i className="ri-shower-line text-primary-alt"></i>
                    <span>シャワー×2</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <i className="ri-t-shirt-line text-primary-alt"></i>
                    <span>洗濯機・乾燥機</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <i className="ri-plant-line text-primary-alt"></i>
                    <span>屋上テラス</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <LinkButton
                  href={SITE.social.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 justify-center"
                >
                  <i className="ri-message-3-line mr-2 text-xl"></i>
                  この部屋について問い合わせる
                </LinkButton>
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="px-8 py-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors font-medium whitespace-nowrap cursor-pointer"
                >
                  閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
