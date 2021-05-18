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

export const login = (loginFields: LoginFields) => (dispatch: any) => {
  dispatch(actions.loginRequest())

  API.get(config.paths.isAuth, {withCredentials: true})
    .then(({data}) => {
      if (data) {
        API.post(config.paths.logOut,{} , {withCredentials: true})
          .then(({data}) => {
            if (data.isSuccess) {
              dispatch(actions.logOut())

              API.post(config.paths.login, {...loginFields}, {withCredentials: true})
                .then(({data}) => {
                  if (data.isSuccess) {
                    dispatch(actions.loginSuccess(data))
                  } else {
                    dispatch(actions.loginFailure())
                  }
                })
                .catch(() => dispatch(actions.loginFailure()))
            } else {
              dispatch(actions.logOut())
            }
          })
          .catch(() => dispatch(actions.logOut()))
      } else {
        API.post(config.paths.login, {...loginFields}, {withCredentials: true})
          .then(({data}) => {
            if (data.isSuccess) {
              dispatch(actions.loginSuccess(data))
            } else {
              dispatch(actions.loginFailure())
            }
          })
          .catch(() => dispatch(actions.loginFailure()))
      }
    })
}

export const logOut = () => (dispatch: Dispatch) => {
  dispatch(actions.logOut())

  API.post(config.paths.logOut,{} , {withCredentials: true})
    .then(({data}) => {
      if (data.isSuccess) {
        dispatch(actions.logOut())
      } else {
        dispatch(actions.logOut())
      }
    })
    .catch(() => dispatch(actions.logOut()))
}
