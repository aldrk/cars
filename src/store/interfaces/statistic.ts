import {OrderItem} from "./orders"

export type StatisticItem = {
  Client: {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string
  },
  Orders: Array<OrderItem>
}

export type StatisticState = {
  items: Array<StatisticItem>
  isLoading: boolean
}