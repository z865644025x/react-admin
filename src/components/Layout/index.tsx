import React, { Fragment } from 'react'
import { Layout } from 'antd'

import { Menubox } from "../Menubox"
import { Headerbox } from "../Header"

const { Footer, Sider, Content } = Layout;


export const LayoutBox: React.FC = (props:any) => {
  return (
    <Fragment>
      {
        !window.location.pathname.includes('auth') ? 
        <Layout style={{ height: "100vh" }}>
          <Sider>
            <Menubox />
          </Sider>
          <Layout>
            <Headerbox />
            <Content style={{padding:20}}>
              {props.children}
            </Content>
            <Footer style={{textAlign:"center"}}>Made with Wang</Footer>
          </Layout>
        </Layout> : <Fragment>
        {props.children}
        </Fragment>
      }
    </Fragment>
  )
}