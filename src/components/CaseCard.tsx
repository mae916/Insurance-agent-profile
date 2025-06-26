import { useInView } from '../hooks/useInView';

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
}: CaseCardProps) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`p-5 space-y-2 transition-all duration-700 ease-out bg-white shadow rounded-xl 
        hover:shadow-md hover:-translate-y-1
         ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
      `}
    >
      <h4 className="text-lg font-bold text-primary">{title}</h4>
      {before && <p>💸 기존: {before}</p>}
      {after && <p>📊 변경 후: {after}</p>}
      {discount && <p className="font-semibold text-accent">⏬ {discount}</p>}
      {plan && <p>📝 설계: {plan}</p>}
      {issue && <p>⚠️ 문제: {issue}</p>}
      {action && <p>🔧 조치: {action}</p>}
      {result && <p>✅ 결과: {result}</p>}
      <p className="text-sm text-black/70">{summary}</p>
    </div>
  );
};

export default CaseCard;
