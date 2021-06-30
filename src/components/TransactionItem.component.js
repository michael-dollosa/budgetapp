import "./TransactionItem.styles.scss"
import { BsTrash } from "react-icons/bs";

const TransactionItem = ({key, transaction}) => {
  const {name, cost, date} = transaction

  return(
    <div className="item-container">
      <section className="item-detail">
        <h4>{ name }</h4>
        <label>{ date }</label>
      </section>
      <section className="item-cost">
        <h3>{ cost }</h3>
      </section>
      <BsTrash className="item-icon"/>
    </div>
  )
}

export default TransactionItem