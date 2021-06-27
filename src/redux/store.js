import { createStore, applyMiddleware } from "redux";

//Middleware - accepts action and pass to dispatcher
import logger from "redux-logger" //middleware that will be included

import rootReducer from "./root-reducer";

const middlewares = [logger] //add middleware if needed

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
