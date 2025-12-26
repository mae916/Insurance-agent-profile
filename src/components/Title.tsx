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
      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}

export default Title;
