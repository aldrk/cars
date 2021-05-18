import * as actions from "../actions/statistic"
import API from "../../lib/api"
import config from "../../config/config"
import {Dispatch} from "redux"

export const getStatistic = (From?: Date, To?:Date | null) => (dispatch: Dispatch) => {
  dispatch(actions.getStatisticRequest())

  API.post(config.paths.statistic, {From, To}, {withCredentials: true})
    .then(({data}) => {
      if (data.isSuccess) {
        dispatch(actions.getStatisticSuccess(data.statistics))
      } else {
        dispatch(actions.getStatisticFailure())
      }
    })
    .catch(() => dispatch(actions.getStatisticFailure()))
}
