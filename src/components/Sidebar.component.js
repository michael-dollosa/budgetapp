import "./Sidebar.styles.scss"
import { connect } from "react-redux"
import { setBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { toggleAccountForm } from "../redux/modal/modal.actions"

import { BsPlusCircle } from "react-icons/bs";

const Sidebar = ({ accounts, setBudgetAccount, accountToggleFlag, toggleAccountForm }) => {
  //fn to set toggle state
  const handleSetToggleForm = () => {
    toggleAccountForm(!accountToggleFlag)
  }
  //to set current account to show
  const handleSetBudgetAccount = (account) => {
    setBudgetAccount(account)
  } 

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload()
  }

  //list of account
  const accountList = accounts.map((account) => {
    return(
      <h4 key={account.uniqueID} onClick={ () => handleSetBudgetAccount(account.uniqueID)}>{account.name}</h4>)
  })

  return(
    <nav>
      <main>
        <section class="nav-section">
          <h1>Budget App</h1>
          <label>ACCOUNTS</label>
          { accountList }
          <label>LOGS</label>
          <h4>Account Name</h4>
          <label>SETTINGS</label>
          <h4 onClick={ clearLocalStorage }>Clear Local Storage</h4>
        </section>
        <section class="nav-footer">
          <BsPlusCircle class="nav-icon" onClick={() => handleSetToggleForm()}/>
        </section>
      </main>
    </nav>
  )
}


const mapStateToProps = state => ({
  accounts: state.budgetAccount.accounts,
  accountToggleFlag: state.formToggle.addAccountModal
})

const mapDispatchToProps = dispatch => ({
  setBudgetAccount: currentAccountID => dispatch(setBudgetAccount(currentAccountID)),
  toggleAccountForm: flag => dispatch(toggleAccountForm(flag))
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)