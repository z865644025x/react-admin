import axios from "axios";
import { message } from "antd";

export interface BaseResult<T> {
  code: number,
  msg: string,
  data: T
}

export const fmrInstance = (params?: any) => {
  const anth = window.location.origin + '/auth';
  const errorUrl = window.location.origin + '/error';

  const fmrApi = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: { Authorization: window.localStorage.getItem("Authorization") },
    ...params
  })

  fmrApi.interceptors.response.use((response: any) => {
    if (window.location.href.indexOf("/auth") > -1) return response
    const { data, code, message: msg } = response.data;
    if (+code === 200) {
      return data
    } else {
      message.error(msg || "服务异常，请稍后再试");
      return null
    }
  }, (error: any) => {
    if (error.response === undefined) {
      message.error("操作失败，请联系管理员")
      return (Promise.reject(error))
    }
    if (error.response.status === 401) {
      message.error("用户登录超时，请刷新页面或重新登录", 2);
      window.location.href = `http://localhost:3000`
    }
    // 后续开发中可自行添加其他status的判断以及对应操作
  })
}