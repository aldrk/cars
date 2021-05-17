export type ClientItem = {
  id: number
  firstName: string
  lastName: string
  middleName: string
  orders: Array<OrderItem>
}

export type OrderItem = {
  id: number,
  model: string,
  systemNumber: string
  orderDate: string
}