const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'D4Data',
  tagline: 'Prenez le contrôle de vos données personnelles',
  url: 'https://docs.d4data.org',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'd4data-official', // Usually your GitHub org/user name.
  projectName: 'd4data-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'D4Data',
      logo: {
        alt: 'D4Data Logo',
        src: 'https://d4data.org/images/d4data_128.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'user-docs/guides/index',
          position: 'left',
          label: 'Documentation utilisateur',
        },
        {
          type: 'doc',
          docId: 'technical-docs/index',
          position: 'left',
          label: 'Documentation technique',
        },
        {
          href: 'https://github.com/d4data-official',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              to: '#',
              label: 'Aidez-nous à traduire',
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'User docs',
              to: '/docs/user-docs/index',
            },
            {
              label: 'Technical docs',
              to: '/docs/technical-docs/index',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'Twitter',
              href: '#',
            },
            {
              label: 'Instagram',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/d4data-official',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://d4data.org">D4Data</a>. Built with Docusaurus.`,
    }, 
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            '#',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
