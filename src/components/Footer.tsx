import { ChevronUp, MessageCircle } from 'lucide-react';
import logo from '../assets/samsung_logo.webp';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#0F172A]">
      <div className="w-[90%] lg:w-4/5 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* 로고 및 정보 */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="삼성화재" className="w-12 brightness-0 invert opacity-60" />
            <div>
              <p className="font-bold text-white text-lg">자강대리점</p>
              <p className="text-sm text-[#94A3B8]">삼성화재 공식 대리점 · 김은수 설계사</p>
            </div>
          </div>

          {/* 링크 */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a
              href="http://pf.kakao.com/_wxefFn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#94A3B8] hover:text-[#C9A227] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              카카오톡 상담
            </a>
            <a href="#about" className="text-[#94A3B8] hover:text-white transition-colors">
              설계사 소개
            </a>
            <a href="#cases" className="text-[#94A3B8] hover:text-white transition-colors">
              상담 사례
            </a>
            <a href="#contact" className="text-[#94A3B8] hover:text-white transition-colors">
              문의하기
            </a>
          </div>
        </div>

        {/* 구분선 */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#334155] to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            © 2025 자강대리점. All rights reserved.
          </p>
          <p className="text-xs text-[#475569]">
            본 사이트는 삼성화재 공식 대리점 소개 페이지입니다.
          </p>
        </div>
      </div>

      {/* 맨 위로 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3.5 text-white bg-gradient-to-br from-[#0033A0] to-[#1E56B3] rounded-full shadow-blue hover:shadow-elevated hover:-translate-y-1 transition-all"
        aria-label="맨 위로"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;
