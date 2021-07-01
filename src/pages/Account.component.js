import TransactionLog from "../components/TransactionLog.component"
import { Fragment } from "react"
import { connect } from "react-redux"
import Header from "../components/Header.component"
import "./Account.styles.scss"

const Account = ({ initalCheck }) => {

  const mainBody = (initalCheck > 0) 
  ? 
    <Fragment>
      <Header />
      <TransactionLog />
    </Fragment>
  : <h1>Null</h1>
  return(
    <main className="account-container-main">
      
      { mainBody }
    </main>
  )
}

const mapStateToProps = state => ({
  initalCheck: state.budgetAccount.accounts.length
})
export default connect(mapStateToProps)(Account)