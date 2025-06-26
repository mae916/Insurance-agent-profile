/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary: '#0046ff', // 메인 컬러
        // secondary: '#edf2ff', // 연한 배경용
        // accent: '#00b2ff', // 강조 색
        // muted: '#6b7280', // 텍스트 서브톤
        primary: '#002570', // 메인 컬러
        secondary: '#e1eeff', // 연한 배경용
        accent: '#007eff', // 강조 색
        muted: '#5880af', // 텍스트 서브톤
        mutedDark: '#3f5b85',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
