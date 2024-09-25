import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import picture from "lume/plugins/picture.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import transformImages from "lume/plugins/transform_images.ts";
import typography from "npm:@tailwindcss/typography";
import { fr } from "npm:date-fns/locale/fr";
import svgo from "lume/plugins/svgo.ts";
import redirects from "lume/plugins/redirects.ts";
import robots from "lume/plugins/robots.ts";
import sitemap from "lume/plugins/sitemap.ts";
import nav from "lume/plugins/nav.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  src: "./src",
  location: new URL("https://www.pickaria.fr/"),
});

site
  .use(tailwindcss({
    options: {
      plugins: [typography],
      theme: {
        fontFamily: {
          sans: ["Josefin Sans", "system-ui", "sans-serif"],
          serif: ["system-ui", "serif"],
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
  .copy("favicon.ico");

export default site;

