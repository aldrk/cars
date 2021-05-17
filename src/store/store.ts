import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {UserState} from "./interfaces/user"
import {CarsState} from "./interfaces/cars"
import user from "./reducers/user"
import cars from "./reducers/cars"

export type State = {
  user: UserState
  cars: CarsState
}

const reducer = combineReducers<State>({
  user,
  cars
})

const store: any = createStore(reducer, applyMiddleware(thunk))

export default store