import { Redirect } from "react-router-dom"

export const formatBudget = (number) => {
  return `₱ ${Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

// export const formatCost= (type, number) => {
//   if(number === 0) return `₱ ${Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
//   return type === "expense"
//   ? `- ₱ ${Math.abs(Number(number)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
//   : `₱ ${Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
// }

export const formatCost= (type, number) => {
  if(number === 0) return `₱ ${Number(number).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  return type === "expense"
  ? `- ₱ ${Math.abs(Number(number)).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  : `₱ ${Number(number).toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

export const currentDate = new Date().toISOString().substr(0, 10);

export const redirectToPath = (url) => {
  return <Redirect to={url} />
}