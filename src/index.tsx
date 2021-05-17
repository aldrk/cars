import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/sections/App/App'
import "./styles/reset.scss"
import {BrowserRouter as Router,} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store/store"
import {ToastProvider} from "react-toast-notifications"
import config from "./config/config"

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider autoDismiss autoDismissTimeout={config.notificationDisappearTime}>
      <Router>
        <App/>
      </Router>
    </ToastProvider>
  </Provider>
  ,
  document.getElementById('root')
)
