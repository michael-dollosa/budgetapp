import { useState } from "react"
import { connect } from "react-redux"
import { addTransaction } from "../redux/budgetAccount/budgetAccount.actions"

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
   <div>
     Add Transaction Form
     <form onSubmit={event => submitForm(event)}>
       <label>Transaction Name</label>
       <input type="text" value={ transactionName } onChange={event => handleNameChange(event)} />
       <label>Cost</label>
       <input type="number" value={ cost } onChange={event => handleCostChange(event)} />
       <label>Date</label>
       <input type="date" onChange={event => handleDateChange(event)}/>
       <input type="submit" value="Add Transaction"/>
     </form>
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