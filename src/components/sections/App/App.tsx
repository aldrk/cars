import React from 'react'
import Registration from "../Registrstion"
import Header from "../Header"
import {Switch, Route, Redirect} from "react-router-dom"
import Login from '../Login'
import {useSelector} from "react-redux"
import {State} from "../../../store/store"
import Orders from '../Orders'
import Users from '../Users'
import Cars from "../Cars"
import NewCar from "../Cars/NewCar";

const App = () => {
  const {isAuth} = useSelector((state: State) => state.user)

  return (
    <div>
      <Header/>
      <Switch>
        {!isAuth && <Route exact path="/register" component={Registration}/>}
        {!isAuth && <Route exact path="/login" component={Login}/>}
        {isAuth && <Route exact path="/cars" component={Cars}/>}
        {isAuth && <Route exact path="/cars/new" component={NewCar}/>}
        {isAuth && <Route exact path="/clients" component={Users}/>}
        {isAuth && <Route exact path="/orders" component={Orders}/>}

        {!isAuth && <Route path="*" component={Registration}/>}
        {isAuth && <Redirect to="/cars" from="/"/>}
      </Switch>
    </div>
  )
}

export default App
