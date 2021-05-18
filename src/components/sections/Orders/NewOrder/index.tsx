import React, {useState} from 'react'
import {Button, Select, FormControl, InputLabel, MenuItem} from "@material-ui/core"
import { useHistory } from "react-router-dom"
import API from "../../../../lib/api"
import config from "../../../../config/config"
import { useToasts } from "react-toast-notifications"
import { NewOrderFields } from '../../../../store/interfaces/orders'
import {useSelector} from "react-redux"
import {State} from "../../../../store/store"

import style from "./style.module.scss"

const newOrder = (newOrder: NewOrderFields) => {
  return new Promise<any>((resolve, reject) => {
    API.post(config.paths.order, {order: {...newOrder}}, {withCredentials: true})
      .then(({data}) => {
        if (data.isSuccess) {
          resolve(data)
        } else {
          reject(data)
        }
      })
      .catch(({data}) => reject(data))
  })
}

const NewOrder = () => {
  const history = useHistory()

  const { addToast } = useToasts()

  const {items} = useSelector((state: State) => state.cars)

  const [orderFields, setOrderFields] = useState<NewOrderFields>({
    CarId: 0,
  })

  const onClickHandler = () => {
    newOrder(orderFields)
      .then((data) => {
        addToast(data.responseMessage, { appearance: 'success' });

        history.push("/orders")
      })
      .catch(() => addToast("Произошла ошибка", { appearance: 'error' }))
  }

  return (
    <div className={style.formWrapper}>
      <FormControl>
        <InputLabel>Модель</InputLabel>
        <Select
          value={orderFields.CarId}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => setOrderFields({
            ...orderFields,
            CarId: Number(event.target.value as string)
          })}
        >
          {items.map(item => <MenuItem value={item.id}>{item.model}</MenuItem>)}
        </Select>
      </FormControl>

      <Button onClick={onClickHandler}>Создать</Button>
    </div>
  )
}

export default NewOrder
