import CaseCard from './CaseCard';
import Title from './Title';
import { remodelingCases, newJoinCases, specialCases } from '../data/cases';

function Cases() {
  return (
    <section id="cases" className="py-24 bg-slate-50 scroll-mt-14">
      <div className="mx-auto lg:w-3/4 w-[90%]">
        <Title
          title="상담 사례"
          subtitle="실제 고객분들의 보험 상담 사례입니다"
        />

        <div className="mt-16 space-y-16">
          {/* 리모델링 사례 */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900">리모델링 사례</h3>
              <p className="mt-2 text-slate-600">
                기존 보험을 분석하여 낭비되는 보험료는 줄이고, 필요한 보장은 강화합니다
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {remodelingCases.map((item) => (
                <CaseCard key={item.id} {...item} type="remodeling" />
              ))}
            </div>
          </div>

          {/* 신규 가입 */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900">신규 가입 설계</h3>
              <p className="mt-2 text-slate-600">
                고객님의 연령대와 상황에 맞춰 처음부터 최적의 보장을 설계합니다
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {newJoinCases.map((item) => (
                <CaseCard key={item.id} {...item} type="newjoin" />
              ))}
            </div>
          </div>

          {/* 특수 상황 */}
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900">특수 상황 해결</h3>
              <p className="mt-2 text-slate-600">
                청구 누락, 보험료 폭등, 중복 가입 등 다양한 문제를 해결합니다
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {specialCases.map((item) => (
                <CaseCard key={item.id} {...item} type="special" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cases;
