import { useState } from "react"
import { connect } from "react-redux"
import { addTransaction } from "../redux/budgetAccount/budgetAccount.actions"
import { toggleTransactionForm } from "../redux/modal/modal.actions"
import { BsX } from "react-icons/bs";
import "./AddTransactionForm.styles.scss"

const AddTransactionForm = ({uniqueID, addTransaction, addTransactionToggle, toggleTransactionForm}) => {
  const [transactionName, setTransactionName] = useState("")
  const [cost, setCost] = useState(0)
  const [date, setDate] = useState("")
  
  const handleTransactionFormToggle = () => {
    toggleTransactionForm(!addTransactionToggle)
  }

  const handleNameChange = (event) => {
    setTransactionName(event.target.value)
  }

  const handleCostChange = (event) => {
    setCost(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const submitForm = (event) => {
   
   let newTransaction = {
    name: transactionName,
    cost: cost,
    date: date
   }
   console.log(newTransaction)
   addTransaction(newTransaction)
   toggleTransactionForm(!addTransactionToggle)
   event.preventDefault()
  }
  return(
    <div className="modal-container">
      <section className="transaction-form-container">
        <div className="transaction-form">
          <div className="form-header">
            <h2 className="subheading">Add Transaction</h2>
            <BsX className="icon-exit" onClick={ () => handleTransactionFormToggle() }/>
          </div>
          <form onSubmit={event => submitForm(event)}>
            <label>Name</label>
            <input type="text" value={ transactionName } onChange={event => handleNameChange(event)} />
            <label>Cost</label>
            <input type="number" value={ cost } onChange={event => handleCostChange(event)} />
            <label>Date</label>
            <input type="date" onChange={event => handleDateChange(event)}/>
            <input type="submit" value="Add Transaction"/>
            </form>
        </div>
      </section>
    </div>
   
  )
}

const mapStatetoProps = state => ({
  //need to get the ID of the current account selected
  uniqueID: state.budgetAccount.currentAccountID,
  addTransactionToggle: state.formToggle.addTransactionModal
})

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction)),
  toggleTransactionForm: flag => dispatch(toggleTransactionForm(flag))
})

export default connect(mapStatetoProps, mapDispatchToProps)(AddTransactionForm)