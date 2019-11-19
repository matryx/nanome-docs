module.exports = {
  description: "Documentation site for Nanome software.",
  themeConfig: {
    home: true,
    title: "Documentation",
    docsDir: "docs",
    logo: "../assets/features-page/nanome-logo.png",
    sidebar: [
      "/",
      {
        title: 'Nanome Navigation',   // required
        path: '/navigation/',  // optional, which should be a absolute path.
        collapsable: true,     // optional, defaults to true
        sidebarDepth: 1,       // optional, defaults to 1
        children: [
          '/navigation/lobby',
          '/navigation/environment',
          '/navigation/menus',
          '/navigation/wristmenu',
          '/navigation/contextmenu',
          '/navigation/toolsmenu',
          '/navigation/2dui',
        ]
      },
      {
        title: 'Nanome Plugins',   // required
        path: '/plugins/',  // optional, which should be a absolute path.
        collapsable: true,     // optional, defaults to true
        sidebarDepth: 1,       // optional, defaults to 1
        children: [
          '/plugins/overview',
          '/plugins/nanomeplugins',
          '/plugins/webloader',
          '/plugins/minimization',
          '/plugins/rmsd',
          '/plugins/realtimescoring',
          '/plugins/docking',
          '/plugins/moleculardynamics',
          '/plugins/createyourown'
        ]
      },
      {
        title: 'Nanome Macros',   // required
        path: '/macros/',         // optional, which should be a absolute path.
        collapsable: true,        // optional, defaults to true
        sidebarDepth: 1,          // optional, defaults to 1
        children: [
          '/macros/overview'
        ]
      },
      {
        title: 'How To (coming soon...)',   // required
        path: '/howto/',  // optional, which should be a absolute path.
        collapsable: true,     // optional, defaults to true
        sidebarDepth: 1,       // optional, defaults to 1
        children: [
          '/howto/comingsoon'
        ]
      },
      {
        title: 'home.nanome.ai',   // required
        path: '/home.nanome.ai/',  // optional, which should be a absolute path.
        collapsable: true,     // optional, defaults to true
        sidebarDepth: 1,       // optional, defaults to 1
        children: [
          '/home.nanome.ai/overview',
          "/home.nanome.ai/accounttiers",
          '/home.nanome.ai/invoice'
        ]
      },
      {
        title: 'Help',   // required
        path: '/help/',  // optional, which should be a absolute path.
        collapsable: true,     // optional, defaults to true
        sidebarDepth: 1,       // optional, defaults to 1
        children: [
          '/help/howto',
          '/help/troubleshooting',
          '/help/hardwarerequirements',
          '/help/faq',
          '/help/contact'
        ]
      }
    ],
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      { text: "Nanome.ai", link: "https://nanome.ai/" },
      { text: "Download", link: "https://home.nanome.ai/setup" }
    ],
    ga: "UA-79179574-15"
  }
}
