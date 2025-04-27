import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/

export default defineConfig({
  server: {
    proxy: {
      "/": "http://localhost:5000",
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Strip the '/api' prefix
      },
    },
  },
  plugins: [react()],
});
