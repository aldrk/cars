import React, {useEffect, useState} from 'react'
import {Button, TextField} from "@material-ui/core"
import {LoginFields} from "../../../store/interfaces/user"
import {useDispatch, useSelector} from "react-redux"
import { login } from '../../../store/dispatchers/user'
import {State} from "../../../store/store"
import { useHistory } from "react-router-dom"

import style from "./style.module.scss"

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const {isAuth} = useSelector((state: State) => state.user)

  const [loginFields, setLoginFields] = useState<LoginFields>({
    login: "",
    password: ""
  })

  useEffect(() => {
    if (isAuth) {
      history.push("/cars")
    }
  }, [isAuth])

  const onClickHandler = () => {
    dispatch(login(loginFields))
  }

  return (
    <div className={style.formWrapper}>
      <TextField value={loginFields.login} onChange={(event => setLoginFields({
        ...loginFields,
        login: event.target.value
      }))} label="Логин"/>
      <TextField value={loginFields.password} onChange={(event => setLoginFields({
        ...loginFields,
        password: event.target.value
      }))} type="password" label="Пароль"/>

      <Button className={style.button} onClick={onClickHandler}>Войти</Button>
    </div>
  )
}

export default Login
