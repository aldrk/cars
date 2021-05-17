import React, {useState} from 'react'
import {Button, TextField} from "@material-ui/core"
import {RegisterFields} from "../../../store/interfaces/user"
import {useDispatch} from "react-redux"

import style from "./style.module.scss"
import { register } from '../../../store/dispatchers/user'

const Registration = () => {
  const dispatch = useDispatch()

  const [registerFields, setRegisterFields] = useState<RegisterFields>({
    firstName: "",
    middleName: "",
    lastName: "",
    login: "",
    password: ""
  })

  const onClickHandler = () => {
    dispatch(register(registerFields))
  }

  return (
    <div className={style.formWrapper}>
      <TextField value={registerFields.lastName} onChange={(event => setRegisterFields({
        ...registerFields,
        lastName: event.target.value
      }))} label="Фамилия"/>
      <TextField value={registerFields.firstName} onChange={(event => setRegisterFields({
        ...registerFields,
        firstName: event.target.value
      }))} label="Имя"/>
      <TextField value={registerFields.middleName} onChange={(event => setRegisterFields({
        ...registerFields,
        middleName: event.target.value
      }))} label="Отчество"/>
      <TextField value={registerFields.login} onChange={(event => setRegisterFields({
        ...registerFields,
        login: event.target.value
      }))} label="Логин"/>
      <TextField value={registerFields.password} onChange={(event => setRegisterFields({
        ...registerFields,
        password: event.target.value
      }))} type="password" label="Пароль"/>

      <Button onClick={onClickHandler}>Зарегистрироваться</Button>
    </div>
  )
}

export default Registration
