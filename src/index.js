import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "./redux/store"
import "./index.styles.scss"

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate> 
  </Provider>
  ,
  document.querySelector("#root")
)