import { Award, Trophy, Medal } from 'lucide-react';
import man from '../assets/silversu.webp';
import Title from './Title';
import { useInView } from '../hooks/useInView';

const awards = {
  excellent: ['2009', '2011', '2012', '2014', '2015', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  amc: ['2010'],
  longService: ['2009', '2013', '2019', '2024'],
};

function About() {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="py-28 bg-white scroll-mt-10">
      <div className="w-[90%] mx-auto lg:w-3/4">
        <Title title="설계사 소개" subtitle="27년간 고객과 함께해온 김은수 설계사입니다" />

        <div className="mt-20 lg:flex lg:gap-20 lg:items-start">
          {/* 이미지 */}
          <div
            ref={ref}
            className={`flex-shrink-0 mb-12 lg:mb-0 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
          >
            <div className="relative mx-auto w-full max-w-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/5 to-transparent rounded-full scale-95" />
              <img
                src={man}
                alt="김은수 설계사"
                className="relative z-10 w-full h-[400px] lg:h-[480px] object-contain object-bottom -scale-x-100 translate-y-[-20px]"
              />
            </div>
          </div>

          {/* 소개 내용 */}
          <div className="flex-1">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#1a1a1a] lg:text-3xl leading-snug">
                끝까지 책임지는 상담을<br />약속드립니다
              </h3>
              <p className="mt-6 text-base leading-relaxed text-[#555]">
                보험은 단순한 상품이 아닌, 고객님의 미래를 위한 준비입니다.
                저는 27년간 737명의 고객분들과 함께하며, 가입부터 보험금 수령까지
                모든 과정을 직접 도와드리고 있습니다.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#555]">
                불필요한 특약은 과감히 줄이고, 정말 필요한 보장만 남기는 것.
                그것이 제가 27년간 지켜온 원칙입니다.
              </p>
            </div>

            {/* 수상 이력 */}
            <div className="space-y-4">
              {/* 손해보험협회 우수 인증 */}
              <div className="p-6 bg-[#fafbfc] rounded-2xl border border-[#eee]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#1e3a5f] flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">손해보험협회 우수 인증</h4>
                    <p className="text-sm text-[#c9a962] font-medium">{awards.excellent.length}회 선정</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {awards.excellent.map((year) => (
                    <span key={year} className="px-3 py-1.5 text-sm text-[#1e3a5f] bg-white rounded-lg border border-[#1e3a5f]/10">
                      {year}
                    </span>
                  ))}
                </div>
              </div>

              {/* AMC상 & 장기활동상 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-[#fafbfc] rounded-2xl border border-[#eee]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a962] flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a1a1a]">AMC상</h4>
                      <p className="text-sm text-[#888]">우수 성과 달성</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {awards.amc.map((year) => (
                      <span key={year} className="px-3 py-1.5 text-sm text-[#c9a962] bg-white rounded-lg border border-[#c9a962]/20">
                        {year}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-[#fafbfc] rounded-2xl border border-[#eee]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#64748b] flex items-center justify-center">
                      <Medal className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a1a1a]">장기활동상</h4>
                      <p className="text-sm text-[#888]">{awards.longService.length}회 수상</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {awards.longService.map((year) => (
                      <span key={year} className="px-3 py-1.5 text-sm text-[#64748b] bg-white rounded-lg border border-[#64748b]/20">
                        {year}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
