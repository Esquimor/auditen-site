// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Auditen Courtage",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "page/**/*.md",
        typeName: "Post",
        route: "/:title/",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Blog",
        route: "/blog/:title/",
      },
    },
  ],
};
