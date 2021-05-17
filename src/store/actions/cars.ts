import {createAction} from "redux-act"
import {CarItem} from "../interfaces/cars"

export const getCarsRequest = createAction("GET_CARS_REQUEST")
export const getCarsSuccess = createAction<Array<CarItem>>("GET_CARS_SUCCESS")
export const getCarsFailure = createAction("GET_CARS_FAILURE")
