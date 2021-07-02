import { useState } from "react"
import { connect } from "react-redux"
import { deleteBudgetAccount, modifyBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { toggleEditAccountForm } from "../redux/modal/modal.actions"
import { BsX } from "react-icons/bs";
import "./AddAccountForm.styles.scss"

const EditAccountForm = ({ currentAccount, currentAccountID, deleteBudgetAccount, modifyBudgetAccount, editAccountToggleFlag, toggleEditAccountForm}) => {
  const { name, budget } = currentAccount
  
  const [accountName, setAccountName] = useState(name)
  const [accountBudget, setBudget] = useState(budget)

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
    let modifiedAccount = {
      name: accountName,
      budget: Math.abs(Number(accountBudget))
    }
    modifyBudgetAccount(modifiedAccount)
    toggleEditAccountForm(!editAccountToggleFlag)
    event.preventDefault()
  }
  return(
    <div className="modal-container">
      <section className="account-form-container">
        <div className="account-form">
          <div className="form-header">
            <h2 className="subheading">Modify Budget Account</h2>
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
              value={ accountBudget } 
              onChange={event => handleBudgetChange(event)} 
              min="1"
              max="10000000"
              required
            />
            <input 
              type="submit" 
              value="Modify Account"
            />
          </form>
          <button onClick={() => handleDeleteAccount(currentAccountID)}>Delete Account</button>
        </div>
      </section>
    </div>
  )
 }

const mapStatetoProps = state => {
  //setup first logic to find current account based on uniqueID
  const id = state.budgetAccount.currentAccountID
  // const id = (state.budgetAccount.accounts.length > 0) ? state.budgetAccount.currentID : null
  const currentAccount = state.budgetAccount.accounts.find(acc => acc.uniqueID === id )

  return({
    currentAccountID: id,
    currentAccount: currentAccount,
    editAccountToggleFlag: state.formToggle.editAccountModal
  })
}

const mapDispatchToProps = dispatch => ({
  deleteBudgetAccount: id => dispatch(deleteBudgetAccount(id)),
  modifyBudgetAccount: modifiedData => dispatch(modifyBudgetAccount(modifiedData)),
  toggleEditAccountForm: flag => dispatch(toggleEditAccountForm(flag))
})

export default connect(mapStatetoProps, mapDispatchToProps)(EditAccountForm)