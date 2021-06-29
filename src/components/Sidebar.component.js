import "./Sidebar.styles.scss"
import { useState } from "react"
import { connect } from "react-redux"
import { setBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { BsPlusCircle } from "react-icons/bs";

const Sidebar = ({ accounts, setBudgetAccount }) => {

  //to set current account to show
  const handleSetBudgetAccount = (account) => {
    setBudgetAccount(account)
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
        </section>

        <section class="nav-footer">
          <BsPlusCircle style={{ color: "white"}} />
        </section>
      </main>
    </nav>
  )
}


const mapStateToProps = state => ({
  accounts: state.budgetAccount.accounts
})

const mapDispatchToProps = dispatch => ({
  setBudgetAccount: currentAccountID => dispatch(setBudgetAccount(currentAccountID))
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)