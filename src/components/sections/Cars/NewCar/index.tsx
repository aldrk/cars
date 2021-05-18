import React, {useState} from 'react'
import {Button, Select, TextField, FormControl, InputLabel, MenuItem} from "@material-ui/core"
import {useHistory} from "react-router-dom"
import {NewCarFields} from "../../../../store/interfaces/cars"
import API from "../../../../lib/api"
import config from "../../../../config/config"
import {useToasts} from "react-toast-notifications"

import style from "./style.module.scss"

const newCar = (newCar: NewCarFields) => {
  return new Promise<any>((resolve, reject) => {
    API.post(config.paths.car, {
        car: {
          ...newCar,
          EngineVolume: +newCar.EngineVolume,
          Url: newCar.Url ? newCar.Url : "https://c0.klipartz.com/pngpicture/831/609/gratis-png-caricatura-coche.png"
        }
      },
      {withCredentials: true})
      .then(({data}) => {
        if (data.isSuccess) {
          resolve(data)
        } else {
          reject(data)
        }
      })
      .catch((data) => reject(data))
  })
}

const NewCar = () => {
  const history = useHistory()
  const {addToast} = useToasts()

  const [carFields, setCarFields] = useState<NewCarFields>({
    Count: 0,
    Code: "",
    Brand: "",
    Model: "",
    Color: "",
    Type: "",
    Url: "",
    EngineVolume: ""
  })

  const onClickHandler = () => {
    newCar(carFields)
      .then((data) => {

        if (data.isSuccess) {
          addToast('Машина была создана', {appearance: 'success'});

          history.push("/cars")
        } else {
          addToast(data.responseMessage, {appearance: 'error'})
        }
      })
      .catch(() => addToast("Произошла ошибка", {appearance: 'error'}))
  }

  return (
    <div className={style.formWrapper}>
      <TextField value={carFields.Brand} onChange={(event => setCarFields({
        ...carFields,
        Brand: event.target.value
      }))} label="Бренд"/>

      <TextField value={carFields.Model} onChange={(event => setCarFields({
        ...carFields,
        Model: event.target.value
      }))} label="Модель"/>

      <FormControl>
        <InputLabel>Тип</InputLabel>
        <Select
          value={carFields.Type}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => setCarFields({
            ...carFields,
            Type: event.target.value as string
          })}
        >
          <MenuItem value="Купе">Купе</MenuItem>
          <MenuItem value="Кроссовер">Кроссовер</MenuItem>
          <MenuItem value="Седан">Седан</MenuItem>
        </Select>
      </FormControl>

      <TextField value={carFields.Code} onChange={(event => setCarFields({
        ...carFields,
        Code: event.target.value
      }))} label="Код автомобиля"/>

      <TextField value={carFields.Color} onChange={(event => setCarFields({
        ...carFields,
        Color: event.target.value
      }))} label="Цвет"/>

      <TextField value={carFields.Url} onChange={(event => setCarFields({
        ...carFields,
        Url: event.target.value
      }))} label="Картинка"/>

      <TextField value={carFields.EngineVolume} onChange={(event => setCarFields({
        ...carFields,
        EngineVolume: event.target.value
      }))} label="Объем двигателя"/>

      <TextField value={carFields.Count} onChange={(event => setCarFields({
        ...carFields,
        Count: +event.target.value
      }))} label="Количество"/>

      <Button onClick={onClickHandler}>Создать</Button>
    </div>
  )
}

export default NewCar
