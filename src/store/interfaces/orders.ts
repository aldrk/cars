export type OrderItem = {
  id: number
  carId: number
  carModel: string
  systemNumber: string
  dateTime: string
}

export type OrdersState = {
  isLoading: boolean
  items: Array<OrderItem>
}

export type OrdersResponse = {
  isSuccess: boolean
  orders: Array<OrderItem>
}

export type NewOrderFields = {
  CarId: number

}