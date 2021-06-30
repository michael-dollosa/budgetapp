import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import store from "./redux/store"

import "./index.styles.scss"
import Header from "./components/Header.component"
import TransactionItem from "./components/TransactionItem.component"
import TransactionLog from "./components/TransactionLog.component"

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  ,
  document.querySelector("#root")
)