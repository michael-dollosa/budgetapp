import { Fragment } from "react"
import { connect } from "react-redux"

const Header = ({account}) => {

  let statBody = (account !== undefined) 
  ? <Fragment>
      <h3> {account.name} - {account.budget} </h3>
    </Fragment> 
  : null
  console.log("account",account)
  return(
    <div>
      <h1>{account.name}</h1>
      <label>BUDGET</label>
      <h1>{account.budget}</h1>
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