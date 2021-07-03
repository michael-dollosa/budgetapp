import TransactionLog from "../components/TransactionLog.component"
import { Fragment } from "react"
import { connect } from "react-redux"
import { Redirect } from 'react-router';
import Header from "../components/Header.component"
import "./Account.styles.scss"

const Account = ({ initalCheck }) => {

  const mainBody = (initalCheck > 0) 
  ? 
    <Fragment>
      <Header />
      <TransactionLog />
    </Fragment>
  : <Redirect to="/" />
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