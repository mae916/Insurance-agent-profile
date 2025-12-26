import { ChevronUp } from 'lucide-react';
import logo from '../assets/samsung_logo.webp';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-900">
      <div className="w-[90%] lg:w-3/4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* 로고 및 정보 */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="삼성화재" className="w-12 brightness-0 invert opacity-60" />
            <div>
              <p className="font-semibold text-white">자강대리점</p>
              <p className="text-sm text-slate-400">삼성화재 공식 대리점 · 김은수 설계사</p>
            </div>
          </div>

          {/* 링크 */}
          <div className="flex gap-8 text-sm">
            <a
              href="http://pf.kakao.com/_wxefFn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              카카오톡 상담
            </a>
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">
              설계사 소개
            </a>
            <a href="#cases" className="text-slate-400 hover:text-white transition-colors">
              상담 사례
            </a>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-slate-800">
          <p className="text-sm text-slate-500">
            © 2025 자강대리점. All rights reserved.
          </p>
        </div>
      </div>

      {/* 맨 위로 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="맨 위로"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

export default Footer;
