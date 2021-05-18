import {createReducer} from "redux-act"
import * as actions from "../actions/user"
import {UserState} from "../interfaces/user"

const defaultState: UserState = {
  firstName: "",
  middleName: "",
  lastName: "",
  login: "",
  role: "user",

  isAuth: false,
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
        firstName: payload.associate.firstName,
        middleName: payload.associate.middleName,
        lastName: payload.associate.lastName,
        login: payload.login,
        role: payload.role.roleSystemName,

        isAuth: true,
        isLoading: true
      }
    },
    [actions.loginFailure.getType()](state) {
      return {
        ...state,
        isLoading: false
      }
    },
    [actions.setUserData.getType()](state, payload) {
      return {
        ...state,
        isLoading: false,
        firstName: payload.data.client.firstName,
        middleName: payload.data.client.middleName,
        lastName: payload.data.client.lastName,
        isAuth: true,
        login: payload.login === "" ? state.login : payload.login
      }
    }
  }, defaultState)

export default user

