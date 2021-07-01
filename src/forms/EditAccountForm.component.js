import { useState } from "react"
import { connect } from "react-redux"
import { deleteBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { toggleEditAccountForm } from "../redux/modal/modal.actions"
import { BsX } from "react-icons/bs";
import "./AddAccountForm.styles.scss"

const EditAccountForm = ({currentAccountID, deleteBudgetAccount, editAccountToggleFlag, toggleEditAccountForm}) => {
  const [accountName, setAccountName] = useState(null)
  const [budget, setBudget] = useState(null)

  const handleNameChange = (event) => {
    setAccountName(event.target.value)
  }

  const handleBudgetChange = (event) => {
    setBudget(event.target.value)
  }

  //fn to set toggle state
  const handleSetToggleForm = () => {
    toggleEditAccountForm(!editAccountToggleFlag)
  }

  const handleDeleteAccount = (id) => {
    deleteBudgetAccount(id)
    toggleEditAccountForm(!editAccountToggleFlag)
  }

  const submitForm = (event) => {
    let newAccount = {
      name: accountName,
      budget: Math.abs(Number(budget)),
      transactions: [],
      uniqueID: currentAccountID,
      currentBalance: Math.abs(Number(budget)),
      totalExpense: 0,
      totalIncome: 0,
    }

 
    toggleEditAccountForm(!editAccountToggleFlag)
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
              required
            />
            <label>Budget</label>
            <input 
              type="number" 
              placeholder="Allocate budget"
              value={ budget } 
              onChange={event => handleBudgetChange(event)} 
              required
            />
            <input 
              type="submit" 
              value="Add Account"
            />
          </form>
          <button onClick={() => handleDeleteAccount(currentAccountID)}>DELETE ACCOUNT</button>
        </div>
      </section>
    </div>
  )
 }

const mapStatetoProps = state => {
  //setup first logic to find current account based on uniqueID
  const id = state.budgetAccount.currentAccountID
  // const id = (state.budgetAccount.accounts.length > 0) ? state.budgetAccount.currentID : null
  // const currentAccount = state.budgetAccount.accounts.find(acc => acc.uniqueID === id )

  return({
    currentAccountID: id,
    editAccountToggleFlag: state.formToggle.editAccountModal
  })
}

const mapDispatchToProps = dispatch => ({
  deleteBudgetAccount: id => dispatch(deleteBudgetAccount(id)),
  toggleEditAccountForm: flag => dispatch(toggleEditAccountForm(flag))
})

export default connect(mapStatetoProps, mapDispatchToProps)(EditAccountForm)