import { Link } from 'react-router-dom';
import { SITE } from '@/config/site';

export default function Footer() {

  return (
    <footer className="bg-surface-2 text-grey relative overflow-hidden">

      <div className="max-w-8xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 flex items-center justify-center text-primary">
                <i className="ri-home-heart-fill text-3xl"></i>
              </div>
              <span className="text-2xl font-bold font-serif">{SITE.title}</span>
            </div>

            <p className="text-2xl font-sans leading-relaxed">
              遊ぶように生きる<br />
              大人たちの家
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">コンセプト</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/concept" className="hover:text-primary transition-colors cursor-pointer">MARUTAKEとは</Link></li>
              <li><Link to="/concept#story" className="hover:text-primary transition-colors cursor-pointer">ストーリー</Link></li>
              <li><Link to="/concept#community" className="hover:text-primary transition-colors cursor-pointer">山王というまち</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">部屋情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/rooms" className="hover:text-primary transition-colors cursor-pointer">客室一覧</Link></li>
              <li><Link to="/rooms#shared" className="hover:text-primary transition-colors cursor-pointer">共用スペース</Link></li>
              <li><Link to="/info" className="hover:text-primary transition-colors cursor-pointer">料金・入居条件</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">サポート</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-primary transition-colors cursor-pointer">よくある質問</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors cursor-pointer">お問い合わせ</Link></li>
              <li><Link to="/access" className="hover:text-primary transition-colors cursor-pointer">アクセス</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-surface-3/20">
          <p className="text-sm text-grey/80 mb-4 md:mb-0">
            © 2025 MARUTAKE Share House. All rights reserved.
          </p>

          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-surface-3/30 rounded-lg hover:bg-surface-2/10 transition-colors cursor-pointer">
              <i className="ri-instagram-line text-lg"></i>
            </a>
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-surface-3/30 rounded-lg hover:bg-surface-2/10 transition-colors cursor-pointer">
              <i className="ri-facebook-line text-lg"></i>
            </a>
            <a href={SITE.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-surface-3/30 rounded-lg hover:bg-surface-2/10 transition-colors cursor-pointer">
              <i className="ri-twitter-x-line text-lg"></i>
            </a>
            <a href={SITE.social.line} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-surface-3/30 rounded-lg hover:bg-surface-2/10 transition-colors cursor-pointer">
              <i className="ri-line-fill text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
