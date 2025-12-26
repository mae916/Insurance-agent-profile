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
      <h2 className="text-3xl font-bold text-[#1a1a1a] lg:text-4xl tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#666]">{subtitle}</p>
      )}
    </div>
  );
}

export default Title;
