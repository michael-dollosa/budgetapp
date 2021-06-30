export const formatBudget = (number) => {
  return `₱ ${Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

export const formatCost= (type, number) => {
  return type === "expense"
  ? `- ₱ ${Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  : `₱ ${Number(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}