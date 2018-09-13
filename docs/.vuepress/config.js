module.exports = {
  title: 'Nanome Core',
  description: 'Just playing around',
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Coding",
        collapsable: false,
        children: [
          "/coding/process/",
          "/coding/process/pullrequest",
        ],
      }
    ],
    nav: [
      { text: 'Home', link: '/' },
      /*
      { text: 'Backlog', link: 'https://nanome.atlassian.net/secure/RapidBoard.jspa?projectKey=NP&rapidView=1&view=planning' },
      { text: 'Pull Requests', link: 'https://bitbucket.org/nanovr_dev/nanome-core/pull-requests/' },
      { text: 'Contribute', link: 'https://bitbucket.org/nanovr_dev/nanome-core-doc/src/master/' },
      */
    ],
  },
}
