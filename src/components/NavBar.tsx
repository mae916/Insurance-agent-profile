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
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                active === section.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
