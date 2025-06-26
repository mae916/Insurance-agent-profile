import { useEffect } from 'react';
import type { ISections } from '../types';

function useScrollToUpdateUrl({ sections }: ISections) {
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      }

      if (currentSection) {
        const newUrl = `#${currentSection}`;
        if (window.location.hash !== newUrl) {
          history.replaceState(null, '', newUrl);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 초기 실행

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default useScrollToUpdateUrl;
