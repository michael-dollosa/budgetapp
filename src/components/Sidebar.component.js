import "./Sidebar.styles.scss"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { setBudgetAccount } from "../redux/budgetAccount/budgetAccount.actions"
import { toggleAccountForm, toggleSidebar } from "../redux/modal/modal.actions"

import { BsPeople, BsGear, BsCodeSlash, BsLayoutTextSidebarReverse } from "react-icons/bs";

const Sidebar = ({ currentID, accounts, setBudgetAccount, accountToggleFlag, toggleSidebarFlag, toggleSidebar, toggleAccountForm }) => {

  const [currentBrowserWidth, setcurrentBrowserWidth] = useState(window.innerWidth);
  const mobilebreakPoint = 720;

  //using useEffect, create a listener everytime browser encouters a breakpoint
  useEffect(() => {
    //set fn expression to set state of current browser width
    const handleWindowResize = () => setcurrentBrowserWidth(window.innerWidth);
    //add listener
    window.addEventListener("resize", handleWindowResize);
    //cleanup
    return () => window.removeEventListener("resize", handleWindowResize);

    //setup on mount
  },[]);

  useEffect(() => {
    if(currentBrowserWidth > mobilebreakPoint) {
      toggleSidebar(false)
    }
    // console.log("flag")
  }, [currentBrowserWidth])

  //fn to set toggle state
  const handleSetToggleForm = () => {
    if(accounts.length < 6) {
      toggleAccountForm(!accountToggleFlag)
    }
    else{ console.log("buy premium")}
  }

  //to set current account to show
  const handleSetBudgetAccount = (account) => {
    setBudgetAccount(account)
  } 

  //
  const handleAccountItemClick = (account) => {
    handleSetBudgetAccount(account)
    toggleSidebar(false)
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    toggleSidebar(false)
    window.location.reload()
  }

  //list of account
  const accountList = accounts.map((account) => {
    return(
        <h4 
          key={account.uniqueID} 
          onClick={ () => handleAccountItemClick(account.uniqueID)}
          // className = {account.uniqueID === currentID ? "selected" : null}
        >
          <NavLink to="/" exact style={{ color: 'inherit', textDecoration: 'none'}} activeClassName="selected">
          {account.name}
          </NavLink>
        </h4>
    )
  })

  const handleToggleSidebar = () => {
    toggleSidebar(!toggleSidebarFlag)
  }

  //setup variable to controll nav class
  const sideBarHiddenFlagClass = 
    currentBrowserWidth > mobilebreakPoint 
    ? ""
    : toggleSidebarFlag ? "" : "display-none"
  
  return(
    <section className="sidebar-toggle">
      <div className="sidebar-toggle-icon">
        <BsLayoutTextSidebarReverse className="toggle-icon" onClick={handleToggleSidebar}/>
      </div>
      
      <nav className={sideBarHiddenFlagClass}>
        <main>
          <section className="nav-section">
            <div className="nav-label">
              <img src="./budget-logo.png" alt="" />
              <h1>Budget App</h1>
            </div>
            
          <div className="nav-label">
              <BsPeople /> 
              <label>ACCOUNTS</label>
            </div>
            { accountList }
            {
              accounts.length === 6
              ? null
              : <h4 className="nav-new-account" onClick={() => handleSetToggleForm()}>Add Account +</h4>
            }
            
            <div className="nav-label">
              <BsCodeSlash />
              <label>NOTES</label>
            </div>
            <h4>
              <NavLink to="/notes" exact style={{ color: 'inherit', textDecoration: 'none'}} activeClassName="selected">
                Release Notes
              </NavLink>
            </h4>
            <div className="nav-label">
              <BsGear />
              <label>SETTINGS</label>
            </div>
            <h4 onClick={ clearLocalStorage }>Clear Local Storage</h4>
          </section>
        </main>
      </nav>
    </section>
  )
}


const mapStateToProps = state => ({
  currentID: state.budgetAccount.currentAccountID,
  accounts: state.budgetAccount.accounts,
  accountToggleFlag: state.formToggle.addAccountModal,
  toggleSidebarFlag: state.formToggle.sidebarModal
})

const mapDispatchToProps = dispatch => ({
  setBudgetAccount: currentAccountID => dispatch(setBudgetAccount(currentAccountID)),
  toggleAccountForm: flag => dispatch(toggleAccountForm(flag)),
  toggleSidebar: flag => dispatch(toggleSidebar(flag))
})
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)