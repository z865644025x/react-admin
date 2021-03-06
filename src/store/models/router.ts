import { Dispatch } from '..'

export type RouterState = string

export const router: any = {
  state: 'home',
  reducers: {
    increment: (_:string,payload:RouterState) => payload === '' ? 'home' : payload,
  },
  effects: (dispatch: Dispatch) => ({
    changeMenu(payload:string) {
      dispatch.router.increment(payload)
    },
  }),
}