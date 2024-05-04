import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/vccyb',
  mail: 'mailto:13170906656@163.com',
  instagram: 'https://www.instagram.com/ancap.tattoo/',
  medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: '工作经历',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: '通信工程',
    institution: '重庆邮电大学',
    link: 'https://www.cqupt.edu.cn/',
    date: '2019 - 2022',
  },
  {
    title: '通信工程',
    institution: '景德镇陶瓷大学',
    link: 'https://www.jci.edu.cn/',
    date: '2015 - 2019',
  },
]

export const EXPERIENCE = [
  {
    company: '华为',
    location: '深圳，中国',
    position: '前端工程师',
    start: '2022',
    link: '#',
    end: 'Current',
    tasks: [
      '前端基建相关，利用husky、lint-staged、prettier、eslint、stylelint、commitlint、vite等工具，搭建前端工程化环境',
      '物料组件化仓库搭建与设计，使用脚手架、rollup、vite等工具，搭建物料组件化仓库',
    ],
  },
]
