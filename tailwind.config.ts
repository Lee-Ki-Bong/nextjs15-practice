import type { Config } from "tailwindcss";
// Tailwind CSS의 설정(Config) 타입을 가져옵니다. 이 설정은 Tailwind 구성 파일에서 사용됩니다.

const config: Config = {
  darkMode: ["class"],
  // 다크 모드 설정: HTML 요소에 `class="dark"`를 추가하여 다크 모드를 활성화합니다.

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Tailwind가 사용할 파일 경로 설정: 지정된 경로 내의 파일에서 클래스명을 스캔하여 스타일을 적용합니다.

  theme: {
    extend: {
      // Tailwind의 기본 테마를 확장하여 커스텀 설정을 추가합니다.

      screens: {
        xs: "475px",
        // 새로운 반응형 브레이크포인트 추가: `xs`는 화면 너비가 475px 이상일 때 스타일을 적용합니다.
      },

      colors: {
        primary: {
          "100": "#FFE8F0",
          DEFAULT: "#EE2B69",
          // `primary` 색상 추가: 기본값은 `#EE2B69`이고, "100"은 더 밝은 색상입니다.
        },
        secondary: "#FBE843",
        // `secondary` 색상 추가: 기본값은 `#FBE843`입니다.
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8087",
          DEFAULT: "#000000",
          // `black` 색상 추가: 다양한 단계별 색상으로 확장 (기본값은 검정 `#000000`).
        },
        white: {
          "100": "#F7F7F7",
          DEFAULT: "#FFFFFF",
          // `white` 색상 추가: 다양한 단계별 색상으로 확장 (기본값은 흰색 `#FFFFFF`).
        },
      },

      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
        // 커스텀 글꼴 추가: `--font-work-sans` CSS 변수를 사용하여 글꼴 설정.
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // 테두리 반경 설정: CSS 변수 `--radius`를 사용하여 동적으로 설정.
      },

      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(238, 43, 105)",
        // 박스 그림자 효과 추가: `100`, `200`, `300` 단계별로 다양한 그림자 스타일 제공.
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    // Tailwind CSS 애니메이션 플러그인: 다양한 애니메이션 유틸리티를 추가합니다.
    require("@tailwindcss/typography"),
    // Tailwind CSS 타이포그래피 플러그인: 텍스트 스타일링 유틸리티를 추가합니다.
  ],
};

export default config;
// Tailwind 설정을 내보냅니다. 이 설정은 Tailwind가 스타일을 생성할 때 사용됩니다.
