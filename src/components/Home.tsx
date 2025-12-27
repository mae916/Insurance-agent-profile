import { ArrowRight, Award, Shield, Heart, Star, Sparkles } from 'lucide-react';
import man from '../assets/silversu.webp';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

function Home() {
  const { ref, isVisible } = useInView<HTMLImageElement>();
  const { count: yearsCount, ref: statsRef, hasStarted } = useCountUp({ end: 27 });
  const { count: clientsCount } = useCountUp({ end: 737, duration: 2500, startWhen: hasStarted });
  const { count: awardsCount } = useCountUp({ end: 13, duration: 2000, startWhen: hasStarted });

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-24 pb-20 overflow-hidden scroll-mt-24"
    >
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EEF4FF]" />

      {/* 장식 요소들 */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-[#0033A0]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#0033A0]/3 to-transparent rounded-full" />

      <div className="relative z-10 flex flex-col items-center justify-between mx-auto lg:flex-row lg:w-4/5 w-[90%] gap-12 lg:gap-16">
        {/* 텍스트 영역 */}
        <div className="flex flex-col items-center w-full text-center lg:items-start lg:text-left lg:w-1/2">
          {/* 뱃지 */}
          <div className="badge-gold mb-8 animate-fade-in-down">
            <Star className="w-4 h-4" />
            <span>13년 연속 손해보험협회 우수 인증</span>
          </div>

          {/* 메인 타이틀 */}
          <h1 className="text-4xl font-bold leading-tight text-[#0F172A] lg:text-[56px] lg:leading-[1.15] tracking-tight animate-fade-in-up">
            보험은 결국
            <br />
            <span className="relative">
              <span className="gradient-text">설계사 역량</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C75 4 225 4 298 10" stroke="#C9A227" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
            입니다
          </h1>

          {/* 서브텍스트 */}
          <p className="mt-8 text-lg leading-relaxed text-[#475569] max-w-lg animate-fade-in-up stagger-2">
            27년 경력의 김은수 설계사가
            <br className="hidden sm:block" />
            고객님께 <span className="font-semibold text-[#0033A0]">꼭 맞는 보장</span>을 설계합니다.
          </p>

          {/* 특징 태그 */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8 animate-fade-in-up stagger-3">
            {['불필요한 특약 정리', '핵심 보장 설계', '평생 관리'].map((text) => (
              <span
                key={text}
                className="px-4 py-2 text-sm font-medium text-[#0033A0] bg-white rounded-full border border-[#0033A0]/10 shadow-soft"
              >
                {text}
              </span>
            ))}
          </div>

          {/* CTA 버튼 */}
          <div className="mt-10 animate-fade-in-up stagger-4">
            <a
              href="http://pf.kakao.com/_wxefFn"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-4 px-12 py-5 text-lg font-bold text-white rounded-full bg-gradient-to-r from-[#0033A0] to-[#1E56B3] hover:from-[#002277] hover:to-[#0033A0] transition-all duration-300 shadow-blue hover:shadow-elevated hover:-translate-y-1"
            >
              <Sparkles className="w-6 h-6" />
              무료 상담 신청
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* 통계 */}
          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-[#E2E8F0] w-full max-w-md lg:max-w-none"
          >
            {[
              { num: yearsCount, unit: '년', label: '보험 경력', color: 'text-[#0033A0]' },
              { num: clientsCount, unit: '명', label: '관리 고객', color: 'text-[#0033A0]' },
              { num: awardsCount, unit: '회', label: '우수 인증', color: 'text-[#C9A227]' },
            ].map(({ num, unit, label, color }, i) => (
              <div
                key={label}
                className={`text-center lg:text-left animate-fade-in-up`}
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <p className="text-3xl lg:text-4xl font-bold text-[#0F172A] tabular-nums">
                  {num.toLocaleString()}
                  <span className={`text-xl ${color} ml-0.5`}>{unit}</span>
                </p>
                <p className="mt-1 text-sm text-[#94A3B8]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 이미지 영역 */}
        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            {/* 배경 장식 */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#0033A0]/10 to-[#C9A227]/10 rounded-[32px] -rotate-3" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#C9A227]/20 rounded-full blur-xl animate-pulse" />

            {/* 메인 이미지 컨테이너 */}
            <div
              ref={ref}
              className={`relative bg-gradient-to-b from-[#EEF4FF] to-white rounded-[32px] overflow-hidden shadow-elevated ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              <img
                src={man}
                alt="김은수 설계사"
                className="relative z-10 w-full h-[480px] lg:h-[560px] object-contain object-bottom"
              />

              {/* 하단 그라데이션 */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
            </div>

          </div>
        </div>
      </div>

      {/* 하단 특징 카드 */}
      <div className="relative z-10 mx-auto lg:w-4/5 w-[90%] mt-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: '맞춤 설계',
              desc: '고객 상황에 맞는 1:1 맞춤 보장 설계',
              color: 'from-[#0033A0] to-[#1E56B3]',
            },
            {
              icon: Heart,
              title: '평생 관리',
              desc: '가입부터 보험금 청구까지 책임 관리',
              color: 'from-[#C9A227] to-[#D4B94E]',
            },
            {
              icon: Award,
              title: '검증된 전문성',
              desc: '27년 경력과 다수의 수상 이력 보유',
              color: 'from-[#0033A0] to-[#C9A227]',
            },
          ].map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className={`group relative p-8 bg-white rounded-2xl border border-[#E2E8F0] hover:border-transparent shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              {/* 호버시 상단 라인 */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{title}</h3>
              <p className="text-[#475569] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
