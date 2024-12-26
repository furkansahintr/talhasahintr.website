import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://talha.sahin.biz",
  trailingSlash: "always",
  prefetch: true,
  i18n: {
    defaultLocale: "tr",
    locales: [
      "tr",
      "en",
    ],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " ↗" },
        },
      ],
    ],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'tr',
        locales: {
          en: 'en-US',
          tr: 'tr-TR',
        },
      },
    }),
    mdx(),
    pagefind(),
    tailwind(),
    icon({
      include: {
        tabler: ["*"],
      mdi: ["*"],
      "material-symbols": ["*"],
      flagpack: ["*"],
      "flat-color-icons": ["*"],
    },
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })
],
});
