import TransactionLog from "../components/TransactionLog.component"
import Header from "../components/Header.component"
import "./Account.styles.scss"

const Account = () => {

  return(
    <main className="account-container-main">
      <Header />
      <TransactionLog />
    </main>
  )
}

export default Account