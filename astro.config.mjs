import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://astroship.web3templates.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
