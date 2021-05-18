import {createAction} from "redux-act"
import {RegisterFields, LoginFields} from "../interfaces/user"

export const logOut = createAction("LOG_OUT")

export const registerRequest = createAction("REGISTER_REQUEST")
export const registerSuccess = createAction<RegisterFields>("REGISTER_SUCCESS")
export const registerFailure = createAction("REGISTER_FAILURE")
export const setUserData = createAction<{data: any, login: string}>("SET_USER_DATA")

export const loginRequest = createAction("LOGIN_REQUEST")
export const loginSuccess = createAction<LoginFields>("LOGIN_SUCCESS")
export const loginFailure = createAction("LOGIN_FAILURE")