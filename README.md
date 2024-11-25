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
