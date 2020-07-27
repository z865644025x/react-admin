import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// 页面不刷新 - 可引用的库
// import { Provider, KeepAlive } from "react-keep-alive";
import { routerConfig } from "./config/routerConfig";
import { LayoutBox } from "./components/Layout";

import { Login } from "./components/Login"

interface RouteInterFace {
  path: string,
  component: any,
  name: string,
  children?: any,
  redirect?:any
}

/**
 * 根据路由配置渲染不同的路由组件
 * @param router 路由component
 * @param index routerConfig的index
 */
const PrivateRouter = (router: RouteInterFace) => {
  if(router.children){
    return <Switch  key={router.name}>
    <Route key={router.path} path={router.path}>
      <router.component>
        {
          router.children.map((item:RouteInterFace)=>{
            return PrivateRouter(item)
          })
        }
      </router.component>
    </Route>
  </Switch> 
  }
  else{
    return <Route
      key={router.name}
      path={router.path}
      exact
      render={props => <router.component {...props} />}
    />
  }
  
  
  
  // 渲染不刷新的页面
  // if (router.name === 'routerdemo') {
  //   return (
  //     <Route
  //       key={router.name}
  //       path={router.path}
  //       exact
  //       render={props => <KeepAlive name={router.name}><router.component {...props} /></KeepAlive>}
  //     />
  //   )
  // } else {
  //   return (
  //     <Route
  //       key={router.name}
  //       path={router.path}
  //       exact
  //       render={props => <router.component {...props} />}
  //     />
  //   )
  // }
}

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LayoutBox>
          <Route path="/auth" exact key="auth">
            <Login />
          </Route>
          {
            routerConfig.map((item: RouteInterFace) => {
              return PrivateRouter(item)
            })
          }
        </LayoutBox>
      </Switch>
    </BrowserRouter>
  )
}

export default App;