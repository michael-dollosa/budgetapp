import { combineReducers } from "redux"

//combine all reducers
import budgetAccountReducer from "./budgetAccount/budgetAccount.reducer"

export default combineReducers({
  budgetAccount: budgetAccountReducer
})