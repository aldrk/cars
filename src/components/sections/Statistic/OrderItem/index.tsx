import React, {FC} from "react"
import {OrderItem} from "../../../../store/interfaces/orders"
import dayjs from "dayjs"

import style from "./style.module.scss"

type Props = {
  order: OrderItem
}

const OrderListItem: FC<Props> = ({order}) => {
  return (
    <div className={style.orderWrapper}>
      <div><span className={style.text}>Модель:</span> {order.carModel}</div>
      <div><span className={style.text}>Системный номер:</span> {order.systemNumber}</div>
      <div><span className={style.text}>Дата:</span> {dayjs(order.dateTime).format("DD.MM.YYYY")}</div>
    </div>
  )
}

export default OrderListItem
