import { addTransaction, deleteTransaction } from "./budgetAccount.utils"

const testAccounts = [
  {
    name: "Test Account 1",
    budget: 30000,
    transactions: [],
    uniqueID: 9000,
    currentBalance: 0,
    totalExpense: 0,
    totalIncome: 0,
  },
  {
    name: "Test Account 2",
    budget: 15000,
    transactions: [
      {
        type: "expense",
        name: "Transaction 1",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90000
      },
      {
        type: "expense",
        name: "Transaction 2",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90001
        
      },
      {
        type: "expense",
        name: "Transaction 3",
        cost: 1231231231232,
        date: "Sample Date",
        transactionID: 90002
      },
      {
        type: "income",
        name: "Transaction 4",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90003
      },
      {
        type: "income",
        name: "Transaction 1",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90004
      },
      {
        type: "income",
        name: "Transaction 2",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90005
      },
      {
        type: "expense",
        name: "Transaction 3",
        cost: 1231231231232,
        date: "Sample Date",
        transactionID: 90006
      },
      {
        type: "income",
        name: "Transaction 4",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90007
      },
      {
        type: "income",
        name: "Transaction 1",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90008
      },
      {
        type: "expense",
        name: "Transaction 2",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90009
      },
      {
        type: "income",
        name: "Transaction 3",
        cost: 1231231231232,
        date: "Sample Date",
        transactionID: 90010
      },
      {
        type: "income",
        name: "Transaction 4",
        cost: 30000,
        date: "Sample Date",
        transactionID: 90011
      },
    ],
    uniqueID: 9001,
    currentBalance: 0,
    totalExpense: 0,
    totalIncome: 0,
  },
  {
    name: "Test Account 3",
    budget: 10000,
    transactions: [],
    uniqueID: 9002,
    currentBalance: 0,
    totalExpense: 0,
    totalIncome: 0,
  },
]
const INITIAL_STATE = {
  currentAccountID: 9001,
  accounts: testAccounts,
  counter: 0,
  transactionCounter: 0
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
        accounts: addTransaction(state, action.payload, "ADD_TRANSACTION"),
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