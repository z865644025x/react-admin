import Demo from "../pages/demo";
import { Home } from "../pages/home";
import {TodoListForRedux} from "../pages/redux";

export const routerConfig = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/demo",
    component: Demo
  },
  {
    path: "/todolist",
    component: TodoListForRedux
  }
]
