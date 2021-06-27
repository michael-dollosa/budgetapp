import Account from "./pages/Account.component";
import Stat from "./pages/Stat.components";
import Transaction from "./pages/Transaction.component";
import "./App.styles.scss"

const App = () => (
  <main>
    <Account />
    <Stat />
    <Transaction />
  </main>
)

export default App