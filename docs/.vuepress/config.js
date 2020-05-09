const { description } = require('../../package');
const { clientID, clientSecret } = require('../../gitalkconfig');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'vuepress-plugin-code-box',
  base: '/vuepress-plugin-code-box/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    repo: 'https://github.com/xxholly32/vuepress-plugin-code-box.git',
    editLinks: false,
    lastUpdated: false,
    // defaultTheme: { dark: [18, 6] },
    defaultTheme: 'light',
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [''],
        },
      ],
    },
  },
  // When using `light theme` or `dark theme`, you need to add a postcss plugins to your config.js
  postcss: {
    plugins: [require('css-prefers-color-scheme/postcss'), require('autoprefixer')],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    require('../../lib'),
    '@vuepress/plugin-back-to-top',
    "@vuepress/plugin-medium-zoom"
    // [
    //   'gitalk-maker',
    //   {
    //     gitalkConfig: {
    //       clientID,
    //       clientSecret,
    //       repo: 'vuepress-plugin-code-box',
    //       owner: 'xxholly32',
    //       admin: ['xxholly32'],
    //       // id: location.pathname, // 无法配置默认用 location.pathname
    //       distractionFreeMode: false, // Facebook-like distraction free mode
    //     },
    //   },
    // ],
  ],
};
