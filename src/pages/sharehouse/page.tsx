import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import Hero from '@/components/feature/Hero';
import CtaSection from '@/components/feature/CtaSection';
import Container from '@/components/ui/Container';
import TabsBar from '@/components/ui/TabsBar';
import CircleIcon from '@/components/ui/CircleIcon';
import { SITE } from '@/config/site';
import SectionHeader from '@/components/feature/SectionHeader';
import {
  residents as RESIDENTS,
  rules as RULES,
  steps as STEPS,
  basicInfo as BASIC_INFO,
  requirements as REQUIREMENTS,
  facilities as FACILITIES,
} from '@/data/sharehouse';

export default function ShareHouse() {
  const [activeTab, setActiveTab] = useState<'info' | 'flow' | 'rules' | 'voices'>('info');

  // Sync tab with URL hash using router location
  const location = useLocation();
  useEffect(() => {
    const key = (location.hash || '').replace('#', '').toLowerCase();
    if (key === 'info' || key === 'basic') setActiveTab('info');
    else if (key === 'flow') setActiveTab('flow');
    else if (key === 'rules') setActiveTab('rules');
    else if (key === 'voices') setActiveTab('voices');
  }, [location.hash]);

  const residents = RESIDENTS;

  const rules = RULES;

  const steps = STEPS;

  const basicInfo = BASIC_INFO;

  const requirements = REQUIREMENTS;

  const facilities = FACILITIES;

  return (
    <Layout>

      {/* Hero Section (common) */}
      <Hero
        image="https://readdy.ai/api/search-image?query=diverse%20group%20of%20young%20international%20people%20enjoying%20life%20together%20in%20modern%20share%20house%2C%20laughing%20and%20having%20fun%2C%20warm%20friendly%20atmosphere%2C%20natural%20lighting%2C%20multicultural%20community%2C%20lifestyle%20photography%2C%20vibrant%20social%20scene&width=1920&height=1080&seq=sharehouse-hero&orientation=landscape"
        title={<>シェアハウスについて</>}
        subtitle={<>基本情報、入居の流れ、ルール、住民の声をご紹介します</>}
        heightClass="h-[70vh]"
      />

      {/* Tab Navigation */}
      <TabsBar>
        <Tabs
          value={activeTab}
          onChange={(v: string) => {
            const val = v as 'info' | 'flow' | 'rules' | 'voices';
            setActiveTab(val);
            const hash = val === 'info' ? 'basic' : val;
            window.location.hash = hash;
          }}
        >
          <TabsList>
            <TabsTrigger value="info">基本情報</TabsTrigger>
            <TabsTrigger value="flow">入居の流れ</TabsTrigger>
            <TabsTrigger value="rules">ハウスルール</TabsTrigger>
            <TabsTrigger value="voices">住民の声</TabsTrigger>
          </TabsList>
        </Tabs>
      </TabsBar>

      {/* Info Tab */}
      {activeTab === 'info' && (
        <section id="basic" className="py-24 bg-surface-2 scroll-mt-24">
          <Container className="max-w-6xl">
            {/* Basic Info */}
            <div className="mb-20">
              <SectionHeader title={<>基本情報</>} subtitle={<>MARUTAKEシェアハウスの概要</>} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {basicInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-surface-4 rounded-3xl p-8 text-center hover:shadow-lg transition-all"
                  >
                    <CircleIcon icon={info.icon} size="xl" className="mx-auto mb-4" iconClassName="text-2xl" />
                    <p className="text-sm text-gray-600 mb-2">{info.label}</p>
                    <p className="text-lg font-bold text-gray-900">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-20">
              <SectionHeader title={<>入居条件</>} subtitle={<>入居に必要な条件と書類</>} />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="bg-surface-4 border-2 border-gray-100 rounded-3xl p-8 hover:border-primary-alt transition-all"
                  >
                    <CircleIcon icon={req.icon} size="lg" className="mb-6" iconClassName="text-2xl" />
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      {req.title}
                    </h3>
                    <ul className="space-y-3">
                      {req.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <i className="ri-check-line text-primary-alt text-lg mt-0.5 flex-shrink-0"></i>
                          <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <SectionHeader title={<>設備・サービス一覧</>} subtitle={<>充実した設備とサービスで快適な生活をサポート</>} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="bg-surface-4 rounded-3xl p-8"
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <CircleIcon icon={facility.icon} size="lg" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {facility.category}
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {facility.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <i className="ri-checkbox-circle-fill text-primary-alt text-lg flex-shrink-0"></i>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Flow Tab */}
      {activeTab === 'flow' && (
        <section id="flow" className="py-24 bg-surface-2 scroll-mt-24">
          <Container className="max-w-5xl">
            <SectionHeader title={<>入居の流れ</>} subtitle={<>お問い合わせから入居まで、5つのステップ</>} />

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-alt/30"></div>

              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center">
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'order-2 pl-12'}`}>
                        <div className="bg-surface-4 rounded-3xl p-8 shadow-lg border border-gray-100">
                          <CircleIcon icon={step.icon} size="xl" className={`${index % 2 === 0 ? 'ml-auto' : ''} mb-6`} iconClassName="text-2xl" />
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-brand rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>

                      <div className={`w-1/2 ${index % 2 === 0 ? 'order-2' : 'pr-12'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 bg-surface-4 rounded-3xl p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <CircleIcon icon="ri-money-yen" size="xl" className="mx-auto mb-4" iconClassName="text-2xl" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">初期費用</h4>
                  <p className="text-sm text-gray-600">
                    敷金1ヶ月分<br />
                    礼金なし<br />
                    仲介手数料なし
                  </p>
                </div>

                <div className="text-center">
                  <CircleIcon icon="ri-file-text-line" size="xl" className="mx-auto mb-4" iconClassName="text-2xl" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">必要書類</h4>
                  <p className="text-sm text-gray-600">
                    身分証明書<br />
                    収入証明書<br />
                    緊急連絡先
                  </p>
                </div>

                <div className="text-center">
                  <CircleIcon icon="ri-calendar-line" size="xl" className="mx-auto mb-4" iconClassName="text-2xl" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">契約期間</h4>
                  <p className="text-sm text-gray-600">
                    最低契約期間3ヶ月<br />
                    以降は1ヶ月単位<br />
                    退去1ヶ月前通知
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Rules Tab */}
      {activeTab === 'rules' && (
        <section id="rules" className="py-24 bg-surface-2 scroll-mt-24">
          <Container className="max-w-6xl">
            <SectionHeader title={<>ハウスルール</>} subtitle={<>みんなが快適に暮らすための約束事</>} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="bg-surface-4 border-2 border-gray-100 rounded-3xl p-8 hover:border-primary transition-all"
                >
                  <div className="flex items-start space-x-6">
                    <CircleIcon icon={rule.icon} size="lg" className="w-14 h-14 flex-shrink-0" iconClassName="text-2xl" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {rule.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-surface-4 rounded-3xl p-12 text-center">
              <i className="ri-information-line text-5xl text-primary-alt mb-6"></i>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ルールは最小限に
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                MARUTAKEでは、細かいルールで縛るのではなく、お互いを尊重し合う気持ちを大切にしています。
                困ったことがあれば、まずは話し合い。みんなで協力して、より良い環境を作っていきましょう。
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* Voices Tab */}
      {activeTab === 'voices' && (
        <section id="voices" className="py-24 bg-surface-2 scroll-mt-24">
          <Container>
            <SectionHeader title={<>住民の声</>} subtitle={<>実際に暮らす人たちのリアルな声</>} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {residents.map((resident, index) => (
                <div key={index} className="bg-surface-4 rounded-3xl overflow-hidden shadow-lg">
                  <div className="p-6">
                    <div className="w-full h-64 rounded-2xl overflow-hidden mb-6">
                      <img
                        src={resident.image}
                        alt={resident.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {resident.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <span>{resident.age}歳</span>
                        <span>•</span>
                        <span>{resident.country}</span>
                        <span>•</span>
                        <span>{resident.occupation}</span>
                      </div>
                      <p className="text-sm text-gray-500">入居歴：{resident.duration}</p>
                    </div>

                    <div className="bg-surface-1 rounded-2xl p-6 mb-4">
                      <i className="ri-double-quotes-l text-3xl text-primary mb-2"></i>
                      <p className="text-gray-900 font-medium leading-relaxed">
                        {resident.quote}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {resident.story}
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
