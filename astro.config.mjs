// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shiftedinteriors.com",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
