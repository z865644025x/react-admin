import Demo from "../pages/demo";
import { Home } from "../pages/home";
import { TodoListForRedux } from "../pages/redux";
import { RouterDemo } from "../pages/router";
import { TableBox } from "../pages/table";

export const routerConfig = [
  {
    path: "/",
    component: Home,
    name: 'home'
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
    component: RouterDemo,
    name: 'routerdemo'
  },
  {
    path: "/table",
    component: TableBox,
    name: 'tablebox'
  }
]
