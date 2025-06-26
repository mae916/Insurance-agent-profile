import { useEffect, useState } from 'react';
import type { ISections } from '../types';

function NavBar({ sections }: ISections) {
  const [active, setActive] = useState(
    () => window.location.hash.replace('#', '') || 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash.replace('#', '') || 'home');
    };

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
      if (currentSection && currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 초기 실행
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, active]);

  return (
    <nav className="hidden w-2/5 lg:block">
      <ul className="flex items-center justify-between text-xl">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`transition-colors ${
                active === section.id
                  ? 'text-accent font-bold'
                  : 'text-black/70'
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
