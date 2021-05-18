import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {UserState} from "./interfaces/user"
import {CarsState} from "./interfaces/cars"
import {OrdersState} from "./interfaces/orders"
import {StatisticState} from "./interfaces/statistic"
import user from "./reducers/user"
import cars from "./reducers/cars"
import orders from "./reducers/orders"
import statistic from "./reducers/statistic"

export type State = {
  user: UserState
  cars: CarsState
  orders: OrdersState
  statistic: StatisticState
}

const reducer = combineReducers<State>({
  user,
  cars,
  orders,
  statistic
})

const store: any = createStore(reducer, applyMiddleware(thunk))

export default store