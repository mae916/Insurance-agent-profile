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
      gradient: 'from-[#0033A0] to-[#1E56B3]',
      lightBg: 'bg-[#0033A0]/5',
      textColor: 'text-[#0033A0]',
      borderColor: 'border-[#0033A0]/20',
      label: '리모델링',
    };
    if (isNewJoin) return {
      icon: FileText,
      gradient: 'from-[#C9A227] to-[#D4B94E]',
      lightBg: 'bg-[#C9A227]/5',
      textColor: 'text-[#A68B1F]',
      borderColor: 'border-[#C9A227]/20',
      label: '신규설계',
    };
    return {
      icon: AlertCircle,
      gradient: 'from-[#475569] to-[#64748B]',
      lightBg: 'bg-[#475569]/5',
      textColor: 'text-[#475569]',
      borderColor: 'border-[#475569]/20',
      label: '문제해결',
    };
  };

  const config = getTypeConfig();
  const Icon = config.icon;

  return (
    <div
      ref={ref}
      className={`group relative p-7 bg-white rounded-2xl border border-[#E2E8F0] hover:border-transparent transition-all duration-500 hover:-translate-y-2 shadow-soft hover:shadow-large overflow-hidden ${
        isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >

      {/* 타입 라벨 + 제목 */}
      <div className="flex items-start gap-4 mb-6">
        <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1 pt-1">
          <span className={`inline-block px-3 py-1 text-xs font-semibold ${config.textColor} ${config.lightBg} rounded-full mb-2`}>
            {config.label}
          </span>
          <h4 className="text-lg font-bold text-[#0F172A]">{title}</h4>
        </div>
      </div>

      {/* 리모델링 - Before/After 비교 */}
      {isRemodeling && before && after && (
        <div className="relative p-5 bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl border border-[#E2E8F0]">
          <div className="relative flex items-center gap-4">
            <div className="flex-1 space-y-1">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">Before</p>
              <p className="text-sm text-[#64748B] line-through decoration-red-400/50">{before}</p>
            </div>

            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full border border-[#E2E8F0] shadow-soft">
              <ArrowRight className="w-5 h-5 text-[#0033A0]" />
            </div>

            <div className="flex-1 space-y-1 text-right">
              <p className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">After</p>
              <p className="text-sm font-semibold text-[#0F172A]">{after}</p>
            </div>
          </div>

          {discount && (
            <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 text-[#C9A227]" />
              <span className="text-lg font-bold gradient-text">
                {discount}
              </span>
            </div>
          )}
        </div>
      )}

      {/* 신규 가입 */}
      {isNewJoin && plan && (
        <div className="p-5 bg-gradient-to-br from-[#FFFDF7] to-white rounded-xl border border-[#C9A227]/20">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C9A227] mt-0.5 flex-shrink-0" />
            <p className="text-sm font-medium text-[#0F172A]">{plan}</p>
          </div>
        </div>
      )}

      {/* 특수 상황 - 타임라인 스타일 */}
      {isSpecial && issue && action && result && (
        <div className="relative pl-6 space-y-4">
          {/* 타임라인 라인 */}
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#94A3B8] via-[#C9A227] to-[#0033A0]" />

          {/* 문제 */}
          <div className="relative">
            <div className="absolute -left-[18px] w-4 h-4 bg-[#94A3B8] rounded-full border-2 border-white shadow-sm" />
            <div className="p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
              <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1">문제 상황</p>
              <p className="text-sm text-[#475569]">{issue}</p>
            </div>
          </div>

          {/* 조치 */}
          <div className="relative">
            <div className="absolute -left-[18px] w-4 h-4 bg-[#C9A227] rounded-full border-2 border-white shadow-sm" />
            <div className="p-4 bg-[#FFFDF7] rounded-xl border border-[#C9A227]/10">
              <p className="text-xs font-bold text-[#C9A227] uppercase tracking-wider mb-1">조치 내용</p>
              <p className="text-sm text-[#475569]">{action}</p>
            </div>
          </div>

          {/* 결과 */}
          <div className="relative">
            <div className="absolute -left-[18px] w-4 h-4 bg-[#0033A0] rounded-full border-2 border-white shadow-sm" />
            <div className="p-4 bg-[#EEF4FF] rounded-xl border border-[#0033A0]/10">
              <p className="text-xs font-bold text-[#0033A0] uppercase tracking-wider mb-1">해결 결과</p>
              <p className="text-sm font-medium text-[#0F172A]">{result}</p>
            </div>
          </div>
        </div>
      )}

      {/* 요약 */}
      <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
        <p className="text-sm text-[#64748B] italic leading-relaxed">
          "{summary}"
        </p>
      </div>
    </div>
  );
};

export default CaseCard;
