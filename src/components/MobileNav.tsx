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
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      <nav className="absolute top-full left-0 right-0 bg-white border-t border-[#eee] shadow-elegant-lg z-50 lg:hidden">
        <ul className="py-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={onClose}
                className="block px-6 py-3.5 text-[#333] hover:bg-[#fafafa] transition-colors font-medium"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="p-4 border-t border-[#eee]">
          <a
            href="http://pf.kakao.com/_wxefFn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold text-white bg-[#1e3a5f] rounded-xl"
          >
            <MessageCircle className="w-4 h-4" />
            카카오톡 상담
          </a>
        </div>
      </nav>
    </>
  );
}

export default MobileNav;
