import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.ytimg.com"],
    remotePatterns: [
      {
        protocol: "http", // HTTP 사용
        hostname: "placehold.co", // placehold.co 호스트 허용
        port: "", // 포트 설정 (기본값은 빈 문자열)
        pathname: "/**", // 모든 경로 허용
      },
    ],
    dangerouslyAllowSVG: true, // SVG 파일 사용 허용
  },

  /**
   * 개발 환경에서 빌드 상태와 ISR 상태를 시각적으로 확인하고, Pre-rendering의 실험적 기능을 테스트하는 데 유용.
   * 특히, 효율적인 페이지 렌더링 개선이나 ISR 디버깅이 필요한 경우 도움
   */
  experimental: {
    ppr: "incremental", // "incremental" PPR(Pre-Rendering) 기능 활성화
    after: true, // "after" 관련 추가 실험적 기능 활성화
  },
  devIndicators: {
    appIsrStatus: true, // 앱의 ISR(Incremental Static Regeneration) 상태를 개발 환경에서 확인 가능
    buildActivity: true, // 빌드 활동을 화면에 표시
    buildActivityPosition: "bottom-right", // 빌드 활동 표시 위치 (오른쪽 아래)
  },
};

export default nextConfig;
