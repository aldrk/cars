import * as actions from "../actions/cars"
import {CarsState} from "../interfaces/cars"
import {createReducer} from "redux-act"

const defaultState: CarsState = {
  isLoading: false,
  items: [
    {id: 1, brand: "Mercedes", count: 5, code: "1", color: "Красный", engineVolume: "2.0", model: "A class", type: "Купе"},
    {id: 2, brand: "BMW", count: 2, code: "2", color: "Черный", engineVolume: "1.4", model: "X1", type: "Кроссовер"},
    {id: 3, brand: "Audi", count: 3, code: "3", color: "Желтый", engineVolume: "2.5", model: "A5", type: "Седан"},
    {id: 4, brand: "Porsche", count: 6, code: "4", color: "Зеленый", engineVolume: "3.5", model: "911", type: "Купе"},
    {id: 5, brand: "Kia", count: 8, code: "5", color: "Белый", engineVolume: "1.6", model: "K5", type: "Седан"},
    {id: 6, brand: "Mazda", count: 9, code: "6", color: "Розовый", engineVolume: "1.8", model: "CX-5", type: "Кроссовер"},
    {id: 7, brand: "Skoda", count: 10, code: "7", color: "Серебрянный", engineVolume: "1.3", model: "Rapid", type: "Седан"},
    {id: 8, brand: "Volkswagen", count: 3, code: "8", color: "Синий", engineVolume: "2.5", model: "Tiguan", type: "Кроссовер"},
    {id: 9, brand: "Lada", count: 4, code: "9", color: "Черный", engineVolume: "1.3", model: "Vesta", type: "Седан"},
  ]
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