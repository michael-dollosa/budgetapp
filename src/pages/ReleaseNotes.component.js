import "./ReleaseNotes.styles.scss"
import { BsForwardFill } from "react-icons/bs";


const ReleaseNotes = () => {

  return(
    <section className="releasenotes-container">
      <h1>Release Notes</h1>
      <h3>Data Storage</h3>
        <p><BsForwardFill className="notes-icon"/> Data are stored in your browser’s local storage. If you wish to clear or restart the data, just click the Clear Local Storage located on the sidebar. Or, you may press F12 -> On the top bar, choose Application -> On the left-hand side, you will see Local Storage -> Right click the item below -> Choose clear.</p>
      <h3>Account Creation</h3>
        <p><BsForwardFill className="notes-icon"/> Start creating your account by clicking the Add Account on the sidebar or clicking the add account button at the bottom right side.</p>
        <p><BsForwardFill className="notes-icon"/> The maximum budget that you can allocate per account is Php 10,000,000.</p> 
        <p><BsForwardFill className="notes-icon"/> Only 6 accounts are allowed to be created. Kindly delete previous accounts if you need to add a new one.</p>
      <h3>Create Transaction</h3>
        <p><BsForwardFill className="notes-icon"/> The maximum account per transaction is Php 10,000,000.</p>
        <p><BsForwardFill className="notes-icon"/> User may choose transaction type - Income or Expense.</p>
        <p><BsForwardFill className="notes-icon"/> Please take note that transactions are final for security purposes. If you wish to modify a certain transaction, you may delete the old one and just create a new transaction.</p>
    </section>
  )
}



export default ReleaseNotes