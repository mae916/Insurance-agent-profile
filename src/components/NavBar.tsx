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
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, active]);

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                active === section.id
                  ? 'text-[#1e3a5f] bg-[#1e3a5f]/5'
                  : 'text-[#666] hover:text-[#1a1a1a]'
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
