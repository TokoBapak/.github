import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TokoBapak Documentation",
  titleTemplate: ":title | TokoBapak",
  description: "Guide for developing TokoBapak",
  lang: "id-ID",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'TokoBapak',
        link: "/",
        items: [
          { text: 'Tentang TokoBapak', link: '/about' },
          { text: 'Panduan Kontribusi', link: '/contributing' }
        ]
      },
      {
        text: 'Business',
        items: [
          {
            text: "Business Requirements",
            link: "/business/requirements"
          }
        ]
      },
      {
        text: 'Application',
        items: [
          {
            text: "Architecture",
            link: "/application/architecture"
          },
          {
            text: "New Backend Service",
            link: "/application/new-backend-service"
          }
        ]
      },
      {
        text: "Study",
        link: "/study/",
        items: [
          {
            text: "Saga Pattern",
            link: "/study/saga"
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TokoBapak' }
    ],
    editLink: {
      pattern: 'https://github.com/TokoBapak/.github/edit/master/docs/:path'
    },
    search: {
      provider: 'local'
    },
  },
  lastUpdated: true,
})
