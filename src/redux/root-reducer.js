import { combineReducers } from "redux"

//combine all reducers
import budgetAccountReducer from "./budgetAccount/budgetAccount.reducer"
import modalReducer from "./modal/modal.reducer"

//need to persist reducer
import { persistReducer } from "redux-persist"
//import type of storage from redux persist lib - local storage
import storage from "redux-persist/lib/storage"

//setup config
const persistConfig = {
  key: "root", //we want to store beginning from root
  storage: storage, //store storage
  whitelist: ["budgetAccount"] //array of the reducer needed to persist
}

//setup all reducer in an obj
const rootReducer = combineReducers({
  budgetAccount: budgetAccountReducer,
  formToggle: modalReducer
})

export default persistReducer(persistConfig, rootReducer)