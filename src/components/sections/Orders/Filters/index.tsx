import React from "react"
import {Button} from "@material-ui/core"
import {useHistory} from "react-router-dom"
import {useSelector} from "react-redux"
import {State} from "../../../../store/store"


const Filters = () => {
  const history = useHistory()

  const {role} = useSelector((state: State) => state.user)

  const isAdmin = role === "admin"

  const onClickHandler = () => {
    history.push("/orders/new")
  }

  return (
    <div>

      {!isAdmin && <Button onClick={onClickHandler}>Новый заказ</Button>}
    </div>
  )
}

export default Filters
