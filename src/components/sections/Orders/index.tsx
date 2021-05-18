import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getOrders } from "../../../store/dispatchers/orders"
import { State } from "../../../store/store"
import Container from "../../blocks/Container"
import List from "./List"
import {getCars} from "../../../store/dispatchers/cars"
import Filters from "./Filters"

import style from "./style.module.scss"

const Orders = () => {
  const dispatch = useDispatch()

  const {firstName, middleName, lastName} = useSelector((state: State) => state.user)
  const {items} = useSelector((state: State) => state.cars)

  useEffect(() => {
    dispatch(getOrders())
  }, [])

  return (
    <Container>
      <div className={style.actionsWrapper}>
        <div>Заказы пользователя {lastName} {firstName} {middleName}</div>
        <Filters />
      </div>
      <List />
    </Container>
  )
}

export default Orders
