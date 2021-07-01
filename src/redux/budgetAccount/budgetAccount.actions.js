export const addBudgetAccount = account => ({
  type: "ADD_BUDGET_ACCOUNT",
  payload: account
})

export const setBudgetAccount = account => ({
  type: "SET_BUDGET_ACCOUNT",
  payload: account
})

export const deleteBudgetAccount = accountID => ({
  type: "DELETE_BUDGET_ACCOUNT",
  payload: accountID
})

export const modifyBudgetAccount = account => ({
  type: "MODIFY_BUDGET_ACCOUNT",
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