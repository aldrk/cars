import React, {useState} from 'react'
import {Button, Select, TextField, FormControl, InputLabel, MenuItem} from "@material-ui/core"
import { useHistory } from "react-router-dom"
import {NewCarFields} from "../../../../store/interfaces/cars"
import API from "../../../../lib/api"
import config from "../../../../config/config"
import { useToasts } from "react-toast-notifications"

import style from "./style.module.scss"

const newCar = (newCar: NewCarFields) => {
  return new Promise<void>((resolve, reject) => {
    API.post(config.paths.car, {...newCar})
      .then(({data}) => {
        if (data.isSucces) {
          resolve()
        } else {
          reject()
        }
      })
      .catch(() => reject())
  })
}

const NewCar = () => {
  const history = useHistory()
  const { addToast } = useToasts()

  const [carFields, setCarFields] = useState<NewCarFields>({
    count: 0,
    code: "",
    brand: "",
    model: "",
    color: "",
    type: "",
    engineVolume: ""
  })

  const onClickHandler = () => {
    newCar(carFields)
      .then(() => {
        addToast('Машина была создана', { appearance: 'success' });

        history.push("/cars")
      })
      .catch(() => addToast('Произошла ошибка', { appearance: 'error' }))
  }

  return (
    <div className={style.formWrapper}>
      <TextField value={carFields.brand} onChange={(event => setCarFields({
        ...carFields,
        brand: event.target.value
      }))} label="Бренд"/>

      <TextField value={carFields.model} onChange={(event => setCarFields({
        ...carFields,
        model: event.target.value
      }))} label="Модель"/>

      <FormControl>
        <InputLabel>Тип</InputLabel>
        <Select
          value={carFields.type}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => setCarFields({
            ...carFields,
            type: event.target.value as string
          })}
        >
          <MenuItem value="Купе">Купе</MenuItem>
          <MenuItem value="Кроссовер">Кроссовер</MenuItem>
          <MenuItem value="Седан">Седан</MenuItem>
        </Select>
      </FormControl>

      <TextField value={carFields.code} onChange={(event => setCarFields({
        ...carFields,
        code: event.target.value
      }))} label="Код автомобиля"/>

      <TextField value={carFields.color} onChange={(event => setCarFields({
        ...carFields,
        color: event.target.value
      }))} label="Цвет"/>

      <TextField value={carFields.color} onChange={(event => setCarFields({
        ...carFields,
        color: event.target.value
      }))} label="Цвет"/>

      <TextField value={carFields.engineVolume} onChange={(event => setCarFields({
        ...carFields,
        engineVolume: event.target.value
      }))} label="Объем двигателя"/>

      <TextField value={carFields.count} onChange={(event => setCarFields({
        ...carFields,
        count: +event.target.value
      }))} label="Количесвто"/>

      <Button onClick={onClickHandler}>Создать</Button>
    </div>
  )
}

export default NewCar
