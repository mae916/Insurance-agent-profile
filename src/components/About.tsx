import man from '../assets/silversu.webp';
import Title from './Title';
import { useInView } from '../hooks/useInView';

const awards = {
  excellent: ['2009', '2011', '2012', '2014', '2015', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  amc: ['2010'],
  longService: ['2009', '2013', '2019', '2024'],
};

function About() {
  const { ref, isVisible } = useInView<HTMLImageElement>();

  return (
    <section id="about" className="py-24 bg-white scroll-mt-10">
      <div className="w-[90%] mx-auto lg:w-3/4">
        <Title title="설계사 소개" subtitle="27년간 고객과 함께해온 김은수 설계사입니다" />

        <div className="mt-16 lg:flex lg:gap-20 lg:items-start">
          {/* 이미지 */}
          <div className="flex-shrink-0 mb-12 lg:mb-0">
            <img
              ref={ref}
              src={man}
              alt="김은수 설계사"
              className={`mx-auto rounded-3xl object-cover h-[400px] lg:h-[500px] w-full max-w-sm object-top shadow-2xl shadow-slate-900/20 ${
                isVisible ? 'animate-zoom-in' : 'opacity-0'
              }`}
            />
          </div>

          {/* 소개 내용 */}
          <div className="flex-1">
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">
                끝까지 책임지는 상담을<br />약속드립니다
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                보험은 단순한 상품이 아닌, 고객님의 미래를 위한 준비입니다.
                저는 27년간 737명의 고객분들과 함께하며, 가입부터 보험금 수령까지
                모든 과정을 직접 도와드리고 있습니다.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                불필요한 특약은 과감히 줄이고, 정말 필요한 보장만 남기는 것.
                그것이 제가 27년간 지켜온 원칙입니다.
              </p>
            </div>

            {/* 수상 이력 */}
            <div className="p-8 bg-slate-50 rounded-2xl">
              <h4 className="mb-6 text-lg font-semibold text-slate-900">수상 및 인증 이력</h4>

              <div className="space-y-6">
                <div>
                  <p className="mb-3 text-sm font-medium text-slate-500">손해보험협회 우수 인증</p>
                  <div className="flex flex-wrap gap-2">
                    {awards.excellent.map((year) => (
                      <span key={year} className="px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-100 rounded-lg">
                        {year}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-medium text-slate-500">AMC상 수상</p>
                  <div className="flex flex-wrap gap-2">
                    {awards.amc.map((year) => (
                      <span key={year} className="px-3 py-1.5 text-sm font-medium text-amber-700 bg-amber-100 rounded-lg">
                        {year}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm font-medium text-slate-500">장기활동상</p>
                  <div className="flex flex-wrap gap-2">
                    {awards.longService.map((year) => (
                      <span key={year} className="px-3 py-1.5 text-sm font-medium text-rose-700 bg-rose-100 rounded-lg">
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
