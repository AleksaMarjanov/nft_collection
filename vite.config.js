import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/nft_collection/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
});