import { useState } from "react"
import { history, useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { addBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { toggleAccountForm, toggleSidebar } from "../redux/modal/modal.actions"
import { BsX } from "react-icons/bs";
import "./AddAccountForm.styles.scss"

const AddAccountForm = ({ uniqueID, addBudgetAccount, accountToggleFlag, toggleAccountForm, toggleSidebar, toggleSidebarFlag}) => {
  const [accountName, setAccountName] = useState("")
  const [budget, setBudget] = useState(null)
  let history = useHistory()
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
      budget: Math.abs(Number(budget)),
      transactions: [],
      uniqueID: uniqueID,
      currentBalance: Math.abs(Number(budget)),
      totalExpense: 0,
      totalIncome: 0,
    }
    
    addBudgetAccount(newAccount)
    toggleAccountForm(!accountToggleFlag)
    history.push(`/account/${uniqueID}`)
    toggleSidebar(false)
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
            <input 
              type="text" 
              placeholder="Name of your budget area"
              value={ accountName } 
              onChange={event => handleNameChange(event)} 
              maxLength="20"
              required
            />
            <label>Budget</label>
            <input 
              type="number" 
              placeholder="Allocate budget"
              value={ budget } 
              onChange={event => handleBudgetChange(event)} 
              min="1"
              max="10000000"
              required
            />
            <input 
              type="submit" 
              value="Add Account"
            />
          </form>
        </div>
      </section>
    </div>
  )
 }

const mapStatetoProps = state => ({
  //need to get the current uniqueID to add as identifier for each new account
  uniqueID: state.budgetAccount.counter,
  accountToggleFlag: state.formToggle.addAccountModal,
  toggleSidebarFlag: state.formToggle.sidebarModal
})

const mapDispatchToProps = dispatch => ({
 addBudgetAccount: account => dispatch(addBudgetAccount(account)),
 toggleAccountForm: flag => dispatch(toggleAccountForm(flag)),
 toggleSidebar: flag => dispatch(toggleSidebar(flag))
})

export default connect(mapStatetoProps, mapDispatchToProps)(AddAccountForm)