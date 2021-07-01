import Account from "./pages/Account.component";
import Sidebar from "./components/Sidebar.component"
import { connect } from "react-redux"
import "./App.styles.scss"
import AddAccountFormComponent from "./forms/AddAccountForm.component";
import AddTransactionFormComponent from "./forms/AddTransactionForm.component";
import EditAccountFormComponent from "./forms/EditAccountForm.component";

const App = ({ accountToggleFlag, transactionToggleFlag, editAccountToggleFlag, accounts }) => {

  return (
  <main className="container-main">
    {accountToggleFlag ? <AddAccountFormComponent /> : null }
    {transactionToggleFlag ? <AddTransactionFormComponent /> : null }
    {editAccountToggleFlag ? <EditAccountFormComponent /> : null }
    <Sidebar />
    <section className="container-account">
      <Account />
    </section>

    

  </main>
)}

const mapStateToProps = state => ({
  accounts: state.budgetAccount.accounts,
  accountToggleFlag: state.formToggle.addAccountModal,
  editAccountToggleFlag: state.formToggle.editAccountModal,
  transactionToggleFlag: state.formToggle.addTransactionModal
})


export default connect(mapStateToProps)(App)
