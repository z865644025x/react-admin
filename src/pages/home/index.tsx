import React from 'react';
import { Layout } from 'antd';
import { Menubox } from "../../components/Menubox"

const { Header, Footer, Sider, Content } = Layout;

export const Home: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider>
        <Menubox />
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}