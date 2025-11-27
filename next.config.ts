import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["node-fxplc", "serialport"],
};

export default nextConfig;
