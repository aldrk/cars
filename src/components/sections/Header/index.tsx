import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {State} from "../../../store/store"
import {Link} from "react-router-dom"
import {logOut} from "../../../store/dispatchers/user"
import Container from "../../blocks/Container"
import Logo from "../../blocks/Logo"

import style from "./style.module.scss"

const Header = () => {
  const dispatch = useDispatch()

  const {isAuth, role} = useSelector((state: State) => state.user)

  const onLogoutHandler = () => {
    dispatch(logOut())
  }

  const isAdmin = role === "admin"

  return (
    <div className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          {isAuth
            ? <div className={style.menuWrapper}>
               <Logo />
                <Link to="/cars">Машины</Link>
                <Link to="/orders">Заказы</Link>
                {isAdmin && <Link to="/statistic">Статистика</Link>}
            </div>
            : <Logo />
          }
          <div>
            {
              isAuth
                ? <div className={style.logOut} onClick={onLogoutHandler}>Выйти</div>
                : <div className={style.authActions}>
                  <Link to="/register">Зарегистрироваться</Link>
                  <Link to="/login">Авторизироваться</Link>
                </div>
            }
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Header
