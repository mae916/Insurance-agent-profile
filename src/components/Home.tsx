import { ArrowRight, Award, Shield, Heart, CheckCircle } from 'lucide-react';
import man from '../assets/silversu.webp';
import { useInView } from '../hooks/useInView';

function Home() {
  const { ref, isVisible } = useInView<HTMLImageElement>();

  return (
    <section
      id="home"
      className="w-full min-h-screen pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white scroll-mt-24"
    >
      <div className="flex flex-col items-center justify-between mx-auto lg:flex-row lg:w-3/4 w-[90%] gap-16 lg:gap-24">
        {/* 텍스트 영역 */}
        <div className="flex flex-col items-center w-full text-center lg:items-start lg:text-left lg:w-1/2">
          {/* 뱃지 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
            <Award className="w-4 h-4" />
            13년 연속 손해보험협회 우수 인증
          </div>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-5xl lg:leading-snug">
            보험은 결국<br />
            <span className="text-blue-600">설계사 역량</span>입니다
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            27년 경력의 김은수 설계사가<br />
            고객님의 상황에 맞는 최적의 보장을 설계합니다.
          </p>

          {/* 체크 포인트 */}
          <div className="flex flex-col gap-3 mt-8">
            {['불필요한 특약은 제거', '꼭 필요한 보장만 설계', '가입 후에도 평생 관리'].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA 버튼 */}
          <a
            href="http://pf.kakao.com/_wxefFn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 mt-10 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
          >
            무료 상담받기
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* 통계 */}
          <div className="flex gap-10 mt-12 pt-8 border-t border-slate-200">
            {[
              { num: '27년', label: '설계 경력' },
              { num: '737명', label: '현재 고객' },
              { num: '1,500건', label: '관리 계약' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-slate-900">{num}</p>
                <p className="text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 이미지 영역 */}
        <div className="w-full lg:w-1/2">
          <img
            ref={ref}
            src={man}
            alt="김은수 설계사"
            className={`w-full max-w-md mx-auto rounded-3xl object-cover h-[480px] lg:h-[560px] object-top shadow-2xl shadow-slate-900/20 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          />
        </div>
      </div>

      {/* 하단 특징 카드 */}
      <div className="mx-auto lg:w-3/4 w-[90%] mt-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {[
            { icon: Shield, title: '맞춤 설계', desc: '고객 상황에 맞는 1:1 보장 설계' },
            { icon: Heart, title: '평생 관리', desc: '가입부터 보험금 청구까지 책임' },
            { icon: Award, title: '검증된 전문성', desc: '27년 경력, 다수 수상 이력' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-blue-50">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
