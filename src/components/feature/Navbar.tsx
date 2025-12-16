import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollLock } from '@/hooks/useScrollLock';
import { SITE } from '@/config/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Mobile dropdown (one open at a time)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useScrollLock(isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenMobileSection(null);
  };

  const toggleMobileSection = (key: string) => {
    setOpenMobileSection((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-surface-2/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div
                className={`w-10 h-10 flex items-center justify-center ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                <i className="ri-home-heart-fill text-3xl"></i>
              </div>
              <span
                className={`text-2xl font-bold font-serif ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                MARUTAKE
              </span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                isScrolled
                  ? 'bg-surface-3 text-white hover:bg-surface-3'
                  : 'bg-surface-2/10 backdrop-blur-md border border-surface-2/30 text-white hover:bg-surface-2/20'
              }`}
            >
              {isMenuOpen ? (
                <>
                  <i className="ri-close-line text-lg"></i>
                  <span>CLOSE</span>
                </>
              ) : (
                <>
                  <i className="ri-menu-line text-lg"></i>
                  <span>MENU</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-surface-1 z-[100] transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-0 left-0 right-0 z-[110]">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 flex items-center justify-center text-grey">
                  <i className="ri-home-heart-fill text-3xl"></i>
                </div>
                <span className="text-2xl font-bold font-serif text-grey">MARUTAKE</span>
              </div>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpenMobileSection(null);
                }}
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer bg-surface-3/10 backdrop-blur-md border border-surface-3/30 text-grey hover:bg-surface-3/20"
              >
                <i className="ri-close-line text-lg"></i>
                <span>CLOSE</span>
              </button>
            </div>
          </div>
        </div>

        {/* ✅ mobile: 上寄せ + スクロール */}
        <div className="h-full flex flex-col items-center justify-start md:justify-center px-6 pt-28 md:pt-0 overflow-y-auto">
          {/* =========================
              ✅ Mobile (iPhone etc.)
              - 水平方向：中央揃え
              - サブ項目間：横線(divide-y)
              ========================= */}
          <div className="md:hidden w-full max-w-md mx-auto">
            <div className="flex flex-col gap-4 text-center">
              {/* ホーム */}
              <div className="border-b border-surface-3/30 pb-4">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('home')}
                  className="relative w-full py-2 flex items-center justify-center"
                  aria-expanded={openMobileSection === 'home'}
                >
                  <span className="text-lg font-bold text-grey">ホーム</span>
                  <i
                    className={`ri-arrow-down-s-line text-xl absolute right-0 top-1/2 -translate-y-1/2 transition-transform ${
                      openMobileSection === 'home' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`${openMobileSection === 'home' ? 'mt-3' : 'hidden'}`}>
                  <div className="w-full">
                    <Link
                      to="/"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      トップへ
                    </Link>
                    <Link
                      to="/#good-points"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      MARUTAKE のいいところ
                    </Link>
                    <Link
                      to="/rooms"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      Rooms &amp; Spaces
                    </Link>
                    <Link
                      to="/#area"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      周辺環境
                    </Link>
                  </div>
                </div>
              </div>

              {/* コンセプト */}
              <div className="border-b border-surface-3/30 pb-4">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('concept')}
                  className="relative w-full py-2 flex items-center justify-center"
                  aria-expanded={openMobileSection === 'concept'}
                >
                  <span className="text-lg font-bold text-grey">コンセプト</span>
                  <i
                    className={`ri-arrow-down-s-line text-xl absolute right-0 top-1/2 -translate-y-1/2 transition-transform ${
                      openMobileSection === 'concept' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`${openMobileSection === 'concept' ? 'mt-3' : 'hidden'}`}>
                  <div className="w-full">
                    <Link
                      to="/concept"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      コンセプトTOP
                    </Link>
                    <Link
                      to="/concept#features"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      MARUTAKEの特徴
                    </Link>
                    <Link
                      to="/concept#sanno"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      山王
                    </Link>
                    <Link
                      to="/concept#how-to-enjoy"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      MARUTAKEの楽しみ方
                    </Link>
                  </div>
                </div>
              </div>

              {/* MARUTAKEができるまで */}
              <div className="border-b border-surface-3/30 pb-4">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('story')}
                  className="relative w-full py-2 flex items-center justify-center"
                  aria-expanded={openMobileSection === 'story'}
                >
                  <span className="text-lg font-bold text-grey">MARUTAKEができるまで</span>
                  <i
                    className={`ri-arrow-down-s-line text-xl absolute right-0 top-1/2 -translate-y-1/2 transition-transform ${
                      openMobileSection === 'story' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`${openMobileSection === 'story' ? 'mt-3' : 'hidden'}`}>
                  <div className="w-full">
                    <Link
                      to="/story"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      ストーリーTOP
                    </Link>
                    <Link
                      to="/story#renovation"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      改装ストーリー
                    </Link>
                    <Link
                      to="/story#logo"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      ロゴの意味
                    </Link>
                    <Link
                      to="/story#owner"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      オーナー挨拶
                    </Link>
                  </div>
                </div>
              </div>

              {/* シェアハウスについて */}
              <div className="border-b border-surface-3/30 pb-4">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('sharehouse')}
                  className="relative w-full py-2 flex items-center justify-center"
                  aria-expanded={openMobileSection === 'sharehouse'}
                >
                  <span className="text-lg font-bold text-grey">シェアハウスについて</span>
                  <i
                    className={`ri-arrow-down-s-line text-xl absolute right-0 top-1/2 -translate-y-1/2 transition-transform ${
                      openMobileSection === 'sharehouse' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`${openMobileSection === 'sharehouse' ? 'mt-3' : 'hidden'}`}>
                  <div className="w-full">
                    <Link
                      to="/sharehouse"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      シェアハウスTOP
                    </Link>
                    <Link
                      to="/sharehouse#basic"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      基本情報
                    </Link>
                    <Link
                      to="/sharehouse#flow"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      入居の流れ
                    </Link>
                    <Link
                      to="/sharehouse#rules"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      ハウスルール
                    </Link>
                    <Link
                      to="/sharehouse#voices"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      住民の声
                    </Link>
                  </div>
                </div>
              </div>

              {/* 部屋・共用スペース */}
              <div className="border-b border-surface-3/30 pb-4">
                <button
                  type="button"
                  onClick={() => toggleMobileSection('rooms')}
                  className="relative w-full py-2 flex items-center justify-center"
                  aria-expanded={openMobileSection === 'rooms'}
                >
                  <span className="text-lg font-bold text-grey">部屋・共用スペース</span>
                  <i
                    className={`ri-arrow-down-s-line text-xl absolute right-0 top-1/2 -translate-y-1/2 transition-transform ${
                      openMobileSection === 'rooms' ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div className={`${openMobileSection === 'rooms' ? 'mt-3' : 'hidden'}`}>
                  <div className="w-full">
                    <Link
                      to="/rooms"
                      onClick={handleLinkClick}
                      className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                    >
                      Rooms TOP
                    </Link>
                        <Link
                          to="/rooms#rooms"
                          onClick={handleLinkClick}
                          className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          個室一覧
                        </Link>
                        <Link
                          to="/rooms#shared"
                          onClick={handleLinkClick}
                          className="block py-3 text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          共用スペース
                        </Link>
                  </div>
                </div>
              </div>

              {/* 単独リンク + CTA */}
              <div className="flex flex-col items-center gap-4 pt-2">
                <Link
                  to="/access"
                  onClick={handleLinkClick}
                  className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                >
                  アクセス
                </Link>
                <Link
                  to="/faq"
                  onClick={handleLinkClick}
                  className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                >
                  Q&amp;A
                </Link>
                <Link
                  to="/blog"
                  onClick={handleLinkClick}
                  className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                >
                  ブログ
                </Link>

                <a
                  href={SITE.social.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center w-full px-10 py-4 bg-primary text-white text-lg font-medium rounded-full hover:bg-accent transition-all shadow-lg whitespace-nowrap cursor-pointer"
                >
                  見学予約
                </a>
              </div>
            </div>
          </div>

          {/* =========================
              ✅ Desktop (md以上)
              ========================= */}
          <div className="hidden md:block w-full max-w-6xl">
            <div className="grid grid-cols-4 gap-0 items-stretch border-l border-r border-surface-3 divide-x divide-surface-3">
              {/* 1列目 */}
              <div
                className="h-full"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease 0.00s',
                }}
              >
                <div className="w-full px-6">
                  <div className="flex flex-col items-start gap-4">
                    <Link
                      to="/"
                      onClick={handleLinkClick}
                      className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                    >
                      - ホーム
                    </Link>

                    <div className="pl-4 flex flex-col items-start gap-2">
                      <Link
                        to="/#good-points"
                        onClick={handleLinkClick}
                        className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                      >
                        MARUTAKE のいいところ
                      </Link>
                      <Link
                        to="/rooms"
                        onClick={handleLinkClick}
                        className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                      >
                        Rooms &amp; Spaces
                      </Link>
                      <Link
                        to="/#area"
                        onClick={handleLinkClick}
                        className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                      >
                        周辺環境
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2列目 */}
              <div
                className="h-full"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease 0.05s',
                }}
              >
                <div className="w-full px-6">
                  <div className="flex flex-col items-start gap-8">
                    {/* コンセプト */}
                    <div className="flex flex-col items-start gap-4">
                      <Link
                        to="/concept"
                        onClick={handleLinkClick}
                        className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                      >
                        - コンセプト
                      </Link>
                      <div className="pl-4 flex flex-col items-start gap-2">
                        <Link
                          to="/concept#features"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          MARUTAKEの特徴
                        </Link>
                        <Link
                          to="/concept#sanno"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          山王
                        </Link>
                        <Link
                          to="/concept#how-to-enjoy"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          MARUTAKEの楽しみ方
                        </Link>
                      </div>
                    </div>

                    {/* MARUTAKEができるまで */}
                    <div className="flex flex-col items-start gap-4">
                      <Link
                        to="/story"
                        onClick={handleLinkClick}
                        className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                      >
                        - MARUTAKEができるまで
                      </Link>
                      <div className="pl-4 flex flex-col items-start gap-2">
                        <Link
                          to="/story#renovation"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          改装ストーリー
                        </Link>
                        <Link
                          to="/story#logo"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          ロゴの意味
                        </Link>
                        <Link
                          to="/story#owner"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          オーナー挨拶
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3列目 */}
              <div
                className="h-full"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease 0.10s',
                }}
              >
                <div className="w-full px-6">
                  <div className="flex flex-col items-start gap-8">
                    {/* シェアハウスについて */}
                    <div className="flex flex-col items-start gap-4">
                      <Link
                        to="/sharehouse"
                        onClick={handleLinkClick}
                        className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                      >
                        - シェアハウスについて
                      </Link>
                      <div className="pl-4 flex flex-col items-start gap-2">
                        <Link
                          to="/sharehouse#basic"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          基本情報
                        </Link>
                        <Link
                          to="/sharehouse#flow"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          入居の流れ
                        </Link>
                        <Link
                          to="/sharehouse#rules"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          ハウスルール
                        </Link>
                        <Link
                          to="/sharehouse#voices"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          住民の声
                        </Link>
                      </div>
                    </div>

                    {/* 部屋・共用スペース */}
                    <div className="flex flex-col items-start gap-4">
                      <Link
                        to="/rooms"
                        onClick={handleLinkClick}
                        className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                      >
                        - 部屋・共用スペース
                      </Link>
                      <div className="pl-4 flex flex-col items-start gap-2">
                        <Link
                          to="/rooms#rooms"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          個室一覧
                        </Link>
                        <Link
                          to="/rooms#shared"
                          onClick={handleLinkClick}
                          className="text-sm font-medium text-grey/80 hover:text-primary transition-colors cursor-pointer"
                        >
                          共用スペース
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4列目 */}
              <div
                className="h-full"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease 0.15s',
                }}
              >
                <div className="w-full px-6">
                  <div className="flex flex-col items-start gap-6">
                    <Link
                      to="/access"
                      onClick={handleLinkClick}
                      className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                    >
                      - アクセス
                    </Link>

                    <Link
                      to="/faq"
                      onClick={handleLinkClick}
                      className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                    >
                      - Q&amp;A
                    </Link>

                    <Link
                      to="/blog"
                      onClick={handleLinkClick}
                      className="text-lg font-bold text-grey hover:text-primary transition-colors cursor-pointer"
                    >
                      - ブログ
                    </Link>

                    <a
                      href={SITE.social.line}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-4 bg-primary text-white text-lg font-medium rounded-full hover:bg-accent transition-all shadow-lg whitespace-nowrap cursor-pointer"
                    >
                      見学予約
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Desktop */}
        </div>
      </div>
    </>
  );
}
