import { Fragment } from "react"
import { connect } from "react-redux"
import { formatBudget } from "../helper/helper"
import "./Header.styles.scss"
const Header = ({account}) => {

  let statBody = (account !== undefined) 
  ? <Fragment>
      <h3> {account.name} - {account.budget} </h3>
    </Fragment> 
  : null
  console.log("account",account)
  return(
    <div className="header-container">
      <h1 className="header-title">{account.name}</h1>
      <div className="header-main">
        <section className="header-main-title">
          <label className="header-label">BUDGET</label>
          <h1 className="header-budget">{formatBudget(account.budget)}</h1>
        </section>
        <section className="header-main-stat">
          <h4>Initial Balance: <span className="header-stat">30,000</span></h4>
          <h4>Total Expense: <span className="header-stat">30,000</span></h4>
          <h4>Generated Income: <span className="header-stat">30,000</span></h4>
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