import { useState } from 'react';
import { TrendingDown, FileText, AlertCircle, ArrowRight } from 'lucide-react';
import CaseCard from './CaseCard';
import Title from './Title';
import { remodelingCases, newJoinCases, specialCases } from '../data/cases';

type TabType = 'all' | 'remodeling' | 'newjoin' | 'special';

const tabs = [
  { id: 'all' as const, label: '전체', count: remodelingCases.length + newJoinCases.length + specialCases.length },
  { id: 'remodeling' as const, label: '리모델링', icon: TrendingDown, count: remodelingCases.length },
  { id: 'newjoin' as const, label: '신규설계', icon: FileText, count: newJoinCases.length },
  { id: 'special' as const, label: '문제해결', icon: AlertCircle, count: specialCases.length },
];

function Cases() {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const getFilteredCases = () => {
    switch (activeTab) {
      case 'remodeling':
        return remodelingCases.map((item, i) => ({ ...item, type: 'remodeling' as const, index: i }));
      case 'newjoin':
        return newJoinCases.map((item, i) => ({ ...item, type: 'newjoin' as const, index: i }));
      case 'special':
        return specialCases.map((item, i) => ({ ...item, type: 'special' as const, index: i }));
      default:
        return [
          ...remodelingCases.map((item, i) => ({ ...item, type: 'remodeling' as const, index: i })),
          ...newJoinCases.map((item, i) => ({ ...item, type: 'newjoin' as const, index: i + remodelingCases.length })),
          ...specialCases.map((item, i) => ({ ...item, type: 'special' as const, index: i + remodelingCases.length + newJoinCases.length })),
        ];
    }
  };

  return (
    <section id="cases" className="py-28 bg-[#fafbfc] scroll-mt-14">
      <div className="mx-auto lg:w-3/4 w-[90%]">
        <Title
          title="상담 사례"
          subtitle="실제 고객분들의 보험 상담 사례입니다"
        />

        {/* 탭 네비게이션 */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0033A0] to-[#1E56B3] text-white shadow-blue'
                    : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#0033A0]/30'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 text-xs rounded-md ${
                  isActive ? 'bg-white/20' : 'bg-[#EEF4FF] text-[#0033A0]'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 사례 카드 그리드 */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {getFilteredCases().map((item) => (
            <CaseCard key={`${item.type}-${item.id}`} {...item} />
          ))}
        </div>

        {/* 하단 CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#64748B] mb-6">
            <span className="font-semibold text-[#0F172A]">나의 상황</span>에 맞는 상담이 필요하신가요?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-gradient-to-r from-[#0033A0] to-[#1E56B3] rounded-full hover:from-[#002277] hover:to-[#0033A0] transition-all shadow-blue hover:shadow-elevated hover:-translate-y-0.5"
          >
            무료 상담 받기
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cases;
