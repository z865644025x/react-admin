import React,{useEffect, Fragment} from 'react';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { iRootState, Dispatch } from '../../store'
import { routerConfig } from "../../config/routerConfig";

const { SubMenu } = Menu;

interface routeType {
  path: string,
  component: any,
  name: string,
  children?: []
}

export const Menubox: React.FC = () => {

  const menuRouter = useSelector((state:iRootState) => state.router);
  const dispatch = useDispatch<Dispatch>();
  const IRouter:any = dispatch.router

  const handleColickMenu = (item: any) => {
    IRouter.changeMenu(item.key);
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

  useEffect(()=> {
    IRouter.changeMenu(window.location.pathname.split('/').pop());
  },[IRouter])

  return (
    <Menu
      defaultSelectedKeys={['home']}
      mode="inline"
      theme="dark"
      selectedKeys={[menuRouter]}
    >
      {showMenuItem(routerConfig)}
    </Menu>
  )
} 