import * as actions from "../actions/cars"
import {CarsState} from "../interfaces/cars"
import {createReducer} from "redux-act"

const defaultState: CarsState = {
  isLoading: false,
  items: []
}

const carsReducer = createReducer({
  [actions.getCarsRequest.getType()](state) {
    return {
      ...state,
      isLoading: true
    }
  },
  [actions.getCarsSuccess.getType()](state, payload) {
    return {
      ...state,
      items: payload,
      isLoading: false
    }
  },
  [actions.getCarsFailure.getType()](state) {
    return {
      ...state,
      isLoading: false
    }
  }
}, defaultState)

export default carsReducer