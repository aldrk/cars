import * as ordersActions from "../actions/orders"
import {Dispatch} from "redux"
import API from "../../lib/api"
import config from "../../config/config"
import * as actions from "../actions/user";

export const getOrders = (login?: string) => (dispatch: Dispatch) => {
  const newLogin = login ? login : ""
  dispatch(ordersActions.getUserOrdersRequest())

  API.post(config.paths.orders, {}, {withCredentials: true})
    .then(({data}) => {
      if (data.isSuccess) {
        dispatch(ordersActions.getUserOrdersSuccess(data))
        dispatch(actions.setUserData({
          login: newLogin,
          data
        }))
      } else {
        dispatch(ordersActions.getUserOrdersFailure())
      }
    })
    .catch(() => dispatch(ordersActions.getUserOrdersFailure()))
}