import * as actions from "../actions/cars"
import {Dispatch} from "redux"
import config from "../../config/config"
import API from "../../lib/api"

export const getCars = (type?: string) => (dispatch: Dispatch) => {
  dispatch(actions.getCarsRequest())

  API.post(config.paths.cars, {
    BatchSize: 10,
    From: 0,
    Type: type
  },{withCredentials: true})
    .then(({data}) => {
      if (data.isSuccess) {
        dispatch(actions.getCarsSuccess(data.cars))
      } else {
        dispatch(actions.getCarsFailure())
      }
    })
    .catch(() => dispatch(actions.getCarsFailure()))
}
