import { connect } from "react-redux"
import AddAcountForm from "../forms/AddAccountForm.component"
import { setBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
const Account = ({ accounts, setBudgetAccount }) => {
  const handleSetBudgetAccount = (account) => {
    setBudgetAccount(account)
  } 
  return(
    <div>
      <h1>My Accounts</h1>
      <AddAcountForm />

      {
        accounts.map((account) => {
            return(
              <h3 key={account.uniqueID} onClick={ () => handleSetBudgetAccount(account.uniqueID)}> {account.name} - {account.budget} </h3>)
        })
      }
      
    </div>
  )
}

const mapStateToProps = state => ({
  accounts: state.budgetAccount.accounts
})

const mapDispatchToProps = dispatch => ({
  setBudgetAccount: currentAccountID => dispatch(setBudgetAccount(currentAccountID))
})
export default connect(mapStateToProps, mapDispatchToProps)(Account)