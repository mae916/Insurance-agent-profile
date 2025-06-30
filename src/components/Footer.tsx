import { useEffect, useState } from 'react';

function Footer() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/jagang.jinproject.xyz/visits')
      .then((res) => res.json())
      .then((data) => setCount(data.value));
  }, []);

  return (
    <footer className="w-full py-6 mx-auto text-sm text-center text-gray-500">
      <p>© 2025 mae k. All rights reserved.</p>
      <p>
        <a href="mailto:ruchia916@naver.com">ruchia916@naver.com</a> ·{' '}
        <a
          href="https://github.com/mae916"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      {count !== null && (
        <p className="mt-2 text-xs">총 방문자 수: {count.toLocaleString()}명</p>
      )}
    </footer>
  );
}

export default Footer;
