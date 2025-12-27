import { Award, Trophy, Medal, CheckCircle } from 'lucide-react';
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
    <section id="about" className="relative py-28 bg-white scroll-mt-10 overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#EEF4FF] to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#C9A227]/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="relative z-10 w-[90%] mx-auto lg:w-4/5">
        <Title title="설계사 소개" subtitle="27년간 고객과 함께해온 김은수 설계사입니다" />

        <div className="mt-20 lg:flex lg:gap-16 xl:gap-24 lg:items-start">
          {/* 이미지 */}
          <div
            ref={ref}
            className={`flex-shrink-0 mb-12 lg:mb-0 lg:w-[380px] ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
          >
            <div className="relative">
              {/* 배경 프레임 */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0033A0]/10 via-transparent to-[#C9A227]/10 rounded-3xl" />

              {/* 메인 이미지 */}
              <div className="relative bg-gradient-to-b from-[#F8FAFC] to-white rounded-3xl overflow-hidden shadow-large">
                <img
                  src={man}
                  alt="김은수 설계사"
                  className="relative z-10 w-full h-[420px] lg:h-[480px] object-contain object-bottom -scale-x-100"
                />
              </div>

            </div>
          </div>

          {/* 소개 내용 */}
          <div className="flex-1">
            {/* 인용문 스타일 소개 */}
            <div className="relative mb-12 pl-6 border-l-4 border-gradient-to-b from-[#0033A0] to-[#C9A227]">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0033A0] to-[#C9A227] rounded-full" />
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0F172A] leading-relaxed">
                끝까지 책임지는 상담을
                <br />
                <span className="gradient-text">약속드립니다</span>
              </h3>
            </div>

            <div className="space-y-5 mb-12">
              {[
                '보험은 단순한 상품이 아닌, 고객님의 미래를 위한 준비입니다.',
                '저는 27년간 737명의 고객분들과 함께하며, 가입부터 보험금 수령까지 모든 과정을 직접 도와드리고 있습니다.',
                '불필요한 특약은 과감히 줄이고, 정말 필요한 보장만 남기는 것. 그것이 제가 27년간 지켜온 원칙입니다.',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#0033A0] mt-0.5 flex-shrink-0" />
                  <p className="text-[#475569] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* 수상 이력 */}
            <div className="space-y-5">
              {/* 손해보험협회 우수 인증 */}
              <div className="group p-6 bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border border-[#E2E8F0] hover:border-[#0033A0]/20 hover:shadow-medium transition-all duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#1E56B3] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A]">손해보험협회 우수 인증</h4>
                    <p className="text-sm font-semibold text-[#0033A0]">{awards.excellent.length}회 선정</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {awards.excellent.map((year) => (
                    <span
                      key={year}
                      className="px-3 py-1.5 text-sm font-medium text-[#0033A0] bg-[#0033A0]/5 rounded-lg border border-[#0033A0]/10 hover:bg-[#0033A0] hover:text-white transition-colors cursor-default"
                    >
                      {year}
                    </span>
                  ))}
                </div>
              </div>

              {/* AMC상 & 장기활동상 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="group p-6 bg-gradient-to-br from-[#FFFDF7] to-white rounded-2xl border border-[#C9A227]/20 hover:border-[#C9A227]/40 hover:shadow-gold transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#D4B94E] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A]">AMC상</h4>
                      <p className="text-sm text-[#94A3B8]">우수 성과 달성</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {awards.amc.map((year) => (
                      <span
                        key={year}
                        className="px-3 py-1.5 text-sm font-medium text-[#A68B1F] bg-[#C9A227]/10 rounded-lg border border-[#C9A227]/20"
                      >
                        {year}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border border-[#E2E8F0] hover:border-[#475569]/20 hover:shadow-medium transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#475569] to-[#64748B] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Medal className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A]">장기활동상</h4>
                      <p className="text-sm text-[#94A3B8]">{awards.longService.length}회 수상</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {awards.longService.map((year) => (
                      <span
                        key={year}
                        className="px-3 py-1.5 text-sm font-medium text-[#475569] bg-[#475569]/5 rounded-lg border border-[#475569]/10"
                      >
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
