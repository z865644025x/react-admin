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
  1. redux作为前端状态管理的实践很好地解决了组件之间状态通信的问题
7. 使用 rematch 作为react-redux的module管理配置器
  1. rematch是一个redux的封装组件
  2. rematch使用thunks作为redux的中间件
  3. rematch作为redux的一种实践，比较有效的简化了redux的原生API的操作，同时也较为良好的继承了hooks的实践方式
  4. 没有使用dva的原因是因为dva的封装组件较多，而在这次项目搭建的过程中，只希望使用更小类型的插件使项目更简洁而不是繁重
  5. 具体的使用还要再后续的开发和使用中更熟悉和简化


