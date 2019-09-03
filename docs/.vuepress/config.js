const path = require("path");
module.exports = {
  title: "vue-cli & vuepress",
  description: "",
  base: "/",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  host: "0.0.0.0",
  port: "8082",
  dest: ".vuepress/dist",
  serviceWorker: false,
  themeConfig: {
    nav: [],
    sidebar: "auto",
    lastUpdated: "上次更新"
  },
  markdown: {}
};
