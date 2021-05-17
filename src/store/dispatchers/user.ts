import * as actions from "../actions/user"
import {Dispatch} from "redux"
import API from "../../lib/api"
import config from "../../config/config"
import {LoginFields, RegisterFields} from "../interfaces/user"

export const register = (registerFields: RegisterFields) => (dispatch: Dispatch) => {
  dispatch(actions.registerRequest())

  API.post(config.paths.register, {...registerFields}, {withCredentials: true})
    .then(({data}) => {
      if (data.isSuccess) {
        dispatch(actions.registerSuccess(data))
      } else {
        dispatch(actions.registerFailure())
      }
    })
    .catch(() => dispatch(actions.registerFailure()))
}

export const login = (registerFields: LoginFields) => (dispatch: Dispatch) => {
  dispatch(actions.loginRequest())

  API.post(config.paths.login, {...registerFields})
    .then(({data}) => {
      if (data.isSuccess) {
        dispatch(actions.loginSuccess(data))
      } else {
        dispatch(actions.loginFailure())
      }
    })
    .catch(() => dispatch(actions.loginFailure()))
}
