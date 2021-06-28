export const addTransaction = (budgetState, transactionToAdd) => {
  //need to get the current uniqueID to add as identifier for each new account
  const currentAccountID =  budgetState.currentAccountID

  //return accounts object
  return budgetState.accounts.map(account =>
    //check if currentAccountID is same with the iterated account
    account.uniqueID === currentAccountID
    //true - return object with account, adding the "new" array of transaction
    ? {...account, transactions: [...account.transactions, transactionToAdd]}
    //false - return account obj
    : account
    )
}