import NavBar from './NavBar';
import logo from '../assets/samsung_logo.png';
import type { ISections } from '../types';

function Header({ sections }: ISections) {
  return (
    <header className="shadow-[0_2px_12px_rgba(0,0,0,0.06)] border-muted w-full py-4 sticky top-0 bg-white z-10">
      <div className="flex items-center justify-between mx-auto lg:w-2/3 w-[90%]">
        <div className="flex items-center text-primary">
          <div className="mr-3">
            <img src={logo} alt="" className="w-20 lg:w-100" />
          </div>
          <span className="font-bold lg:mt-1 text-primary">자강대리점</span>
        </div>
        <NavBar sections={sections}></NavBar>
        <button className="px-4 py-2 font-semibold text-white rounded lg:px-8 lg:py-3 lg:text-xl bg-accent">
          상담하기
        </button>
      </div>
    </header>
  );
}

export default Header;
