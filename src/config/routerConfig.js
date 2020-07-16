import Demo from "../pages/demo";
import { Home } from "../pages/home";
import { TodoListForRedux } from "../pages/redux";
import { RouterDemo } from "../pages/router";

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
  }
]
