import { useInView } from '../hooks/useInView';
import { ArrowRight, TrendingDown, FileText, AlertCircle } from 'lucide-react';

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
}: CaseCardProps) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const isRemodeling = type === 'remodeling' || (before && after && discount);
  const isNewJoin = type === 'newjoin' || (!isRemodeling && plan);
  const isSpecial = type === 'special' || (!isRemodeling && !isNewJoin && issue);

  return (
    <div
      ref={ref}
      className={`p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* 타입 아이콘 + 제목 */}
      <div className="flex items-start gap-4">
        <div className={`flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 ${
          isRemodeling ? 'bg-blue-50' : isNewJoin ? 'bg-emerald-50' : 'bg-amber-50'
        }`}>
          {isRemodeling && <TrendingDown className="w-5 h-5 text-blue-600" />}
          {isNewJoin && <FileText className="w-5 h-5 text-emerald-600" />}
          {isSpecial && <AlertCircle className="w-5 h-5 text-amber-600" />}
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{title}</h4>
        </div>
      </div>

      {/* 리모델링 */}
      {isRemodeling && before && after && (
        <div className="mt-5 p-4 bg-slate-50 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-1">Before</p>
              <p className="text-sm text-slate-700">{before}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs text-slate-500 mb-1">After</p>
              <p className="text-sm text-slate-700">{after}</p>
            </div>
          </div>
          {discount && (
            <p className="mt-3 pt-3 border-t border-slate-200 text-sm font-semibold text-blue-600">
              {discount}
            </p>
          )}
        </div>
      )}

      {/* 신규 가입 */}
      {isNewJoin && plan && (
        <div className="mt-5 p-4 bg-emerald-50 rounded-xl">
          <p className="text-sm text-slate-700">{plan}</p>
        </div>
      )}

      {/* 특수 상황 */}
      {isSpecial && issue && action && result && (
        <div className="mt-5 space-y-3">
          <div className="p-3 bg-amber-50 rounded-xl">
            <p className="text-xs text-amber-700 font-medium mb-1">문제 상황</p>
            <p className="text-sm text-slate-700">{issue}</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <p className="text-xs text-slate-500 font-medium mb-1">조치 내용</p>
            <p className="text-sm text-slate-700">{action}</p>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl">
            <p className="text-xs text-emerald-700 font-medium mb-1">해결 결과</p>
            <p className="text-sm text-slate-700">{result}</p>
          </div>
        </div>
      )}

      {/* 요약 */}
      <p className="mt-5 pt-4 text-sm text-slate-500 border-t border-slate-100">
        {summary}
      </p>
    </div>
  );
};

export default CaseCard;
