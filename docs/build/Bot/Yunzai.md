# Yunzai

## 介绍

> Yunzai-Bot 是一款 `米哈游`的游戏机器人。\
> 可以查询米游社的数据

## 安装

#### 开源地址

- [Miao-Yunzai](https://gitee.com/yoimiya-kokomi/Miao-Yunzai)
- [TRSS-Yunzai](https://gitee.com/TimeRainStarSky/Yunzai)
- [插件库](https://gitee.com/yhArcadia/Yunzai-Bot-plugins-index)

---

### Linux

::: code-group

```sh [一键]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/Y)
```

:::

### Windows

所需软件 [Git](https://git-scm.com/downloads/win) [Node.js](https://nodejs.cn/download/) [Redis](https://github.com/tporadowski/redis/releases)
::: code-group

```sh [Miao-Yunzai 多插件]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/Yunzai/M)
```

```sh [TRSS-Yunzai 多插件]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/Yunzai/T)
```

```sh [Miao-Yunzai 少插件]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/Yunzai/ML)
```

```sh [TRSS-Yunzai 少插件]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/Yunzai/TL)
```

:::

### Sign

- 自行跳转至 [Qsign.icu](https://qsign.icu/) 观看

## 运行

::: code-group

```sh [保护]
pnpm start
pnpm pm2 save
pnpm pm2 startup
```

```sh [日志]
pnpm log
```

```sh [启动]
pnpm start
```

```sh [重启]
pnpm restart
```

```sh [停止]
pnpm stop
```

:::
