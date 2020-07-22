import React from 'react';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
// 页面不刷新 - 可引用的库
import { Provider, KeepAlive } from "react-keep-alive";
import { routerConfig } from "./config/routerConfig";
import { Layout,Button } from 'antd';
import { Menubox } from "./components/Menubox"
import { Headerbox } from "./components/Header"

const { Header, Footer, Sider, Content } = Layout;

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
    console.log(router);
    return <Switch  key={router.name}>
    <Redirect exact from={router.path} to={router.redirect} />
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
      component={router.component}
      // render={props => <router.component {...props} />}
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
      <Provider>
        <Switch>
          {
            !window.location.pathname.includes('auth') ? 
            <Layout style={{ height: "100vh" }}>
              <Sider>
                <Menubox />
              </Sider>
              <Layout> 
                <Headerbox />
                <Content style={{padding:20}}>
                  {
                    routerConfig.map((item: RouteInterFace) => {
                      return PrivateRouter(item)
                    })
                  }
                </Content>
                <Footer style={{textAlign:"center"}}>Made with Wang</Footer>
              </Layout>
            </Layout> : 
            <Route path="/auth">
              <Button onClick={() => window.location.href="/"}>登录</Button>
            </Route>
          }
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default App;