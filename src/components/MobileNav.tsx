import { MessageCircle } from 'lucide-react';
import type { ISections } from '../types';

interface MobileNavProps extends ISections {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNav({ sections, isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-[#0F172A]/20 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      <nav className="absolute top-full left-0 right-0 bg-white border-t border-[#E2E8F0] shadow-large z-50 lg:hidden">
        <ul className="py-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={onClose}
                className="block px-6 py-4 text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#0033A0] transition-colors font-medium"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-4 border-t border-[#E2E8F0]">
          <a
            href="http://pf.kakao.com/_wxefFn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-4 font-semibold text-white bg-gradient-to-r from-[#0033A0] to-[#1E56B3] rounded-xl shadow-blue"
          >
            <MessageCircle className="w-5 h-5" />
            카카오톡 상담
          </a>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
