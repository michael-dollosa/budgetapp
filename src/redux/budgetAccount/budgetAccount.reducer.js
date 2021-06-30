import { addTransaction } from "./budgetAccount.utils"

const testAccounts = [
  {
    name: "Test Account 1",
    budget: 30000,
    transactions: [],
    uniqueID: 9000
  },
  {
    name: "Test Account 2",
    budget: 15000,
    transactions: [],
    uniqueID: 9001
  },
  {
    name: "Test Account 3",
    budget: 10000,
    transactions: [],
    uniqueID: 9002
  },
]
const INITIAL_STATE = {
  currentAccountID: 9001,
  accounts: testAccounts,
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