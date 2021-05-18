import {createAction} from "redux-act"
import { OrdersResponse } from "../interfaces/orders"

export const getUserOrdersRequest = createAction("GET_USERS_ORDERS_REQUEST")
export const getUserOrdersSuccess = createAction<OrdersResponse>("GET_USERS_ORDERS_SUCCESS")
export const getUserOrdersFailure = createAction("GET_USERS_ORDERS_FAILURE")