import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
  },
  plugins: [react()],
   build: {
    rollupOptions: {
      external: [
        "rustpad-wasm", // ignore react stuff
  
      ],
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3030",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
