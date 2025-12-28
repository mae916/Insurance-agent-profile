# 삼성화재 자강대리점 - 김은수 설계사 프로필 웹사이트

> **27년 경력 보험 전문가의 프리미엄 랜딩 페이지**
> React 19 + Vite + TypeScript + TailwindCSS 기반 반응형 SPA

<br/>

## 배포 링크

**[https://jagang.jinproject.xyz](https://jagang.jinproject.xyz)**

<br/>

## 기술 스택

<div align="center">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
  <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
  <img src="https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
</div>

<br/>

---

<br/>

## 페이지별 상세 소개

### 1. 메인 화면 (Hero Section)

![메인 화면](src/assets/readme/pc_home.png)

#### 핵심 구성 요소

| 요소 | 설명 |
|------|------|
| **헤드라인** | "보험은 결국 설계사 역량입니다" - 전문성 강조 |
| **서브 카피** | 27년 경력 + 고객 맞춤 보장 설계 어필 |
| **CTA 버튼** | "무료 상담 신청" - Magnetic 효과 적용 |
| **프로필 이미지** | 신뢰감을 주는 전문가 사진 |

#### 핵심 지표 (카운트업 애니메이션)

- **27년** - 보험 업계 경력
- **737명** - 관리 중인 고객 수
- **13회** - 손해보험협회 우수 인증

#### 인터랙션 효과

- 숫자 카운트업 애니메이션 (스크롤 시 트리거)
- Magnetic Button (마우스를 따라 버튼이 자연스럽게 이동)
- 3D Tilt Card (마우스 움직임에 카드가 기울어지며 글레어 효과)

<br/>

---

### 2. 설계사 소개 (About Section)

![설계사 소개](src/assets/readme/pc_about.png)

#### 핵심 메시지

> **"끝까지 책임지는 상담을 약속드립니다"**

#### 차별화 포인트

| 포인트 | 내용 |
|--------|------|
| **고객 중심** | 보험은 단순한 상품이 아닌, 고객님의 미래를 위한 준비 |
| **풀서비스** | 27년간 737명 고객과 함께, 가입부터 보험금 수령까지 직접 도움 |
| **핵심 원칙** | 불필요한 특약은 과감히 줄이고, 정말 필요한 보장만 남김 |

#### 수상 이력

- 손해보험협회 **우수 인증 13회** 선정
- **AMC상** 수상
- **장기활동상** 수상

<br/>

---

### 3. 상담 사례 (Cases Section)

![상담 사례](src/assets/readme/pc_cases.png)

#### 카테고리별 필터링

| 카테고리 | 건수 | 설명 |
|----------|------|------|
| 전체 | 6건 | 모든 상담 사례 |
| 리모델링 | 2건 | 기존 보험 재설계 |
| 신규설계 | 2건 | 맞춤 보험 설계 |
| 문제해결 | 2건 | 보험금 청구 등 |

#### 사례 유형별 시각화

**리모델링 사례** - Before/After + 절감율 표시
```
40대 직장인 A씨
BEFORE: 월 38만원, 갱신형 다수 포함
AFTER: 월 18만원, 비갱신 중심
→ 52% 절감
```

**신규설계 사례** - 설계안 + 월 보험료 안내

**문제해결 사례** - 3단계 스텝 표시
1. 문제 상황 (회색)
2. 조치 내용 (골드)
3. 해결 결과 (블루)

<br/>

---

### 4. 문의하기 (Contact Section)

![문의하기](src/assets/readme/pc_contact.png)

#### 상담 채널

| 채널 | 설명 |
|------|------|
| **콜백 요청** | 이름, 연락처, 문의내용 입력 → 확인 후 전화드림 |
| **카카오톡 상담** | 실시간 1:1 채팅, 사진/파일 공유 가능 |

#### 카카오톡 상담 장점

- 실시간 1:1 상담
- 사진/파일 공유 가능
- 빠른 답변

#### 상담 가능 시간

**평일 오전 9시 ~ 오후 8시**

<br/>

---

<br/>

## 프로젝트 구조

```
Insurance-agent-profile/
├── public/
│   ├── jagang.svg              # 파비콘
│   ├── og-image.png            # OG 이미지 (카카오 공유용)
│   ├── robots.txt              # 검색엔진 크롤링 설정
│   ├── sitemap.xml             # 사이트맵
│   └── manifest.json           # PWA 매니페스트
├── src/
│   ├── assets/
│   │   ├── samsung_logo.webp   # 삼성화재 로고
│   │   ├── silversu.webp       # 설계사 프로필 이미지
│   │   └── readme/             # README 스크린샷
│   ├── components/
│   │   ├── App.tsx             # 루트 컴포넌트
│   │   ├── Header.tsx          # 헤더 (네비게이션)
│   │   ├── NavBar.tsx          # PC 네비게이션
│   │   ├── MobileNav.tsx       # 모바일 네비게이션
│   │   ├── Home.tsx            # 메인 히어로 섹션
│   │   ├── About.tsx           # 설계사 소개 섹션
│   │   ├── Cases.tsx           # 상담 사례 섹션
│   │   ├── CaseCard.tsx        # 사례 카드 컴포넌트
│   │   ├── Contact.tsx         # 문의하기 섹션
│   │   ├── Footer.tsx          # 푸터
│   │   ├── Title.tsx           # 섹션 타이틀
│   │   ├── ScrollProgress.tsx  # 스크롤 진행률 표시
│   │   ├── TiltCard.tsx        # 3D 틸트 카드
│   │   └── MagneticButton.tsx  # 마그네틱 버튼
│   ├── hooks/
│   │   ├── useInView.ts        # 뷰포트 감지
│   │   ├── useCountUp.ts       # 숫자 카운트업
│   │   └── useScrollToUpdateUrl.ts  # URL 해시 업데이트
│   ├── data/
│   │   └── cases.ts            # 상담 사례 데이터
│   ├── types/
│   │   └── index.ts            # TypeScript 타입 정의
│   ├── index.css               # 글로벌 스타일
│   └── main.tsx                # 진입점
├── Dockerfile                  # Docker 빌드 설정
├── nginx.conf                  # Nginx 설정
└── package.json                # 의존성 및 스크립트
```

<br/>

## 주요 기능

### 커스텀 훅

| 훅 | 설명 |
|----|------|
| `useInView` | Intersection Observer 기반 뷰포트 진입 감지 |
| `useCountUp` | 숫자 증가 애니메이션 (ease-out 이징) |
| `useScrollToUpdateUrl` | 스크롤 위치에 따른 URL 해시 자동 업데이트 |

### 인터랙티브 컴포넌트

| 컴포넌트 | 설명 |
|----------|------|
| `TiltCard` | 마우스 움직임에 반응하는 3D 기울기 + 글레어 효과 |
| `MagneticButton` | 마우스를 따라 자연스럽게 이동하는 버튼 |
| `ScrollProgress` | 상단에 표시되는 스크롤 진행률 바 |

<br/>

## 디자인 시스템

### 컬러 팔레트

| 색상 | 코드 | 용도 |
|------|------|------|
| Samsung Blue | `#0033A0` | 메인 브랜드 컬러 |
| Blue Light | `#1E56B3` | 그라데이션, 호버 |
| Gold | `#C9A227` | 액센트, 프리미엄 강조 |
| Text Primary | `#0F172A` | 본문 텍스트 |
| Text Secondary | `#475569` | 보조 텍스트 |
| Background | `#F8FAFC` | 배경색 |

### 애니메이션

| 애니메이션 | 설명 |
|------------|------|
| `fade-in-up` | 아래에서 위로 페이드 인 |
| `slide-in-left/right` | 좌/우에서 슬라이드 인 |
| `scale-in` | 확대되며 나타남 |
| `float` | 부유하는 효과 |
| `pulse-glow` | 빛나는 효과 |

<br/>

## SEO 최적화

| 항목 | 적용 내용 |
|------|-----------|
| **메타 태그** | title, description, keywords, author |
| **Open Graph** | 카카오톡/페이스북 공유 최적화 |
| **Twitter Card** | 트위터 공유 최적화 |
| **JSON-LD** | LocalBusiness, Person, Service, FAQ, BreadcrumbList |
| **robots.txt** | 검색엔진 크롤링 허용 |
| **sitemap.xml** | 페이지 구조 제공 |
| **manifest.json** | PWA 홈 화면 추가 지원 |

<br/>

## 실행 방법

### 개발 서버
```bash
npm install
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
npm run preview
```

### Docker 배포
```bash
docker build -t jagang-web .
docker run -p 8003:80 jagang-web
```

<br/>

## 배포 환경

| 항목 | 값 |
|------|-----|
| 서버 | AWS EC2 (t3.small) |
| 리버스 프록시 | Nginx |
| 컨테이너 | Docker |
| 도메인 | jagang.jinproject.xyz |
| SSL | ACM 와일드카드 인증서 |

<br/>

## 외부 연동

| 서비스 | 용도 |
|--------|------|
| **문의 폼 API** | `POST https://pium.jinproject.xyz/api/email/contact` |
| **카카오톡 채널** | [http://pf.kakao.com/_wxefFn](http://pf.kakao.com/_wxefFn) |

<br/>

---

**개발**: 김혜진
**마지막 업데이트**: 2025-12-29
