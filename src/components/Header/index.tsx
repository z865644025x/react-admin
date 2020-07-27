import React from 'react';
import { Layout,Menu,Dropdown } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import styles from "./index.module.less"

const { Header } = Layout;

export const Headerbox: React.FC = () => {

  const history = useHistory();

  const handleClick = (e:any) => {
    if(e.key === 'auth'){
      history.push('/auth');
    }
  } 

  const menu = (
    <Menu onClick={handleClick} style={{width:140}}>
      <Menu.Item key="setting:3">个人中心</Menu.Item>
      <Menu.Item key="setting:4">个人设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="auth">退出登录</Menu.Item>
    </Menu>
  )

  return (
    <Header className={styles.headerStyle}>
      <div className={styles.logo} />
      <Dropdown overlay={menu} placement="bottomCenter">
        <div className={styles.dropdownBox}>
          <UserOutlined style={{marginRight:8}} />
          <span>Wang Pei</span>
        </div>
      </Dropdown>
    </Header>
  )
}