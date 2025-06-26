import man from '../assets/silversu.png';
import { UserCheck, TrendingUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

function Home() {
  const { ref, isVisible } = useInView<HTMLImageElement>();
  const { ref: ref2, isVisible: isVisible2 } = useInView<HTMLImageElement>();
  return (
    <section
      id="home"
      className="relative w-full h-full pt-16 pb-2 lg:pt-24 lg:pb-12 bg-secondary scroll-mt-24"
    >
      <article className="lg:w-3/4 w-[90%] mx-auto lg:items-center lg:justify-between lg:flex">
        <div>
          <div className="lg:text-[2.7rem] text-3xl font-semibold leading-relaxed text-primary text-center lg:text-left">
            <p className="break-keep">
              <span className="text-black/80">보험금은 </span>
              <span className="px-1 text-white rounded bg-primary">
                설계사 역량
              </span>
              <span className="text-black/80">에 따라 달라집니다.</span>
            </p>
            <p className="mt-10 break-keep">
              <span className="text-black/80">받을 수 있는 건 </span>
              <span className="px-1 text-white rounded bg-primary">끝까지</span>
              <span className="text-black/80"> 챙겨드립니다.</span>
            </p>
          </div>
          <div className="flex mt-14">
            <p className="text-lg leading-8 text-black/70 break-keep">
              <span className="text-xl font-semibold text-primary">
                13년 연속 손해보험협회 우수 인증
                {/* (25,24,23,22,21,20,19,18,15,14,12,11,09,10amc상,09장기활동,13 장기활동, 19장기활동, 24장기활동 ) */}
              </span>
              을 받은 삼성화재 자강대리점 김은수 설계사입니다.
              <br />
              가입부터 보험금 수령까지, 직접 끝까지 도와드립니다.
            </p>
          </div>
          {/* 사람이미지 - mobile */}
          <div className="block lg:hidden">
            <img
              ref={ref}
              src={man}
              width={650}
              alt="사람 이미지"
              className={`mx-auto ${
                isVisible ? 'animate-zoom-in' : 'opacity-0'
              }`}
            />
          </div>
          <button className="w-full px-6 py-5 text-2xl font-bold text-white transition-transform duration-200 rounded-full lg:w-auto lg:px-16 lg:mt-12 bg-accent hover:scale-105 hover:shadow-lg">
            😎 무료 상담 신청하기 &rarr;
          </button>

          <div className="grid grid-cols-1 gap-6 my-20 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 mt-1 text-accent" />
              <div>
                <h4 className="text-2xl font-semibold">보장 리모델링 전문가</h4>
                <p className="mt-2 text-lg text-black/60">
                  낡은 설계는 줄이고,
                  <br /> 필요한 보장만 남깁니다
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mt-4 lg:mt-0">
              <UserCheck className="w-8 h-8 mt-1 text-accent" />
              <div>
                <h4 className="text-2xl font-semibold">1:1 맞춤 설계</h4>
                <p className="mt-2 text-lg text-black/60">
                  단순 가입이 아닌,
                  <br /> 고객 상황에 맞춘 보장 안내
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 사람이미지 - pc */}
        <div className="absolute bottom-0 hidden lg:block right-24">
          <img
            ref={ref2}
            src={man}
            width={600}
            alt="사람 이미지"
            className={`mx-auto ${
              isVisible2 ? 'animate-zoom-in' : 'opacity-0'
            }`}
          />
        </div>
      </article>
    </section>
  );
}

export default Home;
