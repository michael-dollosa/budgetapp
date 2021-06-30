import { Fragment } from "react"
import { connect } from "react-redux"
import "./Header.styles.scss"
const Header = ({account}) => {

  let statBody = (account !== undefined) 
  ? <Fragment>
      <h3> {account.name} - {account.budget} </h3>
    </Fragment> 
  : null
  console.log("account",account)
  return(
    <div class="header-container">
      <h1 class="header-title">{account.name}</h1>
      <div class="header-main">
        <section>
          <label class="header-label">BUDGET</label>
          <h1 class="header-budget">{account.budget}</h1>
        </section>
        <section class="header-main-stat">
          <h4>Initial Balance: <span class="header-stat">30,000</span></h4>
          <h4>Total Expense: <span class="header-stat">30,000</span></h4>
          <h4>Generated Income: <span class="header-stat">30,000</span></h4>
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