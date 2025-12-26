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
              className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                active === section.id
                  ? 'text-[#0033A0] bg-[#0033A0]/5'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]'
              }`}
            >
              {section.label}
              {active === section.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C9A227] rounded-full" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
