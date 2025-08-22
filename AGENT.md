# AGENT.md

## 프로젝트 개요 및 구조

- **Next.js 기반**: `create-next-app`으로 시작된 프로젝트. 주요 진입점은 `src/app/layout.tsx`와 `src/app/page.tsx`.
- **서비스 정보 구조(IA)**: 사용자 유형(아티스트/기업)에 따라 기능 흐름이 분기됨. 주요 기능은 프로젝트/아티스트 추천, 탐색, 매칭, 마이페이지 등.
- **UI 컴포넌트**: `src/components/ui/`에 커스텀 컴포넌트(Button, Input, Select 등)가 Radix UI와 Tailwind CSS를 활용해 구현됨. 모든 UI 컴포넌트는 `@/lib/utils`의 `cn` 함수로 클래스 병합 처리.
- **스타일링**: Tailwind CSS와 PostCSS(`postcss.config.mjs`) 사용. 폰트는 Geist를 Next.js font API로 적용(`src/app/layout.tsx`).

## 개발 워크플로우

- **개발 서버 실행**: `npm run dev` (Turbopack 사용), 포트는 기본 3000.
- **빌드/배포**: `npm run build` → `npm start`. Vercel 배포 권장.
- **Lint**: `npm run lint` (ESLint, Next.js core-web-vitals 및 typescript 규칙 적용).
- **TypeScript**: 엄격 모드(`strict: true`), 경로 별칭 `@/*` → `src/*`로 매핑.

## 주요 패턴 및 규칙

- **컴포넌트 설계**: 모든 UI 컴포넌트는 Radix UI의 Slot 패턴과 Tailwind 기반 스타일을 조합. 예시: `Button`은 `asChild`로 Slot 지원.
- **클래스 병합**: `src/lib/utils.ts`의 `cn` 함수로 `clsx`와 `tailwind-merge`를 결합해 중복 클래스 제거.
- **데이터 흐름**: 서비스 IA는 `IA.md` 참고. 프로젝트/아티스트 탐색, 매칭, 마이페이지 등은 사용자 유형에 따라 분기.
- **파일 구조**: 모든 파일 및 폴더 이름은 `kebab-case` 로 작성한다.

## 통합 및 외부 의존성

- **Radix UI**: AspectRatio, Avatar, Dialog, Label, Select 등.
- **Lucide React**: 아이콘 컴포넌트.
- **Tailwind CSS**: 스타일링 및 애니메이션(`tw-animate-css`).
- **Next.js Font API**: Geist 폰트 적용.

## 코드 작성 규칙

- Shadcn UI 컴포넌트 추가 시 `src/components/ui/`에 파일 생성, `cn` 함수로 클래스 병합.
- 페이지 추가 시 `src/app/`에 파일 생성, Next.js의 파일 기반 라우팅 활용.
- 스타일은 Tailwind CSS 유틸리티 우선, 필요시 PostCSS 플러그인 추가.
- 모든 import는 절대 경로로 작성한다.
- 중복을 피한다.
- 변경이 최대한 쉽도록 작성한다.

## 참고 파일

- 서비스 IA: `AGENT.md`
- 개발/배포: `README.md`
- ESLint/Tailwind 설정: `eslint.config.mjs`, `postcss.config.mjs`
- 타입스크립트 설정: `tsconfig.json`
- 주요 UI 패턴: `src/components/ui/`
