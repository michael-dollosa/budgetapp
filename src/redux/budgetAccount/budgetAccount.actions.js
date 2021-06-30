export const addBudgetAccount = account => ({
  type: "ADD_BUDGET_ACCOUNT",
  payload: account
})

export const setBudgetAccount = account => ({
  type: "SET_BUDGET_ACCOUNT",
  payload: account
})

export const addTransaction = item => ({
  type: "ADD_TRANSACTION",
  payload: item
})

export const deleteTransaction = id => ({
  type: "DELETE_TRANSACTION",
  payload: id
})