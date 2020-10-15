// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "./assets/css/global.css";
// import "prismjs/themes/prism.css";
import "./assets/css/prism.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.bodyAttrs = { class: "overflow-y-scroll" };
}
