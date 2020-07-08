import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routerConfig } from "./config/routerConfig";

interface RouteInterFace {
  path: string,
  component: any
}

/**
 * 根据路由配置渲染不同的路由组件
 * @param router 路由component
 * @param index routerConfig的index
 */
const PrivateRouter = (router: RouteInterFace, index: number) => {
  return (
    <Route
      key={index}
      path={router.path}
      exact
      render={props => <router.component {...props} />}
    />
  )
}

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routerConfig.map((item: RouteInterFace, index: number) => {
            return PrivateRouter(item, index)
          })
        }
      </Switch>
    </BrowserRouter>
  )
}

export default App;