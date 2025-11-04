import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig: NextConfig = {
  experimental: {
    // reactCompiler включим позже, когда пройдём MWP
    // ppr (Partial Prerendering) тоже подключим на нужных маршрутах
  },
  // turbopack: {}, // <- сообщаем Next, что Turbopack сконфигурирован
};

export default withContentlayer(nextConfig);
