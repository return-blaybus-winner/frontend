# Movetum Frontend

아티스트와 기업을 연결하는 혁신적인 플랫폼, Movetum의 프론트엔드 애플리케이션입니다.

## 📖 프로젝트 소개

Movetum은 창작자의 재능과 기업의 프로젝트를 매칭하여 새로운 가치를 창출하는 플랫폼입니다. 아티스트는 자신의 작품을 선보이고 프로젝트에 참여할 수 있으며, 기업은 필요한 창작 인재를 쉽게 찾을 수 있습니다.

## ✨ 주요 기능

### 🎨 아티스트를 위한 기능

- **프로젝트 탐색**: 다양한 분야의 프로젝트 검색 및 지원
- **포트폴리오 관리**: 작품 전시 및 프로필 관리
- **프로젝트 진행 관리**: 진행 중인 프로젝트 추적 및 관리

### 🏢 기업을 위한 기능

- **아티스트 검색**: 전문 분야별 아티스트 찾기
- **프로젝트 등록**: 새로운 프로젝트 의뢰 등록
- **매칭 관리**: 지원자 검토 및 매칭 관리

### 🔧 공통 기능

- **사용자 인증**: 로그인/회원가입 (소셜 로그인 지원)
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **실시간 알림**: 프로젝트 상태 변경 알림
- **고급 필터링**: 카테고리, 지역, 예산별 검색

## 🛠 기술 스택

- **Framework**: [Next.js 15.4.6](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks
- **Form Handling**: Native React Forms

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── artists/           # 아티스트 관련 페이지
│   ├── projects/          # 프로젝트 관련 페이지
│   ├── my-projects/       # 마이페이지
│   ├── login/            # 로그인 페이지
│   ├── signup/           # 회원가입 페이지
│   └── layout.tsx        # 루트 레이아웃
├── components/            # 재사용 가능한 컴포넌트
│   ├── ui/               # UI 기본 컴포넌트
│   └── Header.tsx        # 공통 헤더
└── lib/                  # 유틸리티 함수
    └── utils.ts
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- npm, yarn, pnpm 또는 bun

### 설치 및 실행

1. **의존성 설치**

```bash
npm install
```

2. **개발 서버 실행**

```bash
npm run dev
```

3. **브라우저에서 확인**
   [http://localhost:3000](http://localhost:3000)에서 애플리케이션을 확인할 수 있습니다.

### 사용 가능한 스크립트

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

## 📄 페이지 구조

- **`/`** - 홈페이지 (서비스 소개, 주요 지표)
- **`/projects`** - 프로젝트 목록 및 검색
- **`/projects/[id]`** - 프로젝트 상세보기
- **`/artists`** - 아티스트 목록 및 검색
- **`/artists/[id]`** - 아티스트 프로필
- **`/my-projects`** - 마이페이지 (프로젝트 관리)
- **`/login`** - 로그인
- **`/signup`** - 회원가입

## 📊 프로젝트 현황

- ✅ 홈페이지 및 기본 레이아웃
- ✅ 프로젝트 검색 및 상세보기
- ✅ 아티스트 검색 및 프로필
- ✅ 마이페이지 및 프로젝트 관리
- ✅ 사용자 인증 (로그인/회원가입)
- ✅ 반응형 디자인
- 🔄 백엔드 API 연동 (예정)
- 🔄 실시간 알림 (예정)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의사항

프로젝트에 대한 문의사항이 있으시면 언제든 연락해주세요.

---

**Movetum** - 아티스트와 기업을 연결하는 혁신적인 플랫폼
