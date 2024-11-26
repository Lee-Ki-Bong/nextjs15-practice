## Authentication with NextAuth

https://next-auth.js.org/

https://authjs.dev/getting-started/migrating-to-v5

### Installing Auth.js

```
npm install next-auth@beta
```

### Setup Environment

```
npx auth secret
```

### Configure

1. 앱의 루트 디렉터리에 auth.ts라는 새로운 파일을 생성하고, 다음 내용을 추가

```
import NextAuth from "next-auth"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
```

2. app/api/auth/[...nextauth]/route.ts 경로대로 디렉토리와 파일을 생성

## shadcn init

https://ui.shadcn.com/docs/cli

```
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS.
✔ Validating import alias.
✔ Which style would you like to use? › New York
✔ Which color would you like to use as the base color? › Slate
✔ Would you like to use CSS variables for theming? … no / yes
✔ Writing components.json.
✔ Checking registry.
✔ Updating tailwind.config.ts
✔ Updating app/globals.css
  Installing dependencies.
```

## sanity setup

https://www.sanity.io/manage/personal/project/tkbr7ftq/getting-started

```
Login successful
Good stuff, you're now authenticated. You'll need a project to keep your
datasets and collaborators safe and snug.
✅ Fetching existing projects
? Would you like to add configuration files for a Sanity project in this Next.js folder? Yes
? Do you want to use TypeScript? Yes
? Would you like an embedded Sanity Studio? Yes
? What route do you want to use for the Studio? /studio
? Select project template to use Clean project with no predefined schema types
? Would you like to add the project ID and dataset to your .env.local file? Yes
Added http://localhost:3000 to CORS origins
```

## .env.local NEXT_PUBLIC_SANITY_PROJECT_ID 추가

https://www.sanity.io/manage/personal/project/tkbr7ftq/settings

## .env.local NEXT_PUBLIC_SANITY_DATASET 추가

title 을 추가하면된다.
https://www.sanity.io/manage/personal/project/tkbr7ftq/datasets

## markdown 타입 추가를 위한패키지 설치

```
npm install sanity-plugin-markdown -f
```

## Sanity 프로젝트에서 스키마(schema)를 추출

현재 Sanity 프로젝트에서 사용 중인 모든 스키마를 추출하여 JSON 파일로 저장.
-path에 지정된 디렉토리가 존재하지 않으면 에러가 발생.

```
npx sanity@latest schema extract --path=./sanity/extract.json
✅ Extracted schema to ./sanity/extract.json
```

## Sanity Typegen 도구로 스키마를 기반으로 type 생성

Sanity 스키마를 기반으로 TypeScript 타입 정의를 자동 생성하고 관리하는 데 핵심적인 역할

1. /sanity-typegen.json 파일생성 & 설정 저장

```
{
  "path": "./src/**/*.{ts,tsx,js,jsx}", // Sanity 스키마를 기반으로 타입을 생성할 때 참조할 코드 파일 경로
  "schema": "./sanity/extract.json",   // Sanity에서 추출된 스키마 파일 경로 (JSON 형식으로 저장됨)
  "generates": "./sanity/types.ts"     // Sanity 스키마로 생성된 TypeScript 타입 정의를 저장할 파일 경로
}
```

2. 명령어 실행

```
npx sanity@latest typegen generate
✅ Generated TypeScript types for 15 schema types and 0 GROQ queries in 0 files into: ./sanity/types.ts
```

[참고] package.json 에 명령어 추가

```
{
  "predev": "npm run typegen", // 'npm run dev'를 실행하기 전에 'typegen' 스크립트를 실행하여 타입 생성 작업을 수행
  "prebuild": "npm run typegen", // 'npm run build'를 실행하기 전에 'typegen' 스크립트를 실행하여 타입 생성 작업을 수행
  "typegen": "sanity schema extract --path=./sanity/extract.json && sanity typegen generate" // Sanity 스키마를 추출하고 이를 기반으로 TypeScript 타입 정의를 생성
}

```
