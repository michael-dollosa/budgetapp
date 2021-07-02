import "./ReleaseNotes.styles.scss"
import { BsForwardFill } from "react-icons/bs";


const ReleaseNotes = () => {

  return(
    <section className="releasenotes-container">
      <h1>Developer Notes</h1>
      <h3>Data Storage</h3>
        <p><BsForwardFill/> Data are stored in your browser’s local storage. But do not worry! If you wish to delete the data, just click the Clear Local Storage located on the sidebar.</p>
      <h3>Account Creation</h3>
        <p><BsForwardFill/> Start creating your account by clicking the Add Account on the sidebar or clicking the add account button at the bottom right side.</p>
        <p><BsForwardFill/> The maximum budget that you can allocate per account is Php 10,000,000.</p>
        <p><BsForwardFill/> Only 6 accounts are allowed to be created. Kindly delete previous accounts if you need to add a new one.</p>
      <h3>Create Transaction</h3>
        <p><BsForwardFill/> The maximum account per transaction is Php 10,000,000.</p>
        <p><BsForwardFill/> User may choose transaction type - Income or Expense.</p>
        <p><BsForwardFill/> Please take note that transactions are final for security purposes. If you wish to modify a certain transaction, you may delete the old one and just create a new transaction.</p>
    </section>
  )
}



export default ReleaseNotes