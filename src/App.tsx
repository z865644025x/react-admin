import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// 页面不刷新 - 可引用的库
import { Provider, KeepAlive } from "react-keep-alive";
import { routerConfig } from "./config/routerConfig";
import Item from 'antd/lib/list/Item';

interface RouteInterFace {
  path: string,
  component: any,
  name: string
}

/**
 * 根据路由配置渲染不同的路由组件
 * @param router 路由component
 * @param index routerConfig的index
 */
const PrivateRouter = (router: RouteInterFace) => {
  if (router.name === 'routerdemo') {
    return (
      <Route
        key={router.name}
        path={router.path}
        exact
        render={props => <KeepAlive name={router.name}><router.component {...props} /></KeepAlive>}
      />
    )
  } else {
    return (
      <Route
        key={router.name}
        path={router.path}
        exact
        render={props => <router.component {...props} />}
      />
    )
  }

}

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          {
            routerConfig.map((item: RouteInterFace) => {
              return PrivateRouter(item)
            })
          }
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default App;