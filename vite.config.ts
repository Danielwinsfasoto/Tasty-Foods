import path from "node:path";
import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { loadFontsFromTailwindSource } from "./plugins/loadFontsFromTailwindSource";

export default defineConfig({
  envPrefix: "NEXT_PUBLIC_",
  build: {
    target: "esnext",
  },
  plugins: [
    loadFontsFromTailwindSource(),
    reactRouter(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      lodash: "lodash-es",
      "npm:stripe": "stripe",
      stripe: path.resolve(__dirname, "./src/__create/stripe"),
      "@auth/create/react": "@hono/auth-js/react",
      "@auth/create": path.resolve(__dirname, "./src/__create/@auth/create"),
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    host: "0.0.0.0",
    port: 4000,
    hmr: {
      overlay: false,
    },
  },
});
