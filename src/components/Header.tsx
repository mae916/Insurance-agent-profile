import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import MobileNav from './MobileNav';
import logo from '../assets/samsung_logo.webp';
import type { ISections } from '../types';
import { MessageCircle, Menu, X } from 'lucide-react';

function Header({ sections }: ISections) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between mx-auto lg:w-3/4 w-[90%]">
        {/* 로고 */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="삼성화재" className="w-14 lg:w-16" />
          <span className="text-lg font-bold text-blue-900">자강대리점</span>
        </a>

        {/* PC 네비게이션 */}
        <NavBar sections={sections} />

        {/* PC 상담 버튼 */}
        <a
          href="http://pf.kakao.com/_wxefFn"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          상담하기
        </a>

        {/* 모바일 메뉴 버튼 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="메뉴"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-600" />
          ) : (
            <Menu className="w-6 h-6 text-slate-600" />
          )}
        </button>
      </div>

      <MobileNav
        sections={sections}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;
