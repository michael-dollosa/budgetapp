import Account from "./pages/Account.component";
import Stat from "./pages/Stat.components";
import Transaction from "./pages/Transaction.component";
import Sidebar from "./components/Sidebar.component"
import { connect } from "react-redux"
import "./App.styles.scss"
import AddAccountFormComponent from "./forms/AddAccountForm.component";
import AddTransactionFormComponent from "./forms/AddTransactionForm.component";

const App = ({ accountToggleFlag }) => {
  //main body
  // <Account />
  //   <Stat />
  //   <Transaction />
  return (
  <main>
    <Sidebar />
    {accountToggleFlag ? <AddAccountFormComponent /> : null }
  </main>
)}

const mapStateToProps = state => ({
  accounts: state.budgetAccount.accounts,
  accountToggleFlag: state.formToggle.addAccountModal
})


export default connect(mapStateToProps)(App)
