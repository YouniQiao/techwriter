import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import { themes } from 'prism-react-renderer'
import social from './data/social'
import type { GiscusConfig } from './src/components/Comment'

const beian = '闽ICP备2020017848号-3'
const beian1 = '闽公网安备35021102000847号'

const config: Config = {
  title: '技术写作',
  url: 'https://techwriter.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'YouniQiao',
  projectName: 'blog',
  customFields: {
    bio: '技术写作者的修养',
    description:
      '是一个技术写作者的个人网站，主要分享技术写作的理念及经验，该网站基于 React 驱动的静态网站生成器 Docusaurus 构建。',
  },
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    image: 'img/og.png',
    metadata: [
      {
        name: 'author',
        content: 'YouniQiao',
      },
      {
        name: 'keywords',
        content: 'Technical Writing',
      },
      {
        name: 'keywords',
        content: '技术写作, 技术传播, 开发者文档, 风格手册, 写作指导',
      },
    ],
    docs: {
      sidebar: {
        hideable: false,
      },
    },
    navbar: {
      logo: {
        alt: '技术写作',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      hideOnScroll: true,
      items: [
        { label: '主页', position: 'left', to: '/' },
        { label: '博客', position: 'left', to: 'blog' },
        { label: '文档', position: 'left', to: 'docs/docusaurus-guides' },
        {
          label: '资源',
          position: 'left',
          items: [
            { label: '技术写作组织', to: 'project' },
            { label: '技术写作者', to: 'friends' },
          ],
        },
        { label: '关于', position: 'left', to: 'about' },
        //{
        //  label: '更多',
        //  position: 'left',
        //  items: [
        //    { label: '归档', to: 'blog/archive' },
        //    { label: '主题魔改', to: 'docs/docusaurus-guides' },
        //  ],
        //},
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            { label: '归档', to: 'blog/archive' },
            { label: '实战项目', to: 'project' },
            { label: '前端示例', to: 'https://example.kuizuo.me' },
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: social.github.href },
            { label: 'Twitter', href: social.x.href },
            { label: '掘金', href: social.juejin.href },
            { label: 'Discord', href: social.discord.href },
          ],
        },
        {
          title: '网站',
          items: [
            { label: 'js反混淆', to: 'https://js-deobfuscator.kuizuo.me' },
            { label: 'cyberChef', to: 'https://gchq.github.io/CyberChef' },
            { label: 'api服务', to: 'https://api.kuizuo.me' },
            { label: '便民服务', to: 'https://service.kuizuo.me' },
            { label: '站点监控', to: 'https://uptime.kuizuo.me' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '友链', position: 'right', to: 'friends' },
            {
              html: `
                <a href="https://docusaurus.io" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                </a>
                `,
            },
          ],
        },
      ],
      copyright: `
        <p>Copyright © 2025 - ${new Date().getFullYear()}. | Built with Docusaurus.</p>
        `,
    },
    algolia: {
      appId: 'GV6YN1ODMO',
      apiKey: '50303937b0e4630bec4a20a14e3b7872',
      indexName: 'kuizuo',
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: ['bash', 'json', 'java', 'python', 'php', 'graphql', 'rust', 'toml', 'protobuf', 'diff'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      repo: 'YouniQiao/techwriter',
      repoId: 'R_kgDOPkbS5A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOPkbS5M4CvtsJ',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css', './src/css/tweet-theme.css'],
        },
        sitemap: {
          priority: 0.5,
        },
        //gtag: {
        //  trackingID: 'G-S4SD5NXWXF',
        //  anonymizeIP: true,
        //},
        debug: process.env.NODE_ENV === 'development',
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    '@docusaurus/plugin-ideal-image',
    // ['docusaurus-plugin-baidu-tongji', { token: 'c9a3849aa75f9c4a4e65f846cd1a5155' }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: process.env.NODE_ENV === 'development',
        mode: 'auto',
      },
    ],
    [
      './src/plugin/plugin-content-blog', // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/YouniQiao/techwriter/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '技术写作：既是工作也是事业。',
        blogSidebarCount: 10,
        blogSidebarTitle: '博文',
        postsPerPage: 12,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: '技术写作',
          description: '既是工作也是事业。',
          copyright: `Copyright © ${new Date().getFullYear()}  Built with Docusaurus.`,
        },
      },
    ],
    async function tailwindcssPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    async function injectMotto() {
      return {
        name: 'docusaurus-motto',
        injectHtmlTags() {
          return {
            headTags: [
              {
                tagName: 'script',
                innerHTML: `
    (${function () {
      //console.log(
      //  `%c Kz Blog %c https://github.com/kuizuo/blog`,
      //  'color: #fff; margin: 1em 0; padding: 5px 0; background: #12affa;',
      //  'margin: 1em 0; padding: 5px 0; background: #efefef;',
      //)

      const motto = `
This Webisite Powered By Kz Blog.
Written by Docusaurus, Coding with Love.
--------
Love what you do and do what you love.
`

      if (document.firstChild?.nodeType !== Node.COMMENT_NODE) {
        document.prepend(document.createComment(motto))
      }
    }.toString()})();`,
              },
            ],
          }
        },
      }
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '技术写作理念及技能传播',
      },
    },
  ],
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Medium.min.css',
    'https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Semibold.min.css',
  ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  onBrokenLinks: 'warn',
  future: {
    v4: true,
    experimental_faster: true,
  },
}

export default config
