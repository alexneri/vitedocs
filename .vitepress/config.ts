import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Help Docs with Vitepress",
  description: "A sample Documentation deployment on Vercel using Vitepress.",
  base: '/',
  srcDir: './partials',
  outDir: './.vitepress/publish',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Alex Neri | Crossebell | Crosse_'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexneri/vitedocs' },
      { icon: 'x', link: 'https://linktr.ee/crosse' }
    ]
  }
})
