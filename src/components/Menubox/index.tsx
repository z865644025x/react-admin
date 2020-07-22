import React from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { routerConfig } from "../../config/routerConfig";

const { SubMenu } = Menu;

interface routeType {
  path: string,
  component: any,
  name: string,
  children?: []
}

const handleColickMenu = (item: any) => {
  console.log(item);
}

const showMenuItem = (router?: any) => {
  return router?.map((item: routeType, index: number) => {
    if (item.children) {
      return <SubMenu key={item.name} title={item.name}>
        {showMenuItem(item.children)}
      </SubMenu>
    } else {
      return <Menu.Item key={item.name} onClick={handleColickMenu}>
        <Link to={item.path}>{item.name}</Link>
      </Menu.Item>
    }
  })
}

export const Menubox: React.FC = () => {
  return (
    <Menu
      defaultSelectedKeys={['home']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
    >
      {showMenuItem(routerConfig)}
    </Menu>
  )
} 