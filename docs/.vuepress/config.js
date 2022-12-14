import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { gitPlugin } from '@vuepress/plugin-git'

export default {
  title: "MeloBot 文档", // 设置网站标题
  description: "基于 go-cqhttp，python 实现的 qbot",
  base: "/MeloBot/", // 设置站点根路径
  dest: "./ROOT", // 设置输出目录
  port: 8086,
  head: [
    ["link", { rel: "icon", href: "/images/icon.png" }],
    ["script", {
      async: "", 
      defer: "", 
      "data-website-id": "4c40e2c1-40b9-4cda-8236-a679d37e3a84",
      src: "https://stats.glowmem.com/umami.js"
    }]
  ],
  plugins: [
    backToTopPlugin(),
    gitPlugin()
  ],
  theme: defaultTheme({
    smoothScroll: true,
    search: true,
    searchMaxSuggestions: 10,
    // 添加导航栏
    navbar: [
      { text: "主页", link: "/" },
      {
        text: "引导",
        children: [
          { text: "简介", link: "/guide/intro/" },
          { text: "机制简述", link: "/guide/mechanism/" },
          { text: "基本使用", link: "/guide/basic-usage/" },
        ],
      },
      {
        text: "配置",
        children: [
          { text: "bot 配置", link: "/config/botConfig/" },
          { text: "关键词应答配置", link: "/config/keyAnsConfig/" },
        ],
      },
      { text: "进阶", link: "/advanced/" },
      { text: "API", link: "/api/cmd" },
      { text: "Github", link: "https://github.com/AiCorein/Qbot-MeloBot" },
    ],
    sidebar: {
      "/api/": [
        "cmd", "action", "global", "exceptions"
      ]
    },
    lastUpdated: "上次更新",
  })
}
