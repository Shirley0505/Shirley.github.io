import { defineConfig } from "vitepress"
import nav from "./script/nav"
import sidebar from "./script/sidebar"
import { DefaultTheme } from "vitepress/theme"

export default defineConfig({
  base: "/",
  vite: {
    ssr: {
      noExternal: ["@nolebase/vitepress-plugin-enhanced-readabilities", "@nolebase/ui"]
    }
  },
  lang: "zh-CN",
  title: "ZeroTwo",
  description: "ZeroTwo",
  themeConfig: {
    logo: "/logo.png",
    nav: nav as DefaultTheme.NavItem[],
    sidebar: sidebar,
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档"
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换"
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [{ icon: "github", link: "https://github.com/Lovely-02" }],
    lastUpdatedText: "最后编辑于",
    outline: [2, 3],
    outlineTitle: "本页大纲",
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    sidebarMenuLabel: "目录",
    returnToTopLabel: "返回顶部",
    footer: {
      copyright: '版权所有 ©  2003-2024 <a href="http://521002.xyz">ZeroTwo</a>'
    }
  }
})
