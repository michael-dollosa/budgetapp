export const testAccounts = [
  {
    name: "Test Account 1",
    budget: 30000,
    transactions: [],
    uniqueID: 9000,
    currentBalance: 0,
    totalExpense: 0,
    totalIncome: 0,
  },
  {
    name: "Test Account 2",
    budget: 15000,
    transactions: [
      {
        type: "expense",
        name: "Transaction 1",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90000
      },
      {
        type: "expense",
        name: "Transaction 2",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90001
        
      },
      {
        type: "expense",
        name: "Transaction 3",
        cost: 1231231231232,
        date: new Date(2021, 2, 28),
        transactionID: 90002
      },
      {
        type: "income",
        name: "Transaction 4",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90003
      },
      {
        type: "income",
        name: "Transaction 1",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90004
      },
      {
        type: "income",
        name: "Transaction 2",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90005
      },
      {
        type: "expense",
        name: "Transaction 3",
        cost: 1231231231232,
        date: new Date(2021, 2, 28),
        transactionID: 90006
      },
      {
        type: "income",
        name: "Transaction 4",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90007
      },
      {
        type: "income",
        name: "Transaction 1",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90008
      },
      {
        type: "expense",
        name: "Transaction 2",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90009
      },
      {
        type: "income",
        name: "Transaction 3",
        cost: 1231231231232,
        date: new Date(2021, 2, 28),
        transactionID: 90010
      },
      {
        type: "income",
        name: "Transaction 4",
        cost: 30000,
        date: new Date(2021, 2, 28),
        transactionID: 90011
      },
    ],
    uniqueID: 9001,
    currentBalance: 0,
    totalExpense: 0,
    totalIncome: 0,
  },
  {
    name: "Test Account 3",
    budget: 10000,
    transactions: [],
    uniqueID: 9002,
    currentBalance: 0,
    totalExpense: 0,
    totalIncome: 0,
  },
]