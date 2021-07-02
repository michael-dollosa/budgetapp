import Account from "./pages/Account.component";
import Sidebar from "./components/Sidebar.component"
import ReleaseNotes from "./pages/ReleaseNotes.component";
import { connect } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { setBudgetAccount } from "./redux/budgetAccount/budgetAccount.actions"

import AddAccountFormComponent from "./forms/AddAccountForm.component";
import AddTransactionFormComponent from "./forms/AddTransactionForm.component";
import EditAccountFormComponent from "./forms/EditAccountForm.component";
import "./App.styles.scss"
const App = ({ accountToggleFlag, transactionToggleFlag, editAccountToggleFlag, setBudgetAccount }) => {
  
  return (
    <Router>
      <main className="container-main">
        {accountToggleFlag ? <AddAccountFormComponent /> : null }
        {transactionToggleFlag ? <AddTransactionFormComponent /> : null }
        {editAccountToggleFlag ? <EditAccountFormComponent /> : null }
        <Sidebar />
        <section className="container-account">
          <Switch>
            <Route path="/" exact component={ReleaseNotes} />
            <Route path="/account/*" component={Account} />
          </Switch>
        </section>
      </main>
    </Router>
  
)}

const mapStateToProps = state => ({
  accounts: state.budgetAccount.accounts,
  accountToggleFlag: state.formToggle.addAccountModal,
  editAccountToggleFlag: state.formToggle.editAccountModal,
  transactionToggleFlag: state.formToggle.addTransactionModal
})

const mapDispatchToProps = dispatch => ({
  setBudgetAccount: currentAccountID => dispatch(setBudgetAccount(currentAccountID)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)
