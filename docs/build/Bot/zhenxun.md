# 绪山真寻 Bot

## 介绍

> 绪山真寻-Bot 是一款 多功能群聊机器人。\
> 真寻 bot 非常可爱，嗯，这是我要提醒你的。

## 安装

#### 开源地址

- [zhenxun_bot](https://github.com/HibiKier/zhenxun_bot)
- [zhenxun_webui](https://github.com/HibiKier/zhenxun_bot_webui)
- [zhenxun_docs](https://hibikier.github.io/zhenxun_bot)
- [插件库](https://github.com/zhenxun-org/zhenxun_bot_plugins_index)

---

### 前提

真寻 Bot 需要 Python 版本为 3.10 或 3.11

> [!tip]
> Python 3.9 同样也可以使用，但是需要将 pyproject.toml 中的版本改为 3.9

安装 [Python](/build/tool/Python)

### Linux

::: code-group

```sh [一键]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/ZX)
```

:::

### 数据库

<details><summary>Linux</summary>

#### 安装

```sh
sudo apt update
sudo apt install postgresql postgresql-contrib
```

#### 创建

```sh
sudo su - postgres
psql
alter user postgres with password 'zhenxun_bot';
CREATE DATABASE zhenxun_bot OWNER postgres;
```

#### 配置公网连接（可选）

1. 编辑数据库配置文件（路径请已自己的为准）

- 打开数据库配置文件

```sh
vim /etc/postgresql/12/main/postgresql.conf
```

- 找到 `listen_addresses: '*'` 取消前面的`#`注释，使用`:wq`保存退出
  > 建议公网 ip 同时修改 Port
- 打开 pg_hba.conf

```sh
vim /etc/postgresql/12/main/pg_hba.conf
```

- 在最下添加或修改后，使用`:wq`保存退出

```
    # 允许任意用户从任意机器上以密码方式访问数据库
    host    all             all             0.0.0.0/0               md5
```

2. 重启数据库

```sh
sudo systemctl restart postgresql
```

</details>
<details><summary>Windows</summary>

1. 下载

- Postgresql

2. 安装

- 一路 Next
- 输入 postgres 用户的密码，例如: zhenxun_bot
- 一路 Next

3. 配置

   > 1. 找到安装的 pgAdmin，直接启动！
   > 2. 新建连接
   >    左侧栏右键点击`Servers`后选择`Register`，在点击服务器
   > 3. 填写配置
   >    填写`主机名称/地址`，如果是连接远程服务器的话对应的服务器 IP，本地的话可以直接填写`127.0.0.1` > `端口`就是安装时配置的端口，没有修改的话默认`5432` > `密码`就是安装时配置的密码
   > 4. ✨✨ 点击`保存` ✨✨

4. 新建数据库
   > 1. 展开 🐘🐘
   > 2. 右击数据库，选择创建后点击数据库
   > 3. ✨✨ 直接创建！ ✨✨
   > 4. ✨✨ 设置数据库名称后点击`保存` ✨✨

</details>

### QQ

1. 三选一
   > 人机合一推荐`LLOneBot`\
   > 只挂机器人推荐`Napcat`

| 项目地址                                                      | 平台 | 核心作者  | 文档                                                |
| ------------------------------------------------------------- | ---- | --------- | --------------------------------------------------- |
| [LLOneBot](https://github.com/LLOneBot/LLOneBot)              | NTQQ | linyuchen | [文档](https://llonebot.github.io/zh-CN/)           |
| [Napcat](https://github.com/NapNeko/NapCatQQ)                 | NTQQ | NapNeko   | [文档](https://napneko.github.io/)                  |
| [Lagrange.Core](https://github.com/LagrangeDev/Lagrange.Core) |      | linyuchen | [文档](https://lagrangedev.github.io/Lagrange.Doc/) |

2. 8080 是真寻默认端口

- 反向 ws 地址：`ws://127.0.0.1:8080/onebot/v11/ws`

### zhenxun

1. 下载
   ::: code-group

```sh [Github(国外推荐)]
git clone https://github.com/HibiKier/zhenxun_bot.git
```

```sh [ghproxy(国内推荐)]
git clone https://ghproxy.mihomo.me/https://github.com/HibiKier/zhenxun_bot.git
```

::: 2. 依赖包

- 使用 poetry 管理 python 包

```sh
pip3 install poetry
```

- 安装依赖

```sh
poetry install
```

- 进入虚拟环境

```sh
poetry shell
```

## 配置

1. 设置超级用户, 打开`.env.dev` 文件, 在`SUPERUSERS`和`qq`中添加自己的 QQ

```json
SUPERUSERS=["123456789"]
PLATFORM_SUPERUSERS = '
  {
    "qq": ["123456789"],
    "dodo": [],
    "kaiheila": [],
    "discord": []
  }
'
```

2. 设置数据库, 打开`.env.dev` 文件

```sh
# 示例: "postgres://user:password@127.0.0.1:5432/database"
DB_URL = "postgres://用户名:密码@127.0.0.1:端口/数据库名称"
# 如果你是与教程一模一样的命令代码，且数据库也在该服务器上，可以直接复制以下URL
DB_URL = "postgres://postgres:zhenxun_bot@127.0.0.1:5432/zhenxun_bot"
```

3. 基础插件配置

- 文件保存在 `data/config.yaml`，所有真寻相关插件都在使用该配置文件，按需修改

## 启动

```sh
python3 bot.py
# or
python bot.py
```

当你的控制台出现以下日志，说明你已经成功了 🎉🎉

```py
08-14 23:18:44 [INFO] zhenxun | CMD[Web UI] API启动成功
08-14 23:18:44 [INFO] uvicorn | Application startup complete.
08-14 23:18:44 [INFO] uvicorn | Uvicorn running on http://127.0.0.1:8080 (Press CTRL+C to quit)
```
