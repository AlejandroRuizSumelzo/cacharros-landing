import { defineConfig } from "vite";

import netlify from "@netlify/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), netlify()],
  build: {
    outDir: "dist",
  },
});
