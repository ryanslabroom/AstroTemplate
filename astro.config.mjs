// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Remove these lines if only deploying to Netlify
  // site: "<https://ryanslabroom.github.io/AstroTemplate/",>
  // base: "/AstroTemplate",
});
