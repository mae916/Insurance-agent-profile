import { useInView } from '../hooks/useInView';
import { ArrowRight, TrendingDown, FileText, AlertCircle, CheckCircle2, Zap } from 'lucide-react';

interface CaseCardProps {
  title: string;
  before?: string;
  after?: string;
  discount?: string;
  plan?: string;
  issue?: string;
  action?: string;
  result?: string;
  summary: string;
  type?: 'remodeling' | 'newjoin' | 'special';
  index?: number;
}

const CaseCard = ({
  title,
  before,
  after,
  discount,
  plan,
  issue,
  action,
  result,
  summary,
  type,
  index = 0,
}: CaseCardProps) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const isRemodeling = type === 'remodeling' || (before && after && discount);
  const isNewJoin = type === 'newjoin' || (!isRemodeling && plan);
  const isSpecial = type === 'special' || (!isRemodeling && !isNewJoin && issue);

  const getTypeConfig = () => {
    if (isRemodeling) return {
      icon: TrendingDown,
      bgColor: 'bg-[#1e3a5f]',
      lightBg: 'bg-[#1e3a5f]/5',
      textColor: 'text-[#1e3a5f]',
      label: '리모델링',
    };
    if (isNewJoin) return {
      icon: FileText,
      bgColor: 'bg-[#0033A0]',
      lightBg: 'bg-[#0033A0]/10',
      textColor: 'text-[#0033A0]',
      label: '신규설계',
    };
    return {
      icon: AlertCircle,
      bgColor: 'bg-[#666]',
      lightBg: 'bg-[#666]/5',
      textColor: 'text-[#666]',
      label: '문제해결',
    };
  };

  const config = getTypeConfig();
  const Icon = config.icon;

  return (
    <div
      ref={ref}
      className={`group relative p-6 bg-white rounded-2xl border border-[#eee] hover:border-[#1e3a5f]/20 transition-all duration-300 hover:-translate-y-1 shadow-elegant hover:shadow-elegant-lg ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* 상단 라인 */}
      <div className={`absolute top-0 left-6 right-6 h-0.5 ${config.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />

      {/* 타입 라벨 + 제목 */}
      <div className="flex items-start gap-4 mb-5">
        <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${config.bgColor} group-hover:scale-105 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <span className={`inline-block px-2.5 py-1 text-xs font-medium ${config.textColor} ${config.lightBg} rounded-md mb-1.5`}>
            {config.label}
          </span>
          <h4 className="text-lg font-bold text-[#1a1a1a]">{title}</h4>
        </div>
      </div>

      {/* 리모델링 - Before/After 비교 */}
      {isRemodeling && before && after && (
        <div className="relative p-5 bg-[#fafbfc] rounded-xl border border-[#eee]">
          <div className="relative flex items-center gap-4">
            <div className="flex-1 space-y-1">
              <p className="text-xs font-semibold text-[#999] uppercase tracking-wide">Before</p>
              <p className="text-sm text-[#888] line-through decoration-red-400/50">{before}</p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-[#eee]">
              <ArrowRight className="w-5 h-5 text-[#1e3a5f]" />
            </div>

            <div className="flex-1 space-y-1 text-right">
              <p className="text-xs font-semibold text-[#999] uppercase tracking-wide">After</p>
              <p className="text-sm font-medium text-[#1a1a1a]">{after}</p>
            </div>
          </div>

          {discount && (
            <div className="mt-4 pt-4 border-t border-[#eee] flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-[#0033A0]" />
              <span className="text-lg font-bold text-[#1e3a5f]">
                {discount}
              </span>
            </div>
          )}
        </div>
      )}

      {/* 신규 가입 */}
      {isNewJoin && plan && (
        <div className="p-5 bg-[#0033A0]/5 rounded-xl border border-[#0033A0]/20">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#0033A0] mt-0.5 flex-shrink-0" />
            <p className="text-sm font-medium text-[#333]">{plan}</p>
          </div>
        </div>
      )}

      {/* 특수 상황 - 타임라인 스타일 */}
      {isSpecial && issue && action && result && (
        <div className="relative pl-6 space-y-4">
          {/* 타임라인 라인 */}
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#999] via-[#ccc] to-[#1e3a5f]" />

          {/* 문제 */}
          <div className="relative">
            <div className="absolute -left-[18px] w-4 h-4 bg-[#999] rounded-full border-2 border-white shadow-sm" />
            <div className="p-3 bg-[#fafafa] rounded-xl border border-[#eee]">
              <p className="text-xs font-bold text-[#999] mb-1">문제 상황</p>
              <p className="text-sm text-[#555]">{issue}</p>
            </div>
          </div>

          {/* 조치 */}
          <div className="relative">
            <div className="absolute -left-[18px] w-4 h-4 bg-[#ccc] rounded-full border-2 border-white shadow-sm" />
            <div className="p-3 bg-[#fafafa] rounded-xl border border-[#eee]">
              <p className="text-xs font-bold text-[#999] mb-1">조치 내용</p>
              <p className="text-sm text-[#555]">{action}</p>
            </div>
          </div>

          {/* 결과 */}
          <div className="relative">
            <div className="absolute -left-[18px] w-4 h-4 bg-[#1e3a5f] rounded-full border-2 border-white shadow-sm" />
            <div className="p-3 bg-[#1e3a5f]/5 rounded-xl border border-[#1e3a5f]/10">
              <p className="text-xs font-bold text-[#1e3a5f] mb-1">해결 결과</p>
              <p className="text-sm font-medium text-[#1a1a1a]">{result}</p>
            </div>
          </div>
        </div>
      )}

      {/* 요약 */}
      <p className="mt-5 pt-4 text-sm text-[#888] border-t border-[#eee] italic">
        "{summary}"
      </p>
    </div>
  );
};

export default CaseCard;
