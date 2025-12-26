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
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between mx-auto lg:w-3/4 w-[90%]">
        {/* 로고 */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="삼성화재" className="w-12 lg:w-14" />
          <span className="text-base font-bold text-[#1e3a5f]">자강대리점</span>
        </a>

        {/* PC 네비게이션 */}
        <NavBar sections={sections} />

        {/* PC 상담 버튼 */}
        <a
          href="http://pf.kakao.com/_wxefFn"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0033A0] rounded-full hover:bg-[#1E56B3] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          상담하기
        </a>

        {/* 모바일 메뉴 버튼 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
          aria-label="메뉴"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#333]" />
          ) : (
            <Menu className="w-6 h-6 text-[#333]" />
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
