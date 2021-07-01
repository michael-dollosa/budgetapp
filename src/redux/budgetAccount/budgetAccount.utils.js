const tempAddTransactionToArray = (transactionArray, transactionItem) => {
  return [...transactionArray, transactionItem]
}

const removeItemFromArray = (transactionArray, transactionIdToDelete) => {
  return transactionArray.filter((transactionItem) => {
    return transactionItem.transactionID !== transactionIdToDelete
  })
}

const updateIncome = (transactionArray, transactionItem, actionType) => {
  switch (actionType) {
    case "ADD_TRANSACTION":{
      //add first the new item to the current array of transaction
      const transactions = tempAddTransactionToArray(transactionArray, transactionItem)
      //return array of transaction type = income
      const incomeTransactions = transactions.filter((transaction) => transaction.type === "income")
      //use reduce to return total Income
      const totalIncome =  incomeTransactions.reduce((accumulator, item) => {
        return(accumulator + item.cost)
      }, 0)
      return totalIncome
    }

    case "DELETE_TRANSACTION":{
      //add first the new item to the current array of transaction
      const transactions = removeItemFromArray(transactionArray, transactionItem)
      //return array of transaction type = income
      const incomeTransactions = transactions.filter((transaction) => transaction.type === "income")
      //use reduce to return total Income
      const totalIncome =  incomeTransactions.reduce((accumulator, item) => {
        return(accumulator + item.cost)
      }, 0)
      return totalIncome
    }
    default:
      break;
  }
  
}
const updateExpense = (transactionArray, transactionItem, actionType) => {
  switch (actionType) {
    case "ADD_TRANSACTION":{
      //add first the new item to the current array of transaction
      const transactions = tempAddTransactionToArray(transactionArray, transactionItem)
      //return array of transaction type = income
      const incomeTransactions = transactions.filter((transaction) => transaction.type === "expense")
      //use reduce to return total Income
      const totalExpense =  incomeTransactions.reduce((accumulator, item) => {
        return(accumulator + item.cost)
      }, 0)
      return totalExpense
    }

    case "DELETE_TRANSACTION":{
      //add first the new item to the current array of transaction
      const transactions = removeItemFromArray(transactionArray, transactionItem)
      //return array of transaction type = income
      const incomeTransactions = transactions.filter((transaction) => transaction.type === "expense")
      //use reduce to return total Income
      const totalExpense =  incomeTransactions.reduce((accumulator, item) => {
        return(accumulator + item.cost)
      }, 0)
      return totalExpense
    }
    default:
      break;
  }
}

const updateBalance = (transactionArray, transactionItem, actionType, budget) => {
  switch (actionType) {
    case "ADD_TRANSACTION":{
      console.log("budget", budget)
      //add first the new item to the current array of transaction
      const transactions = tempAddTransactionToArray(transactionArray, transactionItem)
      //use reduce to return current Balance
      const currentBalance =  transactions.reduce((accumulator, item) => {
        return(accumulator + item.cost)
      }, budget)
      return currentBalance
    }

    case "DELETE_TRANSACTION":{
      //add first the new item to the current array of transaction
      const transactions = removeItemFromArray(transactionArray, transactionItem)
      //use reduce to return total Income
      const currentBalance =  transactions.reduce((accumulator, item) => {
        return(accumulator + item.cost)
      }, budget)
      return currentBalance
    }
    default:
      break;
  }
}

export const addTransaction = (budgetState, transactionToAdd) => {
  //need to get the current uniqueID to add as identifier for each new account
  const currentAccountID =  budgetState.currentAccountID
  
  //return accounts object
  return budgetState.accounts.map(account =>
    //check if currentAccountID is same with the iterated account
    account.uniqueID === currentAccountID
    //true - return object with account, adding the "new" array of transaction
    ? {...account, 
      transactions: [...account.transactions, transactionToAdd],
      totalIncome: updateIncome(account.transactions, transactionToAdd, "ADD_TRANSACTION"),
      totalExpense: updateExpense(account.transactions, transactionToAdd, "ADD_TRANSACTION"),
      currentBalance: updateBalance(account.transactions, transactionToAdd, "ADD_TRANSACTION", account.budget)
      // currentBalance: Number(account.currentBalance) + Number(updateBalance(transactionToAdd))
    }
    //false - return account obj
    : account
    )
}

export const deleteTransaction = (budgetState, transactionIdToDelete) => {
  //need to get the current uniqueID to add as identifier for each new account
  const currentAccountID =  budgetState.currentAccountID
  //return accounts object
  return budgetState.accounts.map(account =>
    //check if currentAccountID is same with the iterated account
    account.uniqueID === currentAccountID
    //true - return object with account, adding the "new" array of transaction
    ? {...account, 
      transactions: removeItemFromArray(account.transactions, transactionIdToDelete),
      totalIncome: updateIncome(account.transactions, transactionIdToDelete, "DELETE_TRANSACTION"),
      totalExpense: updateExpense(account.transactions, transactionIdToDelete, "DELETE_TRANSACTION"),
      currentBalance: updateBalance(account.transactions, transactionIdToDelete, "DELETE_TRANSACTION", account.budget)
    }
    //false - return account obj
    : account
    )
}

export const deleteAccount = (accountArray, accountID) => {
  console.log("account array", accountArray)
  return accountArray.filter((account) => account.uniqueID !== accountID)
}

export const checkAccountIndex = (accountArray) => {
  return accountArray.length === 0
  ? null
  : accountArray[0].uniqueID
}