import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@src", replacement: resolve(__dirname, "src") },
      { find: "@imgs", replacement: resolve(__dirname, "src/assets/imgs") },
      { find: "@pages", replacement: resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components")
      },
      { find: "@styles", replacement: resolve(__dirname, "src/assets/styles") },
      { find: "@plugins", replacement: resolve(__dirname, "plugins") },
      { find: "@slices", replacement: resolve(__dirname, "src/slices") },
      {
        find: "@interfaces",
        replacement: resolve(__dirname, "src/interfaces")
      },
      { find: "@context", replacement: resolve(__dirname, "src/context") },
      { find: "@data", replacement: resolve(__dirname, "src/datas") },
      { find: "@api", replacement: resolve(__dirname, "src/api") }
    ]
  },
  base: process.env.NODE_ENV === "production" ? "/KB_loan_exchange/" : "/",
  server: {
    port: 8080,
    open: "/"
  }
});
