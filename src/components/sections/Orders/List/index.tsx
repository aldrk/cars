import React from "react"
import {useSelector} from "react-redux"
import {State} from "../../../../store/store"
import OrderCard from "../../OrderCard"

const List = () => {
  const {items} = useSelector((state: State) => state.orders)

  return (
    <div>
      {items.length > 0
        ? items.map(item => <OrderCard order={item} key={item.id} />)
        : "Нет заказов"
      }
    </div>
  )
}

export default List
