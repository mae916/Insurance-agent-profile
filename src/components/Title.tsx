import { useInView } from '../hooks/useInView';

interface TitleProps {
  title: string;
}
function Title({ title }: TitleProps) {
  const { ref, isVisible } = useInView<HTMLHeadingElement>();
  return (
    <h2
      ref={ref}
      className={`text-2xl font-bold text-primary text-center ${
        isVisible ? 'animate-fade-in-down' : 'opacity-0'
      }`}
    >
      {title}
    </h2>
  );
}

export default Title;
