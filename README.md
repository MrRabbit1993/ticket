## 目录说明:

### config 和 build

webpack 的配置 (一般不改).若需要修改代理，只需要变动 config/index

### static

静态资源

### src

> 源码存放的地方

#### assets

需要编译的静态资源文件

#### components

存放公共组件的地方

#### router

应用的路由入口

#### pages

业务组件存放的地方

#### redux

状态管理

## 快速启动

启动项目

```shell
npm run start
```

## 打包构建

构建项目

```shell
npm run build
```

不过一般都是采取 Jenkins 自动构建
