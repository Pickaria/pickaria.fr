import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import metas from "lume/plugins/metas.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import nav from "lume/plugins/nav.ts";
import picture from "lume/plugins/picture.ts";
import postcss from "lume/plugins/postcss.ts";
import redirects from "lume/plugins/redirects.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import svgo from "lume/plugins/svgo.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import transformImages from "lume/plugins/transform_images.ts";
import typography from "npm:@tailwindcss/typography";
import { fr } from "npm:date-fns/locale/fr";

const site = lume({
  src: "./src",
  location: new URL("https://www.pickaria.fr/"),
});

site
  .use(tailwindcss({
    options: {
      plugins: [typography],
      darkMode: ['selector', '[data-mode="dark"]'],
      theme: {
        fontFamily: {
          sans: ["Josefin Sans", "system-ui", "sans-serif"],
          serif: ["system-ui", "serif"],
        },
        extend: {
          colors: {
            "background": "var(--background)",
            "foreground": "var(--foreground)",
            "foreground-secondary": "var(--foreground-secondary)",
            "muted": "var(--muted)",
            "muted-secondary": "var(--muted-secondary)",
          },
        },
      },
    },
  }))
  .use(postcss())
  .use(date({ locales: { fr } }))
  .use(picture())
  .use(transformImages())
  .use(svgo())
  .use(redirects({
    output: "netlify",
  }))
  .use(robots({
    rules: [
      {
        userAgent: "*",
        disallow: "/assets/",
      },
    ],
  }))
  .use(sitemap())
  .use(metas())
  .use(nav())
  .use(lightningCSS())
  .use(minifyHTML())
  .copy("assets/videos")
  .copy("assets/icons")
  .copy("assets/fonts")
  .copy("assets/js")
  .copy("favicon.ico")
  .preprocess([".md"], (pages) => {
    for (const page of pages) {
      page.data.excerpt ??= (page.data.content as string).split(/<!--\s*more\s*-->/i)[0].trim();
    }
  });

export default site;
