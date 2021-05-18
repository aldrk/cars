import {createReducer} from "redux-act"
import * as actions from "../actions/orders"
import {OrdersState} from "../interfaces/orders"

const defaultState: OrdersState = {
  isLoading: false,
  items: []
}

const ordersReducer = createReducer({
  [actions.getUserOrdersRequest.getType()](state) {
    return {
      ...state,
      isLoading: true
    }
  },
  [actions.getUserOrdersSuccess.getType()](state, payload) {
    return {
      ...state,
      isLoading: false,
      items: payload.orders
    }
  },
  [actions.getUserOrdersFailure.getType()](state) {
    return {
      ...state,
      isLoading: false
    }
  }
}, defaultState)

export default ordersReducer