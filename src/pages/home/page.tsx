
import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Room } from '@/types';
import { rooms as ROOM_DATA, sharedSpaces as SHARED_SPACES } from '@/data/rooms';
import homeTopSvg from '@/assets/svg/home-top.svg';
import Layout from '@/components/layout/Layout';
import { SITE } from '@/config/site';
import { useInterval } from '@/hooks/useInterval';
import CtaSection from '@/components/feature/CtaSection';
import LinkButton from '@/components/ui/LinkButton';
import CircleIcon from '@/components/ui/CircleIcon';
import Container from '@/components/ui/Container';
import Slider from '@/components/ui/Slider';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [areaIndex, setAreaIndex] = useState(0);
  const areaSlides = [
    {
      name: '天王寺駅',
      distance: '徒歩5分',
      icon: 'ri-train-line',
      description:
        '大阪の主要ターミナル駅。梅田・難波へのアクセスも抜群です。',
      image:
        'https://readdy.ai/api/search-image?query=Tennoji%20station%20area%20in%20Osaka%20Japan%2C%20modern%20urban%20landscape%2C%20busy%20train%20station%20entrance%2C%20people%20walking%2C%20city%20atmosphere%2C%20daytime%20photography%2C%20contemporary%20Japanese%20cityscape&width=600&height=400&seq=area001&orientation=landscape',
    },
    {
      name: '山王商店街',
      distance: '徒歩3分',
      icon: 'ri-store-2-line',
      description:
        '昔ながらの下町の雰囲気が残る商店街。気さくな人々と温かい交流が魅力です。',
      image:
        'https://readdy.ai/api/search-image?query=traditional%20Japanese%20shopping%20street%20Sanno%20area%20Osaka%2C%20local%20shops%20and%20restaurants%2C%20nostalgic%20downtown%20atmosphere%2C%20friendly%20neighborhood%2C%20warm%20lighting%2C%20authentic%20local%20community%20scene&width=600&height=400&seq=area002&orientation=landscape',
    },
    {
      name: '近所のカフェ',
      distance: '徒歩4分',
      icon: 'ri-cup-line',
      description:
        '気軽に立ち寄れる居心地のいいカフェ。勉強や作業にもぴったりの空間です。',
      image:
        'https://readdy.ai/api/search-image?query=cozy%20neighborhood%20cafe%20in%20Osaka%20Japan%2C%20warm%20inviting%20interior%2C%20local%20coffee%20shop%20atmosphere%2C%20comfortable%20seating%2C%20natural%20light%2C%20friendly%20local%20gathering%20place%2C%20contemporary%20Japanese%20cafe%20design&width=600&height=400&seq=area003&orientation=landscape',
    },
  ];

  const heroImages = [
    "https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20international%20people%20laughing%20and%20talking%20together%20in%20modern%20cozy%20living%20room%2C%20warm%20atmosphere%2C%20natural%20light%20streaming%20through%20windows%2C%20multicultural%20friendship%2C%20candid%20moment%2C%20lifestyle%20photography%2C%20soft%20warm%20tones%2C%20inviting%20home%20interior&width=1920&height=1080&seq=hero001&orientation=landscape",
    "https://readdy.ai/api/search-image?query=international%20friends%20cooking%20together%20in%20modern%20share%20house%20kitchen%2C%20diverse%20people%20preparing%20food%2C%20warm%20friendly%20atmosphere%2C%20natural%20lighting%2C%20multicultural%20community%2C%20lifestyle%20photography%2C%20inviting%20home%20interior%2C%20collaborative%20cooking%20scene&width=1920&height=1080&seq=hero002&orientation=landscape",
    "https://readdy.ai/api/search-image?query=young%20diverse%20people%20enjoying%20movie%20night%20together%20in%20cozy%20share%20house%20living%20room%2C%20comfortable%20sofas%2C%20warm%20lighting%2C%20friendly%20atmosphere%2C%20multicultural%20friendship%2C%20casual%20lifestyle%20moment%2C%20inviting%20home%20interior&width=1920&height=1080&seq=hero003&orientation=landscape",
    "https://readdy.ai/api/search-image?query=international%20residents%20having%20dinner%20party%20together%20in%20modern%20share%20house%2C%20diverse%20people%20sharing%20meal%2C%20warm%20atmosphere%2C%20natural%20lighting%2C%20multicultural%20community%20gathering%2C%20lifestyle%20photography%2C%20inviting%20dining%20space&width=1920&height=1080&seq=hero004&orientation=landscape"
  ];

  useInterval(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  }, 5000);
  useInterval(() => {
    setAreaIndex((prev) => (prev + 1) % areaSlides.length);
  }, 4500);

  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`MARUTAKE Community ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
      <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                index === currentImageIndex ? 'bg-surface-2 w-8' : 'bg-surface-2/50'
              }`}
              aria-label={`画像 ${index + 1} に切り替え`}
            />
          ))}
        </div>
      </section>

      {/* New Introduction Section */}
      <section className="py-24 bg-surface-2">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-6xl font-extrabold text-gray mb-8 tracking-wider">
              house MARUTAKE
            </h2>
            
            <p className="text-xl md:text-3xl text-gray-700 mb-4 font-bold">
              山王駅から徒歩3分「下町コミュニティ」
            </p>
            
            <p className="text-base md:text-xl text-gray-700 mb-12 font-bold">
              大阪で人とのつながりや国際交流を楽しみたい方へ。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-center text-xl md:text-4xl text-gray-700 font-bold mb-8 leading-relaxed">
                遊ぶように生きる家
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                「アーティスト」「留学生」「教師」「モデル」「サラリーマン」「前向きなニート」様々な職業、国籍、性別の【家族】があなたの帰りを待っています。スキップして帰りたくなる日、仕事がうまくいかなかった日、ケンカした日、生きてると毎日いろいろありますが、狭い価値観に捉われずこの家で遊ぶように生きてみませんか？
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20international%20people%20enjoying%20life%20together%20in%20modern%20share%20house%2C%20laughing%20and%20celebrating%2C%20multicultural%20friendship%2C%20warm%20atmosphere%2C%20natural%20lighting%2C%20joyful%20community%20moment%2C%20lifestyle%20photography%2C%20inviting%20home%20interior%2C%20genuine%20happiness&width=800&height=600&seq=intro001&orientation=landscape"
                alt="MARUTAKEの住人たち"
                className="w-full h-96 object-cover object-top"
              />
            </div>
          </div>

          <div className="text-center">
            <LinkButton href={SITE.social.line} target="_blank" rel="noopener noreferrer">
              LINEで気軽に相談
              <i className="ri-arrow-right-line ml-3 text-2xl"></i>
            </LinkButton>
            <img src={homeTopSvg} alt="" className="mx-auto mt-12" />
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="good-points" className="py-24 bg-surface-2 scroll-mt-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-bold text-gray-900 mb-4">
              MARUTAKE のいいところ
            </h2>
          </div>

          <div className="space-y-16">
            {/* 立地 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-6 mb-6">
                  <div className="w-14 h-14 bg-surface-3 rounded-2xl flex items-center justify-center shadow-lg">
                    <i className="ri-map-pin-line text-white text-3xl"></i>
                  </div>
                  <span className="text-3xl md:text-4xl font-serif text-gray-900 uppercase tracking-wider">AREA</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  天王寺5分＋山王の下町コミュニティ
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  大阪の主要駅・天王寺から徒歩5分の好立地。山王エリアは昔ながらの下町文化が残り、地域の人々との温かい交流が楽しめます。コンビニ、スーパー、カフェ、サウナなど生活に必要な施設がすべて徒歩圏内。便利さと温かさが共存する理想的な環境です。
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=Tennoji%20station%20area%20in%20Osaka%20Japan%20with%20traditional%20Sanno%20neighborhood%2C%20modern%20urban%20landscape%20mixed%20with%20nostalgic%20downtown%20atmosphere%2C%20busy%20street%20scene%2C%20people%20walking%2C%20local%20shops%2C%20warm%20inviting%20community%20feeling%2C%20daytime%20photography%2C%20contemporary%20Japanese%20cityscape&width=800&height=600&seq=location001&orientation=landscape"
                  alt="天王寺・山王エリア"
                  className="w-full h-96 object-cover object-top"
                />
              </div>
            </div>

            {/* 国内留学環境 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
                <img
                  src="https://readdy.ai/api/search-image?query=diverse%20international%20people%20having%20animated%20conversation%20mixing%20English%20and%20Japanese%20languages%20in%20modern%20share%20house%20living%20room%2C%20language%20exchange%20atmosphere%2C%20multicultural%20friendship%2C%20warm%20lighting%2C%20natural%20cultural%20exchange%20moment%2C%20lifestyle%20photography%2C%20genuine%20interaction&width=800&height=600&seq=language001&orientation=landscape"
                  alt="国内留学環境"
                  className="w-full h-96 object-cover object-top"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center space-x-6 mb-6">
                  <div className="w-14 h-14 bg-surface-3 rounded-2xl flex items-center justify-center shadow-lg">
                    <i className="ri-translate-2 text-white text-3xl"></i>
                  </div>
                  <span className="text-3xl md:text-4xl font-serif text-gray-900 uppercase tracking-wider">Language</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  日本語・英語が飛び交う日常
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  日本にいながら国際交流ができる環境。日常会話で自然に英語が身につき、異文化理解が深まります。「半年で簡単な英会話ができるようになった」という声も。留学に行かなくても、ここで国内留学体験ができます。様々な国籍の住人との交流で、視野が広がります。
                </p>
              </div>
            </div>

            {/* 安心・清潔 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-6 mb-6">
                  <div className="w-14 h-14 bg-surface-3 rounded-2xl flex items-center justify-center shadow-lg">
                    <i className="ri-shield-check-line text-white text-3xl"></i>
                  </div>
                  <span className="text-3xl md:text-4xl font-serif text-gray-900 uppercase tracking-wider">Safety & Clean</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  安心・清潔な住環境
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  明確なハウスルール、定期的な清掃体制、セキュリティ対策で安心して暮らせます。初めてのシェアハウス生活でも大丈夫。共用スペースは常に清潔に保たれ、快適な生活環境を維持。管理人が常駐し、困ったことがあればすぐに相談できる体制が整っています。
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://readdy.ai/api/search-image?query=clean%20modern%20share%20house%20interior%2C%20spotless%20common%20living%20room%20with%20organized%20space%2C%20bright%20natural%20lighting%2C%20fresh%20atmosphere%2C%20well-maintained%20facilities%2C%20comfortable%20furniture%2C%20hygienic%20environment%2C%20contemporary%20Japanese%20home%20design%2C%20inviting%20clean%20space&width=800&height=600&seq=clean001&orientation=landscape"
                  alt="清潔な住環境"
                  className="w-full h-96 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Rooms & Spaces */}
      <section className="py-24 bg-surface-1">
        <Container>
          {/* Rooms & Spaces (section title) */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold font-serif text-gray-900 mb-4">Rooms & Spaces</h2>
            <p className="text-gray-600">プライベートな個室と、みんなで過ごす共用スペース</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center  mt-16">
            <div className="lg:col-span-2">
              {(() => {
                const items: Room[] = ROOM_DATA;
                return (
                  <Slider
                    items={items}
                    visible={3}
                    gap={16}
                    renderItem={(room) => (
                      <div>
                    <div>
                      <img src={room.images[0]} alt={room.name} className="w-full h-64 object-cover object-top rounded-2xl shadow-xl" />
                    </div>
                        <div className="pt-3">
                        <h3 className="text-base md:text-lg font-medium text-gray-900">{room.name}</h3>
                          <p className="text-sm text-gray-800">
                            {room.features.slice(0, 3).join(' ・ ')}
                          </p>
                        </div>
                      </div>
                    )}
                  />
                );
              })()}
            </div>
            <div className="lg:col-span-1">
              <div>
                <h3 className="text-3xl font-serif text-gray-900 uppercase tracking-wider mb-3">Private Room</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  プライベートを大切にしながら、リビングでは住民同士の交流を楽しめます。即入居可の部屋や日当たりの良いお部屋など、ニーズに合った個室をご用意しています。
                </p>
                <Link
                  to="/rooms"
                  className="inline-flex items-center px-6 py-3 bg-brand text-white text-sm font-medium rounded-full hover:bg-brand-hover transition-all shadow-md whitespace-nowrap cursor-pointer"
                >
                  個室をもっと見る
                </Link>
              </div>
            </div>
          </div>

          {/* Spaces */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-16">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div>
                <h3 className="text-3xl font-serif text-gray-900 uppercase tracking-wider mb-3">Shared Spaces</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  リビング、キッチン、バスルームなど、毎日の暮らしを支える共有設備が充実。イベントや食事会など、自然に交流が生まれる場がたくさんあります。
                </p>
                <Link
                  to="/rooms#shared"
                  className="inline-flex items-center px-6 py-3 bg-brand text-white text-sm font-medium rounded-full hover:bg-brand-hover transition-all shadow-md whitespace-nowrap cursor-pointer"
                >
                  共用スペースをもっと見る
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              {(() => {
                const items = SHARED_SPACES;
                return (
                  <Slider
                    items={items}
                    visible={3}
                    gap={16}
                    renderItem={(space) => (
                      <div>
                        <div>
                          <img src={space.images[0]} alt={space.name} className="w-full h-64 object-cover object-top rounded-2xl shadow-xl" />
                        </div>
                        <div className="pt-3">
                          <h3 className="text-base md:text-lg font-medium text-gray-900">{space.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{space.description?.slice(0, 40)}...</p>
                        </div>
                      </div>
                    )}
                  />
                );
              })()}
            </div>
          </div>
        </Container>
      </section>

      {/* Location Section */}
      <section id="area" className="py-24 bg-surface-2 scroll-mt-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 mb-12">
            <div>
              <div className="text-center mb-8">
                <CircleIcon icon="ri-map-pin-line" size="xl" className="mx-auto mb-4" iconClassName="text-2xl" />
                <h2 className="text-4xl font-bold font-sans text-gray-900 mb-4">周辺環境</h2>
                <p className="text-gray-600 mb-4">MARUTAKEのまわり</p>
                <p className="text-left text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  MARUTAKEは大阪の主要ターミナル駅・天王寺から徒歩わずか5分。梅田や難波へも15分以内でアクセスでき、通勤・通学に最適な立地です。また、南海電鉄の新今宮駅も徒歩8分圏内にあり、関西空港への直通アクセスも抜群。国際的な移動にも便利です。
                </p>
                <p className="text-left text-base md:text-lg text-gray-700 leading-relaxed">
                  山王エリアは昔ながらの下町文化が残る温かい地域。コンビニ、スーパー、カフェ、サウナ、医療機関など、日常生活に必要な施設がすべて徒歩圏内に揃っています。都会の便利さと下町の温かさが共存する、理想的な住環境です。地域の人々との交流も楽しめ、本当の大阪の暮らしを体験できます。
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  { icon: 'ri-train-line', name: '天王寺駅', distance: '徒歩5分' },
                  { icon: 'ri-train-line', name: '動物園前駅', distance: '徒歩3分' },
                  { icon: 'ri-train-line', name: '新今宮駅', distance: '徒歩6分' },
                  { icon: 'ri-store-2-line', name: 'ファミリーマート', distance: '徒歩2分' },
                  { icon: 'ri-shopping-cart-line', name: 'ライフ 天王寺店', distance: '徒歩5分' },
                  { icon: 'ri-restaurant-line', name: 'スパ＆サウナ', distance: '徒歩3分' },
                  { icon: 'ri-cup-line', name: 'カフェ＆ベーカリー', distance: '徒歩4分' },
                  { icon: 'ri-hospital-line', name: '山王クリニック', distance: '徒歩6分' },
                ].map((facility, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-4 border border-gray-100 text-gray-800 shadow-sm"
                  >
                    <i className={`${facility.icon} text-primary text-sm`}></i>
                    <span className="text-sm">{facility.name}</span>
                    <span className="text-xs text-gray-500">{facility.distance}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 mb-6">
            {areaSlides.map((slide, idx) => (
              <img
                key={idx}
                src={slide.image}
                alt={slide.name}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${
                  areaIndex === idx ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between">
              <div className="max-w-[75%]">
                <div className="flex items-center space-x-2 md:space-x-3 mb-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <i className={`${areaSlides[areaIndex].icon} text-white text-sm md:text-lg`}></i>
                  </div>
                  <span className="text-white/80 text-xs md:text-sm font-medium">{areaSlides[areaIndex].distance}</span>
                </div>
                <h4 className="text-white font-bold text-lg md:text-2xl mb-1 md:mb-2">{areaSlides[areaIndex].name}</h4>
                <p className="text-white/90 text-xs md:text-sm leading-relaxed">{areaSlides[areaIndex].description}</p>
              </div>

              <div className="hidden md:flex items-center space-x-2">
                {areaSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setAreaIndex(i)}
                    aria-label={`slide ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      areaIndex === i ? 'bg-white w-8' : 'bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center space-x-2">
            {areaSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setAreaIndex(i)}
                aria-label={`slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  areaIndex === i ? 'bg-primary/90 w-6' : 'bg-primary/50'
                }`}
              />
            ))}
          </div>
            </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0!2d135.5063!3d34.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM5JzA2LjEiTiAxMzXCsDMwJzIyLjciRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="MARUTAKE Location"
              ></iframe>
            </div>
        </Container>
      </section>

      {false && (
      <section className="py-24 bg-surface-2">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            さあ、新しい家族に<br />会いに来ませんか？
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            見学は随時受付中。LINEで気軽にご相談ください。
          </p>

          <a
            href={SITE.social.line}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-brand text-white text-lg font-medium rounded-full hover:bg-brand-hover transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
          >
            LINEで見学予約
            <i className="ri-arrow-right-line ml-3 text-2xl"></i>
          </a>

          <div className="mt-16 flex items-center justify-center space-x-8">
            <img
              src="https://readdy.ai/api/search-image?query=happy%20young%20Asian%20woman%20smiling%20warmly%2C%20casual%20portrait%2C%20friendly%20expression%2C%20natural%20lighting%2C%20diverse%20international%20student%2C%20lifestyle%20photography%2C%20warm%20tones%2C%20approachable%20atmosphere&width=200&height=300&seq=people001&orientation=portrait"
              alt="住民"
              className="w-24 h-24 rounded-full object-cover object-top shadow-lg"
            />
            <img
              src="https://readdy.ai/api/search-image?query=cheerful%20young%20European%20man%20smiling%20at%20camera%2C%20casual%20friendly%20portrait%2C%20natural%20lighting%2C%20international%20resident%2C%20lifestyle%20photography%2C%20warm%20tones%2C%20welcoming%20expression&width=200&height=300&seq=people002&orientation=portrait"
              alt="住民"
              className="w-24 h-24 rounded-full object-cover object-top shadow-lg"
            />
            <img
              src="https://readdy.ai/api/search-image?query=smiling%20young%20African%20woman%20with%20warm%20expression%2C%20casual%20portrait%2C%20friendly%20atmosphere%2C%20natural%20lighting%2C%20diverse%20international%20community%2C%20lifestyle%20photography%2C%20inviting%20presence&width=200&height=300&seq=people003&orientation=portrait"
              alt="住民"
              className="w-24 h-24 rounded-full object-cover object-top shadow-lg"
            />
            <img
              src="https://readdy.ai/api/search-image?query=happy%20young%20Japanese%20man%20with%20genuine%20smile%2C%20casual%20friendly%20portrait%2C%20natural%20lighting%2C%20local%20resident%2C%20lifestyle%20photography%2C%20warm%20tones%2C%20approachable%20demeanor&width=200&height=300&seq=people004&orientation=portrait"
              alt="住民"
              className="w-24 h-24 rounded-full object-cover object-top shadow-lg"
            />
            <img
              src="https://readdy.ai/api/search-image?query=cheerful%20young%20South%20Asian%20woman%20smiling%20warmly%2C%20casual%20portrait%2C%20friendly%20expression%2C%20natural%20lighting%2C%20international%20student%2C%20lifestyle%20photography%2C%20welcoming%20atmosphere&width=200&height=300&seq=people005&orientation=portrait"
              alt="住民"
              className="w-24 h-24 rounded-full object-cover object-top shadow-lg"
            />
          </div>
        </div>
      </section>
      )}

      <CtaSection
        title={<>
          さあ、新しい家族に<br />会いに来ませんか？
        </>}
        subtitle={<>見学は随時受付中。LINEで気軽にご相談ください。</>}
        href={SITE.social.line}
        buttonText={<>LINEで見学予約</>}
        afterContent={
          <div className="mt-16 flex items-center justify-center space-x-8">
            <img src="https://readdy.ai/api/search-image?query=happy%20young%20Asian%20woman%20smiling%20warmly%2C%20casual%20portrait%2C%20friendly%20expression%2C%20natural%20lighting%2C%20diverse%20international%20student%2C%20lifestyle%20photography%2C%20warm%20tones%2C%20approachable%20atmosphere&width=200&height=300&seq=people001&orientation=portrait" alt="住民" className="w-24 h-24 rounded-full object-cover object-top shadow-lg" />
            <img src="https://readdy.ai/api/search-image?query=cheerful%20young%20European%20man%20smiling%20at%20camera%2C%20casual%20friendly%20portrait%2C%20natural%20lighting%2C%20international%20resident%2C%20lifestyle%20photography%2C%20warm%20tones%2C%20welcoming%20expression&width=200&height=300&seq=people002&orientation=portrait" alt="住民" className="w-24 h-24 rounded-full object-cover object-top shadow-lg" />
            <img src="https://readdy.ai/api/search-image?query=smiling%20young%20African%20woman%20with%20warm%20expression%2C%20casual%20portrait%2C%20friendly%20atmosphere%2C%20natural%20lighting%2C%20diverse%20international%20community%2C%20lifestyle%20photography%2C%20inviting%20presence&width=200&height=300&seq=people003&orientation=portrait" alt="住民" className="w-24 h-24 rounded-full object-cover object-top shadow-lg" />
            <img src="https://readdy.ai/api/search-image?query=happy%20young%20Japanese%20man%20with%20genuine%20smile%2C%20casual%20friendly%20portrait%2C%20natural%20lighting%2C%20local%20resident%2C%20lifestyle%20photography%2C%20warm%20tones%2C%20approachable%20demeanor&width=200&height=300&seq=people004&orientation=portrait" alt="住民" className="w-24 h-24 rounded-full object-cover object-top shadow-lg" />
            <img src="https://readdy.ai/api/search-image?query=cheerful%20young%20South%20Asian%20woman%20smiling%20warmly%2C%20casual%20friendly%20portrait%2C%20natural%20lighting%2C%20international%20student%2C%20lifestyle%20photography%2C%20welcoming%20atmosphere&width=200&height=300&seq=people005&orientation=portrait" alt="住民" className="w-24 h-24 rounded-full object-cover object-top shadow-lg" />
          </div>
        }
      />

    </Layout>
  );
}
