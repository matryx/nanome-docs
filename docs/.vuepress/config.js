const fs = require("fs");
const path = require("path");

var dirpath = "./docs";

// generate sidenav order by update time
// var sb = fs
//   .readdirSync(dirpath)
//   .filter(f => {
//     return f.match(/\.(md)$/i) && f !== "README.md";
//   })
//   .map(f => {
//     return {
//       path: "/" + f,
//       mtime: fs.statSync(dirpath + "/" + f).mtime
//     };
//   })
//   .sort((a, b) => a.mtime - b.mtime)
//   .map(f => f.path);

module.exports = {
  description: "Documentation site for Nanome software.",
  themeConfig: {
    home:true,
    title: "Documentation",
    docsDir: "docs",
    logo: '../assets//features-page/nanome-logo.png',
    // repo: 'toshilow/netlify-cms-vuepress',
    sidebar: [
      '/',
      '/gettingStarted',
      '/features',
      '/Plugins',
      '/faq',
      '/troubleshooting',
      '/contact'
    ],
    lastUpdated: "Last Updated",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Nanome.ai', link: 'https://nanome.ai/' },
      { text: 'Download', link: 'https://nanome.ai/setup' },
    ],
    ga: 'UA-79179574-15'
  }
};

