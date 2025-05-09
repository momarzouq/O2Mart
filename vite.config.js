import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Set the port to 3000
  },
  plugins: [
    react(),
    svgr(), // Add SVGR plugin for SVG support
  ],
});
