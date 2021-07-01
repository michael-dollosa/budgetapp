import { createStore, applyMiddleware } from "redux";

//Middleware - accepts action and pass to dispatcher
import logger from "redux-logger" //middleware that will be included
//allow browser to cache store based on coinfig
import { persistStore } from "redux-persist"

import rootReducer from "./root-reducer";

const middlewares = [logger] //add middleware if needed

//set store
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
//set var for persisted store
export const persistor = persistStore(store)

