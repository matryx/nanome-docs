module.exports = {
  title: 'Nanome Docs',
  description: 'Documentation site for Nanome software.',
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  themeConfig: {
    home: true,
    title: 'Documentation',
    docsDir: 'docs',
    logo: '../assets/features-page/nanome-logo.png',
    sidebar: [
      '/',
      {
        title: 'Nanome Navigation',
        path: '/navigation/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/navigation/lobby',
          '/navigation/environment',
          '/navigation/menus',
          '/navigation/wristmenu',
          '/navigation/actionmenu',
          '/navigation/toolsmenu',
          '/navigation/2dui'
        ]
      },
      {
        title: 'Nanome Plugins',
        path: '/plugins/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/plugins/overview',
          '/plugins/nanomeplugins',
          '/plugins/vault',
          '/plugins/minimization',
          '/plugins/rmsd',
          '/plugins/realtimescoring',
          '/plugins/docking',
          '/plugins/moleculardynamics',
          '/plugins/createyourown'
        ]
      },
      {
        title: 'Nanome Macros',
        path: '/macros/',
        collapsable: true,
        sidebarDepth: 1,
        children: ['/macros/overview']
      },
      {
        title: 'How To (Coming Soon...)',
        path: '/howto/',
        collapsable: true,
        sidebarDepth: 1,
        children: ['/howto/comingsoon']
      },
      {
        title: 'home.nanome.ai',
        path: '/home.nanome.ai/',
        collapsable: true,
        sidebarDepth: 1,
        children: ['/home.nanome.ai/accounttiers', '/home.nanome.ai/invoice']
      },
      {
        title: 'Help',
        path: '/help/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          // '/help/howto',
          '/help/troubleshooting',
          '/help/hardwarerequirements',
          '/help/faq',
          '/help/contact'
        ]
      }
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Nanome.ai', link: 'https://nanome.ai/' },
      { text: 'Download', link: 'https://home.nanome.ai/setup' }
    ],
    ga: 'UA-79179574-15'
  }
}
