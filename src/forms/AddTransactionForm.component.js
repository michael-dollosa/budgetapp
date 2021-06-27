import { useState } from "react"
import { connect } from "react-redux"


const AddTransactionForm = ({uniqueID, addBudgetAccount}) => {
  const [accountName, setAccountName] = useState("")
  const [budget, setBudget] = useState(0)
  const [date, setDate] = useState("")
  
  const handleNameChange = (event) => {
     setAccountName(event.target.value)
  }

  const handleCostChange = (event) => {
    setBudget(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const submitForm = (event) => {
   let newTransaction = {
    //  name: accountName,
    //  budget: budget,
    //  transactions: [],
    //  uniqueID: uniqueID
   }

  //  setAccountName("")
  //  setBudget(0)
   event.preventDefault()
  }
  return(
   <div>
     Add Transaction Form
     <form onSubmit={event => submitForm(event)}>
       <label>Transaction Name</label>
       <input type="text" value={ accountName } onChange={event => handleNameChange(event)} />
       <label>Cost</label>
       <input type="number" value={ budget } onChange={event => handleCostChange(event)} />
       <label>Date</label>
       <input type="date" onChange={event => handleDateChange(event)}/>
       <input type="submit" value="Add Account"/>
     </form>
   </div>
  )
}

const mapStatetoProps = state => ({
  //need to get the current uniqueID to add as identifier for each new account
  uniqueID: state.budgetAccount.uniqueID
})

const mapDispatchToProps = dispatch => ({
 
})

export default connect(mapStatetoProps, mapDispatchToProps)(AddTransactionForm)