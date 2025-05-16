# open-plan

[GitHub 저장소 바로가기](https://github.com/minju25kim/open-plan)

[open-plan 웹사이트 바로가기](https://open-plan-web.vercel.app/)

모던 웹 개발을 위한 모노레포 프로젝트입니다. Next.js 웹 앱, UI 컴포넌트 라이브러리, Storybook을 포함하고 있습니다.

---

## 주요 기능

- **Turborepo** 기반 모노레포 구조
- **Next.js 15** 웹 애플리케이션 (`apps/web`)
- **Storybook 8** UI 컴포넌트 개발 환경 (`apps/storybook`)
- **공유 React UI 라이브러리** (`packages/ui`)
- **일관된 Lint/TypeScript 설정** (공유 패키지)
- **빠른 빌드 및 작업 오케스트레이션** (Turborepo)
- **전체 코드 TypeScript 적용**
- **Prettier, ESLint** 코드 품질 관리

---

## 실행 방법

### 의존성 설치

```sh
pnpm install
```

### 개발 서버 실행

```sh
pnpm dev
```
- 웹 앱: [http://localhost:3000](http://localhost:3000)
- Storybook: [http://localhost:5173](http://localhost:5173)

### 전체 빌드

```sh
pnpm build
```

### 전체 Lint

```sh
pnpm lint
```

---

## 기술 스택

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Storybook 8](https://storybook.js.org/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Turborepo](https://turbo.build/)
- [pnpm](https://pnpm.io/)
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

---

## 폴더 구조

```
.
├── apps/
│   ├── web/         # Next.js 15 애플리케이션
│   └── storybook/   # Storybook 8 UI 컴포넌트 개발
├── packages/
│   ├── ui/                  # 공유 React UI 컴포넌트 라이브러리
│   ├── eslint-config/       # 공유 ESLint 설정
│   └── typescript-config/   # 공유 TypeScript 설정
├── package.json
├── turbo.json
├── pnpm-workspace.yaml
└── README.md
```

---

## 스크린샷

<!-- 스크린샷이 있다면 여기에 추가하세요 -->

---
