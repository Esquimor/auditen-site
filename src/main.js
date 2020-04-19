// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",
  });

  // Add an external Javascript before the closing </body> tag
  head.script.push({
    src: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.js",
    body: true,
  });
}
