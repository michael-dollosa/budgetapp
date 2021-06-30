import Account from "./pages/Account.component";
import Stat from "./pages/Stat.components";
import Transaction from "./pages/Transaction.component";
import Sidebar from "./components/Sidebar.component"
import { connect } from "react-redux"
import "./App.styles.scss"
import AddAccountFormComponent from "./forms/AddAccountForm.component";
import AddTransactionFormComponent from "./forms/AddTransactionForm.component";
import Header from "./components/Header.component";
import TransactionLog from "./components/TransactionLog.component";

const App = ({ accountToggleFlag, transactionToggleFlag }) => {
  //main body
  // <Account />
  //   <Stat />
  //   <Transaction />
  return (
  <main>
    <Sidebar />
    {accountToggleFlag ? <AddAccountFormComponent /> : null }
    {transactionToggleFlag ? <AddTransactionFormComponent /> : null }
    <Header />
    <TransactionLog />
    
  </main>
)}

const mapStateToProps = state => ({
  accounts: state.budgetAccount.accounts,
  accountToggleFlag: state.formToggle.addAccountModal,
  transactionToggleFlag: state.formToggle.addTransactionModal
})


export default connect(mapStateToProps)(App)
