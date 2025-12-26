import { useInView } from '../hooks/useInView';

interface TitleProps {
  title: string;
  subtitle?: string;
}

function Title({ title, subtitle }: TitleProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`text-center ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}
    >
      {/* 장식 라인 */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#C9A227]" />
        <div className="w-2 h-2 rounded-full bg-[#C9A227]" />
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#C9A227]" />
      </div>

      <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-[#64748B]">{subtitle}</p>
      )}
    </div>
  );
}

export default Title;
