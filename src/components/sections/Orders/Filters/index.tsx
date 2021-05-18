import React from "react"
import {Button} from "@material-ui/core"
import {useHistory} from "react-router-dom"

const Filters = () => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push("/orders/new")
  }

  return (
    <div>
      <Button onClick={onClickHandler}>Новый заказ</Button>
    </div>
  )
}

export default Filters
