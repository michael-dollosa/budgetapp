import AddTransactionForm from "../forms/AddTransactionForm.component"
import { Fragment } from "react"
import { connect } from "react-redux"

const Transaction = ({ accountTransactions }) => {

  let transactionBody = accountTransactions.map((transaction, index) => 
    <h3 key={index}>{transaction.name} - {transaction.cost}</h3>
  )

  console.log("transaction content", transactionBody)
  return(
    <div>
      <h1>Account Transactions</h1>
      <AddTransactionForm />
      <h1>History of Transactions</h1>
      {transactionBody}
    </div>
  )
}

const mapStateToProps = state => {
  //setup first logic to find current account based on uniqueID
  const id = state.budgetAccount.currentAccountID
  const findCurrentAccount = state.budgetAccount.accounts.find(acc => acc.uniqueID === id )

  return({
    accountTransactions: (findCurrentAccount !== undefined) 
    ? findCurrentAccount.transactions
    : []
  })
}

export default connect(mapStateToProps)(Transaction)