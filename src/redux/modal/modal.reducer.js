const INITIAL_STATE = {
  addAccountModal: false,
  addTransactionModal: false
}
const modalReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "TOGGLE_ACCOUNT_FORM":
      return{
        ...state,
        addAccountModal: action.payload
      }
    case "TOGGLE_TRANSACTION_FORM":
      return{
        ...state,
        addTransactionModal: action.payload
      }
    default:
      return state
  }
}

export default modalReducer