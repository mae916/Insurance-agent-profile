import { ArrowRight, Award, Shield, Heart, CheckCircle } from 'lucide-react';
import man from '../assets/silversu.webp';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

function Home() {
  const { ref, isVisible } = useInView<HTMLImageElement>();
  const { count: yearsCount, ref: statsRef, hasStarted } = useCountUp({ end: 27 });
  const { count: clientsCount } = useCountUp({ end: 737, duration: 2500 });
  const { count: contractsCount } = useCountUp({ end: 1500, duration: 2500 });

  return (
    <section
      id="home"
      className="w-full min-h-screen pt-28 pb-24 bg-[#fafbfc] scroll-mt-24"
    >
      <div className="flex flex-col items-center justify-between mx-auto lg:flex-row lg:w-3/4 w-[90%] gap-16 lg:gap-20">
        {/* 텍스트 영역 */}
        <div className="flex flex-col items-center w-full text-center lg:items-start lg:text-left lg:w-1/2">
          {/* 뱃지 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium text-[#1e3a5f] bg-[#1e3a5f]/5 rounded-full border border-[#1e3a5f]/10">
            <Award className="w-4 h-4 text-[#c9a962]" />
            <span>13년 연속 손해보험협회 우수 인증</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-[#1a1a1a] lg:text-[52px] lg:leading-tight tracking-tight">
            보험은 결국<br />
            <span className="text-[#1e3a5f]">사람</span>입니다
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#666] max-w-md">
            27년 경력의 김은수 설계사가<br className="hidden sm:block" />
            고객님께 꼭 맞는 보장을 설계합니다.
          </p>

          {/* 체크 포인트 */}
          <div className="flex flex-col gap-3 mt-10">
            {['불필요한 특약 정리', '핵심 보장만 설계', '가입 후 평생 관리'].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-[#1e3a5f]" />
                </div>
                <span className="text-[#444]">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA 버튼 */}
          <a
            href="http://pf.kakao.com/_wxefFn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 mt-10 text-base font-semibold text-white bg-[#1e3a5f] rounded-full hover:bg-[#2d5a87] transition-all duration-300 shadow-lg shadow-[#1e3a5f]/20"
          >
            무료 상담 신청
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* 통계 */}
          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className="flex gap-12 mt-14 pt-10 border-t border-[#eee]"
          >
            {[
              { num: hasStarted ? yearsCount : 0, unit: '년', label: '경력' },
              { num: hasStarted ? clientsCount : 0, unit: '명', label: '고객' },
              { num: hasStarted ? contractsCount.toLocaleString() : '0', unit: '건', label: '계약' },
            ].map(({ num, unit, label }) => (
              <div key={label} className="text-center lg:text-left">
                <p className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] tabular-nums">
                  {num}
                  <span className="text-xl text-[#c9a962] ml-0.5">{unit}</span>
                </p>
                <p className="mt-1 text-sm text-[#888]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 이미지 영역 */}
        <div className="w-full lg:w-1/2">
          <div className="relative mx-auto max-w-md">
            {/* 배경 */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/5 to-transparent rounded-full scale-110" />
            <img
              ref={ref}
              src={man}
              alt="김은수 설계사"
              className={`relative z-10 w-full h-[480px] lg:h-[560px] object-contain object-bottom ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            />
          </div>
        </div>
      </div>

      {/* 하단 특징 카드 */}
      <div className="mx-auto lg:w-3/4 w-[90%] mt-24">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {[
            {
              icon: Shield,
              title: '맞춤 설계',
              desc: '고객 상황에 맞는 1:1 맞춤 설계',
            },
            {
              icon: Heart,
              title: '평생 관리',
              desc: '가입부터 보험금 청구까지 책임',
            },
            {
              icon: Award,
              title: '검증된 전문성',
              desc: '27년 경력과 다수의 수상 이력',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-7 bg-white rounded-2xl border border-[#eee] hover:border-[#1e3a5f]/20 transition-all duration-300 hover:shadow-elegant"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/5 flex items-center justify-center mb-5 group-hover:bg-[#1e3a5f]/10 transition-colors">
                <Icon className="w-6 h-6 text-[#1e3a5f]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">{title}</h3>
              <p className="mt-2 text-[#666] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
