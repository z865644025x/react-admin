import { delay } from '../helpers'
import { Dispatch } from '..'

export type SharksState = number

export const sharks: any = {
  state: 0,
  reducers: {
    increment: (state: SharksState, payload: number): SharksState =>
      state + payload,
  },
  effects: (dispatch: Dispatch) => ({
    async incrementAsync(payload: number) {
      await delay(500)
      dispatch.sharks.increment(payload || 1)
    },
  }),
}