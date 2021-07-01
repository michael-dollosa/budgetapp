const tempAddTransactionToArray = (transactionArray, transactionItem) => {
  return [...transactionArray, transactionItem]
}

const removeItemFromArray = (transactionArray, transactionIdToDelete) => {
  return transactionArray.filter((transactionItem) => {
    return transactionItem.transactionID !== transactionIdToDelete
  })
}


const updateIncome = (transactionArray, transactionItem, actionType) => {
  // if(transactionItem.type === "income") return transactionItem.cost
  // else return 0
  console.log("ACTION TYPE", actionType)
  switch (actionType) {
    case "ADD_TRANSACTION":{
      //add first the new item to the current array of transaction
      const transactions = tempAddTransactionToArray(transactionArray, transactionItem)
      //return array of transaction type = income
      const incomeTransactions = transactions.filter((transaction) => transaction.type === "income")
      console.log("ADD TRANSACTION", incomeTransactions)
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
      console.log("DELETE TRANSACTION", incomeTransactions)
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
const updateExpense = (transactionItem) => {
  if(transactionItem.type === "expense") return transactionItem.cost
  else return 0
}

const updateBalance = (transactionArray, transactionItem, currentBalance) => {
  const totalExpense =  transactionArray.reduce((accumulator, item) => {
    return(accumulator + item.cost)
  }, transactionItem.cost)
  // console.log("update balance", currentBalance)
  // console.log("update balance -total expense", totalExpense)
  return totalExpense
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
      // totalIncome: account.totalIncome + Number(updateIncome(transactionToAdd)),
      totalIncome: updateIncome(account.transactions, transactionToAdd, "ADD_TRANSACTION"),
      totalExpense: account.totalExpense + Number(updateExpense(transactionToAdd)),
      currentBalance: updateBalance(account.transactions, transactionToAdd, account.currentBalance)
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
    }
    //false - return account obj
    : account
    )
}