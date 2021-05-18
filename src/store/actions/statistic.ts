import {createAction} from "redux-act"
import {StatisticItem} from "../interfaces/statistic"

export const getStatisticRequest = createAction("GET_STATISTIC_REQUEST")
export const getStatisticSuccess = createAction<Array<StatisticItem>>("GET_STATISTIC_SUCCESS")
export const getStatisticFailure = createAction("GET_STATISTIC_FAILURE")