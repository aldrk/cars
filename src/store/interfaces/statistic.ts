import {OrderItem} from "./orders"

export type StatisticItem = {
  client: {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string
  },
  orders: Array<OrderItem>
}

export type StatisticState = {
  items: Array<StatisticItem>
  isLoading: boolean
}