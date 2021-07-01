import { connect } from "react-redux"
import { Fragment } from "react"
import { formatBudget, formatCost } from "../helper/helper"
import { toggleEditAccountForm } from "../redux/modal/modal.actions"
import { FaRegEdit } from "react-icons/fa";
import "./Header.styles.scss"
const Header = ({account, editAccountToggleFlag, toggleEditAccountForm }) => {

  //fn to set toggle state
  const handleSetToggleForm = () => {
    toggleEditAccountForm(!editAccountToggleFlag)
  }

  return(
    <div className="header-container">
      <div className="header-name">
        <h1 className="header-title">{account.name}</h1>
        <FaRegEdit className="header-icon" onClick={handleSetToggleForm}/>
      </div>
      <div className="header-main">
        <section className="header-main-title">
          <label className="header-label">CURRENT BALANCE</label>
          <h1 className="header-budget">{formatBudget(account.currentBalance)}</h1>
        </section>
        <section className="header-main-stat">
          <h4><span className="header-stat budget">Budget:</span> {formatBudget(account.budget)}</h4>
          <h4><span className="header-stat expense">Total Expense:</span> {formatCost("expense",account.totalExpense)}</h4>
          <h4><span className="header-stat income">Generated Income:</span> {formatCost("income",account.totalIncome)}</h4>
        </section>
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  //setup first logic to find current account based on uniqueID
  const id = state.budgetAccount.currentAccountID
  const findCurrentAccount = state.budgetAccount.accounts.find(acc => acc.uniqueID === id )
  return({
    account: findCurrentAccount,
    editAccountToggleFlag: state.formToggle.editAccountModal
  })
}

const mapDispatchToProps = dispatch => ({
  toggleEditAccountForm: flag => dispatch(toggleEditAccountForm(flag))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)