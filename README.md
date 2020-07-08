### ADMIN react 后台项目前端架构

#### 项目搭建

1. 前端使用 create-react-app 进行项目基础搭建
2. 使用 env-cmd 插件进行前端环境变量配置
3. 使用 react-app-rewired 进行 webpack 配置，在不使用 eject 的同时进行 webpack 的配置
4. 使用 antd 作为项目的 UI 组件
5. 配置react-router进行前端路由配置
  1. 通过配置 `/config/routerConfig.js` 路由文件进行前端路由配置
  2. 在App.js中通过引入routerConfig执行方法进行前端路由的控制
6. 使用react-redux作为前端状态管理库进行前端页面的状态管理
  1. redux
7. 使用 *** 作为react-redux的module管理配置器

