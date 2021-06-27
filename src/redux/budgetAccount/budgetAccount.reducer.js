//always have type and payload
/*
account: [
  name:
  payload:
  transaction: [
    {
      name:
      date:
      amount:
    }
  ]
]
*/

const INITIAL_STATE = {
  currentAccountID: null,
  accounts: [],
  uniqueID: 0
}
const budgetAccountReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "ADD_BUDGET_ACCOUNT":
      return{
        ...state,
        accounts: [...state.accounts, action.payload],
        uniqueID: state.uniqueID + 1
      }
    case "SET_BUDGET_ACCOUNT":
      return{
        ...state,
        currentAccountID: action.payload
      }
    
    default:
      return state
  }
}

export default budgetAccountReducer