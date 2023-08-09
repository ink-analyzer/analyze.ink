// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ink! Analyzer',
  tagline:
    'A collection of modular and reusable libraries and tools for semantic analysis of ink! smart contract code.',
  favicon: 'img/logo.svg',

  // Production URL.
  url: 'https://analyze.ink',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'ink-analyzer',
  projectName: 'analyze.ink',
  deploymentBranch: 'master',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ink-analyzer/analyze.ink/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/ink-analyzer.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: 'ink! Analyzer',
        logo: {
          alt: 'ink! Analyzer',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },

          {
            href: 'https://github.com/ink-analyzer/',
            label: 'Roadmap',
            position: 'right',
          },
          {
            href: 'https://github.com/ink-analyzer/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Semantic Analyzer',
                href: 'https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer',
              },
              {
                label: 'Language Server',
                href: 'https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server',
              },
              {
                label: 'Visual Studio Code Extension',
                href: 'https://github.com/ink-analyzer/ink-vscode',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ink-analyzer/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ink-analyzer',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/davidsemakula',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Roadmap',
                href: 'https://github.com/ink-analyzer/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://davidsemakula.com" target="_blank" class="footer__link-item">David Semakula</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
};

module.exports = config;
