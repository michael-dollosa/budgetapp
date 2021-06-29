import Account from "./pages/Account.component";
import Stat from "./pages/Stat.components";
import Transaction from "./pages/Transaction.component";
import Sidebar from "./components/Sidebar.component"
import "./App.styles.scss"
import AddAccountFormComponent from "./forms/AddAccountForm.component";
import AddTransactionFormComponent from "./forms/AddTransactionForm.component";

const App = () => {
  //main body
  // <Account />
  //   <Stat />
  //   <Transaction />
  return (
  <main>
    <Sidebar />
    
    <AddTransactionFormComponent />
  </main>
)}

export default App