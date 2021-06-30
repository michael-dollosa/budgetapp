import "./TransactionItem.styles.scss"
import { connect } from "react-redux"
import { deleteTransaction } from "../redux/budgetAccount/budgetAccount.actions"
import { formatNumber } from "../helper/helper";
import { BsTrash } from "react-icons/bs";

const TransactionItem = ({key, transaction, deleteTransaction}) => {
  const {name, cost, date, transactionID} = transaction

  const handleDeleteTransaction = (id) => {
    deleteTransaction(id)
  }
  return(
    <div className="item-container">
      <section className="item-detail">
        <h4>{ name }</h4>
        <label>{ date }</label>
      </section>
      <section className="item-cost">
        <h3>{ formatNumber(cost) }</h3>
      </section>
      <BsTrash className="item-icon" onClick={ () => handleDeleteTransaction(transactionID)}/>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTransaction: id => dispatch(deleteTransaction(id))
})

export default connect(null, mapDispatchToProps)(TransactionItem)