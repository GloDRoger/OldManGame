import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.png'],
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          video: ["src", "poster"],
          source: ["src"],
          img: ["src"],
          image: ["xlink:href", "href"],
          use: ["xlink:href", "href"],
        },
      },
    }),
  ],
});
