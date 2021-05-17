import {createReducer} from "redux-act"
import * as actions from "../actions/user"
import {UserState} from "../interfaces/user"

const defaultState: UserState = {
  firstName: "",
  middleName: "",
  lastName: "",
  login: "",

  isAuth: true,
  isLoading: false
}

const user = createReducer(
  {
    [actions.registerSuccess.getType()](state, payload) {
      return {
        ...state,
        firstName: payload.firstName,
        middleName: payload.middleName,
        lastName: payload.lastName,
        login: payload.login,

        isAuth: true,
        isLoading: false
      }
    },
    [actions.logOut.getType()](state) {
      return {
        ...state,
        firstName: "",
        middleName: "",
        lastName: "",
        login: "",

        isAuth: false,
        isLoading: false
      }
    },
    [actions.registerRequest.getType()](state){
      return {
        ...state,
        isLoading: true
      }
    },
    [actions.registerFailure.getType()](state) {
      return {
        ...state,
        isLoading: false
      }
    },
    [actions.loginRequest.getType()](state) {
      return {
        ...state,
        isLoading: true
      }
    },
    [actions.loginSuccess.getType()](state, payload) {
      return {
        ...state,
        firstName: payload.firstName,
        middleName: payload.middleName,
        lastName: payload.lastName,
        login: payload.login,

        isAuth: true,
        isLoading: true
      }
    },
    [actions.loginFailure.getType()](state) {
      return {
        ...state,
        isLoading: false
      }
    }
  }, defaultState)

export default user

