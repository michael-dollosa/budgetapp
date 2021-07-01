import "./Sidebar.styles.scss"
import { connect } from "react-redux"
import { setBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { toggleAccountForm } from "../redux/modal/modal.actions"

import { BsPeople, BsPersonPlus, BsGear, BsCodeSlash } from "react-icons/bs";

const Sidebar = ({ accounts, setBudgetAccount, accountToggleFlag, toggleAccountForm }) => {
  //fn to set toggle state
  const handleSetToggleForm = () => {
    if(accounts.length < 6) {
      toggleAccountForm(!accountToggleFlag)
    }
    else{ console.log("buy premium")}
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

  const accountBody = (accounts.length === 0)
  ? <h4 className="nav-new-account" onClick={() => handleSetToggleForm()}>Add Account +</h4>
  : accountList

  return(
    <nav>
      <main>
        <section class="nav-section">
          <div className="nav-label">
            <img src="./budget-logo.png" alt="" />
            <h1>Budget App</h1>
          </div>
          
          <div className="nav-label">
            <BsPeople /> 
            <label>ACCOUNTS</label>
          </div>
          { accountBody }
          <div className="nav-label">
            <BsCodeSlash />
            <label>LOGS</label>
          </div>
          <h4>Account Name</h4>
          <div className="nav-label">
            <BsGear />
            <label>SETTINGS</label>
          </div>
          <h4 onClick={ clearLocalStorage }>Clear Local Storage</h4>
        </section>
        <section class="nav-footer">
          <BsPersonPlus class="nav-icon" onClick={() => handleSetToggleForm()}/>
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