import { addTransaction, deleteTransaction, modifyAccount, deleteAccount, checkAccountIndex } from "./budgetAccount.utils"
import { testAccounts } from "../../seed"

const INITIAL_STATE = {
  currentAccountID: null,
  accounts: [],
  counter: 0,
  transactionCounter: 0
}
const budgetAccountReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "ADD_BUDGET_ACCOUNT":
      return{
        ...state,
        accounts: [...state.accounts, action.payload],
        currentAccountID: action.payload.uniqueID,
        counter: state.counter + 1
      }
    case "SET_BUDGET_ACCOUNT":
      return{
        ...state,
        currentAccountID: action.payload
      }
    case "DELETE_BUDGET_ACCOUNT":
      return{
        ...state,
        accounts: deleteAccount(state.accounts, action.payload),
        currentAccountID: checkAccountIndex(state.accounts)
      }
    case "MODIFY_BUDGET_ACCOUNT":
      return{
        ...state,
        accounts: modifyAccount(state, action.payload)
      }
    case "ADD_TRANSACTION":
      return{
        ...state,
        accounts: addTransaction(state, action.payload),
        transactionCounter: state.transactionCounter + 1
      }
    case "DELETE_TRANSACTION":
      return{
        ...state,
        accounts: deleteTransaction(state, action.payload)
    }
    default:
      return state
  }
}

export default budgetAccountReducer