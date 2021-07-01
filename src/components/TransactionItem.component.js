import "./TransactionItem.styles.scss"
import { connect } from "react-redux"
import { deleteTransaction } from "../redux/budgetAccount/budgetAccount.actions"
import { formatCost } from "../helper/helper";
import { BsTrash } from "react-icons/bs";

const TransactionItem = ({key, transaction, deleteTransaction}) => {
  const {type, name, cost, date, transactionID} = transaction

  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.toLocaleString("default", { month: "long" })

  const handleDeleteTransaction = (id) => {
    deleteTransaction(id)
  }

  let incomeColorCode = (type === "expense") ? "expense-color" : "income-color"
  return(
    <div className={`item-container`}>
      <section className="item-detail">
        <h4>{ name }</h4>
        <label>{ `${month} ${day}, ${year}` }</label>
      </section>
      <section className="item-cost">
        <h3
          className={incomeColorCode}        
        >{ formatCost(type, cost) }</h3>
      </section>
      <BsTrash 
        className="item-icon"
        onClick={ () => handleDeleteTransaction(transactionID)} 
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTransaction: id => dispatch(deleteTransaction(id))
})

export default connect(null, mapDispatchToProps)(TransactionItem)