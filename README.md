## 보험 설계사 소개 웹사이트 - 자강대리점

> **React + Vite + Tailwind 기반 반응형 CSR 랜딩 페이지**

### 🎯 프로젝트 목표

- 보험 설계사를 위한 깔끔하고 직관적인 랜딩페이지 제공
- 스마트폰에서도 최적화된 반응형 UI 구현
- 빠른 로딩 속도를 위한 CSR(Client Side Rendering) 방식 적용
- QR 코드 기반 명함 활용을 염두한 개인 브랜드 사이트 제작


### ✅ 기술적 특징

- **Vite + React**: 빠른 개발환경과 최적화된 번들링
- **Tailwind CSS**: 효율적인 반응형 UI 구성
- **AWS EC2 + Nginx + Docker**: 실제 배포 환경 구성
- **Route 53 + 서브도메인 연결**: `jagang.jinproject.xyz` 도메인 운영
- **모바일 최적화**: 이미지 리사이징, 터치 UI 등 고려
- **QR 코드**: 명함에 활용 가능한 링크 생성 및 디자인

<br/>

**현재 진행 상태:** 초기 버전 완성 및 실사용 테스트 중

**추후 계획:**

- 카카오 비즈 프로필 연동
- 이미지 및 텍스트 콘텐츠 교체
- 하드코딩된 데이터 구조화 및 외부화


## 🚀 배포 링크

**[https://jagang.jinproject.xyz](https://jagang.jinproject.xyz)**

> _모바일 환경에서 최적화된 화면을 경험하실 수 있습니다_


## 🛠 기술 스택

<div align="center">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
  <img src="https://img.shields.io/badge/nginx-009900?style=for-the-badge&logo=nginx&logoColor=white">
  <img src="https://img.shields.io/badge/aws_ec2-FF9900?style=for-the-badge&logo=amazonaws&logoColor=black">
</div>


## 📖 프로젝트 구조

<details>
<summary><b>디렉토리 구조 보기</b></summary>

```plaintext
📦 JAGANG-WEB
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 assets              # 이미지, 아이콘 등 정적 리소스
 ┃ ┣ 📂 components          # UI 구성요소 컴포넌트
 ┃ ┃ ┣ 📜 About.tsx
 ┃ ┃ ┣ 📜 CaseCard.tsx
 ┃ ┃ ┣ 📜 Cases.tsx
 ┃ ┃ ┣ 📜 Contact.tsx
 ┃ ┃ ┣ 📜 Footer.tsx
 ┃ ┃ ┣ 📜 Header.tsx
 ┃ ┃ ┣ 📜 Home.tsx
 ┃ ┃ ┣ 📜 NavBar.tsx
 ┃ ┃ ┗ 📜 Title.tsx
 ┃ ┣ 📂 hooks               # 커스텀 훅
 ┃ ┃ ┣ 📜 useInView.ts
 ┃ ┃ ┗ 📜 useScrollToUpdateUrl.ts
 ┃ ┣ 📂 types               # 타입 정의
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📜 App.tsx             # 루트 컴포넌트
 ┃ ┣ 📜 index.css
 ┃ ┣ 📜 main.tsx            # 진입점
 ┃ ┗ 📜 vite-env.d.ts
 ┣ 📜 Dockerfile
 ┣ 📜 nginx.conf
 ┣ 📜 postcss.config.js
 ┣ 📜 tailwind.config.js
 ┣ 📜 tsconfig.json
 ┣ 📜 tsconfig.app.json
 ┣ 📜 tsconfig.node.json
 ┣ 📜 vite.config.ts
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┣ 📜 eslint.config.js
 ┗ 📜 README.md
```

</details>


## 📌 주요 화면 예시

### 메인 페이지 (PC)
![메인 페이지_PC](src/assets/readme/main_pc.png)

### 메인 페이지 (모바일)
![메인 페이지_mobile](src/assets/readme/main_mobile.png)
