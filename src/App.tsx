import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cases from './components/Cases';
import ScrollProgress from './components/ScrollProgress';

import useScrollToUpdateUrl from './hooks/useScrollToUpdateUrl';

const sections = [
  { id: 'home', label: '메인화면', isActive: true },
  { id: 'about', label: '설계사 소개', isActive: false },
  { id: 'cases', label: '상담 사례', isActive: false },
  { id: 'contact', label: '문의하기', isActive: false },
];

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useScrollToUpdateUrl({ sections });

  return (
    <>
      <ScrollProgress />
      <Header sections={sections}></Header>
      <main>
        <Home></Home>
        <About></About>
        <Cases></Cases>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
