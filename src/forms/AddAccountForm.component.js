 import { useState } from "react"
 import { connect } from "react-redux"
import { addBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"

 const AddAccountForm = ({uniqueID, addBudgetAccount}) => {
   const [accountName, setAccountName] = useState("")
   const [budget, setBudget] = useState(0)

   const handleNameChange = (event) => {
      setAccountName(event.target.value)
   }

   const handleBudgetChange = (event) => {
     setBudget(event.target.value)
   }

   const submitForm = (event) => {
    let newAccount = {
      name: accountName,
      budget: budget,
      transactions: [],
      uniqueID: uniqueID
    }

    addBudgetAccount(newAccount)
    setAccountName("")
    setBudget(0)
    event.preventDefault()
   }
   return(
    <div>
      Add Account Form
      <form onSubmit={event => submitForm(event)}>
        <label>Account Name</label>
        <input type="text" value={ accountName } onChange={event => handleNameChange(event)} />
        <label>Alloted Budget</label>
        <input type="number" value={ budget } onChange={event => handleBudgetChange(event)} />
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
  addBudgetAccount: account => dispatch(addBudgetAccount(account))
 })

 export default connect(mapStatetoProps, mapDispatchToProps)(AddAccountForm)