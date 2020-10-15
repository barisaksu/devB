// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: "Gridsome",
  pathPrefix: "devb",
  outputDir: "public",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/posts/**/*.md",
        typeName: "Post",
        route: "/:slug",
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:slug",
            create: true,
          },
        },
      },
    },
  ],
  templates: {
    Post: "/:slug",
  },
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
  },
};
