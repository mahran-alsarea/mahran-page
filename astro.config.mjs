import { defineConfig } from "astro/config";
import icon from "astro-icon";
import lqip from "vite-plugin-lqip";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://mahran-alsarea.com",
  vite: {
    plugins: [lqip()]
  },
  integrations: [icon(), sitemap(), robotsTxt()]
});