import "./TransactionLog.styles.scss"
import { useState } from "react"
import { connect } from "react-redux"
import { BsFilePlus } from "react-icons/bs";
import { toggleTransactionForm } from "../redux/modal/modal.actions"
import TransactionItem from "./TransactionItem.component";
const TransactionLog = ({transactions, addTransactionToggle, toggleTransactionForm}) => {
  const [filter, setFilter] = useState("All")

  const transactionList = transactions.map((transaction, index) => (
    <div className="transaction-item-container">
      <TransactionItem key={index} transaction={transaction} />
    </div>
  ))

  const transactionFilteredList = transactions.map((transaction, index) => {
      return transaction.date.year.toString() === filter
      ? (
        <div className="transaction-item-container">
          <TransactionItem key={index} transaction={transaction} />
        </div>
      )
      : <div key={index}></div>
  })

  const showTransactions = filter === "All" ? transactionList : transactionFilteredList
  
  let yearList = [...new Set(transactions.map(item => item.date.year))]
  let optionList = yearList.map((year, index) => (
    <option key={index} value={year} >{ year }</option>
  ))

  const handleTransactionFormToggle = () => {
    toggleTransactionForm(!addTransactionToggle)
  }

  const handleFilterChange = (event) => {
    console.log(transactionList)
    console.log(transactionFilteredList)
    setFilter(event.target.value)
  }

  return (
    <section className="transaction-log-container">
      <section className="transaction-log-header-main">
        <div className="transaction-log-header">
          <h2 className="subheading">Transactions Log</h2>
          <BsFilePlus className="transaction-icon" onClick={ () => handleTransactionFormToggle() }/>
          
        </div>
        <div className="transaction-filter">
          <label>Filter by Year</label>
          <select onChange={event => handleFilterChange(event)} value={filter}>
            <option>All</option>
            { optionList }
          </select>
        </div>
      </section>
      

      <div className="transaction-log-list">
      { showTransactions }
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  //setup first logic to find current account based on uniqueID
  const id = state.budgetAccount.currentAccountID
  // const id = (state.budgetAccount.accounts.length > 0) ? state.budgetAccount.currentID : null
  const findCurrentAccount = state.budgetAccount.accounts.find(acc => acc.uniqueID === id )
  return({
    transactions: findCurrentAccount.transactions,
    addTransactionToggle: state.formToggle.addTransactionModal
  })
}

const mapDispatchToProps = dispatch => ({
  toggleTransactionForm: flag => dispatch(toggleTransactionForm(flag))
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionLog)