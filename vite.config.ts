import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // generate a bundle visualization at build time (dist/stats.html)
    visualizer({ filename: "dist/stats.html", gzipSize: true }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
