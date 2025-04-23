# NoneBot2

## 介绍

> NoneBot2 是一个现代、跨平台、可扩展的 Python 聊天机器人框架。\
> 仅需完成环境配置及插件安装，就可以正常使用 NoneBot。

## 安装

#### 开源地址

- [NoneBot2](https://github.com/nonebot/nonebot2)
- [NoneBot2_docs](https://nonebot.dev/)
- [插件库](https://nonebot.dev/store/plugins)

---

### 前提

NoneBot2 需要 Python 版本为 3.9 以上

安装 [Python](/build/tool/Python)

### 安装脚手架

确保你已经安装了 Python 3.9 及以上版本，然后在命令行中执行以下命令：

1. 安装 pipx

```sh
python -m pip install --user pipx
python -m pipx ensurepath
```

2. 安装 NoneBot2

```sh
pipx install nb-cli
```

### QQ

1. 三选一
   > 人机合一推荐`LLOneBot`\
   > 只挂机器人推荐`Napcat`

| 项目地址                                                      | 平台 | 核心作者  | 文档                                                |
| ------------------------------------------------------------- | ---- | --------- | --------------------------------------------------- |
| [LLOneBot](https://github.com/LLOneBot/LLOneBot)              | NTQQ | linyuchen | [文档](https://llonebot.github.io/zh-CN/)           |
| [Napcat](https://github.com/NapNeko/NapCatQQ)                 | NTQQ | NapNeko   | [文档](https://napneko.github.io/)                  |
| [Lagrange.Core](https://github.com/LagrangeDev/Lagrange.Core) |      | linyuchen | [文档](https://lagrangedev.github.io/Lagrange.Doc/) |

2. 8080 是默认端口

- 反向 ws 地址：`ws://127.0.0.1:8080/onebot/v11/ws`

## 创建项目

- 根据需求创建

```sh
nb create
```

## 运行项目

```sh
nb run
```
