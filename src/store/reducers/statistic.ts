import {createReducer} from "redux-act"
import * as actions from "../actions/statistic"
import {StatisticState} from "../interfaces/statistic"

const defaultState: StatisticState = {
  isLoading: false,
  items: []
}

const statisticReducer = createReducer({
  [actions.getStatisticRequest.getType()](state) {
    return {
      ...state,
      isLoading: true
    }
  },
  [actions.getStatisticSuccess.getType()](state, payload) {
    return {
      ...state,
      items: payload
    }
  },
  [actions.getStatisticFailure.getType()](state) {
    return {
      ...state,
      isLoading: false
    }
  }
}, defaultState)

export default statisticReducer