import CaseCard from './CaseCard';
import Title from './Title';

const remodelingCases = [
  {
    title: '40대 직장인 A씨',
    before: '월 38만원, 갱신형 다수 포함',
    after: '월 18만원, 비갱신 중심',
    discount: '52% 절감',
    summary: '암·뇌혈관 보장은 유지, 중복 특약 정리',
  },
  {
    title: '40대 직장인 A씨',
    before: '월 38만원, 갱신형 다수 포함',
    after: '월 18만원, 비갱신 중심',
    discount: '52% 절감',
    summary: '암·뇌혈관 보장은 유지, 중복 특약 정리',
  },
];

const newJoinCases = [
  {
    title: '20대 초년생 D씨',
    plan: '실손 + 3대 질병 중심 / 월 7만원',
    summary: '종신보험 권유 대신 가성비 중심 설계',
  },
  {
    title: '20대 초년생 D씨',
    plan: '실손 + 3대 질병 중심 / 월 7만원',
    summary: '종신보험 권유 대신 가성비 중심 설계',
  },
];

const specialCases = [
  {
    title: '갱신형 보험료 폭등한 50대 C씨',
    issue: '20만원 → 50만원으로 급증',
    action: '갱신형 정리 + 보장 이관',
    result: '노후 대비 비갱신형 설계 / 보험료 26만원',
    summary: '청구 이력 분석 후 실손+진단비로 최적화',
  },
  {
    title: '갱신형 보험료 폭등한 50대 C씨',
    issue: '20만원 → 50만원으로 급증',
    action: '갱신형 정리 + 보장 이관',
    result: '노후 대비 비갱신형 설계 / 보험료 26만원',
    summary: '청구 이력 분석 후 실손+진단비로 최적화',
  },
];

function Cases() {
  return (
    <section id="cases" className="py-20 mx-auto bg-[#f7faff] scroll-mt-16 ">
      <div className="mx-auto space-y-16 lg:w-3/4 w-[90%]">
        <Title title="상담 사례"></Title>

        <article>
          <h3 className="mb-4 text-xl font-semibold text-accent">
            💡 리모델링 사례
          </h3>
          <p className="mb-6 text-black/60">
            기존 보험을 분석하고, 낭비되는 보험료는 줄이고 필요한 보장은
            유지하거나 강화한 사례입니다.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {remodelingCases.map((item) => (
              <CaseCard key={item.title} {...item} />
            ))}
          </div>
        </article>

        <article>
          <h3 className="mb-4 text-xl font-semibold text-accent">
            🆕 신규 가입 설계
          </h3>
          <p className="mb-6 text-black/60">
            고객님의 연령대와 상황에 맞춰 처음부터 알맞게 설계한 사례입니다.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {newJoinCases.map((item) => (
              <CaseCard key={item.title} {...item} />
            ))}
          </div>
        </article>

        <article>
          <h3 className="mb-4 text-xl font-semibold text-accent">
            🚨 특수 상황 해결
          </h3>
          <p className="mb-6 text-black/60">
            실손 청구 누락, 갱신 보험 폭등, 중복 가입 해소 등 긴급하거나
            예외적인 상황에 대응한 사례입니다.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            {specialCases.map((item) => (
              <CaseCard key={item.title} {...item} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Cases;
