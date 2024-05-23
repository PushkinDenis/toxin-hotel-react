import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/toxin-hotel-react/",
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: `[name]__[local]__[hash:base64:2]`,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@icons": "./public/icons",
      "@app": "/src/app",
      "@entities": "/src/entities/index.ts",
      "@features": "/src/features/index.ts",
      "@pages": "/src/pages/index.ts",
      "@shared": "/src/shared/index.ts",
    },
  },
});
