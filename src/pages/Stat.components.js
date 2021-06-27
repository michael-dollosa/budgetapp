import { Fragment } from "react"
import { connect } from "react-redux"

const Stat = ({account}) => {

  let statBody = (account !== undefined) 
  ? <Fragment>
      <h3> {account.name} - {account.budget} </h3>
    </Fragment> 
  : null
  console.log("account",account)
  return(
    <div>
      <h1>Account Statistics</h1>
      { statBody }
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
export default connect(mapStateToProps)(Stat)