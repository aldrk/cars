import React from "react"
import {useSelector} from "react-redux"
import {State} from "../../../../store/store"
import OrderCard from "../../OrderCard"

import style from "./style.module.scss"

const List = () => {
  const {items} = useSelector((state: State) => state.orders)

  return (
    <div className={style.ordersWrapper}>
      {items.length > 0
        ? items.map(item => <OrderCard order={item} key={item.id} />)
        : "Нет заказов"
      }
    </div>
  )
}

export default List
