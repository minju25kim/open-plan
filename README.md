# Open Plan

Next.js, TypeScript, Tailwind CSS를 사용하여 구축된 모노레포 프로젝트로, Turborepo를 빌드 시스템 오케스트레이션에 사용합니다.

## 🚀 데모

[실제 애플리케이션 보기](https://open-plan-after-deadline.vercel.app/)

## 📦 프로젝트 구조

이 프로젝트는 pnpm 워크스페이스와 Turborepo를 사용하는 모노레포입니다. 프로젝트는 다음과 같이 구성되어 있습니다:

```
.
├── apps/
│   ├── web/          # Next.js 웹 애플리케이션
│   └── storybook/    # UI 컴포넌트를 위한 Storybook
├── packages/
│   ├── ui/           # 공유 UI 컴포넌트
│   ├── eslint-config # 공유 ESLint 설정
│   ├── tailwind-config # 공유 Tailwind CSS 설정
│   └── typescript-config # 공유 TypeScript 설정
```

## 🛠️ 기술 스택

- **프레임워크**: Next.js 15
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **패키지 매니저**: pnpm
- **빌드 시스템**: Turborepo
- **UI 컴포넌트**: Storybook
- **배포**: Vercel

## 🚀 시작하기

### 필수 조건

- Node.js (.nvmrc에 명시된 버전)
- pnpm

### 설치 방법

1. 저장소 클론:
   ```bash
   git clone https://github.com/minju25kim/open-plan.git
   cd open-plan
   ```

2. 의존성 설치:
   ```bash
   pnpm install
   ```

3. 개발 서버 실행:
   ```bash
   pnpm dev
   ```

### 사용 가능한 스크립트

- `pnpm dev` - 개발 서버 시작
- `pnpm build` - 모든 패키지와 애플리케이션 빌드
- `pnpm lint` - ESLint 실행
- `pnpm check-types` - TypeScript 타입 체크 실행

## 📚 문서

- [Next.js 문서](https://nextjs.org/docs)
- [Turborepo 문서](https://turbo.build/repo/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)

## 🤝 기여하기

1. 저장소를 포크합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다 - 자세한 내용은 LICENSE 파일을 참조하세요.
