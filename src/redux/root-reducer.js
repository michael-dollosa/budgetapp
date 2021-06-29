import { combineReducers } from "redux"

//combine all reducers
import budgetAccountReducer from "./budgetAccount/budgetAccount.reducer"
import modalReducer from "./modal/modal.reducer"

export default combineReducers({
  budgetAccount: budgetAccountReducer,
  formToggle: modalReducer
})