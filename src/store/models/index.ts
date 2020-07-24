import { dolphins } from './dolphins'
import { sharks } from './sharks'
import { router } from "./router"

export interface RootModel {
	dolphins: typeof dolphins
	sharks: typeof sharks
	router: typeof router
}

export const models: RootModel = {
	dolphins,
	sharks,
	router
}