import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux/store"

import "./index.styles.scss"
import Account from "./pages/Account.component"

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  ,
  document.querySelector("#root")
)