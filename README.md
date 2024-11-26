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
