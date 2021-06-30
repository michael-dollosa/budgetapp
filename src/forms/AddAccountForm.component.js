import { useState } from "react"
import { connect } from "react-redux"
import { addBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { toggleAccountForm } from "../redux/modal/modal.actions"
import { BsX } from "react-icons/bs";
import "./AddAccountForm.styles.scss"

const AddAccountForm = ({uniqueID, addBudgetAccount, accountToggleFlag, toggleAccountForm}) => {
  const [accountName, setAccountName] = useState("")
  const [budget, setBudget] = useState(0)

  const handleNameChange = (event) => {
    setAccountName(event.target.value)
  }

  const handleBudgetChange = (event) => {
    setBudget(event.target.value)
  }

  //fn to set toggle state
  const handleSetToggleForm = () => {
    toggleAccountForm(!accountToggleFlag)
  }

  const submitForm = (event) => {
    let newAccount = {
      name: accountName,
      budget: budget,
      transactions: [],
      uniqueID: uniqueID
    }

    addBudgetAccount(newAccount)
    toggleAccountForm(!accountToggleFlag)
    setAccountName("")
    setBudget(0)
    event.preventDefault()
  }
  return(
    <div className="modal-container">
      <section className="account-form-container">
        <div className="account-form">
          <div className="form-header">
            <h2 className="subheading">Create Budget Account</h2>
            <BsX className="icon-exit" onClick={() => handleSetToggleForm()}/>
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
  uniqueID: state.budgetAccount.counter,
  accountToggleFlag: state.formToggle.addAccountModal
})

const mapDispatchToProps = dispatch => ({
 addBudgetAccount: account => dispatch(addBudgetAccount(account)),
 toggleAccountForm: flag => dispatch(toggleAccountForm(flag))
})

export default connect(mapStatetoProps, mapDispatchToProps)(AddAccountForm)