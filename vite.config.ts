import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@domain": path.resolve(__dirname, "./src/domain/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@routes": path.resolve(__dirname, "./src/routes/"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
});
