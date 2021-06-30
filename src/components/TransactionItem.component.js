import "./TransactionItem.styles.scss"
import { BsTrash } from "react-icons/bs";

const TransactionItem = () => {

  return(
    <div className="item-container">
      <section className="item-detail">
        <h4>Transaction Item</h4>
        <label>March 18, 2021</label>
      </section>
      <section className="item-cost">
        <h3>30,000</h3>
      </section>
      <BsTrash className="item-icon"/>
         
    </div>
  )
}

export default TransactionItem