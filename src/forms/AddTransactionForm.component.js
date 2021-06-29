import { useState } from "react"
import { connect } from "react-redux"
import { addTransaction } from "../redux/budgetAccount/budgetAccount.actions"
import { BsX } from "react-icons/bs";
import "./AddTransactionForm.styles.scss"

const AddTransactionForm = ({uniqueID, addTransaction}) => {
  const [transactionName, setTransactionName] = useState("")
  const [cost, setCost] = useState(0)
  const [date, setDate] = useState("")
  
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

   event.preventDefault()
  }
  return(
    <div className="modal-container">
      <section className="transaction-form-container">
        <div className="transaction-form">
          <div className="form-header">
            <h2 class="subheading">Add Transaction</h2>
            <BsX class="icon-exit"/>
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
  uniqueID: state.budgetAccount.currentAccountID
})

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction))
})

export default connect(mapStatetoProps, mapDispatchToProps)(AddTransactionForm)