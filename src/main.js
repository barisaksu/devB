// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "./assets/css/global.css";
import "./assets/css/theme.scss";
// import "prismjs/themes/prism.css";
import "./assets/css/prism.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.bodyAttrs = { class: "overflow-y-scroll" };

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Raleway&display=swap",
  });

  // head.link.push({
  //   rel: "stylesheet",
  //   href:
  //     "https://github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css",
  // });
}
