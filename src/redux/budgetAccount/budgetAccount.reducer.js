import { addTransaction } from "./budgetAccount.utils"

const INITIAL_STATE = {
  currentAccountID: null,
  accounts: [],
  counter: 0
}
const budgetAccountReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "ADD_BUDGET_ACCOUNT":
      return{
        ...state,
        accounts: [...state.accounts, action.payload],
        counter: state.counter + 1
      }
    case "SET_BUDGET_ACCOUNT":
      return{
        ...state,
        currentAccountID: action.payload
      }
    case "ADD_TRANSACTION":
      return{
        ...state,
        accounts: addTransaction(state, action.payload)
      }
    default:
      return state
  }
}

export default budgetAccountReducer