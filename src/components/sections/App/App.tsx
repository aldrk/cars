import React from 'react'
import Registration from "../Registrstion"
import Header from "../Header"
import {Switch, Route, Redirect} from "react-router-dom"
import Login from '../Login'
import {useSelector} from "react-redux"
import {State} from "../../../store/store"
import Orders from '../Orders'
import Cars from "../Cars"
import NewCar from "../Cars/NewCar";
import NewOrder from "../Orders/NewOrder"
import Statistic from '../Statistic'

const App = () => {
  const {isAuth, role} = useSelector((state: State) => state.user)

  const isAdmin = role === "admin"

  return (
    <div>
      <Header/>
      <Switch>
        {!isAuth && <Route exact path="/register" component={Registration}/>}
        {!isAuth && <Route exact path="/login" component={Login}/>}
        {isAuth && <Route exact path="/cars" component={Cars}/>}
        {isAuth && isAdmin && <Route exact path="/cars/new" component={NewCar}/>}
        {isAuth && isAdmin && <Route exact path="/statistic" component={Statistic}/>}
        {isAuth && <Route exact path="/orders" component={Orders}/>}
        {isAuth && <Route exact path="/orders/new" component={NewOrder}/>}

        {!isAuth && <Route path="*" component={Registration}/>}
        {isAuth && <Redirect to="/cars" from="/"/>}
      </Switch>
    </div>
  )
}

export default App
