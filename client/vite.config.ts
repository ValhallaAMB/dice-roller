import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@layout": "/src/layout",
      "@pages": "/src/pages",
      "@stores": "/src/stores",
      "@types": "/src/types",
      "@schemas": "/src/schemas",
    },
  },
});
