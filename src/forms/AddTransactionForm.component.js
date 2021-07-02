import { useState, useEffect, useRef } from "react"
import { connect } from "react-redux"
import { addTransaction } from "../redux/budgetAccount/budgetAccount.actions"
import { currentDate } from "../helper/helper"
import { toggleTransactionForm } from "../redux/modal/modal.actions"
import { BsX } from "react-icons/bs";
import "./AddTransactionForm.styles.scss"

const AddTransactionForm = ({transactionUniqueID, addTransaction, addTransactionToggle, toggleTransactionForm}) => {
  
  
  const [transactionName, setTransactionName] = useState(null)
  const [cost, setCost] = useState(null)
  const [date, setDate] = useState(currentDate)
  const [type, setType] = useState("expense")
  const refToParentElement = useRef()

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

  const handleTypeChange = (event) => {
    console.log("select type")
    setType(event.target.value)
  }

  const submitForm = (event) => {
   let parseDate = new Date(date)
   let stringDate = {
     year: parseDate.getFullYear(),
     day: parseDate.getDate(),
     month: parseDate.toLocaleString("default", { month: "long" })
   }

   let newTransaction = {
    type: type,
    name: transactionName,
    cost: type ==="expense" ? -Math.abs(Number(cost)) : Number(cost),
    date: stringDate,
    transactionID: transactionUniqueID
   }

   console.log("New Transaction",newTransaction)
   addTransaction(newTransaction)
   toggleTransactionForm(!addTransactionToggle)
   event.preventDefault()
  }

  return(
    <div className="modal-container" ref={refToParentElement}>
      <section className="transaction-form-container">
        <div className="transaction-form">
          <div className="form-header">
            <h2 className="subheading">Add Transaction</h2>
            <BsX className="icon-exit" onClick={ () => handleTransactionFormToggle() }/>
          </div>
          <form onSubmit={event => submitForm(event)}>
            <select id="transactionType" name="transactionType" value={type} onChange={ event => handleTypeChange(event) }>
              <option value="expense" >Expense</option>
              <option value="income" >Income</option>
            </select>
            <label>Name</label>
            <input 
              placeholder="Name of transaction"
              type="text" 
              value={ transactionName } 
              onChange={event => handleNameChange(event)} 
              required
            />
            <label>Cost</label>
            <input 
              placeholder="Price of transaction"
              type="number" 
              value={ cost } 
              onChange={event => handleCostChange(event)} 
              max="10000000"
              required
            />
            <label>Date</label>
            <input 
              type="date"
              value={ date } 
              onChange={event => handleDateChange(event)}
              required
            />
            <input type="submit" value="Add Transaction"/>
            </form>
        </div>
      </section>
    </div>
   
  )
}

const mapStatetoProps = state => ({
  //need to get the ID of the current account selected
  transactionUniqueID: state.budgetAccount.transactionCounter,
  addTransactionToggle: state.formToggle.addTransactionModal
})

const mapDispatchToProps = dispatch => ({
  addTransaction: transaction => dispatch(addTransaction(transaction)),
  toggleTransactionForm: flag => dispatch(toggleTransactionForm(flag))
})

export default connect(mapStatetoProps, mapDispatchToProps)(AddTransactionForm)