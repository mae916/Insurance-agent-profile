import { CalendarClock, Users, FileCheck2 } from 'lucide-react';
import man from '../assets/silversu.png';
import Title from './Title';
import { useInView } from '../hooks/useInView';

const InfoCard = ({ icon, number, label, desc, className = '' }: any) => (
  <div className={`flex flex-col text-white w-fit ${className}`}>
    <div className="flex items-center">
      <div className="p-4 mr-8 bg-white rounded-full text-accent">{icon}</div>
      <div>
        <h3 className="text-3xl font-extrabold tracking-wide lg:text-4xl">
          {number}
        </h3>
        <p className="mt-3 text-xl lg:text-2xl font-midium">{label}</p>
      </div>
    </div>
    <p className="mt-8 text-lg lg:leading-relaxed lg:text-xl text-white/80">
      {desc}
    </p>
  </div>
);

function About() {
  const { ref, isVisible } = useInView<HTMLImageElement>();

  return (
    <section id="about" className="py-16 mb-0 bg-white lg:py-24 lg:relative">
      <article className="w-[90%] mx-auto lg:w-2/3">
        <Title title="설계사 소개"></Title>
        <div className="lg:justify-between lg:items-center lg:flex">
          <div>
            <img
              ref={ref}
              src={man}
              width={590}
              alt="사람 이미지"
              className={`mx-auto ${
                isVisible ? 'animate-zoom-in' : 'opacity-0'
              }`}
            />
          </div>

          {/* 주요 정보 카드 - mobile */}
          <article className="block lg:hidden">
            <InfoCard
              icon={<CalendarClock className="w-9 h-9" />}
              number="27년차"
              label="설계 경력"
              desc={
                <>
                  보험은 단순히 가입이 아닌 설명이 필요합니다.
                  <br className="hidden lg:block" /> 실제 사례와 근거를 바탕으로
                  상담해드립니다.
                </>
              }
              className={
                'rounded-[40px] bg-accent py-5 px-7 w-full animate-fade-in-up transition hover:shadow-md hover:-translate-y-1'
              }
            />
            <InfoCard
              icon={<Users className="w-9 h-9" />}
              number="737명"
              label="현재 고객 수"
              desc={
                <>
                  현재 737명 이상의 고객과 함께하고 있습니다.
                  <br className="hidden lg:block" /> 한 분 한 분 끝까지 책임지는
                  마음으로 일합니다.
                </>
              }
              className={
                'rounded-[40px] bg-accent py-5 px-7 w-full animate-fade-in-up transition hover:shadow-md hover:-translate-y-1 mt-1'
              }
            />
            <InfoCard
              icon={<FileCheck2 className="w-9 h-9" />}
              number="1500건"
              label="현재 관리 중인 계약 건"
              desc={
                <>
                  단순 안내에서 끝나지 않습니다.
                  <br />
                  고객이 보험금을 받을 수 있도록
                  <br />
                  끝까지 도와드립니다.
                </>
              }
              className={
                'rounded-[40px] bg-accent py-5 px-7 w-full animate-fade-in-up transition hover:shadow-md hover:-translate-y-1 mt-1'
              }
            />
          </article>
          <div>
            {/* 소개 문구 */}
            <div className="mt-12 mb-16 lg:mt-0">
              <p className="text-lg leading-8 whitespace-pre-line text-black/80">
                27년간 한 길을 걸어온 설계사 김은수입니다.
                <br />
                보험은 설명이 필요한 계약이며, 고객님의 삶에 꼭 필요한 준비라고
                믿습니다.
                <br />
                고객 한 분 한 분의 마음을 소중히 생각하며, 끝까지 책임지는
                상담을 약속드립니다.
              </p>
            </div>
            {/* 수상 이력 및 인증 */}

            <div className="mb-12 space-y-6">
              <h3 className="text-xl font-bold text-gray-800">
                수상 이력 및 인증
              </h3>

              {/* 손해보험협회 우수 인증 */}
              <div>
                <p className="mb-2 text-sm font-medium text-black/70">
                  ✔ 손해보험협회 우수 인증
                </p>
                <ul className="flex flex-wrap gap-2">
                  {[
                    '2009',
                    '2011',
                    '2012',
                    '2014',
                    '2015',
                    '2018',
                    '2019',
                    '2020',
                    '2021',
                    '2022',
                    '2023',
                    '2024',
                    '2025',
                  ].map((year) => (
                    <li
                      key={year}
                      className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full shadow-sm"
                    >
                      {year}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AMC 수상 */}
              <div>
                <p className="mb-2 text-sm font-medium text-black/70">
                  🏆 AMC상 수상
                </p>
                <ul className="flex flex-wrap gap-2">
                  {['2010'].map((year) => (
                    <li
                      key={year}
                      className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded-full shadow-sm"
                    >
                      {year}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 장기활동상 수상 */}
              <div>
                <p className="mb-2 text-sm font-medium text-black/70">
                  📌 장기활동상 수상
                </p>
                <ul className="flex flex-wrap gap-2">
                  {['2009', '2013', '2019', '2024'].map((year) => (
                    <li
                      key={year}
                      className="px-3 py-1 text-sm font-medium text-white bg-pink-500 rounded-full shadow-sm"
                    >
                      {year}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* 주요 정보 카드-pc */}
      <article className="lg:flex lg:justify-between lg:px-16 lg:py-12 w-[80%] m-auto rounded-[40px] bg-accent hidden">
        <InfoCard
          icon={<CalendarClock className="w-10 h-10" />}
          number="27년차"
          label="설계 경력"
          desc={
            <>
              보험은 단순히 가입이 아닌 설명이 필요합니다. <br /> 실제 사례와
              근거를 바탕으로 상담해드립니다.
            </>
          }
        />
        <InfoCard
          icon={<Users className="w-10 h-10" />}
          number="737명"
          label="현재 고객 수"
          desc={
            <>
              현재 737명 이상의 고객과 함께하고 있습니다. <br /> 한 분 한 분
              끝까지 책임지는 마음으로 일합니다.
            </>
          }
          className="border-white border-opacity-50 lg:px-12 lg:border-l lg:border-r"
        />
        <InfoCard
          icon={<FileCheck2 className="w-10 h-10" />}
          number="1500건"
          label="현재 관리 중인 계약 건"
          desc={
            <>
              단순 안내에서 끝나지 않습니다.
              <br />
              고객이 보험금을 받을 수 있도록
              <br />
              끝까지 도와드립니다.
            </>
          }
        />
      </article>
    </section>
  );
}

export default About;
