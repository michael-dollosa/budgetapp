import { useState } from "react"
import { connect } from "react-redux"
import { addBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { BsX } from "react-icons/bs";
import "./AddAccountForm.styles.scss"

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
    <div className="modal-container">
      <section class="account-form-container">
        <div class="account-form">
          <div class="form-header">
            <h2 class="subheading">Create Budget Account</h2>
            <BsX class="icon-exit"/>
          </div>
          <form onSubmit={event => submitForm(event)}>
            <label>Name</label>
            <input type="text" value={ accountName } onChange={event => handleNameChange(event)} />
            <label>Budget</label>
            <input type="number" value={ budget } onChange={event => handleBudgetChange(event)} />
            <input type="submit" value="Add Account"/>
          </form>
        </div>
      </section>
    </div>
  )
 }

const mapStatetoProps = state => ({
  //need to get the current uniqueID to add as identifier for each new account
  uniqueID: state.budgetAccount.counter
})

const mapDispatchToProps = dispatch => ({
 addBudgetAccount: account => dispatch(addBudgetAccount(account))
})

export default connect(mapStatetoProps, mapDispatchToProps)(AddAccountForm)