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
          ? 'bg-white/95 backdrop-blur-xl shadow-soft'
          : 'bg-white'
      }`}
    >
      <div className="flex items-center justify-between mx-auto lg:w-4/5 w-[90%]">
        {/* 로고 */}
        <a href="#home" className="flex items-center gap-3 group">
          <img src={logo} alt="삼성화재" className="w-12 lg:w-14 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="text-base font-bold text-[#0033A0]">자강대리점</span>
            <span className="text-xs text-[#94A3B8] hidden sm:block">삼성화재 공식 대리점</span>
          </div>
        </a>

        {/* PC 네비게이션 */}
        <NavBar sections={sections} />

        {/* PC 상담 버튼 */}
        <a
          href="http://pf.kakao.com/_wxefFn"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#0033A0] to-[#1E56B3] rounded-full hover:from-[#002277] hover:to-[#0033A0] transition-all shadow-blue hover:shadow-elevated hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4" />
          상담하기
        </a>

        {/* 모바일 메뉴 버튼 */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl hover:bg-[#F8FAFC] transition-colors"
          aria-label="메뉴"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#0F172A]" />
          ) : (
            <Menu className="w-6 h-6 text-[#0F172A]" />
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
