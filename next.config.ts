import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
};

export default nextConfig;
