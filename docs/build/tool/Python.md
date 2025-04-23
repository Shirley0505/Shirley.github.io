# Python

## 安装 [推荐]

::: code-group

```sh [Python3.9]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/Python/Python3.9.sh)
```

```sh [Python3.10]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/Python/Python3.10.sh)
```

```sh [Python3.11]
bash <(curl -L Gitee.com/Lovely-02/Install/raw/master/Python/Python3.11.sh)
```

:::

## 安装

### 更新包

```sh
#刷新软件包目录
sudo apt update
# 列出当前可用的更新
sudo apt list --upgradable
# 如上一步提示有可以更新的项目，则执行更新
sudo apt  upgrade -y
# 安装 GCC 编译器
sudo apt install gcc -y
# 刷新软件包目录
sudo apt update
```

### 安装依赖

```sh
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libbz2-dev liblzma-dev sqlite3 libsqlite3-dev tk-dev uuid-dev libgdbm-compat-dev -y

```

### 下载编译

::: code-group

```sh [Python3.9]
#下载
wget www.python.org/ftp/python/3.9.16/Python-3.9.16.tgz
#解压
tar -xf Python-3.9.16.tgz
# 进入该目录
cd Python-3.9.16/
# 检查依赖与配置编译
sudo ./configure --enable-optimizations --with-lto --enable-shared
# 编译
sudo make -j 2
#安装
make altinstall
#链接
sudo ln -s /usr/local/lib/libpython3.9.so.1.0 /usr/lib/

```

```sh [Python3.10]
#下载
wget www.python.org/ftp/python/3.10.14/Python-3.10.14.tgz
#解压
tar -xf Python-3.10.14.tgz
# 进入该目录
cd Python-3.10.14/
# 检查依赖与配置编译
sudo ./configure --enable-optimizations --with-lto --enable-shared
# 编译
sudo make -j 2
#安装
make altinstall
#链接
sudo ln -s /usr/local/lib/libpython3.10.so.1.0 /usr/lib/
```

```sh [Python3.11]
#下载
wget www.python.org/ftp/python/3.11.9/Python-3.11.9.tgz
#解压
tar -xf Python-3.11.9.tgz
# 进入该目录
cd Python-3.11.9/
# 检查依赖与配置编译
sudo ./configure --enable-optimizations --with-lto --enable-shared
# 编译
sudo make -j 2
#安装
make altinstall
#链接
sudo ln -s /usr/local/lib/libpython3.11.so.1.0 /usr/lib/
```

:::

## 验证

::: code-group

```sh [Python3.9]
python3.9 --version
pip3.9 --version
```

```sh [Python3.10]
python3.10 --version
pip3.10 --version
```

```sh [Python3.11]
python3.11 --version
pip3.11 --version
```

:::
