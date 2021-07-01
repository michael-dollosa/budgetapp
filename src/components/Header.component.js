import { Fragment } from "react"
import { connect } from "react-redux"
import { formatBudget } from "../helper/helper"
import "./Header.styles.scss"
const Header = ({account: {name, budget, currentBalance, totalExpense, totalIncome}}) => {

  return(
    <div className="header-container">
      <h1 className="header-title">{name}</h1>
      <div className="header-main">
        <section className="header-main-title">
          <label className="header-label">CURRENT BALANCE</label>
          <h1 className="header-budget">{formatBudget(currentBalance)}</h1>
        </section>
        <section className="header-main-stat">
          <h4>Budget: <span className="header-stat">{formatBudget(budget)}</span></h4>
          <h4>Total Expense: <span className="header-stat">{formatBudget(totalExpense)}</span></h4>
          <h4>Generated Income: <span className="header-stat">{formatBudget(totalIncome)}</span></h4>
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
    account: findCurrentAccount
  })
}
export default connect(mapStateToProps)(Header)