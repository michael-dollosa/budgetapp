import "./TransactionLog.styles.scss"
import { connect } from "react-redux"
import { BsFilePlus } from "react-icons/bs";
import { toggleTransactionForm } from "../redux/modal/modal.actions"
import TransactionItem from "./TransactionItem.component";
const TransactionLog = ({transactions, addTransactionToggle, toggleTransactionForm}) => {

  const transactionList = transactions.map((transaction, index) => (
    <TransactionItem key={index} transaction={transaction} />
  ))

  const handleTransactionFormToggle = () => {
    toggleTransactionForm(!addTransactionToggle)
  }
  return (
    <section className="transaction-log-container">
      <div className="transaction-log-header">
        <h2 className="subheading">Transactions Log</h2>
        <BsFilePlus className="transaction-icon" onClick={ () => handleTransactionFormToggle() }/>
      </div>

      <div className="transaction-log-list">
      { transactionList }
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  //setup first logic to find current account based on uniqueID
  const id = state.budgetAccount.currentAccountID
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