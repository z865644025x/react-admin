import React from 'react';
import Demo from "../pages/demo";
import { Home } from "../pages/home";
import { TodoListForRedux } from "../pages/redux";
import { RouterDemo } from "../pages/router";
import { Children } from "../pages/router/children";
import { TableBox } from "../pages/table";
import { FormBox } from "../pages/form";
import { DeleteOutlined } from "@ant-design/icons"

export const routerConfig = [
  {
    path: "/",
    component: Home,
    name: '首页'
  },
  {
    path: "/demo",
    component: Demo,
    name: 'demo'
  },
  {
    path: "/todolist",
    component: TodoListForRedux,
    name: 'todolist'
  },
  {
    path: "/routerdemo",
    redirect:'/routerdemo/children',
    component: RouterDemo,
    name: 'routerdemo',
    children:[
      {
        path: "/routerdemo/children",
        component: Children,
        name: 'children'
      }
    ]
  },
  {
    path: "/table",
    component: TableBox,
    name: 'tablebox'
  },
  {
    path: "/form",
    component: FormBox,
    name: 'formBox',
    icon: <DeleteOutlined />
  }
]
