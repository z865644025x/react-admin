/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import {
  List,
  Avatar,
  Typography,
  Menu,
  Dropdown,
  Tabs,
} from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./index.css";
import logo from "../../logo.svg";

const { Title } = Typography;
const { TabPane } = Tabs;

const todoListData = [
  {
    content: "TS + React全家桶 + antd 项目搭建",
    user: "mRcfps",
    time: "2020年3月2日 19:34",
    isCompleted: false,
  },
  {
    content: "TS",
    user: "pftom",
    time: "2020年3月2日 19:34",
    isCompleted: false,
  },
  {
    content: "TS+react",
    user: "Holy",
    time: "2020年3月2日 19:34",
    isCompleted: false,
  },
  {
    content: "TS + React",
    user: "crxk",
    time: "2020年3月2日 19:34",
    isCompleted: false,
  },
  {
    content: "TS + React全家桶 + ant d",
    user: "Pony",
    time: "2020年3月2日 19:34",
    isCompleted: false,
  },
];

const menu = (
  <Menu>
    <Menu.Item>完成 </Menu.Item>
    <Menu.Item> 删除 </Menu.Item>
  </Menu>
);

const TodoList: React.FC = () => {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={todoListData}
      renderItem={(item) => (
        <List.Item
          actions={
            [
              <Dropdown overlay={menu} >
                <a key="list-loadmore-more">
                  操作 < DownOutlined />
                </a>
              </Dropdown>,
            ]
          }
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={< a href="https://ant.design" > {item.user} </a>}
            description={item.time}
          />
          <div>{item.content} </div>
        </List.Item>
      )
      }
    />
  );
}

const Demo: React.FC = () => {
  const callback = () => { };

  return (
    <div className="App">
      <div className="container header" >
        <img src={logo} alt="" style={{ width: 80 }} />
        <Title level={3} > TS + React全家桶 + antd 项目搭建 </Title>
      </div>
      <div className="container" >
      </div>
      <div className="container" >
        <Tabs onChange={callback} type="card" >
          <TabPane tab="所有" key="1" >
            <TodoList />
          </TabPane>
          <TabPane tab="进行中" key="2" >
            <TodoList />
          </TabPane>
          <TabPane tab="已完成" key="3" >
            <TodoList />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Demo;
