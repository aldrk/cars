import * as actions from "../actions/statistic"
import API from "../../lib/api"
import config from "../../config/config"
import {Dispatch} from "redux"

export const getStatistic = () => (dispatch: Dispatch) => {
  dispatch(actions.getStatisticRequest())

  API.post(config.paths.statistic, {}, {withCredentials: true})
    .then(({data}) => {
      if (data.isSuccess) {
        dispatch(actions.getStatisticSuccess(data))
      } else {
        dispatch(actions.getStatisticFailure())
      }
    })
    .catch(() => dispatch(actions.getStatisticFailure()))
}
