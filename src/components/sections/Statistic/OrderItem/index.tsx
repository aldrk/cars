import React, {FC} from "react"
import {OrderItem} from "../../../../store/interfaces/orders"
import dayjs from "dayjs"

type Props = {
  order: OrderItem
}

const OrderListItem: FC<Props> = ({order}) => {
  return (
    <div>
      {order.carModel} {order.systemNumber} {dayjs(order.dateTime).format("DD.MM.YYYY")}
    </div>
  )
}

export default OrderListItem
