module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuigi',
      description: 'Documentation for the Vuigi component library plugin'
    }
  },
  themeConfig: {
    repoLabel: 'Contribute!',
    repo: '',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          {
            text: 'Getting Started',
            link: '/guide'
          },
          {
            text: 'Components',
            link: '/components/'
          },
          {
            text: 'GitHub',
            link: ''
          }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: ['GBtn']
            }
          ]
        }
      }
    }
  }
}