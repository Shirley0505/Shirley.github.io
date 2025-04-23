const sidebar = {
  "/help": [
    {
      text: "索引页",
      items: [
        { text: "使用帮助", link: "/help/help" },
        { text: "搭建教程", link: "/build/build" }
      ]
    },
    {
      text: "功能",
      items: [
        {
          text: "🎮游戏查询",
          link: "/help/Game/main/",
          items: [
            { text: "原神", link: "/help/Game/gs" },
            { text: "星铁", link: "/help/Game/sr" },
            { text: "绝区零", link: "/help/Game/zzz" },
            { text: "鸣潮", link: "/help/Game/mc" },
            { text: "方舟", link: "/help/Game/ak" }
          ]
        },
        {
          text: "🎲群聊娱乐",
          link: "/help/Group/main/",
          items: [
            { text: "修仙", link: "/help/Group/xiuxian" },
            { text: "土块", link: "/help/Group/土块" },
            { text: "可爱", link: "/help/Group/可爱" },
            { text: "绘画", link: "/help/Group/绘画" },
            { text: "GPT", link: "/help/Group/GPT" }
          ]
        }
      ]
    },
    { text: "关于", link: "/other/main/" },
    { text: "投喂", link: "/other/投喂/" },
    { text: "联系", link: "/other/联系/" }
  ],
  "/build": [
    {
      text: "索引页",
      items: [
        { text: "使用帮助", link: "/help/help" },
        { text: "搭建教程", link: "/build/build" }
      ]
    },
    {
      text: "教程",
      items: [
        {
          text: "🤖部署",
          link: "/build/Bot/main/",
          items: [
            { text: "Yunzai", link: "/build/Bot/Yunzai/" },
            { text: "zhenxun", link: "/build/Bot/zhenxun/" },
            { text: "NoneBot2", link: "/build/Bot/NoneBot2/" }
          ]
        },
        {
          text: "🛠️部署",
          link: "/build/tool/main/",
          items: [
            { text: "Python", link: "/build/tool/Python/" },
            { text: "Docker", link: "/build/tool/Docker/" },
            { text: "哪吒监控", link: "/build/tool/nezha/" }
          ]
        }
      ]
    },
    { text: "关于", link: "/other/main/" },
    { text: "投喂", link: "/other/投喂/" },
    { text: "联系", link: "/other/联系/" }
  ],
  "/": [
    {
      text: "索引页",
      items: [
        { text: "使用帮助", link: "/help/help" },
        { text: "搭建教程", link: "/build/build" }
      ]
    },
    { text: "关于", link: "/other/main/" },
    { text: "投喂", link: "/other/投喂/" },
    { text: "联系", link: "/other/联系/" }
  ]
}
export default sidebar
